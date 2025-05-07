import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from "@mui/material";
import useFetchApiItems from "@/hooks/useFetchApiItems";
import { useRouter } from "next/router";

const foodInitialValues = {
  documentId: null,
  name: "",
  image: "",
  type: "",
  price: "",
  comment: "",
};

function FoodForm({ title, food, btnText }) {
  const router = useRouter();
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [formData, setFormData] = useState(foodInitialValues);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (food) {
      setFormData({
        documentId: food.documentId ?? null,
        name: food.name,
        image: food.image,
        type: food.type?.documentId,
        price: food.price,
        comment: food.comment,
      });
      setCategory(food.type?.category?.documentId);
    } else {
      setFormData(foodInitialValues);
    }
  }, [food]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [categories, isLoading] = useFetchApiItems("/categories");
  const [types, typesLoading] = useFetchApiItems(
    `/types?filters[category][documentId][$eq]=${category}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      data: {
        name: formData.name,
        image: formData.image,
        price: formData.price,
        comment: formData.comment,
        type: {
          connect: [formData.type],
        },
      },
    };

    const method = formData.documentId ? "PUT" : "POST";
    const url = formData.documentId
      ? `http://192.168.100.108:1337/api/foods/${formData.documentId}`
      : "http://192.168.100.108:1337/api/foods";

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setIsSnackOpen(true);
        router.push(`/foods/${res.data.documentId}`);
      })
      .catch((error) => console.error("Submit error:", error));
  };

  if (!formData) return null;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        margin: "auto",
        padding: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        marginTop: "30px",
      }}
    >
      <h1 style={{ color: "#00B074", marginBottom: "30px" }}>{title}</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Grid>

          {/* Category */}
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                {(categories || []).map((cat) => (
                  <MenuItem key={cat.id} value={cat.documentId}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Type */}
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={formData.type}
                label="Type"
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "type",
                      value: e.target.value,
                    },
                  })
                }
              >
                {(types || []).map((type) => (
                  <MenuItem key={type.id} value={type.documentId}>
                    {type.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Price */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Price"
              variant="outlined"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Grid>

          {/* Image */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image"
              variant="outlined"
              name="image"
              value={formData.image}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Grid>

          {/* Comment */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Comment"
              variant="outlined"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              multiline
              rows={4}
              sx={inputStyle}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#00B074",
                "&:hover": {
                  backgroundColor: "#009d60",
                },
                padding: "14px",
                fontSize: "16px",
              }}
            >
              {btnText}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isSnackOpen}
        onClose={() => setIsSnackOpen(false)}
        message="Food is created"
        autoHideDuration={3000}
      />
    </Box>
  );
}

export default FoodForm;

const inputStyle = {
  "& .MuiInputLabel-root": {
    color: "#00B074",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00B074",
    },
    "&:hover fieldset": {
      borderColor: "#00B074",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00B074",
    },
  },
};
