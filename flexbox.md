# FLEXBOX
---
Flexbox, también conocido como Flexible Box Layout, es un modelo de diseño en CSS (Cascading Style Sheets) que permite organizar y alinear elementos en un contenedor de manera flexible y eficiente, especialmente en situaciones donde el diseño debe adaptarse a diferentes tamaños de pantalla y dispositivos.

Con Flexbox, puedes crear diseños de una manera más sencilla y fluida en comparación con los métodos tradicionales de posicionamiento en CSS. Te permite definir cómo los elementos dentro de un contenedor deben distribuirse, alinearse y ajustarse en función del espacio disponible.

### Propiedades del Flex Container:

* `Display` Define si el contenedor se comporta como un contenedor flexible, en línea o en bloque, según el valor proporcionado. Los valores posibles son flex o inline-flex.

* `Flex-Direction` Determina la dirección en la que los elementos flexibles se colocan dentro del contenedor flexible. Los valores incluyen:

	- row: los elementos se distribuyen en una fila horizontal de izquierda a derecha.
	- row-reverse: los elementos se distribuyen en una fila horizontal de derecha a izquierda.
	- column: los elementos se distribuyen en una columna vertical de arriba hacia abajo.
	- column-reverse: los elementos se distribuyen en una columna vertical de abajo hacia arriba.

* `Flex-Wrap` Controla si los elementos deben envolverse en múltiples líneas dentro del contenedor. Las opciones son:

	- nowrap (predeterminado): todos los elementos estarán en una línea.
	- wrap: los elementos se ajustarán en varias líneas de arriba hacia abajo.
	- wrap-reverse: los elementos se ajustarán en varias líneas de abajo hacia arriba.
	- Flex-Flow: Combina las propiedades flex-direction y flex-wrap en una sola declaración, permitiendo establecer tanto la dirección principal de distribución como el comportamiento de ajuste de línea en un solo valor.

* `Justify-Content` Define la alineación a lo largo del eje principal, distribuyendo el espacio disponible entre los elementos o ajustando sus posiciones a lo largo del eje principal. Las opciones son:

	- flex-start: los elementos se alinean al comienzo del contenedor.
	- flex-end: los elementos se alinean al final del contenedor.
	- center: los elementos se alinean en el centro a lo largo del contenedor.
	- space-between: los elementos se distribuyen a lo largo del contenedor con espacios iguales entre ellos.
	- space-around: los elementos se distribuyen con espacios iguales alrededor de ellos y al comienzo y al final.
	- space-evenly: los elementos se distribuyen de modo que el espacio entre dos elementos cualesquiera sea igual.
	- left: los elementos se alinean hacia el borde izquierdo del contenedor.
	- right: los elementos se alinean hacia el borde derecho del contenedor.

* `Align-Items` Controla la alineación de los elementos a lo largo del eje perpendicular al eje principal del contenedor flexible, según la dirección definida por flex-direction. Las opciones son:

	- flex-start: los elementos se alinean al comienzo del contenedor.
	- flex-end: los elementos se alinean al final del contenedor.
	- center: los elementos se alinean en el centro a lo largo del contenedor.
	- baseline: los elementos se alinean en la línea de base común, donde se colocan las letras en un texto.
	- stretch: los elementos se estiran para llenar todo el espacio disponible a lo largo del contenedor.

* `Align-Content` Controla el espaciado y la alineación de las líneas de elementos dentro del contenedor cuando hay espacio adicional. Las opciones son:

	- flex-start: las líneas se posicionan al comienzo del contenedor.
	- flex-end: las líneas se posicionan al final del contenedor.
	- center: las líneas se posicionan en el centro a lo largo del contenedor.
	- space-between: las líneas se distribuyen con espacios iguales entre ellas.
	- space-around: las líneas se distribuyen con espacios iguales alrededor de cada línea.
	- space-evenly: las líneas se distribuyen de manera que el espacio entre dos líneas cualesquiera sea igual.
	- stretch: las líneas se estiran para llenar todo el espacio disponible.


### Propiedades de Flex Items:

* `Order` Controla el orden en el que los elementos se presentan visualmente dentro del contenedor flexible.
* `Flex-Grow` Determina la capacidad de crecimiento de un elemento flexible cuando hay espacio adicional disponible en el contenedor. Define la proporción en la que los elementos flexibles crecerán en relación entre sí.
* `Flex-Shrink` Define la capacidad de encogimiento de un elemento flexible si el espacio disponible en el contenedor es insuficiente. Establece cómo los elementos flexibles disminuirán su tamaño en relación entre sí.
* `Flex-Basis` Establece el tamaño inicial preferido de un elemento flexible antes de que el espacio restante se distribuya. Puede ser un valor fijo o proporcional.
* `Align-Self` Permite anular la alineación predeterminada establecida por align-items para elementos flexibles individuales. Sus valores son los mismos que en align-items y controlan la alineación vertical del elemento dentro del contenedor.

