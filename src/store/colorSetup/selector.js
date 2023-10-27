import { get } from "lodash";

export const getBackgroundColor = (store) =>
  get(store, "backgroundColor", "#16102e");
