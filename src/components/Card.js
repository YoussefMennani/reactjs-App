import React,{Component} from "react";


class Card extends Component{

    render(){ 

        return(
            
            <div className="col-md-3 col-sm-6 ">
            <div className="card my-2">
                <div className="card-header">
                    <img className="card-img-top" src="https://picsum.photos/50" alt="Card image cap" style={{maxWidth:"100%"}} />
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item text-truncate"> <span className="badge bg-primary">Full Name : </span> { this.props.fullName }</li>
                        <li className="list-group-item text-truncate"> <span className="badge bg-danger">Email :</span> { this.props.email }</li>
                        <li className="list-group-item text-truncate"><span className="badge bg-warning">Adresse : </span> { this.props.adresse }</li>
                    </ul>
                    <p className="card-text my-3">Hello My name is <b>{ this.props.fullName }</b> if you want to contact me Right click above Thans.</p>
                        <hr/>
                    <a href="#" className="btn btn-primary " style={{ float:"left"}}>View More</a>
                    <a href="#" className="btn btn-success " style={{ float:"right"}}>Drop me Msg</a>
                </div>
            </div>
        </div>

        )
    }


}

export default Card