import React from "react";
import Image from "next/image";

import styles from "../../styles/Side.module.css";
import { ChevronRightIcon } from "@heroicons/react/solid";
import HeaderIcon from "../Header/HeaderIcon";
import p3 from "../../assets/p3.png";

function Side() {
  return (
    <div className={styles.side}>
      <Image
          className="shadow-md rounded-md"
          src={p3}
          height={600}
          width={400}
        />
    </div>
  );
}

export default Side;    
