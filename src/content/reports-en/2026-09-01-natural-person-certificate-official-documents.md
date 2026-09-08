---
title: "What If Citizens Received Official E-Documents with the Citizen Digital Certificate?"
description: "Taiwan has put G2C citizen e-document exchange into its 2026–2030 (ROC 115–119) plan. I built a real-device prototype with Bonds and break down which parts are still missing between the Citizen Digital Certificate, the digital wallet, legal service of documents, and government procurement."
topic: digital-identity
tags: ["數位皮夾", "共融與可及性", "使用者經驗", "公共採購", "開源", "法律與救濟", "台灣", "北歐"]
keywords: ["電子公文", "自然人憑證", "行動自然人憑證", "G2C", "電子送達", "有備而來", "MyData", "Digital Post", "eDelivery", "資料保險箱"]
pubDate: 2026-09-01
draft: false
lang: "en"
translationOf: "2026-09-01-natural-person-certificate-official-documents"
translatedBy: "Claude Fable 5.1"
translatedDate: 2026-09-08
aiModel: "OpenAI GPT-5.6"
aiPrompt: "以青年諮詢提案、台灣法規與官方計畫、國際數位郵件案例、研究文獻及有備而來真機原型，查核並撰寫可落地的電子公文政策倡議。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-01-natural-person-certificate-official-documents"
aiGeneratedDate: 2026-09-01
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 1
slug: "2026-09-01-natural-person-certificate-official-documents"
---

*English translation of the original Chinese report published on 1 September 2026. Where the two differ, the Chinese version is authoritative.*

_This is the first report in the series "Bonds (有備而來): Development Reports on an Ideal Digital Wallet". OpenAI GPT-5.6 helped collect and cross-check official sources, international cases, and research literature; I then revised the text against my actual development records. The Bonds screens shown here come from a development sandbox on a real iPhone. They use synthetic e-documents and non-routable addresses, are not connected to the government G2C exchange service, and carry no legal service effect._

When I served on the Executive Yuan Youth Advisory Committee, fellow members Chen Chien-ying, Chen Yi-chun, and Huang Chih-lin raised a very direct question. Companies, organisations, and government agencies have exchanged official e-documents for years. Why can't ordinary citizens receive them with their Citizen Digital Certificate (自然人憑證)?

