const fs = require('fs');
const path = require('path');

// Ruta de tu archivo del Dashboard
const dashboardFilePath = path.join(__dirname, 'src', 'app', 'dashboard', 'page.tsx'); // Cambia la ruta según tu estructura de proyecto

// Leer el archivo del Dashboard
fs.readFile(dashboardFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error leyendo el archivo del Dashboard:", err);
    return;
  }

  // Eliminar el botón "Unirse" del código
  let updatedData = data.replace(/<button[^>]*>Unirse<\/button>/g, '');

  // Redirigir el botón "Iniciar ahora" a la página de información
  updatedData = updatedData.replace(
    /<button[^>]*>Iniciar ahora<\/button>/g,
    `<button onClick={handleStartNow} className="start-now-button">Iniciar ahora</button>`
  );

  // Agregar el manejador de la redirección (usando useRouter de Next.js)
  updatedData = updatedData.replace(
    '</div>', // Esto agrega el cierre del div después de todo
    `
    import { useRouter } from 'next/router';

    const handleStartNow = () => {
      const router = useRouter();
      router.push('/informacion'); // Cambia '/informacion' por tu ruta
    }

    </div>`
  );

  // Escribir el archivo modificado
  fs.writeFile(dashboardFilePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error("Error escribiendo el archivo del Dashboard:", err);
      return;
    }
    console.log('El archivo del Dashboard ha sido actualizado con éxito.');
  });
});
