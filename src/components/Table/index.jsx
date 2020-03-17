import React from 'react'
import { Table } from 'semantic-ui-react'
import { getKeysFromList } from '../../services/utilsService'
import './index.scss'

const TableComponent = props => {
    const { data, actions } = props
    const defaultFunc = () => { }
    const keys = data ?
        getKeysFromList(data)
        : []

    return (
        <Table singleLine className="table">
            <Table.Header>
                <Table.Row>
                    {
                        keys.map((key, index) => (
                            <Table.HeaderCell key={index}>{key}</Table.HeaderCell>
                        ))
                    }
                    {
                        actions &&
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    }
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    Boolean(data) &&
                    data.map(item => {
                        const values = Object.values(item) || []

                        return (
                            <Table.Row key={item._id}>
                                {
                                    values.map((value, i) => (
                                        <Table.Cell key={i}>{value}</Table.Cell>
                                    ))
                                }
                                {
                                    actions &&
                                    <Table.Cell>
                                        {
                                            Array.isArray(actions) &&
                                            actions.map((action, j) => {
                                                const onCLick = () => action.onClick(item) || defaultFunc
                                                const className = `action-btn ${action.icon ? 'icon-action-btn' : ''}`
                                                return (
                                                    <button key={j} onClick={onCLick} className={className}>
                                                        {
                                                            action.icon ?
                                                                action.icon
                                                                : action.text
                                                        }
                                                    </button>
                                                )
                                            })
                                        }
                                    </Table.Cell>
                                }
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    )
}

export default TableComponent