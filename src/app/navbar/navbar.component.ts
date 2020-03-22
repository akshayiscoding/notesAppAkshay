import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  icon: string = 'expand-1';
  searchText: string;
  @Output() isDisable: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() searchedText: EventEmitter<boolean> = new EventEmitter<boolean>();


  data = [];
  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.icon = 'collapse';
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.icon = 'expand-1';
  }

  search(searchText){
    this.searchedText.emit(searchText);
  }

  new() {
    this.isDisable.emit(false);
  }

  delete() {
    this.data = JSON.parse(localStorage.getItem("notes"));
    localStorage.removeItem('notes');
  }

}
