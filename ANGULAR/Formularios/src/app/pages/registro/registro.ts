import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})

export class Registro {

  //  ESTO ES EL FORMGROUP DEL HTML
  registroForm: FormGroup = new FormGroup({

    nombre: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),

    apellidos: new FormControl(null, [
      Validators.maxLength(12)
    ]),

    edad: new FormControl(null, [
      this.edadValidator
      // la funcion esta abajo
    ]),


    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ]
    ),
    telefono: new FormControl(),


    dni: new FormControl(null, [
      this.dniValidator
    ]),


    password: new FormControl(null, [
      Validators.required,


      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{5,10}$/)
    ]),
    repite_password: new FormControl()
  });

  onSubmit() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
    }else{
      alert('revisa el formulario')
    }
  }



  onClick() {

    //   set value necesita el objeto completo
    //   this.registroForm.setValue(
    //     nombre: 'Mario',
    //     apellidos: 'Giron',
    //     .....
    //   )
    // }

    // Mientras que patchValue puede recibir los objetos que se desee dentro de los que estan disponibles en el formulario
    this.registroForm.patchValue({
      nombre: 'Mario', telefono: 5432432, email: 'vbfhdjsik@gmail.com'
    })
  }



  edadValidator(control: AbstractControl) {
    // reciben el control sobre el cual queremos realizar la validacion 
    // Si todo va bien retornamos null
    // Si hay algun tipo de error RETORNAMOS algun objeto distinto de null


    const value = control.value;
    if (!value) return null;

    if (value >= 18 && value <= 65) {
      return null;
    } else {
      return { edadvalidator: true };
    }
  }










  dniValidator(control: AbstractControl) {

    const dni = control.value as string;
    const relLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (!dni) return null;

    if (!/^\d{8}[a-zA-Z]$/.test(dni)) {
      return { dnivalidator: 'Formato no válido' };
    }

    const numero = Number(dni.substring(0, 8));
    const letra = dni.at(8)?.toUpperCase();
    const calculo = numero % 23;

    if (letra !== relLetras.at(calculo)) {
      return { dnivalidator: 'La letra no coincide' };
    }

    return null;
  }











}
