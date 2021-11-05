import { Car } from './../car';
import { Component, Input, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

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
  private _isEditing: boolean;

  get cars(): Car[]{
    return this._cars;
  }

  constructor(private router: Router, private carService: CarsService, private jwtHelper: JwtHelperService) {}

  getCars(): void {
    this.carService.get().subscribe((response) => {
      this._cars = response;
    }, err => {
      console.log(err);
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

  enableEdit(): void {
    this._isEditing = true; 
  }
  
  getCar(id: any): void{
    this.carService.getById(id).subscribe((response: Car) => {
      this._car = response; 
    })
  }

  updateCar(car: Car): void{
    this.carService.update(car).subscribe(() => {
    this._car = car; 
    })
    this._isEditing = false; 
    }
  
    refresh(): void{
      window.location.reload();
    }
  
    cancel(): void {
      this._isEditing = false; 
    }
  
    deleteCar(id): void{
      this.carService.delete(id).subscribe(() => {
      this.refresh();
      })
    }

    isUserAuthenicated() {
      const token: string = localStorage.getItem("jwt");
      if(token && !this.jwtHelper.isTokenExpired(token)){
        return true; 
      }
      else {
        return false; 
      }
    }
  
    logout() {
      localStorage.removeItem("jwt")
      this.router.navigate(["/login"]);
    }
}
