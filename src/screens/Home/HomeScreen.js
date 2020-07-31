import React, {Component} from 'react';
import {SafeAreaView, Button, Text, View, Image} from 'react-native';
import styles from './styles';

class HomeScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <>
        <Image style={styles.logo} source={require('./logo.jpg')} />
        <Text style={styles.admin}>Admin.Functions</Text>
        <SafeAreaView style={styles.container}>
          <View style={styles.view}>
            <Button
              title="Add Product"
              color="#545454"
              onPress={() => navigation.navigate('AddProducts')}
            />
          </View>
          <View style={styles.view}>
            <Button
              title="Check Orders"
              color="#545454"
              onPress={() => navigation.navigate('OrderDetails')}
            />
          </View>
          <View style={styles.view}>
            <Button
              title="Update Products"
              color="#545454"
              onPress={() => navigation.navigate('Update')}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default HomeScreen;
