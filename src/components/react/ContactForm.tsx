import { useState, type FormEvent } from "react";
import { brand } from "../../data/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") ?? "").trim();
    const contact = String(data.get("contato") ?? "").trim();
    const subject = String(data.get("assunto") ?? "").trim();
    const message = String(data.get("mensagem") ?? "").trim();

    if (!name || !contact || !message) {
      setStatus("error");
      return;
    }

    const text = encodeURIComponent(
      `Olá, sou ${name}. Assunto: ${subject}. Contato: ${contact}. ${message}`,
    );
    window.open(`https://wa.me/${brand.phoneWhatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setStatus("ok");
    event.currentTarget.reset();
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm font-bold text-cdb-purple-deep">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          autoComplete="name"
          required
          className="min-h-11 w-full rounded-2xl border border-cdb-purple-soft bg-white px-4 text-cdb-ink"
        />
      </div>
      <div>
        <label htmlFor="contato" className="mb-1 block text-sm font-bold text-cdb-purple-deep">
          Telefone ou e-mail
        </label>
        <input
          id="contato"
          name="contato"
          autoComplete="tel"
          required
          className="min-h-11 w-full rounded-2xl border border-cdb-purple-soft bg-white px-4 text-cdb-ink"
        />
      </div>
      <div>
        <label htmlFor="assunto" className="mb-1 block text-sm font-bold text-cdb-purple-deep">
          Assunto
        </label>
        <select
          id="assunto"
          name="assunto"
          className="min-h-11 w-full rounded-2xl border border-cdb-purple-soft bg-white px-4 text-cdb-ink"
          defaultValue="Quero ser voluntário"
        >
          <option>Quero ser voluntário</option>
          <option>Quero doar</option>
          <option>Quero participar de uma Oficina</option>
          <option>Sou parceiro ou imprensa</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm font-bold text-cdb-purple-deep">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className="w-full rounded-2xl border border-cdb-purple-soft bg-white px-4 py-3 text-cdb-ink"
        />
      </div>
      {status === "error" ? (
        <p className="rounded-2xl bg-cdb-yellow-soft px-4 py-3 text-sm font-semibold text-cdb-purple-deep" role="alert">
          Preencha nome, telefone ou e-mail, e mensagem para enviar.
        </p>
      ) : null}
      {status === "ok" ? (
        <p className="rounded-2xl bg-cdb-purple-soft px-4 py-3 text-sm font-semibold text-cdb-purple-deep" role="status">
          Abrimos o WhatsApp da Sede. Se nada acontecer, ligue para {brand.phoneDisplay[0]}.
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-cdb-purple px-6 font-bold text-white"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
