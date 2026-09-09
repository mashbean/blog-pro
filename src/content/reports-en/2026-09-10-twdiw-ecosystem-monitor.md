---
title: "The Ecosystem Monitor: A Daily Dashboard for the Trust and Revocation Data the Government Never Published"
description: "The trust list, revocation lists, on-chain records, and endpoint health of Taiwan's digital credential wallet are scattered across different places, and the government publishes no single page that brings them together. The `/monitor` in twdiw-vc-issuer-lite scans once a day, records only changes, and reverse-enumerates each issuer's revocation list from already-issued cards. This report documents what it watches, how it watches, and what it explicitly cannot do."
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "信任根與信任清單", "個資保護", "資安", "開源", "Cloudflare", "台灣"]
keywords: ["監測儀表板", "twdiw-vc-issuer-lite", "數位憑證皮夾", "信任清單", "撤銷清單", "StatusList2021", "OID4VCI", "did:key", "Arbitrum", "區塊鏈", "EUDI Wallet", "請收下卡片", "請出示皮夾", "公共程式"]
pubDate: 2026-09-10
draft: false
lang: "en"
translationOf: "2026-09-10-twdiw-ecosystem-monitor"
translatedBy: "Claude Opus 4.8"
translatedDate: 2026-09-10
aiModel: "Anthropic Claude Opus 4.8"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-10-twdiw-ecosystem-monitor"
aiGeneratedDate: 2026-09-10
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 8
slug: "2026-09-10-twdiw-ecosystem-monitor"
---

*English translation of the original Chinese report published on 10 September 2026. Where the two differ, the Chinese version is authoritative.*

