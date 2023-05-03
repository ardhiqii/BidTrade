import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DUMMY_DATA } from "../auction/AuctionsDisplay";
import { useEffect, useRef, useState } from "react";
import { promoDummy } from "../../data/promoDummy";

const { width, height } = Dimensions.get("window");

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

function Carousel() {
  let flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeSlide = setInterval(autoChange.bind(this, currentIndex), 3000);
    return () => {
      clearInterval(changeSlide);
    };
  }, [currentIndex]);
  const onViewRef = useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  function autoChange(currIdx) {
    const length = DUMMY_DATA.length - 1;
    let index = currIdx === length ? 0 : currIdx + 1;
    setCurrentIndex(index);
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  }
  
  function renderItem({ item }) {
    return (
      <Pressable>
        <Image source={{ uri: item.imgUri }} style={styles.image} />
      </Pressable>
    );
  }
  return (
    <>
      <FlatList
        data={promoDummy}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        style={styles.carousel}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />
    </>
  );
}

export default Carousel;

const styles = StyleSheet.create({
  carousel: {
    height: 100,
  },
  image: {
    width,
    height: "100%",
    resizeMode: "contain",    
  },
});
