import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Input from '../../components/Input'
import { getCollections } from '../../services/ituneService'
import Loader from '../../components/Loader'
import SongsList from '../../components/SongsList'

import './index.scss'

const SearchScreen = props => {
    console.log('props', props)
    const [value, setValue] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [songs, setSongs] = useState(null)

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            setLoading(true)
            const result = await getCollections(value)
            setSongs(result)
            setLoading(false)

        } catch (err) {
            setError(true)
            setLoading(false)
        }
    }

    return (
        <section className="search-screen">
            <h1>Welcome to the iTunes app</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <Input label="Search" onChange={handleChange} value={value} />
                <Button variant="contained" size="small" color="primary" type="submit">
                    Submit
                </Button>
            </form>

            <Button variant="contained" size="small" color="primary">
                Top 10
            </Button>


            <div className="songs-list-display">
                {
                    loading ?
                        <Loader />
                        : error ?
                            <h3>An error has occurred, please try again later</h3>
                            : <SongsList songs={songs} />
                }
            </div>
        </section>
    )
}

export default SearchScreen