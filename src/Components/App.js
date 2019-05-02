import React from 'react'
import UserCreate from './UserCreate'
import {LanguageStore} from '../Context/LanguageContext'
import ColorContext from '../Context/ColorContext'
import LanguageSelector from './LanguageSelector'

class App extends React.Component {

  render() {
    return (
      <div className='ui container '>
        <LanguageStore>
          <LanguageSelector />


            <ColorContext.Provider value='red'>
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>

      </div>
    )
  }
}

export default App
