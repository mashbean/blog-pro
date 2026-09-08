---
title: "Zero-Knowledge Proofs in a Digital Wallet, with the Verifier Deployed to Cloudflare for Free"
description: "Building an age proof that never reveals the birth date, using Bonds and the OpenAC circuits: verification on a Mac, deployment to Cloudflare Containers, a Prepare cache, measured seconds and costs, the privacy trade-off against SD-JWT-VC, and policy recommendations."
topic: digital-identity
tags: ["數位皮夾", "可驗證憑證", "年齡驗證", "假名與匿名", "密碼學", "隱私", "開源", "台灣"]
keywords: ["零知識證明", "ZKP", "OpenAC", "zkID", "Spartan2", "有備而來", "SD-JWT VC", "選擇性揭露", "年齡證明", "不可關聯性", "Cloudflare Containers", "Workers Builds", "MyData", "自然人憑證", "請出示皮夾"]
pubDate: 2026-09-05
draft: false
lang: "en"
translationOf: "2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare"
translatedBy: "Claude Fable 5.1"
translatedDate: 2026-09-08
aiModel: "Anthropic Claude Fable 5.1"
aiPrompt: "依有備而來 iOS 原始碼、twdiw-vp-verifier-lite 原始碼與部署紀錄、zkID 論文與 README 效能表、Cloudflare 官方文件、以及 2026 年 9 月 4 至 5 日在 iPhone 14、Mac 與 Cloudflare 容器上的實測秒數，撰寫零知識年齡證明的開發報告、三路徑對照與政策建議。"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare"
aiGeneratedDate: 2026-09-05
humanReviewed: false
category: "數位政府與數位身分"
series: "ready-digital-government"
seriesOrder: 7
slug: "2026-09-05-zero-knowledge-age-proof-from-phone-to-cloudflare"
---

*English translation of the original Chinese report published on 5 September 2026. Where the two differ, the Chinese version is authoritative.*

_This is the fourth report in the series "Bonds (有備而來): Development Reports on an Ideal Digital Wallet". It is based on the source code, the Cloudflare deployment, and hands-on operation on real devices between 4 and 5 September 2026. Every timing figure comes from single-device samples recorded automatically by the app and the verifier. The samples are few, so only raw values and medians are reported, and nothing is called a p95. When testing with real credentials, only the stage, the outcome, the elapsed time, and the error type were logged; neither this report nor the code contains a birth date, a national ID number, or any disclosed field._

The first three reports dealt with presentation. Once government credentials and MyData records are collected into the phone, selective disclosure hands the verifier a name, the last five digits of a mobile number, or a driver's licence class to check. This report deals with a stricter requirement. The holder does not hand over the birth date at all. The only answer given is "over 18", and the verifier can still confirm cryptographically that this answer was not faked.

This requirement now runs end to end on an iPhone, on a Mac, and in a Cloudflare container. There are two costs. The phone needs several seconds to compute the proof, and the verifier side needs a resident program that occupies about half a GB of memory. What follows records the process, the numbers, and the trade-offs.

## How zero-knowledge proofs work

Take age confirmation at a convenience store. There are three ways to do it.

The first is to show the whole ID card. The clerk obtains the name, the address, the national ID number, and the birth date, all for what is really a yes-or-no question.

The second is a digital wallet's selective disclosure, the SD-JWT-VC approach used in the earlier reports. Each field in the credential is sealed separately, and only the birth-date field is opened at presentation. The clerk does not see the name or address, but the real birth date is still handed over.

The third is a zero-knowledge proof. The phone keeps the birth date and produces a mathematical proof whose only content is "there exists a credential signed by the issuer, and the birth date on it is no later than 5 September 2008". The clerk's system checks that the proof has not been forged, and from that confirms the holder is at least 18, without ever seeing which day it was.

This pushes data minimisation to its limit. Data the verifier never receives cannot leak, cannot be retained, and cannot be matched against other databases. In addition, every presented proof is freshly randomised, so two verifiers who put their proofs side by side cannot tell that they belong to the same person.

