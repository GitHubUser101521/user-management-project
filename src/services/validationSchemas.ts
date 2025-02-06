import * as yup from 'Yup'

export const userSchema = yup.object().shape({
    name: yup.string()
        .required("Name is required")
        .min(3, "Name should be atleast 3 characters long"),
    email: yup.string()
        .required("Email is required")
        .email("Invalid email format")
        .test(
            'unique-email',
            'Email is already taken, try logging in instead of registering', 
            async (value) => {      
              try {
                const response = await fetch(`http://localhost:3000/users?email=${value}`)
                
                if (response.ok) {
                    const data = await response.json()

                    if (data.length >= 1) {
                        return false
                    } else {
                        return true
                    }
                } else {
                    return false
                }
              } catch (error) {
                console.error('Error checking email uniqueness:', error);
                return false; 
              }
            }
        ),
    role: yup.string()
        .required("Role is required")
})

export const editUserSchema = yup.object().shape({
    name: yup.string()
        .required("Name is required")
        .min(3, "Name should be atleast 3 characters long"),
    email: yup.string()
        .required("Email is required")
        .email("Invalid email format"),
    role: yup.string()
        .required("Role is required")
})