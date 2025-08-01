import {createRoot} from 'react-dom/client'
import CSS from './index.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import App from './App';



const root=createRoot(document.getElementById('root'));
root.render(
    <div>

      {/* <TempComponent/> */}
      {/* <Page/> */}
      <App/>
      
    </div>
   
);




function Page(){

  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
             
    </>
  );
}



