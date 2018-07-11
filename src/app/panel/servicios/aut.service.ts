import { Injectable } from '@angular/core';
//URL 
import { URL_SERVICIOS } from '../../shared/config/config';
//OBSERVABLE
import { Observable, Subscription } from 'rxjs/Rx';
//MODULO HTTP
import { HttpClient } from '@angular/common/http';
//SweetAlert
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
//JQUERY
import * as $ from 'jquery';
//OPERADOR MAP
import 'rxjs/add/operator/map';

@Injectable()
export class AutService {

  public usuarios: any;
  //SWEET ALERT
  public swal: SweetAlert = _swal as any;

  constructor(public http: HttpClient) { 
    // GET ALL USERS
    this.getAllUsers().subscribe( resp =>{
      // console.log(resp);
      this.usuarios = resp;
    });
  }

  //////////////////////////////////////////// CRUD MUSQL //////////////////////////////////////////////

  //RECIBE TODOS LOS USUARIOS DE MYSQL

  getAllUsers(){
    let url = URL_SERVICIOS + '/users';
    return this.http.get(url).map( (resp:any) =>{        
        return resp;
    });
  }

  //INSERTAR USUARIOS MYSQL
  insertUser( user ){
    let url = URL_SERVICIOS + '/user';

    return this.http.post(url, user).map( (resp:any) =>{
        return resp.body;
    });
  }

  //ACTUALIZAR USER 
  updateUser( id, user ){
    let url = URL_SERVICIOS + '/users/' + id;
    return this.http.put(url, user).map( (resp:any) =>{
        return resp.body;
    });
  }

  //ELIMINAR USER 
  deleteUser( id, user ){
    let url = URL_SERVICIOS + '/users/' + id;
    return this.http.delete(url, user).map( (resp:any) =>{
        return resp.body;
    });
  }

  //////////////////////////////////////////// END CRUD MYSQL ////////////////////////////////////////////
  
  verificarUsuario(user){
    // console.log(user);
    let cont = 0;
    for (let index = 0; index < this.usuarios.length; index++) {
      if (cont == 0){
        if (this.usuarios[index].email == user.email && this.usuarios[index].password == user.password){
          swal({
            title: "¡Perfecto!",
            text: "Bienvenido: " + this.usuarios[index].name,
            icon: "success",
          });
          cont++;
        }else{
          swal({
            title: "Error!",
            text: "No se encontro el usuario con estos datos",
            icon: "warning",
          });        }
      }
    }
  }

}
