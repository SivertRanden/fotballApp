import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionnaireStartPage } from '../pages/questionnaire-start/questionnaire-start';
import { BegrunnelsePage } from '../pages/begrunnelse/begrunnelse';
import { AktivitetPage } from '../pages/aktivitet/aktivitet';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionnaireStartPage,
    BegrunnelsePage,
    AktivitetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionnaireStartPage,
    BegrunnelsePage,
    AktivitetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
