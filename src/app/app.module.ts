import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WriteNotesComponent } from './write-notes/write-notes.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WriteNotesComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
