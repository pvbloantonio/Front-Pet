import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListpetComponent } from './components/listpet/listpet.component';
import { AddupdatepetComponent } from './components/addupdatepet/addupdatepet.component';
import { SeepetComponent } from './components/seepet/seepet.component';

const routes: Routes = [
  { path: '', redirectTo: 'listpet', pathMatch: 'full' },
  { path: 'listpet', component: ListpetComponent },
  { path: 'addupdatepet', component: AddupdatepetComponent },
  { path: 'seepet/:id', component: SeepetComponent },
  { path: 'addupdatepet/:id', component: AddupdatepetComponent },
  { path: '**', component: ListpetComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