Compared with SD-JWT-VC, the privacy difference comes down to two points. Selective disclosure hands over the original value of a field; a zero-knowledge proof hands over only whether a predicate is true or false. A selectively disclosed credential carries a stable holder key and DID, so every presentation carries the same identifier; a zero-knowledge proof is re-blinded every time, and the identifier is no longer stable.

The limits of zero-knowledge proofs are equally clear. The phone needs several seconds to compute a proof, longer the first time. The verifier cannot run inside an ordinary serverless function; it needs a program able to load a verification key of over 400 MB. The proof itself is 155 KB, roughly twenty times an ordinary presentation. The circuit only accepts fields of a particular shape, so a credential without a birth-date field cannot produce an age proof. The toolchain is still early; the relevant papers were published in 2025 and 2026. And the credibility of a proof still depends on who signed the credential. An age proof built on a self-signed birth date hides a self-declared date, and gains no government endorsement by doing so.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/zero-knowledge-age-proof/wallet-use-zk.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot of the zero-knowledge proof section on the Bonds Use tab">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-use-zk.jpg" alt="The Bonds Use tab, where the zero-knowledge proof section has two rows: create a private age proof and verify a private age proof" width="900" height="1947" loading="lazy" />
  </a>
  <figcaption><em>Figure 1. The zero-knowledge proof section on the Bonds "Use" tab. The older MOICA possession proof has been removed from the menu, leaving only the two rows for creating and verifying an age-predicate proof, so that two kinds of zero-knowledge proof do not sit side by side and confuse the user.</em></figcaption>
</figure>

## Work completed in this phase

Three goals were set for this phase, and all three were completed.

