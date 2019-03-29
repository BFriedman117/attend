import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import ViewRightIcon from '../components/ViewRightIcon'
import FakeMessage from '../components/FakeMessage'

export default class TestScreen extends React.Component {
  render () {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Meetings Near You</Text>
        </View>
        <View style={styles.scrollContainer}>
          {
            meetings.map((meeting, index) =>
            <TouchableOpacity style={styles.messageContainer} key={index} onPress={() => this.props.navigation.navigate('Two', { meeting })}>
              <FakeMessage meeting={meeting} />
            </TouchableOpacity>
          )
        }
        </View>
      </View>
    )
  }
}

const meetings = [
  {
    title: 'EY Mincha',
    time: '2:30 PM',
    address: '5 Times Square',
    city: 'New York',
    state: 'NY'
  },
  {
    title: "Midtown Lunch n' Learn",
    time: '12:30 PM',
    address: '1372 Broadway',
    city: 'New York',
    state: 'NY'
  },
  {
    title: "Wall Street Maariv",
    time: '7:00 PM',
    address: '5 Hanover Sq.',
    city: 'New York',
    state: 'NY'
  },
  {
    title: "Thursday Night Shiur",
    time: '8:30 PM',
    address: '305 W 79th St',
    city: 'New York',
    state: 'NY'
  }
]

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 50,
    marginVertical: 15
  },
  headerContainer: {
    marginVertical: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#8E6E53'
  },
  messageContainer: {
    marginVertical: 3
  },
  headerText: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#9d6f4d'
  }
})
