import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-hoteles',
  imports: [ReactiveFormsModule,],
  templateUrl: './hoteles.html',
  styleUrl: './hoteles.css'
})
export class Hoteles {

  fechaPosteriorAHoy(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;
    if (!valor) return null;

    // Convertimos ambas fechas a "solo fecha", sin horas
    const fechaEntrada = new Date(control.value);
    const hoy = new Date();
    // Limpiar hora de ambas fechas
    const fechaSoloEntrada = new Date(fechaEntrada.getFullYear(), fechaEntrada.getMonth(), fechaEntrada.getDate());
    const fechaSoloHoy = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());


    return fechaSoloEntrada > fechaSoloHoy ? null : { fechaNoValida: true };
  }

  fechaSalidaPosterior(control: AbstractControl): ValidationErrors | null {
    const form = control as FormGroup;
    const entrada = form.get('fecha_entrada')?.value;
    const salida = form.get('fecha_salida')?.value;

    if (!entrada || !salida) return null;

    const fechaEntrada = new Date(entrada);
    const fechaSalida = new Date(salida);

    const entradaSinHora = new Date(fechaEntrada.getFullYear(), fechaEntrada.getMonth(), fechaEntrada.getDate());
    const salidaSinHora = new Date(fechaSalida.getFullYear(), fechaSalida.getMonth(), fechaSalida.getDate());

    return salidaSinHora > entradaSinHora ? null : { fechaSalidaNoValida: true };
  }

  personasValidator(control: AbstractControl) {
    // reciben el control sobre el cual queremos realizar la validacion 
    // Si todo va bien retornamos null
    // Si hay algun tipo de error RETORNAMOS algun objeto distinto de null


    const value = control.value;
    if (!value) return null;

    if (value >= 1 && value <= 6) {
      return null;
    } else {
      return { personavalidator: true };
    }
  }





// -----------------------------------------------------------------------------

  hotelForm: FormGroup = new FormGroup({

    nombre: new FormControl(null,[Validators.required, Validators.minLength(3)]),

    email: new FormControl(null,[ Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),

    entrada: new FormControl(null,[ Validators.required, this.fechaPosteriorAHoy]),
    salidad: new FormControl(null,[ Validators.required]),

    numPersonas: new FormControl(null,[ Validators.required, this.personasValidator ]),

    terminos: new FormControl(null,[Validators.requiredTrue]),

    codPromocion: new FormControl(null,[])
    
  },{validators: this.fechaSalidaPosterior})


  
  onClick() {

    // Mientras que patchValue puede recibir los objetos que se desee dentro de los que estan disponibles en el formulario
    this.hotelForm.patchValue({
      nombre: 'Wario', telefono: 112, email: 'WarioCastilloDeLaRosaDelTiburon@gmail.com'
    })
  }


    onSubmit() {
    if (this.hotelForm.valid) {
      console.log(this.hotelForm.value);
    }else{
      alert('revisa el formulario')
    }
  }


}