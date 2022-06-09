import React, { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { Text, View } from '../components/Themed';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = () => {

    }

    return (
    <View style={{ padding:20 }}>
        <TextInput
            placeholder="email@domain.com"
            value={email}
            onChangeText={setEmail}
            style={{
                color: 'black',
                fontSize: 12,
                width: '100%',
                marginVertical: 25
            }}
            />

        <TextInput
            placeholder="Enter your passwod"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
                color: 'black',
                fontSize: 12,
                width: '100%',
                marginVertical: 25
            }}
        />

        <Pressable
            onPress={onSubmit}
            style={{
                backgroundColor: 'blue',
                height: 50,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>Log in</Text>
        </Pressable>
    </View>
    );
}