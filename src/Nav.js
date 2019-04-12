import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark mb-4" style={{backgroundColor: 'black'}}>
        <a className="navbar-brand" href="fb.xom">Wicom</a>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <a className="nav-link" href="fb">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="fb">List Note</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
