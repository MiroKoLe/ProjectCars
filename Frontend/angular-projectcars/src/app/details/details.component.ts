import { Car } from './../car';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private _car: Car;
  private _id: string;
  _form: FormGroup;

  get car(): any{
    return this._car; 
  }

  constructor(private carService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params.id;
    })
    this.getCarById(this._id);
  }


  createForm(): void {
    let form: any = {
      Id: new FormControl(null),
      Brand: new FormControl(null, {validators: Validators.required}),
      Model: new FormControl(null, {validators: Validators.required}),
      Date: new FormControl(null)
    };
    this._form = new FormGroup(form);
  }

  getCarById(id: string): void{
    this.carService.getById(this._id).subscribe(() => {
    });
  }

}

