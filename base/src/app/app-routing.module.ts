import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [


  {
    path: '',
    loadChildren: () =>
    import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'user',
    loadChildren: () =>
    import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: 'tests',
    loadChildren: () =>
    import("./test/test.module").then(m => m.TestModule)
  },
  {
    path:'ss',
    component:UserPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
