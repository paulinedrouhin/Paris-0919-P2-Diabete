import React, {Component} from 'react'
import axios from 'axios'
import "./ApiRequest.css"


class ApiRequest extends Component {
    state = {
        foods:[],
        title:"",
        chosenFood: {}
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


    chooseFood= async (name) => {
        const item = await this.state.foods.find(element => 
           element.name === name) 
        this.setState({chosenFood : item})
        this.setState({title: ""})
        this.props.name (this.state.chosenFood.name)
        this.props.carbs (this.state.chosenFood.carbohydrate)  
    };
        




    render () {
    return (
        <div>
            <form className="ApiRequest-form">
                <input
                id="title"
                name="title"
                className="ApiRequest-input"
                list="food"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
                minLength="4" 
                placeholder=  "Choisis un aliment..."
                // required
                />

               
                    {this.state.title.length > 3 ? 
                     <ul id="food" className="ApiRequest-list" >
                    {this.state.foods
                        .map(food => (
                        <li key={food.name} className="ApiRequest-listItem" onClick={() => this.chooseFood(food.name)}> {food.name}
                        </li> 
                    ))}
                    </ul>
                    : ""
                }
                
                
            </form>
       </div>
        )
    }
}

export default ApiRequest