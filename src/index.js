/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Scrollable from './components/Scrollable'
import Header from './components/Header'
import Footer from './components/Footer'

const mockContent = new Array(100).fill(1)

export default class App extends Component {
  renderContent = () => {
    console.log(mockContent)
    return mockContent.map((item, index) => (
      <View key={index} style={styles.itemContainer}>
        <Text style={styles.itemText}>{index}</Text>
      </View>
    ))
  }

  render() {
    return (
      <Scrollable
        header={({ scrollY }) => <Header scrollY={scrollY} title="Header" />}
        footer={({ scrollY }) => <Footer scrollY={scrollY} title="Footer" />}
      >
        {this.renderContent()}
      </Scrollable>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: '#000',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  itemText: {
    textAlign: 'center',
    color: '#000',
  },
})
