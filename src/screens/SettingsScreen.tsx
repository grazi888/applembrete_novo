import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function SettingsScreen() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.header, isDarkMode && styles.headerDark]}>
        <Text style={styles.headerTitle}>Ajustes</Text>
      </View>
      
      <View style={styles.content}>
        <View style={[styles.item, isDarkMode && styles.itemDark]}>
          <Text style={[styles.itemText, isDarkMode && { color: '#fff' }]}>Modo Escuro</Text>
          <Switch
            trackColor={{ false: "#ccc", true: "#b3e5fc" }}
            thumbColor={isDarkMode ? "#03a9f4" : "#f4f3f4"}
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </View>

        <View style={[styles.item, isDarkMode && styles.itemDark]}>
          <Text style={[styles.itemText, isDarkMode && { color: '#fff' }]}>Notificações</Text>
          <Switch value={true} trackColor={{ false: "#ccc", true: "#b3e5fc" }} thumbColor="#03a9f4" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f9ff' },
  containerDark: { backgroundColor: '#121212' },
  header: { backgroundColor: '#0288d1', padding: 30, paddingTop: 60 },
  headerDark: { backgroundColor: '#01579b' },
  headerTitle: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  content: { padding: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 15 },
  itemDark: { backgroundColor: '#1e1e1e' },
  itemText: { fontSize: 18, fontWeight: '500', color: '#333' },
});