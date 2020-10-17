import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import exampleViewModel from './ExampleViewModel';

const {width, height} = Dimensions.get('window');

export function ExampleView() {
  const {count, _increment, _decrement} = exampleViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <ExampleButton text={'+'} onPress={_increment} />
        <ExampleButton text={'-'} onPress={_decrement} />
      </View>
    </View>
  );
}

function ExampleButton(props) {
  const {onPress, text} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      ios: 20,
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginHorizontal: 10,
    backgroundColor: '#0077CC',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
  },
  counter: {
    fontSize: 30,
    color: '#323232',
  },
});
