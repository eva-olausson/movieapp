import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import API_KEY from './api-key';


interface Top_Movies {
  title: string;
  poster_path: string;
}

interface Movie_Details {
id: number;
title: string;
}

export interface SearchResponse {
  results: SearchResult[];
}

export interface Movie {
  title: string;
  release_date: number;
}

export interface Person {
  name: string;
}

export interface SearchResult {
  id: string;
  title?: string;
  name?: string;
  media_type: string;
  profile_path?: string;
  poster_path?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient) { }

  public getMovies(): Observable<Top_Movies> {
    return this.httpClient.get<Top_Movies>(`${this.apiUrl}/movie/top_rated?api_key=${API_KEY}`);
  }

  public getMovie(id): Observable<Movie_Details> {
    return this.httpClient.get<Movie_Details>(`${this.apiUrl}/movie/${id}?api_key=${API_KEY}`);
  }

  public getCredits(id): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/movie/${id}/credits?api_key=${API_KEY}`);
  }

  public getTrendingMovies(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/trending/all/week?api_key=${API_KEY}`);
  }

  public search(searchQuery: string): Observable<SearchResponse> {
    const result = this.httpClient.get<SearchResponse>(`${this.apiUrl}/search/multi?api_key=${API_KEY}&query=${searchQuery}`);
    console.log(result);
    return result;
  }
}