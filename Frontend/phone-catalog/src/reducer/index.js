import { combineReducers } from "redux";
import phoneCatalogItems from "./phoneCatalogItems";
import catalogItem from "./catalogItem";
import loading from "./loading";

export default combineReducers({
  phoneCatalogItems,
  catalogItem,
  loading,
});
