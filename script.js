// Boton de Contacto

document.addEventListener("DOMContentLoaded", function() {

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        
        event.preventDefault();

        alert("Mensaje enviado con éxito. Gracias por tu interés. Nos pondremos en contacto pronto.");

        contactForm.reset();
    });

});

// Boton de Compra

document.addEventListener('DOMContentLoaded', () => {
    const botonCompra = document.querySelector('.btn-comprar');
  
    botonCompra.addEventListener('click', () => {
      alert('¡Gracias por comprar el producto! Tu pedido se está procesando.');
    });
  });
  
