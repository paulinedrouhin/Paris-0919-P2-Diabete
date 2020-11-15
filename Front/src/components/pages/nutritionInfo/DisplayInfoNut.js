
import React from "react";
import ContentFrame from "../../layout/ContentFrame";
import Footer from "../../layout/Footer";
import HeaderMobile from "../../layout/HeaderMobile";
import icon from "../../../assets/icons/picto-section-infosnut.png";
import logo from "../../../assets/pictures/logoOMG.svg";
import Navbar from "../../layout/Navbar";
import NutriTable from "./NutriTable";
import axios from "axios";
import "./InfoNutApi.css";
import "./NutriTable.css";

class DisplayInfoNut extends React.Component {
  state = {
    food: "",
    isLoaded: false
  };

  getInfoNut = () => {
    const foodId = this.props.match.params.id;
    axios
      .get(
        `http://localhost:4000/food/${foodId}`
      )
      .then(response => response.data)
      .then(data => {
          this.setState({ food: data, isLoaded: true });
      });
  };

  componentDidMount() {
    this.getInfoNut();
  }

  render() {
    return (
      <div className="info-background">
        {this.state.isLoaded ? (
          <>
            <Navbar src={logo} color="icones-nutritionInfo" />
            <HeaderMobile src={logo} />
            <ContentFrame
              src={icon}
              content={
                <NutriTable
                  name={this.state.food.name}
                  energie={
                    13
                  }
                  glucides={this.state.food.carbohydrate}
                  sucres={this.state.food.sugar}
                  proteines={15}
                  lipides={this.state.food.lipid}
                  sel={0.4}
                  fibres={this.state.food.fibre}
                  vitamineE={this.state.food.vitaminE}
                  vitamineD={this.state.food.vitaminD}
                  vitamineC={this.state.food.vitaminC}
                  vitamineB2={this.state.food.vitaminB2}
                  vitamineB1={this.state.food.vitaminB1}
                  calcium={this.state.food.calcium}
                  magnesium={this.state.food.magnesium}
                  fer={this.state.food.iron}
                />
              }
            />
            <Footer color="footer-info" />
          </>
        ) : (
          <>
            <Navbar src={logo} color="icones-nutritionInfo" />
            <HeaderMobile src={logo} />
            <div className="Loading">
              <p className="Loading-text">Loading...</p>
            </div>
            <Footer color="footer-info" />
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfoNut;
