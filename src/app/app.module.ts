import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesExComponent } from './directives-ex/directives-ex.component';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { Directive3Directive } from './directive3.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesExComponent,
    Directive1Directive,
    Directive2Directive,
    Directive3Directive,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
