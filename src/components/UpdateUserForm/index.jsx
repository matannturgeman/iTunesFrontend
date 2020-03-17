import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/userContext'
import Button from '@material-ui/core/Button';
import Input from '../Input'
import { copy } from '../../services/utilsService'
import { updateUser } from '../../services/userService'
import swal from 'sweetalert'
import './index.scss'

function UpdateUserForm(props) {
    const { closeModal, onUpdate } = props
    const { state, dispatch } = useContext(UserContext)
    const { selectedUser } = state
    const [user, setUser] = useState(selectedUser)

    const updateField = (field, value) => setUser(prev => {
        prev = copy(prev)
        prev[field] = value
        return prev
    })

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            const res = await updateUser(user)
            await swal({
                title: 'User updated susccessfully!',
                icon: 'success',
            })
            if(typeof(closeModal) === 'function') closeModal()
            if(typeof(onUpdate) === 'function') onUpdate()
        } catch (err) {
            await swal({
                title: 'Had a network error, please try again',
                icon: 'error',
            })
        }
    }

    return (
        <div className="update-user-modal-container">
            <form onSubmit={handleSubmit}>
                <Input label="email" value={user.email} onChange={e => updateField('email', e.target.value)} />
                <Input label="password" value={user.password} onChange={e => updateField('password', e.target.value)} />
                <Button variant="contained" size="small" color="primary" type="submit" className="submit-btn">
                    Update
                </Button>
            </form>
        </div>
    )
}

export default UpdateUserForm
