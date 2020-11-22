import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity, Image, StyleSheet } from 'react-native';

import axios from 'axios';

import { uri } from '../../../config/constants/uri';
import colors from  '../../../config/colors';

import logo from '../../../assets/images/logo.png'

import { 
        Wrapper, 
        Container,
        TxtInput,
        SignButton,
        ButtonTxt,
        Txt,
        MessageBox,
        MessageTxt
} from './styles';

 
export default function SignUp({ navigation }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameColor, setNameColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (name && email && password && confirmPassword) {
        setLoading(true);
        const data = {
          "user": {
            name,
            email,
            password,
            "password_confirmation": confirmPassword
          }
          
        }

       axios.post(`${uri}/user/signup`, data)
          .then((response) => {
            console.log(response.data)
            setLoading(false)
            setSuccess('Confirme o email e faça login!')
            setError(false)
          })
          .catch((error) => {
            console.log(error)
            setError('Ops! houve algo de errado')
            setSuccess(false)
            setLoading(false)
          })

    } else {
        setError('Ops! Verifique se preencheu os dados corretamente')
        setSuccess(false)
    }
  }

  const handleName = (text) => {
      if(text.length <= 3)
        setNameColor(colors.danger)
      else {
        setNameColor(colors.success)
        setName(text)
      }
      
  }

  const handleEmail = (text) => {
    if (validateEmail(text)) {
        setEmailColor(colors.success)
        setEmail(text)
    } else {
      setEmailColor(colors.danger)
    }
  }

  const handlePassword = (text) => {
      text.length < 6 && setPasswordColor(colors.danger) 
      if (text.length < 8 && text.length >= 6) {
          setPasswordColor(colors.warning)
          setPassword(text)
      }
      if (text.length >= 8) {
          setPasswordColor(colors.success)
          setPassword(text)
      } 
  }

  const handlePasswordConfirm = (text) => {
      if(text.length < 6) {
          setConfirmPasswordColor(colors.danger)
      }
      if(password == text) {
        setConfirmPasswordColor(colors.success)
        setConfirmPassword(text)
      }  else {
        setConfirmPasswordColor(colors.danger)
      }
  }

  const validateEmail = (text) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(text);
  }

  const goTo = (page) => {
    navigation.navigate(page);
  }

  return (
    <Wrapper>
      
      <Container>

            {
              error &&
                  <MessageBox>
                    <MessageTxt>{error}</MessageTxt>
                  </MessageBox>   
            }

            {
              success && 
                  <MessageBox Success={true}>
                    <MessageTxt>{success}</MessageTxt>
                  </MessageBox>
            }

            <Image
              style={styles.backgroundImage}
              source={logo}
            />

            <TxtInput
              autoCorrect={false}
              autoFocus={true}
              placeholder="Digite seu nome"
              placeholderTextColor="#9C9C9C"
              onChangeText={text => handleName(text)}
              borderColor={nameColor}
            >
            </TxtInput>

            <TxtInput
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Digite seu e-mail"
              placeholderTextColor="#9C9C9C"
              onChangeText={text => handleEmail(text)}
              borderColor={emailColor}
            >
            </TxtInput>

            <TxtInput
              autoCorrect={false}
              keyboardType="visible-password"
              placeholder="Digite sua senha"
              placeholderTextColor="#9C9C9C"
              onChangeText={text => handlePassword(text)}
              borderColor={passwordColor}
            >
            </TxtInput>

            <TxtInput
              autoCorrect={false}
              placeholder="Confirme sua senha"
              placeholderTextColor="#9C9C9C"
              onChangeText={text => handlePasswordConfirm(text)}
              borderColor={confirmPasswordColor}
            >
            </TxtInput>

            <SignButton onPress={()=> { handleSubmit() }}>
              { loading ? <ActivityIndicator size="small" color="#fff" /> 
                          :
                          <ButtonTxt>Cadastrar</ButtonTxt>
              }
            </SignButton>


            <TouchableOpacity onPress={()=> { goTo('SignIn') }}>
               <Txt>Já possui conta? Entrar</Txt>
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