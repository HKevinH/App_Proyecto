import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { fertilizersList} from "@styles/General";
import { SafeAreaView } from 'react-navigation';

export default function FertilizersList({ fertilizers }) {
    return (
        <TouchableOpacity>
        <SafeAreaView style={fertilizersList.container}>
            <Image source={{ uri: fertilizers.thumbnail_url }} style={fertilizersList.img} resizeMode='contain'/>
            <Text style={fertilizersList.title}>{fertilizers.name}</Text>
            <Text style={fertilizersList.description}>{fertilizers.description}</Text>
        </SafeAreaView>
        </TouchableOpacity>
    );
}