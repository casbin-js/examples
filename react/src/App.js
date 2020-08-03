import React from 'react';
import CasbinDemo from './CasbinDemo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: 'bob'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({user: event.target.value});
    console.log(`App user ${event.target.value}`)
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Who you are?
            <select value={this.state.user} onChange={this.handleChange}>
              <option value="alice">Alice</option>
              <option value="bob">Bob</option>
              <option value="admin">Administrator</option>
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
        <CasbinDemo user={this.state.user}></CasbinDemo>
      </div>
    )
  }
}
