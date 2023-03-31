//2. Create a App.jsx component.

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map( (note) => {
        return (
          <Note 
            key={note.key}
            noteTitle={note.title}
            noteContent={note.content}
          />
        )
      })}
      <Footer />
    </div>
  )
}

export default App