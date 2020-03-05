import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OnboardComponent } from './components/onboard/onboard.component';
import { TemplateComponent } from './components/template/template.component';
import { NewChangesComponent } from './components/new-changes/new-changes.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TrendsComponent } from './components/trends/trends.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  { path: 'home', redirectTo: 'onboardClient', pathMatch: 'full'},
  { path: 'onboardClient', component: OnboardComponent},
  { path: 'template', component: TemplateComponent},
  { path: 'changes', component: NewChangesComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'trends', component: TrendsComponent},
  { path: 'error', component: ErrorComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
