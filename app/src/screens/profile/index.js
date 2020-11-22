import React, { useEffect, useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PersonasAvatar } from 'react-native-personas-avatar';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext } from '../../context/authContext';
import { uri } from '../../config/constants/uri';

import { 
        Wrapper, 
        TopBar,
        Container,
        UserInfo,
        UserName,
        Logout,
        LogoutTxt
} from './styles';
 
export default function Profile({ navigation }) {

  const [user, setUser] = useState('')

  const { signOut } = useContext(AuthContext);

  const goTo = (page) => {
    navigation.navigate(page);
  }

  useEffect(() => {

    (async() => {

      let token = await AsyncStorage.getItem('@token')
      token = JSON.parse(token)

      axios.get(`${uri}/user/show`, {
        headers: {
          'Authorization': token
        }
      })
      .then((response) => {
        setUser(response.data.user)
      })
      .catch((error) => {
        console.log(error)
      })
    })()
    
  }, [])

  const logout = async () => {
        signOut()
        await AsyncStorage.removeItem('@token')
  }

  return (
    <Wrapper>
      
      <TopBar>
            <Icon name="keyboard-arrow-left" size={40} color="#E70B0B" onPress={ () => goTo('Home')} />
      </TopBar>
      
      <Container>
            <PersonasAvatar style={{ width: 80, height: 80 }} />

            <UserInfo>
                <UserName>{user.name}</UserName>

                <Logout onPress={() => logout()}>
                  <LogoutTxt>Sair</LogoutTxt>
                </Logout>
                
            </UserInfo> 
        
      </Container>

    </Wrapper>
  );
}
