const getAllNotes = async () => {
    return fetch('https://127.0.0.1/api/notes').then((response) =>
        response.json()
    );
}

const createNote = async (note) => {
    return fetch('https://127.0.0.1/api/notes', {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json());
}

export { getAllNotes, createNote };