import React, { Component } from "react";

import "./CreateCar.css";

class CreateCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: this.props.api,
      title: "",
      model: "",
      brand: "",
      year: "",
      color: "",
      km: "",
      price: "",
    };
    this.handleForm = this.handleForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleForm(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  resetForm() {
    this.props.resetState();
    this.setState({
      title: "",
      model: "",
      brand: "",
      year: "",
      color: "",
      km: "",
      price: "",
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.oneCar) {
      const { title, brand, year, color, km, model, price, id } = this.state;
      this.state.api
        .updateOneCar(id, { title, brand, year, color, km, price, model })
        .then((_) => this.resetForm())
        .catch((err) => console.log(err));
    } else {
      const { title, brand, year, color, km, model, price } = this.state;
      this.state.api
        .createOneCar({ title, brand, year, color, model, km, price })
        .then((_) => this.resetForm())
        .catch((err) => console.log(err));
    }
  }

  deleteCar() {
    if (this.props.oneCar) {
      this.state.api
        .deleteOneCar(this.props.oneCar.id)
        .then((_) => this.resetForm())
        .catch((err) => console.log(err));
    }
  }

  componentDidMount() {
    if (this.props.oneCar) {
      const {
        title,
        brand,
        year,
        color,
        km,
        price,
        model,
        id,
      } = this.props.oneCar;
      this.setState({ title, brand, year, color, km, price, model, id });
    }
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            required
            className="input-car"
            onChange={this.handleForm}
            name="title"
            value={this.state.title}
            placeholder="Title"
          />
          <div required className="form-group">
            <input
              required
              className="input-car"
              name="model"
              onChange={this.handleForm}
              value={this.state.model}
              placeholder="Model"
            />
            <input
              required
              className="input-car"
              name="year"
              onChange={this.handleForm}
              value={this.state.year}
              placeholder="Year"
            />
          </div>
          <select
            required
            className="input-car"
            onChange={this.handleForm}
            name="brand"
            value={this.state.brand}
          >
            {this.props.brands &&
              this.props.brands.map((item, idx) => (
                <option value={item} key={idx}>
                  {item}
                </option>
              ))}
          </select>
          <div required className="form-group">
            <input
              required
              className="input-car"
              name="color"
              onChange={this.handleForm}
              value={this.state.color}
              placeholder="Color"
            />
            <input
              required
              className="input-car"
              name="price"
              onChange={this.handleForm}
              value={this.state.price}
              placeholder="Price"
            />
          </div>
          <input
            required
            className="input-car"
            onChange={this.handleForm}
            name="km"
            value={this.state.km}
            placeholder="Km"
          />

          <button required className="option-button">
            Salvar
          </button>
        </form>

        {this.props.oneCar && (
          <button
            type="button"
            className="button-secundary"
            onClick={() => this.deleteCar()}
          >
            Remover
          </button>
        )}
        <button
          type="button"
          className="button-secundary"
          onClick={this.resetForm}
        >
          Cancelar
        </button>
      </>
    );
  }
}

export default CreateCar;
