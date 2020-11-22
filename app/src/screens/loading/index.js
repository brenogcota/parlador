import React from 'react';
import { Image, StyleSheet } from 'react-native';



import loading from '../../assets/images/loading.png';

import { 
        Wrapper
} from './styles';
 
export default function Loading() {

  return (
    <Wrapper>
      <Image
        style={styles.backgroundImage}
        source={loading}
      />
    </Wrapper>
  );
}

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }
});
