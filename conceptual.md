### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a library for building re-usable html components. You can use it any time you are developing a web app in order to simplify your code instead of writing
a really long html file.

- What is Babel?

Babel is a library that allows the browser to interpret jsx

- What is JSX?

JSX is an extension of javascript that allows for us to easily write html inside of a javascript file.

- How is a Component created in React?

You can use functional or class based components to render an html element. Usually components are defined in their on seperate files and imported into the main app.

- What are some difference between state and props?

props get passed in everytime a component is rendered. There is no "memory" with props they just are whatever is based in. State is a value that persists between renders until it is changed.

- What does "downward data flow" refer to in React?

It refers to the way that information can only be passed from parent to child and not the other way around

- What is a controlled component?

A component where the value is controlled by the state

- What is an uncontrolled component?

a regular component where the value is not controlled by the state

- What is the purpose of the `key` prop when rendering a list of components?

To provide a unique identifier for each child element.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

because it doesnt necessarily uniquely identify each child and will cause strange behavior in your application

- Describe useEffect. What use cases is it used for in React components?

useEffect is a way of setting a function that will only run at certain times in your application such as initial render or on state or component updates.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

useRef is an easy way of being able to access certain elements in your component that you may want to change or update based on some action or response. changing the ref value will not cause a rerender

- When would you use a ref? When wouldn't you use one?

a good use example would be to gray out a button after it has been clicked. You wouldnt want to use one if the behavior of the element can be managed with state instead.

- What is a custom hook in React? When would you want to write one?

a custom hook is a way of returning a piece of state with a custom change handler. You may want to use one if you have a certain pattern in your code that is repeated multiple times or simply to clean up the logic in your component.
