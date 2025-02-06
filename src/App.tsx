import { useEffect, useState } from 'react'
import { getUsers, deleteUser } from './services/services'
import { User } from './services/types'
import { useNavigate, useParams } from 'react-router-dom'
import AddUserPopup from './components/AddUserPopup'

import { tableStyles, addButtonStyles, container, searchBar, paginationStyles } from './styles/styles'

function App() {
    const { searchValue } = useParams()
    const navigate = useNavigate()

    const [ hoveredRow, setHoveredRow ] = useState<number>(0)
    const [ popupVisibility, setPopupVisibility ] = useState(false)
    const [ page, setPage ] = useState(1)
    const [ users, setUsers ] = useState<User[]>([
        { id: '', name: '', email: '', role: '' }
    ])

    const filteredUsers = users.filter(user => user.email.includes(searchValue || '')) 
    const maxPage = Math.ceil(filteredUsers.length / 5)

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data))
    }, [users])

    useEffect(() => {
        navigate('/')
    }, [])

    const pages = Array.from({ length: maxPage }, (_, index) => (
        <span key={index + 1} style={ page === index + 1 ? paginationStyles.activePage : {}} >{index + 1}</span>
    ));

    const handleDelete = (user: User) => {
        deleteUser(user)
            .then(res => res ? '' : alert('Failed to delete user, please try again'))
        
        setUsers(prev => (
            prev.filter(u => u.id !== user.id)
        ))
    }

    useEffect(() => {
        console.log(filteredUsers)
    }, [searchValue])

    return (
        <div style={{ ...container, flexDirection: 'column' }}>
            <input 
                type="text" 
                placeholder='Search by email (unique identifier)...'
                onChange={e => navigate(`/${e.target.value}`)}
                style={searchBar}
                defaultValue={''}
            />

            <button
                style={addButtonStyles}
                onClick={() => setPopupVisibility(true)}
            >+ Add Member</button>

            {
                filteredUsers.length >= 1 ?
                <>
                    <table style={tableStyles.table}>
                        <thead style={tableStyles.background}>
                            <tr>
                                <th style={tableStyles.header}>NAME</th>
                                <th style={tableStyles.header}>EMAIL</th>
                                <th style={tableStyles.header}>ROLE</th>
                                <th style={tableStyles.header}>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredUsers.slice((page - 1) * 5 , page * 5).map((user, index) => (
                                    <tr 
                                        key={ user.id } 
                                        onMouseEnter={() => setHoveredRow(index + 1)}
                                        onMouseLeave={() => setHoveredRow(0)} 
                                        style={hoveredRow === index + 1? tableStyles.rowHover : {}}
                                    >
                                        <td style={tableStyles.cell}>{ user.name }</td>
                                        <td style={tableStyles.cell}>{ user.email }</td>
                                        <td style={tableStyles.cell}>{ user.role }</td>
                                        <td style={tableStyles.actionsCell}>
                                            <span onClick={() => navigate(`/users/${user.id}/edit`)} style={{ color: '#646CFF'}}>Edit</span>
                                            <span onClick={() => handleDelete(user)} style={{ color: '#EC4899'}}>Delete</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div style={paginationStyles.container}>
                        <button onClick={() => setPage(prev => prev - 1 || 1)} style={paginationStyles.button}>{`<`}</button>
                            <span style={paginationStyles.pageContainer}>
                                {
                                    pages
                                }
                            </span>
                        <button onClick={() => {setPage(prev => prev + 1 > maxPage ? prev : prev + 1)}} style={paginationStyles.button}>{`>`}</button>
                    </div>
                </>
                :
                <div style={{ width: '800px'}}>
                    <p>No Users found!</p>
                </div>
            }

            {
                popupVisibility &&
                <AddUserPopup setPopupVisibility={setPopupVisibility} />
            }
        </div>
    )
}

export default App
