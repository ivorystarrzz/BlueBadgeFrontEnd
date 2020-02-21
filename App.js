import React, { useState } from 'react';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import Example from './Carousel'
library.add(faTrash, faCheck)
function App() {
  const [currentInput, setCurrentInput] = useState('')
  const [story, setStory] = useState([])



  function getAll() {
    fetch('http://localhost:3000', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'props.token'
      })
    }).then(res => res.json()).then(successofAddingToDataBase => {

    })
  }




    function addItem(e) {
      e.preventDefault();
      // Fetch will go posting to your database
      //Conduct a fetch all 
      // fetch (url/getall).then( res = res.json()).then(res=> { const newItem = const items = [...this.state.items, newItem]   })
      fetch('http://localhost:3000/home/post', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'props.token'
        })
      }).then(res => res.json()).then(successofAddingToDataBase => {
        console.log(successofAddingToDataBase)
      })


    }
    function handleInput(e) {
      setCurrentInput(e.target.value)
    }



    function deleteItem(key) {
      // delete fetch
      fetch('http://localhost:4000/api/log/delete/', {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'props.token'
        })
      }).then(res => res.json()).then(successfulDelete => {
        //EXECUTE A REFRESH OF ALL 
      })
    }




    function setUpdate(text, key) {
      // updateFetch
      fetch('http://localhost:4000/api/log/update/${props.workoutToUpdate.id}', {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'props.token'
        }),
        body: JSON.stringify({ log: { comments: 'editDesc' } })
      }).then(res => res.json()).then(successfulDelete => {
        //You really don't have to do anything once it is updated. 
      })

    }



    return (
      <div>
        <Example></Example>
        <form id="to-do-form" onSubmit={addItem()}>
          <input type="text" maxlength="310" placeholder="continue the story ..." value={currentInput} onChange={handleInput()}></input>
          <button type="submit" onclick="postToOne();">Add</button>
        </form>
        <div className="App">
          <header>
            <p>{this.state.items.text}</p>
            <ListItems items={story} deleteItem={deleteItem} setUpdate={setUpdate} />
          </header>
        </div>
      </div>
    );
  }

  export default App;
