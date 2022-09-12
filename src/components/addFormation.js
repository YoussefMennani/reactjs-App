import React,{Component} from "react";

class AddFormation extends Component{

    constructor(){
        super()
        this.state = {
            prenom:{
                value:"",
                isValid:false,
                msg:""
            },
            nom:{
                value:"",
                isValid:false,
                msg:""
            },
            adresse:{
                value:"",
                isValid:false,
                msg:""
            },
            email:{
                value:"",
                isValid:false,
                msg:""
            },
        }
    }

    handleInput(e){
        console.log(e)

        const {name,value} = e.target;
        
        this.setState({[name]:{value:value} });

        this.isInpValide(name,value)

    }

    isInpValide(inpName,value){

        console.warn("check if"+ inpName+"  valide")

        if(value.length > 0){
            this.setState({[inpName]:{
                ...this.state.inpName,
                isValid:true,
                msg:`${inpName} is Valide`
                
            }}) 
            
        }else{
            this.setState({[inpName]:{
                ...this.state.inpName,
                isValid:false,
                msg:`${inpName} is inValide`
                
            }}) 
        }

        this.isFormValide()
          
    }

    isFormValide(){
        console.warn("check if form valide")
        if(this.state.email.isValid === true 
            && this.state.prenom.isValid === true 
            && this.state.nom.isValid === true 
            && this.state.adresse.isValid === true){
                this.setState({formValide : true})
                alert("form valide")
            }else{
                this.setState({formValide : false})
            }
    }

    render(){
        return(
            <div style={{border:"1px solid #a3abb3",padding:"20px",borderRadius:"5px"}}>

                <div className="bg-dark text-light p-5 mt-2 mb-2 rounded">
                    <p>
                        Prénom : {this.state.prenom.value} - {this.state.prenom.msg} <br/>
                        Nom : {this.state.nom.value} - {this.state.nom.msg} <br/>
                        adresse : {this.state.adresse.value} - {this.state.adresse.msg} <br/>
                        Email : {this.state.email.value} - {this.state.email.msg} <br/>
                    </p>
                </div>


                <form>

                <div className="form-group">
                    <input  type="text" 
                            className="form-control" 
                            name="prenom" 
                            placeholder="Enter Prénom" 
                            value={this.state.prenom.value}
                            onChange={(e)=>{this.handleInput(e)}}
                            />

                    <small id="prenomInpHelp" className="form-text" style={{color: this.state.prenom.isValid? "green" : "red"}}>{this.state.prenom.msg}</small>
                </div>

                <div className="form-group mt-2">
                    <input  type="text" 
                            className="form-control" 
                            name="nom" 
                            placeholder="Enter Nom" 
                            value={this.state.nom.value}
                            onChange={(e)=>{this.handleInput(e)}}
                            />

                    <small id="nomInpHelp" className="form-text " style={{color: this.state.nom.isValid? "green" : "red"}}>{this.state.nom.msg}</small>
                </div>

                <div className="form-group mt-2">
                    <input  type="text" 
                            className="form-control" 
                            name="adresse"  
                            placeholder="Enter Adresse" 
                            value={this.state.adresse.value}
                            onChange={(e)=>{this.handleInput(e)}}
                            />

                    <small id="adresseInpHelp" className="form-text" style={{color: this.state.adresse.isValid? "green" : "red"}} >{this.state.adresse.msg}</small>
                </div>

                <div className="form-group mt-2">
                    <input  type="text" 
                            className="form-control" 
                            name="email"  
                            placeholder="Enter Email" 
                            value={this.state.email.value}
                            onChange={(e)=>{this.handleInput(e)}}
                            />

                    <small id="emailInpHelp" className="form-text " style={{color: this.state.adresse.isValid? "green" : "red"}}>{this.state.email.msg}</small>
                </div>
                
                </form>
                

                <button type="submit" className="btn btn-primary mt-2">Submit</button>

            </div>
        )
    }
}
export default AddFormation