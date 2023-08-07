# FLEXBOX FROGGY
---
###### Nivel #1:
Se emplea la propiedad justify-content con el valor flex-end para alinear la rana hacia el lado derecho del contenedor.

#pond {
  display: flex;
justify-content:flex-end;
} 

###### Nivel #2:
Se emplea la propiedad justify-content con el valor center para alinear las ranas en el centro del contenedor.

#pond {
  display: flex;
justify-content: center;
}

###### Nivel #3:
Se emplea la propiedad justify-content con el valor space-around para distribuir las ranas con espacios iguales disponibles en el contenedor, tanto al comienzo como al final.

#pond {
  display: flex;
justify-content: space-around;
}

###### Nivel #4:
Se aplica la propiedad justify-content con el valor space-between para alinear las ranas a lo largo del contenedor con espacios iguales entre ellas.

#pond {
  display: flex;
justify-content: space-between;
}

###### Nivel #5:
Se utiliza la propiedad align-items para alinear los elementos verticalmente dentro del contenedor. Establecemos el valor flex-end para alinear las ranas en la parte inferior.

#pond {
  display: flex;
align-items: flex-end;
}

###### Nivel #6:
Se combinan las propiedades justify-content y align-items, ambas con el valor center, para alinear la rana justo en el medio del contenedor, tanto en sentido vertical como horizontal.

#pond {
  display: flex;
justify-content: center;
align-items: center;
}

###### Nivel #7:
Se emplea la propiedad justify-content con el valor space-around para distribuir de manera equitativa el espacio disponible entre las ranas. Además, con align-items y el valor flex-end alineamos las ranas en la parte inferior del contenedor.

#pond {
  display: flex;
justify-content: space-around;
align-items: flex-end;
}

###### Nivel #8:
Se utiliza la propiedad flex-direction para definir la dirección de los elementos dentro del contenedor. Establecemos flex-direction con el valor row-reverse para organizar las ranas en una fila horizontal de derecha a izquierda.

#pond {
  display: flex;
flex-direction: row-reverse;
}

###### Nivel #9:
Se emplea la propiedad flex-direction con el valor column para posicionar las ranas en una columna de arriba hacia abajo.

#pond {
  display: flex;
flex-direction: column;
}

###### Nivel #10:
Se utiliza la propiedad justify-content con el valor flex-end para alinear la rana hacia el lado derecho del contenedor. Sin embargo, al combinarlo con flex-direction con valor row-reverse, la posición se invierte y la rana queda alineada a la izquierda.

#pond {
  display: flex;

justify-content: flex-end;
flex-direction: row-reverse
}

###### Nivel #11:
Se utiliza la propiedad justify-content con el valor flex-end y flex-direction con valor column para alinear las ranas en una columna de arriba hacia abajo.

#pond {
  display: flex;
justify-content: flex-end;
flex-direction: column;
}

###### Nivel #12:
Se emplea la propiedad justify-content con el valor space-between y flex-direction con valor column-reverse para alinear las ranas en una columna con espacios iguales entre ellas, de abajo hacia arriba.

#pond {
  display: flex;
justify-content: space-between;
flex-direction: column-reverse;
}

###### Nivel #13:
Se emplea la propiedad justify-content con valor center y align-items con valor flex-end para centrar verticalmente las ranas en el contenedor, alineándolas en el lado inferior. Con flex-direction con valor row-reverse, las ranas se distribuyen horizontalmente de derecha a izquierda.

#pond {
  display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: row-reverse;
}

###### Nivel #14:
Se utiliza la propiedad la propiedad order para cambiar el orden de posición de una rana. Asignamos el valor de 1 a la rana amarilla para cambiar su posición con la rana roja.

#pond {
  display: flex;
}

.yellow {
order: 1
}

###### Nivel #15:

Se aplica la propiedad order con el valor -1 para mover la rana roja que está en la posición 4 a la primera posición.
#pond {
  display: flex;
}

.red {
order: -1
}

###### Nivel #16:
Se uiliza la propiedad align-self en la rana amarilla con valor flex-end para posicionarla en la parte inferior del contenedor verticalmente.

#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
align-self: flex-end;
}

###### Nivel #17:
Se emplea la propiedad order para alinear las ranas amarillas hacia la izquierda y align-self con valor flex-end para posicionarlas en la parte inferior del contenedor.

#pond {
  display: flex;
  align-items: flex-start;
}
.yellow {
order: 2;
align-self: flex-end;
}

###### Nivel #18:
Se utiliza la propiedad flex-wrap para posicionar los elementos en una línea por defecto. Con el valor wrap, las ranas se ajustarán en varias líneas de arriba hacia abajo.

#pond {
  display: flex;
flex-wrap: wrap;
}

###### Nivel #19:
Se emplea la propiedad flex-direction con valor column para organizar las ranas en una columna de arriba hacia abajo, y flex-wrap con valor wrap para dividirlas en diferentes columnas.

#pond {
  display: flex;
flex-direction: column;
flex-wrap: wrap;
}

###### Nivel #20:
Se utiliza la propiedad flex-flow con valores wrap column para organizar las ranas en diferentes columnas.

#pond {
  display: flex;
flex-flow: wrap column; 
}


###### Nivel #21:
Se aplica la propiedad align-content con valor flex-start, junto con flex-wrap, para alinear las ranas en la parte superior del contenedor.

#pond {
  display: flex;
align-content: flex-start;
flex-wrap: wrap;
}

###### Nivel #22:
Se emplea la propiedad align-content con valor flex-end y flex-wrap con el valor wrap para alinear las ranas en la parte inferior del contenedor.

#pond {
  display: flex;
align-content: flex-end;
flex-wrap: wrap;
}

###### Nivel #23:
Se utiliza la propiedad flex-wrap para que las ranas se ajusten en diferentes líneas. Con flex-direction con valor column-reverse, las ranas se organizan verticalmente de abajo hacia arriba. Y con align-content con valor center, las alineamos en el centro del contenedor.

#pond {
  display: flex;
  flex-wrap: wrap;
flex-direction: column-reverse;
align-content: center;
}

###### Nivel #24:
Con la propiedad flex-direction: column-reverse, las ranas se organizan en columnas de abajo hacia arriba.Usamos flex-wrap: wrap-reverse para organizar los elementos en una fila horizontal que se envuelve en líneas inversas si no caben. Con align-content: space-between, distribuimos el espacio verticalmente entre las filas de las ranas. Y con justify-content: center se alinean los elementos horizontalmente en el centro del contenedor.

#pond {
  display: flex;
flex-direction: column-reverse;
flex-wrap: wrap-reverse;
align-content: space-between;
justify-content: center;
}
