export const addButtonStyles: React.CSSProperties = {
    backgroundColor: '#673ab7', 
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '8px 0 16px', 
    backgroundImage: 'linear-gradient(to right, #8B5CF6, #EC4899)',
}

export const paginationStyles = {
    activePage: {
        color: '#EC4899',
        fontWeight: 'bold'
    },
    button: {
        width: '2rem',
        height: '2rem',
        borderRadius: '9999px',
        backgroundColor: '#EC4899',
        border: 'none',
        color: 'white'
    },
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
        gap: '.5rem'
    },
    pageContainer: {
        display: 'flex',
        gap: '0.25rem',
    }
}

export const container = {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
}

export const tableStyles = {
    table: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        borderRadius: '16px',
        overflow: 'hidden', 
        borderSpacing: '0',
        backgroundColor: 'white',
        width: '800px'
    },
    header: {
        color: 'white',
        fontWeight: 700, 
        padding: '24px', 
    },
    cell: {
        backgroundColor: 'white',
        padding: '24px',
        width: 'fit-content',
        height: '66.4px',
        minHeight: '66.4px', 
    },
    background: {
        backgroundImage: 'linear-gradient(to right, #8B5CF6, #EC4899)',
    },
    rowHover: {
        filter: 'brightness(95%)',
    },
    actionsCell: {
        padding: '24px',
        display: 'flex',
        gap: '2rem',
        backgroundColor: 'white',
        cursor: 'pointer',
        height: 'fit-content'
    }
}

export const searchBar = {
    width: '100%',
    borderRadius: '9999px',
    outline: 'none',
    border: '1px solid #8B5CF6',
    padding: '0.75rem 1.5rem',
    marginBottom: '3rem'
}

export const formStyles = {
    container: {
        display: 'flex',
        width: '45%', 
        padding: '20px',
        border: '1px solid #8B5CF6',
        borderRadius: '5px',
        backgroundColor: '#f8f8f8', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        justifyContent: 'space-between'
    },
    title: {
        color: '#8B5CF6',
        fontSize: '2rem',
        display: 'flex',
        justifyContent: 'center'
    },
    background: {
        backgroundColor: 'black',
        opacity: '70%',
        width: '100vw',
        height: '100vh',
        top: '0',
        left: '0'
    },
    actionsButtons: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '1rem'
    },
    input: {
        height: '2rem',
        borderRadius: '9999px',
        padding: '1rem',
        border: '1px solid #8B5CF6',
        margin: '0.3rem 0'
    }
}