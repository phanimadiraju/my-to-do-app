import React,{Component} from 'react'
import ToDoDataService from '../apis/ToDoDataService';

class ToDoListComponent extends Component{
    constructor() {
        super();
        this.state = {
            todos: [],
            message:null
        }
        // this.deleteToDoClicked=this.deleteToDoClicked.bind(this)
    }

    componentDidMount(){
        ToDoDataService.retrieveAllToDos()
        .then(response => {
            //console.log(response)
            this.setState({ todos:response.data})
        } 
        )

    }

    // deleteToDoClicked(id){
    //    // console.log(id +'clicked')
    //    ToDoDataService.deleteToDo(id)
    //    .then(response =>{
    //        this.setState({ message:`To do ${id} deleted successfully`})
    //    })
    // }


    render(){
        return(
            <div>
                <h1>ToDo's</h1>
                {/* {this.state.message && <div className='alert alert-success'>{this.state.message}</div>} */}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Completion Date</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.todos.map(
                            todo =>
                            <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                            {/* <td><button onClick={()=>this.deleteToDoClicked(todo.id)} className='btn btn-warning'>Delete</button></td> */}
                            </tr>
                        ) 
                        
                        }
                    </tbody>
                </table>   
            </div>
            
        )
    }
}

export default ToDoListComponent