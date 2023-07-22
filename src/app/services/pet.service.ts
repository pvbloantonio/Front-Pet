import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Pet } from '../interfaces/pet';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/pet/'

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  getDelete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.myAppUrl}${this.myApiUrl}`, pet);
  }

  updatePet(id: number, pet: Pet): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, pet)
  }
}
