import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'labo4-7e264',
        appId: '1:24387765317:web:06c4e773f249c2b9d20f2c',
        storageBucket: 'labo4-7e264.appspot.com',
        apiKey: 'AIzaSyDeuhCwGhkxGuKuj6QSaWanybEjk82h86c',
        authDomain: 'labo4-7e264.firebaseapp.com',
        messagingSenderId: '24387765317',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAnimations(), // required animations providers
    provideToastr(),
    provideHttpClient(),
  ],
};
