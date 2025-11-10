import { StyleSheet } from "react-native";

export const colors = {
  mexicanGreen: "#006341",
  mexicanRed: "#CE1126",
  white: "#FFFFFF",
  cream: "#FFF8E7",
  lightGray: "#E9E9E9",
  darkGray: "#444",
  gold: "#D4AF37",
};

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },

  flatListContent: {
    paddingBottom: 40,
    paddingTop: 10,
  },

  header: {
    backgroundColor: colors.mexicanRed,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: colors.darkGray,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    letterSpacing: 1,
  },

  headerSubtitle: {
    fontSize: 15,
    color: colors.gold,
    textAlign: "center",
    marginTop: 6,
    fontStyle: "italic",
  },

  itemCard: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 6,
    shadowColor: colors.darkGray,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    transform: [{ scale: 1 }],
  },

  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },

  itemInfo: {
    padding: 15,
    backgroundColor: colors.white,
    borderTopWidth: 3,
    borderTopColor: colors.mexicanGreen,
  },

  itemTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.mexicanGreen,
    marginBottom: 5,
  },

  itemSubtitle: {
    fontSize: 14,
    color: colors.darkGray,
    opacity: 0.8,
  },
});
