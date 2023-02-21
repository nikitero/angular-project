import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
