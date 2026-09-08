---
title: "Integrating MyData: A Data Vault in the Digital Wallet"
description: "The MyData platform only relays data. It does not sign, does not vouch, and purges after eight hours. This report records how Bonds brings MyData documents into a vault on the phone: the storage format comparison, the privacy and security design, results from a real account, and policy recommendations for getting verifiers to recognise these documents so they do not become orphans."
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "個資保護", "隱私", "資安", "信任根與信任清單", "公共採購", "開源", "台灣"]
keywords: ["MyData", "個人化資料自主運用", "資料保險箱", "有備而來", "SD-JWT VC", "選擇性揭露", "Solid Protocol", "自然人憑證", "行動自然人憑證", "PDF 簽章", "PAdES", "zkPDF", "zkTLS", "TLSNotary", "OID4VCI", "數位憑證皮夾", "TWDIW", "請出示皮夾", "資料需求方", "持有人衍生"]
pubDate: 2026-09-05
draft: false
lang: "en"
translationOf: "2026-09-05-mydata-vault-in-the-digital-wallet"
translatedBy: "Claude Fable 5.1"
translatedDate: 2026-09-08
aiModel: "Anthropic Claude Fable 5.1"
aiPrompt: "依有備而來 iOS 原始碼（MyDataScratch、MyDataVaultArchive、MyDataDocumentType、MyDataPendingRequestStore、MyDataAutofillProfile）、開發交接與檢查點文件、MyData 平臺公開頁面與常見問題、數位發展部公開資料，以及真實 MyData 帳號在 iPhone 上的匯入結果，撰寫 MyData 資料保險箱的開發報告與政策建議。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-05-mydata-vault-in-the-digital-wallet"
aiGeneratedDate: 2026-09-05
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 9
slug: "2026-09-05-mydata-vault-in-the-digital-wallet"
---

*English translation of the original Chinese report published on 5 September 2026. Where the two differ, the Chinese version is authoritative.*

_This is the fifth report in the series "Bonds (有備而來): Development Reports on the Ideal Digital Wallet". It is written from the Bonds source code, the development records, and hands-on operation with a real MyData account on an iPhone. The screenshots come from the development build of the app. File contents, names, national ID numbers, and addresses never appear. The description of how the MyData platform works is taken from the platform's public pages and from public material published by the Ministry of Digital Affairs (moda)._

The first four reports dealt with credentials. The Citizen Digital Certificate (自然人憑證), the telecom credential, and government cards all have a clearly identified issuer. The wallet's job is to collect them, keep them, and present them. This report deals with something that has no issuer. The MyData platform moves household registration, income, insurance enrolment, and land registry data from agencies to citizens. What it hands over is a PDF or a CSV. The platform deletes the file as soon as it is delivered, and also deletes it if nobody collects it within eight hours. What the citizen ends up holding is a document with no signature, no endorsement, and nowhere to keep it.

Bonds puts these documents into a data vault on the phone. This report records why the vault is needed, how the storage format was chosen, how privacy and security are handled, what happened when a real account was used, and what is still missing before these documents are recognised on the verifier side.

## MyData's architecture and the gap it leaves

The MyData platform is operated by the Ministry of Digital Affairs (moda). According to statistics published by moda, the platform is connected to more than seventy agencies, including more than twenty local governments, and offers over eight hundred data downloads and service applications. The platform describes its core as "citizen consent, secure data retrieval" and runs on a three-party architecture. Data-providing agencies keep the original records. The platform handles identity verification and transport. Service providers (government agencies, or enterprises the platform trusts) receive the data under the citizen's one-time consent.

This architecture has four characteristics that shape every design decision that follows.

**The platform only relays; it does not retain.** The platform's privacy policy states that "once data has been retrieved, the system immediately deletes the personal data obtained", and that data left uncollected "will be automatically deleted by this platform after eight hours". This is the correct privacy design. The platform should not become a second database. The cost is that citizens have no storage location under their own control. The tax certificate downloaded today has to be re-verified, re-applied for, and waited for again next month when applying for a loan.

**The documents are not signed.** A household registration national ID data file downloaded with a real account was checked byte by byte. All fourteen PDF signature markers were zero. No signature dictionary, no ByteRange, no signature form field, no attached detached signature. The detection tool was calibrated against eleven real PDFs produced with pyhanko and pypdf, including encrypted files, object streams, and the edge case of "field created but unsigned", to confirm that this zero is a fact about the document and not a blind spot in the tool. The agency's signature exists at the API layer. It signs the message the agency returns to the platform. That signature does not travel with the document into the citizen's hands.

