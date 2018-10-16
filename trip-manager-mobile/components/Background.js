import React from 'react';
import { ImageBackground, View } from 'react-native';
import base from '../styles/base';

export default class Background extends React.Component {
  render() {
    return (
      <View style={base.container}>
        {this.props.children}
      </View>
    );
    // return (
    //   <ImageBackground style={base.container} source={require('../assets/images/background.jpeg')}>
    //     {this.props.children}
    //   </ImageBackground>
    // );
  }
}