Their [proposal](https://advisory.yda.gov.tw/proposals-detail/316) was about more than printing fewer pages. Registered mail goes to the household registration address, but the person may be working in another city. Ordinary mail leaves no trackable record. A visually impaired person who touches the envelope may still not know that it contains an administrative disposition with a deadline. Each agency builds its own portal, so citizens have to register with each one, install components, and remember where to go to collect their mail.

When I read the proposal, one sentence came to mind: "Let me try building it myself."

I put a "personal e-document inbox" under the MyData data vault in the Bonds app, reused the existing signing redirect for the TW FidO mobile Citizen Digital Certificate, and also opened a development test path for the physical Citizen Digital Certificate card with a card reader. A few hours later, the iPhone could display synthetic e-documents, verify the source signature, decrypt, store, and acknowledge receipt.

That also made one thing clearer to me. A successful signature covers only a short stretch of the whole road.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/natural-person-official-documents/ready-home-vault.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size screenshot: the Bonds home screen and the MyData data vault">
    <img src="/images/reports/natural-person-official-documents/ready-home-vault.png" alt="The Bonds home screen and the MyData data vault" width="1206" height="2622" loading="lazy" />
  </a>
  <figcaption><em>Figure 1. The existing national ID card, government wallet cards, and MyData data vault in Bonds. E-documents are placed under the data vault so that "received" connects to "kept long-term and reused". This is a development build.</em></figcaption>
</figure>

## Taiwan has actually already started

The youth advisory proposal was ultimately classified as "partially adopted". The handling record left several key official commitments.

The Ministry of Digital Affairs (moda) stated that the National Archives Administration (NAA)'s "Document and Records Digital Governance and Intelligent Services Programme" has been included in the 2026–2030 (ROC 115–119) "Smart Government Digital Navigation Development Plan", and that the work items explicitly list a **G2C citizen e-document exchange service**. The National Development Council (NDC) reply goes further: the system architecture and functional development of a citizen inbox platform have been included in the plan, **with the service expected to go live in 2028 (ROC 117)**, after which the competent authorities are to coordinate the construction of a consolidated citizen-side exchange centre. The [plan document reviewed by the Legislative Yuan](https://ppg.ly.gov.tw/ppg/download/agenda1/02/agendaAnnex/11/05/14/110514991.pdf) and the [NAA 2026 (ROC 115) annual administrative plan](https://www.archives.gov.tw/wSite/public/Attachment/008/f1756450402384.pdf) point in the same direction.

The word "expected" has to stay. Today there is no official G2C inbox address that every citizen can register for, no public test endpoint, no list of qualified apps, and no announcement enabling legal service of documents. 2028 (ROC 117) is the official planning schedule. Whether the service is usable on time depends on legislation, budget, procurement, cross-agency onboarding, security, and user acceptance.

The scale is also a new order of magnitude. In its reply to the proposal, the NDC noted that as of 15 July 2024 (ROC 113), 9,835,292 people had applied for a Citizen Digital Certificate, and that there were 37,646 document exchange units at the time. The previous exchange system mainly served organisations with staff, case officers, and document workflows. A service for the whole population must also handle phone changes, moving house, incapacity, guardianship, death, travel abroad, proxies, refusal, misdelivery, certificate revocation, and remedies.

moda was also clear in its official reply: MyData is a platform for personal data self-management, not an e-document exchange platform. MyData suits people who actively retrieve their own data. Electronic service is the government delivering a document that affects rights and deadlines to an address that can be recognised under law. The two can meet on the user's device, but behind them remain two separate systems.

## Why there has never been a service for everyone

The Citizen Digital Certificate has been issued for many years, and the open-source community already has PC/SC, PKCS#11, and GPKI drivers. Card signing itself is not blank territory. What is stuck is five things that must all hold at the same time.

| Layer | Question to answer | Can the Citizen Digital Certificate alone complete it? |
| --- | --- | --- |
| Identity | Who is operating right now? Is the signing key valid? | Partly |
| Address | Which inbox address belongs to this person? When is it activated, deactivated, or switched back to paper? | No |
| Exchange | Which agencies can send? How do packaging, encryption, signatures, and error reporting interoperate? | No |
| Service | When does the statutory deadline start? What happens if the document is never opened, the notification fails, or the person is abroad? | No |
| Evidence and remedy | How does a citizen prove non-receipt, a wrong document, or a system failure? Who is responsible for retrieving the records? | No |

The [Electronic Signatures Act](https://law.moda.gov.tw/LawContent.aspx?id=FL011349&media=print) (電子簽章法) brings qualifying electronic documents and signatures into the legal order. [Article 68 of the Administrative Procedure Act](https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LawNo=68&lsid=FL000632) (行政程序法) subjects electronic delivery to the applicable regulations and specific procedures. The NAA's [Regulations on Electronic Exchange of Official Documents among Government Agencies](https://www.archives.gov.tw/tw/arctw/155-1741.html) (機關公文電子交換作業辦法) and [Guidelines for Computerised Document and Records Management](https://www.archives.gov.tw/tw/arctw/156-1795.html) (文書及檔案管理電腦化作業規範) further govern exchange, confirmation, signatures, and record-keeping.

Compress these layers into a single "Sign in with Citizen Digital Certificate" button and the screen is finished quickly. When a dispute arises, it cannot answer the most important question: from which second does the deadline start counting?

## The closest existing services in Taiwan

Taiwan is not without electronic receipt of documents by individuals. Existing services are mostly wrapped inside specific lines of business.

| Service | What it already does | What is missing for a universal inbox |
| --- | --- | --- |
| [TIPO E-SET / e-Net (e 網通)](https://www.tipo.gov.tw/tw/tipo1/241-1877.html) | Applicants can register for electronic service and receive specific intellectual property documents with a certificate | Covers intellectual property matters only; registration, components, and rules are managed within a single legal domain |
| [Judicial Yuan Electronic Litigation Document Platform](https://www.judicial.gov.tw/tw/cp-248-58073-78798-1.html) | Natural persons can obtain an account with the Citizen Digital Certificate and file pleadings and receive documents in the open case types | Cases and documents have a defined scope; some procedures remain excluded |
| [MOEA G2B e-document exchange](https://serv.gcis.nat.gov.tw/g2b-edoc/tw/Index) | The business side already has an exchange service and business certificates (工商憑證) | Serves enterprises, not all natural persons |
| [MyData](https://mydata.nat.gov.tw/) | Retrieval of personal data initiated by the person, which can go into the data vault | No government-initiated delivery, no time of service, and no exchange receipts |
| [TW FidO](https://moica.nat.gov.tw/news_in_17f02741be1000000769.html) | The phone can perform identity verification and signing | It is a trusted identity component; it has no document address and no exchange network |

These services matter. They prove that "Citizen Digital Certificate plus specific rules plus a bounded set of documents" can work, and they show the cost of fragmentation. Citizens face the government as a single whole; the back end is cut into many portals by agency and by statute.

Another line of advocacy comes from disability access. The Judicial Yuan's published [Guidelines on Access to Justice for Persons with Disabilities](https://www.judicial.gov.tw/tw/cp-1429-1179729-afca9-1.html) and its consultation materials have already run into the risk that visually impaired people cannot read paper court notices and may miss deadlines. A digital inbox that supports VoiceOver, adjustable text size, plain summaries, trusted proxies, and multiple reminders can reduce this kind of paper friction. It must still keep paper, telephone, counter, and staff assistance, because an app also creates new barriers.

## The prototype I built, and what it does not yet do

I first placed the e-document inbox under the MyData data vault as a separate section. The first screen answers only two questions: whether formal receipt is currently activated, and how many documents are stored on this device.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/natural-person-official-documents/official-document-inbox.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size screenshot: the Bonds personal e-document inbox entry">
    <img src="/images/reports/natural-person-official-documents/official-document-inbox.png" alt="The Bonds personal e-document inbox entry" width="1206" height="2622" loading="lazy" />
  </a>
  <figcaption><em>Figure 2. The personal e-document inbox holds one synthetic test package, and the screen also shows "formal receipt not yet activated". This limitation must not be hidden in a help page.</em></figcaption>
</figure>

Then I built four stages of the flow, each of which can fail on its own.

1. **Device trust**. iOS App Attest must first prove that the request comes from a real app on a real device. The first UAT returned `endpoint=unconfigured` and `configuration_missing`, with `identity_data_sent=false` and `signing_started=false`. This failure is correct: when the server side is not ready, the app should stop the flow so that identity data is not sent to an unknown endpoint.
2. **Signing by the person**. TW FidO uses a redirect-based signature; after returning to Bonds, the app checks the one-time request, its status, and the result. The development path for the physical card produces the signature with a Mac card reader and an open-source PKCS#11 driver; the app only creates a one-time request that contains no identity data. This path is suitable for compatibility testing. A phone cannot drive a USB card reader plugged into a Mac out of thin air.
3. **Exchange package**. The sandbox loads synthetic EN / DI / ESW packages, verifies the source signature, decrypts for the designated device, and stores both the ciphertext and the plaintext. Every field deliberately uses synthetic data.
4. **Receipt confirmation**. Opening a document and sending a confirmation are two separate events. The confirmation content must be bound to the document digest, the time, the inbox address, and device evidence, rather than leaving only an easily misread "read" flag.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/natural-person-official-documents/official-document-sandbox.png" target="_blank" rel="noopener noreferrer" aria-label="Open full-size screenshot: Bonds e-document test controls and boundaries">
    <img src="/images/reports/natural-person-official-documents/official-document-sandbox.png" alt="Bonds e-document test controls and boundaries" width="1206" height="2622" loading="lazy" />
  </a>
  <figcaption><em>Figure 3. TW FidO, the physical Citizen Digital Certificate, the G2C sandbox, and the synthetic packages are each independent. The screen states plainly that the sandbox address is not routable and has no legal effect; formal receipt still requires the NAA G2C service and agency service rules.</em></figcaption>
</figure>

What is complete today is a repeatable product and cryptography test path. What is not yet done includes a formal G2C inbox address, test certificates from the competent authority, real agency source signatures, the formal ESW decryption specification, return of receipt confirmations, cross-agency interoperability, the time of service, paper fallback, dispute handling, load testing, and operational audit.

Throughout this work, what I cared about most was that every state be understandable to a person. App Attest passed, Citizen Digital Certificate signature succeeded, source signature valid, document decrypted, user opened it, receipt confirmation delivered to the exchange centre, legal service established: that is at least seven separate things. If any one of them fails, it should leave a distinct error code, a remedy, and a responsible unit.

## Where a digital wallet has the advantage for receiving e-documents

Merely moving paper PDFs into yet another government app offers limited incentive. The value of a digital wallet comes from what it already holds: identity, device keys, consent records, and a personal data vault. It can turn a single delivery into a complete user journey.

### An inbox address that follows the person

A household registration address follows the house. An email address follows the platform. Mobile numbers change too. A wallet can hold a government-issued, revocable, transferable receiving capability, with high-assurance recovery when the device changes. Agencies obtain a deliverable address or routing code, without needing to see any more of the person's living address.

### Verify the source before opening

Phishing emails often use "government notice" as bait. A trusted inbox can verify the agency certificate, the exchange node, and the document digest first, and only then display a human-readable agency name, its authority, the case type, and the remedy deadline. The source verification result should be something a person can tap open and check, not just a green tick.

### Sensitive documents decrypted at the designated endpoint

Tax, social welfare, medical, and judicial documents may contain highly sensitive data. Encrypting to a device key and decrypting in the local data vault shrinks the surface where servers see plaintext. This still requires designs for backup, device change, lawful access, and key loss. "End-to-end" cannot be used as a disclaimer slogan.

### Receiving, understanding, and acting joined into one path

After a notice to supplement documents arrives, the wallet can present the deadline, the remedy options, and the minimum necessary fields, then let the person choose to retrieve proof from MyData, sign it, and send it back. Citizens do not need to download a PDF first, find a Citizen Digital Certificate component somewhere else, and then guess which website to upload it to.

### Proxies and accessibility can become formal capabilities

Denmark's Digital Post already provides a mechanism for authorising others to read. Taiwan could limit proxies to specific cases, periods, or operations, letting family members, social workers, lawyers, or trusted persons help while keeping a full audit trail. VoiceOver, dynamic text size, reading order, plain language, sign language, and multilingual versions should also go into common acceptance testing, so that each agency does not have to redo them.

### Citizens hold their own evidence

The key evidence for paper registered mail sits mostly with the postal service and the agency. A wallet can keep signed receipts for sending, arrival, notification, opening, and confirmation, so that when a dispute arises the citizen can export an evidence package that can be independently verified without exposing other e-documents.

## How other countries do it

Mature services abroad almost all separate identity, the underlying mail layer, the front end, and the legal rules.

| Place | Approach | Design Taiwan can take away |
| --- | --- | --- |
| [Denmark Digital Post](https://lifeindenmark.borger.dk/apps-and-digital-services/Digital-Post) | National, regional, and local authorities share one underlying mail layer; front ends such as borger.dk, e-Boks, and mit.dk read the same public mail and synchronise status | A shared base layer can accommodate multiple front ends; proxies, exemptions, and assistance must follow the institution |
| [Austria Mein Postkorb](https://www.oesterreich.gv.at/de/hilfe/Die-elektronische-Zustellung-und-Mein-Postkorb) | Sign in with ID Austria, verify the email address, and activate with explicit consent; separate rules exist for provable delivery and absence | Write activation, notification, retrieval, receipts, and paper fallback as a state machine |
| [Finland Suomi.fi Messages](https://www.suomi.fi/instructions-and-support/messages/what-is-suomifi-messages) | From 2026, adults activate the digital mailbox when they sign in to public-sector services with strong authentication; they can switch back to paper, and groups without strong authentication tools, minors, and people under guardianship still use other channels | Digital-first needs an easily understood right to opt out, exclusion conditions, and multi-channel service |
| [EU eDelivery](https://ec.europa.eu/digital-building-blocks/sites/spaces/DIGITAL/pages/467110114/eDelivery) | Connects different organisations through AS4 access points and a four-corner model, providing signatures, encryption, signed receipts, and conformance testing | Publish exchange specifications and a conformance suite so that agencies are not all tied to one product |
| [EUDI Wallet](https://digital-strategy.ec.europa.eu/en/factpages/european-digital-identity-wallet) | Stores official documents and credentials, with selective disclosure, user control, and security certification | The wallet handles identity, documents, and consent; the delivery network still has to be built separately |

The [OECD 2024 report on digital public infrastructure](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/12/digital-public-infrastructure-for-digital-governments_11fe17d9/ff525dc8-en.pdf) lists digital post, digital identity, notification, and the single digital gateway as composable public components. This classification suits Taiwan well: when one component fails or changes vendor, the whole of government services does not have to be rebuilt at once.

A 2026 study comparing Denmark, Estonia, and Germany summarises the roles of digital post as a digitalisation driver, a process integrator, and an ecosystem catalyst. The study reminds us that an inbox grows from a single tool into infrastructure that many agencies depend on, and that adoption, expansion, legitimacy, and continued innovation all need governance. [Kuch et al., 2026](https://doi.org/10.1016/j.giq.2026.102110)

International research also points to the other side. A study of people with disabilities in Germany found that avoidance of digital government services involves operational anxiety and accessibility, and also whether people feel that the government only wants to save costs and ignores their deeper circumstances. [Pethig, Kroenung and Noeltner, 2021](https://doi.org/10.1016/j.giq.2020.101545) Earlier cross-state empirical work also showed that a government's own technical assistance policies, clarity of goals, and implementation capacity are closely tied to accessibility performance. [Rubaii-Barrett & Wise, 2008](https://doi.org/10.1177/1044207307311533)

Paper opt-out, human assistance, and common accessibility standards are therefore not compromises. They are core functions through which a digital service earns its legitimacy.

## If the government commissions a systems integrator, how could it be done

I dread seeing this kind of procurement written as a single line: "build an app with Citizen Digital Certificate sign-in and e-document receipt". The winning vendor would very likely deliver a system that can sign in and display PDFs, with the cross-agency rules left unresolved until just before acceptance, when they blow up.

I would split the tender into five replaceable layers.

1. **G2C address and consent registry**. Manages activation, deactivation, switching to paper, proxies, device changes, and revocation; exposes only minimal routing data externally.
2. **Exchange access point**. Follows public specifications for packaging, signatures, encryption, errors, and receipts; provides an agency-side SDK and a conformance suite.
3. **Service rules engine**. Decides by document type whether electronic service is allowed, when service is established, how many notifications are sent, when to fall back to paper after a timeout, and how deadlines are calculated. Rule versions must be auditable.
4. **Citizen-side wallet and SDK**. Supports the government app, qualified private-sector wallets, and a web fallback; all accepted with the same set of compatibility, security, and accessibility tests.
5. **Evidence, monitoring, and remedy**. Keeps signed events, state transitions, and the system time source; both citizens and agencies can export per-case evidence, with 24-hour incident reporting and human customer service.

The contract must also settle data and exit rights up front. APIs, data models, test suites, error codes, and interface text should be owned by the government and published. Core code should at least be open to third-party security audit, and suitable common components can be open source. Keys, logs, and personal data must not be used by the vendor for any other purpose. When the vendor changes, addresses, consents, historical receipts, and open cases must migrate smoothly.

Acceptance should be split into four phases, each of which can stop on its own for correction.

| Phase | Scope | Gate to the next phase |
| --- | --- | --- |
| 0. Regulatory and journey inventory | Document classification, service rules, co-design with people with disabilities and non-digital users | Public rules matrix, data impact assessment, threat model, accessibility research |
| 1. Sandbox with no legal effect | Synthetic EN / DI / ESW, test certificates, fault injection, third-party apps | Interoperability across two independent implementations; signatures, encryption, receipts, retries, and revocation all pass |
| 2. Voluntary pilot | A small number of low-risk notices; users can switch back to paper at any time | Completion rate, misdelivery rate, assistive technology, customer service, paper fallback, and disaster recovery meet targets |
| 3. Provable service | Only documents that already have a clear legal basis | Each document type passes compliance, security, personal data, accessibility, and dispute drills |
| 4. Cross-agency expansion | Add agencies, wallet providers, and proxy scenarios | Public KPIs, incident reports, a version compatibility policy, and annual independent audit |

The most easily underestimated difficulties are also very concrete.

- Agencies' existing document systems differ in vintage, vendor, and format, and there are classified documents and large attachments.
- A valid certificate does not mean the person still has legal capacity or that a proxy relationship is still in force.
- Push notifications, email, and SMS are only reminders; they cannot serve directly as evidence of service.
- iOS, Android, the web, card readers, and TW FidO each have different failure modes.
- System time, signature algorithms, and certificate revocation data must remain verifiable many years later.
- A single mass notification can create peak load, and reliability matters most during disasters.
- A service outage directly affects deadlines for appeals, payments, supplementary filings, and litigation; the SLA must connect to actual remedies.
- Running paper and digital in parallel adds cost for a period; the budget cannot count only app development.

## Seven things I hope the government does now

1. Publish the G2C target architecture, the regulatory inventory, the milestones, and the definition of done for the 2028 (ROC 117) launch.
2. Provide, ahead of time, a public sandbox with no legal effect, synthetic e-documents, test certificates, and a conformance suite.
3. Publish the citizen-side address, document packaging, error code, receipt, and proxy authorisation formats, and allow multiple qualified wallet implementations.
4. Pilot first with voluntary, low-risk cases that can switch back to paper at any time, rather than stress-testing with rights and deadlines from day one.
5. Co-design with people with disabilities, older people, rural communities, migrant workers, new immigrants, people under guardianship, and their helpers, and make accessibility a gate for payment.
6. Build a service evidence package that citizens can read, download, and independently verify, along with clear complaint and deadline restoration procedures.
7. Write open standards, data portability, cryptographic agility, third-party audit, and vendor-switch drills into the procurement contract.

The youth advisory proposal asked whether citizens could receive e-documents with the Citizen Digital Certificate. My prototype gives a very limited and very useful answer: the flow can be built on a phone, and an open-source driver lets the physical card take part in testing; every stage can be separated, verified, failed, and repaired.

The work that follows belongs to public institutions. The government has to connect address, exchange, service, evidence, and remedy, and it has to preserve equal rights for people who do not use smartphones. The point of a digital wallet lies precisely in putting the citizen back into this chain of evidence: I know who sent it, whether the content was altered, when the deadline started, what I did, and what I can hold up to assert my rights when the system fails.

If the 2028 (ROC 117) service achieves these, it will have gone much further than "one less registered letter".

## References

1. Executive Yuan Youth Advisory Committee, ["Build a platform for the general public to receive e-documents with the Citizen Digital Certificate"](https://advisory.yda.gov.tw/proposals-detail/316).
2. National Archives Administration, National Development Council, ["Guidelines for Computerised Document and Records Management"](https://www.archives.gov.tw/tw/arctw/156-1795.html).
3. National Archives Administration, National Development Council, ["Regulations on Electronic Exchange of Official Documents among Government Agencies"](https://www.archives.gov.tw/tw/arctw/155-1741.html).
4. Legislative Yuan, ["Smart Government Digital Navigation Development Plan (2026–2030, ROC 115–119)"](https://ppg.ly.gov.tw/ppg/download/agenda1/02/agendaAnnex/11/05/14/110514991.pdf).
5. National Archives Administration, National Development Council, ["2026 (ROC 115) Annual Administrative Plan"](https://www.archives.gov.tw/wSite/public/Attachment/008/f1756450402384.pdf).
6. Laws administered by the Ministry of Digital Affairs, ["Electronic Signatures Act"](https://law.moda.gov.tw/LawContent.aspx?id=FL011349&media=print).
7. Ministry of Justice Laws and Regulations Database, ["Administrative Procedure Act, Article 68"](https://mojlaw.moj.gov.tw/LawContentExtent.aspx?LawNo=68&lsid=FL000632).
8. Intellectual Property Office, Ministry of Economic Affairs, ["How can I receive official documents electronically?"](https://www.tipo.gov.tw/tw/tipo1/241-1877.html).
9. Judicial Yuan, ["Online filing"](https://www.judicial.gov.tw/tw/cp-248-58073-78798-1.html) and ["Guidelines on Access to Justice for Persons with Disabilities"](https://www.judicial.gov.tw/tw/cp-1429-1179729-afca9-1.html).
10. OECD (2024), [*Digital public infrastructure for digital governments*](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/12/digital-public-infrastructure-for-digital-governments_11fe17d9/ff525dc8-en.pdf).
11. World Bank ID4D, [*Principles on Identification for Sustainable Development*](https://id4d.worldbank.org/guide/1-principles), [*Interoperability*](https://id4d.worldbank.org/guide/interoperability), [*Privacy and Security*](https://id4d.worldbank.org/guide/privacy-security).
12. Denmark, [*Digital Post*](https://lifeindenmark.borger.dk/apps-and-digital-services/Digital-Post).
13. Austria, [*Die elektronische Zustellung und Mein Postkorb*](https://www.oesterreich.gv.at/de/hilfe/Die-elektronische-Zustellung-und-Mein-Postkorb).
14. Finland, [*Suomi.fi Messages*](https://www.suomi.fi/instructions-and-support/messages/what-is-suomifi-messages).
15. European Commission, [*eDelivery*](https://ec.europa.eu/digital-building-blocks/sites/spaces/DIGITAL/pages/467110114/eDelivery) and [*European Digital Identity Wallet*](https://digital-strategy.ec.europa.eu/en/factpages/european-digital-identity-wallet).
16. Kuch, F. et al. (2026), [“The role of digital post systems in transforming public administration: A digital infrastructure perspective.”](https://doi.org/10.1016/j.giq.2026.102110) *Government Information Quarterly*, 43(1), 102110.
17. Pethig, F., Kroenung, J., and Noeltner, M. (2021), [“A stigma power perspective on digital government service avoidance.”](https://doi.org/10.1016/j.giq.2020.101545) *Government Information Quarterly*, 38(2), 101545.
18. Rubaii-Barrett, N., and Wise, L. R. (2008), [“Disability Access and E-Government: An Empirical Analysis of State Practices.”](https://doi.org/10.1177/1044207307311533) *Journal of Disability Policy Studies*, 19(1).
