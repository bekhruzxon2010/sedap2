import React from 'react'
import Image from 'next/image'
import Styles from "@/styles/CustomersDetail.module.css"

function CustomersDetail() {
  return (
    <>
    <div className={Styles['big']}>
    <div className={Styles['all']}>
      <Image src={'/bac.png'} width={160} height={160}/>
      <div>
      <h1>Eren Yeager</h1>
      <p className={Styles['green']}>UX Designer</p>
      <p className={Styles['gray']}>St. Kings Road 57th, Garden Hills, Chelsea - London</p>
      </div>
      <div className={Styles['df1']}>
      <Image src={'/info.png'} width={50} height={50}/>
      <Image src={'/edit.png'} width={50} height={50}/>
      </div>
    </div>
    <div className={Styles['df2']}>
         <div className={Styles['df3']}>
          <Image src={'/sms (2).png'} width={20} height={20}/>
          <p>eren.yeager@mail.co.id</p>
          </div>
          <div className={Styles['df3']}>
          <Image src={'/tel.png'} width={20} height={20}/>
          <p>+012 345 6789</p>
          </div>
          <div className={Styles['df3']}>
          <Image src={'/pocta.png'} width={20} height={20}/>
          <p>Highspeed Studios</p>
          </div>
          </div>
          </div>
          </>
  )
}

export default CustomersDetail