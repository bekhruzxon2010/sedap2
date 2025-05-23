import React, { useEffect } from 'react'
import Image from 'next/image'
import Styles from "@/styles/CustomersDetail.module.css"
import { useRouter } from 'next/router'
import { useState } from 'react'
import CustomerData from '@/components/pages/customers/CustomerData'
import Head from "next/head";
import CustomersDetail from "@/components/pages/customers/CustomersDetail"
import BarChart from '@/components/pages/customers/CustomerBarChart'
import Cart from '@/components/pages/customers/CustomersRightSide'
import Cart2 from '@/components/pages/customers/CustomersLeftSideFirst'
import MainLayout from "@/components/common/layouts/MainLayout";
import styles from "@/styles/CustomersDetail.module.css";

export default function CustomerDetail() {
    const rout = useRouter()
    const [ currentCustomer, setCurrentCustomer] = useState(null)
    useEffect(() =>{
        const topilganCustomer = CustomerData.find(
            (customer) => customer.id == rout.query.id
        );
        setCurrentCustomer(topilganCustomer)
    }, [rout])
    return (
        <>
          <Head>
            <title>Cutomers Detail</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
            <div className={styles['dee']}>
            <CustomersDetail/>
            <Cart/>
            </div>
            <div className={styles['dfss']}>
            <Cart2/>
            <BarChart/>
            </div>
          </div>
        </>
      );
}
CustomerDetail.getLayout = (pageProps) => (
    <MainLayout>
      <CustomerDetail {...pageProps} />
    </MainLayout>
  );
  