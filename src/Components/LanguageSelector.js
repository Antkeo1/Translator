import React from 'react'
import LanguageContext from '../Context/LanguageContext'

class LanguageSelector extends React.Component {
  static contextType = LanguageContext

  render() {
    console.log(this.context)
    return (
      <div>
        Select a language:
        <i className='flag us' onClick={() => this.context.onLanguageChange('english')} />
        <i className='flag fr' onClick={() => this.context.onLanguageChange('french')} />
      </div>
    )
  }
}

export default LanguageSelector
