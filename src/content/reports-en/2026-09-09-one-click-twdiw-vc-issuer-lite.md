---
title: "Accept This Card: Turning Digital Wallet Issuance into a One-Click Open-Source Service"
description: "Shrinking the issuer side of Taiwan's digital credentials to a single Cloudflare Worker: one-click deploy and it issues test cards over the OID4VCI pre-authorized code flow, as SD-JWTs wrapped in a W3C vc. A record of the issuance flow, the trust model, the architecture mirroring the verifier, and the governance boundary of issuing only synthetic data."
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "OpenID4VP", "個資保護", "隱私", "資安", "開源", "Cloudflare", "台灣"]
keywords: ["請收下卡片", "twdiw-vc-issuer-lite", "數位憑證皮夾", "有備而來", "TWDIW", "OID4VCI", "OpenID4VCI", "預授權碼", "SD-JWT VC", "did:key", "StatusList2021", "Durable Objects", "請出示皮夾", "一鍵部署", "信任清單"]
pubDate: 2026-09-09
draft: false
lang: "en"
translationOf: "2026-09-09-one-click-twdiw-vc-issuer-lite"
translatedBy: "Claude Opus 4.8"
translatedDate: 2026-09-09
aiModel: "Anthropic Claude Opus 4.8"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-09-one-click-twdiw-vc-issuer-lite"
aiGeneratedDate: 2026-09-09
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 7
slug: "2026-09-09-one-click-twdiw-vc-issuer-lite"
---

*English translation of the original Chinese report published on 9 September 2026. Where the two differ, the Chinese version is authoritative.*

