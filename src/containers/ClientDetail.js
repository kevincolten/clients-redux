import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateClient, fetchClient } from '../actions.js';

export default connect(
  ({ clients }) => ({ clients }),
  { updateClient, fetchClient }
)(
  class ClientDetail extends Component {
    getClient = () => {
      return this.props.clients.find(client => client.id === Number(this.props.match.params.id)) || {}
    }

    componentDidMount = () => {
      this.props.fetchClient(this.props.match.params.id)
    }

    onChange = (attr, value) => {
      this.props.updateClient({ ...this.getClient(), [attr]: value })
    }

    render() {
      const client = this.getClient();
      return (
        <ul>
          <li>Name: <input defaultValue={client.name} onChange={(e) => this.onChange('name', e.target.value)}/></li>
          <li>Address: <input defaultValue={client.address} onChange={(e) => this.onChange('address', e.target.value)}/></li>
          <li>Phone: <input defaultValue={client.phoneNumber} onChange={(e) => this.onChange('phoneNumber', e.target.value)}/></li>
        </ul>
      )
    }
  }
)
