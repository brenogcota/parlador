import styled from 'styled-components';

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
    margin-bottom: 3px;
`;

export const LightSmallText = styled.Text`
    color: #EEE;
    margin: 0 10px;
    font-size: 18px;
`;

export const Card = styled.View`
    align-items: center;
    width: 320px;
    background: #303030;
    border-radius: 6px;
    padding: 20px 10px;
    margin: 10px 0;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
`;

