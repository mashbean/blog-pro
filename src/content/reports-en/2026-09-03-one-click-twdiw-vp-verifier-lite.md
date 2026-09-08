---
title: "Show Your Wallet: Turning Digital Wallet Verification into a One-Click Open-Source Service"
description: "From compatibility debugging against the official wallet, the Cloudflare architecture, and real-device tests to zero persistence of personal data: a record of how the open-source verifier Show Your Wallet was built and where its governance boundaries lie."
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "OpenID4VP", "個資保護", "隱私", "資安", "開源", "Cloudflare", "台灣"]
keywords: ["請出示皮夾", "數位憑證皮夾", "有備而來", "TWDIW", "OpenID4VP", "OIDC4VP", "Presentation Exchange", "SD-JWT VC", "Durable Objects", "個人資料保護法", "一鍵部署", "did:key"]
pubDate: 2026-09-03
draft: false
lang: "en"
translationOf: "2026-09-03-one-click-twdiw-vp-verifier-lite"
translatedBy: "Claude Fable 5.1"
translatedDate: 2026-09-08
aiModel: "OpenAI GPT-5.6"
aiPrompt: "依公開原始碼、Cloudflare 實作、數位發展部文件、開發 commit、資安檢查與兩款皮夾的實機測試紀錄，撰寫一鍵部署數位皮夾驗證器的開發及個資治理報告。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-03-one-click-twdiw-vp-verifier-lite"
aiGeneratedDate: 2026-09-03
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 5
slug: "2026-09-03-one-click-twdiw-vp-verifier-lite"
---

*English translation of the original Chinese report published on 3 September 2026. Where the two differ, the Chinese version is authoritative.*

_This is the third report in the series "Bonds (有備而來): Development Reports on an Ideal Digital Wallet". It is written from the public source code, the Cloudflare deployment, hands-on device operation, and automated tests as of 3 September 2026. "Show Your Wallet" (請出示皮夾), the TWDIW VP Verifier Lite, is an interoperability test site maintained independently by mashbean. It has not obtained official verifier status from the Ministry of Digital Affairs (moda), and it is not suited to taking on high-risk identity decisions directly. When tests use real credentials, only the stage, result, elapsed time, and error type are recorded. Public articles and issues do not include QR codes, presentations, disclosed fields, or holder data._

The first two reports started from the holder's side. The first put the Citizen Digital Certificate (自然人憑證), MyData, and receipt of official electronic documents into Bonds. The second used a Taiwan Mobile telecom credential (mobile-number credential) to complete a parcel pickup at a production 7-ELEVEN store. The third report moves to the other side of the counter and deals with a more basic question. Without a government project budget, a Java backend, or a dedicated database, can an ordinary business stand up a service that verifies digital credentials?

