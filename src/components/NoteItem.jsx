// eslint-disable-next-line no-unused-vars
import React from 'react';
import { showFormattedDate } from '../utils/index';

// eslint-disable-next-line react/prop-types
const NoteItem = ({ note, deleteNote, toggleArchiveNote }) => {
    // eslint-disable-next-line react/prop-types
    const { id, title, body, createdAt, archived } = note;
  
    return (
      <div className={`note-item ${archived ? 'archived' : ''}`}>
        <div className="note-item__content">
          <h2 className="note-item__title">{title}</h2>
          <p className="note-item__date">Created: {showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
        </div>
        <div className="note-item__action">
          <button className="note-item__delete-button" onClick={() => deleteNote(id)}>
            Delete
          </button>
          <button className="note-item__archive-button" onClick={() => toggleArchiveNote(id)}>
            {archived ? 'Unarchive' : 'Archive'}
          </button>
        </div>
      </div>
    );
  };
  
export default NoteItem;