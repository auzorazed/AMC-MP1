import React, { Component } from 'react';
import { StyleSheet, Switch, View, Text, Image } from 'react-native';

export default class App extends Component {
  state = {
    switchValue: false
  }

  render() {
    const { switchValue } = this.state;
    const backgroundColor = switchValue ? 'yellow' : 'black';
    const textColor = switchValue ? 'black' : 'white';

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.textStyle, { color: textColor }]}>AMC MP1</Text>
        <Image
          source={switchValue ? require('./assets/switch-on.jpg') : require('./assets/switch-off.jpg')}
          style={styles.bulbImage}
        />
        <Switch
          style={{ marginBottom: 10 }}
          value={switchValue}
          onValueChange={this.handleSwitchToggle}
        />
        <Text style={[styles.textStyle, { color: textColor }]}>{switchValue ? 'ON' : 'OFF'}</Text>
      </View>
    );
  }

  handleSwitchToggle = (switchValue) => {
    this.setState({ switchValue });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bulbImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

