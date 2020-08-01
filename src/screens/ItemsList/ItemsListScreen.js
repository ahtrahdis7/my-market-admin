/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import styles from './styles';
import img from './image.png'

export default class ItemsListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    console.log(this.props);
    return {
      title: this.props.route.params.itemType,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      itemlist: [],
      render: true,
    };
  }
  getData(itemlist) {
    this.setState({
      itemlist: itemlist,
      render: true,
    });
  }
  async componentDidUpdate() {
    const itemType = this.props.route.params.itemType;
    await fetch(
      'http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/search/category/' +
      itemType,
    )
      .then((response) => response.json())
      .then((itemlist) => this.getData(itemlist))
      .catch((err) => console.log(err));
  }

  async componentDidMount() {
    // console.log(this.props.route);
    const itemType = this.props.route.params.itemType;
    await fetch(
      'http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/search/category/' +
      itemType,
    )
      .then((response) => response.json())
      .then((itemlist) => this.getData(itemlist))
      .catch((err) => console.log(err));

    // console.log(this.state.itemlist);
  }

  onPressUpdate(item) {
    this.props.navigation.navigate('UpdateDetails', { item: item })
  }

  onPressDelete(item) {
    const obj = { productId: item.productId };
    fetch('http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/admin/deleteProduct', {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(function (res) {
        if (res) {
          alert('Delete Request Success');
        }
      })
      .catch((err) => console.log('Something went Wrong'));
    this.props.navigation.navigate('Home')
  }

  renderMenuItem = ({ item }) => {
    // console.log(item)
    const img2 = { uri: 'data:image/png;base64,' + item.imageLink };
    const imgg = item.imageLink !== null ? img2 : img;
    return (
      <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)">
        <View style={styles.card}>
          <Image
            style={styles.photo}
            source={imgg}
          />
          <View style={styles.textSection}>
            <Text style={styles.title}>ProductId: {item.productId}</Text>
            <Text style={styles.title}>Name: {item.name}</Text>
            <Text style={styles.title}>Price:{item.price}</Text>
            <Text style={styles.title}>Category: {item.category}</Text>
            <Text style={styles.title}>Quantity: {item.quantity}</Text>
            <Text style={styles.title}>Discount: {item.discount ? item.discount : "0"}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button style={styles.update} color="#008037" title="Update" onPress={() => this.onPressUpdate(item)} />
            <Text style={{ color: 'white' }}>|</Text>
            <Button style={styles.delete} color="#a30505" title="Delete" onPress={() => this.onPressDelete(item)} />
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    // const {navigation} = this.props;

    const data = this.state.itemlist;
    if (data !== undefined) {
      return (
        <ScrollView>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={this.renderMenuItem}
            numColumns={1}
            keyExtractor={(item) => item._id}
          />
        </ScrollView>
      );
    } else {
      return (
        <View>
          <Text>Check Your Network</Text>
        </View>
      );
    }
  }
}
