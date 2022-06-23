import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipies: Recipie[] = [
    new Recipie('Test Recipie 1', 'This is simply a test 1', 'https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg'),
    new Recipie('Test Recipie 2', 'This is simply a test 2', 'https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg'),
  ];

  @Output() recipieWasSelected = new EventEmitter<Recipie>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipieSelected(recipe: Recipie) {
    this.recipieWasSelected.emit(recipe);
  }

}
