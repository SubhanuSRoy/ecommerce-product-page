import React from "react";
import styles from "../../styles/Side.module.css";
import { ChevronRightIcon } from "@heroicons/react/solid";
import HeaderIcon from "../Header/HeaderIcon";

function Side() {
  return (
    <div className={styles.side}>
      <HeaderIcon Icon={ChevronRightIcon}/>
    </div>
  );
}

export default Side;
