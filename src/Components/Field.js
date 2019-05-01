import React from 'react'
import LanguageContext from '../Context/LanguageContext'

class Field extends React.Component {
  static contextType = LanguageContext

  render() {
    const text = this.context === 'english' ? 'Name' : 'Prenom'

    return (
      <div>
        <div className='ui field'>
          <label>{text}</label>
          <input />
        </div>
      </div>
    )
  }
}

export default Field