**Endorsement only holds inside the online flow.** For over-the-counter verification, MyData has the citizen present a barcode valid for twenty minutes, plus a one-time password received by SMS or email. The counter staff scan the code, and the platform delivers the document to the counter. Nothing in this flow verifies the file in the citizen's hand. What is verified is the copy the platform re-delivers at that moment. Online services work the same way: the service provider receives data sent directly by the platform. In other words, MyData's trust rests on the act of "the platform transmitting right now". Outside that act, the document is just a PDF.

**Downloads are synchronous waits; data is produced asynchronously.** The page for personal income data states "estimated download time about 120 minutes". When the data is ready, a notification is sent, and the citizen has to return to "Personal Documents" in the personal area to download it. The eight-hour clock starts from there.

Taken together, these four characteristics are the requirement for the vault. Citizens need somewhere to keep these documents. While kept, it must be possible to prove they have not been altered. In future, it must be possible to disclose only one field from them. And this place needs to be stricter than a cloud drive or a photo album. The digital wallet already has per-card keys, the Secure Enclave, selective disclosure, and a presentation flow. It is the most natural place to take on this requirement.

## Comparing storage formats and deciding

Five approaches were evaluated in the early planning stage, against four criteria. First, can it be verified offline. Second, can a single field be disclosed on its own. Third, can it prove the document is identical to what was downloaded. Fourth, is it compatible with the app's existing SD-JWT-VC and OpenID4VP stack.

| Approach | Offline verification | Per-field disclosure | Original-file integrity | Fit with existing stack | Assessment |
| --- | --- | --- | --- | --- | --- |
| Keep the original PDF or CSV with a SHA-256 fingerprint | Yes | No | Yes | Neutral | Adopted, as the single source of truth |
| Parse the fields and package them as a holder-signed SD-JWT-VC | Yes | Yes | Bound by fingerprint | Fully compatible | Adopted, as a derived layer generated on demand |
| JSON-LD VC with BBS+ signatures | Yes | Yes, and unlinkable | Needs separate work | Second stack | Reserved until unlinkability becomes a hard requirement |
| ISO 18013-5 mdoc | Yes | Yes | Needs separate work | Second stack | Deferred; only needed for physical NFC scenarios |
| Solid Pod (personal data storage protocol) | No; the verifier must connect and read the Pod | Not provided by the protocol itself | Needs separate work | An entirely different layer | Not adopted |

The design that was settled on has two layers. **The original file is the single source of truth.** The vault keeps the file the agency produced, together with its SHA-256 fingerprint and import time. The user can reopen it at any time, re-verify the fingerprint, replace it with a fresh download, or delete it individually. **Credentials are derivatives.** Only when a presentation is needed are fields parsed from the original file and signed by the holder into an SD-JWT-VC, using the Citizen Digital Certificate or the per-card key. The credential records the source document's fingerprint, document type, and parser version. Its trust label is fixed as "holder-derived from a MyData document". Neither the app's screens nor the verifier side will ever display it as government-issued.

An early version went the opposite way. In order to show vault documents on the home screen, the app once self-signed every document into a credential. That approach was later withdrawn, on the grounds that self-issuing adds no trust root. The downloaded file had no signature to begin with. Re-signing its fields with a phone key yields no more trust than the original file, and instead blurs "credential" and "document" into one thing in the user's eyes. After the rollback, the home screen separates "self-issued national ID", "government wallet cards", and "MyData data vault" into three sections. The vault lists straight from the original files and no longer manufactures credentials for display.

### Why Solid was not used

Solid Protocol was seriously evaluated during planning, because in its language it sits very close to the goal of "personal data under personal control". It was not adopted, for three reasons.

First, it is a different layer. Solid is a protocol for storage and access control. It specifies which Pod data lives in and who may read it. It does not sign, does not do selective disclosure, and does not define a credential format. Even with Solid in place, a layer of SD-JWT-VC or an equivalent credential format would still have to sit on top in order to answer "who says this field is true". The problem Solid solves does not overlap with the problem here.

Second, the direction of verification is reversed. Solid's model has the verifier connect to the holder's Pod and read the data. That needs an always-online server and an access authorisation scheme. The digital wallet's model has the holder hand over a set of bytes that carries its own signature, which the verifier can check offline. The convenience-store pickup in the second report and the offline Bluetooth presentation in the third report both depend on the latter. Bringing in Solid would add a network dependency and an availability risk to every presentation.

