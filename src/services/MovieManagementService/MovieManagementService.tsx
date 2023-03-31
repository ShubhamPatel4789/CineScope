/**
 * @author Ketul Patel - <ketul.patel@dal.ca>
 */

import Movie from "@/common/Movie";
import { MovieManagementState } from "./MovieManagementEnum";

export default class MovieMagementService {
  
  API_URL = import.meta.env.VITE_API_URL;
  async addMovie(movie: Movie) {
    debugger
    const response = await fetch(this.API_URL + "/movie/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie)
    });
    if (response.status === 200) {
      return MovieManagementState.MovieAddSuccess;
    } else {
      return MovieManagementState.MovieAddFailure;
    }
  }

  async fetchLatestMovies() {
    const response = await fetch(this.API_URL + "/movie/latest/", {
      method: "GET",
    });

    if (response.status === 200) {
      const body = await response.json();
      return body;
    } else {
      return null;
    }
  }

  async fetchAllMovies() {
    const response = await fetch(this.API_URL + "/movie/all/", {
      method: "GET",
    });
    if (response.status === 200) {
      const body = await response.json();
      return body;
    } else {
      return null;
    }
  }

  async deleteMovieByID(movieId: any) {
    const response = await fetch(this.API_URL + `/movie/${movieId}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      return MovieManagementState.MovieDeleteSuccess;

    } else {
      return MovieManagementState.MovieDeleteFailure;
    }
  }

  async updateMovieByID(movieId: any, movie: Movie) {
    const response = await fetch(this.API_URL + `/movie/${movieId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    if (response.status === 200) {
      return MovieManagementState.MovieUpdateSuccess;
    } else {
      return MovieManagementState.MovieUpdateFailure;
    }
  }

  async fetchMovieByID(movieId: any) {
    const response = await fetch(this.API_URL + `/movie/${movieId}`, {
      method: "GET",
    });
    if (response.status === 200) {
      const body = await response.json();
      return body;
    } else {
      return null;
    }
  }

  async searchMovie(keyword: any){
    var myHeaders = new Headers();
    var raw = JSON.stringify({
      keyword: keyword,
    });
    myHeaders.append("Content-Type", "application/json");
          let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
          };
    const response = await fetch(this.API_URL + "/movie/search", requestOptions);
    if (response.status === 200) {
      const body = await response.json();
      return body;
    } else {
      return null;
    }
  }

  async filterMovie(year: any, rating: any, genre: any){
    var myHeaders = new Headers();
    var raw = JSON.stringify({
      year: year,
      ratings: rating,
      genre: genre,
    });
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };
    const response = await fetch(this.API_URL + "/movie/search", requestOptions);
    if (response.status === 200) {
      const body = await response.json();
      return body;
    } else {
      return null;
    }
  }

  async fetchMostRatedMovies() {
    const response = await fetch('http://127.0.0.1:3000/movie/rated/', {
      method: "GET",
    });
    if (response.status === 200) {
      const body = await response.json();
      return body;
    } else {
      return null;
    }
  }
}
