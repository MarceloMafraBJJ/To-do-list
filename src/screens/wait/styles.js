import React from 'react';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  hello: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  button: {
    backgroundColor: '#fff',
    width: '50%',
    height: '10%',
    marginTop: 300,
    borderRadius: 50,
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 70,
  },
  title: {
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 150,
    marginBottom: '-40%'
  },
  register: {
    flexDirection: 'row',
    marginTop: 220,
    alignItems: 'center',
  },
  line: {
    width: 1,
    backgroundColor: '#000',
    height: 50,
 
  },
  input: {
    width: "70%",
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 20
  },
});