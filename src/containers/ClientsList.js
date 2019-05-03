import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../actions';
import { Link } from 'react-router-dom';

export default  connect(
  ({ clients }) => ({ clients }), // reducers
  { fetchClients } // actions
)(
  class ClientsList extends Component {

    componentDidMount = () => {
      this.props.fetchClients()
    }

    render() {
      return (
        <ul>
          {this.props.clients.sort((a, b) => a < b ? -1 : 1).map(client => <li key={client.id}><Link to={`/clients/${client.id}`}>{client.id}. {client.name}</Link></li>)}
        </ul>
      )
    }
  }
)
