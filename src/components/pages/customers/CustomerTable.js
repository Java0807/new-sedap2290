import React from "react";
import styles from "@/styles/customers.module.css";
import { customerData } from "@/data";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CustomerTable() {
  // const columns = [
  //   {
  //     id: "0",
  //     name: "Customer ID",
  //   },
  //   {
  //     id: "1",
  //     name: "Join Date",
  //   },
  //   {
  //     id: "2",
  //     name: "Customer Name",
  //   },
  //   {
  //     id: "3",
  //     name: "Location",
  //   },
  //   {
  //     id: "4",
  //     name: "Total Spent",
  //   },
  //   {
  //     id: "5",
  //     name: "Last Order",
  //   },
  // ];
  return (
    <>
      {/* <table className={styles["table"]}>
        <thead>
          <tr className={styles["tr"]}>
            {columns.map((col) => (
              <TableHead key={col.id} name={col.name} />
            ))}
          </tr>
        </thead>
        <tbody>
          {customerData.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table> */}
      <table className={styles["table"]}>
        <thead>
          <tr className={styles["tr"]}>
            <th className={styles["th"]}>
              <div>
                <p>Customer ID</p>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Join Date</p>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Customer Name</p>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Location</p>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Total Spent</p>
              </div>
            </th>
            <th className={styles["th"]}>
              <div>
                <p>Last Order</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableMap />
        </tbody>
      </table>
    </>
  );
}

// function TableHead({ name }) {
//   return (
//     <th className={styles["th"]}>
//       <div>
//         <p>{name}</p>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             margin: "10px",
//           }}
//         >
//           <Image src="/Vector1.png" alt="vector" width={10.5} height={6} />
//           <Image src="/Vector2.png" alt="vector" width={10.5} height={6} />
//         </div>
//       </div>
//     </th>
//   );
// }

// function TableRow(props) {
//   const { item } = props;
//   const route = useRouter();
//   const goToDetails = (id) => {
//     route.push(`/customers/${id}`);
//   };
//   return (
//     <tr
//       className={styles["tr"]}
//       style={{ cursor: "pointer" }}
//       onClick={() => goToDetails(item.id)}
//     >
//       <td className={styles["td"]}>#C-{item.id}</td>
//       <td className={styles["td"]}>{item.date}</td>
//       <td className={styles["td"]}>{item.name}</td>
//       <td className={styles["td"]}>{item.homeLocation}</td>
//       <td className={styles["td1"]}>${item.totalSpend}</td>
//       <td className={styles["td12"]}>${item.lastOrder}</td>
//     </tr>
//   );
// }

function TableMap() {
  const route = useRouter();
  const goToDetails = (id) => {
    route.push(`/customers/${id}`);
  };
  return (
    <>
      {customerData.map((item) => (
        <tr
          key={item.id}
          className={styles["tr2"]}
          style={{ cursor: "pointer" }}
          onClick={() => goToDetails(item.id)}
        >
          <td className={styles["td"]}>#C-{item.id}</td>
          <td className={styles["td"]}>{item.date}</td>
          <td className={styles["td"]}>{item.name}</td>
          <td className={styles["td"]}>{item.homeLocation}</td>
          <td className={styles["td1"]}>${item.totalSpend}</td>
          <td className={styles["td12"]}>${item.lastOrder}</td>
        </tr>
      ))}
    </>
  );
}
