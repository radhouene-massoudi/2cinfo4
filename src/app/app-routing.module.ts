import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { FetchuserComponent } from './fetchuser/fetchuser.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParamComponent } from './param/param.component';
import { Parent2Component } from './parent2/parent2.component';
import { PcComponent } from './pc/pc.component';
import { TvComponent } from './tv/tv.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'detailProduct/:id/:name',component:DetailProductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'first',component:FirstComponent},
  {path:'addst',component:AddstudentComponent},
  {path:'login',component:LoginComponent},
  {path:'del/:id',component:DeleteuserComponent},
  {path:'update/:id',component:UpdateuserComponent},
  {path:'detail/:id',component:ParamComponent},
  {path:'userdetail/:id',component:DetailUserComponent},
  {path:'tv',component: TvComponent},
  {path:'us',component: FetchuserComponent},
  {path:'pc', component:PcComponent},
  {path:'parent', component:Parent2Component},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
