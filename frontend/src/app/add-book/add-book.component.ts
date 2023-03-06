import { Component } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
addBook:any;

  constructor(private fb:FormBuilder,private router:Router,private bookservice:BookService){
    this.addBook= fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required]
    })
  }
  ngOnInit():void{

  }
  onSubmit(){
    this.bookservice.addBook(this.addBook.value).subscribe((res)=>{
      console.log('data added',res);
      this.router.navigate(['/list-book'])
    })
  }
}
