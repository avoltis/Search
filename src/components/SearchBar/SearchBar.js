import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
        photoSearch: false,
        videoSearch: false
    };

    onFormSubmit = event => {
        event.preventDefault(); //does not let the form to submit state change only on enter or button press
        this.props.onSubmit(this.state);
    }

    onSearchPhoto = () => {
        this.setState({ photoSearch: true, videoSearch: false });
    }

    onSearchVideo = () => {
        this.setState({ photoSearch: false, videoSearch: true });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.photoSearch !== this.state.photoSearch || prevState.videoSearch !== this.state.videoSearch)
        {
            this.props.onSubmit(this.state);
        }
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text" value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
                        <div style={{ paddingTop: '15px' }} >
                            <button type="button" onClick={this.onSearchPhoto} className="ui labeled icon button">
                                <i className="image icon"></i>
                                Images
                            </button>
                            <button type="button" onClick={this.onSearchVideo} className="ui labeled icon button">
                                <i className="video icon"></i>
                                Videos
                            </button>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default SearchBar;