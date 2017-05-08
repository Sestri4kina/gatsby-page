import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h5>Hi there</h5>
        <h2>I am Anastasiia Bratochkina</h2>
        <p className="intro-desc">
          <span>Frontend Developer</span>
          <span className="color-splash">•</span>
          <span>Javascript Ninja</span>
          <span className="color-splash">•</span>
          <span>Mathematician</span>
        </p>
        <div className="social-links">
            <a href="https://github.com/Sestri4kina" target="_blank">Github</a>
            <a href="http://codepen.io/Sestri4kina/" target="_blank">Codepen</a>
            <a href="https://twitter.com/Sestri4kina" target="_blank">Twitter</a>
            <a href="https://www.linkedin.com/in/abratochkina/" target="_blank">Linkedin</a>
            <a href="https://medium.com/@Sestri4kina" target="_blank">Medium</a>
            <a href="https://www.facebook.com/anastasiia.bratochkina" target="_blank">Facebook</a>
       </div>
     </div>
    )
  }
}
