import React, { Component } from 'react';
import PhotoList from './PhotoList';

class PhotoContainer extends Component {

    query = this.props.match.params.query;

    componentDidMount() {
        // this.query = this.props.match.params.query;
        this.props.fetch(this.query);
    }

    componentDidUpdate(prevProps) {
        this.query = this.props.match.params.query;
        if (this.query !== prevProps.match.params.query) {
            this.props.fetch(this.query);
        }
    }

    render() {
        return (
            <div className="photo-container">
                <h2>{`Results for ${this.query}`}</h2>
                <PhotoList query={this.query} data={this.props.data} />
            </div>
        )
    }
}
export default PhotoContainer;