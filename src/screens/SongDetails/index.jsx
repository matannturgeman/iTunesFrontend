import React, { useState, useEffect } from 'react'
import { formatDate } from '../../services/utilsService'
import ReactAudioPlayer from 'react-audio-player';

const SongDetails = props => {
    const { location, history } = props
    if (!location.state || !location.state.song) {
        history.push('/')
        return null;
    }
    const goBack = () => {
        history.push('/')
    }

    //     var x = document.querySelector('meta[property="og:image"]').getAttribute("content");
    // var image = x.substring(0, x.lastIndexOf("/") + 1) + "10000x10000-999.jpg";

    console.log('location.state.song', location.state.song)
    const {
        artistName, trackName, collectionName,
        trackPrice, collectionPrice, trackViewUrl,
        collectionViewUrl, artworkUrl100, releaseDate,
        previewUrl, artistViewUrl
    } = location.state.song

    return (
        <section className="song-details">
            <button onClick={goBack}>back</button>
            <div>
                <img src={artworkUrl100} />
                <h4 className="track-name">
                    <a href={artistViewUrl} target="_blank">{artistName}</a>
                    : {trackName}
                </h4>
                <h4 className="album-name">From Album: {collectionName}</h4>
                <h4 className="album-name">Release in {formatDate(releaseDate)}</h4>
                <h4 className="track-price">Only at: {trackPrice}$</h4>
                <h4 className="collection-price">Or get the whole album at: {collectionPrice}$</h4>
            </div>


            <ReactAudioPlayer
                src={previewUrl}
                controls
            />

            <a href={trackViewUrl} target="_blank">View the song here</a>
            <a href={collectionViewUrl} target="_blank">View the collection here</a>
        </section>
    )
}

export default SongDetails



// wrapperType: "track"
// kind: "song"
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