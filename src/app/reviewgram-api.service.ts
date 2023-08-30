import { Injectable } from '@angular/core';
import { Media } from './interfaces/media';

@Injectable({
  providedIn: 'root'
})

export class ReviewgramAPIService {
  baseURL = 'http://127.0.0.1:5000'

  constructor() { }

  async getImagesUrlFromAPI(): Promise<String>  {
    const response = await fetch(`${this.baseURL}/media/image-url`, {method: 'GET'});

    let imageUrl = ''
    if (response.ok) {
      const data = await response.json() ?? {};
      imageUrl = data.configuration.base_url;
    } else {
      //Show error component
      this.logError('Getting ImagesURL failed', response);
    }
    
    return imageUrl;
  }

  async getTopMoviesFromAPI(): Promise<Media[]>{
    const response = await fetch(`${this.baseURL}/media/top/movies`, {method: 'GET'});

    let movies = [];
    if(response.ok) {
      const data = await response.json() ?? {};
      const imageUrl = await this.getImagesUrlFromAPI();
      movies = data.movies;
      for (let movie of movies) {
        if(movie.poster_url) {
          movie.poster_url = `${imageUrl}w154${movie.poster_url}`;
        }
      }
    } else {
      //Show error component
      this.logError('Getting ImagesURL failed', response);
    }
    return movies;
  }

  logError(message: string, response: Response) {
    console.error(`${message}. Response status: ${response.status} ${response.statusText}`);
  }
}
