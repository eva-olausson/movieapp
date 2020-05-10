import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { SearchResponse, SearchResult } from '../api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  results;
  searchString;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {

      if (!queryParams.s) return;

      this.searchString = queryParams.s

      this.apiService.search(this.searchString).subscribe(response => {
        this.results = response.results.filter(item => item.media_type !== 'tv');
        console.log(this.results);
      });
    })
  }

}
