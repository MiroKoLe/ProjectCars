import { Car } from './../car';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  private _id: string; 
  cars: Car[] = [];
  private _car: Car = null;
  private _isDeleted: boolean = false;
  private _isEditing: boolean;


  constructor(private carService: CarsService) {}

  get isEditing(): boolean{
    return this._isEditing;
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.get().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }

  getCar(id): void{
    this.carService.getById(id).subscribe((response: Car) => {
      this._car = response; 
    })
  }
}