I turned the answer into ["Show Your Wallet"](https://verifier.mashbean.net/). It is an open-source verifier running on Cloudflare Workers. By default it talks to moda's Digital Credential Wallet (TWDIW), and it also offers a Bonds compatibility mode. Users can choose scenarios such as checking a name, the last five digits of a mobile number, the driver's licence class, or the national ID number. Developers can fork the [GPL-3.0 source code](https://github.com/mashbean/twdiw-vp-verifier-lite), create their own site with Cloudflare's deploy button, or embed it into existing flows through the API.

<figure>
  <a href="/images/reports/twdiw-vp-verifier-lite/verifier-landing.png" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, Show Your Wallet home page">
    <img src="/images/reports/twdiw-vp-verifier-lite/verifier-landing.png" alt="Show Your Wallet home page listing public testing, creating a verification service, selective disclosure, Cloudflare one-click deployment, and the open-source licence" width="1259" height="720" loading="lazy" />
  </a>
  <figcaption><em>Figure 1. "Show Your Wallet" puts public testing and business deployment behind the same entrance. The home page states clearly that this is an independent test site built from public source code and does not represent official certification.</em></figcaption>
</figure>

## Starting from a page that can show a QR code

The smallest unit of work in the verifier is a short-lived session. After the browser selects a verification purpose, the Worker creates a `nonce`, a `state`, the verification scenario, and the requested fields, then signs the Authorization Request with the verifier's own P-256 `did:key`. The QR code shown on the page carries only `client_id` and `request_uri`. The holder's name, phone number, national ID number, and other credential contents are not packed into the QR code in advance.

After scanning, the wallet fetches the signed request, lets the holder confirm the card and the fields to disclose, and then submits the presentation via `direct_post`. Within the memory of a single execution, the Worker completes the checks on issuer trust, the credential signature, the SD-JWT disclosures, the holder proof, `nonce`, `audience`, `cnf.jwk`, and the status list, and finally applies the scenario rules.

The verification result is split into three layers.

| Layer | Question it answers | Inference it must not make |
| --- | --- | --- |
| Issuer trust | Whether the issuer is enabled in the official DID API, and whether the API also provides on-chain transaction records | On-chain records cannot replace the enabled status in the official API |
| Cryptographic evidence | Whether the card, the disclosures, and the holder proof pass, and whether they are bound to this nonce and the verifier audience | A valid signature does not mean the underlying entitlement is still valid |
| Business decision | Whether the name, last five digits, card type, or condition requested this time holds | A matching name alone cannot prove it is the same person |

With this split, when a driver's licence signature is valid but the revocation status is `unknown`, the page can show the evidence that has been completed while keeping the warning that "it cannot be confirmed that the licence is still valid". Compressing every status into a single green check would lead the verifier to believe that cryptographic success already covers administrative status, present possession, and business eligibility.

## The compatibility reality exposed by the official wallet

The first version followed the common Presentation Exchange pattern and asked directly for `$.credentialSubject.name`. Bonds could understand this request, but the official TWDIW showed `No credentials available for authorization`. The wallet had not even reached the holder consent step. The problem occurred at card matching.

I compared moda's public [TWDIW official app](https://github.com/moda-gov-tw/TWDIW-official-app) against the production 7-ELEVEN pickup request before finding the specific profile used by the official implementation. The first field of each input descriptor matches `$.type` first, the filter uses `contains.const` to specify the card type, and only then are the claims to disclose listed. The convenience-store pickup also splits the name and the last five digits into two groups, each offering the types for Chunghwa Telecom, Far EasTone, and Taiwan Mobile, for six descriptors in total.

This difference led to three changes.

1. Official TWDIW requests now use `modadigitalwallet://authorize`, Presentation Exchange, and specific card types, and no longer carry DCQL that would interfere with card matching in the official SDK.
2. Bonds keeps the `openid4vp://` compatible entry point and retains the DCQL migration experiment. On iOS, if another wallet has registered the same custom URL scheme, a website cannot specify which app to open, so Bonds mode relies mainly on cross-device scanning.
3. The same credential may appear twice in a convenience-store pickup, once for each disclosure group. The verifier must confirm that both come from the same issuer JWT, then merge the name and the last five digits. It must not treat the second as a replay or as two different cards.

After the fix, the official wallet can complete the convenience-store pickup presentation with a telecom credential. A later attempt to check the name on its own still produced `[1] unknown error`, for the same reason. A generic descriptor with only a claim path and no card type is still not specific enough for the official wallet. The current version expands the name check into alternatives covering three telecom credentials and two driver's licence credentials, and the related request shapes are now in the automated tests. The latest real-device retest of this item must be recorded separately from the convenience-store pickup that has already been confirmed.

MyData self-issued credentials hit a different class of error. When the presentation holder and the credential subject use equivalent `did:key` values in different representations, a direct string comparison wrongly reports a mismatch. After the fix, the public key is parsed first and the cryptographic identity is compared. Each card still keeps its own holder key and Citizen Digital Certificate signature. Holder binding is not dropped because the verifier relaxed the string format.

This debugging shows that "supports OpenID4VP" is not precise enough. The current Taiwanese wallets use Presentation Exchange and the card naming rules of the deployment; [OpenID4VP 1.0 Final](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html) uses DCQL as its primary query language. Show Your Wallet implements a TWDIW compatibility profile plus one compatibility path toward the Final specification. It does not claim to have passed the OpenID Foundation conformance suite.

## Test results as of 3 September

The test report deliberately separates program verification, the online service, and real-device interoperability. A pass in any one row does not stand in for the others.

| Test area | Method | Result | Evidence boundary |
| --- | --- | --- | --- |
| Unit and integration tests | Vitest, 12 files | 86 passed | Uses de-identified fixtures, no real government cards |
| TypeScript | `tsc --noEmit` | Passed | Confirms types, does not mean protocol interoperability |
| Cloudflare build | Wrangler 4.128.0 dry-run | Passed | The Worker bundle and two Durable Object bindings build; no real-device presentation was run |
| Online interface | `verifier.mashbean.net` home page, profiles, signed request, and security headers | Passed | HTTP and request structure checks |
| Official TWDIW + telecom credential | iPhone scanning a cross-device convenience-store pickup request | Passed on a real device | Name and last-five-digits presentation received; no store pickup QR code was generated on this site |
| Official TWDIW + name only | Specific card-type alternatives | Fix deployed, awaiting the latest real-device confirmation | The earlier generic request produced `[1] unknown error` |
| Bonds + government cards | Name, driver's licence, national ID number, and similar scenarios | Some paths completed | The app is not yet publicly released and remains a development-test compatibility layer |
| Bonds + MyData self-issued credentials | Per-card holder key, MOICA signature, and field-by-field disclosure | Verifier fix and tests passed; the real-device matrix is not closed | Older cards do not support field-by-field disclosure and must be re-created with the new app version |

The convenience-store pickup here verifies only the first half of OpenID4VP. The production store test in the second report used the official verifier module to obtain an encrypted pickup QR code, and the 7-ELEVEN POS completed the handover. Show Your Wallet has no store-side keys and should not simulate issuing a redeemable production barcode. Its job is to let an ordinary service build the entry point for "which evidence the holder is asked to present".

The automated tests currently cover the official card-type descriptors, the two groups of three-carrier pickup requests, presentation submission mapping, merging multiple disclosure groups from the same card, SD-JWT and the status list, holder binding, the government trust API, MOICA self-issued credentials, the personal data category mapping, and the one-time result capability. The next round of real-device tests still has to cover different carriers, government identity data, driver's licences, old-card upgrades, timeouts, replays, network interruptions, and same-phone app switching.

## The personal data module comes before the QR code

Even if the verifier writes nothing to a database, the Worker still obtains the name, national ID number, or other fields in memory and forms a decision. Under Article 2 of the [Personal Data Protection Act](https://law.pdpc.gov.tw/LawContent.aspx?id=FL010627) (個人資料保護法), collection does not require long-term storage as a condition. Zero persistence does not remove the duties of a lawful basis, notice, purpose limitation, data minimisation, and security maintenance.

The page therefore adds a purpose-linked personal data notice before creating the QR code. When switching between "check name" and "convenience-store pickup", the data categories, fields, purpose, consequences of refusal, and retention period change together. `name` and `phonel5` map to C001, the national ID number maps to C003, the adult predicate and nationality fields map to C011, and the driver's licence class maps to C039. The category names follow the [Specific Purposes and Categories of Personal Data](https://law.pdpc.gov.tw/LawContent.aspx?id=FL010631) (特定目的及個人資料類別) published by the Personal Data Protection Commission.

<figure>
  <a href="/images/reports/twdiw-vp-verifier-lite/verifier-privacy-notice.png" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, Show Your Wallet personal data notice module">
    <img src="/images/reports/twdiw-vp-verifier-lite/verifier-privacy-notice.png" alt="Show Your Wallet showing the required fields, the C001 data category, the retention period, and the verifier confirmation field for the name-check scenario" width="1259" height="720" loading="lazy" />
  </a>
  <figcaption><em>Figure 2. The personal data notice updates with the verification purpose. The checkbox on screen is the verifier confirming that it understands the purpose and will give the notice to the holder. It cannot replace the holder's decision to present inside the wallet, and it is not a blanket consent receipt.</em></figcaption>
</figure>

Zero persistence is implemented through data-flow restrictions.

- The `PresentationSession` Durable Object stores only what the exchange needs: the `nonce`, `state`, result capability, profile, wallet type, names of the requested fields, and creation time.
- The presentation, credential, disclosed values, and final result exist only in the memory of a single Worker execution. They are not written to Durable Objects, KV, D1, R2, application logs, or analytics.
- The result has no polling URL. The verifier page first opens a same-origin WebSocket, then submits the 256-bit `resultKey` as the first message. This capability is not placed in the QR code, the URL, or the signed request.
- After the result reaches the authorised WebSocket, the session calls `deleteAll()`. Unfinished sessions live at most ten minutes and are cleared by an alarm.
- The verifier screen offers immediate clearing and automatically removes the result from the DOM two minutes after it is shown. When the result arrives, the WebSocket handlers and the front-end socket reference are also released, shortening the lifetime of the capability in browser memory.
- `VerifierIdentity` is a separate Durable Object. It stores only this deployment's P-256 private key and stable `did:key`, and never touches holder presentations. Changing the namespace arbitrarily would re-issue the verifier identity, so the demo site deployment keeps its existing namespace.

Cloudflare's [documentation](https://developers.cloudflare.com/durable-objects/best-practices/rules-of-durable-objects/) states that `deleteAll()` is the complete operation for clearing Durable Object storage. With a compatibility date after 24 February 2026, alarms are deleted as well. Both Wrangler configurations disable observability, invocation logs, and traces, and the code has no third-party scripts, fonts, or analytics.

These controls shrink the data surface that could be leaked or reused. They do not remove Cloudflare from the data flow. TLS connections, request handling, and infrastructure metadata still pass through Cloudflare. Anyone self-hosting who enables Workers Logs, Logpush, Web Analytics, error tracking, or a reverse proxy must re-check whether URLs, bodies, and verification results are being stored. Nor can they claim that data is processed only in Taiwan without a regional restriction in place.

The demo site does not keep records of notice checkboxes or consent receipts. This suits low-risk, one-off research tests, but it cannot provide a transaction audit trail later. A production service that needs to trace responsibility should separately design a minimal proof of the notice version, while avoiding keeping the full credential and claims together with it.

## Design changes from the security review

The [source code security review](https://github.com/mashbean/twdiw-vp-verifier-lite/blob/main/docs/security-audit-2026-09-03.md) of 3 September 2026 found two issues that needed immediate fixes. Early versions wrote the claims, decision, and issuer trust back into the session and deleted them only after ten minutes. The result-query capability had also been placed in the query string. The current version removes both data paths and uses in-memory verification and a WebSocket message capability instead.

The remaining protections include a 512 KB limit on the presentation body, an 8 KB limit on verification creation, a JOSE algorithm allowlist, `Cache-Control: no-store`, a same-origin Content Security Policy, HSTS, COOP, `no-referrer`, `nosniff`, and SSRF protection for status list URLs. External URLs must be public HTTPS hostnames. Credentials, literal IPs, localhost, redirects, timeouts, and oversized responses are rejected.

The remaining risks are not hidden in an appendix. Anyone can call the session creation API, so a production high-traffic deployment needs an additional WAF or rate limiting. When the official DID API is unreachable, government cards fail closed. When the status list cannot be confirmed, the result is `unknown`. If the WebSocket disconnects at the moment the result is sent, the server does not keep the data for a convenient retry. The user must redo the verification. This is an explicit trade-off between privacy and availability.

The endpoint screen remains a data exposure surface. During the two minutes that the name and last five digits are shown on the verifier side, they may be seen by bystanders, screenshotted, or read by browser extensions. Automatic clearing can only shorten the exposure time. It cannot replace counter operating procedures, managed devices, and browser extension policies.

This review is a repository-scope security review, not a third-party penetration test, a personal data impact assessment, or formal compliance certification. Deployers still have to handle operating accounts, Cloudflare permissions, domains, incident response, a contact point for data subject rights, and statutory retention requirements.

## One-click deployment still needs explicit responsibility

The open-source repo contains the Worker, two Durable Object bindings, six verification scenarios, a deployment skill, an embedded guide, and a prompt that can be handed to a coding agent. The Cloudflare deploy button forks the source and creates the Worker and bindings. On first start, it generates the deployer's own verifier `did:key`. The generic version always queries the official DID API and does not ask users to paste a `trusted issuer ID` into a form, to avoid turning an unfamiliar DID into an unreviewed trust bypass.

<figure>
  <a href="/images/reports/twdiw-vp-verifier-lite/verifier-developer-deploy.png" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, Show Your Wallet developer deployment section">
    <img src="/images/reports/twdiw-vp-verifier-lite/verifier-developer-deploy.png" alt="Show Your Wallet developer section listing Cloudflare one-click deployment, the Agent Skill, and integration with existing services" width="1259" height="720" loading="lazy" />
  </a>
  <figcaption><em>Figure 3. The developer entrance offers one-click deployment, the Agent Skill, API embedding, and the personal data module together. After deployment, the notice content must be replaced with the actual operator's, followed by the operator's own real-device acceptance testing.</em></figcaption>
</figure>

One-click deployment completes the technical starting point. To become an official verifier with moda, the [official issuer and verifier application process](https://www.wallet.gov.tw/apply/applyIssuerVerifier.html) must still be followed. The open-source project does not handle applications on anyone's behalf. The fact that a verifier can read a card does not automatically grant a lawful basis for collection or agency authorisation for a specific business purpose.

When embedding into an existing service, the front end can first read `GET /api/profiles`, then create a verification with `POST /api/presentations`. The response provides the QR SVG, the request URI, the WebSocket URL, and a separate `resultKey`. A production product should add its own login, authorisation, rate limiting, and transaction state at the server-to-server boundary. It must not treat the public demo's anonymous session as a complete business system.

## Engineering judgements left by this development

First, public standards and existing deployment profiles must both be written into the tests. Reading the OpenID4VP specification alone cannot predict the official app's requirements for `$.type`, descriptor groups, URL schemes, and card names. Copying only the official request would permanently freeze the old format. The more robust approach is to create an explicit compatibility profile for TWDIW and track the Final specification with a separate pure-DCQL profile.

Second, error messages are part of interoperability infrastructure. `No credentials available` and `[1] unknown error` do not say whether the card type, claim path, format, or trust policy mismatched, so third parties can only work backwards from public code and production requests. If the official test environment returned machine-readable mismatch reasons and published de-identified conformance fixtures, the onboarding cost for wallets and verifiers would drop significantly.

Third, data minimisation must start from the request profile. Once the backend has received the full credential, claiming to display only one field is too late. The risk has already occurred. Each business purpose must first define the acceptable card types, the minimum claims, the status requirements, and the failure policy. The signed request, the front-end notice, the verifier's disclosure opening, and the test fixtures must all use the same profile.

Fourth, verification time should be recorded automatically in stages by the program, but personal data must not be carried into telemetry with it. Later tests will separate request creation, wallet matching, user confirmation, presentation generation, network transfer, signature verification, trust lookup, status list, and result return. Public reports keep only timing, build, device role, network state, and de-identified error codes.

Fifth, a real device is an independent release gate. 86 tests can prevent regressions in request structure, holder binding, and the privacy channel, but they still cannot select the correct card in the official iPhone app. One success at a production convenience-store pickup cannot be extrapolated to three carriers, every store, and every verification scenario. The test report must let each piece of evidence stop where it can be supported.

## The acceptance order that comes next

The next round of work fills in the verification matrix first, then expands deployment capability.

1. Retest with the official TWDIW: a telecom credential name on its own, name plus last five digits for all three carriers, driver's licence class, and the national ID number.
2. Rebuild the MyData self-issued credentials with the new Bonds version, test name, adult predicate, nationality, and national ID number one by one, and confirm the old-card upgrade prompt.
3. Automatically record end-to-end timing between the iPad verifier and the iPhone wallet, separating user dwell time from cryptographic computation time.
4. Add tests for timeouts, replays, wrong audience, status list outages, WebSocket disconnection, and mass session creation.
5. Build a set of TWDIW compatibility fixtures containing no real personal data, so that third-party wallets and verifiers can verify request matching in CI before moving to real devices.
6. For production deployments, add optional rate limiting, operator configuration checks, notice version proofs, and external penetration testing.

"Show Your Wallet" is now a lightweight verifier that can be deployed, whose source code can be read, and which can complete real presentations with the wallets currently in use in Taiwan. It also leaves its limits on the product surface. Official registration, the lawfulness of a specific business use, the complete real-device matrix, the availability of status data, and responsibility for high-risk decisions are not wrapped up by the one-click deploy button.

Whether the Digital Credential Wallet can become public infrastructure depends on the second layer of the ecosystem beyond the issuing app. Only when ordinary organisations can build verifiers from public profiles, rule out format problems with synthetic fixtures, complete interoperability with clear error codes, and then enter production with data minimisation and auditable governance will cards turn from a demonstration feature into a tool that society can adopt.