Third, ecosystem alignment. Moda's Digital Credential Wallet (TWDIW) and the EU's EUDI Architecture Reference Framework are both converging on SD-JWT-VC and mdoc. Bonds' government cards, verifier, and OpenID4VP presentation all run on SD-JWT-VC end to end. The vault follows the same path, so there is no second set of signing, verification, and presentation code to maintain.

Solid suits dynamic, multi-party collaborative data, such as social posts, calendars, and jointly edited records. Static government-issued documents need non-repudiable signatures and offline presentation, and Solid leaves both of those to someone else.

### Why zkPDF and zkTLS are also hard to integrate

Beyond storage formats, planning also evaluated two paths that would use zero-knowledge proofs (ZKP) to establish a trust root for MyData documents directly. Both were ruled out after evaluation and field testing. The cryptography itself is not the problem. What gets in the way is how MyData delivers data.

**zkPDF presupposes a signed document.** The zkpdf project from the Privacy and Scaling Explorations (PSE) group can verify a PKCS#7 RSA-SHA256 signature embedded in a PDF inside a circuit, then prove that a given page contains a given string, without the holder handing over the whole document. This path was the first choice for a while. The decision table written during development said "if signed, go zkpdf". Once the household registration PDF downloaded from a real account measured all fourteen signature markers at zero, the path closed. Putting an unsigned PDF through zkpdf proves only that "this file contains this text". Anyone can produce the same file with word-processing software. It cannot prove that an agency said these things.

Even if documents carry signatures in future, three integration obstacles remain to be cleared first. First, MyData's PDFs are encrypted with the standard security handler, with the national ID number as the password. The content streams are ciphertext. The circuit has to decrypt and then decompress before it can see any text, or the file is decrypted outside the circuit and the plaintext is handed to the prover, which amounts to handing over the whole document. Second, text in Chinese PDFs is encoded through CID and CMap tables. To extract the three characters "臺北市" inside a circuit, the font mapping tables also have to go into the circuit, and how well that is supported varies with the tool that produced each document. The eight agencies do not use the same tools. Third, zkpdf generates proofs with the SP1 zkVM, which is designed to run on a proving network or a desktop machine. On a phone there is no viable path short of several minutes and several GB of memory, and generating the proof remotely requires uploading the plaintext PDF, at which point the privacy premise disappears. The fourth report measured the OpenAC circuit at a few seconds on the phone and half a GB on the verifier side. The zkVM route costs one to two orders of magnitude more.

**zkTLS proves what a website said, not what an agency signed.** Protocols like TLSNotary have the holder and a notary jointly run a TLS connection. The notary never sees the plaintext, signs a commitment to the transmitted content afterwards, and the holder can then selectively disclose part of it. Applied to MyData, it could in theory prove that "mydata.nat.gov.tw returned this file during this connection". On closer evaluation there are five problems.

1. **The other end of the connection is the TW FidO mobile Citizen Digital Certificate, not plain HTTPS.** MyData's identity verification hands the user off to the TW FidO app, signs there, and returns. Income data additionally has to be downloaded two hours later over a new connection started from the personal area. MPC-TLS requires the notary to take part in the same connection from the handshake onwards. The app-to-app handoff and the asynchronous download split "one connection" into several, so the proof cannot cover the whole causal chain.
2. **What comes back is an encrypted ZIP, not readable fields.** zkTLS commits to transmitted bytes. To selectively disclose "is income above the threshold", the proof would have to decompress, decrypt, and parse the PDF, which lands back on the zkPDF problem. Commit to a stretch of ciphertext, and all that can be disclosed is the ciphertext.
3. **TLS version.** In a field test, mydata.nat.gov.tw negotiates TLS 1.3 by default and still accepts TLS 1.2. The TLSNotary documentation states that TLS 1.2 is supported today and 1.3 is on the roadmap. It can be connected today; one security upgrade on the platform side would break it.
4. **The trust anchor is the website certificate, not the agency seal.** The force of a zkTLS proof is tied to the TLS certificate of mydata.nat.gov.tw, issued by Taiwan-CA (臺灣網路認證公司) as part of the web PKI. A verifier therefore has to believe two things: the web certificate system, and that the notary is not colluding. Neither is on moda's trust list, and a government verifier has no reason to accept it. TLSNotary's own documentation states that a verifier accepts the signed data only if it trusts the notary.
5. **The proof is bound to the page structure.** What the proof points at is byte positions in the web response. Any redesign of the platform makes existing proofs meaningless. A document signature does not lapse when the website changes, and that is the fundamental difference between a signature and zkTLS.

