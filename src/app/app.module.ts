import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe} from './search.pipe';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { RouterModule } from '@angular/router';  // Import RouterModule

@NgModule({ declarations: [
        AppComponent,  
        SpeakersListComponent,
        FooterComponent,
        HeaderComponent,
        SearchPipe,
        SpeakerDetailsComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule,
        FormsModule,
        NgxPaginationModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
  export class AppModule { }
