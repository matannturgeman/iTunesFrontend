import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import LinkMUI from '@material-ui/core/Link';
import ReactAudioPlayer from 'react-audio-player';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { formatDate } from '../../services/utilsService'
import useCheckLoginUser from '../../hooks/useCheckLoginUser'
import './index.scss'

const TuneDetails = props => {
    const { location, history } = props
    useCheckLoginUser()
    if (!location.state || !location.state.tune) {
        history.push('/')
        return null;
    }

    const {

        artistName, trackName, collectionName,
        trackPrice, collectionPrice, trackViewUrl,
        collectionViewUrl, artworkUrl100, releaseDate,
        previewUrl, artistViewUrl, kind

    } = location.state.tune

    return (
        <section className="tune-details">
            <Link to="/search" className="back-icon">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className="details">
                <img src={artworkUrl100} className="preview-img" />
                <div className="details-info">
                    <h4 className="track-name">
                        <LinkMUI href={artistViewUrl} target="_blank">{artistName}</LinkMUI>: <LinkMUI href={trackViewUrl} target="_blank">{trackName}</LinkMUI>
                    </h4>
                    <h4 className="album-name">
                        From Album:  <LinkMUI href={collectionViewUrl} target="_blank">{collectionName}</LinkMUI>
                    </h4>
                    <h4 className="album-name">Release in {formatDate(releaseDate)}</h4>
                    <h4 className="track-price">Buy now only at: {trackPrice}$</h4>
                    {
                        kind === 'song' &&
                        <h4 className="collection-price">Or get the whole album at: {collectionPrice}$</h4>
                    }
                </div>
            </div>

            <div className="media-container">
                {
                    kind === 'song' ?
                        <ReactAudioPlayer
                            src={previewUrl}
                            controls
                        />
                        :<div className="video-container">
                            <ReactPlayer
                                url={previewUrl}
                                controls
                                width="100%"
                                height="100%"
                            />
                        </div>
                }
            </div>
        </section>
    )
}

export default TuneDetails