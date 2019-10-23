import React from 'react'

import Counter from './Counter'

const App = ({ name }) => {
  if (name) {
    React.useCallback(() => alert(`Hello, ${name}!`), [name])
  }

  return (
    <div>
      <h1>{name}</h1>
      <Counter />
    </div>
  )
}

export default App
