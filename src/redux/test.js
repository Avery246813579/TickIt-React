const initialState = {
  dog: true,
};

export const testReducer = (state = initialState.deepClone(), action) => {
  const {type, payload} = action;

  switch (type) {
    default:
      return state;
  }
};
