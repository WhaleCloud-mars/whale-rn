import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class ImageItem extends Component {
  componentWillMount() {
    let { width } = Dimensions.get('window');
    const { imageMargin, imagesPerRow, containerWidth } = this.props;

    if (typeof containerWidth !== 'undefined') {
      width = containerWidth;
    }
    this._imageSize = (width - (imagesPerRow + 1) * imageMargin) / imagesPerRow;
  }

  render() {
    let { item, selected, selectedMarker, imageMargin } = this.props;

    let marker = selectedMarker;
    if (!marker) {
      marker = (
        <Image
          style={[styles.marker, { width: 25, height: 25 }]}
          source={require('../../icons/checkbox_selected_normal.png')}
        />
      );
    }

    const image = item.node.image;

    return (
      <TouchableOpacity
        style={{ marginBottom: imageMargin, marginRight: imageMargin }}
        onPress={() => this._handleClick(image)}
        activeOpacity={0.6}
      >
        <Image
          source={{ uri: image.uri }}
          style={{ height: this._imageSize, width: this._imageSize }}
        />
        {selected ? marker : null}
      </TouchableOpacity>
    );
  }

  _handleClick(item) {
    this.props.onClick(item);
  }
}

const styles = StyleSheet.create({
  marker: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
  },
});

ImageItem.defaultProps = {
  item: {},
  selected: false,
};

ImageItem.propTypes = {
  item: PropTypes.object,
  selected: PropTypes.bool,
  selectedMarker: PropTypes.element,
  imageMargin: PropTypes.number,
  imagesPerRow: PropTypes.number,
  onClick: PropTypes.func,
};

export default ImageItem;
