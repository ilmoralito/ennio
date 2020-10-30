import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ManageCrisesComponent } from './admin/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './admin/manage-heroes/manage-heroes.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { CityComponent } from './city/city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { FormsComponent } from './forms/forms.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ForbiddenEmailValidatorDirective } from './forbidden-email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent,
    FirstComponent,
    SecondComponent,
    ChildAComponent,
    ChildBComponent,
    HeroDetailComponent,
    AdminDashboardComponent,
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
    HeroFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    CityComponent,
    DemoFormComponent,
    FormsComponent,
    FormGroupComponent,
    FormBuilderComponent,
    ForbiddenEmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: 'crisis-list',
        component: CrisisListComponent,
        children: [
          { path: 'child-a', component: ChildAComponent },
          { path: 'child-b', component: ChildBComponent }
        ]
      },
      { path: 'forms', component: FormsComponent },
      { path: 'form-group', component: FormGroupComponent },
      { path: 'city', component: CityComponent },
      { path: 'heroes-list', component: HeroesListComponent },
      { path: 'first-component', component: FirstComponent },
      { path: 'second-component', component: SecondComponent },
      { path: 'heroes-list/:id', component: HeroDetailComponent },
      { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
