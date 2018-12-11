import React from 'react';
import './ImageList.css';

class ImageCard extends React.Component {
    render() {
        const {description, urls} = this.props.image;

        return (
            <div className="zoom">
                <img
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}


export default ImageCard;