import logo from './logo.svg';
import './App.css';
import React from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';


class App extends React.Component {
  state = {
    todos: [
      {
      id : 1,
      title : 'Learn React',
      },
      {
        id : 2,
        title : 'Learn Redux',
      },
    ],
    isEdit: false
  }


  openModal = () =>{
    this.setState({
      isEdit: true
    })
  }

  closeModal = () =>{
    this.setState({
      isEdit: true
    })
  }
  deleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
  }

  addTask = data =>{
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data
    }

    this.setState({
      todos : [...this.state.todos, newData]
    })
  }
  render(){
    const {todos} = this.state;
    return (
        <div className="app">
          <div className='logo'>
            <img src={logo} alt="" />
              <h3>Task list</h3>
          </div>
          <div className="list">
            {todos.map(item => (
            <TodoItem 
            key={item.id} 
            todo = {item} 
            del={this.deleteTask}
            open ={this.openModal}
            />
            ))}
          </div>
          <div className="input-form">
            <FormInput add={this.addTask}/>
          </div>
          <EditModal edit={this.props.isEdit}/>
        </div>
    );
    }
}


export default App;
