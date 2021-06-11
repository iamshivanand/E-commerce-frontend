import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";

// import { useDispatch } from "react-redux";
// import { getProduct } from "./actions/products";
//importing the components here
import Navbar from "./components/Navbar";
import Form from "./components/Form/Form";
function App() {
  const [showForm, setShowForm] = React.useState(false);
  // const dispatch = useDispatch();
  const handleAddProduct = () => {
    setShowForm(!showForm);
  };
  // useEffect(() => {
  //   dispatch(getProduct(1));
  // }, [dispatch]);
  return (
    <div className="App">
      <Navbar handleAddProduct={handleAddProduct} />
      {showForm ? <Form handleAddProduct={handleAddProduct} /> : <HomePage />}
    </div>
  );
}

export default App;
