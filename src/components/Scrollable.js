import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated, ScrollView } from 'react-native'

export default class Scrollable extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
  }

  scroll = e => {
    const y = e.nativeEvent.contentOffset.y
    this.state.scrollY.setValue(y)
  }

  render() {
    const { children, header, footer, ...restProps } = this.props

    return (
      <React.Fragment>
        {header({ scrollY: this.state.scrollY })}
        <ScrollView {...restProps} scrollEventThrottle={1} onScroll={this.scroll}>
          <View>{children}</View>
        </ScrollView>
        {footer({ scrollY: this.state.scrollY })}
      </React.Fragment>
    )
  }
}
