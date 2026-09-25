# DevStack

DevStack is a technology stack builder website where users can explore different technologies and add them to their own stack.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* Vite
* React Toastify

## Features

* Explore different technologies
* Add technologies to Your Stack
* Remove technologies from the stack

## Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It is used in React to create the user interface easily.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage state in a React component. I used it in `App.tsx` to store the selected technologies in the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component. I used it to handle the loading process while the JSON data was being prepared.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list and update the UI correctly when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. I used it in the Your Stack section to show the empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send something back to the parent by calling a function that the parent passes through props.