Both paths point to the same conclusion. Zero-knowledge proofs can hide fields; they cannot conjure a trust root out of nothing. The trust root has to be put into the document by the data-providing agency at delivery time, either as a signature or by issuing a credential directly. Once documents carry signatures, zkPDF becomes a stronger option than having the holder sign on the agency's behalf. Until then, keeping the original file and its fingerprint in the vault is the only honest approach.

## Privacy and security design

The vault handles the most sensitive data the app has ever touched. The design splits into two separate disciplines.

**National ID data keeps the destroy-after-use principle.** The household registration PDF contains the name, national ID number, address, and every member of the household. After download it sits in an isolated area of the temporary directory. During extraction, every entry's path is checked to prevent zip-slip. The bytes are read out and wiped immediately, before any step that needs user interaction. By the time the app asks for the national ID number to decrypt, there is nothing left on disk to protect. The only product of this path is a selective-disclosure credential signed with the Citizen Digital Certificate.

**Vault documents keep the original file, under the same level of protection.** The financial, insurance, tax, land registry, and household registration documents the user chooses to import are written to Application Support and never to Documents, because Documents is published to the Files app, where anyone holding an unlocked phone can browse, AirDrop, or copy them, and it goes into every iCloud backup. The file protection class is completeUnlessOpen: unreadable while locked, but a write already in progress can finish after auto-lock. The whole directory is marked as excluded from backup. The original records never leave this phone. Next to each original file is a metadata file recording the SHA-256 at the moment of writing. The detail page recomputes and compares it on every open and, on a mismatch, states plainly that "the file does not match the fingerprint saved at import".

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/mydata-vault/wallet-vault-detail.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, vault document detail page">
    <img src="/images/reports/mydata-vault/wallet-vault-detail.jpg" alt="Detail page for land registry and actual-price data in the Bonds vault, listing document type, source, import time, file format, SHA-256 file fingerprint, and integrity check passed, with View original document and Export or share a copy below" width="900" height="1956" loading="lazy" />
  </a>
  <figcaption><em>Figure 1. The detail page for a vault document. The fingerprint is recomputed on every open. "View original document" renders the PDF in memory and writes no preview file. "Export or share a copy" asks for confirmation once more and explains that the copy is no longer protected once it leaves the vault.</em></figcaption>
</figure>

**Previews never touch disk.** "View original document" hands the PDF bytes straight to the renderer. The ZIP-wrapped PDFs MyData commonly delivers are unpacked at import, keeping only the PDF. Previewing creates no file that another app could read. Sharing is the only path by which data leaves the vault. Before it happens, a confirmation appears, stating that the copy will no longer be protected and asking the user to check the recipient and destination.

**Saved details are filled into the official site only.** Every MyData retrieval requires the national ID number and date of birth. The app offers optional "saved details", stored in the iOS keychain, restricted to this device, and excluded from backup. They are only ever auto-filled into official pages on mydata.nat.gov.tw. They are never sent to any Bonds server and never written into any credential.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/mydata-vault/wallet-mydata-autofill.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, MyData saved details settings page">
    <img src="/images/reports/mydata-vault/wallet-mydata-autofill.jpg" alt="The Bonds MyData saved details page, with two fields for the Taiwan national ID number and date of birth, and a note below that they are kept only in this iPhone's keychain, filled only into the official mydata.nat.gov.tw, never sent to Bonds, and never included in backups" width="900" height="1956" loading="lazy" />
  </a>
  <figcaption><em>Figure 2. The scope of the saved details is stated on the screen. These two values are required inputs for MyData sign-in and file decryption. The app fills them in on the user's behalf; it does not take custody of them.</em></figcaption>
</figure>

**Pending retrievals record only metadata.** Income data takes two hours, and that wait should not be tied to a web view. The pending item the app records holds only the document identifier and the start time. No national ID number, no date of birth, no file name, no field of any kind. It is forgotten automatically after eight hours, because by then the file on the platform side no longer exists either, and the app should not keep telling the user something is waiting.

**Access requires unlocking.** Entering the vault requires Face ID or the device passcode, with a ten-minute grace period after unlocking. Deleting a document removes both the original file and the fingerprint metadata file, leaving no orphans.

Each of these designs has a corresponding unit test. The extraction path guard, the fingerprint comparison, and the completeness of deletion were additionally confirmed in reverse with mutation tests: when the check is deliberately broken, the test must turn red.

## Results with a real account

