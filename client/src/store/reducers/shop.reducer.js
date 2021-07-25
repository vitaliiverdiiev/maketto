const INTIAL_STATE = {
  product: ['toys', 'joys'],
};

const handlers = {
  DEFAULT: (state) => state,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default shopReducer;
