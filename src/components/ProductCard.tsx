import { Image, StyleSheet, Text, View } from "react-native";

export type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
};

export function ProductCard({
  title,
  description,
  price,
  image,
}: ProductCardProps) {
  return (
    <View style={[productCardStyles.card]}>
      <View style={productCardStyles.imageSection}>
        <Image source={{ uri: image }} style={productCardStyles.image} />
      </View>
      <View style={productCardStyles.topSection}>
        <View style={productCardStyles.limitedTime}>
          <Text style={productCardStyles.deal}>LIMITED TIME</Text>
        </View>
        <View style={productCardStyles.addIcon}>
          <Text style={productCardStyles.addIconText}>+</Text>
        </View>
      </View>
      <View style={productCardStyles.title}>
        <Text style={productCardStyles.titleText}>{title}</Text>
      </View>
      <View style={productCardStyles.descriptionRow}>
        <Text style={productCardStyles.descriptionText}>{description}</Text>
        <Text style={productCardStyles.price}>{price}</Text>
      </View>
    </View>
  );
}

export const productCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#2c741d",
    width: "75%",
    height: 360,
    borderRadius: 20,
  },
  imageSection: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c3442",
    borderRadius: 20,
    width: "100%",
    height: 220,
  },
  limitedTime: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e81c1c",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 20,
    alignSelf: "flex-start",
    flexShrink: 0,
  },
  deal: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  titleText: {
    fontSize: 18,
    color: "#b6db1e",
    fontWeight: "bold",
  },
  descriptionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 14,
    color: "#fff",
    flexShrink: 1,
  },
  price: {
    fontSize: 20,
    color: "#e81c1c",
    fontWeight: "bold",
    marginLeft: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },

  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  addIcon: {
    width: 62,
    height: 62,
    borderRadius: 45,
    backgroundColor: "#b6db1e",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "15%",
  },
  addIconText: {
    fontSize: 60,
    color: "#2c741d",
    lineHeight: 60,
  },
});
