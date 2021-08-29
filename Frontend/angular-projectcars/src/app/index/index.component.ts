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
  cars: Car[] = [];
  private _car: Car = null;


  constructor(private carService: CarsService) {}


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
