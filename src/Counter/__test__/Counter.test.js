import React from "react";
import Counter from "../Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { text } from "cheerio/lib/static";

test("header renders with correct text", () => {
	const { getByTestId } = render(<Counter />);
	const headerEl = getByTestId("header");

	expect(headerEl.textContent).toBe("My Counter");
})

test("Counter initally start with text of 0", () => {
	const { getByTestId } = render(<Counter />);
	const counterEl = getByTestId("counter");

	expect(counterEl.textContent).toBe("0");

})

test("input contains inital value is 1", () => {
	const { getByTestId } = render(<Counter />);
	const inputEl = getByTestId("input");

	expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
	const { getByTestId } = render(<Counter />);
	const addBtn = getByTestId("add-btn");

	expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
	const { getByTestId } = render(<Counter />);
	const subtractBtn = getByTestId("subtract-btn");

	expect(subtractBtn.textContent).toBe("-");
});