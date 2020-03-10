import React from 'react'
import SongPreview from '../SongPreview'

const SongsList = props => {
    const { songs } = props
    if(!Array.isArray(songs)) return null;
    return (
        <div>
            {
                songs.map(song => (
                    <SongPreview song={song} key={song.trackId} />
                ))
            }
        </div>
    )

}

export default SongsList