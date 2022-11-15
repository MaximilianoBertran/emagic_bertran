import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";

const List = ({taskList, renderItem}) => {
    return (
        <FlatList
            style={styles.listContainer}
            data={taskList}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default List;