import React from "react";
import Counter from "../Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { text } from "cheerio/lib/static";
import { after, before } from "cheerio/lib/api/manipulation";

let getByTestId;

beforeEach(() => {
	//execute each test 
	const view = render(<Counter />);
	getByTestId = view.getByTestId;
})

/*
afterEach(() => {
	// clean up all DOM after each test but create-react-app testing already cleanup by default so don't need to specified this
	cleanup();
})
*/

test("header renders with correct text", () => {
	const headerEl = getByTestId("header");
	expect(headerEl.textContent).toBe("My Counter");
})

test("Counter initally start with text of 0", () => {
	
	const counterEl = getByTestId("counter");

	expect(counterEl.textContent).toBe("0");

})

test("input contains inital value is 1", () => {
	
	const inputEl = getByTestId("input");

	expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
	
	const addBtn = getByTestId("add-btn");

	expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
	
	const subtractBtn = getByTestId("subtract-btn");

	expect(subtractBtn.textContent).toBe("-");
});

test("change value of input works correctly", () => {
	
	const inputEl = getByTestId("input");

	expect(inputEl.value).toBe("1");

	fireEvent.change(inputEl, {
		target: {
			value: "5"
		}
	})
	expect(inputEl.value).toBe("5");
})

test("Clicking on plus btn adds 1 to counter", () => {
	
	const addBtn = getByTestId("add-btn");
	const counterEL = getByTestId("counter");

	expect(counterEL.textContent).toBe("0");

	fireEvent.click(addBtn);

	expect(counterEL.textContent).toBe("1");

});

test("Clicking on subtract btn subtract 1 to counter", () => {
	
	const subtractBtn = getByTestId("subtract-btn");
	const counterEL = getByTestId("counter");

	expect(counterEL.textContent).toBe("0");

	fireEvent.click(subtractBtn);

	expect(counterEL.textContent).toBe("-1");

});

test("changing input value then clicking on add btn works correctly", () => {
	
	const addBtn = getByTestId("add-btn");
	const counterEL = getByTestId("counter");
	const inputEl = getByTestId("input");

	fireEvent.change(inputEl, {
		target: {
			value: "5"
		}
	})

	fireEvent.click(addBtn);

	expect(counterEL.textContent).toBe("5");

});

test("changing input value then clicking on subtract btn works correctly", () => {
	
	const subtractBtn = getByTestId("subtract-btn");
	const counterEL = getByTestId("counter");
	const inputEl = getByTestId("input");

	fireEvent.change(inputEl, {
		target: {
			value: "5"
		}
	})

	fireEvent.click(subtractBtn);

	expect(counterEL.textContent).toBe("-5");

});

test("adding and then subtracting leads to the correct counter number", () => {
	
	const addBtn = getByTestId("add-btn");
	const subtractBtn = getByTestId("subtract-btn");
	const counterEL = getByTestId("counter");
	const inputEl = getByTestId("input");

	fireEvent.change(inputEl, {
		target: {
			value: "10"
		}
	})

	fireEvent.click(addBtn);
	fireEvent.click(addBtn);
	fireEvent.click(addBtn);
	fireEvent.click(addBtn);
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);

	expect(counterEL.textContent).toBe("20");

	fireEvent.change(inputEl, {
		target: {
			value: "5"
		}
	})

	fireEvent.click(addBtn);
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);

	expect(counterEL.textContent).toBe("15");

})

test("counter contains correct className", () => {
	
	const counterEL = getByTestId("counter");
	const inputEl = getByTestId("input");
	const addBtn = getByTestId("add-btn");
	const subtractBtn = getByTestId("subtract-btn");

	expect(counterEL.className).toBe("");

	fireEvent.change(inputEl, {
		target: {
			value: "50"
		}
	})

	fireEvent.click(addBtn);

	expect(counterEL.className).toBe("");

	fireEvent.click(addBtn);

	expect(counterEL.className).toBe("green");

	fireEvent.click(addBtn);

	expect(counterEL.className).toBe("green");

	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);

	expect(counterEL.className).toBe("");

	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);
	fireEvent.click(subtractBtn);

	expect(counterEL.className).toBe("red");
});