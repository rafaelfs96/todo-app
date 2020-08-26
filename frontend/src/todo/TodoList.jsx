import React from 'react'

import IconButton from '../template/IconButton'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    let search = new RegExp(`${props.search}`, 'i')
    return list.map(todo => {
      let status = todo.done ? { type: 'warning', icon: 'undo' } : { type: 'success', icon: 'check' }
      
      const isHidden = !search.test(todo.description)
      return (
        <tr key={ todo._id } hidden={isHidden}>
          <td className={ todo.done ? 'markedAsDone' : '' }>{ todo.description }</td>
          <td>
            <IconButton type={ status.type } icon={ status.icon } onClick={ () => props.handleToogleDone(todo) }/>
            <IconButton type='danger' icon='trash-o' hide={ !todo.done } onClick={ () => props.handleRemove(todo) } />
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
