import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipie } from '../../recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input() recipieItem: Recipie;
  @Output() recipieSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipieSelected.emit();
  }

}
