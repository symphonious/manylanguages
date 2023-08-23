// Evento click del botón de inicio de sesión
document.getElementById('loginButton').addEventListener('click', function() {
    const clientId = 'FDe4XQWJLONFKVX3STZ3xLUss7pLnhPK-IZA-lNSynk'; // Reemplaza con tu propio Client ID de Gumroad
    const redirectUri = 'https://openlanguage.glitch.me/gumroad-redirect'; // Reemplaza con tu propia Redirect URI

    // Construye la URL de autorización
    const authorizationUrl = "https://gumroad.com/oauth/authorize?client_id=FDe4XQWJLONFKVX3STZ3xLUss7pLnhPK-IZA-lNSynk&redirect_uri=https://openlanguage.glitch.me/gumroad-redirect&scope=view_profile";

    //const authorizationUrl = `https://gumroad.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=view_profile`;
    //const authorizationUrl = `https://gumroad.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    // Redirecciona al usuario a la página de autorización
    window.location.href = authorizationUrl;
  });

  