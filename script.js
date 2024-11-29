
        // Mostrar/ocultar campo "Otra discapacidad"
        document.getElementById('disability').addEventListener('change', function () {
            const otherInput = document.getElementById('otherDisability');
            if (this.value === 'Otra') {
                otherInput.style.display = 'block';
            } else {
                otherInput.style.display = 'none';
            }
        });

        // Manejo del formulario al enviarlo
        document.getElementById('registrationForm').addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            try {
                // Simular el envío de datos
                console.log('Datos enviados:', data); // Solo para pruebas

                // Mostrar mensaje de éxito con animación
                const successMessage = document.createElement('div');
                successMessage.textContent = 'Formulario enviado exitosamente 🎉';
                successMessage.style.color = '#28a745';
                successMessage.style.fontWeight = 'bold';
                successMessage.style.textAlign = 'center';
                successMessage.style.marginTop = '20px';
                successMessage.style.animation = 'fadeIn 1s ease-in-out';

                // Agregar mensaje al formulario
                this.appendChild(successMessage);

                // Limpiar los campos del formulario
                this.reset();

                // Ocultar el mensaje después de 3 segundos
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            } catch (error) {
                alert('Ocurrió un error al enviar el formulario');
            }
        });
