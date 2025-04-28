import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-area-circulo',
  templateUrl: './area-circulo.page.html',
  styleUrls: ['./area-circulo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardContent, IonInput, IonItem, IonButton, ReactiveFormsModule]
})
export class AreaCirculoPage implements OnInit {
  public raio!: number;
  public areaCirculo?: number;

  public form: FormGroup;

  constructor(private fBuilder: FormBuilder) {
    this.form = fBuilder.group({
      raio:[null, [Validators.required, Validators.min(1)]]
     });
  }

  ngOnInit() {
  }
  onSubmit(){
    this.raio = this.form.get('raio')?.value;

    this.areaCirculo =  (this.raio * this.raio) * 3.14;
  }

}
