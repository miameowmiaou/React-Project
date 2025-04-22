import React from 'react';
import DisplayAllArtist from './DisplayAllArtist/DisplayAllArtist';
import AddArtist from './AddArtist/AddArtist';
import { artists } from '../../data/artist';

const Artist = () => {

    const [listArtist, setListArtist] = React.useState([...artists]);

    return (
        <div>
            <AddArtist listArtist={listArtist} setListArtist={setListArtist} />
            <DisplayAllArtist listArtist={listArtist} setListArtist={setListArtist}/>
        </div>
    );
}

export default Artist;