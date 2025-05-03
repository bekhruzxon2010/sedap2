import Head from "next/head";
import React, { use, useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import PageTitle from "@/components/common/PageTitle";
// import FoodsMap from "@/components/pages/foods/FoodsMap";
// import FoodMapSkeleton from "@/components/pages/foods/FoodMapSkeleton";
// import FoodSearch from "@/components/pages/foods/FoodSearch";
// import FoodBtn from "@/components/pages/foods/FoodBtn";
// import NewBtn from "@/components/pages/foods/NewBtn";
import FoodsInput from '@/components/pages/foods/FoodsInput'
import FoodDiogramma from '@/components/pages/foods/FoodDiogramma'
import useFetchApiItems from "@/hooks/useFetchApiItems";

export default function Foods() {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selected, setSelected] = useState("left");
  const [getItem, setGetItem] = useFetchApiItems("left");


  useEffect(() => {
    if (foods && searchValue.length > 0) {
      const filtered = foods.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredFoods(filtered);
    }
  }, [searchValue, foods]);

  // const [foods, isLoading] = useFetchApiItems("/foods?populate=*&behruz");


  return (
    <>
      <Head>
        <title>Foods</title>
      </Head>
      <div>
      <FoodsInput/>
     < FoodDiogramma/>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <PageTitle title="" subtitle="" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
            }}
          >
            {/* <FoodSearch onChange={setSearchValue} /> */}
            {/* <FoodBtn selected={selected} onSelect={setSelected} /> */}
            {/* <NewBtn /> */}
          </div>
        </div>

        {/* {!isLoading ? (
          searchValue.length > 0 ? (
            filteredFoods.length > 0 ? (
              <FoodsMap data={filteredFoods} />
            ) : (
              <h1
                style={{
                  textAlign: "center",
                }}
              >
                Food topilmadi!
              </h1>
            )
          ) : (
            <FoodsMap data={foods} selected={selected} />
          )
        ) : (
            ""
        //   <FoodMapSkeleton count={3} />
        )} */}
      </div>
    </>
  );
}

Foods.getLayout = (pageProps) => (
  <MainLayout>
    <Foods {...pageProps} />
  </MainLayout>
);