import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-area-triangulo',
  templateUrl: './area-triangulo.page.html',
  styleUrls: ['./area-triangulo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonCard, IonCardContent, IonInput, IonItem, IonButton, IonCardHeader, ReactiveFormsModule]
})
export class AreaTrianguloPage implements OnInit {
  public base!: number;
  public altura?: number;
  public areaTriangulo?: number;

  public meuFormulario: FormGroup;

  constructor(private fb:FormBuilder) {

    this.meuFormulario = this.fb.group({
      base: [null, [Validators.required, Validators.min(1)]],
      altura: [null, [Validators.required, Validators.min(1)]]

    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.base= this.meuFormulario.get(['base'])?.value;
    this.altura= this.meuFormulario.get(['altura'])?.value;

    this.areaTriangulo = (this.altura! * this.base!) /2;

  }
}
