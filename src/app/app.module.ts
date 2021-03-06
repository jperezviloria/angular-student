import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from "@angular/forms"

//components
import { AppComponent } from './app.component';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { CardsComponentsComponent } from './components/cards-components/cards-components.component';


//Providers
import {StudentService} from "./services/student.service"

@NgModule({
  declarations: [
    AppComponent,
    FormStudentComponent,
    CardsComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
