import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/router";
import MainLayout from "@/components/common/layouts/MainLayout";
import useFetchApiItems from "@/hooks/useFetchApiItems";
export default function New() {
  const [foods, setFoods] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const router = useRouter();

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const [items, isLoading] = useFetchApiItems(
    "/foods?populate[type][populate][0]=category"
  );

  useEffect(() => {
    if (items && Array.isArray(items)) {
      setFoods(items);
    }
  }, [items]);

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const nameMatch = food.name?.toLowerCase().includes(inputValue.toLowerCase());
      const categoryMatch = food.category?.toLowerCase().includes(inputValue.toLowerCase());
      return nameMatch || categoryMatch;
    });
  }, [inputValue, foods]);

  const handleDeleteClick = (food) => {
    setSelectedFood(food);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedFood(null);
  };

  const handleConfirmDelete = () => {
    setFoods((prevFoods) =>
      prevFoods.filter((food) => food.id !== selectedFood.id)
    );
    setOpenDialog(false);
    showSnackbar(`${selectedFood.name} deleted successfully`);
    setSelectedFood(null);
  };

  const handleClick = (action, id) => {
    if (action === "View") {
      router.push(`/foods/${id}`);
    } else if (action === "Edit") {
      router.push(`/foods/${id}/edit`);
    }
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <Head>
        <title>Foods List</title>
        <meta name="description" content="Manage your food items" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "32px", color: "#464255" }}>Foods</h1>
            <p style={{ fontSize: "18px", color: "#a3a3a3", marginTop: "15px" }}>
              Here is your menus summary with graph view
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ position: "relative", width: "491px" }}>
              <img
                src="/green search.png"
                alt="search"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "18px",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                }}
              />
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search here"
                style={{
                  width: "100%",
                  height: "68px",
                  borderRadius: "14px",
                  paddingLeft: "50px",
                  fontSize: "18px",
                  border: "none",
                  color: "#aaaaaa",
                  backgroundColor: "aliceblue",
                }}
              />
            </div>

            <button
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "15px",
                border: "none",
                backgroundColor: "aliceblue",
              }}
            >
              <img src="/3line.png" alt="grid" />
            </button>
            <button
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "15px",
                border: "none",
                backgroundColor: "aliceblue",
              }}
            >
              <img src="4point.png" alt="grid active" />
            </button>

            <button
              onClick={() => router.push("/foods/new")}
              style={{
                width: 181,
                height: 68,
                borderRadius: "10px",
                background: "green",
                border: "none",
                fontSize: "18px",
                fontFamily: "sans-serif",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: "24px",
                  height: "24px",
                  marginTop: "-3px",
                }}
                src="/add.png"
                alt="icon"
              />
              New Menu
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <p style={{ fontSize: "24px", color: "#000" }}>Loading...</p>
          ) : filteredFoods.length === 0 ? (
            <p style={{ fontSize: "30px", color: "#000" }}>No Foods !!!</p>
          ) : (
            filteredFoods.map((food) => (
              <Link key={food.id} href={food.href || "#"} passHref>
                <div
                  style={{
                    width: "300px",
                    height: "359px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    textAlign: "center",
                    position: "relative",
                    marginTop: "100px",
                  }}
                >
                  <div
                    style={{
                      width: "194px",
                      height: "194px",
                      backgroundColor: "#c4c4c4",
                      borderRadius: "50%",
                      margin: "0 auto",
                      marginTop: "-100px",
                      marginBottom: "19px",
                    }}
                  ></div>
                  <h1
                    style={{
                      fontSize: "18px",
                      color: "#464255",
                      margin: "30px 0 10px",
                    }}
                  >
                    {food.name}
                  </h1>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#a3a3a3",
                      marginTop: "30px",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "#5e6" }}>
                      Food
                    </span>{" "}
                    {food.category}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      justifyContent: "center",
                      marginTop: "30px",
                    }}
                  >
                    {["View", "Edit", "Delete", "Duplicate"].map((action, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          if (action === "View" || action === "Edit") handleClick(action, food.id);
                          else if (action === "Delete") handleDeleteClick(food);
                        }}
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "12px",
                          backgroundColor: "#f4f4f4",
                          border: "none",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "6px",
                        }}
                      >
                        <Image
                          src={`/${action.toLowerCase()}.png`}
                          alt={action}
                          width={28}
                          height={28}
                        />
                        <p
                          style={{
                            fontSize: "12px",
                            color: "#464255",
                            marginTop: "4px",
                          }}
                        >
                          {action}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            Are you sure you want to delete <strong>{selectedFood?.name}</strong>?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleConfirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <MuiAlert
            onClose={handleSnackbarClose}
            severity="success"
            elevation={6}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
}

New.getLayout = (pageProps) => (
  <MainLayout>
    <New {...pageProps} />
  </MainLayout>
);