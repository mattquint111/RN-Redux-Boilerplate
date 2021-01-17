import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

const TestCounter = (props) => {
    console.log(props)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.increaseCounter} >
                <Text style={{fontSize: 20}}>INCREASE</Text>
            </TouchableOpacity>
            <Text style={{marginLeft: 10, marginRight: 10, fontSize: 20}}>Counter: {props.counter}</Text>
            <TouchableOpacity onPress={props.decreaseCounter} >
                <Text style={{fontSize: 20}}>DECREASE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
})

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestCounter)