import { Component } from 'react';
import './css/index.css';
import axios from 'axios'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// Import API Key
import FLICKR from './config';

// Components
import MainNav from './components/MainNav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import PageNotFound from './components/PageNotFound';
class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }

  fetchPhotos = (q = 'pony') => {
    const API_KEY = FLICKR.key;
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${q}&per_page=24&sort=relevance&format=json&nojsoncallback=1`;
    axios.get(url)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo,
          loading: false
        })
      })
      .then(this.setState({
        // Set loading to true for next request after the data has loaded 
        loading: true
      }))
      .catch(err => console.log("There was an error fetching data:", err.message))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <h1 className="logo"><Link to="/">ImageSearchr</Link></h1>
        <Route render={({history}) => <SearchForm history={history} onSearch={this.fetchPhotos} />} />
          <MainNav />
          <Switch>
            <Route exact path="/" />
            {/* Handle queries to API via url routes */}
            <Route exact path="/q/:query" render={(props) => <PhotoContainer {...props} data={this.state.photos} isLoading={this.state.loading} fetch={this.fetchPhotos} />} />
            <Route path="/q/:query/:id" render={(props) => <PhotoContainer {...props} data={this.state.photos} isLoading={this.state.loading} fetch={this.fetchPhotos} />} />
            {/* Handle 404 requests */}
            <Route component={PageNotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
