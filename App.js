import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';
import { firebaseConfig } from './src/config/config';

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <SignUpForm />
            <SignInForm />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});