The vault has completed imports on an iPhone with a real MyData account. Of the eight items in the registry, six are now in the vault: the tax certificate, personal income data, National Health Insurance (NHI) enrolment data, NHI premium payment records, land registry and actual-price data, and the household registration transcript. All are marked "original file saved", in a mix of PDF and ZIP formats.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/mydata-vault/wallet-vault-list.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, the MyData data vault list on the home screen">
    <img src="/images/reports/mydata-vault/wallet-vault-list.jpg" alt="The MyData data vault section on the Bonds home screen, with six documents in order: tax certificate, personal income data, NHI enrolment data, land registry and actual-price data, NHI premium payment records, and household registration transcript, each marked original file saved, with the format and import time at the bottom and a government wallet card above" width="900" height="1947" loading="lazy" />
  </a>
  <figcaption><em>Figure 3. The vault's document list. Each row shows only the document type and storage status. Format and import time sit at the bottom of the card. No content field appears at this level. The government wallet card above comes from a separate line; its trust source is labelled as moda's trust list, in contrast to the vault's "original file saved".</em></figcaption>
</figure>

Several things were confirmed along the way that can only be measured with a real account.

**All eight data item paths are real.** Every item on the platform shares the same URL shape, `personal/detail/API.` followed by a code. The codes for all eight items (income, labour insurance enrolment, NHI enrolment, NHI premiums, tax certificate, labour pension contributions, land registry and actual price, and current household registration) were looked up on the platform itself and written into the app's document registry. Academic credentials were deliberately excluded. None of the platform's 141 document items corresponds to graduation or a degree. The Ministry of Education's degree verification runs on a different system and is a separate integration.

**Slow documents need a flow the user can leave.** The two-hour wait for income data confirmed that a synchronous-wait design does not work. The app now shows the estimated time before the request is sent, lets the user leave, and, once the platform's notification arrives, lets them come back through the "Personal Documents" entry point to continue. The same entry point supports downloading several completed documents in a row after a single sign-in. The platform may still ask for identity re-verification on each new retrieval.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/mydata-vault/wallet-mydata-onboard.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, the explanation page for the MyData import flow">
    <img src="/images/reports/mydata-vault/wallet-mydata-onboard.jpg" alt="The Bonds page explaining how an official credential is created, listing four steps: fill in the MyData details, approve in TW FidO, return to Bonds, then download or continue later, with an option below to remember the MyData saved details on this iPhone" width="900" height="1956" loading="lazy" />
  </a>
  <figcaption><em>Figure 4. Before import, the four steps that are about to happen are explained, including leaving the app for TW FidO, and that slow documents can be continued later from "Personal Documents". This page exists so that the user knows where the data is going before it moves.</em></figcaption>
</figure>

**The depth of the flow is the main usability problem.** The UI audit conducted in the same period rated MyData import as the longest flow in the app: eight to ten steps, four stacked windows, and a decryption-password error prompt that pops up recursively. These are scheduled for fixing. This report does not count them as done.

**The national ID path was already working.** Beyond measuring the absence of a signature, that real download also completed the whole issuance path: MyData download, TW FidO signing, offline verification of the certificate chain up to MOICA G3, storage, and reading back on the home screen. One new fact measured at the time was that the Citizen Digital Certificate contains no national ID number. The subject name holds only the country, the name, and a sixteen-digit serial number. Offline binding can only rely on the name.

## Credentials minted at presentation time

Keeping the original file solves half the problem. The other half is turning a PDF into an answer the verifier can understand, and giving only the answer. Both ends of this path are now connected.

The verifier picks a wallet and a scenario on a web page, then fills in the rule's parameters: the year and ceiling for income, the specified date for insurance enrolment, the county or city and minimum months for household registration. The rule is sent along with the signed request. The request is written in DCQL, with the question placed in `bonds_rule`. After scanning the code, the wallet reads the original file from the vault, unlocks it with the national ID number, reads the fields with the specified parser version, computes the predicate under the rule, and mints a flat SD-JWT VC on the spot. Before presenting, the holder can still switch off fields they do not want to give. Unticked fields never enter the presentation. The original file stays on the phone throughout.

<figure>
  <a href="/images/reports/mydata-vault/verifier-derived-scenario.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, the verifier's page for creating a sample verification">
    <img src="/images/reports/mydata-vault/verifier-derived-scenario.jpg" alt="The Show Your Wallet create-verification page, choosing a wallet first and then a verification purpose, with scenarios including confirm age 18 or over, check name, convenience-store pickup, income within threshold, labour insurance on a specified date, and household registration in a specified county or city; below, the county or city is set to Taipei City and the minimum months registered to 120, with a note that only a yes-or-no answer is disclosed" width="1200" height="1065" loading="lazy" />
  </a>
  <figcaption><em>Figure 5. The verifier only decides what to ask. Before the QR code is generated, the page states which field will be requested, what will not be received, and that the answer is derived and signed by the holder from the original file in the vault, not issued by the government.</em></figcaption>
