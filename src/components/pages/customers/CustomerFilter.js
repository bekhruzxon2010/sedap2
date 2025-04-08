import React from "react";
import styles from "@/styles/order.module.css";
import Image from "next/image";

function CustomerFilter() {
  return (
    <div>
      <div className={styles["status"]}>
        <Image src="/allstatus.png" width={28} height={28} alt="status" />{" "}
        <select>
          <option>Filter</option>
          <option>Name</option>
          <option>ID</option>
        </select>
      </div>
    </div>
  );
}

export default CustomerFilter;
