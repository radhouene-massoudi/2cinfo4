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
    ShowoneproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
