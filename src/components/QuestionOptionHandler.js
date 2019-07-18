import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import data from '../data/data.json'
import { Container, Tab, Tabs, ScrollableTab, Left } from 'native-base';


export default class QuestionOptionHandler extends React.Component {
   
    constructor (props) {
        super(props)
        this.state = {
            antonymIndex: 0,
            answerOutcome:false,
            end: false,
            score: 0,
            lastOptionChosen: false,
            lastCorrectAnswer: '',
            lastWord: '',
            firstQuestion: true,
            toggleAnswerOutcome: false
        }
    }

    static navigationOptions = {
        //   title: '11+ Antonyms and Synonyms Revision and Test Aid',
        };

    handleOptionClick (option) {
        console.log(option)

        const correctAnswer = data.antonyms[this.state.antonymIndex].correctAnswer
        const word = data.antonyms[this.state.antonymIndex].word
        const currentScore = this.state.score
        

        if(this.state.antonymIndex === data.antonyms.length - 1){
            this.setState({
                end: true,
                lastCorrectAnswer: correctAnswer,
                lastOptionChosen: option,
                lastWord: word,
                score: this.handleScore(option, correctAnswer, currentScore)
            })
        } else {
            this.setState({
                
                lastCorrectAnswer: correctAnswer,
                lastOptionChosen: option,
                lastWord: word,
                firstQuestion: false,
                toggleAnswerOutcome: this.toggleAnswerOutcome(),
                score: this.handleScore(option, correctAnswer, currentScore)
            })
        }
        
    }

    handleScore(option, correctAnswer, currentScore){
        let newScore = currentScore
        if(correctAnswer === option){
            newScore++
        } 

        return newScore
    }
    

    nextQuestion = () => {
        console.log('clicked next q')
        const plusOne = this.state.antonymIndex + 1
        this.setState({
            antonymIndex: plusOne,
            toggleAnswerOutcome: this.toggleAnswerOutcome()
        })
    }

    toggleAnswerOutcome(){
        const toggledAnswerOutcome = !this.state.toggleAnswerOutcome
        return toggledAnswerOutcome
    }


    componentDidUpdate(){
        console.log('compupdate score', this.state.score)
        
    }





    render() {
        const {navigate} = this.props.navigation;
        const antonymQs = data.antonyms
        console.log(antonymQs)
        
        return (
            <View>
                {/* {!this.state.toggleAnswerOutcome ? 
                    <View>
                        {this.state.end ? 
                            <Text>You scored {this.state.score} out of {data.antonyms.length} </Text> :  
                            <View>
                                What is the antonym of: {antonymQs[this.state.antonymIndex].word} 
                                <View>
                                    {antonymQs[this.state.antonymIndex].options.map(option => {
                                        return <Button key={option} onPress={() => this.handleOptionClick(option) }>{option}</Button>
                                    })}
                                </View>
                            </View>
                        }                      
                    </View> :
                    <AnswerOutcome firstQuestion={this.state.firstQuestion} nextQuestion={this.nextQuestion} lastWord={this.state.lastWord} lastOptionChosen={this.state.lastOptionChosen} lastCorrectAnswer={this.state.lastCorrectAnswer} antonymIndex={this.state.antonymIndex}/>
                } */}
            </View>
        )
    }

    
   
  }