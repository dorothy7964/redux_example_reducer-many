# redux react-redux
## Redux
1. store : 데이터 관리
2. action : 이벤트
3. dispatch : 연결
4. reducer : 업데이트

### `redux`
리덕스만을 위한것

### `react-redux`

리액트에서 리덕스를 사용할 수있게 한다.

## Installation

```sh
# npm
npm install --save redux react-redux

# yarn
yarn add redux react-redux
```

## actions 생성

```javascript
export function increament(num){
  return {
    type : 'INCREAMENT',
    num
  };
}

export function decreament(num){
  return {
    type : 'DECREAMENT',
    num
  };
}

```


## reducers (number) 생성

액션 타입에 따라 숫자 증가, 감소 하기

**reducers/index.js 파일로 이동**
`import { combineReducers } from 'redux';`
`
const reducers = combineReducers({
  control
});
`


```javascript
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
```

## reducers (title) 생성

title(String) 데이터

**reducers/index.js 파일로 이동**
`import { combineReducers } from 'redux';`
`
const reducers = combineReducers({
  second
});
`

```javascript
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
```

## reducers (index) 생성

```javascript
import { combineReducers } from 'redux';

import number from './number';
import title from './title';

const reducers = combineReducers({
  number, title
});

export default reducers;
```

## Redux 연결

```javascript
import { createStore } from 'redux';
```

createStore(데이터 보관 장소)를 리덕스에서 가져온다.


```javascript
import { Provider } from 'react-redux';
```

리액트 앱에 리덕스를 적용 할 때에는, react-redux 에 들어있는 **Provider(공급자)** 를 사용


```javascript
import reducers from './reducers/number';
const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
```

리덕스파일을 스토어에 보관 한 것을 상수 store에 넣기.

## connect (데이터 연결)

리듀서와 컴포넌트 연결해주기

`import { connect } from 'react-redux';`

```javascript
<div>스토어로 부터 가지고 온 데이터는 {this.props.open}</div>
<div>스토어로 부터 가지고 온 두번째 데이터는 {this.props.text}</div>
```

```javascript
const mapStateToProps = (state) => {
  return {
    open : state.number.count,
    text : state.title.title
  }
}			
```					

```javascript			
export default connect(mapStateToProps,null)(A2);
```
* 첫번째 파라미터 - **mapStateToProps**
  * 데이터 가져오는 부분
+ 두번째 파라미터 - **null**
  + 액션 가져오는 부분

## connect (데이터, 액션 연결)

`import { connect } from 'react-redux';`
`import { increament, decreament } from './actions/counting';`

```javascript
<div>스토어로 부터 가지고 온 데이터는 : {this.props.close}</div>
<div>스토어로 부터 가지고 온 두번째 데이터는 : {this.props.text}</div>

<button onClick={()=>{this.props.onIncreament(20)}}>스토어에 이벤트(액션) 전달하기</button>
<button onClick={()=>{this.props.onDecreament(10)}}>스토어에 이벤트(액션) 전달하기</button>
````

```javascript
// store에서 가져온 것
const mapStateToProps = (state) => {		
  return {
    close : state.number.count,
    text : state.title.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreament : (num) => { dispatch(increament(num)) },
    onDecreament : (num) => { dispatch(decreament(num)) }
  }
}
```

```javascript
export default connect(mapStateToProps,mapDispatchToProps)(B2);
```

* 첫번째 파라미터 - **mapStateToProps**
  * 데이터 가져오는 부분
+ 두번째 파라미터 - **mapDispatchToProps**
  + 액션 가져오는 부분
