import React,{Component} from "react";
import {dataSchema} from "./validation/Validation"

class YupPage extends Component{

    async validate(e){
        e.preventDefault();
        const {prenom,nom} = e.target;
        let formData = {
            prenom:prenom.value,
            nom:nom.value
        }
        console.log(formData)

        const isValid = await dataSchema.isValid(formData);
        console.log(dataSchema);
    }
   

    render(){
        return(
           

                <form onSubmit={this.validate}>

                <div className="form-group">
                    <input  type="text" 
                            className="form-control" 
                            name="prenom" 
                            placeholder="Enter prenom" 
                                              
                            />

                </div>

                <div className="form-group mt-2">
                    <input  type="text" 
                            className="form-control" 
                            name="nom" 
                            placeholder="Enter nom" 
                            />

                </div>
               
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
                

                

        
        )
    }
}
export default YupPage