import React, {Component} from 'react'
import axios from 'axios'
import "./ApiRequestInfo.css"
import { Link } from 'react-router-dom';


class ApiRequestInfo extends Component {
    state = {
        foods:[],
        title:""
    };
    

    getInfo = () => {
        axios.get(`http://localhost:4000/search?name=${this.state.title}`)
      .then(response => response.data)
      .then(data => {
        this.setState({
            foods:data
        });
    });
}

    handleChange= (event)=> {
        this.setState({ title: event.target.value });
          if (event.target.value.length >= 4) {
              this.getInfo()
          }
        };

    render () {
    return (
        <div>
            <form className="ApiRequestInfo-form">
                <input
                id="title"
                name="title"
                className="ApiRequestInfo-input"
                list="food"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
                minLength="4" required
                placeholder=  "Choisis un aliment..."
                />

               
                    {this.state.title.length > 3 ? 
                     <ul id="food" className="ApiRequestInfo-list" >
                    {this.state.foods
                        .map(food => (
                            <Link className="ApiRequestInfo-link" to={`/displayinfonut/${food.id}`}><li key={food.name} className="ApiRequestInfo-listItem" > {food.name}</li> </Link>
                    ))}
                    </ul>
                    : ""
                }
                
                
            </form>
       </div>
        )
    }
}

export default ApiRequestInfo