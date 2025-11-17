# AGENT GUIDE

Ce projet héberge l’application de chat IA principale. Les consignes ci-dessous restent simples pour que les contributeurs puissent intervenir même si l’application est encore en évolution.

## Stack principale
- **Next.js 16** : point d’entrée dans `src/app/` (ou `src/page.tsx` selon la configuration) et styles globaux dans `src/styles/`.
- **React Router** : utilisé pour la navigation client si l’architecture le nécessite ; encapsulez la logique côté `src/router/`.
- **TypeScript + Zod** : validez données API et props via des schémas partagés (préférer `src/lib/schemas/`).
- **Tailwind CSS + shadcn/ui** : construisez les composants en suivant des conventions atomiques (`components/ui/`). Gardez `tailwind.config.ts` et `stitches.config.ts` (si utilisé) propres.
- **Vitest** : la suite de test régulière (`tests/` ou `__tests__/`) cible les hooks/logique métier, en complétant avec `@testing-library/react` si nécessaire.

## Structure recommandée
- `src/app/` (si Next App Router) ou `src/pages/` (si pages router) pour les routes publiques.
- `src/features/` ou `src/modules/` pour isoler les domaines (message, conversation, session, etc.).
- `src/components/` pour les éléments UI réutilisés ; `components/ui/` peut contenir l’interface shadcn.
- `src/lib/` pour utilitaires, hooks, clients API, schémas Zod et adaptateurs fetch.
- `tests/` reflète le même découpage que `src/` avec `*.test.ts(x)` ou `*.spec.ts(x)` ; préférez `tests/__mocks__/` pour les doublures d’API.
- `public/` pour assets statiques (icônes, illustrations) ; gardez la racine propre.

## Commandes essentielles
- `npm install` pour synchroniser les dépendances.
- `npm run dev` pour démarrer Next en mode développement (watch/HMR).
- `npm run build` afin de compiler le projet pour la production.
- `npm run lint` pour vérifier le style (ajoutez un script si manquant).
- `npm run test` (Vitest) exécute la suite : importante à relancer localement avant tout PR.
- Documentez toute nouvelle commande dans ce fichier.

## Processus de contribution
- Employez des commits [Conventional Commits] (ex. `feat: ajouter flow de conversation`).
- Ouvrez des PR claires : titre descriptif + résumé + commandes testées et résultats.
- Spécifiez les environnements requis (`.env.local`, API keys, etc.) dans `README.md` ou ici si nécessaire.
- Mentionnez les captures/vidéos pour les UI significatives et utilisez les drafts si le travail est en cours.

## Tests & qualité
- Couvrez les composants critiques (messaging, flux AI, sécurité) via Vitest avec mock minimal pour l’API AI.
- Gardez les tests rapides : isolez les appels réseau et limitez les interactions DOM lorsque non nécessaires.
- Lorsque vous ajoutez un nouveau test, ajoutez-le au schéma Zod correspondant si des données partagées sont utilisées.

## Sécurité & configuration
- Ne versionnez jamais les secrets : utilisez `.env.local` ou `config/env.example`.
- Documentez toute clé attendue dans ce guide ou le README avant d’ajouter des fichiers de config.

Si tu as besoin de précisions supplémentaires (API AI utilisée, conventions de routing, etc.), demande-les avant de démarrer.
