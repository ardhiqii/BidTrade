import { FlatList, View } from "react-native";
import AuctionDisplay from "./AuctionDisplay";

export const DUMMY_DATA = [
    {
        id:'1',
        nameProduct:'Togey',
        imgUri:'https://cdn.discordapp.com/attachments/777233158130892873/1093666601506705448/ngulum.jpg',
        currentPrice:'5000'
    },
    {
        id:'2',
        nameProduct:'Monyet',
        imgUri:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
        currentPrice:'10000'
    }
]
function renderAuction(itemData){
    return <AuctionDisplay {...itemData.item} index={itemData.index}/>
}

function AuctionsDisplay(){
    
    return(
        <FlatList contentContainerStyle={{justifyContent:'space-evenly'}}  data={DUMMY_DATA} keyExtractor={(item) => item.id} renderItem={renderAuction} horizontal={true} />
    )
}

export default AuctionsDisplay