import React, { Component } from 'react';
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(response => {
      return response.json()
    }).then(users => {
      this.setState({ robots: users })
    })
  }

  onSearchChanged = event => {
    this.setState({ searchField: event.target.value })

  }

  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    })

    return (!robots.length) ?
      <h1>Loading</h1> :
      (<div className='tc' >
        <h1 className='f1' >RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChanged} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>)
  }
}