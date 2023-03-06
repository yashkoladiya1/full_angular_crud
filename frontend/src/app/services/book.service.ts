import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  addBook(book:any){
    return this.http.post('http://localhost:2000/api/createbook',book)
  }

  allBook(){
    return this.http.get('http://localhost:2000/api/getallbooks');
  }

  deleteBook(_id:any):Observable<any>{
    return this.http.delete(`http://localhost:2000/api/deletebook/${_id}`)
  }

  singleBook(_id:any):Observable<any>{
    return this.http.get(`http://localhost:2000/api/getonebook/${_id}`)
  }

  updateBook(id:any,book:any){
    return this.http.put('http://localhost:2000/api/updatebook/'+id,book)
  }
}
