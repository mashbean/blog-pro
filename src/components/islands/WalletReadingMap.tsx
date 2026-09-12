import type { Post } from "../../lib/reports-to-posts";
import type { SeriesCompanion } from "../../lib/series-landing";
import type { Locale } from "../../lib/i18n";

// Reading positions are editorial relationships, not claims of protocol compliance.
const articles = {
  issuer: ["2026-09-09-one-click-twdiw-vc-issuer-lite"],
  holder: [
    "2026-09-05-mydata-vault-in-the-digital-wallet",
    "2026-09-01-natural-person-certificate-official-documents",
  ],
  verifier: [
    "2026-09-03-one-click-twdiw-vp-verifier-lite",
    "2026-09-02-telecom-credential-convenience-store-pickup",
  ],
  presentation: [
    "2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare",
    "2026-09-06-offline-wallet-verification",
  ],
  trust: ["2026-09-10-twdiw-ecosystem-monitor"],
};

const copy = {
  zh: {
    kicker: "DID / VC · 閱讀地圖",
    title: "一張憑證，走過哪些地方？",
    intro:
      "沿著發行、持有與驗證的流程閱讀，看看每一篇開發記錄補上了哪一塊。點文章標題閱讀 AI 實測報告，也可以接著看我的手寫手記。",
    count: "篇報告",
    flow: "憑證與出示流程",
    trustLine: "信任與狀態資料的關係",
    issue: "簽發憑證",
    present: "出示證明",
    request: "提出查驗要求",
    issuer: {
      title: "發行者",
      en: "Issuer",
      question: "誰來發卡？",
      desc: "確認資料、簽署憑證，交給持有者。",
      note: "「請收下卡片」發出虛構測試資料，用來走通領卡流程。",
    },
    holder: {
      title: "持有者",
      en: "Holder",
      question: "資料在誰手上？",
      desc: "把憑證與文件收進皮夾，決定何時出示。",
      note: "MyData 文件、收公文原型放在持有端；匯入文件本身不會讓它變成 VC。",
    },
    verifier: {
      title: "驗證者",
      en: "Verifier",
      question: "拿出來，能辦什麼事？",
      desc: "提出查驗要求，檢查證明並決定是否接受。",
      note: "從自架查驗器，到真實門市的超商取貨。",
    },
    trust: {
      title: "信任基礎",
      en: "Trust",
      question: "為什麼相信這張卡？",
      desc: "識別碼與公鑰、信任清單、憑證狀態，加上接受憑證的規則。",
      note: "儀表板觀察這些資料的變化；它本身不授予信任。",
    },
    presentation: {
      title: "持有者 → 驗證者",
      en: "Presentation",
      question: "出示時，可以少透露多少？可以離線嗎？",
      desc: "同一段出示流程的兩個延伸：證明的內容，以及傳送與驗證的方式。",
    },
    trustIssuer: "發布金鑰與狀態",
    trustHolder: "辨識對方與準備信任資料",
    trustVerifier: "查核簽章、信任與狀態",
    proof: "01 / 少透露 · 零知識證明",
    offline: "02 / 斷網也能出示 · 離線驗證",
    report: "AI 實測報告",
    hand: "手寫手記",
    source: "架構參考 W3C VC 2.0 的角色與信任模型。",
    boundary:
      "DID 提供識別與金鑰解析；VC 的驗證結果仍須搭配信任政策。圖中位置是文章的切入點，並非每個專案都採用同一套協定，也不表示所有 VC 都必須使用 DID 或區塊鏈。",
    more: "後續文章",
  },
  en: {
    kicker: "DID / VC · READING MAP",
    title: "Where does a credential go?",
    intro:
      "Follow issuance, holding, and verification to see which part each development story explores. Article titles open AI field reports; the accompanying links lead to my handwritten dev-logs.",
    count: "reports",
    flow: "Credential and presentation flow",
    trustLine: "Trust and status relationships",
    issue: "Issue a VC",
    present: "Present proof",
    request: "Request proof",
    issuer: {
      title: "Issuer",
      en: "ISSUANCE",
      question: "Who issues the card?",
      desc: "Confirm the data, sign a credential, and deliver it to a holder.",
      note: "“Accept This Card” issues fictional test data to exercise the issuance flow.",
    },
    holder: {
      title: "Holder",
      en: "WALLET",
      question: "Who keeps the data?",
      desc: "Keep credentials and documents in a wallet; choose when to present them.",
      note: "MyData files and the government-mail prototype belong on the holding side. Importing a file does not turn it into a VC.",
    },
    verifier: {
      title: "Verifier",
      en: "VERIFICATION",
      question: "What can you use it for?",
      desc: "Request proof, check it, and decide whether to accept it.",
      note: "From a self-hosted verifier to parcel pickup at a real convenience store.",
    },
    trust: {
      title: "Trust",
      en: "TRUST FRAMEWORK",
      question: "Why accept this credential?",
      desc: "Identifiers and public keys, trust lists, credential status, and acceptance rules.",
      note: "The dashboard observes changes to this information; it does not grant trust.",
    },
    presentation: {
      title: "Holder → Verifier",
      en: "PRESENTATION",
      question: "How little can you reveal? Can it work offline?",
      desc: "Two extensions of presentation: what you prove, and how you transmit and verify it.",
    },
    trustIssuer: "Publish keys and status",
    trustHolder: "Identify peers; prepare trust data",
    trustVerifier: "Check signatures, trust, status",
    proof: "01 / Reveal less · Zero-knowledge proofs",
    offline: "02 / Stay offline · Offline verification",
    report: "AI field report",
    hand: "Handwritten dev-log",
    source: "Roles and trust model adapted from W3C VC 2.0.",
    boundary:
      "DIDs support identification and key resolution; VC verification still needs a trust policy. Positions reflect each article’s focus, not a shared protocol for every project. VCs do not always require DIDs or a blockchain.",
    more: "Further reports",
  },
};

