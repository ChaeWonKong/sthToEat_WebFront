import * as constants from "../actions/constants";
import actions from "../actions";
import { IDishAction } from "../shared-interfaces";
import { combineReducers } from "redux";

const INITIAL_STATE = { likeList: [], dislikeList: [] };

const dishReducer = (state = INITIAL_STATE, action: IDishAction) => {
  switch (action.type) {
    case constants.LIKE_DISH:
      return { ...state, likeList: [...state.likeList, action.payload] };
    case constants.DISLIKE_DISH:
      return { ...state, dislikeList: [...state.dislikeList, action.payload] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dishReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
