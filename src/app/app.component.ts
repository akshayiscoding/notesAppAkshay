import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes-app';
  selectedNoteItem; textForSearch;
  isDisabled;

  selectedNote(e) {
    this.selectedNoteItem = e;
    console.log("AppComponent -> selectedNote -> this.selectedNoteItem", this.selectedNoteItem);
  }

  searchedText(e) {
    this.textForSearch = e;
  }

  isDisable(e) {
    this.isDisabled = e;
    console.log("AppComponent -> isDisable -> this.isDisabled", this.isDisabled);
  }
}
