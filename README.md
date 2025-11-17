# Vibe Chat AI

Prototype d’application de chat IA pensée pour un workflow moderne : interface Next.js 16, navigation React Router, validation Zod, design Tailwind + shadcn, et tests Vitest. Cette base permet d’orchestrer rapidement des expériences conversationnelles tout en conservant une architecture modulaire.

## Stack essentielle
- **Next.js 16 (App Router)** : pages sous `src/app/`, layout global avec `layout.tsx`, et exports optimisés pour la production.
- **React Router 7** : pilote les états d’interface (chat vs paramètres) dans le client ; compatible avec les transitions de Next.
- **Zod + TypeScript** : schémas de validation dans `src/lib/schemas/*` pour garantir la structure des messages et des props.
- **Tailwind CSS 4 + shadcn/ui** : styles atomiques, composants personnalisés (`src/components/ui/`), palettes sur mesure via `globals.css`.
- **Vitest + Testing Library** : tests rapides et ciblés sous `tests/` ; prêt pour l’intégration continue.

## Démarrage rapide
1. `npm install`
2. `npm run dev`
3. Ouvre [http://localhost:3000](http://localhost:3000) pour voir l’interface (React Router gère la navigation interne).

## Scripts disponibles
- `npm run dev` – lance Next.js en mode développement (watch + HMR).
- `npm run build` – compile l’application pour la production.
- `npm run start` – démarre le serveur (après un build).
- `npm run lint` – vérifie les règles ESLint.
- `npm run typecheck` – effectue une vérification TypeScript sans générer d’artefacts.
- `npm run test` – exécute la suite Vitest en mode headless.
- `npm run test:watch` – lance Vitest en watch pour le développement.

## Organisation clé
- `src/app/` – conteneur App Router ; `page.tsx` illustre le mix Next/React Router.
- `src/features/` – domaines (chat, préférences, etc.) isolant logique et UI.
- `src/components/ui/` – composants shadcn-friendly (boutons, cartes).
- `src/lib/schemas/` – schémas Zod partagés.
- `tests/` – suites Vitest + helpers sous `tests/setup.ts`.

## Tests recommandés
- utiliser `vitest` pour couvrir les comportements critiques du chat (mise à jour de la liste, actions des boutons).
- mocker les appels externes (API IA) si tu ajoutes une couche d’intégration.
- valider les schémas Zod dans les tests quand tu manipules des données partagées.

Si tu as besoin d’un setup API (clefs, fichiers `.env`), documente les variables dans `README.md` ou `AGENTS.md` avant d’ajouter de nouveaux fichiers de config.
