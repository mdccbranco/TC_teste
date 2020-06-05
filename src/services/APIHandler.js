import axios from "axios";


class api {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.client = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getAllBrands() {
    return this.client.get("brands");
  }

  getAllCars() {
    return this.client.get("cars");
  }

  getOneCar(id) {
    return this.client.get(`cars/${id}`);
  }

  searchCar(search) {
    return this.client.get(`cars?title=${search}`);
  }

  createOneCar(obj) {
    return this.client.post('cars', obj);
  }

  updateOneCar(id, obj) {
    return this.client.put(`cars/${id}`, obj);
  }

  deleteOneCar(id) {
    return this.client.delete(`cars/${id}`);
  }
}

export default api;