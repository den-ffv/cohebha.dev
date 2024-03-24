import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function FullNote() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="main-title">
        {id} <br /> <span className="main-title__span">{id}</span>
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aspernatur maxime pariatur recusandae quidem quod
        quaerat enim? Error exercitationem veniam sunt voluptatum odit sint necessitatibus dicta velit alias consequuntur sed
        illo nostrum pariatur atque eaque voluptates nulla labore quisquam porro voluptatibus numquam, inventore ratione natus
        impedit. Eaque blanditiis suscipit ipsam architecto repellendus cumque, laboriosam eius, in aspernatur facilis ad
        asperiores voluptatem fugit perferendis doloremque quidem hic, temporibus quis! Illo impedit, temporibus amet dolorem
        mollitia perspiciatis tenetur adipisci dolor quae facere similique, laborum natus molestiae veniam, aperiam corrupti
        odit. Sunt veritatis molestias recusandae libero hic deleniti quibusdam delectus culpa porro voluptatum.
      </p>
      <button onClick={() => navigate("/note")}>{"<= go"}</button>
    </div>
  );
}

export default FullNote;
