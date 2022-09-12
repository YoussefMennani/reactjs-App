import React,{Component} from "react";
import Card from "./Card";
import axios from "axios"



class Formation extends Component{

    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos", { params: { per_page: 1 } }).then(
            (response) => {
                this.setState({
                    data : response.data
                }
                
                )              
               
            }
        )
    }

    
    

    render(){

        
        
        const listData = this.state.data.map((info,index)=>{
            return <Card 
                            key={index} 
                            fullName={info.title} 
                            email="youssefmennnni1966@gmail.com" 
                            adresse="lot alami 41 res maamoura" 
                            imgId={index}
                            />
                        }
                        )
        
        return(
            
                     <div>
                        <a className='btn btn-warning' href="/addFormation">Add Poste</a>
                        <div className='row'>
                        { listData }
                        </div>
                     </div>
             

            /*<div className="row">
            <Card fullName="youssef Mennani" email="youssefmennnni1966@gmail.com" adresse="lot alami 41 res maamoura" />
            <Card fullName="youssef Mennani" email="youssefmennnni1966@gmail.com" adresse="lot alami 41 res maamoura" />
            <Card fullName="youssef Mennani" email="youssefmennnni1966@gmail.com" adresse="lot alami 41 res maamoura" />
            <Card fullName="youssef Mennani" email="youssefmennnni1966@gmail.com" adresse="lot alami 41 res maamoura" />
             </div>n*/
        )
    }
}
export default Formation