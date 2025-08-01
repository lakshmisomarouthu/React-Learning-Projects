
import ReactDOM from 'react-dom/client'
import App from './App';
import { createElement } from 'react';

//1.create root
const root=ReactDOM.createRoot(document.getElementById('root'));

const root2=ReactDOM.createRoot(document.querySelector('#root'));

//2.rendering the App component using root
root.render(<App/> ,<h1>React App!</h1>);


root2.render(createElement('h1', null, 'React App without HTML!'));

