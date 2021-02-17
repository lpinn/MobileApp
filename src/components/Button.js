import React from 'react';
import { Button } from 'react-native-elements';

const SolidButton = (props) => {
    <Button title={props.text}
    onPress = {() => {props.onClick}} />
}

export default SolidButton;