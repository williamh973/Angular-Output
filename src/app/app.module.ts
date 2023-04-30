import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOnomatopoeiaComponent } from './create-onomatopoeia/create-onomatopoeia.component';
import { FormComponent } from './create-onomatopoeia/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOnomatopoeiaComponent,
    FormComponent
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
