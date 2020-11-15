import React from "react";
import ApiRequestInfo from "./ApiRequestInfo";
import InfoNutApi from "./InfoNutApi";
import "./NutriContent.css";
import fruitAndVeg from "../../../assets/icons/picto-fruitAndVeg.svg";
import starchy from "../../../assets/icons/picto-starchy.svg";
import drink from "../../../assets/icons/picto-drink.svg";
import junkFood from "../../../assets/icons/picto-junkFood.svg";
import meatAndFish from "../../../assets/icons/picto-meatAndFish.svg";
import dessert from "../../../assets/icons/picto-dessert.svg";
import axios from 'axios';


class NutriContent extends React.Component {
  state = {
    foodsFromCategory: []
  };

  getFoodFromCategory = async(category) => {
    const data = await axios.get(`http://localhost:4000/food/category/${category}`)
    const sortedData = this.sortData(data.data)
    this.setState({ loading : false, foodsFromCategory : sortedData})
  } 
   
  sortData = (foodCategory) => {
    const sortedFoodByCategory = foodCategory.sort((a , b) => {
      return a.name.localeCompare(b.name)})
    return sortedFoodByCategory
  };

  scrollTo = () => {
    setTimeout(() => {
      document.querySelector("#food-box").scrollIntoView({ behavior: "smooth" });
    }, 1100);
  };

  render() {
    return (
      <div className="nutriContent-mainBox">
        <div className="nutriContent-searchBox">
          <ApiRequestInfo
            name={this.getChosenFoodName}
            carbs={this.getChosenFoodCarbs}
          />
        </div>
        <div className="nutriContent-sixBoxes">
          <div className="fruitAndVeg"
            onClick={() => this.getFoodFromCategory("fruit")}>
            <div className="Box-Border"></div>
            <img className = "nutriContent-Icon" src={fruitAndVeg}/> 
            <h2 className="nutriContent-CatName">Fruits et Légumes</h2>
          </div>
          <div className="meatAndFish"
            onClick={() => this.getFoodFromCategory("viande")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Viandes et Poissons</h2>
            <img className = "nutriContent-Icon" src={meatAndFish}/>
          </div>
          <div className="drink"
            onClick={() => this.getFoodFromCategory("boisson")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Boissons</h2>
            <img className = "nutriContent-Icon" src={drink}/>
          </div>
          <div className="starchy"
            onClick={() => this.getFoodFromCategory("terre")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Féculents</h2>
            <img className = "nutriContent-Icon" src={starchy}/>
          </div>
          <div className="junkFood"
            onClick={() => this.getFoodFromCategory("junkfood")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Junk Food</h2>
            <img className = "nutriContent-Icon" src={junkFood}/>
          </div>
          <div className="dessert"
          onClick={() => this.getFoodFromCategory("dessert")}>
            <div className="Box-Border"></div>
            <h2 className="nutriContent-CatName">Desserts</h2>
            <img className = "nutriContent-Icon" src={dessert}/>
          </div>
        </div>

        <InfoNutApi id="food-box"
          chosenCategory={this.state.foodsFromCategory}
        />
      </div>
    );
  }
}

export default NutriContent;
