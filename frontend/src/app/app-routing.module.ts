import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';

const routes: Routes = [
  {path:'',component:ListBookComponent},
  {path:'add-book',component:AddBookComponent},
  {path:'list-book',component:ListBookComponent},
  {path:'edit-book/:id',component:EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
