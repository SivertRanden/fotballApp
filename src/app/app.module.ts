import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionnaireStartPage } from '../pages/questionnaire-start/questionnaire-start';
import { TrainingDurationPage } from '../pages/training-duration/training-duration';
import { IntensityPage } from '../pages/intensity/intensity';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionnaireStartPage,
    TrainingDurationPage,
    IntensityPage
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
    TrainingDurationPage,
    IntensityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
