import React from "react";
import styles from "@/styles/customers.module.css";
import CustomerData from "./CustomerData";
import { useRouter } from "next/navigation";

export default function Table() {
  const columns = [
    {
      id: "0",
      name: "Order ID",
    },
    {
      id: "1",
      name: "Date",
    },
    {
      id: "2",
      name: "Customer Name",
    },
    {
      id: "3",
      name: "Location",
    },
    {
      id: "4",
      name: "Amount",
    },
    {
      id: "5",
      name: "Status Order",
    },
  ];

  return (
    <table className={styles["orderTable"]}>
      <thead>
        <tr className={styles["tr"]}>
          {columns.map((col) => (
            <TableHead key={col.id} name={col.name} />
          ))}
        </tr>
      </thead>
      <tbody>
        {CustomerData.map((item) => (
          <TableRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

function TableHead({ name }) {
  return (
    <th className={styles["th"]}>
      <div>
        <p>{name}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
          }}
        >
        </div>
      </div>
    </th>
  );
}

function TableRow(props) {
  const { item } = props;
  const router = useRouter();
  const goToDetails = (itemId) => {
    router.push(`/customers/${itemId}`);
  };
  return (
    <>
      {CustomerData.map((item) => (
        <tr
          key={item.id}
          className={styles["tr2"]}
          style={{ cursor: "pointer" }}
          onClick={() => goToDetails(item.id)}
        >
          <td className={styles["td"]}>#C-{item.id}</td>
          <td className={styles["td"]}>{item.date}</td>
          <td className={styles["td"]}>{item.userName}</td>
          <td className={styles["td"]}>{item.location}</td>
          <td className={styles["td1"]}>${item.amount}</td>
          <td className={styles["td12"]}>${item.lastAmount}
          </td>
        </tr>
      ))}
    </>
  );
}
