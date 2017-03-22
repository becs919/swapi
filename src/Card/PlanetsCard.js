import React, { Component } from 'react';
import './PlanetsCard.css';

class PlanetsCard extends Component {
  constructor(props) {
    super();
    this.state = {
      residents: {},
    }
  }

  render() {
    return (
      <div className="planet-card">
        <p className="planet-name">{this.props.planetsInfo.name}</p>
        <p className="planet-terrain">{this.props.planetsInfo.terrain}</p>
        <p className="planet-population">population {this.props.planetsInfo.population}</p>
        <p className="planet-climate">{this.props.planetsInfo.climate}</p>
        <p className="planet-residents">{this.props.planetsInfo.residents.length}</p>
        <button className="fav"></button>
      </div>
    )
  }

}

PlanetsCard.propTypes = {
  residents: React.PropTypes.array,
};

export default PlanetsCard;