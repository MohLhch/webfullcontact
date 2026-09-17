# Web Full Contact — site vitrine

Site statique (HTML / CSS / JS, sans framework) pour **webfullcontact.com**, hébergé gratuitement sur GitHub Pages.

```
index.html            page unique : accueil, atouts, solution, points forts, recrutement, candidature, contact
assets/css/style.css  styles
assets/js/main.js     menu mobile, carte d'appel, envoi des formulaires
assets/img/           logo.svg, favicon.svg, apple-touch-icon.png
CNAME                 nom de domaine pour GitHub Pages
```

## 1. Mettre en ligne sur GitHub Pages

1. Créer un dépôt public sur github.com, par exemple `MohLhch/webfullcontact`.
2. Pousser ces fichiers à la racine du dépôt (branche `main`).
3. Sur GitHub : **Settings → Pages → Build and deployment** : Source = *Deploy from a branch*, Branch = `main`, dossier = `/ (root)`. Enregistrer.
4. Après une minute, le site est visible sur `https://mohlhch.github.io/webfullcontact/`.

## 2. Brancher le domaine webfullcontact.com

Le domaine est géré chez Squarespace Domains (DNS). Dans **Squarespace → Domaines → webfullcontact.com → Paramètres DNS** :

1. Supprimer les enregistrements **A** (`@` et `www`) et **AAAA** (`@` et `www`) qui pointent vers OVH (`54.36.91.62` / `2001:41d0:301::27`).
2. Ajouter quatre enregistrements **A** pour `@` :
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Ajouter un **CNAME** `www` → `mohlhch.github.io`
4. **Ne pas toucher** aux enregistrements MX, TXT (SPF, DKIM) et CNAME `gv-…googlehosted.com` : ce sont les e-mails Google Workspace.
5. Sur GitHub, **Settings → Pages → Custom domain** : saisir `www.webfullcontact.com`, enregistrer, puis cocher **Enforce HTTPS** dès que la vérification est verte (le fichier `CNAME` du dépôt contient déjà cette valeur).

Propagation : de quelques minutes à quelques heures. `webfullcontact.com` (sans www) redirige automatiquement vers `www`.

## 3. Activer les formulaires (gratuit)

Les deux formulaires (candidature, contact) utilisent Formspree, qui envoie les messages par e-mail sans serveur.

1. Créer un compte gratuit sur https://formspree.io (50 messages / mois).
2. Créer deux formulaires : *Candidature* et *Contact*. Chacun donne un identifiant du type `xpzgabcd`.
3. Dans `index.html`, remplacer `VOTRE_ID_CANDIDATURE` et `VOTRE_ID_CONTACT` par ces identifiants.
4. Dans Formspree, ajouter `www.webfullcontact.com` dans les domaines autorisés du formulaire.

Tant que les identifiants ne sont pas remplacés, le site affiche un message d'avertissement à l'envoi.

## 4. Modifier le contenu

Tout le texte est dans `index.html`, dans l'ordre d'affichage. Les couleurs et la typographie sont définies en haut de `assets/css/style.css` (variables `--ink`, `--accent`, etc.).

Pour ajouter un blog plus tard, créer un dossier `blog/` avec une page `index.html` et une page par article, puis ajouter un lien dans le menu.
