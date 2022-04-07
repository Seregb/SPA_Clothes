export const postReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL_POSTS":
      return payload;
    default:
      return state;
  }
};
