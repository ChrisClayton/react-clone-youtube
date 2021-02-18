import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, title, selected }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className="sidebarRow__icon" />
      <div className="sidebarRow__title">{title}</div>
    </div>
  );
}

export default SidebarRow;
