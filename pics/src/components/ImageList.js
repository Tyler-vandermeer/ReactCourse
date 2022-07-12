import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // const images = props.images.map(({description, id, urls}) => {
    //     return <li key={id}><img alt={description} src={urls.regular} /></li>
    // });

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return (
        // <ul className='image-list'>
        //     {images}
        // </ul>

        <div className='image-list'>
            {images}
        </div>
    )
}

export default ImageList