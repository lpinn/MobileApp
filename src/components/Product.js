import React, { useState } from "react";
import Button from "./Button";
import { ListItem, Text, Tooltip } from "react-native-elements";

const Product = (props) => {
  console.log(props)
  const id = props.id;
  const image = props.image;
  const name = props.name;
  const initialPrice = props.price;
  const size = props.size;
  const grind = props.grind; // should this be state so its interactive .. and where or be further up the chain so cart can see
  const description = props.description;

  const [isAdded, setAdded] = useState(false);
  const [price, setPrice] = useState(initialPrice);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (event) => {
    event.preventDefault();
    setAdded(true)
    localStorage.setItem("product", props)
    console.log("hi", localStorage)
  }
  
  return (
    <ListItem className="product">
      <Text>{name}</Text>
      <Text>${price}</Text>
      <Tooltip popover={<Text>{description}</Text>}>
        <Text>Learn More</Text>
      </Tooltip>
      {/* pop up menu for size */}
      {/* +1 button for quantity */}
      <Button
        onPress={addToCart}
        text={isAdded ? "ADDED" : "ADD TO CART"}
      />
    </ListItem>
  );
};
export default Product;
