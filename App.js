import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from './src/reducers/index'
import TestCounter from './src/components/TestCounter'

const store = createStore(rootReducer)

const App = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <TestCounter />
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
