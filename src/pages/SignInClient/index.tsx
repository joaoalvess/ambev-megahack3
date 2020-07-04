import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, KeyboardAvoidingView,  Platform } from "react-native";
import { Container, ViewButton } from './styles';
import Ambev from '../../assets/logo.png'

import { RedBall, Logo, Title } from '../../components/Logo/styles';
import { Input, Label, Form } from '../../components/Input/styles';
import { styles, TextButton } from '../../components/Button/styles';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SignInClient: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Container>
      <RedBall></RedBall>
      <Logo source={Ambev} resizeMode="center" />
      <Title>Cadastro</Title>
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Label>NOME *</Label>
        <Input 
          placeholder="seu nome"
          autoCorrect={false}
        />
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
        <View style={styled.checkboxContainer}>
          <CheckBox
            value={checked}
            onValueChange={setChecked}
            style={styled.checkbox}
          />
          <Text style={styled.label}>Concorda com termos de serviço</Text>
        </View>
      </KeyboardAvoidingView>
      <ViewButton>
      <RectButton 
        style={styles.button}
      >
        <TextButton>Criar Conta</TextButton>
      </RectButton>
      </ViewButton>
    </Container>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default SignInClient;