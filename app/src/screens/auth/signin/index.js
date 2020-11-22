import React, { useState, useContext } from 'react';
import { ActivityIndicator, TouchableOpacity, Image, StyleSheet } from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext } from '../../../context/authContext';
import { uri } from '../../../config/constants/uri';

import logo from '../../../assets/images/logo.png'

import { 
        Wrapper, 
        Container,
        TxtInput,
        SignButton,
        ButtonTxt,
        Txt,
        ErrorBox,
        ErrorTxt
} from './styles';
 
export default function SignIn({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  const goTo = (page) => {
    navigation.navigate(page);
  }

  const handleSubmit = async () => {
    if (email && password) {
        setLoading(true);
        const data = {
            email,
            password
        }

       axios.post(`${uri}/user/signin`, data)
          .then((response) => {
            console.log(response)
              login(response)
          })
          .catch((error) => {
            console.log(error)
            setError('Ops! houve algo de errado')
            setLoading(false)
          })

    } else {
        setError('Ops! Tem certeza que digitou os dados corretamente?')
    }
  }

  const login = async (response) => {
        const data = JSON.stringify(response.data.token)
        await AsyncStorage.setItem('@token', data)
        setLoading(false)
        signIn();
        goTo('Home')
  }

  

  return (
    <Wrapper>
      
      <Container>

            {
              error && 
                  <ErrorBox>
                    <ErrorTxt>{error}</ErrorTxt>
                  </ErrorBox>
            }

            <Image
              style={styles.backgroundImage}
              source={logo}
            />

            <TxtInput
              autoCorrect={false}
              autoFocus={true}
              keyboardType="email-address"
              placeholder="Digite seu e-mail"
              placeholderTextColor="#9C9C9C"
              onChangeText={text => setEmail(text)}
            >
            </TxtInput>

            <TxtInput
              autoCorrect={false}
              placeholder="Digite sua senha"
              placeholderTextColor="#9C9C9C"
              onChangeText={text => setPassword(text)}
            >
            </TxtInput>

            <SignButton onPress={()=> { handleSubmit() }}>
              { loading ? <ActivityIndicator size="small" color="#fff" /> 
                          :
                          <ButtonTxt>Entrar</ButtonTxt>
              }
            </SignButton>


            <TouchableOpacity onPress={()=> { goTo('SignUp') }}>
                 <Txt>Não possui conta? Cadastra-se</Txt>
            </TouchableOpacity> 
      </Container>

    </Wrapper>
  );
}

let styles = StyleSheet.create({
  backgroundImage: {
    margin: 20,
    height: 33,
    width: 120
  }
});