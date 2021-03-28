import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  Container, Header,
  Content,
  Card,
  CardItem,
  H1
} from 'native-base';
import moment from 'moment';


const User = ({details}) => {
  return (
    <Card style={styles.card}>
      <CardItem cardBody style={styles.cardItems}>
        <Image 
          source={{
            uri: details.picture?.large,
            width: 150,
            height: 250,
          }}
          style={styles.image}
        />
      </CardItem>
      <CardItem  style={styles.cardItems}>
      <H1 style={styles.text}>
          {details.name?.title} {details.name?.first} {details.name?.last}
      </H1>
    </CardItem>
    <CardItem bordered style={styles.cardItems}>
      <Text style={styles.text}>
          {details.cell} 
      </Text>
    </CardItem>
    <CardItem bordered style={styles.cardItems}>
    <Text style={{color: '#fff'}}>
         Registered at {moment(details.registered?.text).format('DD=MM-YY')}
    </Text>
  </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  cardItems: {
    backgroundColor: '#4f8a8b',
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
});

export default User;
