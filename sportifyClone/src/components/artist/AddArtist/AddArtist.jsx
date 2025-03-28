import React from 'react';

const AddArtist = ({listArtist, setListArtist}) => {
    let artistTmp = {artistName: ""}

    const changeArtist = (event) => {
        artistTmp.artistName = event.target.value;
    }

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                setListArtist([...listArtist, artistTmp]);
            }}>
                <label htmlFor="artistName">
                    Artist Name
                </label>
                <input type="text" name="artistName" onChange={(event)=>{changeArtist(event)}}/>
                <button type="submit">Add an artist</button>
            </form>
        </div>
    );
}

export default AddArtist;