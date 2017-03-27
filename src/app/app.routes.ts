import { MainShowcaseComponent } from './+main-showcase/main-showcase.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: MainShowcaseComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);