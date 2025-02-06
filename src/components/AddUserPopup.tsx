import { addButtonStyles, formStyles } from '../styles/styles'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { userSchema } from '../services/validationSchemas'
import { postUser } from '../services/services'
import { newUser } from '../services/types'

type PopupType = {
    setPopupVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

function AddUserPopup({ setPopupVisibility }: PopupType) {
    const handleSubmit = async (newUser: newUser) => {
        postUser(newUser)
        setPopupVisibility(false)
    }

    return (
        <>
            <div style={{...formStyles.background, position: 'fixed'}}></div>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    role: '',
                }}
                validationSchema={userSchema} 
                onSubmit={(values) => {
                    console.log(values)
                    handleSubmit(values)
                }}
            >
                <Form style={{...formStyles.container, flexDirection: 'column', position: 'absolute'}}>
                    <h2 style={formStyles.title}>Add New Team Member</h2>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" style={formStyles.input} />
                        <ErrorMessage name="name" component="div" />
                    </div>
            
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" style={formStyles.input}/>
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="role">Role</label>
                        <Field type="text" id="role" name="role" style={formStyles.input}/>
                        <ErrorMessage name="role" component="div" />
                    </div>
                    <div style={formStyles.actionsButtons}>
                        <span onClick={() => setPopupVisibility(false)}>Close</span>
                        <button type="submit" style={addButtonStyles}>Add Member</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default AddUserPopup
