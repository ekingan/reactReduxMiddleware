import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ClientList extends Component {

	componentWillMount() {
		this.props.fetchClients();
	}

	renderClient(client) {
		return (
			<div key={client.name} className="card card-block">
				<h4 className="card-title">{client.name}</h4>
				<p className="card-text">{client.company.name}</p>
				<a className="btn btn-primary" href={client.website}>Website</a>
			</div>
		);
	}
	render () {
		return (
			<div className="client-list">
				{this.props.clients.map(this.renderClient)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { clients: state.clients }
}

export default connect(mapStateToProps, actions)(ClientList);