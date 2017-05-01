import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native';

export default class ExerciseInterface extends Component {
  constructor(x) {
    super(x);
    this.state = {
        x: 0,
        y: 0,
    };
    this.state.z = 0;
  }
  buttonClick(myVar) {
    this.setState({x: this.state.x + 1});

  }
    buttonClick2(myVar) {
      this.setState({z: this.state.z + 1});
    }
  buttonClick3(myVar) {
    this.setState({x: this.state.x + 1});
    this.setState({z: this.state.z + 1});
    this.setState({z: this.state.z + 1});
    this.setState({z: this.state.z + 1});
    this.setState({z: this.state.z + 1});
    this.setState({z: this.state.z + 1});
    this.setState({z: this.state.z + 1});
    this.setState({z: this.state.z + 1});
    this.setState({z: this.state.z + 1});

  }
  massive(numJumps) {
      this.setState({
        y: this.state.y + 10,
x: this.state.x + 10,
jump: this.state.jump + 10,
      });
  }

  render() {
    const values = [
      {a: 'Hops', b: this.state.x},
      {a: 'Skips', b: this.state.y},
      {a: 'Jumps', b: this.state.z},
    ];
    const actions = [
      {a: 'Hop', b: () => this.setState({x: this.state.x + 1})},
      {a: 'Skip', b: () => this.setState({y: this.state.y + 1})},
      {a: 'Jump', b: () => this.setState({jumps: this.state.jumps + 1})},
      {a: 'Jump 10 times', b: () => this.setState({jumps: this.state.jumps + 10})},
    ]
    return (
      <View style={styles.container}>
        <View style={styles.one}>
          <View style={styles.style}>
            <Text>Hops</Text>
            <Text>{this.state.x}</Text>
          </View>
          <View style={styles.style}>
            <Text>Skips</Text>
            <Text>{this.state.y}</Text>
          </View>
          <View style={styles.style}>
            <Text>Jumps</Text>
            <Text>{this.state.x}</Text>
          </View>
        </View>
        <View style={styles.clicks}>
          <Button
            title="Skip"
            onPress={() => this.setState({y: this.state.y + 1})}
          />
          <Button
            title="Hop"
            onPress={() => this.buttonClick()}
          />
          <Button
            title="Jump"
            onPress={this.buttonClick2.bind(this)}
          />
          <Button
            title="Jump 10 times"
            onPress={this.buttonClick2.bind(this)}
          />
          <Button
            title="Massive Workout"
            onPress={() => this.massive()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
  },
  one: {
  },
  one: {
    marginTop: 40,
    flexDirection: 'row',
    height: 50,
  }, three: {
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  clicks: {
    flex: 1,
    justifyContent: 'center',

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
