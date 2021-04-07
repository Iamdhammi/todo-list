import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Input from '../components/TextInput';
import { lightThemeColor, themeColor, thinColor } from '../utlis/constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toggle from 'react-native-toggle-element';
import Button from '../components/Button';
import { Formik } from 'formik';
import { taskSchema } from '../utlis/validation';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatAMPM } from '../utlis/helper';
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from '../ducks/selectors/task.selector';
import { createTask } from '../ducks/actions/tasks.action';
import PropTypes from 'prop-types';

export default function TaskForm({ setOpenBottomSheet }) {
    const dispatch = useDispatch();
    const tasks = useSelector(getTasks);
    const [toggleValue, setToggleValue] = React.useState(true);

    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(new Date());
    const [showTime, setShowTime] = React.useState(false);
    const [showDate, setShowDate] = React.useState(false);
    const [type, setType] = React.useState('Important');

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowTime(Platform.OS === 'ios')
        setTime(currentDate);
    };
    const showDatepicker = () => {
        setShowDate(true);
    };
    
    const showTimepicker = () => {
        setShowTime(true);
    };

    const handleCreateTask = (values) => {
        const data = {
            ...values,
            taskId: Math.floor(Math.random() * 100000000000), 
            date: date.toDateString(),
            time: formatAMPM(new Date(time)),
            type,
            completed: false
        }
        dispatch(createTask(data));
        setOpenBottomSheet(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Create a task</Text>
            <Formik 
                initialValues={{
                    title: '',
                    type: '',
                    alert: true,
                }} 
                validationSchema={taskSchema}
                onSubmit={values => handleCreateTask(values)}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                    <View>
                        <View style={styles.formContainer}>
                            <Text>Task title</Text>
                            <Input 
                                placeholder="Task Title"
                                value={values.title}
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                            />
                            {touched.title && errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
                        </View>
                        <View style={styles.formContainer}>
                            <Text>Task type</Text>
                            <View style={styles.row}>
                                <TouchableOpacity 
                                    style={[styles.itemTextContainer, type !== 'Important' &&  { backgroundColor: thinColor}]}
                                    onPress={() => setType('Important')}
                                >
                                    <Text style={[styles.itemTitle, type !== 'Important'  &&  { color: '#000'}]} >Important</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[styles.itemTextContainer, type !== 'Planned'  && { backgroundColor: thinColor}]}
                                    onPress={() => setType('Planned')}
                                >
                                    <Text style={[styles.itemTitle, type !== 'Planned'  &&  { color: '#000'}]} >Planned</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.formContainer}>
                            <Text>Choose date & time</Text>
                            
                            <View style={styles.row}>
                                {showDate ? (
                                    <View style={{width: 150}}>
                                        <DateTimePicker
                                        testID="timePicker"
                                        value={date}
                                        mode={'date'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChangeDate}
                                        />
                                    </View>) :
                                    Platform.OS === 'android' ?
                                    <TouchableOpacity style={[styles.timeContainer]} onPress={showDatepicker}>
                                        <MaterialCommunityIcons name="calendar" size={16}/>
                                        <Text style={[styles.timeTitle]} >{date.toDateString()}</Text>
                                    </TouchableOpacity>:
                                    <TouchableOpacity style={[styles.timeContainer]} onPress={showDatepicker}>
                                        <MaterialCommunityIcons name="calendar" size={16}/>
                                        <Text style={[styles.timeTitle]} >Select a date</Text>
                                    </TouchableOpacity>
                                }
                                {showTime ? (
                                    <View style={{width: 150}}>
                                        <DateTimePicker
                                        testID="datePicker"
                                        value={time}
                                        mode={'time'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChangeTime}
                                        />
                                    </View>) :
                                    Platform.OS === 'android' ?
                                    <TouchableOpacity style={[styles.timeContainer]} onPress={showTimepicker}>
                                        <MaterialCommunityIcons name="clock-time-two-outline" size={16}/>
                                        <Text style={[styles.timeTitle]} >{formatAMPM(new Date(time))}</Text>
                                    </TouchableOpacity>:
                                    <TouchableOpacity style={[styles.timeContainer]} onPress={showTimepicker}>
                                        <MaterialCommunityIcons name="clock-time-two-outline" size={16}/>
                                        <Text style={[styles.timeTitle]} >Select Time</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                        <View style={styles.formContainer}>
                            <View style={[styles.row, {justifyContent: 'space-between'}]}>
                                <Text style={styles.alertText}>Get alert for this task</Text>
                                <Toggle
                                    value={toggleValue}
                                    onPress={setToggleValue}
                                    trackBar={{
                                        activeBackgroundColor: themeColor,
                                        inActiveBackgroundColor: '#3c4145',
                                        borderActiveColor: '#86c3d7',
                                        borderInActiveColor: '#1c1c1c',
                                        borderWidth: 2,
                                        width: 60,
                                        height: 30,
                                    }}
                                    thumbButton={{
                                        width: 30,
                                        height: 30,
                                        activeBackgroundColor: '#fff',
                                        inActiveBackgroundColor: '#fff',
                                        borderWidth: 2,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.formContainer}>
                            <Button 
                                text="Done"
                                buttonStyle={{
                                    backgroundColor: lightThemeColor,
                                    shadowColor: "rgba(0,0,0,0.5)",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                }}
                                textStyle={{color: '#fff'}}
                                onPress={handleSubmit}
                            />
                        </View>
                    </View>
                )}
            </Formik>
            
        </View>
    )
}

TaskForm.proptypes = {
    setOpenBottomSheet: PropTypes.func.isRequired,
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20
    },
    formContainer: {
        marginVertical: 10
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    itemTextContainer: {
        backgroundColor: themeColor,
        paddingVertical: 15,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginRight: 10
    },
    itemTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600'
    },
    timeContainer: {
        backgroundColor: thinColor,
        paddingVertical: 15,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeTitle: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '600',
        marginLeft: 5
    },
    alertText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 16
    },
    errorText: {
        color: 'red',
        fontFamily: 'Sansation',
        fontSize: 12,
        marginTop: 5
    },

})