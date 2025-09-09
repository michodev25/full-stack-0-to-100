const getAllNotes = async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
        response.json()
    );
}

const createNote = async (note) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json());
}

export { getAllNotes, createNote };