import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    background: #222;
`;

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 100px;
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

export const ErrorTxt = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: 700;
`;

export const ErrorBox = styled.View`
    padding: 10px;
    margin: 10px;
    width: 80%;
    background: #E70b0b;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`;
