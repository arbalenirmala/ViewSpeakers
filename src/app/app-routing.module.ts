import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpeakerDetailsComponent} from './speaker-details/speaker-details.component';
import {SpeakersListComponent} from './speakers-list/speakers-list.component';

const routes: Routes = [
  {
    path: 'details',
    component: SpeakerDetailsComponent,
    title: 'Speaker Details',
  },
  {path: '', redirectTo: 'speakerInfo', pathMatch: 'full'},
  {path: 'speakerInfo', component: SpeakersListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
