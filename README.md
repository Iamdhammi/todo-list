# To Do List Evaluation

Redux Persist was used to persist the store. Redux persist uses AsyncStorage to save the entire store structure i.e the tasks. 
Hence, prevent storing to the AsyncStorage directly and retrieving everytime the stored tasks need to be updated, and also improves the code quality.