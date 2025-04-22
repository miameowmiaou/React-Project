import React, { useEffect } from 'react';
import DisplayArtist from '../DisplayArtist/DisplayArtist';
import './DisplayAllArtist.css';

const DisplayAllArtist = ({listArtist, setListArtist}) => {

    useEffect(() => {
        console.log(listArtist);
    }, [listArtist]);

    return (
        <div>
            <header className="artistHeader">
                <h1>Popular Artist</h1>
                <button>Show more</button>
            </header>
            <article className="artistGrid">
                {
                    listArtist !== undefined ? listArtist.map((artist, index) => (
                        <DisplayArtist id={index} artistName={artist.artistName} artistPic={artist.artistPic} listArtist={listArtist} setListArtist={setListArtist}/>
                    )) : ""
                }
            </article>
        </div>
    );
}

export default DisplayAllArtist;