import React from 'react';
import unsplash from '../api/unsplash';
import youtube from '../api/youtube';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/imageList';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';

class App extends React.Component {
    state = {
        term: '',
        images: [],
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onSearchSubmit({term: "random"}); //first time only
    }

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

        this.setState({
            term,
            images: response.data.results,
            videos: []
        });
    }

    getVideos = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            term,
            images: [],
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        let layout = ''
        if (this.state.images.length > 0) {
            layout = <ImageList images={this.state.images} />
        }
        else if (this.state.videos.length > 0) {
            layout =
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
        }
        else if (this.state.term || '') {
            layout = "Found 0 Result, Try with a different search!"
        }

        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {layout}
            </div>
        );
    }
}

export default App;