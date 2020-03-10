import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import './index.scss'

const SongPreview = props => {
    const { song, history } = props
    if (!song) return null
    const { artistName, collectionName, trackName, artworkUrl100 } = song

    const goToCollectionDisplay = () => {
        history.push('/songDetails', { song })
    }

    return (
        <section className="song-preview" onClick={goToCollectionDisplay}>
            <img src={artworkUrl100} />
            <div className="song-preview-details">
                <h4 className="track-name">{artistName}: {trackName}</h4>
                <h4 className="album-name">From Album: {collectionName}</h4>
            </div>
        </section>
    )
}

export default withRouter(SongPreview)
