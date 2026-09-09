// 系列首頁的擴充資料。
//
// 一般系列在 ?series=<id> 只是首頁套一層篩選；有些系列（像有備而來）
// 需要一個真正的落地頁：專案連結、原始碼，以及每篇實測報告對應到
// mashbean.net 上那篇第一人稱開發手記。這些對照關係無法從 reports
// collection 自動推導（手記在另一個站），所以在這裡明列。
//
// title / blurb 仍來自 taxonomy 的 seriesMeta，不在這裡重複。
// zh 與 en 兩版都放這裡；en 頁的手記連結指向 mashbean.net 的 ?lang=en
// deep link（那邊同一網址前端切換語言）。

export interface SeriesLink {
  label: string;
  /** 英文版顯示名（沒有時沿用 label）。 */
  labelEn?: string;
  href: string;
  note: string;
  noteEn: string;
}

export interface SeriesHero {
  src: string;
  alt: string;
  altEn: string;
}

/** 一篇 mashbean.net 上的手寫手記；報告可能還沒有對應手記（hand 省略）。 */
export interface CompanionHand {
  title: string;
  titleEn: string;
  href: string;
  hrefEn: string;
}

export interface SeriesCompanion {
  /** 對應的 report id（reports collection 的 slug），用來對齊實測報告。 */
  reportSlug: string;
  /** 對應的手寫手記；沒有時這列只有報告側。 */
  hand?: CompanionHand;
}

export interface SeriesLanding {
  hero?: SeriesHero;
  links: SeriesLink[];
  companionsLead: string;
  companionsLeadEn: string;
  companions: SeriesCompanion[];
}

const MB = "https://mashbean.net/blog";

export const SERIES_LANDING: Record<string, SeriesLanding> = {
  "ready-digital-government": {
    hero: {
      src: "/images/series/bonds-hero.jpg",
      alt: "有備而來（Bonds）主視覺：暗夜森林裡，動物們各自捧著一罐發光的螢火，頭頂串著燈——斷網時仍然有光。",
      altEn: "Bonds key art: in a dark forest, animals each hold a jar of glowing fireflies under a string of lights — there is still light when the network is down.",
    },
    links: [
      {
        label: "有備而來 bonds.tw",
        labelEn: "Bonds bonds.tw",
        href: "https://bonds.tw/",
        note: "專案網站",
        noteEn: "Project site",
      },
      {
        label: "backupTW-iOS",
        href: "https://github.com/bonds-tw/backupTW-iOS",
        note: "App 原始碼",
        noteEn: "App source",
      },
      {
        label: "twdiw-vp-verifier-lite",
        href: "https://github.com/mashbean/twdiw-vp-verifier-lite",
        note: "「請出示皮夾」驗證器原始碼",
        noteEn: "“Show Your Wallet” verifier source",
      },
      {
        label: "twdiw-vc-issuer-lite",
        href: "https://github.com/mashbean/twdiw-vc-issuer-lite",
        note: "「請收下卡片」發卡端原始碼",
        noteEn: "“Accept This Card” issuer source",
      },
    ],
    companionsLead:
      "每一篇實測報告，都有一篇 mashbean.net 上的第一人稱開發手記對照：這裡看得到當下的取捨與心情，實測報告則收斂成可測試、可採購的系統需求。",
    companionsLeadEn:
      "Each field report has a first-person dev-log on mashbean.net alongside it: the log shows the choices and the mood of the moment, while the report distils it into testable, procurable system requirements.",
    companions: [
      {
        reportSlug: "2026-09-01-natural-person-certificate-official-documents",
        hand: {
          title: "實驗：用數位皮夾收公文",
          titleEn: "Experiment: Receiving Official Government Mail in a Digital Wallet",
          href: `${MB}/2026/0901-1sefaj/`,
          hrefEn: `${MB}/2026/0901-1sefaj/?lang=en`,
        },
      },
      {
        reportSlug: "2026-09-02-telecom-credential-convenience-store-pickup",
        hand: {
          title: "成功用自己寫的數位皮夾實現超商取貨",
          titleEn: "I Picked Up a Convenience-Store Parcel with My Own Digital Wallet",
          href: `${MB}/2026/0903-rphhg9/`,
          hrefEn: `${MB}/2026/0903-rphhg9/?lang=en`,
        },
      },
      {
        reportSlug: "2026-09-03-one-click-twdiw-vp-verifier-lite",
        hand: {
          title: "請出示皮夾",
          titleEn: "Show Your Wallet",
          href: `${MB}/2026/0903-1x7p95/`,
          hrefEn: `${MB}/2026/0903-1x7p95/?lang=en`,
        },
      },
      {
        reportSlug: "2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare",
        hand: {
          title: "數位皮夾支援「零知識證明」成就達成 🏆",
          titleEn: "Achievement Unlocked: Zero-Knowledge Proofs in the Digital Wallet 🏆",
          href: `${MB}/2026/0904-1ui0is/`,
          hrefEn: `${MB}/2026/0904-1ui0is/?lang=en`,
        },
      },
      {
        reportSlug: "2026-09-05-mydata-vault-in-the-digital-wallet",
        hand: {
          title: "成功讓數位皮夾變成 MyData 的資料保險箱",
          titleEn: "Turning the Digital Wallet into a MyData Vault",
          href: `${MB}/2026/0908-1io9zk/`,
          hrefEn: `${MB}/2026/0908-1io9zk/?lang=en`,
        },
      },
      {
        reportSlug: "2026-09-06-offline-wallet-verification",
        hand: {
          title: "我用數位皮夾實現「離線驗證」了！✈️",
          titleEn: "I Got Two Digital Wallets to Verify Each Other Offline! ✈️",
          href: `${MB}/2026/0906-htz4c5/`,
          hrefEn: `${MB}/2026/0906-htz4c5/?lang=en`,
        },
      },
      {
        // 發卡端報告；手記之後補，這列先只有報告側。
        reportSlug: "2026-09-09-one-click-twdiw-vc-issuer-lite",
      },
      {
        reportSlug: "2026-09-10-twdiw-ecosystem-monitor",
        hand: {
          title: "完成監測儀表板，意外發現官方羊羊卡、薯條卡？XD",
          titleEn: "I Built a Monitoring Dashboard (and Found Official Sheep & Fries Cards) XD",
          href: `${MB}/2026/0910-1a1ova/`,
          hrefEn: `${MB}/2026/0910-1a1ova/?lang=en`,
        },
      },
    ],
  },
};

export function seriesLanding(id: string | null | undefined): SeriesLanding | undefined {
  if (!id) return undefined;
  return SERIES_LANDING[id];
}
