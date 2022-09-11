import React,{Component} from "react";

class Page extends Component{

    state = {
        temp:25,
        data:[
            {name:"moh",age:47,date_naissanece:"12/05/2020"},
        
        ]
    }

  clickHandler = (e)=>{
     
    }

    inpChanged = (e) => {
        this.setState({
            data:[
             {
                ...this.state.data[0],
                name:e.target.value
            }
            ]
         })

    }



render(){
  
    
    
    return(
        <div>
           { this.state.data.map((info,index)=>
            <h5 key={index}>key : {index} name : {info.name} age : {info.age} date de naissanece : {info.date_naissanece} </h5>
            ) }

            {/* <span style={{color:"red",fontWeight:"bold"}} onChange={this.spanChanged()}>{this.state.temp}</span><br/> */}

            <input type="text" palceholder="type here ..." onChange={this.inpChanged} />
        </div>
    )
}

}

export default Page