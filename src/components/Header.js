import React from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet } from 'react-native'

export default function Header({ title, scrollY, fontSizeRange }) {
  const paddingTranslate = scrollY.interpolate({
    inputRange: [0, 400],
    outputRange: [16, 0],
    extrapolate: 'clamp',
  })

  const fontSizeTranslate = scrollY.interpolate({
    inputRange: [0, 400],
    outputRange: fontSizeRange,
    extrapolate: 'clamp',
  })

  return (
    <Animated.View style={[styles.container, { padding: paddingTranslate }]}>
      <Animated.Text style={[styles.text, { fontSize: fontSizeTranslate }]}>{title}</Animated.Text>
    </Animated.View>
  )
}

Header.propTypes = {
  fontSizeRange: PropTypes.arrayOf(PropTypes.number),
}

Header.defaultProps = {
  fontSizeRange: [30, 1],
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
})
