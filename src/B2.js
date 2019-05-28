import React from 'react';
import { connect } from 'react-redux';
import { increament, decreament } from './actions/counting';
import B3 from './B3';

const B2 = ({btn, close, text, onIncreament, onDecreament}) => {
  return (
    <div>
      <h2>B2</h2>
      <div>스토어로 부터 가지고 온 데이터는 : {close}</div>
      <div>스토어로 부터 가지고 온 두번째 데이터는 : {text}</div>
      <button onClick={()=>{onIncreament(20)}}>스토어에 이벤트(액션) + 전달하기</button>
      <button onClick={()=>{onDecreament(10)}}>스토어에 이벤트(액션) - 전달하기</button>

      <B3 btn={btn} />
    </div>
  )
}

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

export default connect(mapStateToProps,mapDispatchToProps)(B2);
