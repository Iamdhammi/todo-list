export const getTasks = state => {
    return state.task.tasks;
}

export const getCompletedTasks = state => {
    const completedTasks = state.task.tasks.filter(element => element.completed);
    return completedTasks;
}

export const getInCompletedTasks = state => {
    const inCompletedTasks = state.task.tasks.filter(element => !element.completed);
    return inCompletedTasks;
}