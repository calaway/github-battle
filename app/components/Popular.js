import React from 'react'
import PropTypes from 'prop-types'

function LanguagesNav({ selected, onUpdatedLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='flex-center'>
      {languages.map(language => (
        <li key={language}>
          <button
            className='btn-clear nav-link'
            style={language === selected ? {color: 'red'} : null}
            onClick={() => onUpdatedLanguage(language)}>
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdatedLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }

  render() {
    return(
      <LanguagesNav
        selected={this.state.selectedLanguage}
        onUpdatedLanguage={this.updateLanguage} />
    )
  }
}
