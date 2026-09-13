# Dev Stack Builder

A responsive React-based web application that allows users to explore different development technologies and build their own personalized technology stack.

## Live Site

**Live Link:** `Add your deployed website link here`

## GitHub Repository

**Repository Link:** `[Add your GitHub repository link here](https://github.com/ridwanoorrahmanrafi/Dev-Stack-Builder)`

---

## Project Overview

Dev Stack Builder is a frontend web application developed using React and Vite.

The main purpose of the project is to allow developers to explore popular technologies from different categories and add them to a personal development stack.

Users can:

* Explore different technologies
* View technology information
* Add technologies to their stack
* Prevent duplicate technologies from being added
* Remove individual technologies
* Remove all selected technologies
* See the number of selected technologies
* Receive notifications when adding or removing technologies
* Use the application on desktop, tablet, and mobile devices

---

## Technologies Used

* React
* Vite
* JavaScript
* HTML5
* CSS3
* React Toastify
* Lucide React
* JSON

---

## Features

### 1. Responsive Navigation

The application includes a responsive navigation bar with:

* Home
* Technologies
* Projects
* About
* Contact
* Sign In
* Sign Up

On smaller screens, the navigation changes into a mobile menu.

### 2. Hero Section

The hero section introduces the application and contains:

* Main heading
* Short description
* Explore Technologies button
* Learn More button
* Development stack illustration

### 3. Technology Cards

Technology information is loaded dynamically from a JSON file.

Each card displays:

* Technology logo
* Technology name
* Category
* Description
* Difficulty level
* Rating
* Badge
* Add to Stack button

### 4. Add to Stack

Users can add technologies to their personal stack.

When a technology is added:

* It appears in the "Your Stack" section.
* A success notification is displayed.
* The Add button becomes disabled.
* The button changes to "Added to Stack".

### 5. Duplicate Prevention

A technology cannot be added more than once.

The application checks whether the technology already exists in the selected stack before adding it.

### 6. Remove Technology

Users can remove individual technologies from their stack.

After removing a technology, a notification is displayed.

### 7. Remove All

The "Remove All" button removes every selected technology from the stack.

The button is disabled when the stack is empty.

### 8. Loading State

A loading spinner is displayed while the technology data is being loaded from the JSON file.

### 9. Toast Notifications

React Toastify is used to provide feedback for actions such as:

* Technology added
* Technology removed
* Technology already exists
* All technologies removed
* Data loading errors

### 10. Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

CSS media queries are used to adapt the layout for different screen sizes.

---

## Project Structure

```text
DevStack/
│
├── public/
│   └── data/
│       └── technologies.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechCard.jsx
│   │   ├── Stack.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
└── README.md
```

---

# React Questions & Answers

## 1. What is the difference between controlled and uncontrolled components?

A **controlled component** is a form element whose value is controlled by React state.

Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Here, React controls the input value.

An **uncontrolled component** stores its value inside the DOM instead of React state.

Example:

```jsx
const inputRef = useRef();

<input ref={inputRef} />
```

The value can be accessed using the reference.

### Main Difference

* Controlled → React state controls the value.
* Uncontrolled → The DOM controls the value.

Controlled components are generally preferred when the application needs to track or validate form data.

---

## 2. How do you validate React forms?

React forms can be validated using state and event handlers.

For example:

```jsx
const [email, setEmail] = useState("");
const [error, setError] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();

  if (!email.includes("@")) {
    setError("Please enter a valid email address");
    return;
  }

  setError("");
};
```

Validation can check:

* Required fields
* Email format
* Password length
* Minimum or maximum values
* Matching passwords

For larger applications, libraries such as React Hook Form or Formik can also be used.

---

## 3. What are custom hooks in React?

A **custom hook** is a JavaScript function that allows developers to reuse React logic between different components.

Custom hooks normally start with the word `use`.

Example:

```jsx
function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return {
    count,
    increase
  };
}
```

It can then be used inside a component:

