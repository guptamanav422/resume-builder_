import { combineReducers } from "redux";
import templateReducer from "./reducers/templateReducer";
import userReducer from "./reducers/userReducer";
import detailsReducer from "./reducers/detailsReducer";
import { saveReducer } from "./reducers/saveReducer";
import userImageReducer from "./reducers/userImageReducer";
import eduReducer from "./reducers/eduReducer"
import resumeReducer from "./reducers/resumeReducer"
let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
  details: detailsReducer,
  saveState: saveReducer,
  userImage: userImageReducer, 
  education:eduReducer,
  resume:resumeReducer,
});

export default rootReducer;
