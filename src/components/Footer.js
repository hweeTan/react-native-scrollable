import React from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, Text } from 'react-native'

export default function Footer({ title, scrollY }) {
  const translateY = scrollY.interpolate({
    inputRange: [0, 400],
    outputRange: [0, 102],
    extrapolate: 'clamp',
  })

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  )
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
})
