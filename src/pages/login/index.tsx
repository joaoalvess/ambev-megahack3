import React, { useState } from "react";
import {  KeyboardAvoidingView,  Platform } from "react-native";
import { Container, ViewButton, TestView } from './styles';
import Ambev from '../../assets/logo.png'

import { RedBall, Logo, Title } from '../../components/Logo/styles';
import { Input, Label } from '../../components/Input/styles';
import { styles, TextButton } from '../../components/Button/styles';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigateToDashboard() {
    navigation.navigate('Dashboard')
  }

  return (
    <Container>
      <RedBall></RedBall>
      <Logo source={Ambev} resizeMode="center" />
      <TestView>
        <Title>Login</Title>
      </TestView>
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Label>E-MAIL *</Label>
        <Input 
          placeholder="seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Label>SENHA *</Label>
        <Input 
          placeholder="sua senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>
      <ViewButton>
      <RectButton 
        style={styles.button}
        onPress={handleNavigateToDashboard}
      >
        <TextButton>Entrar</TextButton>
      </RectButton>
      </ViewButton>
    </Container>
  );
}

export default Login;