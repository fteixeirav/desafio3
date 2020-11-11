import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PeopleList from '../component/PeopleList'

const apimaster = axios.create({
  baseURL: 'http://demo4381339.mockable.io/anime'
});



export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      animes: []
    }
  }

  async componentDidMount() {
    const response = await apimaster.get('http://demo3691685.mockable.io/felipe');
    this.setState({ animes: response.data });
  }
 
  render(){
   
    return (
      <View>
      <PeopleList animes={this.state.animes} 
      onPressItem={(anime) => {
        this.props.navigation.navigate('Informações', {"anime": anime})
        }} /> 
      </View>
    );
  }
 
}