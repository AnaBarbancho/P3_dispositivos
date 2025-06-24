import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Minha Saúde Hoje</Text>
      <Text style={styles.headerSubtitle}>Acompanhe seus indicadores de saúde</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 24,
    backgroundColor: '#4F46E5',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: '#E0E7FF',
    fontSize: 14,
  },
});