import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: '11+ Antonyms and Synonyms Revision and Test Aid',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <>
          <Button
          title="Study Antonyms"
          onPress={() => navigate('Antonyms')}
        />
        <Button
          title="Study Synonyms"
          // onPress={() => navigate('Profile', {name: 'Jane'})}
        />
        </>
        
      );
    }
  }
