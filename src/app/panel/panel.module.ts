import { NgModule } from '@angular/core';
// MODULO NECESARIO
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// MODULOS HTTP
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
// MODULOS
import { SharedModule } from '../shared/shared.module';
// RUTAS
import { PANEL_ROUTES } from './panel.routes';
//SERVICIOS
import { AutService } from './servicios/aut.service';
// COMPONENTES
import { PanelComponent } from './panel.component';
import { LoginComponent } from './login/login.component';



@NgModule({
   declarations: [
        PanelComponent,
        LoginComponent,
 ],
    exports: [
     ],
     imports: [
        BrowserModule,
         SharedModule,
         CommonModule,
         PANEL_ROUTES,
         FormsModule,
         HttpModule,
         HttpClientModule
     ],
     providers:[
        AutService
     ]
})

export class PanelModule { }
