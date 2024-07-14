import ReactDOM from 'react-dom/client'
import { createStore } from "redux"
import reducer from "./reducer"

const store = createStore(reducer)
import { good, ok, bad, zero } from "./actions.js"

const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          store.dispatch(good())
        }}
      >
        good
      </button>
      <button
        onClick={() => {
          store.dispatch(ok())
        }}
      >
        ok
      </button>
      <button
        onClick={() => {
          store.dispatch(bad())
        }}
      >
        bad
      </button>
      <button
        onClick={() => {
          store.dispatch(zero())
        }}
      >
        reset stats
      </button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)