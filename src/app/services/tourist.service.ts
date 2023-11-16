import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tourist } from 'src/app/models/tourist';

@Injectable({
  providedIn: 'root',
})
export class TouristService {
  apiUrl = 'http://localhost:8080/api/v1/tourists';

  constructor(private http: HttpClient) {}

  getById(id: string) {
    return this.http.get<Tourist>(`${this.apiUrl}/${id}`);
  }

  update(tourist: Tourist) {
    return this.http.put(`${this.apiUrl}/${tourist.id}`, tourist);
  }
}
