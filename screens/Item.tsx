import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

type ItemProps = {
    photo: string;
    name: string;
    comment: string;
}

const Item = ({ photo, name, comment }: ItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.inline}>
                <Image source={{ uri: photo }} style={styles.photo} />

                <View style={{maxWidth: '60%'}}>
                    <Text style={styles.name}>{name}</Text>
                    <Text numberOfLines={4} ellipsizeMode="tail" style={styles.comment}>{comment}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inline: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 9999,
        marginRight: 15
    },
    name: {
        fontSize: 17,
        fontWeight: '600',
    },
    comment: {
        fontSize: 15,
        flexWrap: 'wrap'
    },
});


export default Item