import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegistrationScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [submittedData, setSubmittedData] = useState({ name: '', course: '' });

  const handleSubmit = () => {
    Alert.alert(
      'Confirm Submission',
      `Name: ${name}\nCourse: ${course}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => setSubmittedData({ name, course }) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF3E0" />
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      </View>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your name" />
        <Text style={styles.label}>Course:</Text>
        <TextInput style={styles.input} value={course} onChangeText={setCourse} placeholder="Enter your course" />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Display Section */}
      <View style={styles.displaySection}>
        <Text style={styles.displayText}>
          Your name is <Text style={styles.underline}>{submittedData.name}</Text> and you are from <Text style={styles.underline}>{submittedData.course}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
    padding: 20,
    backgroundColor: '#FAF3E0', // Creamy Brown Background
  },
  header: {
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#8B5E3C', // Brown
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  inputSection: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5E3C',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8B5E3C',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  submitButton: {
    backgroundColor: '#8B5E3C',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  displaySection: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  displayText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  underline: {
    fontWeight: 'bold',
    color: '#8B5E3C',
  },
});
