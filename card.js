
/*

      CARD NAME: 
      CARD AUTHOR:
      CREATION DATE:
      NOTES:

*/

import React, {Component} from 'react';
import CardComponent from './CardComponent.js';
// Add elements here for React Native components
import { StyleSheet, Text, View } from 'react-native';
// Add elements here for React Native Paper components
import { Button } from 'react-native-paper';

const size = {
    width: 400,
    height: 500
};

class Card extends Component{

    // Card state
    state = {
        status: "loading",
        statusText: "Stiamo caricando un po' di cose",
        progress: 0
    };

    constructor(props){
        super(props);
    }

    render(){
        return (
            <CardComponent title="Card title" size={size} status={this.state.status} statusText={this.state.statusText} progress={this.state.progress}>

                {/* INSERT HERE THE CARD CONTENT */}
                <Text>Card content</Text>

            </CardComponent>
        );
    }

    componentDidMount(){

        // Example
        setTimeout(() => {
            this.setStatus("ready");
        }, 2000);
    }


    /*
    
        Function to call in order to update the component status
        ATTENZIONE: NON MODIFICARE QUESTE FUNZIONI
    
    */
    setStatus(type="loading", description="", progress=0){
        switch (type) {
            case "loading":
                this.setState({
                    status: type,
                    statusText: description || "Stiamo caricando un po' di cose",
                    loadingText: description,
                });
                break;

            case "progress":
                this.setState({
                    status: type,
                    statusText: description || "Un po' di pazienza",
                    progressText: description,
                    progress: progress
                });
                break;
            
            case "error":
                this.setState({
                    status: type,
                    statusText: description || "Sembra esserci stato un problema",
                    errorText: description,
                });
                break;

            case "done":
                this.setState({
                    status: type,
                    statusText: description || "Ora puoi proseguire con le altre operazioni",
                    doneText: description,
                });
                break;

            case "ready":
                this.setState({
                    status: type,
                });
                break;
        }
    }

    updateProgress(progress=0){
        this.setState({progress});
    }
}


// MODIFY STYLES HERE
const styles = new StyleSheet.create({

});

export default Card;