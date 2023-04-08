import React from 'react';
import {Authorizer} from 'casbin.js';
import permissions from './permissions.json'


// CasbinDemo requires a `user` params in props and update its internal state.
// Use PureComponent to avoid multiple re-renders.
export default class CasbinDemo extends React.Component {
  constructor(props) {
    super(props);
    this.auth = new Authorizer("manual");
  }

  // Rendering is triggered when this.props is updated.
  // We can set the permission when rendering.
  // TODO: Async handlers for this.auth (auto mode)
  render() {
    // set the permission.
    this.auth.setPermission(permissions[this.props.user]);
    const AliceDiv = <p>This is alice's data.</p>
    const BobDiv = <p>This is bob's data.</p>
    return (
      <div>
        <p>====</p>
        { this.auth.permission.check('read', 'alice_data') && AliceDiv }
        { this.auth.permission.check('read', 'bob_data') && BobDiv }
        <p>====</p>
      </div>
    )
  }
}
