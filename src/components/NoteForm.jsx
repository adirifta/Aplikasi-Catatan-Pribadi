// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const NoteForm = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [charLimit, setCharLimit] = useState(50);
  
    const handleTitleChange = (e) => {
        const inputTitle = e.target.value;
        if (inputTitle.length <= 50) {
          setTitle(inputTitle);
          setCharLimit(50 - inputTitle.length);
        }
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title.trim() || !body.trim()) return;
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      };
      addNote(newNote);
      setTitle('');
      setBody('');
      setCharLimit(50);
    };
  
    return (
      <form className="note-input" onSubmit={handleSubmit}>
        <p style={{ textAlign: 'right', fontSize: '0.8em' }}>
            Characters: {charLimit}
        </p>{/* Menampilkan jumlah karakter tersisa */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
    );
  };
  
  export default NoteForm;