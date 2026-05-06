import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useTasks } from '../contexts/TaskContext';

export default function TaskDetailScreen({ navigation, route }: any) {
  const { task } = route.params;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.desc);
  
  const { isDarkMode } = useTheme();
  const { toggleTaskStatus, deleteTask, editTask } = useTasks();

  const handleUpdate = () => {
    editTask(task.id, title, description);
    navigation.goBack();
  };

  const handleToggle = () => {
    toggleTaskStatus(task.id);
    navigation.goBack();
  };

  const handleDelete = () => {
    deleteTask(task.id);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.header, isDarkMode && styles.headerDark]}>
        <Text style={styles.headerTitle}>Detalhes</Text>
      </View>
      
      <View style={styles.form}>
        <Text style={[styles.statusText, task.status === 'concluida' && { color: '#0288d1' }]}>
          Status Atual: {task.status === 'concluida' ? 'Concluída' : 'Pendente'}
        </Text>

        <Text style={[styles.label, isDarkMode && styles.textDark]}>Editar Título</Text>
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          value={title}
          onChangeText={setTitle}
        />

        <Text style={[styles.label, isDarkMode && styles.textDark]}>Editar Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea, isDarkMode && styles.inputDark]}
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <TouchableOpacity style={styles.btnPrimary} onPress={handleUpdate}>
          <Text style={styles.btnText}>SALVAR ALTERAÇÕES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnPrimary, { backgroundColor: '#e1f5fe', marginTop: 15 }]} onPress={handleToggle}>
          <Text style={[styles.btnText, { color: '#0288d1' }]}>
            {task.status === 'concluida' ? "MARCAR COMO PENDENTE" : "MARCAR COMO CONCLUÍDA"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnPrimary, { backgroundColor: '#ffebee', marginTop: 30 }]} onPress={handleDelete}>
          <Text style={[styles.btnText, { color: '#c62828' }]}>EXCLUIR TAREFA</Text>
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
  statusText: { fontSize: 18, fontWeight: 'bold', color: '#ff9800', marginBottom: 25, textAlign: 'center' },
  label: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  textDark: { color: '#b3e5fc' },
  input: { backgroundColor: '#fff', padding: 18, borderRadius: 15, marginBottom: 20, elevation: 2, color: '#333' },
  inputDark: { backgroundColor: '#1e1e1e', color: '#fff', elevation: 0 },
  textArea: { height: 100, textAlignVertical: 'top' },
  btnPrimary: { width: '100%', backgroundColor: '#03a9f4', padding: 18, borderRadius: 15, alignItems: 'center', elevation: 2 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});