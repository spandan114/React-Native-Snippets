import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container} >
            <Text>home</Text>
            <Button title="Home" />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
