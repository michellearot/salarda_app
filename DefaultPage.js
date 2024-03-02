// DefaultPage.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Home page component
const DefaultPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>

      
      <View style={styles.noteRow}>
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>“I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with ’em later."
—Mitch Hedberg</Text>
        </View>

        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>“Gentlemen, you can't fight in here. This is the war room.”
—President Merkin Muffley (Peter Sellers), Dr. Strangelove</Text>
        </View>
      </View>

      <View style={styles.noteRow}>
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>What's an egg's favorite vacation spot? New Yolk City.</Text>
        </View>

        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>Bob: “Looks like you've been missing a lot of work lately.”
Peter: “I wouldn't say I've been missing it, Bob.”
—Bob (Paul Wilson) and Peter (Ron Livingston), Office Space</Text>
        </View>   
      </View>

      <View style={styles.noteRow}>
        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>“Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.”
—Will Ferrell</Text>
        </View>

        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>RAWR RAWR RAWWWWWWWWRRRRR</Text>
        </View>   
      </View>
      

     
      <View style={styles.bottomButton}>
        <Button
          title="Add notes"
          onPress={() => navigation.navigate('')}
          color="#3F2305"  
          style={styles.button} 
        />
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', 
    backgroundColor: '#DFD7BF',
    padding: 20, 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 40,
  },
  noteRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  noteContainer: {
    backgroundColor: '#F2EAD3',
    padding: 10,
    marginTop: 30, 
    borderRadius: 5,
    width: '48%', 
    aspectRatio: 1, 
  },
  noteText: {
    fontSize: 16,
    color: '#000',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%', 
  },
});

export default DefaultPage;
