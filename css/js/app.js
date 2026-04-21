document.getElementById("orcid-login").addEventListener("click", () => {
  const clientId = "YOUR_CLIENT_ID";
  const redirectUri = "YOUR_REDIRECT_URI";
  const orcidAuthUrl = `https://orcid.org/oauth/authorize?client_id=${clientId}&response_type=code&scope=/authenticate&redirect_uri=${redirectUri}`;
  window.location.href = orcidAuthUrl;
});
