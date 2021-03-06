import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { getTop10Searches } from '../../services/ituneService'
import useCheckLoginUser from '../../hooks/useCheckLoginUser'
import './index.scss'

const Top10Screen = props => {
    const { history } = props
    useCheckLoginUser()

    const searches = getTop10Searches()
    const moveToSearch = search => history.push('/search', { search })

    return (
        <section className="top-10-screen">
            <Link to="/search" className="back-icon">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h1 className="title">Top 10 Searches</h1>
            {
                searches.map((search, i) => (
                    <h1 key={i} className="search" onClick={() => moveToSearch(search)}>{search}</h1>
                ))
            }
        </section>
    )
}

export default Top10Screen