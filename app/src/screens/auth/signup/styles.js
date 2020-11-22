import styled from 'styled-components';

import colors from '../../../config/colors';

export const Wrapper = styled.View`
    flex: 1;
    background: #222;
`;

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
`;

export const TxtInput = styled.TextInput`
    border: 1px;
    border-color: #444;
    padding: 10px;
    margin: 6px;
    border-radius: 6px;
    background: #F2F2F2;
    width: 80%;
    height: 46px;
    justify-content: center;
    border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : '#eee'};
`;


export const SignButton = styled.TouchableOpacity`
    background: #E70B0B;
    margin: 20px;
    padding: 10px;
    border-radius: 6px;
    width: 80%;
    height: 46px;
    align-items: center;
    justify-content: center;
`;

export const ButtonTxt = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: 700;
`;

export const Txt = styled.Text`
    color: #FFF;
    font-size: 12px;
`;


export const MessageTxt = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: 700;
`;

export const MessageBox = styled.View`
    padding: 10px;
    margin: 10px;
    width: 80%;
    background:  ${props => props.Success ? colors.success : colors.danger};
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`;

