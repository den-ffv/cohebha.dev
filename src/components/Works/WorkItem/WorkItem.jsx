import React from "react";
import "./WorkItem.scss";
function WorkItem({ id, name }) {
  return (
    <a href={`/work/${id}`} className="work-item">
      <p className="work-item__name">
        {name}
        <span className="div">{id}</span>
      </p>
      <p className="work-item__date">Jun, 2023</p>
    </a>
  );
}

export default WorkItem;
