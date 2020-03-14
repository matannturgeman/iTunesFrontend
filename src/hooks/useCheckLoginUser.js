import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useHistory } from "react-router-dom";

const useCheckLoginUser = () => {
    const history = useHistory()
    const { state, dispatch } = useContext(UserContext)
    useEffect(() => { didMount() }, [])

    const didMount = () => {
        if (!state.user) {
            history.push('/')
        }
    }
}

export default useCheckLoginUser