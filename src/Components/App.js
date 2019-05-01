import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../Context/LanguageContext'
import ColorContext from '../Context/ColorContext'
class App extends React.Component {
  state = {
    language: 'english',
    color: 'red'
  }

  onLanguageChange = (language) => {
    this.setState({ language })
  }

  // value prop will update LanguageContext
  render() {
    return (
      <div className='ui container '>
        <div>
          Select a language:
          <i className='flag us' onClick={() => this.onLanguageChange('english')} />
          <i className='flag fr' onClick={() => this.onLanguageChange('french')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
        <ColorContext.Provider value='red'>
            <UserCreate />
        </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App
