import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { styles, screenCategories } from "@styles/General";
import { SafeAreaView } from 'react-navigation';

export default function PlantsList({ plants }) {
    return (
        <TouchableOpacity>
        <SafeAreaView style={screenCategories.container}>
            <Image source={{ uri: plants.thumbnail_url }} style={screenCategories.img} />
            <Text style={screenCategories.title}>{plants.crop_name}</Text>
            <Text style={screenCategories.subtitle}>{plants.body}</Text>
        </SafeAreaView>
        </TouchableOpacity>
    );
}