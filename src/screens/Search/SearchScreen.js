import React from 'react';
import { Text, View, ScrollView, FlatList, TouchableHighlight, Image, Button } from 'react-native';
import { SearchBar, } from 'react-native-elements';
import styles from './styles';
import img from '../image.png';


export default function SearchScreen(props) {
    const onPressItem = item => {
        props.navigation.navigate('ItemDetails', { item: item });
    };
    const renderMenuItem = ({ item }) => {
        console.log(item)
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
                        <Button style={styles.update} color="#008037" title="Update" onPress={() => onPressUpdate(item)} />
                        <Text style={{ color: 'white' }}>|</Text>
                        <Button style={styles.delete} color="#a30505" title="Delete" onPress={() => onPressDelete(item)} />
                    </View>
                </View>
            </TouchableHighlight>
        );
    };
    const onPressUpdate = (item) => {
        props.navigation.navigate('UpdateDetails', { item: item })
    }

    const onPressDelete = (item) => {
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
        props.navigation.navigate('Home')
    }


    const [search, setSearch] = React.useState(" ");
    const [itemlist, setItemlist] = React.useState("");
    const updateSearch = (search) => {
        // search = search.toLowerCase()
        setSearch(search);
        fetch("http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/search/text/" + search.toLowerCase(), {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then((item) => setItemlist(item))
            .catch(err => console.log(err));
    };
    if (itemlist)
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={updateSearch}
                    value={search}
                />
                <ScrollView>
                    <FlatList
                        vertical
                        showsVerticalScrollIndicator={false}
                        data={itemlist}
                        renderItem={renderMenuItem}
                        numColumns={1}
                        keyExtractor={(item) => item._id}
                    />
                </ScrollView>
            </View>
        )
    else return (
        <View>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
            />
        </View>
    );
}
