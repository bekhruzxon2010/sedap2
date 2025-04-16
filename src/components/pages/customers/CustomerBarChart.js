import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Styles from '@/styles/CustomersDetail.module.css'
import Image from 'next/image';

export default function BasicBars() {
  return (
    <>
    <div className={Styles['border_div']}>
      <h2 className={Styles['zzz']}>Most Liked Food</h2>
      <p className={Styles['lorem']}>Lorem ipsum dolor sit amet, consectetur</p>
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
    <div className={Styles['ll']}>
    <div>
    <div className={Styles['dfbb']}>
    <Image src={'/dot (4).png'} width={20} height={20} alt='dot'/>
    <p>Spaghetti (22%)</p>
    <h4 className={Styles['mleft1']}>69</h4>
    </div>
    <div className={Styles['dfbb']}>
    <Image src={'/red.png'} width={20} height={20} alt='dot'/>
    <p>Spaghetti (22%)</p>
    <h4 className={Styles['mleft1']}>321</h4>
    </div>
    </div>
    <div>
    <div className={Styles['dfbb']}>
    <Image src={'/green.png'} width={20} height={20} alt='dot'/>
    <p>Spaghetti (22%)</p>
    <h4 className={Styles['mleft1']}>763</h4>
    </div>
    <div className={Styles['dfbb']}>
    <Image src={'/yellow.png'} width={20} height={20} alt='dot'/>
    <p>Spaghetti (22%)</p>
    <h4 className={Styles['mleft1']}>154</h4>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}