1. The verifier site [verifier.mashbean.net/zkp](https://verifier.mashbean.net/zkp) gained a page that creates a one-time zero-knowledge age check and shows the elapsed time of every stage.
2. In Bonds, both the self-issued MyData ID card and government credentials can start an age proof; the one that actually runs to completion is the self-issued ID card, for reasons given under "Honest boundaries".
3. The timings of all three verification paths are recorded automatically by the code and can be compared side by side with an SD-JWT-VC presentation.

Two further items were not on the original list. The verifier moved into Cloudflare Containers and no longer depends on a Mac that has to stay switched on; and the phone implemented the Prepare cache designed in the paper, cutting proof generation on repeat presentations from 8.1 seconds to 2.7 seconds.

## Existing projects adopted

The whole chain is stitched together from several open-source projects. The work in this project was to point them at Taiwan's credentials, phones, and deployment environment.

| Layer | Project | Role here |
| --- | --- | --- |
| Circuits and proof system | [ethereum/zkID](https://github.com/ethereum/zkID) (OpenAC, commit `b395e09`) | Two Circom circuits, `jwt_2k` and `show`. The first verifies the issuer's ES256 signature and commits to the hidden fields; the second proves the predicate and binds the verifier's nonce |
| Proof system | Spartan2 (`openac-sdk` branch, Hyrax commitments, P-256) | A SNARK with no trusted setup; proving on the phone is memory-light, at the cost of the verifier having to load the whole circuit |
| Witness generation | circom-scotia, witnesscalc_adapter | Expands the SD-JWT bytes into circuit inputs |
| iOS binding | Mopro 0.3.5 | Wraps the Rust prover as an XCFramework; Bonds adds its own `predicate.rs` through a `Native/OpenACAge` overlay and exposes only one predicate, "birth date no later than the cutoff" |
| Phone side | Bonds (Swift), Secure Enclave per-card keys, TW FidO mobile Citizen Digital Certificate, MyData | The self-issued ID card is signed with the Citizen Digital Certificate (自然人憑證); each credential has its own key, used to sign the nonce |
| Verifier-side native service | `openac-age-verifier` (Rust, axum) | Loads the two verification keys, runs `verify_linked`, and checks 6 plus 156 public values |
| Verifier-side platform | Cloudflare Workers, Durable Objects, Containers, Workers Builds | The Worker manages sessions and trust lookups, the container runs the cryptography, Workers Builds builds the image |
| Comparison path | jose, @sd-jwt | Verification of SD-JWT-VC presentations, running inside the Worker |
| Reference implementations | PSE's go-zkid-verifier, openac-rsa-x509-swift, moica-revocation-smt | The route taken by the first-generation MOICA possession proof; not adopted this time, for reasons given in the decision chain |
| Official sources | TWDIW official app source code, Ministry of Digital Affairs (moda) DID trust list API | Issuer trust decisions for government credentials |

Every dependency is pinned to a specific commit. The phone-side XCFramework and circuit assets live in the GitHub release `openac-age-v1`, and the SHA-256 of the verification keys is pinned both compressed and decompressed, checked once at image build and once at service start-up. If the release is ever republished, the build fails, and keys of unknown origin never go live.

## The web verification flow

On the web page, the verifier chooses a source, fills in an age threshold and a purpose, and receives a one-time QR code. The holder scans it with Bonds, confirms the consent screen, computes the proof on the phone, and the proof is sent back to the site, which then displays the yes-or-no result and the timings.

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/zkp-builder.png" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot of the page for creating a zero-knowledge age check">
    <img src="/images/reports/zero-knowledge-age-proof/zkp-builder.png" alt="The page for creating a zero-knowledge age check, with a choice of proof source, age threshold, and purpose, listing the predicate and the personal data notice" width="1259" height="1161" loading="lazy" />
  </a>
  <figcaption><em>Figure 2. The verifier decides only "at least how old". Before the QR code appears, the page states what the wallet will and will not return, together with a personal data notice; the cutoff date is computed by counting N years back in Taipei time.</em></figcaption>
</figure>

The QR code contains a short JSON payload: a 32-byte nonce, the cutoff date, the source, the minimum age, the purpose, and the URL the proof is to be returned to. The URL is accepted only if it is an HTTPS site on an allow list. The phone checks it once when decoding and again before opening the connection. A QR code printed by a third party cannot redirect the proof somewhere else.

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/zero-knowledge-age-proof/wallet-consent.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot of the consent screen on the phone">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-consent.jpg" alt="The Bonds consent screen, stating that the verifier wants to confirm whether the holder is over 18, the purpose, the source, that the birth date and the credential do not leave the phone, and that the finished proof will be sent to verifier.mashbean.net" width="900" height="1947" loading="lazy" />
  </a>
  <figcaption><em>Figure 3. The consent screen explains four things: what the other party is asking, why, which credential will be used, and where the proof will be sent. The last item is the only difference from the face-to-face Bluetooth flow, so it is called out separately.</em></figcaption>
</figure>

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/zero-knowledge-age-proof/wallet-result.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot of the verification result on the phone">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-result.jpg" alt="Bonds showing that the site has verified this proof as at least 18, proof generation 2,189 plus 467 milliseconds, site verification 157 milliseconds, round trip 814 milliseconds" width="900" height="1947" loading="lazy" />
  </a>
  <figcaption><em>Figure 4. The phone receives the site's verdict and the timings. This run was a Prepare cache hit, with proof generation taking 2.7 seconds.</em></figcaption>
</figure>

The proof package contains two proofs, the public parameters of the predicate (field name, date format, cutoff date, threshold), the issuer's did:key, and the phone's proof-generation time. It contains no birth date, no name, and no credential field of any kind. The Worker checks that the predicate matches the session, resolves the issuer key, additionally looks up the official trust list for government credentials, and then forwards the two proofs to the native service. The Worker does not store the proof, and the session is deleted as soon as the result has been pushed to the browser.

## Deployment lessons from the Mac to Cloudflare

### Why verification cannot run inside a Worker

A Worker isolate has a memory limit of 128 MiB and a code size limit of 10 MB. OpenAC's Prepare verification key is 412 MB. The gap comes from the design of the proof system. Spartan2 with Hyrax needs no trusted setup and keeps the memory burden light when proving on the phone; the price is that the verifier must read in the whole circuit (a 374 MB R1CS) to evaluate it, so the verification key is almost as large as the circuit itself.

By contrast, systems of the Groth16 family have verification keys of a few hundred bytes and verify in milliseconds, which JavaScript inside a Worker could handle, but each circuit requires a trusted setup and the phone would need to hold a zkey of several GB to produce a proof, which a phone cannot afford. PSE's go-zkid-verifier is likewise a native program, for the same reason.

What the verifier actually needs is a process with at least 1 GiB of memory, and any platform that can provide that can carry the job.

### Serving from a Mac through a tunnel

The native service ran on a Mac first. Loading the two keys took 0.33 to 0.39 seconds, with 429 MB resident; after verifying one real proof, the peak was 625 MB. The service is protected by a Bearer token: unauthorised requests get a 401, and forged proofs get an explicit error.

External access went through a Cloudflare tunnel. A named tunnel could not be created, because the cloudflared certificate on this machine belongs to a different account and wrangler's OAuth token has no DNS write permission. A quick tunnel was used instead. Its URL changes on every restart, so a script writes the new URL into the Worker secret automatically. The first real proof was verified over this path.

### Moving into Cloudflare Containers

Containers require the Workers Paid plan, the image must be linux/amd64, and building the image requires Docker. The Apple Silicon development machine has no Docker installed. Cloudflare's documentation confirms that the Workers Builds build environment can execute a Dockerfile. After connecting GitHub and pushing one commit to main, the image was built and the container started 2 minutes 36 seconds later. Three problems along the way are worth recording.

First, a secret cannot share a name with a var. The configuration file originally declared `ZKP_VERIFIER_URL` as a var, and a later `wrangler secret put` under the same name was rejected. Changing both values to secrets solved it.

Second, how the Worker calls the container. `containerFetch(url, init, port)` in `@cloudflare/containers` passes the `RequestInit` as a positional argument across the Durable Object RPC boundary, and the body and headers never arrive. The container itself was healthy, yet the Worker received a 502. Constructing a `Request` and handing it to the stub's `fetch`, letting the Container base class proxy it to the default port, solved the problem.

Third, size and speed. The container uses the basic instance type (1/4 vCPU, 1 GiB), because the 625 MB peak fits, and the free allowance works out to about 25 hours of awake time per month, four times what standard-1 would give. The price shows up in the timing table below: verification went from 0.16 seconds on the Mac to 5 seconds, with a cold start of 24.5 seconds.

The container is declared only in the demo site's configuration file. The one-click deployment in the open-source repo stays on the free plan and points at a self-hosted verification service through a secret.

### Costs incurred

| Item | Plan and allowance | Actual this time |
| --- | --- | --- |
| Cloudflare Workers Paid | USD 5 per month, includes Durable Objects | Existing plan; the demo site was already deployed here |
| Containers free allowance | 25 GiB-hours of memory, 375 vCPU-minutes, 200 GB-hours of disk per month | basic counts as 1 GiB while awake, about 25 hours free; sleeps after 10 minutes idle, and sleep is not billed |
| Overage rates | Memory USD 0.0000025 per GiB-s, CPU USD 0.000020 per vCPU-s | Test volume did not exceed the allowance; basic running all day without sleeping would add about USD 7 per month, standard-1 about USD 27 |
| Mac tunnel route | USD 0 | Needs a machine that stays on, and the URL changes |
| GitHub release hosting the 80 MB XCFramework and keys | USD 0 | Each phone downloads about 76 MB of assets on its first proof |
| Development time | Not priced | The work covered by this report took about two working days |

## Field measurements of the three verification paths

The figures below come from the same self-issued ID card, the same verifier site, and the same iPhone 14.

| Path | Phone proof generation | Backend verification | Worker end to end | Proof size |
| --- | --- | --- | --- | --- |
| SD-JWT-VC presentation (verified inside the Worker) | Not needed | Milliseconds; the page rounds it to 0 ms | Milliseconds | About 7 to 8 KB |
| Zero-knowledge, verified on the Mac (tunnel) | First time 12.2 s; cache hit 2.7 s | First time 1,885 ms; then 157 to 200 ms | 586 to 907 ms | Prepare 109 KB plus Show 46 KB |
| Zero-knowledge, Cloudflare basic container | As above | Warm 4,973 ms; cold start 24,473 ms | Warm 5,833 ms; cold start 25,108 ms | As above |

Measured on the app from scanning the QR code to receiving the verdict, an SD-JWT-VC presentation took 0.22 seconds for the self-issued credential and 0.40 seconds for the government credential; the zero-knowledge age proof took 7.28 seconds. The difference of 7.06 seconds is almost entirely proof generation on the phone.

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/zkp-compare-sdjwt.png" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot of the verifier site's side-by-side comparison of SD-JWT-VC and zero-knowledge proof">
    <img src="/images/reports/zero-knowledge-age-proof/zkp-compare-sdjwt.png" alt="The verifier site's comparison table: every stage of the SD-JWT-VC presentation shows 0 ms, while the zero-knowledge age proof shows wallet proof generation 12,159 ms, verification 1,885 ms, and Worker end to end 4,156 ms" width="1259" height="661" loading="lazy" />
  </a>
  <figcaption><em>Figure 5. The verifier site places the most recent run of each flow within the same browser tab side by side. This zero-knowledge run was a first proof (no cache) with verification on the Mac. The numbers exist only in the browser's sessionStorage and contain no field values.</em></figcaption>
</figure>

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/wallet-diagnostics-compare.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot of the comparison on the phone's diagnostics page">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-diagnostics-compare.jpg" alt="The Bonds diagnostics page: for the credential from the official wallet, SD-JWT-VC presentation end to end 0.40 s and zero-knowledge not yet measured; for the self-issued MyData credential, SD-JWT-VC 0.22 s, zero-knowledge 7.28 s, phone proof generation 2.66 s, site verification 0.16 s, difference plus 7.06 s" width="780" height="574" loading="lazy" />
  </a>
  <figcaption><em>Figure 6. The phone's diagnostics page makes the same side-by-side comparison, with numbers from the app's monotonic clock. The zero-knowledge cell in the government credential row reads "not yet measured", for reasons given under honest boundaries.</em></figcaption>
</figure>

### Two real proofs on the container

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/zkp-result-container-cold.png" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot of the verification result during a container cold start">
    <img src="/images/reports/zero-knowledge-age-proof/zkp-result-container-cold.png" alt="The verifier site showing that the holder has been proven to be at least 18, backend verification 24,473 ms, Worker end to end 25,108 ms" width="1259" height="1710" loading="lazy" />
  </a>
  <figcaption><em>Figure 7. The first real proof after switching to the container. The verdict is correct, and backend verification took 24.5 seconds, the result of a container that had just started plus 1/4 vCPU.</em></figcaption>
</figure>

<figure>
  <a href="/images/reports/zero-knowledge-age-proof/zkp-result-container-warm.png" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot of the verification result after the container has warmed up">
    <img src="/images/reports/zero-knowledge-age-proof/zkp-result-container-warm.png" alt="The verifier site showing that the holder has been proven to be at least 18, backend verification 4,973 ms, Worker end to end 5,833 ms" width="1259" height="1557" loading="lazy" />
  </a>
  <figcaption><em>Figure 8. The second proof, immediately after. Verification fell to 5 seconds, which is the steady state of the basic instance type. The bottleneck is the vCPU; memory is not the constraint.</em></figcaption>
</figure>

The aim of the Cloudflare stage was to bring the deployment cost of the zero-knowledge verification module down to what a demonstration project can afford, without anyone having to keep a computer running. The aim was met, and the price is speed. The named instance types tie vCPU and memory together: getting 2 vCPUs means buying 8 GiB, while this job uses only 625 MB, and a custom configuration with little memory and more vCPU belongs to the enterprise plan. For demonstration purposes the container stays on basic, to be upgraded when the flow is shown to people in person.

### The Prepare cache

An age proof is made of two proofs. Prepare verifies the issuer's signature and commits to the hidden fields, and depends only on the credential; Show is the one that binds the verifier's nonce and the cutoff date. The design intent in the zkID paper is to run Prepare once offline when a new credential is added, store the reusable precomputed state, and at presentation time load it, re-randomise it, and then run Show.

Bonds originally recomputed everything on every run. This phase changed it to save the three Prepare artefacts after the first proof, after which each run does only the re-blinding and Show. The measured figures are as follows.

| | First time (no cache) | Second time onwards (cache hit) |
| --- | --- | --- |
| Prepare | 7,586 ms | 2,189 to 2,617 ms |
| Show | 523 ms | 467 to 542 ms |
| Phone proof generation total | 8,109 ms | 2,656 to 3,159 ms |

The 5.4 seconds saved is the skipped `proveJwt`. The 2.2 seconds that remain after a cache hit are almost all re-blinding (reblind). This step runs every time: it applies a fresh random mask so that the proofs received by two verifiers cannot be matched. Skipping it would be faster, but unlinkability would vanish with it.

The cache has its price. The stored witness contains the device key and the normalised birth date, and is as sensitive as the credential itself. It is stored at the same file protection level as the credential, excluded from backups, capped at 8 entries with the oldest evicted first, cleared when the credential is deleted, and the whole directory is removed on "Clear all local data". If the phone's self-check fails and a cache entry was used, that entry is discarded and rebuilt once, so that a corrupted cache is not mistaken for a problem with the credential.

### Comparison with the paper

The zkID paper and README give figures for an iPhone 17. The table below places the three side by side.

| Item | Paper, iPhone 17 | This report, iPhone 14 | This report, verifier side |
| --- | --- | --- | --- |
| Prepare proof | 2,102 to 2,987 ms (plus key setup 3,254 to 3,499 ms) | First run including witnesscalc 11,478 ms; no cache 7,586 ms | Not applicable |
| Prepare re-blinding | 856 to 884 ms | About 2,200 ms | Not applicable |
| Show proof plus blinding | 115 to 129 ms | 467 to 542 ms | Not applicable |
| Prepare verification | 137 to 151 ms | Not applicable | Mac 157 to 200 ms; container 4,973 ms |
| Proof size | Prepare 109.29 kB, Show 40.41 kB | Prepare 109 KB, Show 46 KB | Same as left |
| Peak memory for proving on the phone | 2.27 GiB | Not measured | Verifier side 625 MB |

The proof sizes match the paper, which indicates that the circuit, the keys, and the serialisation have not drifted. Every step on the iPhone 14 is two to four times slower than on the iPhone 17, a reasonable ratio. The paper states that after caching each presentation takes about one second; this report measured 2.7 seconds, with the difference coming from the older processor and the reblind that runs every time. On the Mac the verifier side is in the same order of magnitude as the paper's on-phone verification; on the 1/4 vCPU container it is 25 to 100 times slower, a gap determined by the platform's instance type, with nothing wrong in the implementation itself.

### The architecture decision chain

Every step had an option that was abandoned.

1. **Replace the first-generation MOICA possession proof with an age-predicate proof.** In August, Bonds built a different zero-knowledge proof, proving that "a genuine Citizen Digital Certificate signed this thing". Its verification key was 968 MB, its proofs 294 to 398 KB, verification took 12 to 14 seconds, and it carried six limitations that could not be removed: the signature material could be replayed, the national ID number was disclosed to the Ministry of the Interior (MOI), there was no global uniqueness, the nullifier was the same for every verifier, validity was not proven, and the revocation root was not anchored. It proved possession and could not prove any field. In an age-predicate proof the verifier supplies the nonce first and it is bound into the circuit's public inputs, so the proof answers a concrete question, which matches what real verification needs.
2. **The verifier supplies the nonce first.** The proof is built only after the request arrives, so the replay problem disappears at the protocol layer, with no need for after-the-fact comparison.
3. **Move the verifier out of the Worker, landing first on a Mac.** 128 MiB cannot hold 412 MB. The Mac let the first real proof be verified in an environment where the logs could be watched directly, with migration afterwards.
4. **Move from the tunnel into a container.** The tunnel URL changes and the machine has to stay on; a container lets the demonstration run without depending on anyone's computer, and Workers Builds removes the need for local Docker.
5. **Choose basic, and hold off on standard-1.** Decided after measuring the 625 MB peak, together with a concurrent-verification cap of 2 added to the native service, so that two proofs arriving at once cannot exceed 1 GiB. The cost in speed is listed in the table, and upgrading is left for needs beyond demonstration.
6. **The Prepare cache.** This is the paper's design intent, it works in field tests, and the price is one more secret stored on the phone, handled with the same protection and lifecycle management.
7. **Both sources share the same circuit, with results labelled separately.** A proof from a government credential is checked against the official trust list; a proof from a self-issued ID card is labelled "self-issued, not government-endorsed". The mechanism for hiding the birth date is the same, the trust relationship is not, and the page must not let the two look alike.

## Honest boundaries

<figure class="phone-shot">
  <a class="phone-shot__image" href="/images/reports/zero-knowledge-age-proof/wallet-home.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size screenshot of the three kinds of credential on the Bonds home screen">
    <img src="/images/reports/zero-knowledge-age-proof/wallet-home.jpg" alt="The Bonds home screen: the national ID card face with its fields redacted, the official wallet's credentials including the digital driver's licence credential and the telecom credential, and the MyData data vault below" width="900" height="1947" loading="lazy" />
  </a>
  <figcaption><em>Figure 9. The three sources in the wallet. At present only the national ID card (self-issued from MyData) can produce an age proof. Neither the digital driver's licence credential nor the telecom credential discloses a birth date, so the circuit has nothing to prove.</em></figcaption>
</figure>

- **The number of government credentials that can produce an age proof is currently zero.** The Highway Bureau's digital driver's licence credential tested in the field has no `roc_birthday` field, and neither does the telecom credential. The limitation comes from the issuer not putting that field into the credential, and has nothing to do with the Bonds implementation. This is what "not yet measured" in the government credential row of the diagnostics page means.
- **The self-issued ID card's age proof has no government endorsement.** What it hides is a birth date that the holder signed for themselves from their MyData records. Both the page and the app carry the label "self-issued, not government-endorsed", and that line must not be removed.
- **The proof package carries the issuer's did:key.** For a government credential it is the issuing agency's key; for a self-issued ID card it is the holder's own per-card key, which is a stable pseudonym. That is why the allow list exists: proofs can only be sent to known sites.
- **Container speed.** The basic instance type takes 5 seconds warm and 24.5 seconds from a cold start, and the latter approaches the Worker's 60-second timeout on the backend. The container is pre-woken when the session is created, and the few seconds of proof generation on the phone serve as a warm-up window, but that is not enough to cover a 24.5-second cold start, and 1/4 vCPU is the lower bound.
- **Very few samples.** Every figure comes from one to three runs on a real device. They indicate an order of magnitude and cannot be treated as a performance specification.
- **Unfinished items.** No conformance testing has been run against OpenID4VP or any zero-knowledge specification; the zero-disclosure "possession proof" circuit has not been implemented (it needs changes to the circuit inputs and a rebuilt XCFramework); the quick tunnel route has been retired; and the container's concurrent-verification cap of 2 exists to control memory and says nothing about throughput.

## Policy recommendations

### 1. Write data minimisation as a ladder, and define purposes by the question asked

Full presentation, selective disclosure, and predicate proof are three rungs. Beyond listing "which fields are needed", policy and procurement specifications should state "which question needs answering". Yes-or-no questions such as an age threshold, whether someone is registered in a given city or county, or whether they hold a certain qualification should go through predicate proofs; only flows that need a name check should go through selective disclosure. What a verifier needs is an answer, and in most cases it does not need the raw data.

### 2. Weigh privacy against cost, counting both sides

| Aspect | SD-JWT-VC selective disclosure | Zero-knowledge predicate proof |
| --- | --- | --- |
| What the verifier receives | The field's original value | Yes or no |
| Linkability across verifiers | Stable holder key and DID, linkable | Re-blinded every time, unlinkable; the issuer DID of a self-issued credential is the exception |
| Phone-side cost | Milliseconds | About 8 to 12 seconds the first time, about 3 seconds with the cache |
| Verifier-side cost | Milliseconds inside a Worker | A resident program of 0.4 to 0.6 GB, CPU-intensive, seconds |
| Deployment cost | Feasible on the free plan | Needs a container or a host; a demonstration fits within USD 5 per month |
| Proof size | About 7 to 8 KB | About 155 KB |
| Applicable credentials | Any SD-JWT-VC | Field shape must match the circuit; currently only credentials carrying a birth date |
| Maturity | Standard is Final | Research project, 2025 to 2026 |

The privacy advantage of zero-knowledge proofs is clear, and the cost disadvantage is just as concrete. Policy should position it as an option for high-risk uses, while the default practice can remain selective disclosure. The cost should be borne by the verifier; the holder should not pay any extra price for it.

### 3. The issuer decides whether zero knowledge can happen at all

A third-party wallet cannot produce an age proof from a government credential, and the blockage is on the issuing side. There are three specific recommendations.

1. If a government credential may be used for age-related purposes, the issuer should put the birth date into a disclosable field in a fixed, circuit-readable format at issuance, and publish the field name and format.
2. Publish an SD-JWT profile compatible with circuits of the OpenAC family, specifying the byte shape of `cnf.jwk`, the `_sd` array, and the disclosures, so that wallets do not have to reverse-engineer it.
3. In the longer term, have issuers provide ZK-ready credentials directly, or take part in reviewing the circuits and publishing the keys, so that "government-endorsed" and "hidden field" no longer have to be an either-or choice.

### 4. The verifier side is a candidate for public infrastructure

Zero-knowledge verification needs a resident, CPU-intensive program of half a GB, and it makes no sense for every small business to maintain one of its own. The government or an industry association could consider three approaches. Provide a shared verification service that businesses call through an API; publish pinned verification keys and container images so that deployment becomes one click; or invest in research on proof systems that are lighter on the verifier side, for example wrapping in Groth16 or recursive compression. Without this second layer of infrastructure, zero knowledge will stall at the demonstration stage.

### 5. Unlinkability should be written into the specification

Re-randomising on every presentation, having the verifier supply the nonce first, and not using a stable DID as an identifier: these three things should become normative requirements for verifiers and wallets. This implementation shows that they are feasible on a phone, at the cost of two extra seconds each time. If the specification does not require them, implementers will drop them to save those two seconds.

### 6. Put the seconds into the user interface and the procurement documents

Every timing figure in this report is recorded automatically by the code and shown to both parties. The verifier sees "backend verification 4,973 ms" on the page, and the holder sees "proof generation 2,189 plus 467 milliseconds" on the phone. This is part of informed consent. Users have the right to know how many seconds they are paying for privacy, and procurers have a duty to write those seconds into the specification, rather than discovering queues at the counter after launch.

### 7. Governance boundaries

A predicate proof passing is not the same as government endorsement, and self-issued results must be distinguished on screen from issuer-signed ones. Zero persistence on the verifier side, logging only the verdict and the timings, and logging neither the proof nor any identifier: all of these are done in the implementation described here, but the demo site is not a formal service and holds no official verifier accreditation. High-risk decisions still need a second factor that can be checked.

## Next steps

1. Find a government credential that carries a birth-date field and measure the "government credential, zero-knowledge" row; or put a field request to the issuer.
2. Decide the container instance type according to on-site needs, or switch to a fixed backend host; measure clearly how the cold start relates to the 60-second timeout.
3. Build the zero-disclosure possession proof circuit, so that a credential without a birth-date field can at least prove "this credential was signed by a given issuer".
4. Increase the sample size so that medians and maxima carry statistical meaning; fill in A2, G1, W1, and W2 in the test matrix.
5. Run conformance testing against OpenID4VP and SD-JWT, so that the zero-knowledge path can coexist with the formal specifications.
6. Turn the cost table in this report into a recomputable spreadsheet, so that other deployers can estimate their own bill.

In this project, zero-knowledge proofs went from a concept to seconds that can be measured. What they can do is clear: the verifier receives only a yes or no, and two verifiers cannot piece together the same person. What they cannot do is equally clear: without a field from the issuer there is no predicate, and without CPU on the verifier side there is no speed. The job of policy is to decide who bears those costs.
