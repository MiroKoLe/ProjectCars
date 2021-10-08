import { LoginService } from './../login.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false; 

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    const credentials = {
      "username": form.value.username,
      "password": form.value.password
    }

    this.loginService.post(credentials).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token)
      this.invalidLogin; 
      this.router.navigate(["/"]);
    }) 
  }
}
