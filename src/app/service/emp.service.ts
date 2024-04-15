import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private _http:HttpClient)  {}
  // getTaskDetails(){
  // return this._http.get('https://jsonplaceholder.typicode.com/todos')
  // }
  // postTaskDetails(){
  //   return this._http.get('https://jsonplaceholder.typicode.com/todos')
  // }
  postTaskDetails(formData: any) {
    return this._http.post('https://jsonplaceholder.typicode.com/todos', formData);
  }

  getTaskDetails() {
    return this._http.get('https://jsonplaceholder.typicode.com/todos');
  }
  
  
  updateTaskDetails(todoId: number, formData: any): Observable<any> {
    return this._http.put(`https://jsonplaceholder.typicode.com/todos/${todoId}`, formData);
  }
  deleteTaskById(todoId: number): Observable<any> {
    return this._http.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  }
  patchTaskDetails(todoId: number, formData: any): Observable<any> {
    return this._http.patch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, formData);
  }

}