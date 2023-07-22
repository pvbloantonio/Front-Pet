import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes
import { AddupdatepetComponent } from './components/addupdatepet/addupdatepet.component';
import { ListpetComponent } from './components/listpet/listpet.component';
import { SeepetComponent } from './components/seepet/seepet.component';

// Angular Material
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AddupdatepetComponent,
    ListpetComponent,
    SeepetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
