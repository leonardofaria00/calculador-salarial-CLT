import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NegocioComponent } from './negocio/negocio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NegocioModule } from './negocio/negocio.module';

@NgModule({
  declarations: [AppComponent, NegocioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NegocioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
