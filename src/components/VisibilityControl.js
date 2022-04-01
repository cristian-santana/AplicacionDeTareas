import React from 'react'


export const VisibilityControl = props => {
    return (
        <div className='from-chek'>
              <input
              
              type="checkbox"
              className="form-check-input"
              checked={props.isChecked}
              onChange={e => props.callback(e.target.checked)}
              />
           <label htmlfor= "form-check-label">
               Show {props.description}
           </label>
        </div>
    )
}