document.addEventListener("DOMContentLoaded", () => {
    const inputTache = document.getElementById("nouvelle-tache");
    const boutonAjouter = document.getElementById("ajouter-tache-btn");
    const listeTaches = document.getElementById("liste-taches");

    // Fonction pour ajouter une tâche
    boutonAjouter.addEventListener("click", () => {
        const texteTache = inputTache.value.trim();
        if (texteTache === "") return;

        const elementTache = document.createElement("li");
        elementTache.className = "tache";

        const texte = document.createElement("span");
        texte.textContent = texteTache;

        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";

        // Marquer la tâche comme terminée
        texte.addEventListener("click", () => {
            elementTache.classList.toggle("terminee");
        });

        // Supprimer une tâche
        boutonSupprimer.addEventListener("click", () => {
            elementTache.remove();
        });

        elementTache.appendChild(texte);
        elementTache.appendChild(boutonSupprimer);
        listeTaches.appendChild(elementTache);

        inputTache.value = "";
    });
});
