---
title: "Offline Verification Between Digital Wallets When the Network Is Down"
description: "Bonds used an iPhone as holder and an iPad as verifier to complete an offline comparison of two credentials over SD-JWT-VC and zero-knowledge proof. This report records trust data preparation, Bluetooth transport, the Chinese name circuit, three successful and one failed field results, and offers recommendations on offline services and privacy governance."
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "密碼學", "隱私", "信任根與信任清單", "共融與可及性", "公共採購", "開源", "台灣"]
keywords: ["有備而來", "BOND", "離線驗證", "SD-JWT-VC", "零知識證明", "ZKP", "OpenAC", "zkID", "MyData", "數位身分證", "門號驗證卡", "姓名相等證明", "Bluetooth Low Energy", "Spartan2", "Circom", "備援"]
pubDate: 2026-09-06
draft: false
lang: "en"
translationOf: "2026-09-06-offline-wallet-verification"
translatedBy: "Claude Fable 5.1"
translatedDate: 2026-09-08
aiModel: "OpenAI GPT-6 / Codex"
aiPrompt: "依離線驗證開發紀錄、Swift 與 Rust 原始碼、兩台裝置的去識別化測試紀錄及使用者提供的六張截圖，撰寫開發報告、線上與離線比較、兩種卡片與兩種驗證方法的實測對照，以及政策建議。沿用專案文章與圖片格式，以專業客觀的繁體中文表述，區分觀察、推論與尚未完成的驗收。"
aiPipelineStage: "final"
aiGeneratedDate: 2026-09-06
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 11
slug: "2026-09-06-offline-wallet-verification"
---

*English translation of the original Chinese report published on 6 September 2026. Where the two differ, the Chinese version is authoritative.*

Bonds (有備而來) has completed three offline name verifications between an iPhone and an iPad. Both the telecom credential (mobile-number credential) obtained through the Digital Credential Wallet (TWDIW) and the self-issued derived credential built from the MyData digital ID passed verification over the SD-JWT-VC comparison path. The self-issued credential also passed zero-knowledge proof (ZKP) verification. The ZKP for the telecom credential still fails on the holder side, and the cause has not yet been located.

This phase moves proof reception and verification onto the iPad. The two devices use a QR code to set up the verification request and Bluetooth Low Energy to carry the response. For the self-issued credential's ZKP, the time from the iPad showing the verification code to showing the result was 27.493 seconds, of which native proof verification took 1.691 seconds. This is a single observation on real devices. It is not enough to estimate speed or reliability under heavy use.

This is the sixth Bonds development report. It follows [the online zero-knowledge proof development](../2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare/) and [the MyData data vault](../2026-09-05-mydata-vault-in-the-digital-wallet/). Scope is limited to the digital ID and the telecom credential. Other documents in the vault are not covered.

## From backed-up documents to verification without a network

