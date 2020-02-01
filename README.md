# write readme use nv toast

# use-nv-simple-toast

> A really really simple toast hook for React 😜

## Demo

Check out a simple usage of **use-nv-simple-toast** : [use-nv-simple-toast](https://nvigneux.github.io/use-nv-simple-toast/)

## Installation

```
npm install --save use-nv-simple-toast

yarn add use-nv-simple-toast
```

[npm package](https://www.npmjs.com/package/use-nv-simple-toast)

## Setup

### Context

Import Provider Context `ToastContainer` in to your `App.jsx`

```javascript
import { ToastContainer } from "use-nv-simple-toast"

function App() {
  return (
    <ToastContainer>
      {...}
    </ToastContainer>
  )
}
```

---

### Service

Import the `useToast` hook in to your components

```javascript
import React from "react"
import { useToast } from "use-nv-simple-toast"

const MyComponent = () => {
  const { setToast } = useToast()

  return (
    <button onClick={() => setToast({ title: "My simple toast" }, 4000)}>
      Launch Toast
    </button>
  )

}
```

## Development

### Toast

```javascript
const Toast = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
})
```

### Hook

```javascript
getToasts(): Toast[]

setToast(toast: Toast, time: number = 5000): void // default 5000

removeToast(toastId: string): void

clearToasts(): void
```
