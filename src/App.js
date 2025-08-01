import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";

// import { useDispatch } from "react-redux";
// import { getProduct } from "./actions/products";
//importing the components here
import Navbar from "./components/Navbar";
import Form from "./components/Form/Form";
function App() {
  console.log("App: rendering");
  const [showForm, setShowForm] = React.useState(false);
  // const dispatch = useDispatch();
  const handleAddProduct = () => {
    console.log("App: handleAddProduct called");
    setShowForm(!showForm);
  };
  // useEffect(() => {
  //   dispatch(getProduct(1));
  // }, [dispatch]);
  console.log("App: showForm state:", showForm);
  return (
    <div className="App">
      <Navbar handleAddProduct={handleAddProduct} />
      {showForm ? <Form handleAddProduct={handleAddProduct} /> : <HomePage />}
    </div>
  );
}

export default App;
