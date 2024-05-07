/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteItem from './NoteItem';

// eslint-disable-next-line react/prop-types
const NoteList = ({ notes, deleteNote, toggleArchiveNote }) => {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} />
        ))}
      </div>
    );
  };
  
export default NoteList;
