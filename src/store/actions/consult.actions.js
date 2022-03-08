export const medTypes = {
  UPDATE_CONSULTS: "UPDATE_CONSULTS",
};

export const medActions = {
  update: (arr) => ({ type: medTypes .UPDATE_CONSULTS, payload: arr }),
};
