import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { FormsModule } from '@angular/forms';
import { DirecComponent } from './direc/direc.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PcComponent } from './pc/pc.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowoneproductComponent } from './showoneproduct/showoneproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { ParamComponent } from './param/param.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FetchuserComponent } from './fetchuser/fetchuser.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AddstudentComponent,
    DirecComponent,
    ChildComponent,
    ParentComponent,
    PcComponent,
    TvComponent,
    MobileComponent,
    ShowoneproductComponent,
    AddproductComponent,
    NavComponent,
    NotfoundComponent,
    LoginComponent,
    ParamComponent,
    DetailProductComponent,
    FetchuserComponent,
    DetailUserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    Child2Component,
    Parent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
