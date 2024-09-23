import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {

  constructor() { }

  @Output() searchFilter = new EventEmitter<any>();

  searchFormControl = new FormControl('');

  ngOnInit() {
    this.searchFormControl.valueChanges.subscribe(value => {
      console.log(value);
      this.searchFilter.emit(value);
    });
  }

}
