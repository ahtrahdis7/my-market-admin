import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen';
import AddProducts from './screens/AddProducts/AddProducts';
import OrderDetails from './screens/OrderDetails/OrderDetailsScreen';
import Update from './screens/UpdateProducts/updateProducts';
import ItemList from './screens/ItemsList/ItemsListScreen';
const Stack = createStackNavigator();

const options = {
  headerStyle: {
    backgroundColor: '#545454',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    textAlign: 'right',
    fontFamily: 'monospace',
  },
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={options} component={HomeScreen} />
        <Stack.Screen
          name="AddProducts"
          options={options}
          component={AddProducts}
        />
        <Stack.Screen
          name="OrderDetails"
          options={options}
          component={OrderDetails}
        />
        <Stack.Screen name="Update" options={options} component={Update} />
        <Stack.Screen name="ItemsList" options={options} component={ItemList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
