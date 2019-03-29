import React from 'react';
import { Icon } from 'expo';

export default class ViewRightIcon extends React.Component {
  render () {
    return (
      <Icon.Ionicons
        name='ios-arrow-forward'
        size={26}
        style={{ color: 'lightgray' }}
      />
    )
  }
}
