import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private _isSuccess: boolean; 
  @Input() messageError: string;
   _formCars: FormGroup;


  get isSuccess(): boolean{
    return this._isSuccess;
  }

  constructor(private formBuilder: FormBuilder, private ref: ChangeDetectorRef, private carService: CarsService, private router: Router) { }

  ngOnInit(): void {
  }

    formCars = this.formBuilder.group ({
      brand: new FormControl(null, {validators: Validators.required}),
      model: new FormControl(null, {validators: Validators.required}),
    });

  reset(){
    this.formCars.reset();
  }

  addCar(): void {
    this.carService.add(this.formCars.value).subscribe(() => {
      this.carService.add(this.formCars.value);
      this._isSuccess = true;       
      setTimeout(()=> {
        this.router.navigate(['/index'])
      }, 1500)
    }) 
  }
}
