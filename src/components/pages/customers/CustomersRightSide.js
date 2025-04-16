import React from 'react'
import Image from 'next/image'
import Styles from '@/styles/CustomersDetail.module.css'

function CustomersRightSide() {
  return (
    <div className={Styles['bordr']}>
        <div>
        <p className={Styles['mtop']}>Your Balance</p>
        <h1 className={Styles['font']}>$ 9,425</h1>
        <p className={Styles['mtop']}>2451 **** **** ****</p>
        </div>
        <div className={Styles['mleft']}>
        <Image src={'/point.png'} width={20} height={20} alt='point'/>
        <p className={Styles['mtop2']}>02/21</p>
        </div>

    </div>
  )
}

export default CustomersRightSide