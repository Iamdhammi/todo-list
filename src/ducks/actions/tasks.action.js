import * as t from '../types/index.types';
import store from '../store';

export const createTask = task => dispatch => {
    const state = store.getState();
    const allTasks = state.task.tasks;
    const newTask = [...allTasks, task]
    dispatch({
        type: t.CREATE_TASK,
        payload: newTask
    })
}

export const updateTask = (taskId, value) => dispatch => {
    const state = store.getState();
    const allTasks = state.task.tasks;

    const taskIndex = allTasks.findIndex(element => element.taskId === taskId);
    if(taskIndex !== -1) {
        allTasks[taskIndex].completed = value;
        return dispatch({
            type: t.UPDATE_TASK,
            payload: allTasks
        });
    }
}