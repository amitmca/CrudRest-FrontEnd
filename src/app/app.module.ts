import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListuserComponent } from './component/listuser/listuser.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserService } from './shared_service/user.service';

const appRoutes: Routes = [
  {path: '', component: ListuserComponent},
  {path: 'op', component: UserFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
