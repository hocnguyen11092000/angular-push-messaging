import { Component, OnInit } from '@angular/core';
import { getMessaging, getToken, onMessage } from '@firebase/messaging';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-fire-base-push-messaging';

  ngOnInit(): void {
    if (environment.production) {
      if ('serviceWorker' in navigator) {
        // Register a service worker hosted at the root of the
        // site using the default scope.
        navigator.serviceWorker
          .register('./static/firebase-messaging-sw.js', {
            scope: '/',
          })
          .then(
            (registration) => {
              console.log(
                'Service worker registration succeeded:',
                registration
              );
              // navigator.serviceWorker.register('/firebase-messaging-sw.js', {
              //   scope: 'redemption',
              // });
            },
            (error) => {
              console.error(`Service worker registration failed: ${error}`);
            }
          );
      } else {
        console.error('Service workers are not supported.');
      }
    }

    const app = initializeApp(environment.firebaseConfig);

    const messaging = getMessaging(app);

    this.requestPermission();

    getToken(messaging).then((token) => {
      console.log(token);
    });

    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // ...
    });
  }
  requestPermission() {
    Notification.requestPermission().then((p) => {
      console.log(p);
    });
  }
}
