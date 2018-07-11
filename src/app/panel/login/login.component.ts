import { Component, OnInit } from '@angular/core';
import { AutService } from '../servicios/aut.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any = {
    email: "",
    password: ""
  }

  constructor( public autS : AutService ) { }

  ngOnInit() {
  }

  loginUser(user:NgForm){
    this.autS.verificarUsuario(user);
  }

}
