
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from '../components/Header';
import TaskCard from '../components/TaskCard';
import { primaryTextColor } from '../utlis/constants'
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { getCompletedTasks, getInCompletedTasks } from '../ducks/selectors/task.selector';
import Empty from '../components/Empty';
import { headerData } from '../data/index.data';
 
const Home = () => {
  const completedTasks = useSelector(getCompletedTasks);
  const inCompletedTasks = useSelector(getInCompletedTasks);
  const [activeSlide, setActiveSlide] = React.useState(0);


  return (
    <SafeAreaView style={styles.safeviewContainer}>
      <StatusBar barStyle={'dark-content'} />
      <Header activeSlide={activeSlide} setActiveSlide={setActiveSlide}/>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tasks</Text>
          <View style={styles.taskContainer}>
            {
              inCompletedTasks.length === 0 || inCompletedTasks.filter(task => (activeSlide !== 0 ? task.type === headerData[activeSlide].title : task)).length === 0 ?
              <Empty text="No tasks avaliable" /> :
              inCompletedTasks
              .filter(task => (activeSlide !== 0 ? task.type === headerData[activeSlide].title : task))
              .map((item, index) => {
                return (
                  <TaskCard 
                    key={item.taskId} 
                    task={item}
                  />
                )
              })
            }
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Completed</Text>
          <View style={styles.taskContainer}>
            {
              completedTasks.length === 0 || completedTasks.filter(task => (activeSlide !== 0 ? task.type === headerData[activeSlide].title : task)).length === 0 ?
              <Empty text="No tasks completed" /> :
              completedTasks
              .filter(task => (activeSlide !== 0 ? task.type === headerData[activeSlide].title : task))
              .map((item, index) => {
                return (
                  <TaskCard 
                    key={item.taskId} 
                    task={item}
                  />
                )
              })
            }
          </View>
        </View>
      </ScrollView>
      <Footer active="home" />
    </SafeAreaView>
  );
};
 
 const styles = StyleSheet.create({
    safeviewContainer: {
      backgroundColor: '#fff',
      flex: 1,
    },  
    scrollContainer: {
      flexGrow: 1,
      paddingHorizontal: 20
    },
    section: {
      flex: 1
    },
    sectionTitle: {
      color: primaryTextColor,
      fontSize: 17,
      fontWeight: '600',
    },
    taskContainer: {
      flex: 1
    }
 });
 
 export default Home;
 