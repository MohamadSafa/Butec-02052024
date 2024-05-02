import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/cms/home/home.component';
import { ProjectsComponent } from './pages/cms/projects/projects.component';
import { NewsComponent } from './pages/cms/news/news.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './pages/cms/login/login.component';
import { DashboardComponent } from './pages/cms/dashboard/dashboard.component';
import { AddProjectComponent } from './pages/cms/add-project/add-project.component';
import { VacanciesComponent } from './pages/cms/vacancies/vacancies.component';
import { AddVacancyComponent } from './pages/cms/add-vacancy/add-vacancy.component';
import { AddNewsComponent } from './pages/cms/add-news/add-news.component';
import { AddSectionComponent } from './pages/cms/add-section/add-section.component';
import { SectionsComponent } from './pages/cms/sections/sections.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { SubSectionComponent } from './pages/cms/sub-section/sub-section.component';
import { AddSubSectionComponent } from './pages/cms/add-sub-section/add-sub-section.component';
import { HomePageComponent } from './pages/web/home-page/home-page.component';
import { AddHomeComponent } from './pages/cms/add-home/add-home.component';
// import { DropzoneModule } from 'ngx-dropzone-wrapper';
// import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
// import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AddExpertiseComponent } from './pages/cms/add-expertise/add-expertise.component';
import { ExpertiseComponent } from './pages/web/expertise/expertise.component';
import { ButecAcademyComponent } from './pages/web/butec-academy/butec-academy.component';
import { ButecLifeComponent } from './pages/web/butec-life/butec-life.component';
import { NewsDetailsComponent } from './pages/web/news-details/news-details.component';
import { ListNewsComponent } from './pages/web/list-news/list-news.component';
import { ContactComponent } from './pages/web/contact/contact.component';
import { ExpertisesComponent } from './pages/cms/expertises/expertises.component';
import { EngConComponent } from './pages/web/eng-con/eng-con.component';
import { ElectroMechComponent } from './pages/web/electro-mech/electro-mech.component';
import { FacilityServicesComponent } from './pages/web/facility-services/facility-services.component';
import { UtilityServicesComponent } from './pages/web/utility-services/utility-services.component';
import { HeaderComponent } from './pages/web/common/header/header.component';
import { FooterComponent } from './pages/web/common/footer/footer.component';
import { PositionsComponent } from './pages/web/positions/positions.component';
import { PositionDetailsComponent } from './pages/web/position-details/position-details.component';
import { PolicyComponent } from './pages/web/policy/policy.component';
import { ProjectDetails1Component } from './pages/web/project-details1/project-details1.component';
import { ButecComponent } from './pages/web/static-pages/butec/butec.component';
import { ChatComponent } from './pages/web/chat/chat.component';
import { ProjectDetailsComponent } from './pages/web/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VacanciesComponent,
    AddVacancyComponent,
    AddNewsComponent,
    AddSectionComponent,
    SectionsComponent,
    AddProjectComponent,
    NewsComponent,
    ProjectsComponent,
    VacanciesComponent,
    SubSectionComponent,
    AddSubSectionComponent,
    HomePageComponent,
    HomeComponent,
    AddHomeComponent,
    AddExpertiseComponent,
    ExpertisesComponent,
    ExpertiseComponent,
    ButecAcademyComponent,
    ButecLifeComponent,
    ListNewsComponent,
    NewsDetailsComponent,
    ContactComponent,
    EngConComponent,
    ElectroMechComponent,
    FacilityServicesComponent,
    UtilityServicesComponent,
    HeaderComponent,
    FooterComponent,
    PositionsComponent,
    PositionDetailsComponent,
    PolicyComponent,
    ProjectDetails1Component,
    ButecComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,

    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxDropzoneModule,
    // DropzoneModule
  ],
  providers: [
    // {
    //   provide: DROPZONE_CONFIG,
    //   useValue: DEFAULT_DROPZONE_CONFIG
    // }
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent, ChatComponent],
})
export class AppModule {}
