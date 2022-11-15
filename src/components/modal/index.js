import React from "react";
import { View, Text, Button, Modal } from "react-native";
import { styles } from "./styles";

const ModalDelete = ({modalVisible, selectedTask, onHandleCancel, onHandleDeleteItem}) => {
    return (
        <Modal visible={ modalVisible } animationType='fade'>
        <View style={ styles.modalContainer }>
          <Text style={ styles.listTitle }></Text>
          <View style={ styles.modalDetailContainer }>
            <Text style={ styles.modalDetailText }> Are you sure to delete this item? </Text>
            <Text style={ styles.selectedTask }> { selectedTask?.value }</Text>
          </View>
          <View style={ styles.modalButtonContainer }>
            <Button 
              title='Cancel'
              color='#9A848F'
              onPress={onHandleCancel}
            />
            <Button 
              title='Delete'
              color='#9A848F'
              onPress={onHandleDeleteItem}
            />
          </View>
        </View>
      </Modal>
    )
}

export default ModalDelete;