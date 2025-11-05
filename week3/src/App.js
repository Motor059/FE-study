import './App.css';
import My_Info from './my_page/My_Info';
import My_Family from './my_page/My_Family';
import My_Campus from './my_page/My_Campus';
import Dae_sang_hyeok from './my_page/Dae_sang_hyeok';
const page_list = [My_Info, My_Family, My_Campus, Dae_sang_hyeok];
const page = page_list.map((Key, index) => {return <Key k = {index}/>;});

 function App() {
 return (
 <div className="App">
    {page}
 </div>
 );
 }
 export default App;