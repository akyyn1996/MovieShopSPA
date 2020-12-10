import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  genreId: number;
  movies: Movie[];
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) =>{
      this.genreId = + p.get('id'); 
    
      this.movieService.getMoviesByGenre(this.genreId).subscribe((m) => {
        this.movies = m;
      });
    
    })


  }

}
