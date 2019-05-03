import { combineReducers } from "redux";

const clients = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_CLIENTS":
      return action.clients;
    case "RECEIVE_CLIENT":
      return [
        ...state.filter(client => client.id !== action.client.id),
        action.client
      ]
    default:
      return state;
  }
};

const appointments = (state = [], action) => {
  return state;
}

const pets = (state = [], action) => {
  return state;
}

export default combineReducers({
  clients,
  appointments,
  pets
})