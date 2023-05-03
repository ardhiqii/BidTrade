import {
  BackHandler,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
function ModalLayout({
  children,
  blackTransparantBackground,
  onModal,
  changeOnModal,
  customStyles
}) {
  return (
    <>
      {blackTransparantBackground && (
        <>
          <Modal
            visible={onModal}
            onRequestClose={() => changeOnModal(false)}
            transparent={true}
          >
            <View style={styles.backgroundDark}></View>
          </Modal>
        </>
      )}

      <Modal
        transparent={true}
        visible={onModal}
        onRequestClose={() => changeOnModal(false)}
        animationType="slide"
      >
        <View style={[styles.container, customStyles ]}>{children}</View>
      </Modal>
    </>
  );
}

export default ModalLayout;

const styles = StyleSheet.create({
  backgroundDark: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    height: "50%",
    marginTop: "auto",
    backgroundColor: "#e8e8e8",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    borderColor: "#e8e8e8",
  },
});
