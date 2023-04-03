import React,{ useState } from "react";

function CreateArea(props) {
  const [titleText, setTitleText] = useState('')
  const [contentText, setContentText] = useState('')

  function updateTitleText(event) {
    setTitleText(event.target.value)
  }

  function updateContentText(event) {
    setContentText(event.target.value)
  }

  function addNote(event) {
    props.setNoteList((prevList) => {
      return [...prevList, {
        noteTitle: titleText,
        noteContent: contentText
      }]
    })
    setTitleText('')
    setContentText('')
    event.preventDefault()
  }

  return (
    <div>
      <form>
        <input 
          onChange={updateTitleText} 
          name="title" 
          placeholder="Title" 
          value={titleText}
        />
        <textarea 
          onChange={updateContentText}
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={contentText}
        />
        <button 
          onClick={addNote}
          type="submit"
        >Add</button> 
      </form>
    </div>
  );
}

export default CreateArea;
