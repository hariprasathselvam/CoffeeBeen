
import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, processColor } from 'react-native';

const Data = [
  { _id: 1, name: 'Item 1', price: 50, quantity: 0 },
  { _id: 2, name: 'Item 2', price: 29, quantity: 0 },
  { _id: 3, name: 'Item 3', price: 200, quantity: 0 },
];

class ListItem extends React.Component {
  render() {
    const  {item}  = this.props
    const  sub  = this.props;
    const  add  = this.props;


    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <Text>{item.name} - </Text>
          <Text>{item.price}</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <Button title="Subtract" onPress={sub.Subtract} />
          <Text>{item.quantity}</Text>
          <Button title="Add" onPress={add.Add} />
        </View>
      </View>
    )
  }
}

class PayIndex extends React.Component {
  state = {
    Data
  };

  onSubtract = (item, index) => {
    // const Data = [...this.state.Data];
    Data[index].quantity -= 1;
    this.setState({ Data });
  }

  onAdd = (item, index) => {
    // const products = [...this.state.Data];
    Data[index].quantity += 1;
    this.setState({ Data });
  }

  render() {
    // const { data } = this.state;
    
    let totalQuantity = 0;
    let totalPrice = 0;

    Data.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.Data}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              Subtract={() => this.onSubtract(item, index)}
              Add={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
        <Text>Total Quantity: {totalQuantity}</Text>
        <Text>Total Price: {totalPrice}</Text>
      </SafeAreaView>
    );
  }
}

export default PayIndex;

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Button, SafeAreaView, processColor } from 'react-native';

// const Data = [
//   { _id: 1, name: 'Item 1', price: 50, quantity: 0 },
//   { _id: 2, name: 'Item 2', price: 29, quantity: 0 },
//   { _id: 3, name: 'Item 3', price: 200, quantity: 0 },
// ];



// const PayIndex = () => {

//   const Item = ({item,index,Subtract,Add}) => {
//     return (
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//         <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
//           <Text>{item.name} - </Text>
//           <Text>{item.price}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
//           <Button title="Subtract" onPress={onSubtract(item.index)} />
//           <Text>{item.quantity}</Text>
//           <Button title="Add" onPress={Add} />
//         </View>
//       </View>
//     )
// }

//   const [product,setProduct] = useState(Data)

//   const onSubtract = (item, index) => {
//     console.log(Data[index].quantity);
//     Data[index].quantity += 1;
//     setProduct(Data);
//   }

//   const onAdd = (item, index) => {
//     Data[index].quantity -= 1;
//     setProduct(Data);
//   }
//   const [totalQuantity,settotalQuantity]=useState(0)
//   const [totalPrice,settotalPrice] = useState(0)
//   // useEffect(() => {

//   //   product.forEach((item) => {
//   //     settotalQuantity(totalQuantity += item.quantity) 
//   //     settotalPrice(totalPrice += item.quantity * item.price) 
//   //   })
//   // }, []);


//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <FlatList
//           data={Data}
//           renderItem={({ item, index }) => (
//             <Item
//               item={item}
//               Subtract={() => onSubtract(item, index)}
//               Add={() => onAdd(item, index)}
//             />
//           )}
//           keyExtractor={item => item._id}
//         />
//         <Text>Total Quantity: {totalQuantity}</Text>
//         <Text>Total Price: {totalPrice}</Text>
//       </SafeAreaView>
//     );
// }

// export default PayIndex;