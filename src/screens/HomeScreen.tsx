import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useTasks } from '../contexts/TaskContext';

export default function HomeScreen({ navigation }: any) {
  const { isDarkMode } = useTheme();
  const { tasks } = useTasks();

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.header, isDarkMode && styles.headerDark]}>
        <View style={styles.headerTop}>
          <Ionicons name="search" size={24} color="#fff" />
          <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
            <Ionicons name="add-circle" size={45} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Minhas Tarefas</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.card, isDarkMode && styles.cardDark, item.status === 'concluida' && styles.cardDone]}
            onPress={() => navigation.navigate('TaskDetail', { task: item })}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.taskTitle, isDarkMode && { color: '#fff' }, item.status === 'concluida' && styles.textDone]}>{item.title}</Text>
              <Text style={[styles.taskDesc, item.status === 'concluida' && styles.textDone]}>{item.desc}</Text>
            </View>
            <Ionicons 
              name={item.status === 'concluida' ? "checkmark-done-circle" : "ellipse-outline"} 
              size={28} 
              color={item.status === 'concluida' ? '#03a9f4' : '#b3e5fc'} 
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f9ff' },
  containerDark: { backgroundColor: '#121212' },
  header: { backgroundColor: '#0288d1', height: 180, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, padding: 25, justifyContent: 'center' },
  headerDark: { backgroundColor: '#01579b' },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  headerTitle: { color: '#fff', fontSize: 30, fontWeight: 'bold', marginTop: 10 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 20, marginBottom: 15, flexDirection: 'row', alignItems: 'center', elevation: 2 },
  cardDark: { backgroundColor: '#1e1e1e' },
  cardDone: { opacity: 0.6, backgroundColor: '#e1f5fe' },
  taskTitle: { fontSize: 18, fontWeight: 'bold', color: '#01579b' },
  taskDesc: { fontSize: 14, color: '#666', marginTop: 4 },
  textDone: { textDecorationLine: 'line-through', color: '#888' },
});