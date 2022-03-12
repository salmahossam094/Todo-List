import './App.css';
import React, { Component } from 'react'
import AddItem from './components/AddItem/AddItem';
import Todoitem from './components/Todoitem/Todoitem';
class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Salma', age: 22 },
      { id: 2, name: 'Hagar', age: 23 },
      { id: 3, name: 'Nadeen', age: 24 }

    ]
  }
  deleteItem = (id) => {
    let item = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({ items: item })
  }
  addItem = (item) => {
    item.id= Math.random()
    let items = this.state.items;
    items.push(item)
    this.setState({ items })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">
        TodoList App
        </h1>
        <Todoitem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />

      </div>
    )
  }
}



export default App;
