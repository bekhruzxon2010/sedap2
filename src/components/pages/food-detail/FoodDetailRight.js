import React from 'react';
import Image from 'next/image';

function FoodDetailRight() {
  const styles = {
    mtopReve: {
      marginTop: '50px',
      marginBottom: '15px'
    },
    gry: {
      color: 'gray',
      marginBottom: '50px'
    },
    diogramma: {
      marginTop: '100px'
    },
    p_df: {
      display: 'flex',
      gap: '45px',
      marginTop: '15px',
      marginBottom: '50px'
    }
  };

  return (
    <div>
      <h1 style={styles.mtopReve}>Revenue</h1>
      <p style={styles.gry}>Lorem ipsum dolor sit amet, consectetur</p>
      <Image style={styles.diogramma} src="/diogramma.png" width={600} height={300} alt="Revenue Diagram" />
      <div style={styles.p_df}>
        <p>Jan</p>
        <p>Feb</p>
        <p>Mar</p>
        <p>Apr</p>
        <p>May</p>
        <p>Jun</p>
        <p>Jul</p>
        <p>Jul</p>
        <p>Sept</p>
      </div>
    </div>
  );
}

export default FoodDetailRight;
