import { combineReducers } from "redux";
import phoneCatalogItems from "./phoneCatalogItems";
import catalogItem from "./catalogItem";

export default combineReducers({
  phoneCatalogItems,
  catalogItem,
});
