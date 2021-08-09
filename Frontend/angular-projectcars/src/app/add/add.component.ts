import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarsService } from '../cars.service';
import {MatProgressBarModule} from '@angular/material/progress-bar'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   message = '';
  _form: FormGroup;
  data = {
    brand: '', 
    model: '',
    date: ''
  } 

  constructor(private ref: ChangeDetectorRef, private carService: CarsService, private router: Router) { }

  ngOnInit(): void {
  this.message = '';
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

  addCar(): void {
    const data = {
      brand: this.data.brand, 
      model: this.data.model,
      data: new Date()
    }
    this.carService.add(data).subscribe(() => {
      this.carService.add(data);
      setTimeout(()=> {
        this.router.navigate(['/index'])
      }, 1000)
    }) 
   
  }

}
