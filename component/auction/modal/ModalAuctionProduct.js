import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { BackHandler, Modal, Text, View } from "react-native"
import ModalLayout from "../../ui/ModaLayout"


function ModalAuctionProduct({onModal,changeOnModal,styles}) {

  return (
    <ModalLayout onModal={onModal} changeOnModal={changeOnModal} customStyles={styles}>
      <Text>INI MODAL</Text>
    </ModalLayout>
  )
}

export default ModalAuctionProduct