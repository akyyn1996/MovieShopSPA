import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/genre';
import { Movie } from 'src/app/shared/models/movie';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiService: ApiService) {}
  getTopRevenueMovies(): Observable<Movie[]> {
    return this.apiService.getAll('movies/toprevenue');
  }
  getMovieDetails(id: number): Observable<Movie> {
    return this.apiService.getOne('movies',id);
  }
  getMoviesByGenre(genreId:number): Observable<Movie[]>{
    return this.apiService.getAll('Movies/genre', genreId);
  }

}