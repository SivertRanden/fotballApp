import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionnaireStartPage } from './questionnaire-start';

@NgModule({
  declarations: [
    QuestionnaireStartPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionnaireStartPage),
  ],
})
export class QuestionnaireStartPageModule {}
