import { useMemo, useState } from "react";
import { activities, cities, kindLabel, type CitySlug } from "../../data/site";

export default function ActivityExplorer() {
  const [city, setCity] = useState<"todas" | CitySlug>("todas");
  const [kind, setKind] = useState<"todas" | "oficina" | "programa" | "campanha" | "espaco">("todas");

  const filtered = useMemo(
    () =>
      activities.filter((activity) => {
        const cityOk = city === "todas" || activity.city === city;
        const kindOk = kind === "todas" || activity.kind === kind;
        return cityOk && kindOk;
      }),
    [city, kind],
  );

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <fieldset className="min-w-0">
          <legend className="mb-2 text-sm font-bold text-cdb-purple">Cidade</legend>
          <div className="flex flex-wrap gap-2">
            {(["todas", ...cities.map((item) => item.slug)] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setCity(value)}
                className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
                  city === value
                    ? "bg-cdb-purple text-white"
                    : "border border-cdb-purple-soft bg-white text-cdb-ink"
                }`}
              >
                {value === "todas" ? "Todas" : cities.find((item) => item.slug === value)?.name}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-2 text-sm font-bold text-cdb-purple">Tipo</legend>
          <div className="flex flex-wrap gap-2">
            {(["todas", "oficina", "espaco", "programa", "campanha"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setKind(value)}
                className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
                  kind === value
                    ? "bg-cdb-yellow text-cdb-purple-deep"
                    : "border border-cdb-purple-soft bg-white text-cdb-ink"
                }`}
              >
                {value === "todas" ? "Todos" : kindLabel[value]}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 rounded-3xl border border-cdb-purple-soft bg-cdb-paper p-6 text-cdb-muted" role="status">
          Nenhuma Atividade com esse recorte. Tente outra Cidade ou outro tipo.
        </p>
      ) : (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((activity) => {
            const cityName = cities.find((item) => item.slug === activity.city)?.name;
            return (
              <li key={activity.slug}>
                <a
                  href={`/atividades/${activity.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cdb-purple-soft bg-white shadow-[0_12px_30px_rgba(91,45,145,0.06)] transition hover:-translate-y-0.5 hover:border-cdb-purple"
                >
                  <div
                    className={`relative aspect-[4/3] ${
                      activity.city === "canoas" ? "bg-cdb-purple" : "bg-cdb-yellow"
                    }`}
                  >
                    <ActivityArt slug={activity.slug} />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-cdb-purple-deep">
                      {cityName}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-cdb-purple">
                      {kindLabel[activity.kind]}
                    </p>
                    <h3 className="font-display text-2xl text-cdb-purple-deep group-hover:text-cdb-purple">
                      {activity.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-cdb-muted">{activity.summary}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ActivityArt({ slug }: { slug: string }) {
  const palette = slug.length % 2 === 0 ? "#F5C518" : "#FFFFFF";
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden="true">
      <circle cx="250" cy="46" r="28" fill={palette} opacity="0.9" />
      <path
        d="M20 190c40-10 55-60 100-60s55 50 100 50 70-40 80-40"
        fill="none"
        stroke={palette}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <rect x="42" y="88" width="70" height="70" rx="16" fill={palette} opacity="0.35" />
      <rect x="130" y="70" width="58" height="88" rx="16" fill={palette} opacity="0.5" />
    </svg>
  );
}
