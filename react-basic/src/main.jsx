import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const anotherElement=(<a href='https://google.com'>Click to search something new</a>)
const reactElement=React.createElement('a',{href: 'https://google.com' ,target: '_blank'},
  'Click to search something new'
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    { reactElement }
  </StrictMode>,
)
