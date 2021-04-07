import * as yup from 'yup';

export const taskSchema = yup.object().shape({
    title: yup.string().required('Task title is required')
});