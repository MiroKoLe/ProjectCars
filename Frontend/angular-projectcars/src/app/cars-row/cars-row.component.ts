import { CarsService } from './../cars.service';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'cars-row',
  templateUrl: './cars-row.component.html',
  styleUrls: ['./cars-row.component.css']
})
export class CarsRowComponent implements OnInit {
  @Input("car") car: Car; 
  private _isEditing: boolean;
  private _car: Car; 

  get isEditing(): boolean{
    return this._isEditing;
  }

  constructor(private carService: CarsService) { }

  enableEdit(): void {
    this._isEditing = true; 
  }

  ngOnInit(): void {
  }

  updateCar(car: Car): void{
  console.log(this.car)
  this.carService.update(car).subscribe(() => {
  this._car = car; 
  })
  }

  refresh(): void{
    window.location.reload();
  }

  deleteCar(id): void{
    this.carService.delete(id).subscribe(() => {
    this.refresh();
    })
  }

}
