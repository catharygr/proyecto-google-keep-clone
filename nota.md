# Paso para crear esta App
# Abrir y Cerrar el elemento formulario 

- Crear una class que se pone en mayuscula para nuestra App
- Agarrarse a varios elementos en el DOM
- Crear una funcion para los eventlistener
- Ejecutar la funcion desde el contructor 
- En la funcion añadir eventListener que seria un click a body 
- Pasar el evento a la otra funcion que maneja ckick sobre el formulario
- Crear funcion que maneja cuando al formulario se le haga click
- dentro de ella se devuelve un bolean si el formulario aplicando el metodo constain el evento target todo esto se le asigna a una variable
- Se usa la variable para hacer una condicional para abrir y cerrar el formulario y despues hacer dos funciones encargada de manipular el DOM para esta accion 
- Añadir eventlistner a formulario en el botom submit dentro de la funcion de los eventos.
- Dentro del evento usar el metedo prevenDefault() para evitar la recarga de la pagina por defecto 
- Recoger contenido escrito por el usuario con .value y guardalo en una variable
- Crear una funcion que añade una nueva nota y se llama AddNote(note) (que es un objeto)
- Ver si el Usuario ha escrito algo con una condicional y  en caso que sea true llamamos la funcion que añade una nota pasando un objeto con el contenido de la nota como argumento.
- Copiar el objeto que entra y añadimos el color y id dinamico
- Si no hay entrada en el array que contengan las notas devolvemos id: 1 si hay notas se busca la ultima entrada en el array  y su id y lo aumentamos por 1  y asi garantizamos que no se repiten los id
- Reasignar nuestro array con todas la notas ya existentes utilizando spread operator y añadiendo  la nueva nota al final
- llamar la funcion para mostrar la nota en DOM 
- Averiguar si hay nota. Mostrar o ocultar placeholder dependiendo si hay o no notas en el array  
- INSERTAR EN EL DOM TODAS LAS NOTAS UTILIZANDO innerhtml y el metodo map a nuestro array 
- Añadir event click a nuestro boton de cierre de formulario
- Resolver la tarea cuando haces click sobre el body ( mientras ya has introducido algun texto dentro de .value) Guardar una nueva nota  y cerrar el formulario
- Añadir el divModal en el html para edicion de notas 
- Crear la funcion para seleccionar la nota y en ella seleccionar la nota con el metodo event.target.closest
- Obtener la informacion que esta en la nota y actualizar variables globales con estos datos 
- Crear la funcion que abre modal y seleccionar la nota, abrir modal y rellenar los datos
- Eventlister para el boton de cierre de modal
- Crear funcion que cierran el modal y editan la nota
- Imprimir todas las notas el DOM de nuevo
- Incrementar la funcion que abre el tooltip mientras se hace mouseover sobre el iconos de los colores en el modal
_ Añadir toolpit en html
- Hacer que tooltip tenga evento con el raton para que no se oculte mientras movamos el raton
- Implementar la funcion de borrar la nota
- Guardar las notas en localStorage