import React from 'react';

const ImageList = (props) => {

    // const images = props.images.map(image => <img key={image.id} alt={image.description} src={image.urls.regular} />)
    const images = props.images.map(({description, id, urls}) => <img key={id} alt={description} src={urls.regular} />)

    return <div>{images}</div>;
};


export default ImageList;