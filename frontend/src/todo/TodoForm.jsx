import React from 'react'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton.jsx'

export default props => {
  const keyHandler = e => {
    if (e.key === 'Enter') props.handleAdd()
    else if (e.key === 'Escape') props.handleClear()
  }

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input id='description' className='form-control'
          placeholder='Adicione ou procure uma tarefa'
          onChange={ props.handleChange }
          onKeyUp={ keyHandler }
          value={ props.description } />
      </Grid>
      <Grid cols='12 3 2'>
        <IconButton type='primary' icon='plus'
          onClick={ props.handleAdd }></IconButton>
        <IconButton type='default' icon='close'
          onClick={ props.handleClear }></IconButton>
      </Grid>
    </div>
  )
}
