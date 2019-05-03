export const fetchClients = () => {
  return async (dispatch) => {
    const response = await fetch('/api/clients', { method: 'GET' });
    const clients = await response.json();
    dispatch({
      type: 'RECEIVE_CLIENTS',
      clients: clients
    })
  }
}

export const updateClient = (data) => {
  return async (dispatch) => {
    await fetch(`/api/clients`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // { id: 1, name: 'something else' }
    });
    fetchClients();
  }
}

export const fetchClient = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/api/clients/${id}`);
    const client = await response.json();
    dispatch({
      type: 'RECEIVE_CLIENT',
      client: client
    })
  }
}