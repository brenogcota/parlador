import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { uri } from '../../config/constants/uri';

import { 
        Wrapper, 
        TopBar,
        Container,
        SubmitButton,
        ButtonTxt
} from './styles';
 
export default function PostForm({ route, navigation }) {

  const post = route.params ? route.params.post : null;

  console.log(post)

  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false);

  const goTo = (page) => {
    navigation.navigate(page);
  }

  const handleSubmit = async () => {
      setLoading(true)
      let token = await AsyncStorage.getItem('@token')
      token = JSON.parse(token)

      const data = {
        "description": text
      }

      if(text) {
        if(post.id) {
            axios.put(`${uri}/posts/update/${post.id}`, data, {
                headers: {
                  'Authorization': token
                }
              })
              .then((response) => {
                setLoading(false)
                goTo('Home')
              })
              .catch((error) => {
                console.log(error)
                setLoading(false)
              })
          } else {
            axios.post(`${uri}/posts/store`, data, {
                headers: {
                  'Authorization': token
                }
              })
              .then((response) => {
                setLoading(false)
                goTo('Home')
              })
              .catch((error) => {
                console.log(error)
                setLoading(false)
              })
          }
      }
   }



  return (
    <Wrapper>

        <TopBar>
            <Icon name="keyboard-arrow-left" size={40} color="#E70B0B" onPress={ () => goTo('Home')} />
        </TopBar>
      
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        enabled={false}
        style={styles.container}
      >

        <Container>
                <TextInput
                    multiline={true}
                    numberOfLines={50}
                    maxLength={254}
                    onChangeText={text => setText(text)}
                    placeholder="Digite seu texto"
                    placeholderTextColor="#9C9C9C"
                    value={post ? post.description : ''}
                    style={{ height:340, width: 280, textAlignVertical: 'top', backgroundColor: '#eee', padding: 20}
                }/>

                <SubmitButton onPress={()=> { handleSubmit() }}>
                { loading ? <ActivityIndicator size="small" color="#fff" /> 
                            :
                            <ButtonTxt>Ok!</ButtonTxt>
                }
                </SubmitButton>
                
            
        </Container>

      </KeyboardAvoidingView>

    </Wrapper>
  );

 
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});
