import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import MainLayout from "@/components/common/layouts/MainLayout";
import styles from '@/styles/Foods.module.css';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogContentText from "@mui/material/DialogContentText";
import { useRouter } from "next/router";

const initialFoods = [
  {
    id: 1,
    name: "Spicy Mozarella with Barbeque",
    category: "Food / Noodle",
  },
  {
    id: 2,
    name: "Burger Jumbo Special With Spicy",
    category: "Food / Burger",
  },
  {
    id: 3,
    name: "Pizza la Piazza Special Nuggets",
    category: "Food / Pizza",
  },
  {
    id: 4,
    name: "Cheesy Crust Double Cheese",
    category: "Food / Pizza",
  },
  {
    id: 5,
    name: "BBQ Chicken Wings Supreme",
    category: "Food / Pizza",
  },
  {
    id: 6,
    name: "Veggie Delight Supreme",
    category: "Food / Pizza",
  },
  {
    id: 7,
    name: "Meat Lovers Deluxe",
    category: "Food / Pizza",
  },
  {
    id: 8,
    name: "Double Decker Delight",
    category: "Food / Pizza",
  },
];

export default function New() {
  const [searchTerm, setSearchTerm] = useState("");
  const [foods, setFoods] = useState(initialFoods);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const router = useRouter();

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (food) => {
    setSelectedFood(food);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedFood(null);
  };

  const handleConfirmDelete = () => {
    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== selectedFood.id));
    setOpenDialog(false);
    setSelectedFood(null);
  };

  const handleClick = (action, id) => {
    if (action === "View") {
      router.push(`/foods/${id}`);
    } else if (action === "Edit") {
      router.push(`/foods/${id}/edit`);
    }
  };

  return (
    <>
      <Head>
        <title>Foods List</title>
        <meta name="description" content="Manage your food items" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.live}>
          <div className="colum">
            <h1 className={styles.text8}>Foods</h1>
            <p className={styles.text9}>
              Here is your menus summary with graph view
            </p>
          </div>
          <input
          className={styles['input_width']}
              type="text"
              placeholder="Search foods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                maxWidth: "400px",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "16px",
                marginLeft: '200px'
              }}
            />
        <div style={{
          gap: '20px',
          display: 'flex',
          width: '50px',
          height: '50px',
          marginTop: '50px',
          marginLeft: '30px'
        }}>
        <button style={{
          border: '1px solid aliceblue',
          width: '50px',
          textAlign: 'center',
          padding: '5px',
          borderRadius: '10px',
          backgroundColor: "aliceblue",
        }}>
          <Image src={'/grid 1.png'} width={30} height={30} alt="grid"/>
        </button>
        <button style={{
          border: '1px solid aliceblue',
          width: '50px',
          textAlign: 'center',
          padding: '5px',
          borderRadius: '10px',
          backgroundColor: "aliceblue",
          marginLeft: '20px'
        }}>
          <Image src={'/4point.png'} width={30} height={30} alt="grid"/>
        </button>
        <button style={{
          display: 'flex',
          gap: '20px',
          padding: '10px',
          borderRadius: '10px',
          color: 'white',
          backgroundColor: '#00B074',
          borderColor: '#00B074'
        }}>
          <Image onClick={()=> router.push(`/foods/new`)} src={'/add.png'} width={30} height={30}/>
          <p style={{marginTop: '2px'}}>New Menu</p>
        </button>
        </div>
        </div>

        <div className={styles["food-cards"]}>
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <div key={food.id} className={styles["card_button"]}>
                <Image className={styles['round']} src={'/round.png'} width={200} height={200} alt="Food" />
                <h1 className={styles["text_5"]}>{food.name}</h1>
                <p className={styles["text_6"]}>
                  <span className={styles["text_7"]}>Food</span> {food.category}
                </p>
                <div className={styles["ddd"]}>
                  <div className={styles["food_button"]} onClick={() => handleClick("View", food.id)}>
                    <Image src="/eye.png" alt="View" width={28} height={28} />
                    <p>View</p>
                  </div>
                  <div className={styles["food_button"]} onClick={() => handleClick("Edit", food.id)}>
                    <Image src="/edit.png" alt="Edit" width={28} height={28} />
                    <p>Edit</p>
                  </div>
                  <div className={styles["food_button"]} onClick={() => handleDeleteClick(food)}>
                    <Image src="/delete.png" alt="Delete" width={28} height={28} />
                    <p>Delete</p>
                  </div>
                  <div className={styles["food_button"]}>
                    <Image src="/plus.png" alt="Duplicate" width={28} height={28} />
                    <p>Duplicate</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ padding: "20px", color: "#777" }}>Topilmadi</p>
          )}
        </div>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete the item {" "}
              <strong>{selectedFood?.name}</strong>?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleConfirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

New.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);