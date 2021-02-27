import React, { useState } from "react";
import { BottomSheet, ListItem } from "react-native-elements";

const list = [
  {
    title: "Whole Bean",
    //onPress: () =
  },
  {
    title: "French Press",
  },
  {
    title: "",
  },
];

const Menu = (props) => {
  
  return (
    <ButtonSheet
      //isVisisble={isVisible}
      containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
    >
      {list.map((l, i) => (
        <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
          <ListItem.Content>
            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </ButtonSheet>
  );
};

// for the different types of grinds . whole, course, french press

// use a drop down menu
//https://reactnativeelements.com/docs/bottomsheet

// this shouldnt hold state though, should be in product.
