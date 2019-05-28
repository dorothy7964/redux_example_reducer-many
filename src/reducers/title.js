//index로 이동
//combineReducers 를 사용하여 하나의 리듀서로 합쳐줄 수 있습니다.
//import { combineReducers } from 'redux';

const initialState = {
  title : '두번째 스토어 데이터'
}

const second = (state = initialState,action) => {
  console.log('title 리듀서 의 내용 ' + action.type);
  return state;
}

/*

//index로 이동
//리듀서로 합쳐준  변수가 reducers
const reducers = combineReducers({
  second
});

*/

export default second;
