import React, { useState, useEffect } from 'react'
import LoaderSpinner from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Loader = props => (
    <LoaderSpinner type="Audio" color="#3f51b5" height={60} width={60} />
)


export default Loader