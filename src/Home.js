import React from "react";
import product1 from "../src/images/product-1.jpg";
import product2 from "../src/images/product-2.jpg";
import product3 from "../src/images/product-3.jpg";
import sweet1 from "../src/images/sweet3.jpg";
import sweet2 from "../src/images/sweet-2.jpg";
import sweet3 from "../src/images/sweet-3.jpg";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            image={product1}
            title="Supreme Pizza"
            desc="Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto"
            price={129.99}
            button="Add to Cart"
          />
          <Product
            image={product2}
            title="Hawain Paradise"
            desc="Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto"
            price={119.99}
            button="Add to Cart"
          />
          <Product
            image={product3}
            title="Veggie Overload"
            desc="Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto"
            price={109.99}
            button="Add to Cart"
          />
        </div>

        <div className="productDataTwo">
          <Product
            image={sweet2}
            title="Doughlicious"
            desc="Belgian chocolate glazed donuts covered in icing with sprinkles on top"
            price={15.99}
            button="Add to Cart"
          />
          <Product
            image={sweet3}
            title="Hawain Paradise"
            desc="Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick"
            price={20.99}
            button="Add to Cart"
          />
          <Product
            image={sweet1}
            title="Hawain Paradise"
            desc="Double fudge brownie squares topped with white chocolate pieces and macadamia nuts"
            price={30.99}
            button="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
