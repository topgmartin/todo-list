import {Component} from '@angular/core';
import {save} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public categories: any = localStorage.getItem('category');
  public objectCategories: any = JSON.parse(this.categories)


  public propCategory: any = 'default';
  public propDisabled: boolean = true;


  public lists: any = localStorage.getItem('list');
  public objectLists: any = JSON.parse(this.lists);

  constructor() {
    if (this.categories === null) {
      this.categories = 'default';
    } else {
      this.categories = JSON.parse(this.categories)
    }
  }

  save(formValues: any) {
    if (this.lists === null) {
      let formValuesToString: any = JSON.stringify([formValues]);
      localStorage.setItem('list', formValuesToString);
    } else {
      let existingList = JSON.parse(this.lists);
      existingList.splice(0, 0, formValues);
      existingList = JSON.stringify(existingList);
      localStorage.setItem('list', existingList);
    }
    location.reload();
  }

  check(textareaValue: any) {
    if (textareaValue === "") {
      this.propDisabled = true;
    } else {
      this.propDisabled = false;
    }
  }
}
