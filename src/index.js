import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Redux 연결 */
// createStore(데이터 보관 장소)를 리덕스에서 가져오기
import { createStore } from 'redux';

// 리액트 앱에 리덕스를 적용 할 때에는, react-redux 에 들어있는 Provider(공급자) 를 사용
import { Provider } from 'react-redux';

// 리덕스파일을 스토어에 보관 한 것을 상수 store에 넣기.
import reducers from './reducers';
const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);
