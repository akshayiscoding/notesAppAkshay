import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  data = [];
  filteredData = [];
  isSelected: boolean = false;
  @Input() textForSearch;
  @Output() selectedNote: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  async ngOnChanges() {
    // await this.search(this.textForSearch);
  }

  async getData() {
    this.data = JSON.parse(localStorage.getItem('notes')).slice().reverse();
    this.data.forEach(element => {
      element.date = new Date(element.date);
    });
    this.filteredData = this.data;
  }


  ngOnInit() {
    this.getData();
  }

  ngDoCheck() {
    this.getData();
    console.log("SideBarComponent -> ngOnInit -> this.data", this.data);

    this.data.filter(element => {
      if (element.note == this.textForSearch) {
        this.filteredData = [];
        this.filteredData.push(element);
      } else {
        this.filteredData = this.data;
      }
    });
  }

  // async search(textForSearch) {
  //   const filter = textForSearch;
  //   this.filteredData = this.data.filter((element) => {

  //     let strings: string[] = filter.toLowerCase().split(" ");
  //     let matched = true;
  //     strings.forEach(filterValue => {
  //       const search = <T, K extends keyof T>(term: string, objects: T[]): T[] => {
  //         return objects.filter((x: any) => {
  //           const clone = { ...x, ...x.note };
  //           return Object.keys(clone).some(key => {
  //             // if (typeof x[key] === 'object') {
  //             //   search(term, Object.values(x[key]));
  //             // }
  //             if (clone.hasOwnProperty(key) &&
  //               typeof clone[key] === 'string' &&
  //               clone[key].toLowerCase().includes(term)
  //             ) {
  //               return true;
  //             }
  //           });
  //         });
  //       };
  //       const resultQuote = search(filterValue, [element]);
  //       if (resultQuote.length <= 0) {
  //         matched = false;
  //       }
  //     });
  //     return matched;
  //   });
  // }

  // async search(textForSearch) {
  //   // const filter = textForSearch;
  //   this.filteredData = this.data.filter(element => {
  //     if(element.note == textForSearch){
  //       this.filteredData.push(element);
  //     }
  //   });
  // }

  selectFirstItem() {
    this.data.forEach(element => {
      if (element[0]) {
        this.isSelected = true;
      }
    });
  }

  select(data) {
    console.log(data);
    this.isSelected = true;
    this.selectedNote.emit(data);
  }

}
