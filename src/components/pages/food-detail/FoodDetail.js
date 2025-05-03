import React from "react";
import Image from "next/image";
import FoodDetailRight from "./FoodDetailRight";
import FoodDetailBottom from "./FoodDetailBottom";

function FoodDetail() {
  return (
    <>
      <div style={{ display: "flex", gap: "15px" }}>
        <div
          style={{
            marginTop: "20px",
            border: "1px solid aliceblue",
            backgroundColor: "aliceblue",
            borderRadius: "25px",
            width: "700px",
            padding: "40px",
          }}
        >
          <div style={{ display: "flex" }}>
            <h1>Detail Menus</h1>
            <div style={{ display: "flex", marginTop: "10px", marginLeft: "220px" }}>
              <p>Category: Food </p>
              <p style={{ color: "green" }}>/ Burger</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
            <Image
              style={{ borderRadius: "20px" }}
              src="/kv.png"
              width={220}
              height={260}
              alt="menu item"
            />
            <div>
              <p style={{ color: "#00B074", marginTop: "10px", marginBottom: "20px" }}>
                Stock Available
              </p>
              <h1 style={{ width: "400px", marginBottom: "10px" }}>
                Burger Jumbo Special with Spicy
              </h1>
              <p style={{ color: "gray", marginBottom: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
                <button
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    display: "flex",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#00B074",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <Image
                    style={{ marginTop: "5px", marginLeft: "10px" }}
                    src="/plus.png"
                    alt="Duplicate"
                    width={28}
                    height={28}
                  />
                  <p style={{ marginTop: "5px", marginLeft: "10px" }}>Add Menu</p>
                </button>
                <button
                  style={{
                    padding: "17px",
                    width: "120px",
                    textAlign: "center",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#00B074",
                    border: "none",
                  }}
                >
                  Edit Menu
                </button>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "50px" }} />
          <h1 style={{ marginTop: "50px" }}>Ingredients</h1>
          <p style={{ marginTop: "20px", marginBottom: "20px", color: "gray" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <hr />
          <h1 style={{ marginTop: "50px" }}>Nutrition Info</h1>
          <p style={{ marginTop: "20px", marginBottom: "20px", color: "gray" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div
          style={{
            border: "1px solid aliceblue",
            backgroundColor: "aliceblue",
            width: "650px",
            borderRadius: "20px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <FoodDetailRight />
        </div>
      </div>
      <FoodDetailBottom />
    </>
  );
}

export default FoodDetail;
