import styled from 'styled-components';

import colors from '../../config/colors';

export const Wrapper = styled.View`
    flex: 1;
    padding: 10px;
    padding-bottom: 0;
    background: #222;
    align-items: center;
`;

export const Container = styled.ScrollView.attrs({
    horizontal: false,
    showsVerticalScrollIndicator: false
})``;

export const TopBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #222;
    border-bottom-width: 1px;
    border-bottom-color: #303030;
    height: 60px;
    width: 100%;
    padding: 20px 0;
    margin-bottom: 30px;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;

export const UserName = styled.Text`
    font-weight: 700;
    font-size: 20px;
    color: #EEE;
`;

export const Logout = styled.TouchableOpacity`
    align-items: center;
    padding: 10px;
    margin-top: 30px;
    border-radius: 12px;
    background: ${colors.danger};
    width: 80px;
`;

export const LogoutTxt = styled.Text`
    color: #FFF;
    font-weight: 700;
`;
