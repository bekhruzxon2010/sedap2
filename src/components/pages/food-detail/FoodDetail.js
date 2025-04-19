import React from 'react'
import Image from 'next/image'
import Styles from '@/styles/Aside.module.css'

function FoodDetail() {
  return (
    <>
    <div className={Styles['all_df']}>
        <h1>Detail Menus</h1>
        <div className={Styles['dfc']}>
            <p>Category: Food </p>
            <p className={Styles['green_txt']}>/ Burger</p>
            <Image/>
        </div>
    </div>
    </>
  )
}

export default FoodDetail