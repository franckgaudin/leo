"use client";

import { PrimaryButton } from "@/components/ui/primary-button";

export function SettingsPanel() {
  return (
    <section className="flex min-h-[400px] flex-col gap-6 rounded-[32px] border border-dashed border-white/10 bg-slate-950/60 p-8">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Configuration
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Préférences</h2>
        <p className="text-sm text-slate-300">
          Synchronise les paramètres pour que la prochaine conversation reste
          cohérente.
        </p>
      </header>
      <div className="space-y-3 text-sm text-slate-200">
        <p>• Modèle : GPT-4.1 (mode conversationnel, ton chaleureux)</p>
        <p>• Capacité : 1024 jetons</p>
        <p>• Politique : respect des règles internes de l’équipe</p>
      </div>
      <PrimaryButton variant="ghost">Synchroniser les préférences</PrimaryButton>
    </section>
  );
}
