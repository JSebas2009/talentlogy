let calificacion = prompt("ingresa tu calicicacion");

// 0-5 6-7 8-9 10
if (calificacion <= 5) {
  alert("tu calificacion es insufuciente");
} else {
  if (calificacion >= 6 && calificacion <= 7) {
    alert("tu calificacion es suficiente");
  } else {
    if (calificacion >= 8 && calificacion <= 9)
      alert("tu calificacion esta bien");
    else {
      if (calificacion <= 10) alert("tu calificacion es excelente");
    }
  }
}


