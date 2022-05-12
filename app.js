class App {
  constructor() {
    this.notes =[] // array para guardar las notas 
    //agarrarse a varios elementos en el DOM
    this.$placeholder = document.querySelector('#placeholder')
    this.$form = document.querySelector('#form')
    this.$notes = document.querySelector('#notes')
    this.$noteTitle = document.querySelector('#note-title')
    this.$noteText = document.querySelector('#note-text')
    this.$formButtons = document.querySelector('#form-buttons')

    this.addEventListeners()// ejecutar la funcion
  }

  addEventListeners() {
    // añadimos a body un evento para que haga click en toda la pagina
    document.body.addEventListener('click', event => {
      this.handleFormClick(event) // llamamos la segunda funcion pasandole el evento
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
  }

  handleFormClick(event) {
    const isFormClicked = this.$form.contains(event.target) //  devuelve boleean si el click es encima del formulario
    // Se hace una condiconal con dos funciones para abrir y cerrar el formulario 
    if (isFormClicked) {
      this.openForm()
    } else {
      this.closeForm()
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
  addNote(note) {
    //Copiamos el objeto que entra y añadimos el color y id dinamico
    const newNote = {
      title: note.title,
      text: note.text,
      color: "white",
      //Si no hay entrada en el array que contengan las notas devolvemos id: 1 si hay notas se busca la ultima entrada en el array  y su id y lo aumentamos por 1  y asi garantizamos que no se repiten los id
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
    };
    // Reasignamos nuestro array con todas la notas ya existentes utilizando spread operator y añadiendo  la nueva nota al final 
    this.notes = [...this.notes, newNote];
    //llamamos la funcion para mostrar la nota en DOM 
    this.displayNotes()
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
  <div style="background: ${note.color};" class="note">
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