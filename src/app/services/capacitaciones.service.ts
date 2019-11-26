import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {
  
  endPoint ='https://serve-ecom.herokuapp.com/api/capacitaciones'
  constructor(private http:HttpClient) { }

  public getlist(data): Observable<any>{
    return this.http.get(`${this.endPoint}`,{ headers:{
      'Authorization': "Bearer " + data,
      }
    })
  }
  public getById(id): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/${id}`);
  }
  public add(data): Observable<any> {
    return this.http.post<any>(`${this.endPoint}`, data);
  }
  public update(id, data): Observable<any> {
      return this.http.put<any>(`${this.endPoint}/${id}`, data);
  }
  public delete(id): Observable<any> {
      
      return this.http.delete<any>(`${this.endPoint}/${id}`);
  }
}