```jsx
function App() {
  const { count, increase } = useCounter();

  return (
    <button onClick={increase}>
      {count}
    </button>
  );
}
```

Custom hooks help keep components clean and make reusable logic easier to maintain.

---

## 4. What is the difference between `useState` and `useReducer`?

Both `useState` and `useReducer` are React hooks used for managing state.

### `useState`

`useState` is useful for simple state.

Example:

```jsx
const [count, setCount] = useState(0);
```

It is easy to use and works well for simple values.

### `useReducer`

`useReducer` is useful when state logic becomes more complex.

Example:

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};
```

Then:

```jsx
const [count, dispatch] = useReducer(reducer, 0);
```

### Main Difference

* `useState` → simple state management.
* `useReducer` → complex state logic with multiple actions.

---

## 5. What is prop drilling and how can you avoid it?

**Prop drilling** happens when data needs to be passed through several components even though some middle components do not actually need that data.

For example:

```text
App
 ↓
Parent
 ↓
Child
 ↓
GrandChild
```

If `App` needs to send data to `GrandChild`, the data may have to be passed through `Parent` and `Child`.

This can make applications harder to maintain.

### Ways to avoid prop drilling

#### 1. Context API

React Context allows components to access shared data without passing props through every level.

```jsx
const UserContext = createContext();
```

#### 2. State Management Libraries

Libraries such as Redux, Zustand, or other state-management solutions can be used for larger applications.

#### 3. Component Composition

Components can also be structured so that data does not have to travel through unnecessary levels.

---

## 6. How does React handle events?

React uses event handlers to respond to user interactions.

For example:

```jsx
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

React supports events such as:

* `onClick`
* `onChange`
* `onSubmit`
* `onMouseEnter`
* `onKeyDown`

React uses a consistent event system across browsers.

Event handlers can also receive the event object:

```jsx
const handleChange = (event) => {
  console.log(event.target.value);
};
```

---

## 7. What is the purpose of keys in React lists?

Keys help React identify individual elements when rendering lists.

Example:

```jsx
const technologies = [
  { id: 1, name: "React" },
  { id: 2, name: "Vue" }
];

technologies.map((technology) => (
  <TechCard
    key={technology.id}
    tech={technology}
  />
));
```

The `key` gives each element a unique identity.

React uses keys to efficiently determine:

* Which item was added
* Which item was removed
* Which item changed
* Which elements need to be re-rendered

A unique ID is preferred as a key.

Avoid using the array index as a key when the list can change order or have items inserted/removed.

---

# Installation & Setup

## Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## Step 2: Enter the project directory

```bash
cd DevStack
```

## Step 3: Install dependencies

```bash
npm install
```

## Step 4: Start the development server

```bash
npm run dev
```

The application will then be available at the local Vite development URL shown in the terminal.

---

# Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

# Data Source

Technology information is stored in:

```text
public/data/technologies.json
```

The application fetches the JSON data using:

```jsx
const response = await fetch("/data/technologies.json");
const data = await response.json();
```

This keeps the technology data separate from the React components and makes it easier to update or add technologies.

---

# Git Commit History

The project was developed using multiple meaningful Git commits.

Example commit structure:

```text
Initial project setup
Create responsive navbar
Create hero section
Add technology data
Create technology cards
Implement stack functionality
Add remove and remove-all functionality
Add toast notifications
Improve responsive styling
```

---

# Assignment Requirements Covered

* [x] React application
* [x] Vite setup
* [x] Responsive design
* [x] Technology cards
* [x] JSON data
* [x] Add to Stack
* [x] Duplicate prevention
* [x] Remove technology
* [x] Remove All
* [x] Toast notifications
* [x] Loading state
* [x] Responsive navigation
* [x] Footer
* [x] React questions answered
* [x] Meaningful Git commits

---

# Author

**Ridwanoor Rahman Rafi**

Undergraduate Student
Department of Computer Science & Engineering

---

## License

This project was created for educational and academic purposes.
