class App {
  constructor() {
    this.notes =[]; // array para guardar las notas 
    // Esta variables son para manipular datos
    this.title = ''; 
    this.text = '';
    this.id = '';
    //agarrarse a varios elementos en el DOM
    this.$placeholder = document.querySelector('#placeholder');
    this.$form = document.querySelector('#form')
    this.$notes = document.querySelector('#notes')
    this.$noteTitle = document.querySelector('#note-title')
    this.$noteText = document.querySelector('#note-text')
    this.$formButtons = document.querySelector('#form-buttons')
    this.$formCloseButton = document.querySelector('#form-close-button')
    this.$modal = document.querySelector(".modal")
    this.$modalTitle = document.querySelector(".modal-title");
    this.$modalText = document.querySelector(".modal-text");
    his.$modalCloseButton = document.querySelector('.modal-close-button');


    this.addEventListeners()// ejecutar la funcion
  }

  addEventListeners() {
    // añadimos a body un evento para que haga click en toda la pagina
    document.body.addEventListener('click', event => {
      this.handleFormClick(event) // llamamos la segunda funcion pasandole el evento
      this.selectNote(event) // Selecciomar la nota adecuada para presentar el contenido de la misma en el modal
      this.openModal(event)// Ver si hemos hecho click encima de una nota y abrir en el modal
    })

      this.$form.addEventListener('submit', event => {
        event.preventDefault()
        // recoger el valor escrito pot el usuario
        const title = this.$noteTitle.value 
        const text = this.$noteText.value
        //Ver si el Usuario ha escrito algo con una condicional 
        const hasNote = title || text 
        //condicional para poner nueva nota
         if(hasNote) {
           //llamamos la funcion pasandole los value como un objetos
           this.addNote({ title, text });
         }
      })
      //Evenlistener para el boton de cierre
      this.$formCloseButton.addEventListener('click', event => {
        // Este metodo sirve para controlar eventos en el caso de tener mas de un evento (uno encima de otro lo que llaman bubleing... es como dejar de propagar el evento del elemento inferior, al elemento superior,  y evitar ejecutar el evento en el elemento superior )
        event.stopPropagation()
        this.closeForm()
      })

  }

  handleFormClick(event) {
    const isFormClicked = this.$form.contains(event.target) //  devuelve boleean si el click es encima del formulario
    // Se hace una condiconal con dos funciones para abrir y cerrar el formulario 
    const title = this.$noteTitle.value;
      const text = this.$noteText.value;
      const hasNote = title || text;

      if (isFormClicked) {
        this.openForm();
      } else if (hasNote) {
        this.addNote({ title, text });
      } else {
        this.closeForm();
      }
    }
    
  // para abrir el formulario
  openForm() {
    this.$form.classList.add('form-open')
    this.$noteTitle.style.display = 'block';
    this.$formButtons.style.display = 'block'
  }
  // para cerrar el formulario
  closeForm() {
    this.$form.classList.remove('form-open')
    this.$noteTitle.style.display = 'none';
    this.$formButtons.style.display = 'none'
    this.$noteTitle.value = '';
    this.$noteText.value = '';

  }
  //Funcion para que abre el modal para editar las notas 
  openModal(event) {
    // (closest) este metodo sirve para seleccionar el elemento con clase .note mas cercano al evento target (que es el body) osea, la nota que hemos pinchado
    if(event.target.closest('.note')) {
      this.$modal.classList.toggle('open-modal')
      this.$modalTitle.value = this.title;
      this.$modalText.value = this.text;
    }
  }

  addNote({title,text}) {
    //Copiamos el objeto que entra y añadimos el color y id dinamico
    const newNote = {
      title,
      text,
      color: "white",
      //Si no hay entrada en el array que contengan las notas devolvemos id: 1 si hay notas se busca la ultima entrada en el array  y su id y lo aumentamos por 1  y asi garantizamos que no se repiten los id
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
    };
    // Reasignamos nuestro array con todas la notas ya existentes utilizando spread operator y añadiendo  la nueva nota al final 
    this.notes = [...this.notes, newNote];
    //llamamos la funcion para mostrar la nota en DOM 
    this.displayNotes()
    this.closeForm()
  }


  //Funcion que seleciona la nota para presentar su contenido en el modal 
  selectNote(event) { 
    const $selectedNote = event.target.closest('.note') // Seleccionar la nota
    if(!$selectedNote) return // Sirve para no procar error si no hemos hecho click a la nota
    const[$noteTitle,$noteText] = $selectedNote.children // Destructurar los primeros dos hijos (Div)
    // Actualiazar variables globales
    this.title = $noteTitle.innerText
    this.text = $noteText.innerText
    this.id = $selectedNote.dataset.id // Con dataset podemos leer lo que hay en data.id (data-id=${note.id}) en la etiqueta html de la nota seleccinado
  }

  displayNotes() {
    // Averiguar si hay nota 
    const hasNotes = this.notes.length > 0; 
    //Mostrar o ocultar placeholder dependiendo si hay o no notas en el array  
    this.$placeholder.style.display = hasNotes ? 'none' : 'flex'
  //  if (hasNotes) {
  //    this.$placeholder.style.display = 'none';  
  //  } else {
  //     this.$placeholder.style.display = 'flex';    
  //  }
  // INSERTAR EN EL DOM TODAS LAS NOTAS UTILIZANDO innerhtml y el metodo map a nuestro array 

  this.$notes.innerHTML = this.notes.map(note => `
  <div style="background: ${note.color};" class="note" data-id=${note.id}>
    <div class="${note.title && 'note-title'}">${note.title}</div>
    <div class="note-text">${note.text}</div>
    <div class="toolbar-container">
      <div class="toolbar">
        <img class="toolbar-color" src="keep_48dp.png">
        <img class="toolbar-delete" src="keep_48dp.png">
      </div>
    </div>
  </div>
  `).join(""); // En este caso para quitar la coma que ha aparecido

  
}
  


  // final de la clase
}
new App()