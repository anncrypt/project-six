import React, { Component } from 'react';
import SidebarOverview from './SidebarOverview';
import { Link } from "react-router-dom";

//Component begins
class SidebarMain extends Component {
  constructor() {
    super();
    this.state = {
      indexOfTabShown: 0,
    }
  }

  handleShowDirections = () => {
    this.setState({
      indexOfTabShown: 0,
    })
  }

  handleShowWeatherSummary = () => {
    this.setState({
      indexOfTabShown: 1,
    })
  }

  render() {
    const {
      directions,
      routeIndex, // for directions
      weatherData,
      handleSavingTripToDB,
      user,
    } = this.props;

    return (
      <div className="SidebarMain">
        {/* Container for buttons */}
        <div className="tab-container">
          <button
            className="main-button sidebar-tab-button"
            onClick={this.handleShowDirections}
          >Directions
          </button>
          <button
            className="main-button sidebar-tab-button"
            onClick={this.handleShowWeatherSummary}
          >Weather Summary
          </button>
        </div>
        {/* Container for the content */}
        <div>

          {/* case 0 */}
          <div
            className={`tab-content ${this.state.indexOfTabShown === 0 ? 'tab-content-shown' : ''}`}
            id="right-panel"
            directions={this.props.directions}
            routeIndex={1}>
          </div>
          {/* <SidebarDirections  
          directions={this.props.directions} 
          routeIndex={this.props.routeIndex}
          /> */}

          {/* case 1 */}
          <div className={`tab-content ${this.state.indexOfTabShown === 1 ? 'tab-content-shown' : ''}`}>
            <SidebarOverview
              weatherData={this.props.weatherData}
            />
          </div>
          <button
            disabled={user === null}
            onClick={this.props.handleSavingTripToDB}
          >
            { user !== null ? 'Save trip' : 'Log in to save trip' }
          </button>
          <button
            onClick={this.props.handleReset}
          >
            Reset
          </button>
          <Link className="button home-button" to="/dashboard">
            <p>Dashboard</p>
          </Link>

        </div>

      </div>
    )
  }
}

export default SidebarMain;