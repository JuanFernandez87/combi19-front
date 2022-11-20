import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/models/Register'
import { RegisterService } from 'src/app/services/register-services.service'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit{
  data!: Register;
  form!: FormGroup;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    // Genero los validadores para cada campo
    this.form = new FormGroup({
      firstname: new FormControl(null, [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(25)
      ]),
      lastname: new FormControl(null, [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(25)
      ]),
      date_of_birth: new FormControl(null, [
        Validators.required,
      ]),
      dni: new FormControl(null, [
        Validators.required,
        //Validators.pattern('[- +()0-9]{10,}'),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
      ]),
    })
  }

  onSubmit(): void {
  if(!this.form.valid){
    window.alert('Los datos ingresados son inválidos o faltan completar campos')
  } else {
    if (confirm('¿Quiere enviar su información?')){      
        // Creo un objeto Inscripcion y seteo los valares al constructor  
        this.data = new Register(
          this.form.value['firstname'], 
          this.form.value['lastname'],
          this.form.value['date_of_birth'],
          this.form.value['dni'],
          this.form.value['email'],
          this.form.value['password']);
        console.log(this.data);
        
        this.registerService.save(this.data).subscribe(data => { 
          window.alert(data['message'])
          if (data['message'] == 'El registro de usuario se realizo correctamente'){
            window.location.reload();  
          }
        });
        
    }
  }
  }
}
