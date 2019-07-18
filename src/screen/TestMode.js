import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import QuestionOptionHandler from '../components/QuestionOptionHandler'


export default class TestModeScreen extends React.Component {
    static navigationOptions = {
    //   title: '11+ Antonyms and Synonyms Revision and Test Aid',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <>
            <View>
                <QuestionOptionHandler />
                <Text>
                    test mode muahaha
                </Text>
            </View>

        </>
        
      );
    }
  }