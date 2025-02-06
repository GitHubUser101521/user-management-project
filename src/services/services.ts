import { User, newUser } from "./types"

const API_URL = 'http://localhost:3000/users'

export async function getUsers () {
    try {
        const response = await fetch(API_URL)

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            console.log("Response is not ok")
            return []
        }
    } catch (err) {
        console.error(err)
    }
}

export async function getUser (userId: string) {
    try {
        const response = await fetch(`${API_URL}/${userId}`)
        
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            console.log("Response is not ok")
            return {}
        }
    } catch (err) {
        console.error(err)
    }
}

export async function editUser (updatedUser: User) {
    try {
        const response = await fetch(`${API_URL}/${updatedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            console.log("Response is not ok")
            return {}
        }
    } catch (err) {
        console.error(err)
    }
}

export async function deleteUser (user: User) {
    try {
        const response = await fetch(`${API_URL}/${user.id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return false
        } 
    } catch (err) {
        console.log(err)
    }
}

export async function postUser (newUser: newUser) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })

        if (!response.ok) {
            console.log("Response is not ok")
        }
    } catch (err) {
        console.error(err)
    }
}