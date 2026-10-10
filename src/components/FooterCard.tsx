import { Image, StyleSheet, Text, View } from "react-native";

export type FooterCardProps = {
  image: string;
  description: string;
};

export function FooterCard({ image, description }: FooterCardProps) {
  return (
    <View style={footerCardStyles.card}>
      <View>
        <Image source={{ uri: image }} style={footerCardStyles.image} />
      </View>
      <View style={footerCardStyles.descriptionRow}>
        <Text style={footerCardStyles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
}

export const footerCardStyles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginHorizontal: 11,
  },
  descriptionRow: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 16,
  },
});
