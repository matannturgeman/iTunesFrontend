import React, { useState, useEffect } from 'react'
import { formatDate } from '../../services/utilsService'
import ReactAudioPlayer from 'react-audio-player';
import LinkMUI from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
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
            <Link to="/searchScreen" className="back-icon">
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
                    <h4 className="collection-price">Or get the whole album at: {collectionPrice}$</h4>
                </div>
            </div>

            <div className="media-container">
                {
                    kind === 'song' ?
                        <ReactAudioPlayer
                            src={previewUrl}
                            controls
                        />
                        : <div className="video-container">
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



// wrapperType: "track"
// kind: "tune"
// artistId: 1973668
// collectionId: 330253758
// trackId: 330253858
// artistName: "Three Days Grace"
// collectionName: "Life Starts Now"
// trackName: "Last to Know"
// collectionCensoredName: "Life Starts Now"
// trackCensoredName: "Last to Know"
// artistViewUrl: "https://music.apple.com/us/artist/three-days-grace/1973668?uo=4"
// collectionViewUrl: "https://music.apple.com/us/album/last-to-know/330253758?i=330253858&uo=4"
// trackViewUrl: "https://music.apple.com/us/album/last-to-know/330253758?i=330253858&uo=4"
// previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview127/v4/e4/f5/3a/e4f53ac7-7de0-833d-696b-cd2a03abaf3d/mzaf_6051218529050532628.plus.aac.p.m4a"
// artworkUrl30: "https://is4-ssl.mzstatic.com/image/thumb/Music117/v4/7c/3e/75/7c3e75fd-d879-6ec3-f4ee-a3241b3bb398/source/30x30bb.jpg"
// artworkUrl60: "https://is4-ssl.mzstatic.com/image/thumb/Music117/v4/7c/3e/75/7c3e75fd-d879-6ec3-f4ee-a3241b3bb398/source/60x60bb.jpg"
// artworkUrl100: "https://is4-ssl.mzstatic.com/image/thumb/Music117/v4/7c/3e/75/7c3e75fd-d879-6ec3-f4ee-a3241b3bb398/source/100x100bb.jpg"
// collectionPrice: 10.99
// trackPrice: 1.29
// releaseDate: "2009-09-22T07:00:00Z"
// collectionExplicitness: "notExplicit"
// trackExplicitness: "notExplicit"
// discCount: 1
// discNumber: 1
// trackCount: 12
// trackNumber: 7
// trackTimeMillis: 207467
// country: "USA"
// currency: "USD"
// primaryGenreName: "Hard Rock"
// isStreamable: true