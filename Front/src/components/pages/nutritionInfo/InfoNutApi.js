import React from "react";
import { Link } from 'react-router-dom';
import './InfoNutApi.css'

class InfoNutApi extends React.Component {
  state = {
    foodsFromCategory: []
  }

      componentDidUpdate(props) {
        if (this.state.foodsFromCategory !== this.props.chosenCategory) {
          this.setState({foodsFromCategory: props.chosenCategory})
        }
      }

  render() {
    return (
        <div id="food-box">
        {this.state.loading ? 'Loading...' : 
        this.state.foodsFromCategory
        .map(food => (
          <Link className="food-card-link" to={`/displayinfonut/${food.id}`}>
            <p className="food-card"> {food.name}</p>{" "}
        </Link>))
        }
  
      </div>
    );
  }
}


export default InfoNutApi;