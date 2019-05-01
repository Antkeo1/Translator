import React from 'react'
import LanguageContext from '../Context/LanguageContext'

class Button extends React.Component {

  render() {

    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {(val) => value === 'english' ? 'Submit' : 'Soumettre' }
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button
