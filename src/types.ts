export const init=()=>{
    console.log('Hola desde TypeScript');
    let cadena1='Samsung';
    cadena1.replaceAll('u', 'i');
    // console.log(cadena1)
};

interface person {
    color?: string; //permite que esta prop sea opcional en la clase
    altura: number;
    answer: boolean;
};

class Girl implements person {
    altura: number;
    answer: boolean;

    constructor(altura: number, answer: boolean) {
        this.altura=altura;
        this.answer=answer
    };
};

const silvana:Girl=new Girl (213, true);
console.log(`la estatura de Silvana es ${silvana.altura} y es ${silvana.answer}`)

class User implements person {
    private name?: string;
    protected materia: string;
    private year?: boolean;
    age: number = 18;

    //de la interfaz
    color: string;
    altura: number=13;
    answer: boolean;

    constructor(name: string, materia: string, year: boolean, color: string, answer: boolean) {
        this.name=name;
        this.materia=materia;
        this.year=year;
        this.color=color;
        // this.altura=altura
        this.answer=answer;
    };

    //métodos
    sayHi() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(`La materias es ${this.materia} y el año es ${this.year}.`);
    };

    sayBye() {
        console.log(`Good bye, it is was a pleassure. I am ${this.name}`);
    };
};

class Admin extends User {
    private idAdmin: number;

    constructor(idAdmin: number, name: string, materia: string, year: boolean,
        color: string, answer=false) {
            //answer se ha inicializado con false
        super(name, materia, year, color, answer );

        this.idAdmin=idAdmin; //para inicializar en clases
        this.materia=materia;
        // this.year=year;
        this.color=color;
        // this.answer=answer;
    };

    //métodos
    showId() {
        console.log(`El id es ${this.idAdmin}`);
    };
};

// class Bambu extends Admin {
//     constructor(materia: string) {
//         super(materia, );

//         this.materia=materia;
//     }
// };

const usuario: User = new User('Sebastian', 'mate', true, 'verde', true);
usuario.sayHi();
usuario.sayHi();

const usuario2: Admin = new Admin (26, 'Silvana', 'industrial', false, 'pink', false);
usuario2.sayHi();
usuario2.age=30; //cambiando la edad
usuario2.sayHi();
usuario2.showId();