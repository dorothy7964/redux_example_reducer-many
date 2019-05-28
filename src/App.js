import React, {Component} from 'react';
import A1 from './A1';
import B1 from './B1';

class App extends Component {
	state = { number : 10 }

	handleClick = () => {
		this.setState({ number : this.state.number + 1  })
	}

  render(){
		const {number} = this.state;

	  return(
			<div className="App">
				<h1>리덕스 (Redux)</h1>
				<div>{number}</div>
				<button onClick={this.handleClick}>숫자증가</button>

				<A1 num={number} />
				<B1 btn={this.handleClick} />
			</div>
	  )
  }
}

export default App;
