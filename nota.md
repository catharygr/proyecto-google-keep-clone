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
- Creamos una funcion que añade una nueva nota y se llama AddNote(note) (que es un objeto)
- Ver si el Usuario ha escrito algo con una condicional y  en caso que sea true llamamos la funcion que añade una nota pasando un objeto con el contenido de la nota como argumento.
- Copiamos el objeto que entra y añadimos el color y id dinamico
- Si no hay entrada en el array que contengan las notas devolvemos id: 1 si hay notas se busca la ultima entrada en el array  y su id y lo aumentamos por 1  y asi garantizamos que no se repiten los id
- Reasignamos nuestro array con todas la notas ya existentes utilizando spread operator y añadiendo  la nueva nota al final
- llamamos la funcion para mostrar la nota en DOM 
- Averiguar si hay nota. Mostrar o ocultar placeholder dependiendo si hay o no notas en el array  