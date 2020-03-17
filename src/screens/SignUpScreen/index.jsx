import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

import InputMUI from '../../components/Input'
import { addUser } from '../../services/userService'
import { isValidEmail } from '../../services/utilsService'
import { UserContext } from '../../context/userContext'
import { LOGIN_USER } from '../../constants.json'
import './index.scss'

const SignUpScreen = props => {
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
            const res = await addUser({ email, password })
            if (res.error === 'failed') {
                swal({
                    title: 'Failed adding user, please try again',
                    icon: 'error',
                })
                return;
            }
            if (res.error === 'user-exist') {
                swal({
                    title: 'User already exists with this email',
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
        <section className="sign-up">
            <h1>Please sign up to create your acoount</h1>
            <form onSubmit={handleSubmit} className="form-signup">
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
                <h3>Have an account? <Link to="/authScreen">please sign in</Link></h3>
                <Button variant="contained" size="small" color="primary" type="submit">
                    Sign up
                </Button>
            </form>
        </section>
    )
}

export default SignUpScreen