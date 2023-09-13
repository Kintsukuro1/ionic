import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string = "";
  contrasena:string = "";

  constructor( private router:Router, private helper:HelperService, private toastCtrl: ToastController ) { }

  ngOnInit() {
  }

  onLogin() {

    // USUARIO NO INGRESA NINGUN DATO
    if (this.usuario == "") {
      this.helper.showAlert( "Debe ingresar un usuario", "Error", "Campo obligatorio" )
      return;
    }
    if (this.contrasena == "") {
      this.helper.showAlert( "Debe ingresar una contraseña", "Error", "Campo obligatorio" )
      return;
    }

    // USUARIO INGRESA
    if ( this.usuario == "admin" && this.contrasena == "admin123" ) {
      var idCuenta = this.usuario;
      this.router.navigateByUrl('menu-principal/' + idCuenta);
      this.presentToast();
    }

    // USUARIO INGRESA DATOS INCORRECTOS
    else{
      this.helper.showAlert( "Usuario y/o contraseña no existen", "Error", "Datos ingresados no validos" )
      return;
      //alert("Usuario o contraseña incorrecta.")
    }

  }

    // REGISTRARSE
    Registrarse(){
    this.router.navigateByUrl('register');
  }

  // RECUPERAR CONTRASEÑA
  recuperarPassword(){
    this.router.navigateByUrl('recuperar-password');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Sesión iniciada correctamente.',
      duration: 2000
    });
    toast.present();
  }

  












}



