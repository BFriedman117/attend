import React from 'react'
import { View, Text, Button } from 'react-native'

export default class TestScreenTwo extends React.Component {
  render () {
    return (
      <View>
        <Text>Some Text for the Test</Text>
        <Text>{this.props.navigation.getParam('msg', "No Message").message}</Text>
        <Button title="Know" onPress={() => { console.log(this.props)}}></Button>
      </View>
    )
  }
}
