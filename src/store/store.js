import makeRootReducer from "../redux/reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(makeRootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
