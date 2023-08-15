import { View, StyleSheet, Image } from "react-native";
import React from "react";

export default function ImageViewer({
  defaultImageSource,
  selectedImage,
}: any) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : defaultImageSource;
  return (
    <View>
      <Image style={styles.image} source={imageSource}></Image>
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
