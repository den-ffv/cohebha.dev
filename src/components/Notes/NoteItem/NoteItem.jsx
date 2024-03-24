import React from "react";
import "./NoteItem.scss";
function NoteItem({id, name, data}) {
  return (
    <a href={`/note/${id}`} className="note">
      <div className="note__info-content">
        <p className="note__name">{name}</p>
        <p className="note__data">{data}</p>
      </div>
      <p className="note__number-of-words">212</p>
    </a>
  );
}

export default NoteItem;