</figure>

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/mydata-vault/wallet-vault-answerable.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, household registration transcript detail page">
    <img src="/images/reports/mydata-vault/wallet-vault-answerable.jpg" alt="Detail page for the household registration transcript in the Bonds vault, listing document type, source Taiwan MyData, import time, file format ZIP, SHA-256 file fingerprint, integrity check passed, and a final row of answerable questions reading whether household registration is in a given county or city" width="900" height="1947" loading="lazy" />
  </a>
  <figcaption><em>Figure 6. The last row of the detail page, "Answerable questions", is the interface between the vault and the verifier. Only documents with a parser show questions. The others state plainly that no matching verification question exists yet, so the holder does not scan a QR code only to find that nothing can be presented.</em></figcaption>
</figure>

Three implementation decisions are worth recording.

**The rule goes into the signature.** The question the verifier sends and the answer the wallet signs are the same rule, compared key by key. The rule's boundary values, year, and county or city are all inside the signed scope. The verifier cannot later claim to have asked a different question, and the wallet cannot answer a question that was never asked.

**One-time keys.** The issuer of the derived credential and the holder binding use the same ephemeral in-memory key. It disappears after the presentation and never enters the keychain. The claim is the holder's own statement. Signing it with a long-term Secure Enclave key would not add a shred of government endorsement, but it would leave an identifier that can be linked across verifiers. The fourth report pointed out that the linkability of selective disclosure comes from a stable holder key; this path deliberately avoids it. If the answer ever needs to be tied back to the national ID card holder, the binding key can be swapped without touching the interface.

**Three rules cover three scenarios.** The income threshold rule answers the year, the number of paying entities, and whether income is within the ceiling. The insurance status rule answers whether coverage was in force on the specified date. The household registration rule answers whether the holder is registered in a given county or city and whether the specified number of months has been met. Amounts, employers, insured salary, full address, household number, and household members are not in the answer.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/mydata-vault/wallet-disclosure-scenarios.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot, the app's selective disclosure scenarios page">
    <img src="/images/reports/mydata-vault/wallet-disclosure-scenarios.jpg" alt="The Bonds selective disclosure scenarios page, listing three scenarios, income eligibility, insurance status, and residence or property conditions, with what each does not disclose, and a section below headed What the verifier must display, whose first item is holder-derived evidence" width="900" height="1947" loading="lazy" />
  </a>
  <figcaption><em>Figure 7. The in-app scenario explanation is written for both holders and verifiers. The lower half, "What the verifier must display", puts the trust-label requirements into the wallet's own screens rather than leaving them in a specification document.</em></figcaption>
</figure>

### Conditions for verifier acceptance

This is the concrete answer to "how does a verifier recognise these documents". Beyond the standard SD-JWT VC checks and the holder-binding nonce, audience, and digest comparison, the verifier requires five further conditions to hold at the same time.

1. The credential type matches the one requested for this verification, and the hash of the type descriptor equals the value the verifier pinned in advance. The verifier does not trust whatever that URL happens to serve today.
2. The assurance level reads "holder-derived".
3. The source declaration is a document downloaded from MyData, with a 64-hex-character fingerprint and a document type, and the parser version is on the reviewed list.
4. The rule inside the credential is identical, key by key, to the rule sent in this session.
5. The issuer is a did:key, the holder-binding public key is present, and the presenter is the issuer.

When these pass, the result page gives no trust badge. It shows four evidence cards, the trust label, the source document fingerprint, the parser version, and the rule that was asked, and lists only the fields the holder ticked. What the verifier sees is therefore a statement it can check item by item: a certain key, using a certain parser version, answered this question about a file with a certain fingerprint. Government endorsement never appears on the screen.

It is worth noting that these acceptance conditions live inside the credential and depend on no central registry. The advantage is that both sides can start running without a competent authority. The cost is that each side pins the type hash on its own, which degrades into pairwise agreements once the number of verifiers grows. That is exactly why the policy recommendations below argue for a registry: first a working contract, then standardise it.

### Where things stand

Both ends have tests. On the wallet side they cover the normal and rejection paths of the three parsers, the credential shape, disclosure of ticked fields only, different keys across two presentations, and the individual errors for a missing original file, a missing rule, a year mismatch, and a field outside the type. On the verifier side, same-shaped credentials cover the acceptance path and more than ten rejections, including rule mismatch, unreviewed parser, malformed fingerprint, wrong type hash, replay, and holder-binding errors.

