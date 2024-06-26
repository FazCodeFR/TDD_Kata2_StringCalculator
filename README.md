# String Calculator

Ce projet implémente une calculatrice simple qui prend une chaîne de caractères et retourne un entier. Il suit le kata de développement piloté par les tests (TDD) pour créer une fonction `add` qui gère différentes entrées et délimiteurs.

[Consigne exercice Kata 2 String Calculator](https://tddmanifesto.com/exercises/)

# Manifeste du TDD

Le développement piloté par les tests (TDD) est une pratique de développement logiciel qui améliore la qualité du code et accélère le processus de développement. Voici les principes clés du TDD :

1. **Écrire un test** : Avant de commencer à écrire du code fonctionnel, écrivez un test qui échoue. Ce test doit refléter une fonctionnalité ou un comportement que vous souhaitez implémenter.
2. **Faire échouer le test** : Exécutez le test pour vérifier qu'il échoue. Cela confirme que le test est valide et que la fonctionnalité n'est pas encore implémentée.
3. **Écrire le code minimum** : Écrivez juste assez de code pour faire passer le test. Ne codez pas plus que nécessaire.
4. **Faire passer le test** : Exécutez à nouveau le test pour vérifier qu'il passe. Si ce n'est pas le cas, ajustez le code jusqu'à ce que le test réussisse.
5. **Refactoriser** : Nettoyez et améliorez le code tout en veillant à ce que tous les tests continuent de passer. Le but est de rendre le code clair, simple et sans duplication.
6. **Répéter** : Répétez ces étapes pour chaque nouvelle fonctionnalité ou modification.


## Avantages du TDD

- **Qualité du code améliorée** : En écrivant des tests avant le code, vous vous assurez que chaque fonctionnalité est testée et fonctionne comme prévu.
- **Débogage plus facile** : Les tests automatisés facilitent la détection et la correction des bugs.
- **Documentation vivante** : Les tests servent de documentation sur la manière dont le code doit se comporter.
- **Refactorisation en toute sécurité** : Les tests garantissent que les modifications du code n'introduisent pas de nouveaux bugs.



## Fonctionnalités

- Additionne les nombres dans une chaîne de caractères.
- Gère les chaînes vides ou nulles.
- Gère les délimiteurs personnalisés.
- Lève des exceptions pour les nombres négatifs et les séparateurs de fin de chaîne.

## Installation

Clonez le dépôt et installez les dépendances :

```sh
git clone https://github.com/FazCodeFR/TDD_Kata2_StringCalculator.git
cd TDD_Kata2_StringCalculator
npm install
```

## Tests

Pour exécuter les tests, utilisez la commande suivante :

```sh
npm test
```

### Fonction add
La fonction add prend une chaîne de caractères numbers et retourne la somme des nombres qu'elle contient. Elle gère plusieurs cas particuliers et utilise des délimiteurs personnalisés si spécifiés.

### Cas pris en charge
- Chaîne vide ou nulle : retourne 0.
- Un seul nombre : retourne ce nombre.
- Plusieurs nombres séparés par des virgules : retourne leur somme.
- Délimiteurs personnalisés définis par //[delimiter]\n au début de la chaîne.
- Délimiteurs mixtes avec des sauts de ligne (\n) remplacés par des virgules.
- Gestion des nombres négatifs : lève une erreur listant tous les nombres négatifs trouvés.
- Vérification des séparateurs de fin de chaîne : lève une erreur si un séparateur de fin de chaîne est trouvé.

## Auteur
Léo A
