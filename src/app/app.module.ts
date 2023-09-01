import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrentComponent } from './components/current/current.component';
import { MainComponent } from './components/main/main.component';
import { RoundPipe } from './pipes/round.pipe';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './components/loading/loading.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ResetlocationComponent } from './components/resetlocation/resetlocation.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    MainComponent,
    RoundPipe,
    SearchComponent,
    LoadingComponent,
    CapitalizePipe,
    ResetlocationComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
