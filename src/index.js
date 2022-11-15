import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../styles';
import { AddItem, List, ModalDelete, TaskItem } from './components';

export default function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [selectedTask, setSelectedTask] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}])
    setTask('')
  }

  const onHandleCancel = () => {
    setModalVisible(!modalVisible)
  }

  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
    setModalVisible(!modalVisible);
  }

  const onHandleSelected = (item) => {
    setSelectedTask(item)
    setModalVisible(true)
  }

  const renderItem = ({item}) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected}/>
  )

  const onHandleChange = (text) => setTask(text);

  return (
    <View style={styles.container}>
      <AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}> Items List </Text>
      </View>
      <List renderItem={renderItem} taskList={taskList} />
      <ModalDelete modalVisible={modalVisible} selectedTask={selectedTask} onHandleDeleteItem={onHandleDeleteItem} onHandleCancel={onHandleCancel}  />
    </View>
  );
}
