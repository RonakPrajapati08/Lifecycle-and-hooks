// import logo from './logo.svg';
import React from "react";
import LifecycleExample from "./Components/Assignment/ClassComponent";
import FunctionalLifecycle from "./Components/Assignment/FunctionComponent";
// import PalindromeChecker from "./Components/UseReducer/Customehook";
// import StationManager from "./Components/UseReducer/PetrolPump";
// import Reducer from "./Components/UseReducer/PetrolPump";
// import Form from "./Components/UseReducer/UseReduce";
// import "./App.css";
// import "./Components/Login/Login.css";
// import Constructor from "./Components/Assignment/Counter";
// import ImageComponent from "./Components/Image";
// import MyHeader from "./Components/Header";
// import Component from "./Components/MComponent";
// import MyList from "./Components/Api";
// import Bootstrap from "./Components/Login/Bootstrap";
// import UseContextHook from "./Components/Usecontext/Appcontext";
// import ParentComponent from "./Components/ChildtoParent/Parentcomponent";
// import Mycomponent from "./Components/Usereff/Usereff";
// import MyCallback from "./Components/Usecallback/Mycallback";
// import MyCallbacks from "./Components/Usecallback/DeafultCallback";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
// import ProductList from "./components/ProductList";
// import ProductDetails from "./components/ProductDetails";
// import ShoppingCart from "./components/ShoppingCart";
// import ProductItem from "./Components/Ecommerce/ProductItem";

function App() {
  return (
    <div>
      {/* <MyHeader /> */}
      {/* <Constructor /> */}
      <LifecycleExample />
      <FunctionalLifecycle />
      {/* 
      <Router>
        <Header />
        <main>
          <Switch>
            <Route
              path="/"
              exact
              component={() => <ProductList products={products} />}
            />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart" component={ShoppingCart} />
          </Switch>
        </main>
      </Router> */}

      {/* <Component /> */}
      {/* <ImageComponent /> */}
      {/* <MyList /> */}
      {/* <UseContextHook /> */}
      {/* <ParentComponent onSubmit={getData} /> */}
      {/* <ParentComponent /> */}
      {/* <MyCallback /> */}
      {/* <PalindromeChecker /> */}
      {/* <MyCallbacks /> */}
      {/* <Reducer /> */}
      {/* <Bootstrap /> */}
      {/* <Garage /> */}
    </div>
  );
}

export default App;
