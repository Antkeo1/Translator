import React from 'react'
import LanguageContext from '../Context/LanguageContext'
import ColorContext from '../Context/ColorContext'

class Button extends React.Component {
  renderSubmit = (value) => {
    return  value === 'english' ? 'Submit' : 'Soumettre'
  }

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
        <ColorContext.Consumer>
          {(color) => this.renderButton(color)}
        </ColorContext.Consumer>
    )
  }
}

export default Button
