---
title: "Reproducing Digital Wallet Convenience-Store Pickup End to End with Bonds"
description: "A field test of the telecom-credential convenience-store pickup flow on a real device, a production store POS, and the official specifications, with analysis of OpenID4VP, offline QR, the iOS implementation, and policy interoperability."
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "信任根與信任清單", "隱私", "使用者經驗", "開源", "台灣"]
keywords: ["有備而來", "數位憑證皮夾", "門號電子卡", "台灣大哥大", "統一超商", "超商取貨", "OpenID4VP", "SD-JWT VC", "QR Code", "POS", "選擇性揭露", "did:key"]
pubDate: 2026-09-02
draft: false
lang: "en"
translationOf: "2026-09-02-telecom-credential-convenience-store-pickup"
translatedBy: "Claude Fable 5.1"
translatedDate: 2026-09-08
aiModel: "OpenAI GPT-5.6"
aiPrompt: "以有備而來真機實測、官方公開程式碼、QR Code 驗證規格與服務目錄、OpenID4VP 1.0 Final 原文及各國官方案例，撰寫電信憑證轉換為超商取貨條碼的全面測試與協定分析。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-02-telecom-credential-convenience-store-pickup"
aiGeneratedDate: 2026-09-02
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 3
slug: "2026-09-02-telecom-credential-convenience-store-pickup"
---

*English translation of the original Chinese report published on 2 September 2026. Where the two differ, the Chinese version is authoritative.*

_This is the second report in the series "Bonds (有備而來): Development Reports on an Ideal Digital Wallet". The material analysed includes hands-on operation on a real iPhone, acceptance at a production store POS, the public source code and QR verification specification from the Ministry of Digital Affairs (moda), OpenID4VP 1.0 Final, and official cases from other countries. The published screenshots keep the issuer's `did:key` and trust records. Names, the last five digits of the mobile number, credential serial numbers, and scannable QR codes have all been redacted._

On 2 September 2026, I imported a Taiwan Mobile telecom credential (mobile-number credential) into Bonds, completed the credential presentation for "7-ELEVEN parcel pickup", obtained a pickup QR code, and had a production store POS scan it and hand over the parcel.

This result establishes one piece of end-to-end interoperability evidence. The app reading the card, the API returning success, or the screen displaying a QR code are all intermediate states. Only a production POS accepting the QR code and completing the handover proves that a flow produced by a third-party wallet can enter the existing logistics system.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/wallet-credential-overview.webp" target="_blank" rel="noopener noreferrer" aria-label="Open full-size screenshot, the Bonds home screen with the national ID card and government wallet cards">
    <img src="/images/reports/telecom-credential-store-pickup/wallet-credential-overview.webp" alt="The Bonds home screen showing a self-issued national ID card, a digital driver's licence credential, a Taiwan Mobile telecom credential, and MyData records at the same time" width="1170" height="2532" loading="lazy" />
  </a>
  <figcaption><em>Figure 1. The credentials home screen in Bonds. A self-issued national ID card, government wallet cards, and MyData records coexist in the same wallet. This pickup used the Taiwan Mobile telecom credential among them.</em></figcaption>
</figure>

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/telecom-card-detail.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size screenshot, the Taiwan Mobile telecom credential inside Bonds">
    <img src="/images/reports/telecom-credential-store-pickup/telecom-card-detail.png" alt="Bonds showing the card type, issuer did:key, and validity period of the Taiwan Mobile telecom credential" width="1170" height="2532" loading="lazy" />
  </a>
  <figcaption><em>Figure 2. The telecom credential actually imported into Bonds. The screen keeps the issuer's public `did:key`. The holder's name and mobile number do not appear in the published image.</em></figcaption>
</figure>

## Test conclusions and scope

This test covers four layers.

| Layer | What was verified | Result |
| --- | --- | --- |
| Credential layer | Bonds can read the Taiwan Mobile telecom credential and its holder key | Pass |
| Trust layer | The pickup service appears in both the official API directory and the Arbitrum trust record | Pass |
| Protocol layer | The app completes the OpenID4VP presentation, discloses the name and the last five digits of the mobile number, signs the transaction, and obtains the QR code | Pass |
| Operational layer | A production store POS accepts the QR code and hands over the parcel | Passed once |

