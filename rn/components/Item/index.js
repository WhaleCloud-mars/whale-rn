import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ItemBasics from '../ItemBasics';

export default class Item extends ItemBasics {
  static propTypes = {
    ...ItemBasics.propTypes,
  };

  static defaultProps = {
    rightIcon: 'indicator',
  };

  renderLeftIcon(leftIcon) {
    let { leftIconStyle } = this.props;
    leftIconStyle = [{ width: 22, height: 22 }].concat(leftIconStyle);
    if ((leftIcon || leftIcon === 0) && !React.isValidElement(leftIcon)) {
      leftIcon = (
        <View style={{ paddingRight: 12 }}>
          <Image style={leftIconStyle} source={leftIcon} />
        </View>
      );
    }
    return leftIcon;
  }

  renderRightIcon(rightIcon) {
    if (rightIcon === 'none') rightIcon = null;
    if (rightIcon && !React.isValidElement(rightIcon)) {
      let imageSource;
      let tintColor;
      let width = 8;
      let height = 12.5;
      switch (rightIcon) {
        case 'empty':
          imageSource = null;
          break;
        case 'check':
          imageSource = require('../../icons/check.png');
          tintColor = '#007aff';
          break;
        case 'indicator':
          imageSource = require('../../icons/indicator.png');
          tintColor = '#bebebe';
          width = 8;
          height = 12.5;
          break;
        default:
          imageSource = rightIcon;
      }
      let imageStyle = {
        width,
        height,
        tintColor,
      };
      rightIcon = (
        <View style={{ paddingLeft: 15 }}>
          <Image style={imageStyle} source={imageSource} />
        </View>
      );
    }
    return rightIcon;
  }

  renderTitle(title, details) {
    const contentStyle = {
      flex: 1,
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      width: 225,
    };

    //title
    if (typeof title === 'string' || typeof title === 'number') {
      title = (
        <Text
          numberOfLines={1}
          style={{
            color: '#333',
            fontSize: 14,
            marginBottom: details ? 7 : 0,
          }}
        >
          {title}
        </Text>
      );
    }

    //detail
    if (typeof details === 'string' || typeof details === 'number') {
      details = (
        <Text
          numberOfLines={1}
          style={{
            color: '#888',
            fontSize: 12,
          }}
        >
          {details}
        </Text>
      );
    }
    return (
      <View style={contentStyle}>
        {title}
        {details}
      </View>
    );
  }

  renderNote(note) {
    if (typeof note === 'string' || typeof note === 'number') {
      note = (
        <View
          style={{
            maxWidth: 78,
            overflow: 'hidden',
            paddingLeft: 15,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: '#888',
              fontSize: 13,
              // whiteSpace: 'nowrap',
            }}
          >
            {note}
          </Text>
        </View>
      );
    }
    return note;
  }
}
