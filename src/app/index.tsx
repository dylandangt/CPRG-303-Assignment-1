import { FooterCard } from "@/components/FooterCard";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { footerCardStyles } from "../components/FooterCard";
import { ProductCard } from "../components/ProductCard";

export default function Index() {
  const insets = useSafeAreaInsets();

  const alertConfirmation = () => {
    alert("Alert Button pressed.");
  };

  return (
    <View
      style={[
        styles.screen,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.headerCarryOut}>
          <View style={styles.carryout}>
            <Text style={styles.carryoutText}>CARRYOUT</Text>
          </View>
          <View style={styles.asap}>
            <Text style={styles.asapText}>ASAP</Text>
          </View>
        </View>
        <View style={styles.address}>
          <Text style={styles.addressText}>18 Arbour Lake Way NW</Text>
          <View style={styles.login}>
            <Text style={styles.loginText}>LOG IN</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <ProductCard
          title="OVERTIME PACK"
          description={"Your Game Night\nLineup"}
          price="$25.99"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiLmp0ZB9BLN-kvFyN4ee5ahLuVg1Bt4_O0X__UvaA0ikKqT7O_tEhys&s=10"
        />
        <ProductCard
          title="CHOOSE YOUR PIZZA"
          description={"PaPa Paperoni"}
          price="$39.99"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboCn0X-EORJ6EwuSJhAzF6qnj3vPpnQ6LAR3mIhxqKg&s=10"
        />
      </View>

      <View style={styles.spacers}>
        <View style={styles.spacer1} />
        <View style={styles.spacer2} />
      </View>

      <View style={styles.secondBody}>
        <Text style={styles.secondBodyPapaText}>PAPA</Text>
        <View style={styles.secondBodyRewards}>
          <Text style={styles.secondBodyRewardsText}>REWARDS</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <FooterCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqaMA5rCKSeGT3Hk_iDuFWZ0pf89C4rxSqpqByHzTpQ&s=10"
          description="Home"
        />
        <FooterCard
          image="data:image/png;base64,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"
          description="Menu"
        />
        <FooterCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2iW232gG1cZUs-3biujswUHOVOEtZALuX1TJEhy8_A&s=10"
          description="Deals"
        />
        <Pressable
          onPress={alertConfirmation}
          style={({ pressed }) => [
            footerCardStyles.card,
            pressed && { opacity: 0.5 },
          ]}
        >
          <FooterCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTpMh_TBiPLufEal5kxMu_pTWQPthQJwv8ccq8c2yyw&s=10"
            description="Alert"
          />
        </Pressable>

        <FooterCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_udU7sKX5oaoUoIL6PkDqs36rCrN1fIOKg8wJCDXXA&s=10"
          description="Rewards"
        />
        <FooterCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdKELlWMpNj9OgyuZ5HPJtHgN5CiyI5MSZiaGciZL5Q&s=10"
          description="Profile"
        />
        <FooterCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hqJi8XCf-tNDelboto8vGHQSmao_GIU4MVGR-chOVA&s=10"
          description="Cart"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "column",
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    paddingTop: 15,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },

  headerCarryOut: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },

  carryout: {},
  carryoutText: {
    fontSize: 15,
    color: "#429232",
    fontWeight: "bold",
  },
  asap: {
    backgroundColor: "#2c741d",
    padding: 5,
    borderRadius: 10,
    height: "100%",
  },
  asapText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  addressText: {
    fontSize: 18,
  },

  login: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c741d",
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderRadius: 20,
  },
  loginText: {
    fontSize: 16,
    color: "#b6db1e",
    fontWeight: "bold",
  },

  body: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    paddingVertical: 25,
    paddingHorizontal: 20,
    gap: 30,
  },

  spacers: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },

  spacer1: {
    width: "30%",
    padding: 5,
    backgroundColor: "#2c741d",
    borderRadius: 6,
  },

  spacer2: {
    width: "3%",
    padding: 5,
    backgroundColor: "#cbcbcb",
    borderRadius: 6,
  },

  secondBody: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#2c741d",
    width: "90%",
    height: 60,
    borderRadius: 15,
  },

  secondBodyPapaText: {
    marginBottom: 5,
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },

  secondBodyRewards: {
    marginBottom: 5,
    backgroundColor: "#fff",
  },

  secondBodyRewardsText: {
    fontSize: 26,
    color: "#2c741d",
    fontWeight: "bold",
  },

  footer: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 70,
    width: "100%",
  },
});
