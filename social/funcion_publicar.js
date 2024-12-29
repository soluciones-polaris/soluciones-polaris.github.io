function publicar_imagen()
{
// Realiza la solicitud al endpoint
const encodedCode = encodeURIComponent(localStorage.getItem("refresh_token"));
        fetch(`https://script.google.com/macros/s/AKfycbz5y5VUExFayCdNSVPVF-hw1ZKG6GZzez8EyrnH9V4kKgFI71EyIFQpdQQ5tzKeX-8J8Q/exec?refresh_token=${encodedCode}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }
                return response.text();
            })
            .then(data => {
                console.log('Respuesta del servidor:', data);
                
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
               
            });
}