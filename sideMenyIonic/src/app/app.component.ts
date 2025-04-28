
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barbellSharp, bookmarkSharp, homeSharp, radioButtonOffSharp, triangleSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'Área do Triângulo', url: 'area-triangulo', icon: 'triangle' },
    { title: 'Área do Círculo', url: 'area-circulo', icon: 'radio-button-off' },
  ];
  constructor() {
    addIcons({ homeSharp, bookmarkSharp, barbellSharp,radioButtonOffSharp,triangleSharp });
  }
}
