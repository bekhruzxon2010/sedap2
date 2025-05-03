import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Image from 'next/image';

export default function BasicBars() {
  const styles = {
    borderDiv: {
      border: '1px solid aliceblue',
      backgroundColor: 'aliceblue',
      borderRadius: '20px',
      padding: '20px',
      marginTop: '20px',
      width: '500px',
      height: '600px',
    },
    heading: {
      marginTop: '30px',
      marginBottom: '20px',
    },
    lorem: {
      color: 'gray',
      marginBottom: '40px',
    },
    ll: {
      display: 'flex',
      gap: '50px',
      textAlign: 'center',
    },
    dfbb: {
      display: 'flex',
      gap: '5px',
      marginTop: '20px',
      marginBottom: '20px',
      alignItems: 'center',
    },
    mleft1: {
      marginLeft: '20px',
    },
  };

  return (
    <div style={styles.borderDiv}>
      <h2 style={styles.heading}>Most Liked Food</h2>
      <p style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur</p>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[
          { data: [4, 3, 5], label: 'Series 1' },
          { data: [1, 6, 3], label: 'Series 2' },
          { data: [2, 5, 6], label: 'Series 3' },
        ]}
        width={500}
        height={300}
      />
      <div style={styles.ll}>
        <div>
          <div style={styles.dfbb}>
            <Image src={'/dot (4).png'} width={20} height={20} alt="dot" />
            <p>Spaghetti (22%)</p>
            <h4 style={styles.mleft1}>69</h4>
          </div>
          <div style={styles.dfbb}>
            <Image src={'/red.png'} width={20} height={20} alt="dot" />
            <p>Spaghetti (22%)</p>
            <h4 style={styles.mleft1}>321</h4>
          </div>
        </div>
        <div>
          <div style={styles.dfbb}>
            <Image src={'/green.png'} width={20} height={20} alt="dot" />
            <p>Spaghetti (22%)</p>
            <h4 style={styles.mleft1}>763</h4>
          </div>
          <div style={styles.dfbb}>
            <Image src={'/yellow.png'} width={20} height={20} alt="dot" />
            <p>Spaghetti (22%)</p>
            <h4 style={styles.mleft1}>154</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
