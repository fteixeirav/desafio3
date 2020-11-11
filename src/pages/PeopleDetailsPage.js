import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'

export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "anime": props.route.params.anime
        }
    }

    render(){
        return(
            <View style={style.line}>
                 <Text style={style.lineText}>          
                 <h1></h1>
                Potência: 
                <Text> {this.state.anime.show.potencia}</Text>
                <h1></h1>
                Link: 
                <Text> {this.state.anime.show.url}</Text>
                <h1></h1>
                Nome:
                <Text> {this.state.anime.show.name}</Text> 
                <h1></h1>
                Combustível:
                <Text> {this.state.anime.show.combustivel}</Text>
                <h1></h1>
                Ano de lançamento:
                <Text> {this.state.anime.show.ano}</Text>
                <h1></h1>
                Modelo:
                <Text> {this.state.anime.show.modelo}</Text>
                <h1></h1>            
                </Text>
              
                <img src={this.state.anime.show.image.medium}/>  
                <h1></h1>
            </View>
        )
    }
    
}
const style = StyleSheet.create({
    line: {
        
        borderBottomWidth: 1,
        borderBottomColor: '#ffa',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 20,
        paddingTop: 20,
        backgroundColor: '#534953'
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 10,
        flex: 1,
        borderRadius: 50
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 7
    }
}
)