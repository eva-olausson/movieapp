import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SearchResponse, SearchResult } from '../api.service';



@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  public searchQuery: string;
  results: SearchResult[];
  movie;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.apiService.search(this.searchQuery).subscribe(response => {
      this.results = response.results.filter(item => item.media_type !== 'tv');
      console.log(this.results);
    });
  }
}