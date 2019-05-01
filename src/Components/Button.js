import React from 'react'
import LanguageContext from '../Context/LanguageContext'

class Button extends React.Component {
  // links button Component to context object
  // reference to the data inside context object is this.context
  static contextType = LanguageContext

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Soumettre'
    return <button className='ui button primary'>{text}</button>
  }
}

export default Button
