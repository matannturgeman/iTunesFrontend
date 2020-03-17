import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'

import Modal from '../../components/Modal'
import Table from '../../components/Table'
import Loader from '../../components/Loader'
import UpdateUserForm from '../../components/UpdateUserForm'

import useCheckLoginUser from '../../hooks/useCheckLoginUser'
import { getUsers, deleteUser } from '../../services/userService'
import { copy } from '../../services/utilsService'
import { SELECT_USER } from '../../constants.json'
import { UserContext } from '../../context/userContext'
import './index.scss'

const initalState = {
    loading: false,
    error: false,
    data: null
}

function UserManagementScreen(props) {
    useCheckLoginUser()

    const { state, dispatch } = useContext(UserContext)
    
    const [init, setInit] = useState(true)
    const [mainState, setMainState] = useState(initalState)
    const { loading, error, data } = mainState

    useEffect(() => { didMount() }, [])

    const didMount = async () => {
        try {
            setMainState(prev => {
                prev = copy(prev)
                if(init) prev.loading = true
                return prev
            })
            if(init) setInit(false)
            const data = await getUsers()
            setMainState(prev => {
                prev = copy(prev)
                prev.data = data
                prev.loading = false
                prev.error = false
                return prev
            })
        } catch (err) {
            setMainState(prev => {
                prev = copy(prev)
                prev.loading = false
                prev.error = true
                return prev
            })
        }
    }

    const deleting = async user => {
        try {
            const resSwal = await swal({
                title: 'Are you sure you want to delete this user?',
                buttons: ['cancle', 'ok'],
                icon: 'error',
                dangerMode: true
            })
            if (!resSwal) return
            await deleteUser(user._id)
            didMount()

        } catch (err) {
            await swal({
                title: 'Had a network error, please try again',
                icon: 'error',
            })
        }
    }

    const updating = user => dispatch({ type: SELECT_USER, selectedUser: user })
    const modalClosed = () => dispatch({ type: SELECT_USER, selectedUser: null })
    
    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />
    const updateIcon = <FontAwesomeIcon icon={faPen} />
    const updateModal = (
        <Modal
            renderTitle={updateIcon}
            RenderContent={UpdateUserForm}
            onClose={modalClosed} 
            onUpdate={didMount}
        />
    )

    const actions = [
        { onClick: updating, text: 'updating', icon: updateModal },
        { onClick: deleting, text: 'delete', icon: deleteIcon },
    ]

    return (
        <div className="user-management">
            {
                loading ?
                    <Loader />
                    : error ?
                        <h1 className="error-message">Had an errror please try again later</h1>
                        : <div className="table-container">
                            <Table data={data} actions={actions} />
                        </div>
            }
        </div>
    )
}

export default UserManagementScreen
