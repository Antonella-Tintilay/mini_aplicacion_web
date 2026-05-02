const alumnos = [
{ nombre: "Ana", nota: 8 },
{ nombre: "Carlos", nota: 5 },
{ nombre: "María", nota: 9 },
{ nombre: "Juan", nota: 3 },
{ nombre: "Lucía", nota: 7 },
{ nombre: "Pedro", nota: 6 },
];
const calcularPromedio = (notas) =>{
    const suma=notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
};
const soloNotas= alumnos.map (alumno => alumno.nota);
console.log("Promedio de notas:", calcularPromedio(soloNotas).toFixed(2));

const filtrarAprobados = (alumnos) =>{
    return alumnos.filter(alumno => alumno.nota >= 6);
};
console.log("Aprobados:", filtrarAprobados(alumnos));

const formatearAlumnos = (alumnos) =>{
    return alumnos.map(alumno => `Nombre: ${alumno.nombre} - Nota: ${alumno.nota}`);
};
console.log("Lista Formateada de Alumnos:",formatearAlumnos(alumnos));

const buscarAlumno = (alumnos, nombre) =>{
    return alumnos.find(alumno => alumno.nombre === nombre);
};
console.log("Buscar María:", buscarAlumno(alumnos, "María"));