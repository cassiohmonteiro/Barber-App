import styled from 'styled-components/native';

import MyScreen from '../../components/Screen';
import MyText from '../../components/Text';
import MyInput from '../../components/Input';
import MyButton from '../../components/Button';
import MyTextButton from '../../components/TextButton';

export const Screen = styled(MyScreen)``;

export const Scrollable = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        flexGrow: 1,
        paddingTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
})`
    background: ${props => props.theme.colors.background};
`;

export const Title = styled(MyText)`
    font-size: 24px;
    color: ${props => props.theme.colors.text};
    margin: 64px 0 24px;
`;

export const Input = styled(MyInput)`
    margin-bottom: 8px;
    background: ${props => props.theme.colors.li};
    color: ${props => props.theme.colors.inputColor};
`;

export const Button = styled(MyButton)`
    margin-top: 8px;
    align-self: stretch;
    background: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.primary};
`;

export const ForgotPassword = styled(MyTextButton)`
    color: ${props => props.theme.colors.text};
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 16px;
`;

export const CreateAccount = styled(MyTextButton).attrs(props => ({
    buttonProps: {
        style: {
            justifyContent: 'center',
            marginTop: 'auto',
            alignSelf: 'stretch',
            backgroundColor: props.theme.colors.background,
            paddingVertical: 16,
            borderTopWidth: 1,
            borderColor: props.theme.colors.li,
        },
    },
    iconProps: {
        color: props.theme.colors.secundary,
    },
}))`
    color: ${props => props.theme.colors.secundary};
`;