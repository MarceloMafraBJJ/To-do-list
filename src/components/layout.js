import React from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'

const FormLayout = ({ children }) => {

  const renderContent = <View style={styles.container}>
    {children}
  </View>

  return <FlatList
    ListHeaderComponent={renderContent}
    showsVerticalScrollIndicator={false}
  />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height * 0.95
  }
})

export default FormLayout;