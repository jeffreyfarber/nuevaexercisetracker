import React, { Component } from 'react';
import ExerciseInterface from './exerciseInterface.js';
import {
  AppRegistry
} from 'react-native';

export default class NuevaExerciseTracker extends Component {
  render() {
    return <ExerciseInterface />;
  }
}

AppRegistry.registerComponent('NuevaExerciseTracker', () => NuevaExerciseTracker);
