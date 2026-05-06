import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useTasks } from '../contexts/TaskContext';

export default function AddTaskScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const { isDarkMode } = useTheme();
  const { addTask } = useTasks();

  const handleSave = () => {
    if (title.trim() === '') {
      Alert.alert('Aviso', 'Por favor, insira um título.');
      return;
    }
    addTask(title, description);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.header, isDarkMode && styles.headerDark]}>
        <Text style={styles.headerTitle}>Nova Tarefa</Text>
      </View>
      <View style={styles.form}>
        <Text style={[styles.label, isDarkMode && styles.textDark]}>Título da Tarefa</Text>
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          value={title}
          onChangeText={setTitle}
          placeholder="Ex: Gravar vídeo"
          placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
        />

        <Text style={[styles.label, isDarkMode && styles.textDark]}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea, isDarkMode && styles.inputDark]}
          value={description}
          onChangeText={setDescription}
          placeholder="Detalhes..."
          placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
          multiline
        />

        <TouchableOpacity style={styles.btnPrimary} onPress={handleSave}>
          <Text style={styles.btnText}>SALVAR TAREFA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f9ff' },
  containerDark: { backgroundColor: '#121212' },
  header: { backgroundColor: '#0288d1', padding: 25, paddingTop: 60, alignItems: 'center' },
  headerDark: { backgroundColor: '#01579b' },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  form: { padding: 30 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 8, marginTop: 15 },
  textDark: { color: '#b3e5fc' },
  input: { backgroundColor: '#fff', padding: 18, borderRadius: 15, marginBottom: 15, elevation: 2, color: '#333' },
  inputDark: { backgroundColor: '#1e1e1e', color: '#fff', elevation: 0 },
  textArea: { height: 100, textAlignVertical: 'top' },
  btnPrimary: { width: '100%', backgroundColor: '#03a9f4', padding: 18, borderRadius: 15, alignItems: 'center', elevation: 2, marginTop: 20 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});