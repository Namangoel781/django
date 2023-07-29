import React from "react";
import styles from "./Inputcontrol.module.css";

function Inputcontrol(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default Inputcontrol;
