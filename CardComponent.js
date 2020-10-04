/*

      ATTENZIONE: NON DEVI MODIFICARE QUESTO FILE

*/


import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar, ActivityIndicator, Button } from 'react-native-paper';

class CardComponent extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={[styles.card, {
                height: this.props.size.height,
                width: this.props.size.width
            }]}>
                <Text style={styles.title}>{this.props.title || "Card title"}</Text>
                <View style={{flex: 7}}>
                    {
                        // Shows the card content when its status is ready
                        this.props.status === "ready" && this.props.children
                    }
                    {
                        // Shows the card loading when its status is loading
                        this.props.status === "loading" && (
                            <View style={styles.statusView}>
                                <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
                                <Text style={styles.descriptionLable}>{this.props.statusText}</Text>
                            </View>
                        )
                    }
                    {
                        // Shows the card progress when its status is progress
                        this.props.status === "progress" && (
                            <View style={styles.statusView}>
                                <ProgressBar color="#fff" style={{width: 300, height: 8}} progress={this.props.progress}></ProgressBar>
                                <Text style={styles.descriptionLable}>{this.props.statusText}</Text>
                            </View>
                        )
                    }
                    {
                        // Shows the card error when its status is error
                        this.props.status === "error" && (
                            <View style={styles.statusView}>
                                <Text style={styles.errorLabel}>Ops!</Text>
                                <Text style={styles.descriptionLable}>{this.props.statusText}</Text>
                                <Button style={[styles.button, {backgroundColor: "#b71c1c"}]} 
                                    labelStyle={styles.textButton} mode="contained" onPress={() => {
                                        this.setStatus();
                                        if(typeof this.props.reloadCard === "function")
                                            this.props.reloadCard();
                                    }}>
                                    Ricarica
                                </Button>
                            </View>
                        )
                    }
                    {
                        // Shows the card done when its status is done
                        this.props.status === "done" && (
                            <View style={styles.statusView}>
                                <Text style={styles.errorLabel}>Operazione completata!</Text>
                                <Text style={styles.descriptionLable}>{this.props.statusText}</Text>
                                <Button style={[styles.button]} 
                                    labelStyle={styles.textButton} mode="contained" onPress={() => {
                                        this.setStatus();
                                        if(typeof this.props.reloadCard === "function")
                                            this.props.reloadCard();
                                    }}>
                                    Ricarica
                                </Button>
                            </View>
                        )
                    }
                </View>
            </View>
        );
    }

}

const styles = new StyleSheet.create({
    card: {
        backgroundColor: "green",
        width: 500,
        borderRadius: 8,
        padding: 32,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.3,
        minWidth: 400,
        minHeight: 500
    },
    title: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 32,
        flex: 1
    },
    descriptionLable: {
        width: "100%",
        textAlign: "center",
        marginTop: 16,
        color: "#fff"
    },
    errorLabel: {
        color: "#fff",
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center"
    },
    button: {
        marginTop: 32,
        backgroundColor: "#311b92"
    },
    textButton: {
        color: "#fff"
    },
    statusView: {
        height: "100%",
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CardComponent;