function RoleIcon({
  role,
}: {
  role: "issuer" | "holder" | "verifier" | "trust";
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {role === "issuer" && (
        <>
          <path d="m4 12 12-7 12 7H4Zm3 3v10m6-10v10m6-10v10m6-10v10M4 28h24" />
          <path d="M15 9h2" />
        </>
      )}
      {role === "holder" && (
        <>
          <rect x="5" y="9" width="23" height="19" rx="3" />
          <path d="M6 10V7a3 3 0 0 1 3-3h14v5m5 8h-7v6h7" />
          <circle cx="23.5" cy="20" r=".5" />
        </>
      )}
      {role === "verifier" && (
        <>
          <path d="m16 3 11 4v9c0 6-11 13-11 13S5 22 5 16V7L16 3Z" />
          <path d="m10 15 4 4 8-8" />
        </>
      )}
      {role === "trust" && (
        <>
          <circle cx="16" cy="6" r="3" />
          <circle cx="6" cy="25" r="3" />
          <circle cx="26" cy="25" r="3" />
          <path d="m14.5 9-7 13m11-13 7 13M9 25h14" />
          <circle cx="16" cy="19" r="3" />
        </>
      )}
    </svg>
  );
}

export default function WalletReadingMap({
  posts,
  companions,
  locale,
}: {
  posts: Post[];
  companions: SeriesCompanion[];
  locale: Locale;
}) {
  const t = copy[locale];
  const en = locale === "en";
  const reports = posts.filter(
    (post) => post.series === "ready-digital-government",
  );
  const bySlug = new Map(reports.map((post) => [post.id, post]));
  const hands = new Map(
    companions.map((companion) => [companion.reportSlug, companion.hand]),
  );
  const assigned = new Set(Object.values(articles).flat());
  // New series reports remain visible until their reading position is curated.
  const unplaced = reports.filter((post) => !assigned.has(post.id));

  function article(slug: string) {
    const post = bySlug.get(slug);
    if (!post) return null;
    const hand = hands.get(slug);
    return (
      <article className="walletmap__article" key={slug}>
        <a className="walletmap__report" href={post.href}>
          <span className="walletmap__meta">
            <span>
              #{String(post.seriesOrder ?? "").padStart(2, "0")} · {t.report}
            </span>
            <span aria-hidden="true">↗</span>
          </span>
          <h5>{post.title}</h5>
        </a>
        {hand && (
          <a
            className="walletmap__hand"
            href={en ? hand.hrefEn : hand.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t.hand} ↗</span>
            <span>{en ? hand.titleEn : hand.title}</span>
          </a>
        )}
      </article>
    );
  }

  function role(id: "issuer" | "holder" | "verifier") {
    const c = t[id];
    return (
      <section
        className={`walletmap__role walletmap__role--${id}`}
        aria-labelledby={`wallet-${id}`}
      >
        <header className="walletmap__role-head">
          <span className="walletmap__icon">
            <RoleIcon role={id} />
          </span>
          <div>
            <p className="walletmap__eyebrow">{c.en}</p>
            <h3 id={`wallet-${id}`}>{c.title}</h3>
          </div>
        </header>
        <h4 className="walletmap__question">{c.question}</h4>
        <p className="walletmap__description">{c.desc}</p>
        <div className="walletmap__articles">{articles[id].map(article)}</div>
        <p className="walletmap__note">{c.note}</p>
      </section>
    );
  }

  return (
    <section className="walletmap" aria-labelledby="walletmap-title">
      <header className="walletmap__head">
        <p className="walletmap__eyebrow">
          {t.kicker}
          <span>
            {reports.length} {t.count}
          </span>
        </p>
        <h2 id="walletmap-title">{t.title}</h2>
        <p>{t.intro}</p>
        <div className="walletmap__legend">
          <span>
            <i />
            {t.flow}
          </span>
          <span>
            <i className="walletmap__dash" />
            {t.trustLine}
          </span>
        </div>
      </header>
      <div className="walletmap__diagram">
        {role("issuer")}
        <div className="walletmap__flow walletmap__flow--issue">
          <span>{t.issue}</span>
          <i aria-hidden="true" />
          <small>VC · OID4VCI</small>
        </div>
        {role("holder")}
        <div className="walletmap__flow walletmap__flow--present">
          <span>{t.present}</span>
          <i aria-hidden="true" />
          <small>OID4VP</small>
          <span className="walletmap__request">
            <b aria-hidden="true">←</b> {t.request}
          </span>
        </div>
        {role("verifier")}

        <div className="walletmap__trust-bus">
          <div>
            <span>
              <b className="walletmap__mobile-role">{t.issuer.title} · </b>
              {t.trustIssuer}
            </span>
          </div>
          <div>
            <span>
              <b className="walletmap__mobile-role">{t.holder.title} · </b>
              {t.trustHolder}
            </span>
          </div>
          <div>
            <span>
              <b className="walletmap__mobile-role">{t.verifier.title} · </b>
              {t.trustVerifier}
            </span>
          </div>
        </div>

        <section className="walletmap__trust" aria-labelledby="wallet-trust">
          <header className="walletmap__role-head">
            <span className="walletmap__icon">
              <RoleIcon role="trust" />
            </span>
            <div>
              <p className="walletmap__eyebrow">{t.trust.en}</p>
              <h3 id="wallet-trust">{t.trust.title}</h3>
            </div>
          </header>
          <h4 className="walletmap__question">{t.trust.question}</h4>
          <p className="walletmap__description">{t.trust.desc}</p>
          {articles.trust.map(article)}
          <p className="walletmap__note">{t.trust.note}</p>
        </section>

        <section
          className="walletmap__presentation"
          aria-labelledby="wallet-presentation"
        >
          <p className="walletmap__eyebrow">{t.presentation.en}</p>
          <h3 id="wallet-presentation">{t.presentation.title}</h3>
          <h4 className="walletmap__question">{t.presentation.question}</h4>
          <p className="walletmap__description">{t.presentation.desc}</p>
          <div className="walletmap__proofs">
            {articles.presentation.map((slug, index) => (
              <div key={slug}>
                <p className="walletmap__proof-label">
                  {index === 0 ? t.proof : t.offline}
                </p>
                {article(slug)}
              </div>
            ))}
          </div>
        </section>
      </div>
      {unplaced.length > 0 && (
        <section className="walletmap__unplaced">
          <h3>{t.more}</h3>
          {unplaced.map((post) => article(post.id))}
        </section>
      )}
      <footer className="walletmap__caption">
        <a
          href="https://www.w3.org/TR/vc-data-model-2.0/#ecosystem-overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.source} ↗
        </a>
        <p>{t.boundary}</p>
      </footer>
    </section>
  );
}
