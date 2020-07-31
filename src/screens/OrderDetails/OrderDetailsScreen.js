import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import Header from './header';
import OrderItem from './orders';
import styles from './styles';

// function TodoItem(item) {
//   return (
//     <TouchableOpacity>
//       <View style={styles.item}>
//         <Text style={styles.itemText}>OrderId : {item.id}</Text>
//         <Text style={styles.itemText}>Customer Id : {item.userId}</Text>
//         <Text style={styles.itemText}>
//           Address Line 1 : {item.addressLine1}
//         </Text>
//         <Text style={styles.itemText}>Address Line 2: {item.addressLine2}</Text>
//         <Text style={styles.itemText}>City : {item.city}</Text>
//         <Text style={styles.itemText}>State : {item.state}</Text>
//         <Text style={styles.itemText}>Quantity : {item.quantity}</Text>
//         <Text style={styles.itemText}>Price : {item.price}</Text>
//         <Text style={styles.itemText}>Pincode : {item.pincode}</Text>
//         <Text style={styles.itemText}>Ordered Time : {item.orderDateTime}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemlist: [],
      render: true,
    };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    var data;
    await fetch(
      'http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/order/previousOrders',
    )
      .then((response) => response.json())
      .then((datas) => (data = datas));

    // console.log(data);
    this.setState({
      itemlist: data,
      render: true,
    });
  }

  renderItem = ({item}) => {
    // console.log(item)
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.itemText}>OrderId : {item.id}</Text>
          <Text style={styles.itemText}>Customer Id : {item.userId}</Text>
          <Text style={styles.itemText}>
            Address Line 1 : {item.addressLine1}
          </Text>
          <Text style={styles.itemText}>
            Address Line 2: {item.addressLine2}
          </Text>
          <Text style={styles.itemText}>City : {item.city}</Text>
          <Text style={styles.itemText}>State : {item.state}</Text>
          <Text style={styles.itemText}>Quantity : {item.quantity}</Text>
          <Text style={styles.itemText}>Price : {item.price}</Text>
          <Text style={styles.itemText}>Pincode : {item.pincode}</Text>
          <Text style={styles.itemText}>
            Ordered Time : {item.orderDateTime}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  // const [orders, setorder] = useState(data);

  // const pressHandler = (key) => {
  //   const msg = 'OrderId ' + key + ' Delivered Successfully';
  //   alert(msg);
  //   setorder((prevorder) => {
  //     return prevorder.filter((todo) => todo.key !== key);
  //   });
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <Header /> */}
        <View style={styles.list}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={this.state.itemlist}
            renderItem={this.renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      </View>
    );
  }
}
