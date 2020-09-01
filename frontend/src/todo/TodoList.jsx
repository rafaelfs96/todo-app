import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleDone, deleteTodo } from './todoActions'

import IconButton from '../template/IconButton'

const TodoList = props => {

  const filter = description => {
    let search = new RegExp(`${props.description}`, 'i')
    return !search.test(description)
  }

  const renderRows = () => {
    const list = props.list || []
    
    return list.map(todo => {
      let status = todo.done ? { type: 'warning', icon: 'undo' } : { type: 'success', icon: 'check' }
      const isHidden = filter(todo.description)
      return (
        <tr key={ todo._id } hidden={isHidden}>
          <td className={ todo.done ? 'markedAsDone' : '' }>{ todo.description }</td>
          <td>
            <IconButton type={ status.type } icon={ status.icon } onClick={ () => props.toggleDone(todo) }/>
            <IconButton type='danger' icon='trash-o' hide={ !todo.done } onClick={ () => props.deleteTodo(todo) } />
          </td>
        </tr>
      )
    })
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descricao</th>
          <th className='tableActions'>Acoes</th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  list: state.todo.list,
  description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleDone,
  deleteTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)