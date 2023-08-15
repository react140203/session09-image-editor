import { View, Image } from "react-native";

export default function EmojiSticker({ imageSize, stickerSource }: any) {
  return (
    <View style={{ top: -300, left: 20 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
