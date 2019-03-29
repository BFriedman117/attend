import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ViewRightIcon from './ViewRightIcon'

export default class FakeMessage extends React.Component {

  render () {
    return (
      <View style={styles.meeting}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{this.props.meeting.title}</Text>
          <Text style={styles.time}>{this.props.meeting.time}</Text>
          <Text style={styles.text}>{fullAddress(this.props.meeting)}</Text>
        </View>
        <ViewRightIcon style={styles.right} />
      </View>
    )
  }
}

const trunc = (str, amt) => str.length > amt ? str.slice(0, amt).concat('...') : str

const fullAddress = (meeting) => [meeting.address, meeting.city, meeting.state].join(' ')

const styles = StyleSheet.create({
  meeting: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#9d6f4d',
    borderWidth: .7,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1
  },
  text: {
    color: '#8E6E53',
    borderBottomWidth: .5,
    borderBottomColor: '#6D5440'
  },
  title: {
    fontWeight: '800',
    marginBottom: 4,
    color: '#6D5440'
  },
  time: {
    fontWeight: '500',
    color: '#6D5440'
  },
  right: {
    flex: 2
  }
})
