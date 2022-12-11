import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { SearchPipe} from './search.pipe';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakersListComponent,
    FooterComponent,
    HeaderComponent,
    SearchPipe,
    SpeakerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
