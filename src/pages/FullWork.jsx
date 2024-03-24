import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function FullWork() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  return (
    <div>
      <h2 className="main-title">
        {id}
        <br />
        <span className="main-title__span">{id}</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias iure aperiam ratione veritatis impedit voluptates
        explicabo neque, est alias suscipit asperiores quam! 
        <br /><br />
        Itaque quaerat soluta rerum eligendi quos esse asperiores in nulla
        vitae accusamus quas, suscipit ex ipsam neque saepe non sed reprehenderit, commodi quia! Asperiores autem minima velit,
        laboriosam quas corporis mollitia voluptates minus.
        <br /><br />
        
         Harum vel eaque sequi totam sapiente itaque voluptates inventore,
        doloribus ex dignissimos dolor magni error cum odit minus sint saepe accusantium, voluptatibus facilis id ratione modi
        temporibus. Laboriosam nulla rem reprehenderit voluptates illum quod exercitationem eveniet, temporibus vero alias, unde
        iste minus, quia aliquid.
      </p>
      <button onClick={() => navigate("/work")}>Go back</button>
    </div>
  );
}

export default FullWork;
