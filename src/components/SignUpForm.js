import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-fbb48.cloudfunctions.net';

class SignUpForm extends Component {
  // ES8 (ES2017)
  state = { phone: '' };

  // ES8 async - The second request will not be executed until first promise is resolved
  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    } catch (err) {
      console.log(err.response);
    }
  };

  // FormInput returns String
  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput value={this.state.phone} onChangeText={phone => this.setState({ phone })} />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUpForm;
