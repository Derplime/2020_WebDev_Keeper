import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App() {

    function addNote(note) {
        return (
            <Note key={note.key} title={note.title} content={note.content} />
        );
    }

    return (
        <div>
            <Header />
            {notes.map(addNote)}
            <Footer />
        </div>
    );
}

export default App;
