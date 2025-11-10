import React from "react";
import {
  Text, View, FlatList, Image, StatusBar, SafeAreaView, TouchableOpacity,
} from "react-native";
import { Styles, colors } from "./styles";

const AntojitosItem = ({ item }) => {
  return (
    <TouchableOpacity style={Styles.itemCard} activeOpacity={0.85}>
      <Image source={{ uri: item.url }} style={Styles.itemImage} />
      <View style={Styles.itemInfo}>
        <Text style={Styles.itemTitle}>{item.nombre}</Text>
        <Text style={Styles.itemSubtitle}>
          🌶️ {item.descripcion}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const data = [
    {
      id: 1,
      nombre: "Pastes",
      descripcion: "Empanadas típicas de Hidalgo con rellenos salados o dulces.",
      url: "https://cdn2.cocinadelirante.com/sites/default/files/images/2023/04/rellenosparapastes.jpg",
    },
    {
      id: 2,
      nombre: "Mole",
      descripcion: "Platillo tradicional con una mezcla de chiles, especias y chocolate.",
      url: "https://barbacoamx.com/wp-content/uploads/2016/10/mole-con-pollo.jpg",
    },
    {
      id: 3,
      nombre: "Barbacoa",
      descripcion: "Cordero cocido en horno de tierra, típico de los domingos hidalguenses.",
      url: "https://imag.bonviveur.com/tacos-de-barbacoa.jpg",
    },
    {
      id: 4,
      nombre: "Chiles en nogada",
      descripcion: "Rellenos de carne y bañados en una deliciosa nogada con granada.",
      url: "https://th.bing.com/th/id/R.314954e609c5593724a0bcf7f3057355?rik=%2fKE%2bCx%2baOWLtCA&riu=http%3a%2f%2fcocinamuyfacil.com%2fwp-content%2fuploads%2fchiles_nogada-7.jpg%3fx17099&ehk=fHgU8bI60oJ4SZR3ktKUnz8ERYJL8zUFMqK6%2fii%2fjIQ%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      nombre: "Ximbo",
      descripcion: "Platillo típico con carne enchilada envuelta en penca de maguey.",
      url: "https://th.bing.com/th/id/R.4c71d2898a6fef4cef03ff92fbb9441d?rik=ULJ2MuOn%2fhFtgQ&pid=ImgRaw&r=0",
    },
    {
      id: 6,
      nombre: "Sopes",
      descripcion: "Base de maíz con frijoles, crema, queso y carne al gusto.",
      url: "https://www.maricruzavalos.com/wp-content/uploads/2020/09/sopes-de-picadillo-mexicanos.jpg",
    },
  ];

  const renderHeader = () => (
    <View style={Styles.header}>
      <Text style={Styles.headerTitle}>platillos tipicos del estado de Hidalgo</Text>
      <Text style={Styles.headerSubtitle}>
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.mexicanRed}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AntojitosItem item={item} />}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.flatListContent}
      />
    </SafeAreaView>
  );
}
