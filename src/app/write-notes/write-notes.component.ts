import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-write-notes',
  templateUrl: './write-notes.component.html',
  styleUrls: ['./write-notes.component.scss']
})
export class WriteNotesComponent implements OnInit {

  @Input() selectedNoteItem;
  @Input() isDisabled;

  note: string;
  noteWritingDate = new Date();
  isDisable: boolean = false;
  notesArray = [];

  constructor() { }

  ngOnChanges() {
    if (this.selectedNoteItem != undefined) {
      this.note = this.selectedNoteItem.note;
      this.isDisabled = true;
    } else {
      this.isDisabled = false
    }
  }


  ngDoCheck() {
    this.noteWritingDate = new Date();
  }

  ngOnInit() {
  }

  submit() {
    if (this.note != undefined || this.note != '') {
      this.notesArray.push({ "id": Math.floor(Math.random() * 10000000000000), "note": this.note, "date": this.noteWritingDate });
      localStorage.setItem('notes', JSON.stringify(this.notesArray));
    }
    this.note = '';
  }

  getData() {
    let notes = localStorage.getItem('notes');
    console.log("WriteNotesComponent -> ngOnInit -> notes", notes);
  }

}
