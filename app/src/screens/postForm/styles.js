import styled from 'styled-components';

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
    margin-bottom: 3px;
    margin-top: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
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

