import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Input from '../../components/Input'
import { getCollections } from '../../services/ituneService'
import Loader from '../../components/Loader'
import CollectionsList from '../../components/CollectionsList'
import './index.scss'

const SearchScreen = props => {
    const [value, setValue] = useState('')

    //turn these into store items
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [collections, setCollections] = useState(null)

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            setLoading(true)
            const result = await getCollections(value)
            setCollections(result)
            setLoading(false)

        } catch (err) {
            setError(true)
            setLoading(false)
        }
    }

    const renderMain = () => (
        // <div>{collections? collections.length : null}</div>
        <div className="collections-list-display">
            <CollectionsList collections={collections} />
        </div>
    )

    return (
        <section className="search-screen">
            <form onSubmit={handleSubmit} className="search-form">
                <Input label="Search" onChange={handleChange} value={value} />
                <Button variant="contained" size="medium" color="primary" type="submit">
                    Submit
                </Button>
            </form>
            {
                loading ?
                    <Loader />
                    : error ?
                        <h3>An error has occurred, please try again later</h3>
                        : renderMain()
            }
        </section>
    )
}

export default SearchScreen