import React from "react";
import Header from './Header'
import notes from "../notes";
import Footer from "./Footer";
import Note from "./Note"

function createNote(notes) {
    return (
            <Note
            key = {notes.key}
            title = {notes.title}
            content = {notes.content}
            />
            )
    
    }
    
    
    
    function App() {
            return <div><Header/>
            {notes.map(createNote)}
            <Footer/>
            </div>
    }




export default App;