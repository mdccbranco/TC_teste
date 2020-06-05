import React, { Component } from "react";
import apiAxios from "../../services/APIHandler";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Main from "../Main/Main";

import "../../assets/styles/Shared.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: new apiAxios("http://localhost:8000"),
      search: "",
      showForm: false,
      banner: true,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.getOneCar = this.getOneCar.bind(this);
    this.openForm = this.openForm.bind(this);
    this.getBrands = this.getBrands.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleSearch(event) {
    let { value } = event.target;
    let banner;
    value === "" ? (banner = true) : (banner = false);
    this.setState({
      search: value,
      oneCar: null,
      banner,
    });
  }

  resetState() {
    this.getAllCars();
    this.setState({
      search: "",
      oneCar: null,
      banner: true,
    });
  }

  openForm() {
    const showForm = !this.state.showForm;
    let banner;
    showForm ? (banner = false) : (banner = true);
    this.setState({
      showForm,
      banner,
    });
  }

  getOneCar(obj) {
    this.setState({
      oneCar: { ...obj },
      banner: false,
    });
  }

  getAllCars() {
    this.state.api
      .getAllCars()
      .then((response) => this.setState({ allCars: response.data }))
      .catch((err) => console.log(err));
  }

  getBrands = () => {
    this.state.api
      .getAllBrands()
      .then((brands) => {
        const brandNames = brands.data.map((item) => item.name);
        this.setState({ brands: brandNames });
      })
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    this.getAllCars();
    this.getBrands();
  }

  render() {
    let searchResult;
    const {allCars, search, showForm, oneCar, banner, brands, api } = this.state;
    if (allCars) {
      searchResult = allCars.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (search === "") searchResult = [];
    return (
      <div className="d-flex">
        <Menu />

        <div className="main-content">
          <Header
            handleSearch={this.handleSearch}
            search={search}
            buttonLabel={showForm ? "Voltar" : "Cadastrar"}
            openForm={this.openForm}
          />
          <Main
            showForm={showForm}
            searchResult={searchResult}
            oneCar={oneCar}
            banner={banner}
            openForm={this.openForm}
            brands={brands}
            api={api}
            getOneCar={this.getOneCar}
            getAllCars={this.getAllCars}
            resetState={this.resetState}
          />
        </div>
      </div>
    );
  }
}
