import React, { Component } from 'react';
import './App.css'

class Header  extends Component{
    render(){
        return(
            <div className="header">
                <h1>Header</h1>
            </div>
        )
    }
}
class Footer  extends Component{
    render(){
        return(
            <div className="footer"> 
                <h1>Footer</h1>
            </div>
            
        )
    }
}

class App extends React.Component{
    render(){
        // let  todo =[{text:"huzmaan"},
        // {text:"pasta"},
        // {text:"pasta"},
        // {text:"pasta"},
        // {text:"pasta"},
        // {text:"pasta"},
        // {text:"pasta"},];
    // return(            
        // <div>
        //    <h1>Hello {name} </h1>
        //    </div>
        //   <div>
        //   <ul>
        //       {todo.map((item,index)=>{
        //           return <li key={index}>{item.text}</li>
        //       })}
        //   </ul>

        //    </div>
        // )
return(
<div className="Main">
            <Header/>
            <h1>Main Componnent</h1>

            <Footer/>
        </div>
           )
        }
    }


// function App(){
//     return(
//            <div>
//            <h1> Hello World</h1>
//            </div>
        
//     )
// }




export default App;