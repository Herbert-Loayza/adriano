import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'; 
// importar Validator, para hacer validaciones

import { debounceTime } from 'rxjs/operators'; // Para importar el debouceTime



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

                                                      /* para vaidaciones maximo y minimos caracteres */
  emailCtrl = new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(4)]);
                            //para validaciones Obligatorias
  constructor(){
    
    this.emailCtrl.valueChanges   // para observar su cambios, letra pr letra(muy reactivo)
    .pipe(  // proceso ".pipe" para usar deboudceTime
      debounceTime(450)  //"debouceTime" mide el tiempo para tomar valor (menos reactivo)
    )
    .subscribe(value=>{
      console.log(value);
    })
  }

  ngOnInit(): void {
  }

  getEmail(event:Event){                   //obtiene el evento que sale desde la interfaz
    event.preventDefault();                 //Cancela su funcionalidad
    console.log(this.emailCtrl.value);      // va el emailCtrl y pregunta por su valor
  }

}
