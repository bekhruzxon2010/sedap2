import Head from "next/head";
import CustomersDetail from "@/components/pages/customers/CustomersDetail"
import MainLayout from "@/components/common/layouts/MainLayout";
import styles from "@/styles/Home.module.css";

export default function CustomerDetail() {
  return (
    <>
      <Head>
        <title>Cutomers Detail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CustomersDetail />
      </div>
    </>
  );
}

CustomerDetail.getLayout = (pageProps) => (
  <MainLayout>
    <CustomerDetail {...pageProps} />
  </MainLayout>
);
