import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useTheme } from '../contexts/ThemeContext';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isDarkMode } = useTheme();

  const handleBypass = () => {
    navigation.replace('MainApp');
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={styles.content}>
        <Image 
          source={require('../../assets/logo-login.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={[styles.title, isDarkMode && styles.textDark]}>Task reminder</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            placeholder="E-mail"
            placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, isDarkMode && styles.inputDark]}
            placeholder="Senha"
            placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.btnPrimary} onPress={handleBypass}>
          <Text style={styles.btnText}>ENTRAR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.btnPrimary, { backgroundColor: '#e1f5fe', marginTop: 15 }]} onPress={handleBypass}>
          <Text style={[styles.btnText, { color: '#0288d1' }]}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f9ff' },
  containerDark: { backgroundColor: '#121212' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  logo: { width: 140, height: 140, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#0288d1', marginBottom: 40 },
  textDark: { color: '#b3e5fc' },
  inputContainer: { width: '100%', marginBottom: 30 },
  input: { backgroundColor: '#fff', padding: 18, borderRadius: 15, marginBottom: 15, elevation: 2, color: '#333' },
  inputDark: { backgroundColor: '#1e1e1e', color: '#fff', elevation: 0 },
  btnPrimary: { width: '100%', backgroundColor: '#03a9f4', padding: 18, borderRadius: 15, alignItems: 'center', elevation: 3 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});