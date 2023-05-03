import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResearchComponent } from './research/research.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'methodology', component: MethodologyComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
