import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./Hero";
import Products from "./Product";
import Orders from "./Orders";
import { productData, productDataTwo } from "./data";
import Feature from "./Feature";
import Footer from "./Footer";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import Login from "./Login";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51JGDBbH7RyrBsglIJNI5g5kZIopoKI6MGfqobkhKEvvxFsxWMV2UWME4GDVBY1Zfg89QCtyNyQtIbsSg0A93xtxF000G10zKdk"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/login">
          <GlobalStyle />
          <Login />
        </Route>
        <Route path="/checkout">
          <GlobalStyle />
          <Checkout />
        </Route>
        <Route path="/payment">
          <GlobalStyle />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <GlobalStyle />
          <Hero />
          <Products heading="Choose your favorite" data={productData} />
          <Feature />
          <Products heading="Sweet Treats for You" data={productDataTwo} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
