import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Menu } from 'src/app/models/menu';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  parametroIdCuenta: string | undefined;

  constructor(private activatedRoute:ActivatedRoute, 
              private router:Router, 
              private helper:HelperService) {}

  ngOnInit() {
    setTimeout(() => { this.loaded = true; }, 2000);
    this.parametroIdCuenta = this.activatedRoute.snapshot.params['idCuenta'];
  }

  //Variable para el skeleton
  public loaded = false;

  async logout(){
    
    var confirm = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if(confirm == true ) {
      this.router.navigateByUrl("login");
    }
  }

}
