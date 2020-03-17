import React from 'react'
import LoaderSpinner from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.scss'

const Loader = props => (
    <div className="loader-container">
        <LoaderSpinner type="Audio" color="#3f51b5" height={60} width={60} />
    </div>
)

export default Loader