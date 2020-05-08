import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movies;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.getMovies();

  }

  getMovies(): void {
    this.apiService.getTrendingMovies().subscribe((data => {
      this.movies = data['results']
      console.log(data);
      this.movies = this.movies;//.slice(0, 3);
    }));

  }
}  