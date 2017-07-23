// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = (props) => {
  let styles = {
    title: { textAlign: 'center', border: '1px solid grey' },
    subtitle: { color: '#EC7063' }
  }

  return (
    <div style={ styles.title }>
      <h1 style={ styles.subtitle }>This is a React Component</h1>
      <h3>hello {props.name}! </h3>
    </div>
  )
}

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.getElementById('react-app'),
  )
})
