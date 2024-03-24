import React from "react";
import NoteItem from "./NoteItem/NoteItem";

function NotesBlock() {
  const testNoteItems = [
    { id: 456, name: "Tuday", data: "2023-02-02", words: 213 },
    { id: 756, name: "Memory", data: "2023-07-12", words: 334 },
    { id: 334, name: "Thik...", data: "2023-09-12", words: 123 },
    { id: 987, name: "NULL", data: "2024-02-02", words: 640 },
  ];
  return (
    <div>
      <h2 className="main-title">Notes</h2>
      <div>
        <p>2024</p>
        {testNoteItems.map((elem) => (
          <NoteItem key={elem.id} id={elem.id} name={elem.name} data={elem.data}/>
        ))}
      </div>
    </div>
  );
}

export default NotesBlock;
