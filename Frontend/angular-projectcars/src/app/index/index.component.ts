import { Car } from './../car';
import { Component, Input, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
 @Input('isEditing') isEditing: boolean; 
  private _cars: Car[] = [];
  private _car: Car = null;
  pageCarBool: boolean; 

  get cars(): Car[]{
    return this._cars;
  }


  constructor(private carService: CarsService) {}

  getCars(): void {
    this.carService.get().subscribe((cars: Car[]) => {
      this._cars = cars;
    });
    if(this._cars.length === 1){
       this.pageCarBool = true; 
    }
    else if (this._cars.length > 1){
      this.pageCarBool = false;
    }  
     this.pageCarBool;  
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCar(id: any): void{
    this.carService.getById(id).subscribe((response: Car) => {
      this._car = response; 
    })
  }
}
