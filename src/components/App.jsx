import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([])

  function deleteNote(id) {
    setNoteList((prevList) => {
      return (
        prevList.filter((foundNote, index) => {
          return index !== id
        })
      )
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        noteList={noteList}
        setNoteList={setNoteList}
      />
      {noteList.map( (note, index) => {
        return (
          <Note 
            key={index}
            id={index}
            noteTitle={note.noteTitle}
            noteContent={note.noteContent}
            deleteNote={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  )
}

export default App