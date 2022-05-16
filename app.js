class App {
  constructor() {
    //Agarrarse de varios documentos en el DOM
    this.$formulario = document.querySelector('#form');
    this.$notaTitulo = document.querySelector('#note-title');
    this.$notaTexto = document.querySelector('#note-text');
    this.$notaBotones = document.querySelector('#form-buttons');
    this.$botonEnviar = document.querySelector('#submit-button');

    // ejecutar estas funciones al cargar la pagina
    this.losEventListeners();
  }

  // Funcion que contenera todos los evenListeners 
  losEventListeners() {
    document.body.addEventListener('click', evento => {
      this.manejarClickFormulario(evento); 
    })
    this.$formulario.addEventListener('submit', evento => {
    evento.preventDefault()

    })
  

  }
  
  manejarClickFormulario(evento) {
    // Averiguar si el click .contains $formulario
        const esFormulario = this.$formulario.contains(evento.target)
    if(esFormulario) {
      this.abrirFormulario()
    } else {
      this.cerrarFormualario()

    }
    
  }
  
  abrirFormulario() {
    this.$formulario.classList.add('form-open')
    this.$notaTitulo.style.display = 'block'
    this.$notaBotones.style.display = 'block'

  }
  
  cerrarFormualario() {
    this.$formulario.classList.remove('form-open')
    this.$notaTitulo.style.display = 'none'
    this.$notaBotones.style.display = 'none'

  }





























}
new App()