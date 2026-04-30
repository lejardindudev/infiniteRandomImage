# 📸 Image Loader – Picsum Random API

## 🧾 Description

**Image Loader** est une application web simple développée avec React qui permet d'afficher des images aléatoires provenant de l'API publique Picsum Photos.

L'objectif du projet est de manipuler des appels API, gérer le state React et implémenter des interactions utilisateur simples autour du chargement dynamique de contenu.

---

## 🚀 Fonctionnalités

- 🔄 Chargement d’images aléatoires via l’API Picsum
- 📄 Pagination des résultats (`page` / `limit`)
- ⚡ Mise à jour dynamique des images
- 🧠 Gestion du state avec les hooks React (`useState`, `useEffect`)
- ♻️ Re-render optimisé selon les interactions utilisateur

---

## 🛠️ Stack technique

- React (Vite)
- JavaScript (ES6+)
- CSS / Sass
- API REST : https://picsum.photos/

---

## 🚀 Lancement du projet

### Avec Docker (recommandé)

#### Windows:

```bash
git clone <repo>
cd <repo>
docker compose -f docker-compose.windows.yml up
```

#### Linux:

```bash
git clone <repo>
cd <repo>
docker compose -f docker-compose.windows.yml up
```

👉 Accès : http://localhost:5173

---

## 🔗 Utilisation de l'API

Endpoint utilisé :

https://picsum.photos/v2/list?page={page}&limit={limit}

---

## 📱 Améliorations possibles

- Loader
- Gestion erreurs
- Lazy loading
- Favoris
- Filtrage

---

## 📄 Author

Le jardin du dev : Projet libre à des fins pédagogiques.
