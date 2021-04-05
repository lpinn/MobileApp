import React, { useEffect, useState } from "react";
import { Button, Text, Card } from "react-native-elements";
import { View, StyleSheet, ScrollView} from "react-native";
import { SolidButton } from "../components/Button";
import Counter from "../components/Counter";
import Divider from "react-native-btr/src/Components/Separator";

import findGrindDesc from "../utils/findGrindDesc"
import {
  useFonts,
  Philosopher_400Regular,
} from '../../assets/fonts/google-fonts/dev';
import AppLoading from 'expo-app-loading';
/* 
This is a seperate screen for the cart to be displayed. If not React Navigation parameters were passed we will
render the Empty Cart
 */

const EmptyCart = ({ navigation }) => {
  return (
    <View style={styles.nothingHere}>
      <Text style={styles.title}>Nothing Here Yet</Text>
	  
	    <Button
        title="Continue Shopping"
		buttonStyle={styles.button}
        onPress={() => navigation.navigate("Catalog")}
      />

    </View>
  );
};

const Cart = ({ navigation, route }) => {
  const [items, setItems] = useState([]);
  const [total, updateTotal] = useState(route.params.total);

	useEffect(() => {
		const fetchData = async () => {
		  let { products } = route.params;
		  setItems(products);
		};

		console.log(route.params);
		if (route.params) {  // passed params w/ react navigation
		  fetchData();
		}
	}, []);

	let [fontsLoaded] = useFonts({
		Philosopher_400Regular,
	});   
	let cartItems = items.map((i) => {
		return (
			<View style={styles.productContainerParent}>
				<View style={styles.productContainer}>
					<View style={styles.productDetails}>
						<Text style={styles.productDetailsText} key={i.id}>
							{i.name}
						</Text>
						<Text style={styles.productDetailsText2} key={i.id}>
							{findGrindDesc(i.grind)}
						</Text>
						<Text style={styles.productDetailsText2} key={i.id}>
							{i.size} oz     ${i.price} //It would be great if this price updated when the counter updates. :)
						</Text>			
					</View>
					
					<View style={styles.productQuantity}>
						<Counter  // each item will have its seperate Counter for adding more / subtracting
							  item={i}
							  increment={route.params.increment}
							  decrement={route.params.decrement}
							  updateTotal={updateTotal}
							  total={total}
						/>
					</View>
				</View>
				<Divider />
			</View>
		);
  });

  if (!items || items.length == 0) {
    return <EmptyCart navigation={navigation} />;
  } else {
    return (
		<ScrollView>
			<Card>
				<View style={styles.cardColor}>
					<View style={styles.card}>
						<Card.Title>MY CART</Card.Title>
						{cartItems}
						<Divider />
						<Text style={{ fontWeight: "bold", marginTop: '5%' }}>TOTAL   ${total}</Text>
					</View>
				</View>
			</Card>
		</ScrollView>  
    );
  }
};

export default Cart;

//********Styling********

const styles = StyleSheet.create({
	nothingHere: {
		flex:0.4,
		justifyContent: "space-around",
		alignItems: "center",			
	},	
	title: {
		fontFamily: "Philosopher_400Regular",	
		fontSize: 27
	},
	button: {
		height: 40,
		width: 150,
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 2,
		backgroundColor: "rgba(237,167,47,1)",
	},
	card: {
	  	margin:'4.7%'
	},
	cardColor: {
	  	backgroundColor: "#e8dbc3",
		margin:'-4.7%'
	},  
	productContainerParent: {
		flexDirection: "column",
	},
	productContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: "4%",
		marginTop: "3%" 
	},
	productDetails: {
		height: 75,
		justifyContent: "space-between"
	},
	productQuantity: {
		height: 75,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},  
	productDetailsText: {
		fontSize: 19.5,
		fontFamily: "Philosopher_400Regular",
	},
	productDetailsText2: {
		marginBottom: '3%',
	},
});	