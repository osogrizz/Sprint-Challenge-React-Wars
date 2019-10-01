# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library (sometimes called a framework) that solves the problem of handling expensive DOM manipulations on page bob using a Virtual DOM to track individual UI elements and only update those that have changed rather than repainting the entire page through a process of reconcilliation. 

1. What does it mean to think in react?

Thinking in react means 
1) Breaking the UI up into a component hierarchy 
2) Build a static version of the app 
3) Identifying the minimal but complete representation of state. 
4) Identifying where state should live. 
And 5) Adding Inverse data flow. 

1. Describe state.

State is data that can be changed and is expected to change over time within applications.

1. Describe props.

Props are properties used to pass state down to other components that can render that data in some way.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside of the scope of the function being executed, fetching data from an API, timers, logging and manually manipulating the DOM for example.


