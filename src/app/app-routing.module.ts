import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: async () => {
      const modulo = await import('./home/home.module');
      return modulo.HomeModule;
    }
  },
  {
    path: 'skins',
    loadChildren: () =>
      import('./skins/skins.module').then((m) => m.SkinsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
