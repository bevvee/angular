import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = "TaskFlow";
  canDelete = false;
  rename(){ 
    this.title = 'Mes taches'; 
    this.canDelete = true;
  }
  delete(){
    this.title = ' ';
  }
}
