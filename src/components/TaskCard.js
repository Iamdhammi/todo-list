import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { thinColor, primaryTextColor, themeColor } from '../utlis/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { updateTask } from '../ducks/actions/tasks.action';
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types';

export default function TaskCard ({ task }) {
    const { completed } = task;
    const dispatch = useDispatch();
    const [isSelected, setSelection] = React.useState(false);

    React.useEffect(() => {
        if(task) setSelection(completed)
    }, [task, completed]);

    const handleChange = (value) => {
        setSelection(value)
        dispatch(updateTask(task.taskId, value));
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardRow}>
                <View style={styles.textBlock}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <View style={styles.timeContainer}>
                        <Ionicons name="alarm" color={primaryTextColor} size={16} />
                        <Text style={styles.timeText}>{`${task.date} ${task.time}`}</Text>
                    </View>
                </View>
                <CheckBox 
                    value={isSelected}
                    onValueChange={value => handleChange(value)}
                    style={styles.checkbox}
                    boxType="circle"
                    lineWidth={1}
                    onCheckColor={'#fff'}
                    onFillColor={themeColor}
                    onTintColor={'#fff'}
                />
            </View>
        </View>
    );
}

TaskCard.proptypes = {
    task: PropTypes.object.isRequired,
}


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: thinColor,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 20,
        marginVertical: 10
    },
    cardRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5
    },
    timeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 14,
        color: primaryTextColor,
        fontWeight: '600',
        marginLeft: 5
    },
})