import React, { useState } from "react";

function Title(props) {
  const [isToggled, setToggled] = useState("divTitle");
  function ToggleStyle() {
    if (isToggled === "divTitle") {
      setToggled("disabledDivTitle");
    } else {
      setToggled("divTitle");
    }
  }
  return (
    <div id={isToggled} onClick={ToggleStyle}>
      <h2>{props.title}</h2>
    </div>
  );
}
export default Title;
