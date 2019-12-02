import React from 'react'
import ReactDOM from 'react-dom'

import ThemeProvider from './contexts/theme.js'
import './index.css'

import Popular from './components/Popular'
import Battle from './components/Battle'

class App extends React.Component {
  constructor() {
    super(props)
    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className='container'>
          <Battle />
        </div>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
