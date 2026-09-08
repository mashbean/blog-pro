// 系列首頁的擴充資料。
//
// 一般系列在 ?series=<id> 只是首頁套一層篩選；有些系列（像有備而來）
// 需要一個真正的落地頁：專案連結、原始碼、以及每篇實測報告對應到
// mashbean.net 上那篇第一人稱開發手記。這些對照關係無法從 reports
// collection 自動推導（手記在另一個站），所以在這裡明列。
//
// title / blurb 仍來自 taxonomy 的 seriesMeta，不在這裡重複。

export interface SeriesLink {
  /** 顯示文字。 */
  label: string;
  /** 連結網址（外站）。 */
  href: string;
  /** 副標，說明這條連結是什麼。 */
  note?: string;
}

export interface SeriesCompanion {
  /** 對應的 report id（reports collection 的 slug），用來對齊實測報告。 */
  reportSlug: string;
  /** mashbean.net 上開發手記的標題。 */
  title: string;
  /** mashbean.net 上開發手記的網址。 */
  href: string;
  /** 縮圖，沿用實測報告裡的真機截圖（放在本站 /images/reports 下）。 */
  thumb: string;
  thumbAlt: string;
}

export interface SeriesLanding {
  /** 專案／原始碼等外部連結。 */
  links: SeriesLink[];
  /** 手記對照區的引言。 */
  companionsLead: string;
  /** 每篇實測報告對應的 mashbean.net 開發手記。 */
  companions: SeriesCompanion[];
}

export const SERIES_LANDING: Record<string, SeriesLanding> = {
  "ready-digital-government": {
    links: [
      {
        label: "有備而來 bonds.tw",
        href: "https://bonds.tw/",
        note: "專案網站",
      },
      {
        label: "backupTW-iOS",
        href: "https://github.com/bonds-tw/backupTW-iOS",
        note: "App 原始碼",
      },
      {
        label: "twdiw-vp-verifier-lite",
        href: "https://github.com/mashbean/twdiw-vp-verifier-lite",
        note: "「請出示皮夾」驗證器原始碼",
      },
    ],
    companionsLead:
      "每一篇實測報告，都有一篇 mashbean.net 上的第一人稱開發手記對照：這裡看得到當下的取捨與心情，實測報告則收斂成可測試、可採購的系統需求。",
    companions: [
      {
        reportSlug: "2026-09-01-natural-person-certificate-official-documents",
        title: "實驗：用數位皮夾收公文",
        href: "https://mashbean.net/blog/2026/0901-1sefaj/",
        thumb: "/images/reports/natural-person-official-documents/ready-home-vault.png",
        thumbAlt: "有備而來首頁與 MyData 資料保險箱",
      },
      {
        reportSlug: "2026-09-02-telecom-credential-convenience-store-pickup",
        title: "成功用自己寫的數位皮夾實現超商取貨",
        href: "https://mashbean.net/blog/2026/0903-rphhg9/",
        thumb: "/images/reports/telecom-credential-store-pickup/wallet-credential-overview.webp",
        thumbAlt: "有備而來首頁同時顯示自簽國民身分證、駕照電子卡與門號電子卡",
      },
      {
        reportSlug: "2026-09-03-one-click-twdiw-vp-verifier-lite",
        title: "請出示皮夾",
        href: "https://mashbean.net/blog/2026/0903-1x7p95/",
        thumb: "/images/reports/twdiw-vp-verifier-lite/verifier-landing.png",
        thumbAlt: "請出示皮夾首頁，輕量化查驗證件、支援數位皮夾",
      },
      {
        reportSlug: "2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare",
        title: "數位皮夾支援「零知識證明」成就達成 🏆",
        href: "https://mashbean.net/blog/2026/0904-1ui0is/",
        thumb: "/images/reports/zero-knowledge-age-proof/zkp-builder.png",
        thumbAlt: "建立一筆零知識年齡查驗的頁面",
      },
      {
        reportSlug: "2026-09-05-mydata-vault-in-the-digital-wallet",
        title: "成功讓數位皮夾變成 MyData 的資料保險箱",
        href: "https://mashbean.net/blog/2026/0908-1io9zk/",
        thumb: "/images/reports/mydata-vault/wallet-vault-list.jpg",
        thumbAlt: "有備而來的 MyData 資料保險箱文件清單",
      },
      {
        reportSlug: "2026-09-06-offline-wallet-verification",
        title: "我用數位皮夾實現「離線驗證」了！✈️",
        href: "https://mashbean.net/blog/2026/0906-htz4c5/",
        thumb: "/images/reports/offline-wallet-verification/ipad-mydata-zkp-success.jpg",
        thumbAlt: "iPad 完成 MyData 數位身分證的離線零知識證明查驗",
      },
    ],
  },
};

export function seriesLanding(id: string | null | undefined): SeriesLanding | undefined {
  if (!id) return undefined;
  return SERIES_LANDING[id];
}
