import React from 'react';
import { connect } from 'react-redux';
import A3 from './A3';

const A2 = ({num, open, text}) => {
  return (
    <div>
      <h2>A2</h2>
      <div>{num}</div>
      <div>스토어로 부터 가지고 온 데이터는 : {open}</div>
      <div>스토어로 부터 가지고 온 두번째 데이터는 : {text}</div>

      <A3 num={num} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    open : state.number.count,
    text : state.title.title
  }
}

export default connect(mapStateToProps,null)(A2);