On a real device, the household registration transcript's original file has been confirmed to parse into county or city, district, and registration date. This step failed wholesale at one point: every document reported "not this kind of document", because MyData's PDFs are locked with the holder's national ID number and the text layer the parser read was empty. The fix was to unlock with the number from the national ID card in the vault before parsing, and to read plain-CSV deliveries as UTF-8 first and then as Big5.

What is not finished is equally clear. The full round trip between two real devices (scan, consent, disclosure selection, result page, rescan after deleting the document) has not been run to completion. Only three document types have parsers: income, labour insurance, and household registration. The other four (NHI enrolment and withdrawal, tax certificate, labour pension, and land registry) do not. Verification of the agency's signature on the source document is not wired into this flow. The result page always shows holder-derived.

### Honest boundaries

- **The app is not a registered data requester.** Bonds loads the official website in an embedded web view. The user signs in and downloads in person, and all data passes through the user's own screen. The advantage of this route is that it needs no permission of any kind; anyone can do it. The disadvantage is that any redesign of the platform can break it, and it cannot obtain the agency signature the platform provides to service providers.
- **The signing path is enabled only in the development build.** Signing with the Citizen Digital Certificate requires a service provider identifier and key. The production version does not have that backend yet, and the whole issuance and signing segment is switched off in the Release build.
- **The derived-credential round trip is missing its last leg.** Both the wallet and the verifier are implemented and tested, and a real device has parsed the household registration original file, but the full round trip from scan to result page has not been run between two real devices. This report therefore does not claim that path has passed acceptance.
- **The sample is one account and one phone.** Six of the eight items were actually imported; labour insurance enrolment and labour pension contributions have not been run. Item-by-item verification of download formats, whether an update overwrites the same item, and whether items remain visible after a restart all remain to be done.
- **Storing plaintext personal data is itself a product and compliance risk.** The current protection level is no backup, unreadable while locked, and individual deletion, but these are technical controls. The necessity of retention should be reviewed periodically, and the app should let users see what they have stored and for how long.

## Next steps and policy recommendations

### 1. Let documents carry their own signatures

The vault can prove "the file has not been altered". It cannot prove "the agency said these things". The difference is whether the document carries a signature when it leaves the platform. The agency's signature to the platform already exists. What is missing is extending it to the deliverable. Two approaches can proceed in parallel.

In the short term, PDFs delivered by the platform should carry PAdES signatures, and CSVs should come with a detached CAdES or JWS signature. The signer can be the data-providing agency, or the platform signing in a delegated capacity and recording the source agency and retrieval time in the signature attributes. This does not change the three-party architecture and does not require the platform to retain data. It only takes the signing that is already being done one step further. Once documents carry signatures, the zkPDF path closed above reopens, and the holder can prove "income in this agency-signed document is above the threshold" without handing over the document.

In the medium term, the platform should issue SD-JWT-VCs directly over OID4VCI, so that the Digital Credential Wallet and third-party wallets can collect them over the same protocol. The fourth report already pointed out that the field shape of government cards determines whether zero-knowledge proofs can happen at all. If MyData delivered in credential form, predicate proofs such as income brackets and insurance status would have a government signature to stand on.

### 2. Acknowledge that citizens need a place to keep their data

The platform's eight-hour purge policy should stay. What it protects is the platform not becoming a second database. But the purge policy should be paired with an explicit policy position: citizens have the right to keep their own data on devices under their own control, and the wallet is a reasonable option for that location. This position can be embodied in three things. First, the platform's "Personal Documents" page should provide a download description that wallets can recognise, including the document type code, production time, source agency, and file fingerprint. Second, the Digital Credential Wallet programme should list a "data vault" as one of the wallet's functions and set minimum requirements for storage, such as device binding, no backup by default, individual deletion, and export warnings. Third, these requirements should apply equally to the official wallet and to third-party wallets.

### 3. How verifiers recognise these documents so they do not become orphans

A holder-derived credential that no verifier is willing to accept is just a file on a phone. This is the part that most needs policy intervention. Verifier design should follow these rules.

1. **Three trust labels, never mixed on screen.** "Government-issued" means the credential is signed by an agency key. "Derived from an agency-signed document" means the source document carries a verifiable agency signature and the holder's credential is bound to that signature. "Holder-derived" means the source document has no signature, and the credential proves only that the same holder signed this claim and that the claim links to a document with a fixed fingerprint. The verification result page must show four things together: whether the holder's signature is valid, the source document fingerprint, the parser version and rule version, and the trust label.

