import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentSecondComponent } from './component-second/component-second.component';
import { ComponentThirdComponent } from './component-third/component-third.component';


const routes: Routes = [
  {path:'',redirectTo:'contact',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'contact',component:ContactComponent},
  {path:'componentsecond',component:ComponentSecondComponent},
  {path:'componentthird',component:ComponentThirdComponent},
  {path:'**',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
