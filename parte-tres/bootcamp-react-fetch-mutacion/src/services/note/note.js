const getAllNotes = async () => {
    return fetch('http://localhost:3000/api/notes').then((response) =>
        response.json()
    );
}

const createNote = async (note,{token}) => {
    return fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
            "Authorization": `Bearer ${token}`,
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json());
}

const updateNote = async (id, note) => {    
    return fetch(`http://localhost:3000/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(note),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json());
}   

export { getAllNotes, createNote, updateNote};