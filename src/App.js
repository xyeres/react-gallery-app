import { Component } from 'react';
import './css/index.css';
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import API Key
import FLICKR_API from './config';

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
    const API_KEY = FLICKR_API.key;
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${q}&per_page=21&format=json&nojsoncallback=1`;
    axios.get(url)
      .then(res => {
        console.log(res.data.photos.photo)
        this.setState({
          photos: res.data.photos.photo,
          loading: false
        })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Route render={({history}) => <SearchForm history={history} onSearch={this.fetchPhotos} />} />
          <MainNav />
          <Switch>
            <Route exact path="/" />
            <Route path="/q/:query" render={(props) => <PhotoContainer {...props} data={this.state.photos} fetch={this.fetchPhotos} />} />
            <Route component={PageNotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
