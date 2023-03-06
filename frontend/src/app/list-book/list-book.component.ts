import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent {
 books:any;
 editBook:any;
  constructor(private bookService:BookService,private router:Router,){
  }

  ngOnInit():void{
    this.loadbooks()
  }

  loadbooks(){
    this.bookService.allBook().subscribe((data:any)=>{
      this.books= data.books
    })
  }

  deleteBook(_id:any){
    this.bookService.deleteBook(_id).subscribe((res=>{
      console.log(res,'data deleted');
      this.loadbooks();
    }));
  }

  singleBook(_id:any){
    this.bookService.singleBook(_id).subscribe((res=>{
      console.log(res.book)
    }))
  }

}
