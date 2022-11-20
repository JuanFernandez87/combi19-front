export class Register {
    id!:number;
    dni: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    date_of_birth: Date;

    constructor(firstname: string, lastname: string, date_of_birth: Date, dni: number,  email: string, password: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.date_of_birth = date_of_birth;
        this.dni = dni;
        this.email = email;
        this.password = password;
    }
}