The test sample is limited to one Taiwan Mobile telecom credential, one 7-ELEVEN pickup scenario, and one successful handover. Expired QR codes, screenshot replay, a store with no network, cancelled transactions, duplicate pickup, other telecom operators, and other convenience-store chains were not included. These scenarios need separate tests and cannot be extrapolated from a single successful result.

## Protocol tracing and the iOS implementation

The moda front end provides a [public VP service directory](https://frontend.wallet.gov.tw/api/moda/dwapp/offline/vpList?name=&page=0&size=100). The query result on 2 September 2026 contains `22555003_711pickup`, named "7-ELEVEN parcel pickup" (統一超商包裹取貨), with its own verifier module URL. Bonds first discovers the service from the directory, then checks the module host, the official trust list, and the on-chain record.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/pickup-trust-evidence.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size screenshot, API and Arbitrum trust check for the 7-ELEVEN parcel pickup service">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-trust-evidence.png" alt="Bonds showing, before providing any data, that the 7-ELEVEN service has passed the official API and Arbitrum trust checks" width="1170" height="1050" loading="lazy" />
  </a>
  <figcaption><em>Figure 3. The app checks the official API and the Arbitrum record before sending identity data. The published image keeps only the service name, the block, and the transaction record.</em></figcaption>
</figure>

The [Digital Credential Wallet (TWDIW) source code](https://github.com/moda-gov-tw/TWDIW-official-app) published by moda shows a layered design separating the holder app, the OpenID4VP handler, the verifier API, and the VP verification component. Bonds implements seven steps along that boundary.

1. Fetch the pickup scenario and the verifier module from the official directory.
2. Create a transaction with the module and obtain the `transactionId` and the authorization deep link.
3. Follow the deep link to fetch the signed OpenID4VP request, and check the `nonce`, `state`, request host, response host, and requested fields.
4. Have the user confirm disclosure of the name and the last five digits of the mobile number, then build the VP from the telecom credential.
5. Send the VP back to the verifier, keeping the holder key used for this presentation and the transaction receipt.
6. Sign an ES256 JWT over the `transactionId` with the same holder key and request the QR code from the original verifier module.
7. Verify that the response is a PNG, that the file is no larger than 5 MB, and that the server-side lifetime is positive, then display the original image.

The iOS client is fail-closed at the host, request, and response layers. The request URI and response URI must resolve to the same host specified in the directory, the `definitionID` must match the pickup scenario, and the disclosed fields must include `name` and `phonel5`. If any item does not match, the flow stops immediately. Regenerating the QR code calls the official module again. Bonds never encodes the name or the last five digits into a QR code of its own. The implementation and tests are in [public PR #56](https://github.com/bonds-tw/backupTW-iOS/pull/56).

The countdown computes an absolute deadline from the `totptimeout` returned by the server and the QR generation time. The screen recomputes the remaining seconds from the current time every second, so it still shows the correct result after Face ID, background execution, or scrolling back. This design fixed a lifecycle bug where the timer started before the view had entered a window, which left the display stuck at `04:59`.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/telecom-credential-store-pickup/pickup-qr-redacted.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size screenshot, a redacted 7-ELEVEN pickup QR code with a five-minute on-screen countdown">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-qr-redacted.png" alt="Bonds showing a 7-ELEVEN pickup QR code with a five-minute on-screen countdown, with the scannable area fully covered by an opaque mask" width="1170" height="2532" loading="lazy" />
  </a>
  <figcaption><em>Figure 4. The QR code returned by the official module and the five-minute UI countdown. The published version fully masks the scannable area, because an expired QR code may still hold encrypted personal fields and protocol information.</em></figcaption>
</figure>

## The security model of the offline QR code

The moda [QR Code verification specification](https://github.com/moda-gov-tw/TWDIW-official-app/blob/main/Docs/QR%20Code%20%E9%A9%97%E8%AD%89%E8%A6%8F%E6%A0%BC%E8%AA%AA%E6%98%8E%E6%96%87%E4%BB%B6.md) defines the outer data of the QR code.

| Field | Content | Verification purpose |
| --- | --- | --- |
| `t` | Transaction type | Distinguishes application scenarios such as convenience-store pickup |
| `d` | Base64-encoded encrypted data | Carries the TOTP and the disclosed fields the scenario needs |
| `h` | HMAC over the full decrypted plaintext | Checks data integrity and possession of the shared key |
| `k` | Key identifier | Selects the matching verification key |

The store POS, or an adjacent secure module, holds the `privateKey`, `totpKey`, and `hmacKey`. The verifier derives a key with X25519/ECDH, decrypts `d` with ChaCha20-Poly1305, and then checks the TOTP and the HMAC. The official [offline verification sample](https://github.com/moda-gov-tw/TWDIW-official-app/blob/main/SampleCode/VerifyQRCodeController.java) explicitly requires the three keys to stay in POS configuration, environment variables, or a secure module, so the cryptographic verification can be completed without network access.

The decrypted data can contain a name and a phone number. The official sample requires that the decrypted plaintext never be written to logs, and the format only mandates the `totp` field; the rest is defined by the application scenario. This pickup required the name and the last five digits of the mobile number, so the security controls should cover encryption to the receiving end, field minimisation, POS key protection, a ban on plaintext logging, and data retention limits.

<figure>
  <a href="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size flow diagram, the layered protocol of Bonds convenience-store pickup">
    <img src="/images/reports/telecom-credential-store-pickup/pickup-protocol-bridge.svg" alt="Bonds first presents the telecom credential to the official verifier module over OpenID4VP, then the store side decrypts the QR code and verifies the TOTP and HMAC" width="1200" height="690" loading="lazy" />
  </a>
  <figcaption><em>Figure 5. OpenID4VP verifies the credential presentation and holder binding. The encrypted QR code carries the data the user agreed to disclose to the store side, where the POS or a secure module completes offline verification.</em></figcaption>
</figure>

One point of timing semantics is still not fully explained in the public documents. Bonds receives `totptimeout=300`, and the screen counts down five minutes on that basis. The official QR specification states that the TOTP is valid for 60 seconds, with a tolerance of 30 seconds of clock skew on either side. The current app does not rotate the QR code automatically within the five minutes; it only fetches a new image from the module when the user taps regenerate.

The successful scan in this test happened shortly after the QR code was generated, so it is impossible to tell whether the store actually applies a 60-second or a 300-second period. The TOTP also only provides time freshness. Invalidation after scanning and prevention of duplicate handover still have to be handled by the business system. This gap should be included in a formal profile and in interoperability tests, so that the UI does not show the code as usable while the inner TOTP has already been rejected by the verifier.

## The two-stage verification architecture

[OpenID4VP 1.0 Final](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html) handles the verifier's credential request, wallet consent, selective disclosure, VP return, and verification. After `direct_post` completes, the specification no longer deals with parcel lookup, store equipment, QR format, or handover status.

Taiwan's pickup service adds an offline QR code after OpenID4VP. The front stage verifier validates the SD-JWT VC, holder binding, and trust source. The back stage encrypts the fields the scenario needs for the store-side verifier. The POS does not need to implement the full SD-JWT VC, OpenID4VP, or the government trust list, but it still needs QR decryption, TOTP, and HMAC verification.

Business redemption sits at a third level. After the QR code passes cryptographic verification, the store still has to look up the parcel, confirm eligibility for handover, and prevent duplicate collection. The public QR specification does not define these logistics states, and it cannot prove whether the actual POS connects back to a back end after cryptographic verification.

## Policy inferences from the architectural choice

Offline verification is a design goal that the public specification explicitly supports. The compatibility requirement for existing store equipment and the allocation of responsibility are engineering and policy inferences drawn from the public interfaces, code, and field results. They are not official decision records.

The first inference concerns operational resilience. Completing decryption, TOTP, and HMAC locally on the POS reduces the impact of network outages on identity verification. Parcel lookup and handover status may still need a back end, but the cryptographic check at least retains an offline capability.

The second inference concerns the scope of system changes. Keeping SD-JWT VC, holder binding, and the trust list in the verifier module avoids rolling out the full digital identity stack to every piece of store equipment at once. The POS only needs to add QR decryption and integrity verification, and the existing scanning and handover flow can continue in use.

The third inference concerns the governance of public infrastructure. Once technical complexity moves from the POS to the verifier module and the key distribution system, interoperability depends on the service directory, the profile, test vectors, and key policy. If these rules exist only in the official app and specific vendor implementations, third-party wallets and other POS vendors will still face institutional entry costs.

## Compatibility with OpenID4VP 1.0

| Level | Observed in this test | Relationship to 1.0 Final |
| --- | --- | --- |
| Identity presentation core | Request by reference, signed request, `nonce`/`state`, selective disclosure, holder binding, `direct_post` | Adopts the core OpenID4VP model |
| Request and response formats | `presentation_definition`, `presentation_submission`, bare `did:key` client ID | Keeps formats common before Final; Final uses `dcql_query`, and DID verifiers use the `decentralized_identifier` prefix |
| Pickup and offline verification | Transaction creation, a second JWT, `t`/`d`/`h`/`k` inside the PNG, X25519 decryption, TOTP, HMAC | Outside the scope of the OpenID4VP specification; part of the TWDIW application profile |

The OpenID Foundation approved [OpenID4VP 1.0 Final](https://openid.net/openid-for-verifiable-presentations-1_0-final-specification-approved/) in July 2025. This service still uses the DIF Presentation Exchange `presentation_definition` and `presentation_submission`, and the client ID keeps a bare `did:key`. The official wallet and Bonds interoperate, but a new wallet built to 1.0 Final would need to implement this legacy format set and the back-stage QR API in addition.

The full pickup flow can be described as an OpenID4VP-compatible presentation, plus the TWDIW offline QR profile, plus convenience-store business redemption. Calling the whole flow OIDC4VP hides the custom interfaces of the last two layers and makes it harder for third-party wallets to estimate implementation cost.

## Software engineering practice

Engineering practice can be summarised as five requirements.

- **Separate service discovery from trust verification.** A service appearing in the directory only proves that it is discoverable. The app still has to check the verifier host, the trust list, the on-chain record, the definition ID, and the response URI.
- **Treat external APIs as untrusted input.** The QR response needs checks on the status code, data structure, PNG magic bytes, size, and a positive lifetime. Issuer names, credential names, and disclosed values must not be used directly as app chrome either.
- **Countdowns must be recomputed from an absolute deadline.** Decrementing an in-memory counter every second is easily disturbed by background execution, Face ID, and the run loop. Computing the deadline as `generatedAt + lifetime` is what keeps the state correct when the screen comes back.
- **Protocol data must not enter diagnostic logs.** Automated tests and performance measurements may keep the stage, timing, error type, and build information. QR codes, transaction IDs, names, phone numbers, and decrypted plaintext must all be excluded.
- **A production POS is a release gate.** Unit tests, CI, an API 200, and the app rendering an image successfully cannot replace store acceptance. Screen brightness, scanning distance, network state, timeouts, regeneration, and manual fallback also need testing.

The current unit tests cover service directory parsing, transaction responses, credential serial numbers, PNG and lifetime parsing, absolute-deadline countdowns, bad image files, and service rejection. The next test matrix should add the 60-second and 300-second boundaries, replay, wrong keys, clock skew, an offline POS, duplicate collection, and implementations at other convenience-store chains. Performance records should be split into service discovery, request fetch, VP construction, `direct_post`, QR fetch, and first-frame display, recorded automatically with a monotonic clock.

## Policy and procurement recommendations

The pickup flow already has public source code, a QR specification, and a real service. The cost of building further implementations is still concentrated in scattered documentation, undefined timing semantics, and the absence of a formal verification suite. Policy and government procurement can prioritise six items.

1. **Publish a complete TWDIW pickup profile.** Put the service directory, deep link, OpenID4VP version, field names, holder-key JWT, QR schema, error codes, and versioning policy in one citable specification.
2. **Explain the relationship between 60 seconds and 300 seconds.** The documentation needs to define whether the QR code rotates, the TOTP period the verifier applies, clock tolerance, the expiry screen, and the conditions for regeneration.
3. **Distinguish cryptographic freshness from business anti-replay.** TOTP, scan counts, parcel handover status, and duplicate-collection controls should be defined separately, with auditable state transitions.
4. **Provide a sandbox without personal data and a conformance suite.** Test data needs to cover correct and wrong keys, expiry, clock skew, missing fields, HMAC errors, offline operation, and third-party wallets.
5. **Establish POS key governance.** Set rules for key generation, distribution, rotation, revocation, HSM or secure module use, lost store equipment, and supply-chain incident handling.
6. **Include production stores and accessibility in acceptance.** Acceptance needs to cover multiple device makes, different brightness levels and font sizes, VoiceOver, a dead phone battery, network outages, manual checks, and customer service handling.

The OpenID4VP migration also needs a public timeline. Presentation Exchange and the bare `did:key` still run in the production service, so a compatibility layer can be kept in the short term. New versions should gradually support DCQL, the Final client-id scheme, and explicit capability negotiation, so that third-party wallets depend less on archaeology of the official wallet's behaviour.

## International cases

No other country has published an identical flow in which a telecom credential completes OpenID4VP and is then converted into a convenience-store pickup QR code. The closest cases involve short-lived QR codes, public services at convenience stores, and operational credentials that follow identity verification.

| Country / service | What it actually does | Relationship to this pickup flow |
| --- | --- | --- |
| [Korea mobile ID](https://www.mobileid.go.kr/mip/hps/svcIntrcn/svcIntrcnUser.do) | Displays a "My QR" at convenience stores, bars, and similar venues for the verifier to scan; official guidance says the QR resets roughly every 30 seconds and provides only necessary fields | Also uses a short-lived QR code on the phone with convenience-store verification; the QR code directly carries the identity or age check |
| [Japan My Number convenience-store issuance](https://lg-waps.go.jp/01-00.html) | Uses the My Number Card, or a phone carrying the mobile electronic certificate, to obtain certificates such as the resident record at a convenience-store multifunction kiosk | Connects digital identity to convenience-store infrastructure; the main interfaces are the kiosk, NFC, and the electronic certificate |
| [IATA One ID](https://www.iata.org/en/programs/passenger/one-id/) | Passengers provide digital credentials such as passports and visas from a wallet; after the airline verifies them, check-in and the boarding pass follow | After identity and eligibility verification, the operational system issues an access credential |
| [Apple Verify with Wallet](https://developer.apple.com/wallet/get-started-with-verify-with-wallet/index.html) | Driver's licences / IDs from some US states and Japan's My Number can be selectively provided inside an app, with the service side decrypting and verifying | Apple defines the identity presentation interface; the subsequent tickets, orders, and passes are still designed by the service |
| [EU EUDI age verification](https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/pages/930450954/The%2BAge%2BVerification%2BManual) | Presents an age proof over OpenID4VP or the Digital Credentials API, disclosing only the result the service needs | Standardises presentation and trust, leaving purchase or access rights to the business layer |

What distinguishes the Taiwanese case is the QR presentation layer added after OpenID4VP, which can be decrypted offline. This approach supports existing store equipment and verification without network access, and it also brings key governance, field profiles, time synchronisation, and anti-replay responsibility into the POS environment. The international cases can serve as references for interfaces and governance, but they cannot replace the work of publishing and verifying this profile.

## Conclusion

This field test confirms that a third-party wallet can use a Taiwan Mobile telecom credential, obtain an encrypted QR code through the official trust directory and the OpenID4VP flow, and have a production 7-ELEVEN POS complete the handover. This path has crossed the app, the government API, the issuer's keys, the on-chain trust record, the official verifier module, and the store equipment.

The protocol architecture contains three boundaries of responsibility. OpenID4VP verifies the credential presentation, the TWDIW offline QR code encrypts the necessary fields for the store side, and the convenience-store system handles parcel handover and duplicate-collection control. Any interoperability assessment should verify these three layers separately.

The technical priorities for the next stage include the 60-second and 300-second timing semantics, the POS key lifecycle, replay and duplicate handover, and tests across telecom operators and convenience-store chains. The policy priority is to consolidate the existing code and scattered specifications into a public profile that can be versioned, tested, and implemented by third parties. The successful handover at a production store proves that this path has practical value. Whether it can become sustainable digital public infrastructure will be decided by a public interoperability specification.