2. **Decide which level to accept by risk tier.** Low-risk uses, such as rental pre-screening, event registration, and membership eligibility, can accept holder-derived credentials, because they are far stronger than the screenshots and photocopies widely accepted today, adding a fingerprint, a signature, and a traceable rule. Medium-risk uses accept credentials derived from agency-signed documents. High-risk uses require government issuance, or a re-delivery through MyData's existing online flow with the holder's consent. This tiering should be published by the competent authority so that verifiers have something to rely on instead of each working it out alone.

3. **Credential types need a registry.** The derived credential for each document type should have a versioned type identifier and field definitions, for example the tax year and bracket predicate for an income certificate, or whether coverage was in force on a specified date for insurance data. The registry would be maintained by the competent authority or an industry association, and wallets and verifiers would consult the same copy. The predicate's boundary values, currency, and year must fall inside the signed scope and not merely appear on the verifier's screen. The implementation in this report substitutes a derivation contract inside the credential and a pinned type hash for a registry, demonstrating that both sides can start running, but that is a bilateral agreement. The value of a registry is that third parties do not have to negotiate one by one.

4. **Predicates before raw values.** Verifiers should define their needs as questions such as "is it within the threshold", "was coverage in force on the specified date", or "registered in this county or city for at least six months", and the wallet answers only yes or no. This is consistent with the data minimisation ladder in the fourth report, and it lets holder-derived credentials be accepted without handing over the whole document.

5. **Provide an upgrade path through re-verification.** When a verifier receives a holder-derived credential and needs higher assurance, it can guide the holder through a one-time online verification with MyData's existing barcode and one-time-password flow, and bind the result to the fingerprint of the credential just presented. This gives low-assurance documents a path to upgrade instead of becoming permanently useless after a first rejection.

### 4. Interoperability recommendations

- **For the Digital Credential Wallet.** Publish the SD-JWT profile and the way the trust list is extended, so that MyData can be included as an issuer. Presentation formats between wallets have already converged on OpenID4VP. MyData-derived credentials do not need a new protocol; they need eligibility for inclusion on the trust list.
- **For the MyData platform.** Provide a registration path for wallets, so that a wallet can collect data through the formal integration as a "data requester" instead of the current embedded web view. The registration conditions should be public and open to applications from open-source third-party wallets.
- **For verifier software.** The "Show Your Wallet" (請出示皮夾) verifier from the third report, the TWDIW VP Verifier Lite, has already added the acceptance conditions for holder-derived credentials and the four evidence cards on the result page. The code and tests are public and can serve as a reference implementation. Any verifier can deploy it with one click to test how its own flow reacts to this kind of credential.
- **For personal data compliance.** A wallet that stores plaintext documents should publish a technical description of its data retention, including the protection class, backup policy, and deletion semantics, and provide a complete in-app record of exports and deletions.

### 5. Governance boundary

The vault in this report is an implementation in a development build of the app. It holds no official integration status of any kind. Whether holder-derived credentials are accepted ultimately depends on the rules of verifiers and the competent authority. The tiering and registry proposed here are recommendations. The actual rules should be set by the competent authority together with the data-providing agencies.

## What comes next

1. Complete the two remaining items, labour insurance enrolment and labour pension contributions, and verify all eight items one by one, including update overwrite, visibility after restart, and preview compatibility for each format.
2. Run the three derived-credential scenarios through a full round trip between two real devices, and add parsers for the four remaining document types: NHI enrolment and withdrawal, tax certificate, labour pension, and land registry.
3. Flatten the import flow, removing the four stacked windows and the recursive error prompt.
4. Put two concrete questions to moda: whether the platform has a signed download option, and the conditions for a third-party wallet to register as a data requester.
5. Write this report's trust labels and risk tiers into a one-page specification that can be handed to verifiers, with test vectors.
6. Build the production signing backend so that the Citizen Digital Certificate signing path can leave the development build.

MyData solved the problem of "which agency holds the data". It did not solve the problem of "what happens once the data is in the citizen's hands". Purging after eight hours is right. The absence of a signature on the documents is a gap. The citizen's need for somewhere to keep them is real. The digital wallet can provide that place, and it can turn the documents into credentials that support selective disclosure. Whether those credentials become orphans depends on whether verifiers are willing to recognise them under a set of public rules. The cost of that is low. The effect is to replace the screenshots and photocopies circulating everywhere today with something that has a fingerprint, a signature, and a version.
