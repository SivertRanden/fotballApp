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
import { MatchDurationPage } from '../pages/match-duration/match-duration';
import { AdditionalActivitiesPage } from '../pages/additional-activities/additional-activities';
import { BegrunnelsePage } from '../pages/begrunnelse/begrunnelse';
import { AktivitetPage } from '../pages/aktivitet/aktivitet';
import { WhatTeamPage } from '../pages/what-team/what-team';
import { PainmapPage } from '../pages/painmap/painmap';

/* Storage and communication plugins */
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionnaireStartPage,
    TrainingDurationPage,
    MatchDurationPage,
    IntensityPage,
    AdditionalActivitiesPage,
    BegrunnelsePage,
    AktivitetPage,
    WhatTeamPage,
    PainmapPage
  ],
  imports: [
  BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionnaireStartPage,
    TrainingDurationPage,
    MatchDurationPage,
    IntensityPage,
    AdditionalActivitiesPage,
    BegrunnelsePage,
    AktivitetPage,
    WhatTeamPage,
    PainmapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
