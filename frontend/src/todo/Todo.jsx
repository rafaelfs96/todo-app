import React, { Component } from 'react'

import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleToogleDone = this.handleToogleDone.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.refresh()
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`).then(resp => {
      this.setState({
        ...this.state,
        description,
        list: resp.data
      })
    })
  }

  handleAdd() {
    const {description} = this.state
    const data = { description }

    axios.post(URL, data)
      .then(resp => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description))
  }

  handleToogleDone(todo) {
    const data = { ...todo, done: !todo.done }
  
    axios.put(`${URL}/${todo._id}`, data)
      .then(resp => this.refresh(this.state.description))
  }

  handleClear() {
    this.setState({
      ...this.state,
      description: ''
    })
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm description={ this.state.description }
          handleAdd={ this.handleAdd }
          handleChange={ this.handleChange }
          handleClear={ this.handleClear } />

        <TodoList list={ this.state.list } search={ this.state.description }
          handleRemove={ this.handleRemove }
          handleToogleDone={ this.handleToogleDone } />
      </div>
    )
  }
}