let ruleButtons = document.querySelector(".ruleButton");

document.addEventListener("click", () => {
  ruleButtons.innerHTML = `L'objectif est de résoudre une addition en moins de 15 secondes. L'addition est affichée en décimal, il faut y répondre en binaire.

Lors du menu le joueur peut choisir entre deux modes de difficulté. Le Hard Mode est réservé aux joueurs à la recherche d'un vrai défi. Il est recommandé de commencer par le Easy Mode.

Une nouvelle opération est générée lorsque l'utlisateur entre la bonne réponse.

En cas de mauvaise réponse, le jeu s'arrête et un bouton restart apparaît. Il donne l'option de recommencer le jeu.`;
});
