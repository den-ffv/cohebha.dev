import React from "react";
import WorkItem from "./WorkItem/WorkItem";

import "./WorksBlock.scss";
function WorksBlock() {
  const testItemsProject = [
    { id: 34524, name: "Blog", date: "Jun, 2023", about: "loremremremreomre  er ere r meo rmeo mreo mreom" },
    { id: 57564, name: "DevShop", date: "Sep, 2023", about: "LL<WKMKEMKCMKCMEKCMece  er rmeo mreo mreom" },
    { id: 23444, name: "NewTime", date: "Feb, 2023", about: "ADWdwdwfwcwc  e r meo rmeo mreo mreom" },
    { id: 78787, name: "E-comers", date: "Mar, 2024", about: "loremrmo rmeo mreo mr e er e er  rr rrr eom" },
  ];

  return (
    <div>
      <h2 className="main-title">
        Selected projects
        <br />
        <span className="main-title__span">2023-24</span>
      </h2>
      <p className="main-taxt-color">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil nisi fugiat magnam voluptatibus corporis eos commodi
        necessitatibus ducimus deserunt ipsam.
      </p>
      <div className="work-item-content">
        {testItemsProject.map((item) => (
          <WorkItem key={item.id} id={item.id} name={item.name}/>
        ))}
      
      </div>
    </div>
  );
}

export default WorksBlock;
