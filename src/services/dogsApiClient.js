import axios from "axios";

class DogsApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://dog.ceo/api',
    });
  }

  getAllDogBreeds() {
    return this.apiClient.get("/breeds/list/all");
  }

  getImagesFromBreed(breed) {
    return this.apiClient.get(`/breed/${breed}/images`);
  }
}

const dogsApiClient = new DogsApiClient();
export default dogsApiClient;