import React, { useEffect, useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PersonasAvatar } from 'react-native-personas-avatar';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { uri } from '../../config/constants/uri';
import colors from '../../config/colors';

import { 
        Wrapper, 
        TopBar,
        Container,
        PostCard,
        PostCardContent,
        PostFooter
} from './styles';
 
export default function Post({ route, navigation }) {

  const { post } = route.params;

  const [user, setUser] = useState('');

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


  const deletePost = async (id) => {
    let token = await AsyncStorage.getItem('@token')

    axios.delete(`${uri}/posts/delete/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      .then((response) => {
        goTo('Home')
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <Wrapper>
      
      <TopBar>
            <Icon name="keyboard-arrow-left" size={40} color="#E70B0B" onPress={ () => goTo('Home')} />
      </TopBar>
      
      <Container>
            <PersonasAvatar style={{ width: 80, height: 80 }} />

            <PostCard>
                <PostCardContent>{post.description}</PostCardContent>
                {
                    post.user_id === user.id ? (
                                <PostFooter>
                                    <Icon name="clear" color={colors.danger} size={30} onPress={ () => {
                                        deletePost(post.id)
                                    }}/>
                                    <Icon name="create" color={colors.danger} size={30} onPress={ () => 
                                      navigation.navigate('PostForm',{
                                        post: post
                                      })
                                    }/>
                                </PostFooter>
                    ) : <></>
                }         
            </PostCard> 
        
      </Container>

    </Wrapper>
  );
}
