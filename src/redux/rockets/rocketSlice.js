import fetchRockets from './rocketsData';

const initialState = [];

// create action contants - This are calleds action types
const GET_ROCKET = 'rockets/GET_ROCKET';
const RESERVE_ROCKET = 'rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'rockets/CANCEL_ROCKET';

// Action Creators for the action constant
// ########## Action to to get Rockets ###############/
const getRockets = () => async (dispatch) => {
  const rockets = await fetchRockets();
  dispatch({
    type: GET_ROCKET,
    payload: rockets,
  });
};

// ########## Reserve Rocket ###############/
const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  payload: id,
});

// Reducers that recieves the actions and updates the state
const RocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return action.payload;
    case RESERVE_ROCKET:
      return [
        ...state.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        }),
      ];
    case CANCEL_ROCKET:
      return [
        ...state.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: false };
          }
          return rocket;
        }),
      ];
    default:
      return state;
  }
};

export { getRockets, reserveRocket, cancelRocket };
export default RocketReducer;
