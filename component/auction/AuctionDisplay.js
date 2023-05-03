import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { updateDataRecentUser } from "../../util/user";
import { useContext } from "react";
import { UserContext } from "../../store/user-context";

function AuctionDisplay({ id, name_product, imgUri,empty }) {
    const nav = useNavigation()
    const userCtx = useContext(UserContext)
    async function redirectProduct(){
        nav.navigate('Auction',id)
        await updateDataRecentUser(userCtx.user.uid,id)
    }
    if (empty){
      return <View style={styles.containerEmpty}>
        <Text style={styles.textEmpty}>There is no recent auction</Text>
      </View>
    }
  return (
    <Pressable
      style={[
        styles.container
      ]}
      onPress={redirectProduct}
    >
      <View style={styles.containerImage}>
        <Image source={{ uri: imgUri }} style={styles.image} />
      </View>
      <View style={styles.containerName}>
        <Text>{name_product}</Text>
      </View>
    </Pressable>
  );
}

export default AuctionDisplay;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor:'white',
    elevation:5

  },
  containerImage: {
    width: "100%",
    height: 100,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: "hidden",
  },
  image: {
    width:'100%',
    height:'100%',
    resizeMode: "cover",
    overflow:'hidden'
  },
  containerName: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  containerEmpty:{
    width:"100%",
    height:120,
    justifyContent:'center'
  },
  textEmpty:{
    textAlign:'center',
    fontSize:20,
    color:'#7d7d7d'
  }
});
