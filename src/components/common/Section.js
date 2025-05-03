import React from 'react';
import Head from 'next/head';
import Status from './Status';
import Calendar from './Calendar';
import Table from '../pages/orders/Table';

export default function Section() {
  const styles = {
    orderDiv: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: '"Barlow", sans-serif',
      marginBottom: '40px',
    },
    calendar: {
      display: 'flex',
    },
    tableData: {
      fontFamily: '"Barlow", sans-serif',
    },
  };

  return (
    <>
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap"
        /> */}
      </Head>
      <div>
        <div style={styles.orderDiv}>
          <div style={styles.calendar}>
            <Status />
            <Calendar />
          </div>
        </div>
        <div style={styles.tableData}>
          <Table />
        </div>
      </div>
    </>
  );
}
