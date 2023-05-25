// Datos de ejemplo
const doctores = [
    {
      nombre: "Juan",
      apellido: "Pérez",
      cedula: "123456789",
      especialidad: "Cardiología",
      consultorio: "Consultorio 1",
      correo: "juan@example.com"
    },
    {
      nombre: "María",
      apellido: "González",
      cedula: "987654321",
      especialidad: "Dermatología",
      consultorio: "Consultorio 2",
      correo: "maria@example.com"
    }
  ];
  
  // Función para generar y mostrar la información de los doctores en la página
  function mostrarDoctores() {
    const doctoresContainer = document.getElementById('doctoresContainer');
  
    // Limpiar el contenido existente en el contenedor
    doctoresContainer.innerHTML = '';
  
    // Generar y agregar la información de cada doctor al contenedor
    doctores.forEach((doctor, index) => {
      const doctorDiv = document.createElement('div');
      doctorDiv.className = 'doctor';
  
      const nombreP = document.createElement('p');
      nombreP.textContent = `Nombre: ${doctor.nombre} ${doctor.apellido}`;
      doctorDiv.appendChild(nombreP);
  
      const cedulaP = document.createElement('p');
      cedulaP.textContent = `Cédula: ${doctor.cedula}`;
      doctorDiv.appendChild(cedulaP);
  
      const especialidadP = document.createElement('p');
      especialidadP.textContent = `Especialidad: ${doctor.especialidad}`;
      doctorDiv.appendChild(especialidadP);
  
      const consultorioP = document.createElement('p');
      consultorioP.textContent = `Consultorio: ${doctor.consultorio}`;
      doctorDiv.appendChild(consultorioP);
  
      const correoP = document.createElement('p');
      correoP.textContent = `Correo de contacto: ${doctor.correo}`;
      doctorDiv.appendChild(correoP);
  
      doctoresContainer.appendChild(doctorDiv);
    });
  }
  
  // Datos de ejemplo
  const personas = [
    {
      nombre: "Juan",
      apellido: "Pérez",
      cedula: "123456789",
      edad: 30,
      telefono: "1234567890",
      especialidadRequerida: "Dermatología"
    },
    {
      nombre: "María",
      apellido: "González",
      cedula: "987654321",
      edad: 25,
      telefono: "0987654321",
      especialidadRequerida: "Cardiología"
    }
  ];
  
  // Función para generar y mostrar la información de las personas en la página
  function mostrarPersonas() {
    const personasContainer = document.getElementById('personasContainer');
  
    // Limpiar el contenido existente en el contenedor
    personasContainer.innerHTML = '';
  
    // Generar y agregar la información de cada persona al contenedor
    personas.forEach((persona, index) => {
      const personaDiv = document.createElement('div');
      personaDiv.className = 'persona';
  
      const nombreP = document.createElement('p');
      nombreP.textContent = `Nombre: ${persona.nombre} ${persona.apellido}`;
      personaDiv.appendChild(nombreP);
  
      const cedulaP = document.createElement('p');
      cedulaP.textContent = `Cédula: ${persona.cedula}`;
      personaDiv.appendChild(cedulaP);
  
      const edadP = document.createElement('p');
      edadP.textContent = `Edad: ${persona.edad}`;
      personaDiv.appendChild(edadP);
  
      const telefonoP = document.createElement('p');
      telefonoP.textContent = `Teléfono: ${persona.telefono}`;
      personaDiv.appendChild(telefonoP);
  
      const especialidadP = document.createElement('p');
      especialidadP.textContent = `Especialidad requerida: ${persona.especialidadRequerida}`;
      personaDiv.appendChild(especialidadP);
  
      personasContainer.appendChild(personaDiv);
    });
  }
  
  // Función para validar los campos del formulario utilizando expresiones regulares y el DOM
  function validarFormulario(formId) {
    const form = document.getElementById(formId);
  
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Evitar el envío del formulario para realizar la validación
  
      // Expresión regular para validar el formato de la cédula (números de 10 dígitos)
      const cedulaRegex = /^\d{10}$/;
  
      // Expresión regular para validar el formato del correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // Obtener los valores de los campos del formulario
      const nombre = form.nombre.value;
      const apellido = form.apellido.value;
      const cedula = form.cedula.value;
      const especialidad = form.especialidad.value;
      const consultorio = form.consultorio.value;
      const correo = form.correo.value;
  
      // Validar los campos utilizando expresiones regulares
      if (!cedulaRegex.test(cedula)) {
        alert('Ingrese un número de cédula válido (10 dígitos).');
        return;
      }
  
      if (!emailRegex.test(correo)) {
        alert('Ingrese un correo electrónico válido.');
        return;
      }
  
      // Crear un objeto con los datos del formulario
      const formData = {
        nombre,
        apellido,
        cedula,
        especialidad,
        consultorio,
        correo
      };
  
      // Convertir el objeto a JSON
      const jsonData = JSON.stringify(formData);
  
      // Guardar el JSON en un archivo (en este caso, se muestra por consola)
      console.log(jsonData);
  
      // Limpiar el formulario
      form.reset();
    });
  }
  
  // Llamar a la función para validar los campos del formulario de doctores
  validarFormulario('doctorForm');
  
  // Llamar a la función para validar los campos del formulario de personas
  validarFormulario('personaForm');
  
  // Llamar a la función para mostrar los doctores al cargar la página
  mostrarDoctores();
  
  // Llamar a la función para mostrar las personas al cargar la página
  mostrarPersonas();
  