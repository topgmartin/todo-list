import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    NgForOf,
    IonicModule
  ]
})
export class ListComponent  implements OnInit {
  public lists: any = localStorage.getItem('list')
  public objectLists: any = JSON.parse(this.lists);
  constructor() { }

  ngOnInit() {}


  remove(idToRemove: any) {
    let newList: any = this.objectLists;
    newList.splice(idToRemove, 1);
    localStorage.setItem('list', JSON.stringify(newList));
    location.reload()
  }
}
