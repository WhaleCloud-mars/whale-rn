import React from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import checkedImage from '../../icons/checkbox_selected_normal.png';
import normalImage from '../../icons/checkbox_unselected_normal.png';
import checkedDisableImage from '../../icons/checkbox_selected_disabled.png';
import normalDisableImage from '../../icons/checkbox_unselected_disabled.png';

export default class CheckBox extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    isChecked: PropTypes.bool,
    disable: PropTypes.bool,
  };

  static defaultProps = {
    disable: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked || false,
    };
  }

  onChange = () => {
    const { isChecked } = this.state;
    this.props.onChange(!isChecked);
    this.setState({
      isChecked: !isChecked,
    });
  };

  getChecked() {
    return this.state.isChecked;
  }

  setChecked(isChecked) {
    this.setState({
      isChecked,
    });
  }

  render() {
    return (
      <TouchableHighlight
        disabled={this.props.disable}
        underlayColor="transparent"
        onPress={this.onChange}
      >
        {this.props.disable ? (
          <Image
            source={
              this.state.isChecked
                ? this.props.checkedDisableImage || checkedDisableImage
                : this.props.normalDisableImage || normalDisableImage
            }
            style={[stytles.img, this.props.stytles]}
          />
        ) : (
          <Image
            source={
              this.state.isChecked
                ? this.props.checkedImage || checkedImage
                : this.props.normalImage || normalImage
            }
            style={[stytles.img, this.props.stytles]}
          />
        )}
      </TouchableHighlight>
    );
  }
}

const stytles = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
  },
});
