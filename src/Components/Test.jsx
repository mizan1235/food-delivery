import React, { useState } from 'react';


const Test = () => {
    const [notes, setNotes] = useState([
        { sno: 1, title: 'Sample Note', description: 'Lorem ipsum dolor sit amet.' }
    ]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editNote, setEditNote] = useState({ sno: '', title: '', description: '' });

    const handleEdit = (note) => {
        setEditNote(note);
        setShowEditModal(true);
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();
        const updatedNotes = notes.map((note) =>
            note.sno === editNote.sno ? editNote : note
        );
        setNotes(updatedNotes);
        setShowEditModal(false);
    };

    const handleDelete = (sno) => {
        if (window.confirm("Are you sure you want to delete this note!")) {
            const updatedNotes = notes.filter((note) => note.sno !== sno);
            setNotes(updatedNotes);
        }
    };

    

    return (
        <div className="app-container1">
            {/* Edit Modal */}
            {showEditModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowEditModal(false)}>
                            &times;
                        </span>
                        <h2>Edit this product</h2>
                        <form onSubmit={handleSaveChanges}>
                            <label>
                                Note Title
                                <input
                                    type="text"
                                    value={"Hello Rahul"}
                                    onChange={(e) =>
                                        
                                        console.log(e.target.value)

                                    }
                                />
                            </label>
                            <label>
                                Note Description
                                <textarea
                                    rows="3"
                                    value={"description"}
                                    onChange={(e) =>
                                       console.log(e.target.value)
                                    }
                                />
                            </label>
                            <button type="submit">Save changes</button>
                        </form>
                    </div>
                </div>
            )}

        

            {/* Add Note Form */}


            {/* Notes Table */}
            <div className="container1">

                {notes.map((note) => (

                    <div>
                        <button onClick={() => handleEdit(note)}>Edit</button>
                        <button onClick={() => handleDelete(note.sno)}>Delete</button>
                    </div>

                ))}

            </div>
        </div>
    );
};

export default Test;
