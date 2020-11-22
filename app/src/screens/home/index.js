import React, { useEffect, useState } from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PersonasAvatar } from 'react-native-personas-avatar';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { uri } from '../../config/constants/uri';

import { 
        Wrapper, 
        TopBar,
        Container,
        LightSmallText,
        Card,
        Header
} from './styles';
 
export default function Home({ navigation }) {

  const [posts, setPosts] = useState([])

  const goTo = (page) => {
    navigation.navigate(page);
  }

  useEffect(() => {

    (async() => {

      let token = await AsyncStorage.getItem('@token')
      token = JSON.parse(token)

      axios.get(`${uri}/posts/index`, {
        headers: {
          'Authorization': token
        }
      })
      .then((response) => {
        setPosts(response.data.posts)
      })
      .catch((error) => {
        console.log(error)
      })
    })()
    
  }, [])


  return (
    <Wrapper>
      
      <TopBar>
            <TouchableOpacity onPress={ () => goTo('Profile') }>
              <PersonasAvatar style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            
            <Icon name="add" size={40} color="#E70B0B" onPress={ () => goTo('PostForm') }/>
      </TopBar>
      
      <Container>
            {
              posts ? posts.map(post => {
                    return (
                      <TouchableWithoutFeedback key={post.id} onPress={()=> {
                        navigation.navigate('Post', {
                          post: post
                        });
                      }}>
                        <Card>
                          <Header>
                          <PersonasAvatar
                              style={{
                                  width: 60,
                                  height: 60
                              }}
                          />
                          </Header>
                          <LightSmallText numberOfLines={3}>{post.description}</LightSmallText>
                        </Card> 
                      </TouchableWithoutFeedback> 
                    )
              })
              : 
              <>
                <Card>
                  <Header>
                  <PersonasAvatar
                      style={{
                          width: 60,
                          height: 60
                      }}
                  />
                  </Header>
                  <LightSmallText numberOfLines={3}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</LightSmallText>
                </Card> 

                <Card>
                  <Header>
                  <PersonasAvatar
                      style={{
                          width: 60,
                          height: 60
                      }}
                  />
                  </Header>
                  <LightSmallText numberOfLines={3}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</LightSmallText>
                </Card> 
                <Card>
                  <Header>
                  <PersonasAvatar
                      style={{
                          width: 60,
                          height: 60
                      }}
                  />
                  </Header>
                  <LightSmallText numberOfLines={3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.. </LightSmallText>
                </Card> 
              </>
            }
            
      </Container>

    </Wrapper>
  );
}
