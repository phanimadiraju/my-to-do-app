import axios from 'axios'

class ToDoDataService {

    retrieveAllToDos (){
        return axios.get('http://localhost:8080/api/todos')
    }

    deleteToDo(id){
        return axios.get(`http://localhost:8080/api/todos/${id}`)
    }


}

export default  new ToDoDataService()