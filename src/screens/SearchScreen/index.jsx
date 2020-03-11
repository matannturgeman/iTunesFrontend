import React, { useState, useEffect } from 'react'
import { getCollections, addTop10 } from '../../services/ituneService'
import TunesList from '../../components/TunesList'
import Button from '@material-ui/core/Button';
import Loader from '../../components/Loader'
import Input from '../../components/Input'
import './index.scss'


const SearchScreen = props => {
    const { history } = props
    const [value, setValue] = useState('')
    const [enterScreen, setEnterScreen] = useState(false)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [tunes, setTunes] = useState(null)

    useEffect(() => { history.listen(handleEnterScreen) }, [])
    useEffect(() => { if(enterScreen) handleSubmit() }, [enterScreen, value])

    const handleEnterScreen = location => {
        if (!location.state) return;
        setEnterScreen(true)
        setValue(location.state.search)
    }

    const handleChange = e => {
        setValue(e.target.value)
    }

    const goToTop10 = () => {
        history.push('/top10Screen')
    }

    const handleSubmit = async e => {
        console.log('enter', 'handleSubmit');
        
        try {
            if (e) e.preventDefault()
            setLoading(true)
            const result = await getCollections(value)
            setTunes(result)
            if (value) addTop10(value)
            setLoading(false)
            setEnterScreen(false)

        } catch (err) {
            console.log('err', err)
            setError(true)
            setLoading(false)
            setEnterScreen(false)
        }
    }

    return (
        <section className="search-screen">
            <h1>Welcome to the iTunes App</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <Input label="Search" onChange={handleChange} value={value} />
                <Button variant="contained" size="small" color="primary" type="submit">
                    Submit
                </Button>
            </form>

            <Button variant="contained" size="small" color="primary" onClick={goToTop10}>
                Top 10
            </Button>


            <div className="tunes-list-display">
                {
                    loading ?
                        <Loader />
                        : error ?
                            <h3>An error has occurred, please try again later</h3>
                            : <TunesList tunes={tunes} />
                }
            </div>
        </section>
    )
}

export default SearchScreen