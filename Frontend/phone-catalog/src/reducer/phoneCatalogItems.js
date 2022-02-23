const initialState = [];

export default function phoneCatalogItems(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_PHONE_CATALOG_ITEMS":
      return action.payload;
    default:
      return state;
  }
}
