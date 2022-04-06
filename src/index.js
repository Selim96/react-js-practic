import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const constanta = React.createElement("div", null, React.createElement("h2", null, "Title 1"), React.createElement("p", null, "Some text after title"));

console.log(constanta);

ReactDOM.render(constanta, document.getElementById("root"));