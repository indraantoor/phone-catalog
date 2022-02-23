const initialState = {};

export default function catalogItem(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_CATALOG_ITEM":
      return action.payload;
    default:
      return state;
  }
}