_This is the seventh report in "Ready for It: Government Identity and Data App Reports." It is based on the [twdiw-vc-issuer-lite](https://github.com/mashbean/twdiw-vc-issuer-lite) public source, its README, `docs/protocol-and-trust.md`, `docs/test-data.md`, and the demo site [issuer.mashbean.net](https://issuer.mashbean.net) as of 9 September 2026. The demo issues only fictional data. It is not an official issuer of the Ministry of Digital Affairs or any agency, and it is not on the official trust list; the cards it issues can only be used to test wallets and verification flows._

The third report brought down the cost of standing up a **verifier**, producing [Show Your Wallet](../2026-09-03-one-click-twdiw-vp-verifier-lite/). This report handles the symmetric other half: the issuer. Without a government-project budget, a Java back end, or a dedicated database, can an ordinary organization stand up a service that issues verifiable credentials?

The answer is [Accept This Card](https://issuer.mashbean.net). It is a sister project to Show Your Wallet, built with the same logic, goals, and architecture, and it compresses the issuer's build cost down to a single Cloudflare Worker. After you press the deploy button, Cloudflare creates the Worker, three Durable Object bindings, and the issuer's own P-256 `did:key` — no separate database or Java service required. The source is released as open source, with a one-click deploy button, a deploy skill, and a deploy prompt.

## Three things on one web page

The demo site puts the three problems an issuer runs into on the same page.

**Issue a card.** Pick one of six common card types (driver's license, mobile number, student ID, employee badge, library card, membership card) and one of six fictional cardholders, and it generates a one-time OID4VCI issuance QR code for a wallet to scan and accept.

**Presentation test.** Present the card you just received back to the site. The site is also an OIDC4VP verifier that trusts only itself; it checks the issuer signature, holder key binding, nonce, audience, selective disclosure, and status list. This part is isomorphic to Show Your Wallet, effectively wiring issuance and verification into a closed loop so a deployer can confirm that the card they issued is complete without needing a second wallet first.

**Trust list.** It reads the Ministry of Digital Affairs' DID list live, places the site's own `did:key` at the top, and honestly notes that it is not on the list and states who accepts it.

## The issuance flow a wallet sees

The issuer implements the pre-authorized code flow of OpenID for Verifiable Credential Issuance (OID4VCI) 1.0. The QR carries only a `credential_offer_uri`. Once the wallet fetches the offer, it uses its own two trust gates to decide whether to talk to this host: first whether the offer's hostname is on the trust list, then whether the hostname of `credential_issuer` matches.

<div class="table-scroll">

| Step | Request | Response |
| --- | --- | --- |
| QR | `openid-credential-offer://?credential_offer_uri=…/api/offer/<id>` | Wallet scans or opens the deep link |
| 1 | `GET /api/offer/<id>` | `credential_issuer`, `credential_configuration_ids`, `pre-authorized_code` |
| 2 | `GET /.well-known/openid-credential-issuer` | `credential_endpoint` (same host) |
| 3 | `POST /token` (`grant_type=…pre-authorized_code`, `client_id=moda_dw`) | `access_token`, `c_nonce` |
| 4 | `POST /credential` (`Authorization: Bearer …`, `proofs.jwt[0]`) | `{ credential: "<jws>~<disclosure>~…~" }` |

</div>

The pre-authorized code and the access token are both composite strings of the form `<session id>.<secret>`: the requests in steps 3 and 4 do not carry a session id, so the Worker uses the first half to find the corresponding Durable Object, which then compares the second half in constant time. The pre-authorized code can be redeemed only once; the access token is valid for ten minutes and issues exactly one card.

## The card it issues

TWDIW's current card is "an SD-JWT wrapped in a W3C `vc`," not an IETF SD-JWT VC. The site issues in this dialect: the header `typ` is `vc+sd-jwt`; the payload's `iss` and `sub` are both `did:key` (`jwk_jcs-pub` encoding, with the public key embedded in the identifier); `cnf.jwk` binds the key the wallet presents in its proof; `vc.type[1]` is the card type; there is one disclosure per field; and a StatusList2021 status list is attached.

A few design details are worth recording. The issuer's `iss` public key is right there in the identifier, and the wallet verifies the signature using `iss` alone, tracking no external `jku` — one fewer swappable link in the trust chain. Each field's disclosure is `base64url(JSON([salt, name, value]))` with a 16-byte salt, and the `_sd` digests are sorted before being written, so the digest order does not leak the field order. The card-type identifiers all carry the word `sandbox`, and the driver's license carries `driverlicense` and the mobile-number card carries `telecom`, so the wallet's issuer lookup table marks them as test cards — and the card colors fall into the green driver's license and the magenta mobile card respectively, rather than impersonating the Directorate General of Highways or a carrier.

Each card occupies one position in a StatusList2021 list (131,072 positions), and the list JWT is signed by the same issuer key. Show Your Wallet's verifier understands this format and displays the site's cards as "confirmed valid by the status list." The revocation data structure is already implemented in `IssuerIdentity.revoke(index)`, but it is not yet wired to HTTP, so there is currently no revocation interface.

## The trust model: trust only itself

The issuer and the co-located verifier share a very narrow trust policy: trust only the site's own DID. That single sentence determines who can accept a card from here.

<div class="table-scroll">

| Party | Accepts? | Reason |
| --- | --- | --- |
| The site's own presentation test | Yes | Trusts only its own `did:key` |
| Bonds ("有備而來") DEBUG build | Yes | Pins the site's DID and hostname via a sandbox exception (`TWDIWIssuer.mashbeanSandbox`); not included in Release builds |
| The Ministry of Digital Affairs' official Digital Credential Wallet | No | The site is not on the official trust list |
| Show Your Wallet (verifier.mashbean.net) | No | Government cards use the official DID API as their sole trust source, and fail closed |

</div>

A wallet uses the hostname on the trust list to decide whether to talk to the issuer, then uses the DID on the list to decide whether to accept the card. To make any wallet accept a card from your own deployment, you must first pin the new site's `did:key` (`GET /api/issuer`) and hostname into that wallet's trust exceptions. That decision belongs to the wallet operator; this project provides no way to bypass the official list. This boundary matters: a one-click deploy only stands up an independent, open-source issuing site; it does not make the deployer a registered issuer of the Ministry of Digital Affairs, and the official wallet will not accept the cards it issues. A formal application goes through the separate [Digital Credential Wallet issuer/verifier application process](https://www.wallet.gov.tw/apply/applyIssuerVerifier.html).

In other words, this demo proves that "the card is complete, bound to the wallet's key, and its status is checkable" — not that "someone else should accept this card." The former is technical feasibility; the latter is a governance decision. The two are deliberately kept apart.

## It issues only fictional data

Every card the demo issues is fictional, and this is not decorative disclaimer but a design that passes through a test-vector gate. The six fictional cardholders use the names that appear most often in Taiwanese form examples — obviously fake at a glance. The national ID numbers are produced by a check-digit generator, so their format and check digit are accepted by validators (Show Your Wallet's ID-number scenario checks them exactly this way), but the numbers belong to no one; the phone numbers all fall in `09000001xx`, and the email addresses are all in the reserved domain `@sandbox.example`; the addresses, schools, employers, libraries, and cooperatives are all nonexistent "sandbox" entities.

The field keys of the six card types are deliberately aligned with Bonds' field-mapping table and Show Your Wallet's verification scenarios, so that issuance, storage, presentation, and verification all line up across the four ends. The demo accepts no personal data as input; a self-hosted deployment that wants to connect real data has to redo the notice, lawful basis, retention period, and revocation design — which is out of scope for this project.

## Data retention

The three Durable Objects each have clear retention boundaries. `IssuerIdentity` permanently stores the private key, public key, DID, next status-list position, and revoked positions; the private key is generated inside its own Durable Object and never appears in the repository, config, or any response. `IssuanceSession` only temporarily holds, for ten minutes, which card and which fictional cardholder this issuance selected, plus the pre-authorized code and nonce; it is deleted when issuance completes or on a ten-minute alarm, and the card itself is never written to the server. `PresentationSession`'s presentation and disclosed values are processed only in single-request memory, deleted when verification completes or on a ten-minute alarm. The page uses a same-origin CSP, loads no third-party script, font, or analytics, and `wrangler.jsonc` disables Workers Logs persistence by default.

## Standards scope and what is not done

The issuer implements the pre-authorized code flow of OID4VCI 1.0 (offer by reference, `/.well-known/openid-credential-issuer`, `/token`, `/credential`, `openid4vci-proof+jwt`), and the card format and presentation end use a TWDIW-compatible profile. This is not a claim of OpenID Foundation conformance; cross-border or mdoc interoperability would require a separate pure SD-JWT VC / DCQL profile run against a conformance suite. A revocation interface, notice and lawful basis for real data, and formal issuer status are all out of scope for this demo.

## From verification to issuance: the other half of the second layer

The third report's conclusion was that whether the Digital Credential Wallet can become public infrastructure depends on a second layer of ecosystem beyond the issuing app; only when ordinary organizations can build a verifier with a public profile, rule out format problems with synthetic fixtures, and complete interoperation with clear error codes do cards turn from a display feature into a tool that society can adopt. The issuer is the other half of the same argument. Once the verifier drops to a one-click deploy, if the issuing side is still something only government projects and a handful of vendors can afford, the ecosystem grows only halfway.

Accept This Card compresses issuance down to a Worker too, and deliberately splits "technically able to issue a complete card" from "institutionally, this card is accepted": the former is open source, one-click deployable, and self-verifiable; the latter stays in the hands of the official trust list and the wallet operators, and this project does not bypass it. Only a division of labor like this can let more people participate in, test, and contribute to the whole verifiable-credential flow at low cost — without shaking the official root of trust.

＊

Source: [github.com/mashbean/twdiw-vc-issuer-lite](https://github.com/mashbean/twdiw-vc-issuer-lite) (GPL-3.0). Demo site: [issuer.mashbean.net](https://issuer.mashbean.net). Sister project Show Your Wallet: [github.com/mashbean/twdiw-vp-verifier-lite](https://github.com/mashbean/twdiw-vp-verifier-lite).
