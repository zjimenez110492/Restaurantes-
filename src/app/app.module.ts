import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Firebase */
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database'
/* Firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,/* 
    AngularFirestoreModule, */
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
