import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import iconRight from '../../icons/icon_right.png';
import areaDataSouce from '../AreaSelect/CityCode';
import AreaSelect from '../AreaSelect/index';
import ModalBasics from '../ModalBasics/index';

export default class AreaAVItem extends React.Component {
  static propTypes = {
    avTitle: PropTypes.string,
    avInputTint: PropTypes.string,
  };

  static defaultProps = {
    avTitle: '标题',
    avInputTint: '请输入',
  };

  constructor(props) {
    super(props);
    this.dataSouce = areaDataSouce.CityZoneCode.China;
    this.isCalled = false;
    this.state = {
      inputText: '',
      areaTitle: '',
    };
  }

  setText(text) {
    this.setState({
      inputText: text,
    });
  }

  getText() {
    return this.state.inputText;
  }

  getView(side, modal, modalOpacity = 0.7) {
    const modalVIew = (
      <AreaSelect
        containerStyle={{ height: 230 }}
        side={side}
        modal={modal}
        modalOpacity={modalOpacity}
        ref={v => (this.modalDrawerView = v)}
        data={this.dataSouce}
        onCancel={() => {
          this.modalDrawerView && this.modalDrawerView.close();
        }}
        onSure={(x1, x2, x3) => {
          this.modalDrawerView && this.modalDrawerView.close();
          let area = this.dataSouce.Province[x1].name
            .concat('-')
            .concat(this.dataSouce.Province[x1].City[x2].name)
            .concat('-')
            .concat(this.dataSouce.Province[x1].City[x2].Area[x3].name);

          this.setState({
            areaTitle: area,
          });

          this.props.onChangeArea(area);
        }}
      />
    );
    return ModalBasics.show(modalVIew);
  }

  HandlerOnceTap = (functionTobeCalled, interval = 3000) => {
    if (!this.isCalled) {
      this.isCalled = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isCalled = false;
      }, interval);
      return functionTobeCalled();
    }
    return null;
  };

  render() {
    return (
      <View style={[styles.main, this.props.styleAVMain]}>
        <View style={[styles.titleView, this.props.styleAVTitleView]}>
          <Text style={[styles.title, this.props.styleAVTitle]}>
            {this.props.avTitle}
          </Text>

          <TouchableHighlight
            activeOpacity={0.5}
            style={{ flex: 1 }}
            underlayColor="white"
            onPress={
              // () => this.getView('bottom', false)
              () => this.HandlerOnceTap(() => this.getView('bottom', false))
            }
          >
            <View
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
            >
              <Text style={[styles.areaTitle, this.props.styleAVAreaTitle]}>
                {this.state.areaTitle}
              </Text>

              <Image
                style={[styles.imgBk, this.props.styleAVImg]}
                source={iconRight}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.line} />

        <View style={styles.leftView}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.input, this.props.styleAVInput]}
            onPress={() => this.TextInput.focus()}
          >
            <TextInput
              style={{ padding: 0 }}
              ref={textInput => (this.TextInput = textInput)}
              placeholder={this.props.avInputTint}
              onChangeText={text => {
                this.props.onAVChange(text);
                this.setText(text);
              }}
              multiline
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: 120,
    backgroundColor: 'white',
  },

  titleView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
    height: 0.5,
    backgroundColor: '#EFEEEC',
  },

  leftView: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'black',
    fontSize: 14,
    padding: 10,
  },
  areaTitle: {
    color: 'gray',
    fontSize: 12,
    width: '100%',
    flex: 1,
    textAlign: 'right',
  },
  imgBk: {
    marginRight: 10,
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  input: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
});
