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
    border-bottom-color: #444;
    height: 60px;
    width: 100%;
    padding: 20px 0;
    margin-bottom: 30px;
`;

export const PostCard = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;

export const PostCardContent = styled.Text`
    font-weight: 600;
    font-size: 20px;
    color: #EEE;
`;

export const PostFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 46px;
    width: 80px;
    margin-top: 30px;
`;