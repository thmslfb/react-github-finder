import './globalStyles/styles.css'
import Card from './components/Card'
import { createContext, useState, Fragment } from 'react' // 4.5k (gzipped: 2k)
import { BsMoonFill, BsSunFill } from 'react-icons/bs' // 3.1k (gzipped: 1.3k)

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme= () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='main' id={theme}>
        <div className='header-section'>
          <div className='header'>
            <p>githubfinder</p>
            <div onClick={toggleTheme} className='toggle'>
              <label>
                {
                  theme === 'light' ? 
                  <Fragment><p>Dark</p> <BsMoonFill /></Fragment> : 
                  <Fragment><p>Light</p> <BsSunFill /></Fragment>
                }
              </label>
            </div>
          </div>
        </div>
        <Card />
      </div>
    </ThemeContext.Provider>
  )
}

export default App