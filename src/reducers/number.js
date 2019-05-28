//index로 이동
//combineReducers 를 사용하여 하나의 리듀서로 합쳐줄 수 있습니다.
//import { combineReducers } from 'redux';

const initialState = {
  count : 20
}

const control = (state = initialState,action) => {
  console.log('number 리듀서 의 내용 ' + action.type);

  switch(action.type){
    case 'INCREAMENT':
      return {
        count : state.count + action.num
      };

    case 'DECREAMENT':
      return {
        count : state.count - action.num
      };

    default :
      return state;
  }
}

/*

//index로 이동
//리듀서로 합쳐준  변수가 reducers
const reducers = combineReducers({
  control
});

*/

export default control;
