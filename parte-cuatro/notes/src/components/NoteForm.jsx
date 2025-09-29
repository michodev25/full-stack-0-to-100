import React from 'react'
import { useState, useRef } from 'react';
import Note from './Note';

export const NoteForm = (  {addNote }) => {

    const refElement = useRef();

    const [newNote, setNewNote] = useState([]);

    const handleChange = (e) => {
        setNewNote(e.target.value);
    };

    const createNoteForm = (e) => {
        e.preventDefault();
        const noteToAdd = {
            title: newNote,
            content: "This is a new note",
            userId: 1
        };
        addNote(noteToAdd);
        setNewNote('');
        refElement.current.toggleVsibility();
    }
    console.log(refElement)
    return (
        <div>
        
            <h1>Create a new note</h1>
            <form onSubmit={createNoteForm}>
                <input type="text" onChange={handleChange} value={newNote} />
                <button type="submit">Add Note</button>
            </form>
   
        </div>
    )
}
