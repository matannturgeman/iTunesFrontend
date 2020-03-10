import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import './index.scss'

const TunePreview = props => {
    const { tune, history } = props
    if (!tune) return null
    const { artistName, collectionName, trackName, artworkUrl100 } = tune

    const goToCollectionDisplay = () => {
        history.push('/tuneDetails', { tune })
    }

    return (
        <section className="tune-preview" onClick={goToCollectionDisplay}>
            <img src={artworkUrl100} />
            <div className="tune-preview-details">
                <h4 className="track-name">{artistName}: {trackName}</h4>
                <h4 className="album-name">From Album: {collectionName}</h4>
            </div>
        </section>
    )
}


// export default (TunePreview)
export default withRouter(TunePreview)