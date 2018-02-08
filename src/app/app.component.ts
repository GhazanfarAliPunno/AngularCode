import { Component } from '@angular/core';
import { BucketModel } from './Bucket.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  fruit: string = '';
  quantity:number=1;
  // quantities=[];
  // fruits = [];



  Bucket:BucketModel[] =[];
 
  onAdd(event: Event) {
  
    this.Bucket.push(new BucketModel(this.fruit,this.quantity,"Fruit"));
    this.fruit='';
    this.quantity = 1;
    // console.log(this.fruits);
    // this.fruit = '';
   
    //  this.quantities.push(this.quantity);
    // console.log(this.fruit);
    // this.quantity='';
   
  }
}
