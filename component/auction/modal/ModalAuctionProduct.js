import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { BackHandler, Modal, Text, View } from "react-native"


function ModalAuctionProduct({onModal,changeOnModal}) {

  return (
    <Modal visible={onModal} onRequestClose={()=>changeOnModal(false)} animationType="slide">
        <View>
            <Text>This is modal</Text>
        </View>
    </Modal>
  )
}

export default ModalAuctionProduct