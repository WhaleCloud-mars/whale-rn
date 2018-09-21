import React from 'react';
import { View } from 'react-native';
import CheckBox from '../index';

export default class CheckBoxDemo extends React.Component {
  render() {
    return (
      <View>
        <CheckBox
          normalImage={require('../img/checkbox_selected_normal.png')}
          checkedImage={require('../img/checkbox_unselected_normal.png')}
          onChange={ischeck => {
            console.warn(ischeck);
          }}
        />
      </View>
    );
  }
}