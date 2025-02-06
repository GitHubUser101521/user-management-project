import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, editUser } from '../services/services'
import { useParams } from 'react-router-dom'
import { User } from '../services/types'
import { editUserSchema } from '../services/validationSchemas'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { addButtonStyles, formStyles } from '../styles/styles'

function UserDetail() {
    const { userId } = useParams()
    const navigate = useNavigate()
    const [ user, setUser ] = useState<User>({ id: '', name: '', email: '', role: ''})

    useEffect(() => {
        getUser(userId || '')
            .then(data => setUser(data))
    }, [])

    const handleConfirmEdit = (user: User) => {
        try {
            editUser(user)
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }
    
    return (
        <>
            {
                user.id ?
                <Formik
                    initialValues={{
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    }}
                    validationSchema={editUserSchema} 
                    onSubmit={(values) => {
                        handleConfirmEdit(values)
                    }}
                    >
                        <Form style={{...formStyles.container, flexDirection: 'column', position: 'absolute'}}>
                            <h1 style={formStyles.title}>User Detail #{user.id}</h1>

                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                                <label htmlFor="name">Name</label>
                                <Field type="text" id="name" name="name" style={formStyles.input}/>
                                <ErrorMessage name="name" component="div" />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                                <label htmlFor="email">Email</label>
                                <Field type="email" id="email" name="email" style={formStyles.input}/>
                                <ErrorMessage name="email" component="div" />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                                <label htmlFor="role">Role</label>
                                <Field type="text" id="role" name="role" style={formStyles.input}/>
                                <ErrorMessage name="role" component="div" />
                            </div>

                            <div style={formStyles.actionsButtons}>
                                <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Close</Link> 
                                <button type="submit" style={addButtonStyles}>Confirm Edit</button>
                            </div>
                        </Form>
                </Formik>
                :
                <div>Loading...</div>
            }
        </>
    )
}

export default UserDetail
