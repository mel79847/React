type Marca = 'X' | 'O';

type Celda = Marca | null;

type Tablero = Celda[];

const tableroInicial: Tablero = Array<Celda>(9).fill(null);

console.log(tableroInicial);