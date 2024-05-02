import { DashboardModule } from './pages/cms/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/cms/home/home.component';
import { NewsComponent } from './pages/cms/news/news.component';
import { ProjectsComponent } from './pages/cms/projects/projects.component';
import { LoginComponent } from './pages/cms/login/login.component';
import { DashboardComponent } from './pages/cms/dashboard/dashboard.component';
import { AddProjectComponent } from './pages/cms/add-project/add-project.component';
import { AddVacancyComponent } from './pages/cms/add-vacancy/add-vacancy.component';
import { AddNewsComponent } from './pages/cms/add-news/add-news.component';
import { AddSectionComponent } from './pages/cms/add-section/add-section.component';
import { VacanciesComponent } from './pages/cms/vacancies/vacancies.component';
import { SectionsComponent } from './pages/cms/sections/sections.component';
import { SubSectionComponent } from './pages/cms/sub-section/sub-section.component';
import { AddHomeComponent } from './pages/cms/add-home/add-home.component';
import { AddExpertiseComponent } from './pages/cms/add-expertise/add-expertise.component';
import { ExpertiseComponent } from './pages/web/expertise/expertise.component';
import { HomePageComponent } from './pages/web/home-page/home-page.component';
import { EngConComponent } from './pages/web/eng-con/eng-con.component';
import { ElectroMechComponent } from './pages/web/electro-mech/electro-mech.component';
import { ButecLifeComponent } from './pages/web/butec-life/butec-life.component';
import { ButecAcademyComponent } from './pages/web/butec-academy/butec-academy.component';
import { FacilityServicesComponent } from './pages/web/facility-services/facility-services.component';
import { UtilityServicesComponent } from './pages/web/utility-services/utility-services.component';
import { ListProjectsComponent } from './pages/web/list-projects/list-projects.component';
import { ProjectDetails1Component } from './pages/web/project-details1/project-details1.component';
import { ProjectDetails2Component } from './pages/web/project-details2/project-details2.component';
import { WhyChooseUsComponent } from './pages/web/why-choose-us/why-choose-us.component';
import { StoryComponent } from './pages/web/story/story.component';
import { LeadershipComponent } from './pages/web/leadership/leadership.component';
import { NewsDetailsComponent } from './pages/web/news-details/news-details.component';
import { ListNewsComponent } from './pages/web/list-news/list-news.component';
import { ContactComponent } from './pages/web/contact/contact.component';
import { ProjectDetailsComponent } from './pages/web/project-details/project-details.component';
import { ProjectsListComponent } from './pages/web/projects-list/projects-list.component';
import { NewsDetails1Component } from './pages/web/news-details1/news-details1.component';
import { NewsListComponent } from './pages/web/news-list/news-list.component';
import { ExpertisesComponent } from './pages/cms/expertises/expertises.component';
import { PositionsComponent } from './pages/web/positions/positions.component';
import { PositionDetailsComponent } from './pages/web/position-details/position-details.component';
import { HeaderComponent } from './pages/web/common/header/header.component';
import { FooterComponent } from './pages/web/common/footer/footer.component';
import { PolicyComponent } from './pages/web/policy/policy.component';
import { ButecComponent } from './pages/web/static-pages/butec/butec.component';

const routes: Routes = [
  { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
  {
    path: 'HomePage',
    component: HomePageComponent,
  },
  {
    path: 'Butec',
    component: ButecComponent,
  },
  {
    path: 'HeaderPage',
    component: HeaderComponent,
  },
  {
    path: 'FooterPage',
    component: FooterComponent,
  },
  {
    path: 'Expertise',
    component: ExpertiseComponent,
  },
  {
    path: 'Engineering-Contracting',
    component: EngConComponent,
  },
  {
    path: 'Electro-Mechanical',
    component: ElectroMechComponent,
  },
  {
    path: 'Facility-Services',
    component: FacilityServicesComponent,
  },
  {
    path: 'Utility-Services',
    component: UtilityServicesComponent,
  },
  {
    path: 'List-Projects',
    component: ListProjectsComponent,
  },
  {
    path: 'Projects-List',
    component: ProjectsListComponent,
  },
  {
    path: 'Project-Details',
    component: ProjectDetailsComponent,
  },
  {
    path: 'Project-Details1',
    component: ProjectDetails1Component,
  },
  {
    path: 'Project-Details2',
    component: ProjectDetails2Component,
  },
  {
    path: 'Butec-Life',
    component: ButecLifeComponent,
  },
  {
    path: 'Butec-Academy',
    component: ButecAcademyComponent,
  },
  {
    path: 'List-News',
    component: ListNewsComponent,
  },
  {
    path: 'News-List',
    component: NewsListComponent,
  },
  {
    path: 'News-Details',
    component: NewsDetailsComponent,
  },
  {
    path: 'News-Details1',
    component: NewsDetails1Component,
  },
  {
    path: 'why-choose-us',
    component: WhyChooseUsComponent,
  },

  {
    path: 'Story',
    component: StoryComponent,
  },

  {
    path: 'Leadership',
    component: LeadershipComponent,
  },

  {
    path: 'Positions',
    component: PositionsComponent,
  },

  {
    path: 'Position-Details',
    component: PositionDetailsComponent,
  },

  {
    path: 'Contact',
    component: ContactComponent,
  },

  {
    path: 'Policy',
    component: PolicyComponent,
  },

  {
    path: 'LoginPage',
    component: LoginComponent,
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'Sections',
        component: SectionsComponent,
      },
      {
        path: 'Home',
        component: HomeComponent,
      },
      {
        path: 'Projects',
        component: ProjectsComponent,
      },
      {
        path: 'News',
        component: NewsComponent,
      },
      {
        path: 'Vacancies',
        component: VacanciesComponent,
      },
      {
        path: 'Add-Home',
        component: AddHomeComponent,
      },
      {
        path: 'Add-Project',
        component: AddProjectComponent,
      },
      {
        path: 'Edit-Project',
        component: AddProjectComponent,
      },
      {
        path: 'Add-Vacancy',
        component: AddVacancyComponent,
      },
      {
        path: 'Add-News',
        component: AddNewsComponent,
      },
      {
        path: 'Edit-Home',
        component: AddHomeComponent,
      },
      {
        path: 'Edit-News',
        component: AddNewsComponent,
      },
      {
        path: 'Add-Section',
        component: AddSectionComponent,
      },
      {
        path: 'Edit-Section',
        component: AddSectionComponent,
      },
      {
        path: 'Sub-Section',
        component: SubSectionComponent,
      },
      {
        path: 'Edit-Expertise',
        component: AddExpertiseComponent,
      },
      {
        path: 'Add-Expertise',
        component: AddExpertiseComponent,
      },
      {
        path: 'Expertises',
        component: ExpertisesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
