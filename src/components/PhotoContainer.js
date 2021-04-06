import React, { Component } from 'react';
import PhotoList from './PhotoList';
import NotFound from './NotFound';
import PhotoViewer from './PhotoViewer';

class PhotoContainer extends Component {

    componentDidMount() {
        // On mount, go ahead and fetch the images based on the current URL
        this.query = this.props.match.params.query;
        this.props.fetch(this.query);
    }

    componentDidUpdate(prevProps) {
        /*
            Update this.query with the latest param before checking 
            it against the last one
        */
        this.query = this.props.match.params.query;
        if (this.query !== prevProps.match.params.query) {
            this.props.fetch(this.query);
        }
    }

    render() {
        let photosList;

        // Check to see if api fetch is loading... 
        if (this.props.isLoading) { return <h3 className="photo-container">Loading...</h3> }

        // Check to see if the url has an ID in it, if so, then render the large photo viewer
        if (this.props.match.params.id) {
            let id = this.props.match.params.id;
            let photo = this.props.data.filter(p => p.id === id);
            return (
                <PhotoViewer query={this.props.match.params.query} data={photo} />
            )
        } else {
            // Check to see if photos were loaded...
            if (this.props.data.length > 0) {
                photosList = <PhotoList query={this.query} data={this.props.data} />
            } else {
                photosList = <NotFound query={this.query} />
            }
        }
        // ...and render the regular photo thumb view 
        return (
            <div className="photo-container">
                {photosList}
            </div>

        )
    }
}
export default PhotoContainer;