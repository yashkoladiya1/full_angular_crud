import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  addBook:any;
  id: any;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private bookservice:BookService,
    private url:ActivatedRoute
    ){
    this.addBook= fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required]
    })
  }
  ngOnInit():void{
    this.id=this.url.snapshot.params['id'];
    this.bookservice.singleBook(this.id).subscribe((data=>{
      this.addBook.patchValue(data.book)
     
    }));
  }
  onSubmit(){
    this.bookservice.updateBook(this.id,this.addBook.value).subscribe((res)=>{
      console.log('data added',res);
      this.router.navigate(['/list-book'])
    })
  }
}