_This is the eighth report in the series "Bonds (有備而來): Development Reports on an Ideal Digital Wallet". It is written from the public source code, README, monitoring code such as `src/probes.ts` of [twdiw-vc-issuer-lite](https://github.com/mashbean/twdiw-vc-issuer-lite) as of 10 September 2026, together with that day's data from the demo site [issuer.mashbean.net/monitor](https://issuer.mashbean.net/monitor). The dashboard reads the public endpoints of Taiwan's digital credential wallet ecosystem; it neither accepts nor stores any personal data. The statistics in this report, such as the revocation counts, are single-day, single-point observations with limited coverage._

The seventh report compressed the build cost of the issuer side down to a single Cloudflare Worker, producing [Accept This Card](/en/reports/2026-09-09-one-click-twdiw-vc-issuer-lite/). After running through the full round of issuance, trust list, and revocation list, another problem surfaced. The public information needed to judge whether the wallet ecosystem is healthy is scattered across different APIs and a blockchain, and the government publishes no single page that integrates it for a reader. The same Worker therefore grew an extra `/monitor` block that scans once a day and records only changes.

## The dashboard watches six things

`/monitor` scans once a day at 02:00 UTC (10:00 Taiwan time), breaking the ecosystem into six aspects and writing the difference between the current day and the previous day into a timeline.

<div class="table-scroll">

| Aspect | What is observed |
| --- | --- |
| API health | The reachability and latency of endpoints such as the official trust list API, the new-card application catalog, the digital credential wallet's official site, and the official sandbox issuer, and whether the shape of the responses still matches the fields wallets depend on |
| Issuance end-to-end self-check | The Worker plays the role of a wallet itself and walks through offer, token, proof, card collection, and verification, confirming that the issuance flow can still succeed |
| Trust list | The total number of registered DIDs and their role distribution, plus who joined, left, was renamed, or changed endpoints |
| Revocation list | The StatusList2021 bitmap at known URLs, the number of already-revoked cards, and whether the signing key is present within the issuer's `did:key` |
| Blockchain | Fetching the official-named Arbitrum transactions to compare their content, then checking the contract's current record, to prevent old registrations from being replayed |
| Source code | The last update, open issues, and license of the official wallet app and related repos, reflecting how actively they are maintained |

</div>

There is one easily overlooked point in the criteria for API health. Reachability returning 200 only means the server is still alive; the moment a field is renamed, it is effectively broken for any wallet that depends on that field. The monitoring code therefore attaches a shape check to each endpoint. For example, the official verification endpoint must return a `profiles` array, and this site's issuer metadata must contain a `credential_endpoint` string; anything that does not match the shape is flagged as anomalous.

## The revocation list is reverse-enumerated

The government currently publishes no revocation list, nor any central page that announces one. The dashboard's revocation data comes from reverse-enumerating already-issued cards. Concretely, the flow walks the official trust list once a day, requests each issuer's OID4VCI metadata to obtain its card types, then reads out the StatusList2021 revocation list behind each card type one by one and counts the bits. On the observed day, about 60 lists were seen, totaling 14,604 revocations.

This reverse enumeration reveals several pieces of information not normally visible. The following are single-day, single-point observations and do not represent the whole picture.

The mobile-number verification cards of the three major telecom carriers all carry a large number of revocation records, of which Taiwan Mobile has about 9,536; Chunghwa Telecom and FarEasTone combined amount to less than half of Taiwan Mobile. Revocation volume can serve as an indirect indicator of issuance scale. For the driver's license verification card, no corresponding revocation list could be found.

On the trust list appeared a batch of Huayang cards issued by Jcard (backed by Acer's investment) for "Zhongxinxing Village," including door cards, membership cards, and loyalty cards, with a revocation count of 0, suggesting they are not yet formally live. Several universities already support degree-certificate cards in the digital wallet, including NTU, NCKU, and NTUST, and some universities issue digital staff-ID cards. Other cards that may already be live also include the business certificate, a login identifier for the Ministry of Education's student aid subsidy system, and a visitor card for a Chunghwa Telecom enterprise branch office.

Worth noting is that on the revocation list of the production system there simultaneously appeared a batch of cards named with a testing character, such as sheep, dolly, cookies, and fries. Such cards are more likely to be test data. Test cards appearing on the production revocation list amounts to the boundary between staging and production data in the development process not being clearly separated. The revocation list is not currently public, and placing test cards there carries no substantive risk in itself, but from a data-hygiene standpoint the production environment ought to be separated from the test environment.

## Why public data needs to be human-readable

Beyond machine-verifiability, digital trust equally requires human-readability. Each issuer's `did:key` in the official trust list ought to be presented in full, because when a wallet reads an interaction between an issuer and a verifier, it needs to confirm that the party is genuine. The official wallet app currently interacts with these parties via an internally locked whitelist, and the whitelist itself has no outward, human-readable entry point.

The maintenance cost of a whitelist scheme rises markedly in a cross-border context. The EU Digital Identity Wallet (EUDI Wallet) is being rolled out across member states, and its trust list will be published together with the existing electronic-signature system. If Taiwan's wallet is to accept credentials presented by EU issuers, then absent an interoperable public trust list, in practice a warning will appear, or it may even be impossible to obtain the other party's card. Organizing public data into a human-readable form is one of the prerequisites for cross-domain interoperability.

The trust list and the revocation list are two sides of the same coin. Holding a driver's license verification card only proves that it was once obtained; it does not mean it is currently valid. If the license is revoked for some reason, a corresponding record will appear on the revocation list. A verifier therefore needs, beyond reading the card, an additional step of checking the revocation status, and this step is precisely the precondition for scenarios such as car rental to dare to trust a digital credential. Only when API health, the trust list, and the revocation list are all disclosed together is the ecosystem's trustworthiness state complete.

## On-chain comparison and an observation about cost

The Ministry of Digital Affairs's trust list is currently preserved on-chain, on Arbitrum. The dashboard does not take the API's claim about being on-chain on faith; instead it fetches the official-named Arbitrum transactions to compare their content, then checks the contract's current record, to prevent old registrations from being replayed. On the observed day, 41 on-chain records were consistent with the official centralized storage.

On cost, Ethereum mainnet's fees have now dropped substantially, so the layer-two Arbitrum is not necessary for this purpose, and the two are both EVM, so migration cost is low. Any third party could also write a smart contract to fetch the official data and deploy an on-chain trust list of its own. But third-party deployment would lose the authoritative-source meaning conferred by "official operation"; the value of an on-chain trust list still depends on being maintained by the government.

## Issue monitoring and the boundary of public code

The dashboard also has a block that tracks the update time and issue-response status of the official related repos. One reason for setting up this block is that during development several security risks were found that need fixing; their severity does not reach critical, but they concern selective disclosure not yet reaching full selective disclosure. The relevant details have already been filed as issues, and the government's response timeline needs to be tracked.

This also constitutes a concrete test of the spirit of public code (公共程式). The premise of public code is that the source is actually maintained by someone; otherwise it is public in name only. As things stand, code written by an individual cannot be contributed to the Ministry of Digital Affairs's public-code platform, because eligibility is limited to government agencies or vendors that receive government commissions or subsidies, and an ordinary developer cannot even complete a login. On the licensing side, the contagious copyleft GPL-3.0 was chosen, and its compatibility with the public-code platform therefore cannot be tested in practice either.

## The limits the dashboard explicitly states

The monitoring code states on the page what it cannot do, to avoid being taken as an authoritative source of health status. It is a single-point observation; the revocation coverage is limited by the card types and list URLs it can enumerate; it cannot see TLS certificate status; and the data may be up to 24 hours old. Changes are published as a [JSON Feed](https://issuer.mashbean.net/monitor/feed.json) and Atom, pushing only changes, never "everything is fine today." The GitHub and Arbitrum blocks each require one optional secret to run fully every day; when unset, that cell is marked as unable to look it up, rather than passing off a blank as normal.

## Only when all three are disclosed together can the ecosystem be seen clearly

After the issuer and verifier sides were brought down to one-click deployment, the data needed to judge whether the whole ecosystem is healthy is still scattered across multiple endpoints and one blockchain. Only when API health, the trust list, and the revocation list are presented together, plus on-chain comparison and source-code activity, can an outside observer see clearly the current state of this piece of public infrastructure and its difference from yesterday. This kind of public data should ideally be deployed on a human-readable gov.tw domain and disclosed by the government in an integrated way; until then, an open-source dashboard that scans daily, records only changes, and honestly states its own limits provides a verifiable reference implementation.

＊

Source code: [github.com/mashbean/twdiw-vc-issuer-lite](https://github.com/mashbean/twdiw-vc-issuer-lite) (GPL-3.0). Monitoring dashboard: [issuer.mashbean.net/monitor](https://issuer.mashbean.net/monitor). Sister report "Accept This Card": [Accept This Card: Turning Digital Wallet Issuance into a One-Click Open-Source Service](/en/reports/2026-09-09-one-click-twdiw-vc-issuer-lite/).
