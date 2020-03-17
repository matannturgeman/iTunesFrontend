import React, { useState, useEffect, useContext, Fragment } from 'react'
import { UserContext } from '../../context/userContext'
import { LOGIN_USER_STORAGE_KEY, START_LOAD_USER, END_LOAD_USER } from '../../constants.json'
import { loadFromStorage } from '../../services/utilsService'
import { getUserById } from '../../services/userService'
import Loader from '../Loader'
import './index.scss'

const LOAD_TIME = 700

const useInitalLogin = props => {
    const { state, dispatch } = useContext(UserContext)
    useEffect(() => { didMount() }, [])

    const didMount = async () => {
        try {
            const userId = loadFromStorage(LOGIN_USER_STORAGE_KEY)
            if (!userId || !userId.id) return;
            dispatch({ type: START_LOAD_USER })
            const user = await getUserById(userId)
            if (user.error) {
                dispatch({ type: END_LOAD_USER, error: true })
            } else {
                setTimeout(() => {
                    dispatch({ type: END_LOAD_USER, user })
                }, LOAD_TIME)
            }

        } catch (err) {
            dispatch({ type: END_LOAD_USER, error: true })
        }
    }

    return (
        <Fragment>
            {
                state.loading ?
                    <div className="loader-screen">
                        <Loader />
                    </div>
                    : props.children
            }
        </Fragment>
    )
}

export default useInitalLogin