import React from 'react';
import './DisplayArtist.css';

const DisplayArtist = ({id, artistName, artistPic, listArtist, setListArtist}) => {

    const deleteArtist = (id, event) => {
        setListArtist(listArtist.filter((artist, index) => index !== id));
    }

    return (
        <div className="artistBlock">
            <div onClick={(event) => {deleteArtist(id, event)}}>X</div>
            <img src={artistPic} alt="ArtistPic" />
            <h1>{artistName}</h1>
            <p>Artist</p>
        </div>
    );
}

export default DisplayArtist;