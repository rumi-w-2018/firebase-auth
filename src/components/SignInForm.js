import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-fbb48.cloudfunctions.net';

class SignInForm extends Component {
  // ES8 (ES2017)
  state = { phone: '', code: '' };

  // ES8 async - The second request will not be executed until first promise is resolved
  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });
      console.log('data', data.token);
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err.response);
    }
  };

  // FormInput returns String
  render() {
    return (
      <View>
        <View>
          <View style={{ marginBottom: 10 }}>
            <FormLabel>Enter Phone Number</FormLabel>
            <FormInput value={this.state.phone} onChangeText={phone => this.setState({ phone })} />
          </View>
        </View>

        <View>
          <View style={{ marginBottom: 10 }}>
            <FormLabel>Enter Code</FormLabel>
            <FormInput value={this.state.code} onChangeText={code => this.setState({ code })} />
          </View>
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignInForm;
