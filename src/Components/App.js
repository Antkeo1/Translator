import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../Context/LanguageContext'
import ColorContext from '../Context/ColorContext'
import LanguageSelector from './LanguageSelector'

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
        <LanguageSelector onLanguageChange={this.onLanguageChange}/>
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
