// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { getInitialData, showFormattedDate } from '../utils/index';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const NoteApp = () => {
    const [notes, setNotes] = useState(getInitialData());
    const [searchTerm, setSearchTerm] = useState('');
    const [archivedNotes, setArchivedNotes] = useState([]);
  
    const addNote = (newNote) => {
      setNotes([...notes, newNote]);
    };
  
    const deleteNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
      setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
    };
  
    const toggleArchiveNote = (id) => {
        const noteIndex = notes.findIndex((note) => note.id === id);
        const archivedNoteIndex = archivedNotes.findIndex((note) => note.id === id);
        
        if (noteIndex !== -1) {
          const updatedNotes = [...notes];
          const noteToArchive = { ...updatedNotes[noteIndex], archived: true };
          updatedNotes.splice(noteIndex, 1);
          setNotes(updatedNotes);
          setArchivedNotes([...archivedNotes, noteToArchive]);
        } else if (archivedNoteIndex !== -1) {
          const updatedArchivedNotes = [...archivedNotes];
          const noteToUnarchive = { ...updatedArchivedNotes[archivedNoteIndex], archived: false };
          updatedArchivedNotes.splice(archivedNoteIndex, 1);
          setArchivedNotes(updatedArchivedNotes);
          setNotes([...notes, noteToUnarchive]);
        }
      };      
  
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const filteredArchivedNotes = archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="note-app">
        <header className="note-app__header">
          <h1>Personal Notes</h1>
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>
        <div className="note-app__body">
          <NoteForm addNote={addNote} />
          <h2>Active Notes</h2>
          {filteredNotes.length > 0 ? (
            <NoteList notes={filteredNotes} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} />
          ) : (
            <p className="notes-list__empty-message">No active notes found</p>
          )}
          <h2>Archived Notes</h2>
          {filteredArchivedNotes.length > 0 ? (
            <NoteList notes={filteredArchivedNotes} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} />
          ) : (
            <p className="notes-list__empty-message">No archived notes found</p>
          )}
        </div>
      </div>
    );
  };
  
  export default NoteApp;