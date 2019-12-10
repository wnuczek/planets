import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { PaginatorComponent } from './paginator/paginator.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'main',

  },
  {
    path: 'main',
    component: MainComponent,
  }
];
@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      ListComponent,
      PlanetCardComponent,
      PaginatorComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      // Angular Material Modules
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatButtonModule,

      // Angular Flex
      FlexLayoutModule,

      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent,

   ]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/round-search-24px.svg'));

  }
}
