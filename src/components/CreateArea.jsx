import React,{ useState } from "react";

function CreateArea(props) {
  // const [titleText, setTitleText] = useState('')
  // const [contentText, setContentText] = useState('')


  // Single constant to update note
  const [note, setNote] = useState({
    title: '',
    content: ''
  })


  // function updateTitleText(event) {
  //   setTitleText(event.target.value)
  // }

  // function updateContentText(event) {
  //   setContentText(event.target.value)
  // }

  // Handling update of single constant note
  function updateNote(event) {
    const {name, value} = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue, 
        [name]: value
      }
    })
  }

  // function addNote(event) {
  //   props.setNoteList((prevList) => {
  //     return [...prevList, {
  //       noteTitle: titleText,
  //       noteContent: contentText
  //     }]
  //   })
  //   setTitleText('')
  //   setContentText('')
  //   event.preventDefault()
  // }

  function addNote(event) {
    props.setNoteList((prevList) => {
      return [...prevList, {
        noteTitle: note.title,
        noteContent: note.content
      }]
    })
    setNote({
      title: '',
      content: ''
    })
    event.preventDefault()
  }

  return (
    <div>
      <form>
        <input 
          // onChange={updateTitleText} 
          onChange={updateNote}
          name="title" 
          placeholder="Title" 
          // value={titleText}
          value={note.title}
        />
        <textarea 
          // onChange={updateContentText}
          onChange={updateNote}
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          // value={contentText}
          value={note.content}
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
