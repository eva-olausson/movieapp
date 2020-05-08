import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie;

  constructor(private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getMovie(id).subscribe((data) => {
      console.log('data', data);
      this.movie = data;
      this.apiService.getCredits(id).subscribe(data => {
        console.log('credits', data);
        this.movie.cast = data.cast.slice(0, 10);
        this.movie.crew = data.crew.slice(0, 10);
      });
    });
  }

}