[The early Bonds project site](https://bonds.tw/) set out goals of backing up government documents, carrying them and verifying them offline, building a network of mutual trust, and protecting privacy. This round of development addresses the offline verification step. Once documents are stored in the phone, verification still has to be completed without internet access.

<figure>
  <a href="/images/reports/offline-wallet-verification/bonds-original-goals.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image, early Bonds project goals">
    <img src="/images/reports/offline-wallet-verification/bonds-original-goals.jpg" alt="The early Bonds website lists goals of backing up government documents, carrying them for offline verification, building a network of mutual trust, and absolute privacy that cannot be tracked" width="1600" height="1441" loading="lazy" />
  </a>
  <figcaption><em>Figure 1. Early project goals, image provided by the developer. Full compatibility and absolute privacy in the image are advocacy goals. What this field test completed, and its limits, are described below.</em></figcaption>
</figure>

The comparison condition originally reused age verification, but the telecom credential in this round did not provide a usable date-of-birth field. To compare the same verification task, both paths were changed to confirm whether the signed name equals 「黃彥霖」. Credentials without a date of birth were therefore excluded from the age test. No date of birth was added to the credential, and the missing field was not counted as an age verification failure.

The two credentials have different trust sources. The telecom credential reuses a signed credential obtained from the official wallet ecosystem and is verified against issuer trust data checked in advance. Here the official wallet is the channel through which the credential was obtained. It does not follow that every credential carries the same identity assurance.

On the MyData path, the digital ID data on the phone and a per-card key are used to build an SD-JWT derived credential that contains only the required name. The original `vc+moica` envelope and this derived credential have different formats and verification boundaries. The latter is signed by a key controlled by the holder, and the verification result keeps a self-issued source label. This proof did not also prove the government origin of the underlying data to the iPad. This limitation applies to both SD-JWT and ZKP. [Credential selection and derivation implementation](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/backupTW/Presentation/AgePredicateCredential.swift)

## Keeping verification dependencies on the device

The offline flow has four stages: advance preparation, request creation, holder response, and local decision. The iPhone stores the credentials and generates responses. The iPad stores the public verification data. The iPad does not need to import the holder's documents.

While online, each device fetches issuer public data, checks it against the records on Arbitrum, and stores a snapshot. An update replaces the old data only after the whole batch has been checked. If an update fails, the previous check date is kept. Once offline, verification can rely only on this snapshot. There is no guarantee that later revocations or key changes are reflected on the device.

ZKP also requires circuits and keys to be installed in advance. The holder side needs the proving material and also self-verifies before sending. The verifier side needs only the public verification key. Based on this round's material manifest, the iPhone download is about 77.7 MB compressed and about 1.25 GB installed. The iPad download is about 24.3 MB compressed and about 437 MB installed. These figures use decimal units and exclude download temp files, the app itself, and runtime memory. The program checks the SHA-256 of the archive and of the extracted files separately, to prevent wrong versions or incomplete files from being mixed in. [Material manifest and build record](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/Native/OpenACAge/RELEASE-openac-field-v2.md)

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/offline-preparation.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image, offline verification preparation screen">
    <img src="/images/reports/offline-wallet-verification/offline-preparation.jpg" alt="The offline verification preparation screen offers saving trust data, preparing iPhone proving files and iPad verification files, and the status shows 41 issuer records saved" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>Figure 2. Preparation screen while online. The screenshot shows 41 issuer records, with the earliest check at 11:11 a.m. on 6 September. This status only means the trust data has been saved. It cannot by itself confirm that all proving material is installed.</em></figcaption>
</figure>

After preparation, the iPad selects the credential source and verification method and creates a QR code containing the target name, an expiry, a one-time random challenge, and the Bluetooth service identifier. The iPhone scans the code, obtains the holder's consent, and builds the response. The response is sent to the iPad over Bluetooth Low Energy, and the iPad makes the decision using local data. Both offline proof creation and verification after receiving the response are forbidden from downloading material on the fly. If a file is missing, the flow stops. [Request, proof packaging and local verification](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/backupTW/Presentation/AgePredicateProof.swift)

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/name-request-qr.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image, name verification QR code and method options">
    <img src="/images/reports/offline-wallet-verification/name-request-qr.jpg" alt="The verification screen has SD-JWT-VC and MyData digital ID selected, with the full QR code, a waiting-for-proof status, and a button to create a new verification request below" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>Figure 3. Traditional Chinese verification interface. A single QR code creates the request, and the response is sent over Bluetooth. This screenshot was taken after connectivity was restored. It shows the interface layout and is not used as evidence of offline success.</em></figcaption>
</figure>

## Online and offline change where verification happens and when trust is fixed

In the previous phase's online zero-knowledge verification, the phone sent the proof, a website managed the verification, and a Cloudflare container ran the native cryptographic operations. This phase moves reception and native verification onto the iPad. No remote service is needed during verification. The signature principle of the credential and the mathematical relationship of the proof are unchanged. The execution location, the communication channel, and the real-time information available differ. The table below scrolls horizontally on narrow screens.

<table class="offline-comparison-table" tabindex="0" aria-label="Comparison of online and offline flows, scrolls horizontally">
<thead><tr><th scope="col">Item</th><th scope="col">Previous online flow</th><th scope="col">This offline flow</th></tr></thead>
<tbody>
<tr><td>Verifier side</td><td>Browser, Worker and native verification container</td><td>App and native verifier on the iPad</td></tr>
<tr><td>Response transport</td><td>Submitted to the verification service over the internet</td><td>QR code creates the request, Bluetooth carries the response</td></tr>
<tr><td>Trust information</td><td>External sources can be queried while the service runs</td><td>Local snapshot checked in advance</td></tr>
<tr><td>Proving material</td><td>Phone and server each prepare their own files</td><td>iPhone and iPad prepare separately before going offline</td></tr>
<tr><td>Effect of a network outage</td><td>Submission or service queries may not complete</td><td>Local verification continues when material is complete</td></tr>
<tr><td>New responsibilities</td><td>Operating the server and remote services</td><td>Managing local storage, the clock, and the snapshot validity period</td></tr>
</tbody>
</table>

Being online only provides the opportunity to query the latest status. The actual guarantee still depends on whether the system fetched and checked that status. Offline verification must show the last check time and what is currently unknown. This round did not re-measure the online flow with the same credential, name condition, and timing start point, so no speed ratio between the two phases is computed from the seconds.

The SD-JWT comparison path hands over the name disclosure, the issuer-signed content, and the holder key binding proof. The verifier checks the name, the signature, the requested challenge, the intended audience, and the presentation digest. These basic mechanisms can be compared with [RFC 9901](https://www.rfc-editor.org/rfc/rfc9901.html). The credential in this round inherits the nested credential data shape of TWDIW, with an app-specific Bluetooth envelope on the outside. In this article, SD-JWT-VC is the name of an interface and a comparison path. The current results do not constitute a standards conformance certification and do not show that arbitrary vendor wallets can interoperate. [SD-JWT comparison implementation](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/backupTW/Presentation/SDJWTAgePresentation.swift)

The zero-knowledge path follows the [OpenAC design from zkID](https://github.com/ethereum/zkID/blob/main/specs/1-openac/README.md). The Prepare stage processes the signed credential and hidden fields. The Show stage builds a proof matching the current request. The two proofs are linked by a shared commitment. Each presentation is re-randomized, and the verifier checks the issuer key, the one-time challenge, and the name equality condition. Reusable Prepare data stays on the holder side. Its cache contains sensitive witness material and must be removed together with credential deletion or a local wipe.

## Development handled preparation, Chinese text, and device limits

The first obstacle on real devices was trust data preparation. The initial version sent a large number of RPC requests at once. The public service replied HTTP 429, and both devices showed preparation failure. After the fix, each batch handles three issuers with a half-second gap between batches, while keeping the original transaction, receipt, and contract state checks. Error messages now distinguish excessive requests, timeouts, and material problems. After that, 41 matching issuer records were obtained. The completion status on screen and the original check time are stored separately. [First-round issues and fixes](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/docs/offline-verification-2026-09-05.md)

The second obstacle was the iPad window size. Early on, the QR code overflowed the floating window and was clipped at the edges, so the iPhone could not scan it. The interface was changed to lay out the QR code by the actual available width, keep a quiet zone, and align to pixels, with the verification code capped at 260 points. This fix addressed the scanning entry point. In the older result screenshots, the bottom tab bar still covers part of the timing text, so this article takes values from the device diagnostic records. [Window fix](https://github.com/bonds-tw/backupTW-iOS/commit/20433de)

The third piece of work was the Chinese name circuit. The existing short-string field was not enough to hold this name directly. The implementation adds a UTF-8 name format that feeds the full bytes together with the length into the Poseidon hash before comparison, avoiding name truncation. This format currently accepts 1 to 31 UTF-8 bytes and constrains the field name, the JSON representation, and the disclosure salt. This is a reviewed experimental scope. It does not yet cover all name lengths and encoding forms. [Native name handling](https://github.com/bonds-tw/backupTW-iOS/blob/2a9e864/Native/OpenACAge/predicate.rs)

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/holder-creating-proof.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image, iPhone creating a name proof">
    <img src="/images/reports/offline-wallet-verification/holder-creating-proof.jpg" alt="The iPhone name proof screen shows the proof being created on this phone, with material preparation at 100 percent" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>Figure 4. Proof creation on the holder side. Material preparation reaching 100 percent and proof creation completing are different stages. This screen by itself does not indicate a successful verification.</em></figcaption>
</figure>

After adding the circuit, the native binding, the circuit, and the keys had to be updated together. The build also dealt with version and cache consistency of the Circom witness loader, and moved large temporary arrays to heap memory to reduce stack exhaustion on iOS worker threads. On the build side, checks with synthetic credentials confirmed that the correct name is accepted and a wrong name is rejected. These checks verify that the program and the material are consistent. Whether a real telecom credential is compatible is a separate acceptance item.

Both devices at one point showed a verification file download failure. This round's new name material had not yet been published to the download location configured in the app, so the final field test used files built and installed locally. This success demonstrates the offline flow when material is complete. Whether ordinary users can complete preparation from the public download entry still needs separate acceptance after the material is published. Publishing this article also does not mean the new app version or the native material has been released externally.

Finally, the action names, credential options, progress, and result text in the zero-knowledge proof area were changed to Traditional Chinese. This update was completed after this round's timing. Screens from the new interface were not mixed into the older test records to estimate performance.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/wallet-use-localized.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image, Traditional Chinese zero-knowledge proof menu">
    <img src="/images/reports/offline-wallet-verification/wallet-use-localized.jpg" alt="The zero-knowledge proof area of the Use tab is now in Traditional Chinese, including offline verification preparation, responding to a name verification, and verifying a name with zero-knowledge proof or SD-JWT-VC" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>Figure 5. The Traditional Chinese menu after the timed tests. The screenshot keeps the actual interface at the time. This article does not substitute progress hints or promotional text for verification records.</em></figcaption>
</figure>

## Three of four comparisons completed verification

The data for this round comes from device records between 11:22 and 11:24 a.m. on 6 September 2026. An iPhone 14 was the holder side and an iPad mini (A17 Pro) was the verifier side. All credentials stayed on the iPhone. Records on both devices show app 1.0, build 1, on beta versions of iOS and iPadOS 27.0. The later Traditional Chinese install has build 2026090602 and is not included in this timing set.

Operating conditions were airplane mode on both devices, Wi-Fi off, Bluetooth on. This condition is recorded from the operator's report, and the iPad success screenshot also shows the airplane icon. The diagnostic records confirm that the successful responses went over Bluetooth, but they do not record the full radio state and there is no packet capture. The interface screenshots taken after connectivity was restored at noon are used only to illustrate operation.

The table below uses the iPad's final decision as the success criterion. End-to-end verification runs from the iPad showing the QR code until it shows the decision, including scanning, consent, holder-side processing, and transport. Verification time is the local verification interval recorded by the app. For ZKP this is native linked-proof verification. For SD-JWT it covers parsing, signature, trust, and name checks. The internal scope of the two is not identical. Transport data volume is the application-layer response packet size, excluding Bluetooth protocol overhead.

<table class="offline-comparison-table" tabindex="0" aria-label="Real-device results for two credentials and two verification methods, scrolls horizontally">
<thead><tr><th scope="col">Credential and method</th><th scope="col">Observed result</th><th scope="col">iPad end-to-end</th><th scope="col">Local verification</th><th scope="col">Response size</th></tr></thead>
<tbody>
<tr><td>Telecom credential × SD-JWT-VC</td><td>1 success</td><td>13.400 s</td><td>20 ms</td><td>3,044 bytes</td></tr>
<tr><td>MyData self-issued credential × SD-JWT-VC</td><td>1 success</td><td>7.845 s</td><td>15 ms</td><td>1,977 bytes</td></tr>
<tr><td>Telecom credential × ZKP</td><td>2 holder-side failures</td><td>Did not reach iPad decision</td><td>No record</td><td>Not sent</td></tr>
<tr><td>MyData self-issued credential × ZKP</td><td>1 success</td><td>27.493 s</td><td>1,691 ms</td><td>213,199 bytes</td></tr>
</tbody>
</table>

Each of the three successes is a single record, and the telecom credential ZKP has two failures. These raw values describe this round's operation. They cannot represent success rates, average performance, or tail latency. Failure durations were not mixed into the success samples, and the iPhone and iPad records of the same verification were not double-counted as two successes. [This round's de-identified timing data](../../data/offline-wallet-verification/measurements.csv) and [the field definitions](../../data/offline-wallet-verification/README.txt) can be downloaded.

The holder-side breakdown for the self-issued credential ZKP is as follows. The Prepare cache missed, so this record includes the cost of building Prepare. It cannot be used to represent speed after a cache hit.

<table class="offline-comparison-table" tabindex="0" aria-label="Holder-side timing for the self-issued credential zero-knowledge proof, scrolls horizontally">
<thead><tr><th scope="col">Holder-side stage</th><th scope="col">Time this round</th></tr></thead>
<tbody>
<tr><td>Prepare</td><td>8.298 s</td></tr>
<tr><td>Show</td><td>0.630 s</td></tr>
<tr><td>Prepare and Show combined</td><td>8.928 s</td></tr>
<tr><td>Bluetooth send interval recorded by the iPhone</td><td>7.522 s</td></tr>
</tbody>
</table>

These four rows do not form a complete time breakdown of the flow, and the combined row must not be added again. The iPad end-to-end time also includes user actions, material checks, holder-side self-verification, and interface handling. The transport time in the iPad diagnostic field actually covers the waiting interval from showing the QR code to finishing receipt of the response. It cannot be read as pure Bluetooth transfer time.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/ipad-mydata-zkp-success.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image, iPad completing zero-knowledge name verification of the MyData self-issued credential in airplane mode">
    <img src="/images/reports/offline-wallet-verification/ipad-mydata-zkp-success.jpg" alt="The iPad status bar shows airplane mode, the app has ZKP and MyData digital ID selected, the result shows the name 黃彥霖 verified, and the source note marks a self-issued derived credential with no government endorsement" width="1200" height="1827" loading="lazy" />
  </a>
  <figcaption><em>Figure 6. The iPad's success screen for the self-issued credential ZKP, keeping the airplane mode icon and the self-issued source note. Part of the timing text at the bottom is covered by the tab bar. Table values are taken from device records.</em></figcaption>
</figure>

The two telecom credential ZKP attempts ended at 1.687 seconds and 1.644 seconds. Both are recorded as holder-side local failures, with no response size, no Prepare and Show stage times, and no iPad result. What can be confirmed is that the failure occurred before the Bluetooth send. The current diagnostics are not enough to determine which native check rejected the input.

The code offers several directions to be checked. Native input handling limits the length of the JWT signed content and of the encoded payload, and also constrains the salt, the JSON escaping representation, and the shape of the name field. A self-issued derived credential can be generated to meet these conditions. The telecom credential must keep the original content signed by the issuer, so compatibility differs. Success on the SD-JWT path means general verification can accept the credential. It does not follow that the zero-knowledge circuit can process the same input.

In particular, the 3,044-byte SD-JWT response packet must not be compared directly with the circuit's 2K limit. The former includes the outer envelope, disclosed data, and the holder binding proof. The latter limits a specific circuit input. Without the actual input length and a preserved native error code, insufficient capacity can only be listed as a hypothesis. The next step should be to add stage errors and length diagnostics that contain no credential content, and then decide whether to enlarge the circuit.

## General document verification adds source and status explanations

The developer also provided the result page of the general document presentation flow. The screen explains separately the holder's response to the challenge, the signer's identity, the field contents, and the freshness of revocation data. This helps identify another common trust relationship. A Citizen Digital Certificate (自然人憑證) can identify the signer, but the data content signed by the holder still needs a separate basis for checking.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/general-verification-limits.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image, expiry and revocation notices in general document verification">
    <img src="/images/reports/offline-wallet-verification/general-verification-limits.jpg" alt="The general document verification result shows that the holder signed this challenge with the phone key, and notes that the local revocation list is more than three days old, that the fields are signed by the holder, and that the document records no expiry date" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>Figure 7. General document verification result, taken at 12:09 p.m. The screen notes that the local revocation list is more than three days old. This screenshot has no matching test record, and the 1.02 seconds shown is not included in the four-way name verification comparison.</em></figcaption>
</figure>

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/offline-wallet-verification/general-verification-source.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image, signer and disclosed content of a general document">
    <img src="/images/reports/offline-wallet-verification/general-verification-source.jpg" alt="The general verification result explains that the certificate was issued by a government certificate authority to 黃彥霖, that the certificate identifies the signer, that the field contents are claimed by the holder, and the screen discloses the name while withholding the other five fields" width="900" height="1948" loading="lazy" />
  </a>
  <figcaption><em>Figure 8. Signer and field explanations in a general presentation result. The screen also notes that the signing certificate may reveal the legal name and create linkage across presentations, and states that the presentation time is recorded by the holder-side clock.</em></figcaption>
</figure>

These two figures show the result semantics of the existing general verification flow. They add no ZKP or SD-JWT name test samples to this round. The local verification notice on screen also cannot by itself prove that the whole device was offline. Policy acceptance can adopt this kind of layered explanation, requiring systems to state clearly which checks have been completed and which statuses remain unconfirmed, and reducing the risk that users read a single pass indicator as complete identity assurance.

## A name proof is still some distance from full identity assurance

The condition proven by this round's ZKP is that the signed name equals the name specified by the verifier. The verifier already knew 「黃彥霖」 before issuing the request, and a successful result confirms that guess. The verification request and the response envelope also contain the target name. The proof reduces transmission of the raw disclosure and credential content, but it does not hide this already-public verification condition. Its privacy effect cannot be equated directly with an age-range proof that reveals only whether someone is an adult.

Re-randomization can reduce the linkability of the proof object itself, but the self-issued credential response currently still carries a fixed issuer DID, which can form a stable pseudonym. Name, time, and surrounding interaction information may also be correlated. The absolute privacy goal on the early website has not been achieved in this round's results. SD-JWT itself also has the limitation that repeated presentations can be linked. See the [privacy considerations in RFC 9901](https://www.rfc-editor.org/rfc/rfc9901.html#section-10).

The current Bluetooth envelope does not yet provide application-layer encryption, and verifier authentication is not complete. The one-time challenge and the expiry limit constrain reuse of old responses, but they are not enough to rule out on-site relaying of requests or unauthorized verifiers. Two-device tests of communication attacks and replay attacks were not carried out in this round. Success in the normal flow is not treated as a complete security acceptance.

Validity periods also differ at two levels. The SD-JWT comparison path checks the credential expiry locally. The current ZKP expiry check happens in holder-side input handling and has not yet been brought into circuit conditions that the verifier can check independently. Neither offline path can confirm the latest revocation status after going offline. Name equality, signature pass, issuer snapshot match, and current validity of the document should therefore be presented separately.

This round also did not swap the roles of the iPhone and the iPad, did not test Android or other vendors' wallets, and did not obtain repeated samples suitable for statistics. These limits define how far the results can be extrapolated.

## Policy and further development should use layered acceptance

**Make offline capability an explicit service requirement.** Services that must keep operating during disasters or communication outages should define advance preparation, how long they can stay offline, device storage needs, and fallback procedures on failure. Procurement acceptance should directly measure the complete operation from scanning to decision after the network is cut, and should cover low-end devices, small tablet windows, and accessibility needs. Paper or manual alternatives still need to be kept, so that digital backup does not create a new barrier to use.

**Set validity periods and responsibilities for offline trust data.** Agencies and issuers should provide verifiable, portable trust data that clearly marks the version, check time, key rotation, and revocation information. Service providers decide by risk whether to refuse, hand over to a person, or offer limited service when the snapshot is too old, and let the public see the basis for the decision. This round's result of storing 41 issuers shows that advance checking can be moved onto the device, but it does not solve the status gap during a long outage.

**Include credential format compatibility in public test data.** The name field, Unicode representation, salt length, signature algorithm, and credential size can all affect whether existing zero-knowledge tools can use a credential. Issuers should provide test vectors without real personal data, together with format documentation, so that third-party wallets can first complete reproducible compatibility checks. Format planning should also accommodate long names and multilingual text, so that this round's 31-byte experimental limit does not become a service eligibility limit.

**Choose the disclosure method by verification purpose.** When only an age range or an eligibility condition needs to be decided, a predicate proof has a better chance of reducing unnecessary data. A name equality check should state that the target name is already known to the verifier, and its necessity should be assessed. Deployment requirements should also cover channel encryption, verifier authentication, fixed identifiers, and record retention and deletion. Using ZKP alone cannot be the criterion for privacy compliance.

**Describe government credentials and holder-derived data separately.** An application can give the two sources similar operating flows, but the result must state who signed, which fields are proven, and which source relationship has been verified. For MyData data to retain agency-origin assurance when verified by a third party, a signature that carries through verification or a formal credential delivery mechanism is needed. A self-derived name proof cannot fill this institutional condition.

The next phase should start by diagnosing the telecom credential ZKP failure and obtaining reproducible evidence of the input limits, and then assess the cost of enlarging the circuit. Before external release, public material downloads, communication protection, verifier authentication, expiry and revocation semantics, negative tests, and repeated multi-device measurements must also be completed. Each of these items should have its own pass condition, so that both the completed offline functions and the guarantees not yet obtained can be tracked continuously.
