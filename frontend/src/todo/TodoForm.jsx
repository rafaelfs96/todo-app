import React, { useEffect, Fragment } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeDescription, search, add, clear } from './todoActions'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton.jsx'

const TodoForm = props => {
  const { add, clear, changeDescription, search, description } = props

  useEffect(() => search(), [search])
  
  const keyHandler = event => {
    if (event.key === 'Enter') add(description)
    else if (event.key === 'Escape') clear()
  }

  return (
    <Fragment>
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description' className='form-control'
            placeholder='Adicione ou procure uma tarefa'
            onChange={ changeDescription }
            onKeyUp={ keyHandler }
            value={ description } />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton type='primary' icon='plus'
            onClick={ () => add(description) } />
          <IconButton type='default' icon='close'
            onClick={ clear } />
          <IconButton type='warning' icon='refresh'
            onClick={ search }/>
        </Grid>
      </div>
    </Fragment>
    
  )
}

const mapStateToProps = store => ({ description: store.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription,
  search,
  add,
  clear
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TodoForm)
