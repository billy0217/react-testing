import React, { useState } from "react";

const Counter = () => {
	const [counterValue, setCountValue] = useState(0);
	const [inputValue, setInputValue] = useState(1);
	return (
		<div>
			<h1 data-testid="header">My Counter</h1>
			<h2 data-testid="counter">{counterValue}</h2>
			<button data-testid="subtract-btn">-</button>
			<input data-testid="input" type="number" value={inputValue}/>
			<button data-testid="add-btn">+</button>
		</div>
	);
}

export default Counter;