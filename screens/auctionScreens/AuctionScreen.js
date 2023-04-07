import { Text, View } from "react-native";
import AuctionContent from "../../component/auction/AuctionContent";
import { useNavigation } from "@react-navigation/core";
import { useLayoutEffect } from "react";
import BackButton from "../../component/ui/BackButton";

function AuctionScreen() {
  function backHandler() {
    nav.goBack();
  }
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerLeft: BackButton.bind(this, backHandler),
    });
  }, [nav, BackButton]);

  return <AuctionContent />;
}

export default AuctionScreen;
