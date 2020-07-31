/* eslint-disable no-alert */
import React from 'react';
import {SafeAreaView, Button, Text, View, TextInput} from 'react-native';
import styles from './styles';

async function submitProduct(props, itemObj) {
  // console.log(props);
  // console.log(itemObj);
  if (
    itemObj.name !== '' &&
    itemObj.quantity !== '' &&
    itemObj.price !== '' &&
    itemObj.category !== ''
  ) {
    var object = {
      name: itemObj.name,
      category: itemObj.category,
      price: itemObj.price,
      quantity: itemObj.quantity,
      discount: itemObj.discount,
      imageLink: itemObj.image,
    };
    await fetch(
      'http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/admin/updateProduct',
      {
        method: 'POST',
        body: JSON.stringify(object),
      },
    )
      .then((response) => response.json())
      .then(function (res) {
        alert('|| Update Request Success, \nrefresh your page to see the updated product ||\n redirecting...');
        props.navigation.goBack();
        // AddProductsScreen(props);
      })
      // eslint-disable-next-line handle-callback-err
      .catch((err) => console.log('Something went Wrong'));
    // props.navigation.navigate('Home');
  } else {
    alert('Some fields are empty');
    // AddProductsScreen(props);
  }
}

function UpdateDetails(props) {

  const item = props.route.params.item;
//   console.log(item)

  const [Name, onChangeText] = React.useState(item.name);
  const [Quantity, onChangeQty] = React.useState(item.quantity.toString());
  const [Price, onChangePrice] = React.useState(item.price.toString());
  const [Category, onChangeCategory] = React.useState(item.category);
  const [Discount, onChangeDiscount] = React.useState(item.discount ? item.discount : 0);
//   const [ImageLink, onChangeImage] = React.useState('');

  return (
    <SafeAreaView styles={styles.view}>
      <View style={styles.viewIn}>
        <Text style={styles.heading}>Provide Details Here</Text>
      </View>

      <View style={styles.viewIn}>
        <Text>Name</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => onChangeText(text)}
          value={Name}
        />
      </View>

      <View style={styles.viewIn}>
        <Text>Quantity</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.TextInput}
          onChangeText={(text) => onChangeQty(text)}
          value={Quantity}
        />
      </View>

      <View style={styles.viewIn}>
        <Text>Price</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.TextInput}
          onChangeText={(text) => onChangePrice(text)}
          value={Price}
        />
      </View>

      <View style={styles.viewIn}>
        <Text>Category</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => onChangeCategory(text)}
          value={Category}
        />
      </View>
      <View style={styles.viewIn}>
        <Text>Discount</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => onChangeDiscount(text)}
          value={Discount}
        />
      </View>
      <View style={styles.viewIn}>
        <Button
          title="Update"
          color="#008037"
          // style={{}}
          onPress={() =>
            submitProduct(props, {
              name: Name,
              price: Price,
              quantity: Quantity,
              category: Category,
              discount: Discount,
            //   image: ImageLink,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default UpdateDetails;
