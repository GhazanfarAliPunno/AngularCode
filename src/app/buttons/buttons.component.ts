import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  fruits = [];
  fruit = 'orange';

  onADD(event: Event) {

    this.fruits.push(this.fruit);
    console.log(this.fruits)
  }

}
