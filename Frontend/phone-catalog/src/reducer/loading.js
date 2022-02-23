const initialState = true;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LOADING":
      return action.payload;
    default:
      return state;
  }
}
