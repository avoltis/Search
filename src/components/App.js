import React from 'react';
import unsplash from '../api/unsplash';
import youtube from '../api/youtube';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/imageList';

class App extends React.Component {
    state = {
        images: [],
        videos: []
    };

    onSearchSubmit = (searchData) => {
        if (searchData.term !== '') {
            if (searchData.photoSearch) {
                this.getPhotos(searchData.term);
            }
            else if (searchData.videoSearch) {
                this.getVideos(searchData.term);
            }
            else {
                this.getPhotos(searchData.term);
            }
        }
    }

    getPhotos = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: 20
            }
        });

        this.setState({ images: response.data.results });
    }

    getVideos = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term            }
        });

        console.log(response);
        //this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;