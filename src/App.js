import React, {Component} from 'react';  
import './App.css';  
import Alert from './Components/Alert';
import Media from './Components/Media';    
// import element Alert yang telah dibuat  
  
class App extends Component {  
  constructor(){  
    super();  
    this.state = {  
      type: "danger",  
      header: "Fatal Error",  
      content: "ini content dari alert"  
    }  
  }
      // fungsi untuk mengubah tipe  
  changeTypeAlert = (event) =>{  
    this.setState({type: event.target.value});  
  }  
  // fungsi untuk mengubah header  
  changeHeaderAlert = (event) => {  
    this.setState({header: event.target.value});  
  }  
  // fungsi untuk mengubah content  
  changeContentAlert = (event) => {  
    this.setState({content: event.target.value});  
  }  
  render(){ 
    return(
      <div>
        <div className="App container">  
          <div className="alert alert-info">  
            <h3 className="text-danger">Ini Project Pertama React JS</h3>  
            <p>Belajar React JS itu mudah</p>  
            <button className="mr-1 btn btn-success">Setuju</button>  
            <button className="btn btn-info">Iya Dong</button>  
          </div>  
        </div>
        <div className='container'>
              <Media image="save.png" title="React Js" type="info">
                  Framework untuk FrontEnd Development
              </Media>
              <Media image="owi-removed.png" title="Node Js" type="success">
                  Framework untuk BackEnd Development
              </Media>
        </div>
      </div>
    );
  }  
}  
export default App;