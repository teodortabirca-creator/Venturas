
import { useEffect, useState } from "react";
import Link from "next/link";

type Consent = "accepted" | "rejected" | null;

const STORAGE_KEY = "venturas_cookie_consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [loaded, setLoaded] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
    }

    setLoaded(true);
  }, []);

  const saveConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setShowPreferences(false);
    window.dispatchEvent(new Event("venturas-consent-changed"));
  };

  if (!loaded) return null;

  return (
    <>
      {consent === null && (
        <div className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.2)] sm:p-8">
          <h2 className="text-xl font-extrabold text-[#16221D]">
            Confidențialitatea contează.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Folosim tehnologii necesare funcționării website-ului și,
            doar cu acordul tău, Google Analytics pentru a înțelege
            cum este utilizat site-ul. Poți accepta, refuza sau
            gestiona preferințele.{" "}
            <Link
              href="/politica-de-confidentialitate"
              className="font-semibold text-[#00563A] underline"
            >
              Politica de confidențialitate
            </Link>
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => saveConsent("accepted")}
              className="rounded-xl bg-[#F05B25] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D94F1C]"
            >
              Acceptă
            </button>

            <button
              onClick={() => saveConsent("rejected")}
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-[#16221D] transition hover:bg-slate-50"
            >
              Refuză
            </button>

            <button
              onClick={() => setShowPreferences(true)}
              className="rounded-xl px-6 py-3 text-sm font-semibold text-[#00563A] transition hover:bg-[#EAF4F0]"
            >
              Preferințe
            </button>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl"
          >
            <h2
              id="cookie-preferences-title"
              className="text-2xl font-extrabold text-[#16221D]"
            >
              Preferințe cookies
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-bold text-[#00563A]">
                  Funcționale — necesare
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Necesare pentru funcționarea și securitatea
                  website-ului. Nu pot fi dezactivate aici.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#00563A]">
                  Analiză — opționale
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Google Analytics ne ajută să înțelegem traficul
                  și modul în care vizitatorii folosesc site-ul.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => saveConsent("accepted")}
                className="rounded-xl bg-[#F05B25] px-5 py-3 text-sm font-semibold text-white"
              >
                Acceptă analiza
              </button>

              <button
                onClick={() => saveConsent("rejected")}
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-[#16221D]"
              >
                Refuză analiza
              </button>

              <button
                onClick={() => setShowPreferences(false)}
                className="rounded-xl px-5 py-3 text-sm font-semibold text-slate-600"
              >
                Înapoi
              </button>
            </div>
          </div>
        </div>
      )}

      {consent !== null && (
        <button
          onClick={() => setShowPreferences(true)}
          className="fixed bottom-4 left-4 z-[90] rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#00563A] shadow-lg transition hover:bg-[#EAF4F0]"
        >
          Setări cookies
        </button>
      )}
    </>
  );
}
