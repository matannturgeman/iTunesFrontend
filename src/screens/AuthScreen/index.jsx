import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import InputMUI from '../../components/Input'
import Button from '@material-ui/core/Button';
import { loginUser } from '../../services/userService'
import { isValidEmail } from '../../services/utilsService'
import { UserContext } from '../../context/userContext'
import { LOGIN_USER } from '../../constants.json'
import swal from 'sweetalert';
import './index.scss'

const AuthScreen = props => {
    const { history } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { state, dispatch } = useContext(UserContext)

    const handleSubmit = async e => {
        if (e) e.preventDefault()
        try {
            if (!email || !password) {
                swal({
                    title: 'Email or Password is left empty please fill them',
                    icon: 'error',
                })
                return;
            }
            if (!isValidEmail(email)) {
                swal({
                    title: 'Email is not valid',
                    icon: 'error',
                })
                return;
            }
            const res = await loginUser({ email, password })
            if (res.error === 'failed') {
                swal({
                    title: 'Failed login, please try again',
                    icon: 'error',
                })
                return;
            }
            if (res.error === 'user-not-found') {
                swal({
                    title: 'Wrong credentials, please try again',
                    icon: 'error',
                })
                return;
            }
            if (res.success) {
                dispatch({ type: LOGIN_USER, user: res.user })
                history.push('/searchScreen')
            }
        } catch (err) {
            swal({
                title: 'Had a network error, please try again',
                icon: 'error',
            })
        }
    }

    return (
        <section className="login">
            <h1>Welcome to the iTunes app</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <InputMUI
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <InputMUI
                    type="password"
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <h3>Dont have an account? please <Link to="/signUp">sign up</Link></h3>
                <Button variant="contained" size="small" color="primary" type="submit">
                    Login
                </Button>
            </form>
        </section>
    )
}

export default AuthScreen