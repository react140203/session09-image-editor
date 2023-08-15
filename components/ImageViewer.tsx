import { View, StyleSheet, Image } from "react-native";
import React from "react";

export default function ImageViewer({ ImageSource }: any) {
  return (
    <View>
      <Image style={styles.image} source={ImageSource}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 20,
  },
});
