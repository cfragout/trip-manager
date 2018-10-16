import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView
} from 'react-native';
import base from './../styles/base';
import Layout from './../constants/Layout';
import Background from '../components/Background';
import Feather from '@expo/vector-icons/Feather';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      showNoTripsPlaceholder: false
    };
  }

  /**
   * Fetches available trips, shows placeholder if there are none
   */
  async componentDidMount() {
    // const { data } = await axios({
    //   url: offersAPI.getOffers.url(),
    //   method: offersAPI.getOffers.method
    // });
    const data = [
      {
        tripName: 'Test'
      }
    ]

    if (data && data.length > 0) {
      this.setState({
        trips: data
      });
    } else {
      this.setState({ showNoTripsPlaceholder: true });
    }
  }

  render() {
    if (this.state.trips.length > 0) {
      return (
        <Background>
          <View style={{ height: '80%', backgroundColor: 'red' }}>
            <Text style={base.text}>Abre un viaje</Text>
            <ScrollView>
              <View>
                <Text>Viaje 1</Text>
              </View>
              <View>
                <Text>Viaje 1</Text>
              </View>
              <View>
                <Text>Viaje 1</Text>
              </View>
              <View>
                <Text>Viaje 1</Text>
              </View>
              <View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View><View>
                <Text>Viaje 1</Text>
              </View>
            </ScrollView>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', height: '20%' }}>
            <Text style={base.text}> ¡O crea uno nuevo! </Text>
            <Feather
              size={72}
              name={'plus-circle'}
              color={base.fontPrimaryColor}
              style={{ paddingTop: 10 }}
            />
          </View>
        </Background>
      );
    }

    if (this.state.showNoTripsPlaceholder) {
      return (
        <Background>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '40%' }}>
            <Text style={styles.noTripsText}> ¡No posees viajes, crea uno nuevo! </Text>
            <Feather
              size={96}
              name={'plus-circle'}
              color={base.fontPrimaryColor}
              style={{ paddingTop: 10 }}
            />
          </View>
        </Background>
      );
    }

    return (<ActivityIndicator style={styles.container} />);
  }
}

const styles = StyleSheet.create({
  container: {
    ...base.container,
    paddingRight: 20,
    paddingLeft: 20
  },
  noTripsText: {
    ...base.text,
    marginTop: 150,
    textAlign: 'center',
  }
});
