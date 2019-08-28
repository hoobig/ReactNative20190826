/* Core */
import React, { Component } from 'react';

/* Presentational */
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class IndexComponent extends Component {
    constructor(props) {
        super(props);
    }

    _onCountIncreasing() {
        this.props.onIncrement(1);
    }

    _onCountDecreasing() {
        this.props.onDecrement(1);
    }

    render() {
        return (
            <View style={styles.container}>
            
            <View style={styles.child}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonCount} onPress={() => {this._onCountIncreasing()} }>
            <Text style={styles.textButton}>InCreasing</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCount} onPress={() => {this._onCountDecreasing()} }>
            <Text style={styles.textButton}>DeCreasing</Text>
            </TouchableOpacity>
            </View>
            <Text>Count Number: { this.props.times }</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.text}>Hello dff</Text>
            </View>

            <View style={styles.child}>
            <Text style={styles.text}>Hello dff</Text>
            </View>

            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    child: {
        flex: 1,
        backgroundColor: 'white',
        borderBottomColor: 'black', 
        borderBottomWidth: 3, 
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonCount: {
        width: 100,
        height: 50,
        borderRadius: 5,
        color: '#ffffff',
        backgroundColor: '#6c757d',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    textButton: {
        color: '#ffffff'
    },
    text: {
        color: 'red'
    }
});

export default IndexComponent;
