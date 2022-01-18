import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'; 
import { styles } from './styles';
import Layout from '../../components/layout';

import { useNavigation } from '@react-navigation/native';



export default () => {

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate("home")
      }

    return (
        <View style={styles.container}>
            <Layout>
                <View style={styles.hello}>

                    <Text style={styles.title}>
                        Bem-vindo {`\n`}
                    </Text>
                    <Text style={styles.title}>
                        ao {`\n`}
                    </Text>
                    <Text style={styles.title}>
                        Reminder!
                    </Text>

                    <View style={styles.register}>

                        <TouchableOpacity >
                            <Text style={{ fontSize: 30, marginLeft: '25%' }}>
                                Sign-In
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.line} />
                        <TouchableOpacity >
                            <Text style={{ fontSize: 30, marginLeft: '25%' }}>
                                Sign-Up
                            </Text>

                        </TouchableOpacity>
                    </View>
                </View>

               

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.subTitle}>
                        START
                    </Text>
                </TouchableOpacity>

            </Layout>
        </View>
    );
}






