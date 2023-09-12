import { Injectable } from '@angular/core';
import { Media } from './interfaces/media';
import { Review } from './interfaces/review';

@Injectable({
  providedIn: 'root'
})

export class ReviewgramAPIService {
  baseURL = 'http://127.0.0.1:5000'
  imagesURL = '';

  async getImagesUrlFromAPI(): Promise<string>  {
    const response = await fetch(`${this.baseURL}/media/image-url`, {method: 'GET'});

    let imageUrl = '';
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
      movies = data.movies;
      if(this.imagesURL==='') {
        this.imagesURL = await this.getImagesUrlFromAPI();
      }
      for (let movie of movies) {
        let newPosterUrl = `${this.imagesURL}w154${movie.poster_url}`;
        movie.poster_url = newPosterUrl;
      }
    } else {
      //Show error component
      this.logError('Getting Top Movies failed', response);
    }
    return movies;
  }

  async getTopTVShowsFromAPI(): Promise<Media[]>{
    const response = await fetch(`${this.baseURL}/media/top/tvshows`, {method: 'GET'});

    let tvshows = [];
    if(response.ok) {
      const data = await response.json() ?? {};
      tvshows = data.tvshows;
      if(this.imagesURL==='') {
        this.imagesURL = await this.getImagesUrlFromAPI();
      }
      for (let show of tvshows) {
        if(show.poster_url) {
          show.poster_url = `${this.imagesURL}w154${show.poster_url}`;
        }
      }
    } else {
      //Show error component
      this.logError('Getting Top TV Shows failed', response);
    }
    return tvshows;
  }

  async getMedia(tmdb_id: number, route:string): Promise<Media> {
    const response = await fetch(`${this.baseURL}/media/${route}/${tmdb_id}`, {method: 'GET'});
    let media;
    if(response.ok) {
      const data = await response.json() ?? {};
      media = route==='movies' ? data.movie : data.tvshow;
      if(this.imagesURL==='') {
        this.imagesURL = await this.getImagesUrlFromAPI();
      }
      media.poster_url = media.poster_url ? `${this.imagesURL}w185${media.poster_url}` : null;
    } else {
      this.logError(`There was a problem getting the details for ${route}`, response);
    }
    return media;
  }

  async getReviews(tmdb_id: number, route: string): Promise<Review[]> {
    const response = await fetch(`${this.baseURL}/media/${route}/${tmdb_id}/reviews`, {method: 'GET'});
    let reviews;
    if(response.ok) {
      const data = await response.json() ?? {};
      reviews = data.reviews;
    } else {
      this.logError(`There was a problem getting the reviews for ${route}`, response);
    }
    return reviews;
  }

  logError(message: string, response: Response) {
    console.error(`${message}. Response status: ${response.status} ${response.statusText}`);
  }
}
