import React from "react";
import { useDispatch } from "react-redux";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  CssBaseline,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Filebase from "react-file-base64";

//importing styles
import "../../styles/Form.css";

//importing actions
import { createProduct } from "../../actions/products";

function Form({ handleAddProduct }) {
  const dispatch = useDispatch();
  const [productData, setProductData] = React.useState({
    title: "",
    price: "",
    brand: "",
    description: "",
    category: "",
    image: "",
    color: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
    clear();
  };
  const clear = () => {
    setProductData({
      title: "",
      price: "",
      brand: "",
      description: "",
      category: "",
      image: "",
      color: "",
    });
  };

  return (
    <CssBaseline>
      <Container maxWidth="md">
        <Paper className="paper">
          <form
            autoComplete="off"
            noValidate
            className="root form"
            onSubmit={handleSubmit}
          >
            <div className="form-heading">
              <Typography variant="h6">Add a Product</Typography>
              <Button
                variant="text"
                color="secondary"
                size="small"
                onClick={handleAddProduct}
              >
                <CloseIcon />
              </Button>
            </div>

            <div className="TextField">
              <TextField
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
                value={productData.title}
                onChange={(e) =>
                  setProductData({ ...productData, title: e.target.value })
                }
              />
            </div>

            <div className="TextField">
              <TextField
                name="price"
                variant="outlined"
                label="Price"
                fullWidth
                value={productData.price}
                onChange={(e) =>
                  setProductData({ ...productData, price: e.target.value })
                }
              />
            </div>

            <div className="TextField">
              <TextField
                name="brand"
                variant="outlined"
                label="Brand"
                fullWidth
                value={productData.brand}
                onChange={(e) =>
                  setProductData({ ...productData, brand: e.target.value })
                }
              />
            </div>

            <div className="TextField">
              <TextField
                name="description"
                variant="outlined"
                label="Description"
                fullWidth
                value={productData.description}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    description: e.target.value,
                  })
                }
              />
            </div>

            <div className="TextField">
              <TextField
                name="category"
                variant="outlined"
                label="Category"
                fullWidth
                value={productData.category}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    category: e.target.value.split(","),
                  })
                }
              />
            </div>
            <div className="TextField">
              <TextField
                name="color"
                variant="outlined"
                label="Color"
                fullWidth
                value={productData.color}
                onChange={(e) =>
                  setProductData({ ...productData, color: e.target.value })
                }
              />
            </div>

            <div className="TextField">
              <div className="fileInput">
                <Filebase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setProductData({ ...productData, image: base64 })
                  }
                />
              </div>
            </div>
            <div className="buttonSubmit">
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </div>

            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
            >
              Clear
            </Button>
          </form>
        </Paper>
      </Container>
    </CssBaseline>
  );
}

export default Form;
