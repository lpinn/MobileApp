/*
We will render a Product component for each object in the ProductsList.json manifest. 
Holds a lot of state for the different options for each item i.e grind/size.

TODO refactor state
Too many hooks.

*/
import {
  StyleSheet,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  Linking
} from "react-native";

import React, { useState, useEffect } from "react";
import { SolidButton } from "./Button";
import { ListItem, Text, Tooltip } from "react-native-elements";
import QuickView from "./QuickView";

//import ProductModel from "../utils/ProductModel";

const Product = (props) => {
  let image;
  if (props.image) 
    image = props.image;
  else 
    image = require("../../assets/images/coffee.jpg"); // have to use the require here bc it only works w/ static values


  //const image = props.image ?? ("../../assets/images/coffee.jpg"); // why isnt default case working
  const name = props.name;
  const initialPrice = props.price;
  
  const [isAdded, setAdded] = useState(false); // if the product has been added to cart  

  const [isModalVisible, setModalVisible] = useState(false);
  
  const [price, setPrice] = useState(initialPrice);

  const toggleModal = () => {
    console.log(); // takes two clicks after state mutation in quick view .. bug
    setModalVisible(!isModalVisible);
  };

  // <ModalTrigger trigger={toggleModal => <SolidButton onPress={toggleModal} text={name}}> <QuickView>
  return (    
    <ListItem className="product" key={name}>
	<View>	
      <QuickView
        addProduct={props.addProduct}
        setVisible={toggleModal}
        isVisible={isModalVisible}
        name={name}
        initPrice={initialPrice}
        image={image}
      ></QuickView>
	  
		<TouchableOpacity style={styles.productTile} onPress={name=="Subscribe" ? () => Linking.openURL('https://www.buildingnewhope.org/product-page/subscribe') : toggleModal}>		
			<ImageBackground	
					source={image}
					resizeMode="cover"
					style={styles.image1}
			>
					<View style={styles.rectFiller}></View>
					<View style={styles.rect}>
					<Text style={styles.productName}>{name}</Text>
					</View>
			</ImageBackground>
		</TouchableOpacity>

		{/* Suggestion: Program to show the cheapest price for that product. From a user-centered perspective, it would be great to show prices:*/}	
		{name=="Subscribe" ? <Text style={styles.priceStyle}>(Opens Browser)</Text> : <Text style={styles.priceStyle}>From ${price}</Text>}

		<Button
			onPress={name=="Subscribe" ? () => Linking.openURL('https://www.buildingnewhope.org/product-page/subscribe') : toggleModal}
			title={name=="Subscribe" ? 'Go' : isAdded ? 'ADDED' : 'ADD TO CART'}	
			color="rgba(237,167,47,1)"
		/>
	</View>	  
    </ListItem>
  );
};

//************************ STYLES START **************************

const styles = StyleSheet.create({
	
  priceStyle: {
	color: "dimgrey",
	fontWeight: "normal",
	fontSize: 14.9,
  },
  
  productTile: {
    width: 130,
    height: 130,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-end",
	marginLeft: '-1.5%',
	marginBottom: '1%',
  },
  
  image1: {
    flex: 1,
    marginBottom: -1,
    marginTop: 1,
  },
    
  rectFiller: {
    flex: 1,
  },
  
  rect: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    marginBottom: 1,
  },  
  
  productName: {
    color: "rgba(247,252,253,1)",
    fontSize: 15,
    marginTop: 7,
    alignSelf: "center",
	textTransform: 'uppercase',
  },

});
//************************** STYLES END **************************


export default Product;
