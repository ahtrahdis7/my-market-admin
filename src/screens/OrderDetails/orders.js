import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import styles from './styles'

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity >
      <View style={styles.item}>
        <Text style={styles.itemText}>OrderId : {item.key}</Text>
        <Text style={styles.itemText}>Costumer Name : {item.CustName}</Text>
        <Text style={styles.itemText}>Contact : {item.Contact}</Text>
        <Text style={styles.itemText}>Address : {item.Address}</Text>
      </View>
    </TouchableOpacity>
  )
}
