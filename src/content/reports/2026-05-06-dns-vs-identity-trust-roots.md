---
title: "為什麼 DNS 走出了非國家治理之路，數位身分卻走不出來：信任根的歷史社會學"
description: "把 DNS 非國家治理形式化為四個前提條件 P_DNS = {P1 Postel jar 學術社群、P2' 美國策略性放手、P3' 技術中立論述被有意建構、P4' Stewardship Transition 多重否決點下勉強通過}。HM（Historical Mismatch hypothesis）顯示這四個前提在 2025 年數位身分領域全部不成立；HM 與 article 03 H1' 三道牆、article 04 T 三件式、article 05 IT' 不可能三角、article 06 CB-Justice D1*∧D2*、article 07 SRP 同樣是合取結構，但用於治理層的歷史性必要條件。4 跨國治理模式比較顯示 IATA + ICAO 與 SWIFT + CPMI 雙軌模式適配度最高；ICANN 不是模板，FTLA = (G_industry, G_state, G_recognition, G_oversight) 四層治理框架才是。在特定子領域（PSE / Vocdoni / Rarimo / DIF）可保留 G_industry 層的鬆散自治，但 B2-B4 邊界條件全失敗，無法擴展為整體 DNS 模式復現。本文是博論 Ch11 信任基礎設施章的核心論證，直接消化 ICANN fellowship 一年的材料。"
pubDate: 2026-05-06
tags: ["civic-proof", "DNS-governance", "ICANN", "internet-governance", "trust-list-alliance", "FTLA", "historical-sociology", "path-dependency", "doctoral-research", "Ch11-trust-infrastructure"]
category: "信任基礎設施治理"
aiModel: "Claude Opus 4.7"
aiPrompt: "DNS 信任根（13 個 root server / IANA / ICANN）為何能走出非國家治理路徑？關鍵時間窗口、關鍵人物、關鍵國際法決議是什麼？數位身分信任根至今由國家壟斷，原因是什麼？國家權力競爭的時間窗口為何不同？ICANN 的多利害關係人模式（multistakeholder model）能否移植到身分領域？哪些前提條件不成立？federated trust-list alliance 應採取何種治理形式才符合身分領域的歷史條件？"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-06-dns-vs-identity-trust-roots"
aiGeneratedDate: 2026-05-06
humanReviewed: false
lang: "zh-TW"
---

# 為什麼 DNS 走出了非國家治理之路，數位身分卻走不出來：信任根的歷史社會學

## 一、引言：當「DNS 模式」被當作數位身分治理的範本

過去十年，數位身分領域反覆出現一種召喚式的論證：「DNS 信任根能由非國家治理運作，數位身分為何不能？」這個召喚把 ICANN 當成可移植範本，把 W3C VC / DID 工作組想像為網路治理多利害關係人模式（multistakeholder model）的下一個前線<sup>1</sup>。當 federated trust-list alliance 的構想出現在 EUDI Wallet 跨境互認、AAMVA mDL 跨州互通、APEC ECBA 跨國協議等場景<sup>2</sup>，討論很快滑入「能否做出身分版 ICANN」的提問框架。

這個提問框架本身已經偏離了歷史。DNS 信任根走出非國家治理路徑，是 1969 至 2016 年之間多個歷史前提同時成立才得以發生的偶然產物，缺一不可<sup>3</sup>。把它當成「網路治理的自然狀態」並設想可重新部署到 2025 年的身分領域，等於把一個合取結構的歷史性必要條件壓縮成單一可複製的制度藍圖。

本文以歷史社會學的 path dependency 與 critical juncture 框架<sup>4</sup>，把 DNS 治理史拆解成四個前提條件 P_DNS = {P1, P2', P3', P4'}，並提出 HM（Historical Mismatch hypothesis）合取主張：在 2025 年的身分領域 P_ID 中，這四個前提條件全部不成立。HM 與本系列其他文章中的合取必要條件結構同構。article 03 的 H1' 三道牆<sup>5</sup>處理「數位結社」的法律可能性條件；article 04 的 T 三件式處理 pseudonymous participation 的法律前提<sup>6</sup>；article 05 的 IT' 不可能三角處理 sybil resistance 的成本-效益約束<sup>7</sup>；article 06 的 CB-Justice D1\*∧D2\* 處理 civic burden redistribution 的規範條件<sup>8</sup>；article 07 的 SRP（Sovereignty-Rooted Paradox）處理 multi-rooted civic proof 的主權根結構<sup>9</sup>。HM 與這五者並列，作用層級不同；HM 處理的是「DNS 模式能否在身分領域歷史性複製」這個治理層的合取必要條件問題。

本文的 8 章結構：第二章重建 DNS 治理史四階段並闡述 P_DNS 四前提的修訂版（P1 / P2' / P3' / P4'）；第三章用 HM 合取主張反向檢驗，論證 P1''-P4'' 在 P_ID 中對應失敗；第四章比較四個跨國治理模式（M1 ICANN / M2 IATA + ICAO / M3 SWIFT + CPMI / M4 Basel Committee）並用五項適用性判準評估對身分領域的整體適配度；第五章提出 FTLA = (G_industry, G_state, G_recognition, G_oversight) 四層治理框架；第六章用四個子領域案例（PSE / Vocdoni / Rarimo / DIF）與四個邊界條件 B1-B4 評估子領域複製可能性；第七章給出政策建議與工程接合；第八章收束。

預先說明三個邊界。其一，P_DNS 四前提的歷史證據強度大致相當，但 P3'（技術中立論述被有意建構）依賴對 Postel、Cerf 等人動機的詮釋，無法以檔案直接證實「真誠相信」與「戰略包裝」的二擇<sup>10</sup>，本文採「中立論述是工程社群的話語建構」的中強表述。其二，HM 屬於條件命題，論證 P_DNS 在 P_ID 中不成立而非「身分領域國家化是必然」<sup>11</sup>。其三，4 跨國治理模式的類比強度上限為「中強」，類比預設「結構同構」，但身分領域多了個人權利政治化與密碼學根信任替代兩個變數<sup>12</sup>，類比不能直接推導結果同形。

## 二、DNS 治理史四階段與 P_DNS 四前提（修訂版）

### 2.1 四階段時間線

DNS 治理史可拆為四個階段。第一階段（1969-1988）是 ARPANET 早期工程社群階段：1969 年 Steve Crocker 寫下 RFC 1<sup>13</sup>，建立 RFC 系列的編輯與分發慣例；1972 年 RFC 編輯權移交給 Jon Postel<sup>14</sup>；1983 年 Paul Mockapetris 設計 DNS 並完成標準化<sup>15</sup>；1988 年 IANA（Internet Assigned Numbers Authority）正式設立<sup>16</sup>。第二階段（1988-1998）是 NSFNET 商業化過渡階段：1995 年 NSFNET backbone 退場，商業 ISP 接手骨幹<sup>17</sup>；1998 年 ICANN 成立並與 NTIA 簽訂 MoU<sup>18</sup>。第三階段（1998-2014）是 ICANN 雙軌成長階段：2009 年簽訂 Affirmation of Commitments（AoC）取代部分 MoU 內容<sup>19</sup>；ATRT 1-4 報告系列陸續發布<sup>20</sup>；多利害關係人五方結構（政府 GAC / 業界 / 學術 / 公民社會 ALAC / 技術社群）逐步制度化<sup>21</sup>。第四階段（2014-2016）是 IANA Stewardship Transition：2014 年 NTIA 宣布退場<sup>22</sup>；2016 年 IANA Stewardship Transition Coordination Group（ICG）提案完成<sup>23</sup>；2016 年 9 月 30 日 Texas v. DoC 案 Hanks 法官駁回禁制令<sup>24</sup>；2016 年 10 月 1 日 transition 正式生效<sup>25</sup>。

四階段串成的 path dependency 鏈條，是 P_DNS 四前提的歷史載體。Pierson 的 *Politics in Time* 把 path dependency 形式化為「正反饋機制下的 increasing returns」<sup>26</sup>；Capoccia 與 Kelemen 把 critical juncture 定義為「制度結構在短時間窗口內可能朝多個方向發展，被某些事件鎖定到特定路徑」<sup>27</sup>。把這兩個框架疊在 DNS 治理史上，1995-1998 與 2014-2016 是兩個 critical juncture，前者鎖定「半私營非營利組織監督」的路徑，後者鎖定「監督權移交多利害關係人社群」的路徑。

### 2.2 P1：Postel jar 早期學術社群文化

P1 的核心不在「網路自由」這個浪漫化命題；它指向 1969-1988 之間 ARPANET 工程社群形成的特定行為準則。Postel jar 一詞源自 RFC 760 / RFC 793 中流行的「be liberal in what you accept, be conservative in what you send」原則<sup>28</sup>，後來擴展為對 RFC 制度與 IANA 編號分配的高度信任。Coleman 在 *Coding Freedom* 中把這類社群描述為「美學化的駭客倫理 + 制度化的同儕審查」<sup>29</sup>；Kelty 的 *Two Bits* 用「recursive public」概念解釋這些社群為何能維繫對技術基礎設施的協作管理<sup>30</sup>；Lessig 的 *Code: Version 2.0* 把這套文化的可持續條件追溯到「程式碼即法律」的政治經濟學<sup>31</sup>。

P1 不浪漫化這個階段。RFC 制度仰賴 ARPANET 早期極小的工程社群規模（早期作者數十人量級<sup>32</sup>），仰賴美國國防部 ARPA / DARPA 早期資助結構<sup>33</sup>，仰賴 NSFNET 商業化前 backbone 由聯邦資助而非市場競標的政治經濟<sup>34</sup>。把這個階段的「rough consensus and running code」搬到 2025 年身分領域，要先處理規模、資助結構、政治經濟三個歷史條件全部改變的事實。

### 2.3 P2'：1980-90s 美國國家權力的策略性放手

P2 的標準論述把這段時期形容為「美國對網路漠不關心」。這個說法在 Mueller 的 *Ruling the Root* 與 *Networks and States* 中已經被修正<sup>35</sup>：1995-1998 年間，美國行政部門（Department of Commerce、NTIA、White House Office of Science and Technology Policy）在多次內部審議後，做出將 DNS 監督權交給半私營非營利組織的策略性選擇<sup>36</sup>。1998 年 6 月 5 日的 White Paper（*Management of Internet Names and Addresses*）明確提出「轉移到私部門主導的全球性協作機構」是 stated policy<sup>37</sup>。1998 年 11 月 25 日 NTIA-ICANN MoU 簽訂前的草案討論中，行政部門在「直接成立政府機構」、「交給聯合國 ITU」、「交給 ISOC」、「成立新的私法基金會」幾個選項間明確選擇後者<sup>38</sup>。

P2'（策略性放手）取代 P2（漠不關心），是因為前者承載的歷史責任更精確。「漠不關心」暗示美國不在意，「策略性放手」承認美國對結果的形塑：選擇加州 501(c)(3) 私法基金會結構、選擇五方多利害關係人代表制、保留 NTIA 對根區（root zone）變更的最終批准權直到 2016 年，這些皆為策略性而非中性的決策<sup>39</sup>。Goldsmith 與 Wu 的 *Who Controls the Internet?* 提供了反向證據：在域名糾紛、cyberlibertarian 訴訟、跨境內容管制等場景，美國國家權力一直在場<sup>40</sup>。Drezner 的 *All Politics Is Global* 把這種「在場但讓渡」的策略放手放回大國政治經濟學脈絡<sup>41</sup>。

### 2.4 P3'：技術中立論述被工程社群有意建構

P3 的標準論述把 DNS 技術中立性當成工程客觀事實。這個說法忽略了一個更重要的事實，技術中立論述本身是工程社群的話語建構。DeNardis 在 *The Global War for Internet Governance* 與 *Protocol Politics* 中追蹤了三層話語建構機制<sup>42</sup>：第一層是 RFC 1591（1994 年 Postel 文）對 country-code TLD 委託原則的措辭，把 TLD 委託描述為「ministerial function」而拒絕承認其政治性<sup>43</sup>；第二層是 Cerf 與 Postel 在公開演講中持續使用「network of networks」、「reliable communications」等去政治化語彙<sup>44</sup>；第三層是 root key signing ceremony 等儀式化的技術操作把治理決策包裝成「純技術步驟」<sup>45</sup>。

「中立論述被有意建構」不是貶義表述。建構過程在當時的歷史條件下是合理的；若不把 DNS 包裝為純技術，1990 年代的美國行政部門、ITU、各國政府就有更強動機介入。但 2025 年回頭看，這個建構讓「DNS 中立性」變成可被反向利用的論述資源：當 ICANN 被質疑時，技術社群可以用「我們只做 ministerial function」來推卸政治責任；當各國政府要求介入時，工程社群可以用「技術中立」來防衛<sup>46</sup>。RFC 1591 措辭、ministerial function 語彙、root key signing ceremony 的儀式化，三者共同建構了一個讓 P_DNS 其他條件得以延續的語意基礎設施。

### 2.5 P4'：Stewardship Transition 是多重否決點下勉強通過的政治產物

P4 的標準論述把 IANA Stewardship Transition 描述為「成功完成的制度橋樑」。這個說法略過了 transition 在 2014-2016 兩年內反覆瀕臨失敗的事實。2014 年 3 月 NTIA 宣布退場意願後<sup>47</sup>，美國國會多次提出反對動議，包括 2014 年的 DOTCOM Act（H.R. 4342）試圖立法阻止 transition<sup>48</sup>。2016 年 9 月，當 transition 計畫排定於 10 月 1 日生效時，Texas、Arizona、Oklahoma、Nevada 四州總檢察長在德州南區聯邦地方法院提起訴訟，請求發布暫時性禁制令阻止 transition<sup>49</sup>。Hanks 法官在 2016 年 9 月 30 日下午（即 transition 生效前一天）駁回禁制令，使得 10 月 1 日的契約自動到期得以順利發生<sup>50</sup>。

P4'（多重否決點下勉強通過的政治產物）取代 P4（成功完成的制度橋樑），是因為 transition 的成功本身依賴一連串高度偶然的政治條件：Obama 行政部門的政策延續、NTIA 內部 Larry Strickling 主導的 transition 設計<sup>51</sup>、ICANN ATRT 1-4 報告系列建立的問責性實證<sup>52</sup>、多利害關係人社群在 ICG 提案中達成的政治妥協<sup>53</sup>、最後 Hanks 法官的司法決定<sup>54</sup>。任一環節失敗，transition 不會發生，DNS 治理就會在 NTIA-ICANN MoU 框架內持續到下一個 critical juncture。

P_DNS = {P1, P2', P3', P4'} 是合取結構，缺一不可。歷史社會學沒有為此建立純粹的可重複實驗，但 5 個反事實情境可以強化中強因果論證的強度（見第三章）。

## 三、HM 合取主張：身分領域 P1''-P4'' 全部失敗

### 3.1 HM 的形式化

HM（Historical Mismatch hypothesis）形式上是一個合取必要條件命題：

> ∀ P_i ∈ P_DNS = {P1, P2', P3', P4'}，P_i 在 2025 年身分領域 P_ID 中皆不成立。

HM 拒絕「身分領域國家化是必然」這個強命題；它主張的是另一件事，DNS 走出非國家治理之路所依賴的四個歷史前提，在身分領域 2025 年的處境中對應失敗。HM 的論證強度上限為中強，與 article 05 IT'、article 06 CB-Justice、article 07 SRP 一致，因為它依賴的是歷史比較與反事實，而非可控實驗<sup>55</sup>。

### 3.2 P1''：身分早期社群被各國政府主導

身分領域沒有 Postel jar 等價物。歐盟 eIDAS 1.0 立法於 2014 年通過<sup>56</sup>，是身分領域最早的跨國框架，但它從第一天起就是國家立法主導：成員國政府主導，歐盟委員會推動，業界與公民社會參與但無 RFC 等價的編輯權結構。印度 Aadhaar 從 2009 年開始建設，2016 年 Aadhaar Act 通過，整個過程由 UIDAI 國家機構主導<sup>57</sup>。中國《網路安全法》（2017）、《個人信息保護法》（2021）、《數據安全法》（2021）構成國家主導的身分監管體系<sup>58</sup>。美國 NIST SP 800-63 系列從 2004 年開始發布，由聯邦政府機構主導<sup>59</sup>。

W3C VC（Verifiable Credentials）與 DID（Decentralized Identifiers）工作組是身分領域最接近「跨國工程社群」的存在<sup>60</sup>，但它們的部分自治成果無法定地位。W3C VC Data Model 2.0 與 DID Core 1.0 已成為標準<sup>61</sup>，但它們在 eIDAS 2.0、ISO/IEC 18013-5、AAMVA mDL Implementation Guidelines 等正式法律與標準框架中是「被引用」的對象<sup>62</sup>，而非如 IETF RFC 在網路治理中的「事實標準」地位<sup>63</sup>。P1'' 不否認 W3C VC / DID 的工作成果，承認它存在但缺乏 P1 的法定權威結構。

### 3.3 P2''：國家權力高度警覺

身分領域沒有「策略性放手」的機會窗口。中俄在 2012 年 ITU WCIT-12 會議上提出強化 ITU 在網路治理中地位的提案<sup>64</sup>，明確訊號是國家對「誰能定義公民身分」的高度政治敏感性。歐盟 eIDAS 2.0（Regulation 2024/1183）由歐盟委員會與成員國強勢主導，與其說是放手不如說是擴張<sup>65</sup>。美國 NIST SP 800-63-4 草案在 2024 年公開徵詢時，明確強調聯邦機構在身分擔保等級（Identity Assurance Level）認定上的主導地位<sup>66</sup>。

紅線必須區分民主憲政結構與威權結構的差異。eIDAS 2.0 在歐盟議會、歐盟委員會、成員國理事會三方制衡下通過<sup>67</sup>；NIST 800-63 受美國行政程序法（APA）的公開徵詢約束<sup>68</sup>；Aadhaar 在 K.S. Puttaswamy v. Union of India（2018）案後受最高法院限縮<sup>69</sup>。中國《網安法》與《個人信息保護法》則由全國人大立法，缺乏可比的司法審查路徑<sup>70</sup>。HM 的 P2'' 主張不假設所有國家對身分領域同樣警覺，主張的是「身分領域不存在類似 1995-1998 美國行政部門那種策略性放手的機會窗口」這個合取結構級的事實。

### 3.4 P3''：身分天然涉及主權

身分領域的「技術中立論述」不可能被有意建構。工程師的建構能力本身存在，限制來自身分作為政治成員資格的本質性質。Krasner 在 *Sovereignty: Organized Hypocrisy* 中把主權拆解為四種（國內、互依、國際法、Westphalian）<sup>71</sup>，公民身分（citizenship）是國內主權與國際法主權的交集，它定義誰是國家政治成員、誰受該國國際法保護<sup>72</sup>。Sassen 的 *Territory, Authority, Rights* 進一步論證身分基礎設施規模化時，主權力量必然回流到中層治理機構<sup>73</sup>。

歷史經驗強化此論證。歐盟 eIDAS 1.0 設計時試圖採取較輕量的跨境互認框架<sup>74</sup>，但 2018-2024 年間的執行經驗顯示，當身分基礎設施真正規模化（涵蓋公共服務、銀行 KYC、跨境工作許可），歐盟委員會不得不在 eIDAS 2.0 中強化監管權力<sup>75</sup>。印度 Aadhaar 在 Puttaswamy II（2018）後仍維持中央集權的 UIDAI 結構，最高法院的限縮判決並未改變身分基礎設施的政治經濟<sup>76</sup>。台灣數位憑證皮夾（DIW）2024 年由數發部主導建設，公共信任清單上鏈到 Ethereum 主網，但根仍是國家<sup>77</sup>。不丹 NDI 同樣已上 Ethereum 主網，國家根結構不變<sup>78</sup>。

P3'' 不主張「身分天然涉及主權」是本體論真理，主張的是「身分基礎設施規模化時主權力量回流到中層」是 2009-2025 年間多個案例累積形成的中強歷史經驗。

### 3.5 P4''：缺乏 IANA-equivalent 過渡機制

身分領域沒有 IANA 等價物。NTIA 退場前是 DNS 治理的單一節點，所有契約、根區批准、IANA 函式合約都集中在 NTIA<sup>79</sup>。身分領域不存在這種單一節點。W3C VC / DID 工作組是標準制定者，無契約權力<sup>80</sup>；ETSI 與 ISO 是標準組織，標準採納依賴成員國<sup>81</sup>；ICAO 為國際民航組織，PKD（Public Key Directory）是 ICAO 內部的政府間 PKI，從未開放給非政府參與<sup>82</sup>。

NSTIC（National Strategy for Trusted Identities in Cyberspace）2011-2017 計畫是美國試圖建立身分領域 IANA-equivalent 的最近一次嘗試<sup>83</sup>。NSTIC 失敗本身是 P4'' 的證據，失敗原因包括跨機構協調困難、業界主導與政府主導之間的張力、缺乏類似 NTIA-ICANN MoU 的單一契約結構<sup>84</sup>。

### 3.6 五個反事實情境

HM 的合取主張可以用五個反事實情境檢驗。其一，若歐盟 eIDAS 1.0 立法時序延後 5 年，是否 W3C VC / DID 能取得類似 IETF 的事實標準地位？部分可能但仍受 P3'' 主權侵犯敏感度限制，eIDAS 延後不會改變成員國對公民身分定義權的保留<sup>85</sup>。其二，若 Puttaswamy II 限縮判決早 5 年，Aadhaar 是否會走 ICANN 模式？不可能，UIDAI 已是國家主導<sup>86</sup>。其三，若 NSTIC 2011-2017 計畫成功，是否能建立 IANA-equivalent？NSTIC 失敗本身印證 P4'' 缺乏制度過渡橋樑<sup>87</sup>。其四，若 W3C VC / DID 啟動早於 eIDAS 1.0 立法，是否能反向影響國家立法？W3C VC / DID 仍依賴成員國採納，無 NTIA 等價物<sup>88</sup>。其五，若 ICAO PKD 開放給非政府參與，是否能複製 ICANN 模式？ICAO PKD 始終封閉於國家，無 PSO Postel jar 文化<sup>89</sup>。

五個反事實情境共同支撐 HM 的中強因果論證：P_DNS 的四個前提在身分領域對應失敗，且失敗具有結構性而非偶然性。

## 四、四個跨國治理模式類比與五項適用性判準

### 4.1 四個模式深描

把眼光從「ICANN 是否能複製到身分領域」移開，跨國治理史提供了至少四個不同的制度模板可資比較。

**M1 ICANN 多利害關係人模式**。ICANN 採五方代表制（政府 GAC、業界 contracted parties、學術、公民社會 ALAC、技術社群）<sup>90</sup>。它沒有條約基礎，組織形式為加州 501(c)(3) 私法基金會<sup>91</sup>。各國對 ICANN 政策的影響透過 GAC 的諮詢意見管道，但 GAC 在 ICANN Bylaws 中只有 advisory 角色<sup>92</sup>。標準採納依賴域名註冊機構與根伺服器營運者的自願遵循<sup>93</sup>。

**M2 IATA + ICAO 雙軌模式**。國際航空治理分為業界自治與政府間組織兩軌：1945 年成立的 IATA（International Air Transport Association）負責業界自律標準（Resolution）、票價協調、運行協調<sup>94</sup>；1944 年由芝加哥公約成立的 ICAO（International Civil Aviation Organization）作為聯合國專門機構，制定 SARP（Standards and Recommended Practices）並監督國家執行<sup>95</sup>。雙軌之間透過雙邊航權協定、SARP 國家落地立法、IATA 與 ICAO 的事實協作運作。IATA 並非完美機構，1979 年美國 DOJ 對 IATA 票價協調發起反托拉斯調查<sup>96</sup>，導致 IATA 改革票價機制；這是業界寡頭問題的歷史警示。

**M3 SWIFT + CPMI 模式**。1973 年 SWIFT（Society for Worldwide Interbank Financial Telecommunication）成立於比利時，組織形式為合作社<sup>97</sup>。SWIFT 提供金融訊息傳輸基礎設施，採用 ISO 20022 訊息標準<sup>98</sup>。SWIFT 受 G10 央行 oversight 監督，主要 oversight 機構為 CPMI（Committee on Payments and Market Infrastructures，前身為 CPSS），負責確保 SWIFT 符合金融市場基礎設施原則（PFMI, 2012）<sup>99</sup>。SWIFT 的歷史亦非完美：俄烏戰爭後，SWIFT 在西方制裁壓力下移除部分俄羅斯銀行<sup>100</sup>，揭示業界基礎設施在地緣政治壓力下的政治化可能。

**M4 Basel Committee 軟法模式**。1974 年 Herstatt 銀行倒閉後，G10 央行成立 Basel Committee on Banking Supervision，組織形式為跨政府網絡（transgovernmental network），無條約基礎<sup>101</sup>。Basel Committee 制定 Basel I（1988）、Basel II（2004）、Basel III（2010）、Basel IV（最終改革 2017）等軟法，國家自願在國內法落地<sup>102</sup>。BIS 提供祕書處支持。Basel 模式的弱點是執行力依賴各國央行的政治意願；2008 年金融危機顯示 Basel II 在多國的落地不一致<sup>103</sup>。

四個模式的共通性是「跨國治理在沒有單一全球政府的條件下如何運作」，差異在於業界與國家的權力配置、條約基礎的有無、軟法或硬法的選擇。

### 4.2 五項適用性判準

把這四個模式套到身分領域 P_ID，需要先建立判準。本文採用五項適用性判準：

> **A — 主權侵犯敏感度**：該領域是否涉及國家主權的核心利益（公民身分、國家安全、貨幣主權、領土權威）？
> **B — 業界結構成熟度**：該領域是否存在跨國業界自治結構（業界協會、合作社、標準組織）？
> **C — 跨境互認需求**：該領域的跨境互認是日常還是邊緣場景？
> **D — 監管參與必要性**：監管機關（資料保護、反洗錢、消費者保護）是否必須在治理結構中有正式席位？
> **E — 軟法可行性**：軟法（自願採納、國際標準）能否承擔該領域的合規要求？

### 4.3 四模式的適用性矩陣

把五項判準應用到四個模式對 P_ID 的整體適配：

**M1 ICANN**：主權侵犯敏感度（A）方面，ICANN 設計上把政府置於 advisory 位置，與身分領域的高主權敏感度直接衝突<sup>104</sup>；業界結構成熟度（B）方面，身分領域業界（W3C VC / DID 工作組、DIF、ETSI、ISO）已具備中等成熟度但尚未形成 IANA-equivalent；跨境互認需求（C）強，符合 ICANN 模式；監管參與必要性（D）方面，ICANN 的 GAC advisory 結構不足以承擔 GDPR / FATF 等強監管的正式席位需求；軟法可行性（E）方面，ICANN 的自願採納模式對域名可行，對身分則因 eIDAS 等硬法存在而受限。整體判讀：ICANN 模式對身分領域不適用<sup>105</sup>。

**M2 IATA + ICAO 雙軌**：主權侵犯敏感度（A）方面，雙軌設計（業界自律 + 政府間組織）已內建主權空間；業界結構成熟度（B）方面，身分領域 W3C VC / DID + ETSI + ISO/IEC 18013-5 + AAMVA + DIF 結構與 IATA 業界自律可類比<sup>106</sup>；跨境互認需求（C）方面，IATA + ICAO 雙軌的航權承認與身分領域的 EU LoTL / AAMVA mDL 互認結構同形；監管參與必要性（D）方面，ICAO SARP 的國家執行機制對應身分領域的監管機關正式席位；軟法可行性（E）方面，IATA 自律與 ICAO SARP 的混合在身分領域可對應 W3C 標準與 eIDAS 硬法的混合。整體判讀：對 P_ID 適配度最高<sup>107</sup>。

**M3 SWIFT + CPMI**：主權侵犯敏感度（A）方面，SWIFT 業界合作社 + 央行 oversight 已處理金融主權的高敏感度；業界結構成熟度（B）方面，SWIFT 業界合作社結構嚴於 IATA 自律，對應身分領域則需要新建合作社級別的業界組織；跨境互認需求（C）方面，SWIFT 訊息標準與身分領域 W3C VC 訊息標準同形<sup>108</sup>；監管參與必要性（D）方面，CPMI 央行 oversight 對應身分領域 GDPR DPA / FATF 監管；軟法可行性（E）方面，PFMI 軟法 + 國家落地法的混合可承擔合規要求。整體判讀：次適配，介於 IATA 與 ICANN 之間<sup>109</sup>。

**M4 Basel Committee 軟法**：主權侵犯敏感度（A）方面，Basel 跨政府網絡缺乏業界席位，會把現有 eIDAS 硬法降階為軟法；業界結構成熟度（B）方面，Basel 模式不容業界進入治理層；跨境互認需求（C）方面，Basel 軟法對 G20 之外國家落地不均；監管參與必要性（D）方面，Basel 模式只容央行進入，不容資料保護機關 / FATF 同層議事；軟法可行性（E）方面，Basel 軟法執行力弱，套到身分領域是倒退<sup>110</sup>。整體判讀：對 P_ID 是倒退，因為它會把現有 eIDAS 硬法 + W3C / ETSI 技術標準軟法雙層降階為單層軟法<sup>111</sup>。

### 4.4 類比強度的邊界

四模式的整體適配排序（IATA + ICAO 最高、SWIFT + CPMI 次之、ICANN 不適用、Basel 倒退）的類比強度上限是「中強」。最大限制來自「結構同構不等於結果同形」：身分領域多了兩個 IATA / SWIFT / Basel 沒有的變數。其一是個人權利政治化，身分領域涉及人權法（包括 GDPR 第 9 條敏感資料、ECHR 第 8 條私人生活、印度 Puttaswamy II 隱私權判決<sup>112</sup>），航空與金融基礎設施的人權維度遠低於身分。其二是密碼學根信任替代，身分領域可以用 zkSNARK、selective disclosure、ZKP 等密碼學機制替代部分機構信任<sup>113</sup>，航空與金融則沒有對應的根信任替代技術。

四個模式中沒有任何一個天然優越。IATA 1979 DOJ 案例顯示業界寡頭問題；SWIFT 在地緣政治壓力下的政治化顯示業界基礎設施可被武器化；Basel 弱執行力顯示軟法的限制；ICANN 在身分領域的不適用本身就是論證。任何接近 P_ID 的雙軌制度設計都需要混合 IATA + ICAO 主結構、SWIFT + CPMI 業界合作社結構、Basel 軟法靈活性、GDPR 強監管 backstop 四套機制的優勢，並承擔對應風險。

## 五、FTLA 四層治理框架

### 5.1 FTLA 的形式化

第四章的類比給出最佳適配模式（IATA + ICAO + SWIFT + CPMI 的混合），但跨國治理史的類比本身不是工程設計。把類比結論轉成具體治理結構，需要溯因工程（abductive engineering）：從適配最高的模式特徵反推治理層的設計。

> **Federated Trust-List Alliance (FTLA) 治理框架**
>
> FTLA = (G_industry, G_state, G_recognition, G_oversight) 四層分層治理
>
> - **G_industry**（業界 + 標準組織自治層）：W3C VC / DID + IETF + ISO/IEC 18013-5 + ETSI EN 319 401 / 411 + DIF + AAMVA mDL 工作組
> - **G_state**（國家承認層）：國內身分立法（eIDAS 2.0 / Aadhaar Act / TW DIW 法律基礎 / NIST SP 800-63-4）+ 主管機關指定
> - **G_recognition**（跨境互認層）：EU LoTL + AAMVA mDL + APEC ECBA + APEC CBPRs + 雙邊 / 多邊條約
> - **G_oversight**（監管參與層）：資料保護機關（PDPC / CNIL / DPA / GDPR EDPB）+ 反恐金融（FATF）+ 消費者保護
>
> FTLA 採 IATA-like 雙軌（G_industry + G_state）作為主結構；Basel-like 軟法（G_recognition）作為跨境靈活性層；GDPR-like 強監管（G_oversight）作為 backstop。

### 5.2 各層治理的具體內容

**G_industry 層**。W3C VC Data Model 2.0、W3C DID Core 1.0、IETF（OAuth、JWT、selective disclosure JWT）、ISO/IEC 18013-5（mDL 訊息標準）、ETSI EN 319 401 / 411 系列（Trust Service Provider）、DIF DIDComm + Trust Establishment、AAMVA 2024 mDL Implementation Guidelines v1.4 共同構成業界自治層<sup>114</sup>。這一層處理訊息格式、密碼學原語、互通性測試、認證程式。它對應 IATA + SWIFT 業界合作社模式。

**G_state 層**。歐盟 eIDAS 2.0（Regulation 2024/1183）建立成員國 trust framework；印度 Aadhaar Act 2016 建立 UIDAI；台灣數位憑證皮夾由數發部主導建立<sup>115</sup>；美國 NIST SP 800-63-4 草案建立聯邦 IAL 認定<sup>116</sup>。這一層處理國家身分立法、主管機關指定、發行機構認證、根憑證授權。它對應 ICAO 國家承認模式。

**G_recognition 層**。EU LoTL（List of Trusted Lists）為歐盟成員國互認的核心機制<sup>117</sup>；AAMVA mDL Implementation Guidelines 為北美各州 mDL 互認框架<sup>118</sup>；APEC ECBA 為亞太區域跨境身分框架<sup>119</sup>；APEC CBPRs 為跨境隱私規則<sup>120</sup>；雙邊 / 多邊條約（如 EU-UK 互認、EU-Switzerland 互認）為個別協議。這一層處理跨境互認的軟法靈活性，對應 Basel 軟法 + IATA 雙邊航權承認模式。

**G_oversight 層**。歐盟 EDPB（European Data Protection Board）統籌 GDPR 監管；新加坡 PDPC、法國 CNIL、英國 ICO、德國各 DPA 等資料保護機關各自監督；FATF 監管反恐金融與身分驗證合規<sup>121</sup>；消費者保護機關監督商業 wallet 與發行機構。這一層處理規範底線，對應 GDPR 強監管模式。

### 5.3 三大治理風險

FTLA 不是「同時解所有問題」的萬靈藥。三大治理風險必須持續對峙。

**第一個風險是 industry capture**。業界寡頭可能透過 G_industry 層形成事實壟斷，把標準綁定在少數大型發行機構或 wallet 提供者的利益上。IATA 1979 DOJ 反托拉斯案例提供歷史警示<sup>122</sup>。在身分領域，Apple Wallet、Google Wallet、Microsoft Entra Verified ID 等大型平台可能透過 W3C / DIF 工作組影響標準制定方向<sup>123</sup>。對應的治理機制是 W3C / IETF 的開放標準程序、ETSI / ISO 的多成員投票、AAMVA 的州層級民主代表性。G_industry 不天然非政治，需要持續的程序性治理保障<sup>124</sup>。

**第二個風險是 state capture**。威權國家可能透過 G_state 層強勢介入。中國《網路安全法》與《個人信息保護法》模式把身分基礎設施納入國家安全框架<sup>125</sup>，與 G_recognition / G_oversight 層的跨境互認與獨立資料保護機關難以對接。eIDAS 2.0 的成員國 trust framework 在波蘭與匈牙利等司法獨立性下降的成員國也面臨對應風險<sup>126</sup>。FTLA 在 G_state 厚度上跨國不均勻，歐盟強、亞洲多國弱，是可被攻擊的縫隙<sup>127</sup>。

**第三個風險是 lowest-common-denominator**。G_recognition 層的跨境互認可能退化為弱共識，把高標準成員拖向低標準。Basel III 的部分國家落地不一致可作為對照<sup>128</sup>。為避免這個風險，G_recognition 需要 G_oversight 的 backstop，由 GDPR 等強監管確保最低底線。

三大風險的對應機制採「分層處理」的策略，拒絕「同時解決」的萬靈藥幻想。G_industry 層的 industry capture 由 IETF / W3C 開放程序處理；G_state 層的 state capture 由 G_recognition + G_oversight 雙重 backstop 處理；G_recognition 層的 lowest-common-denominator 由 G_oversight GDPR / FATF 強監管處理。

### 5.4 FTLA 與其他治理框架的關係

FTLA 不取代既有的區域性 Trust Framework，它整合並提供分層治理的概念框架。Pan-Canadian Trust Framework（PCTF）<sup>129</sup>、英國 Digital Identity & Attributes Trust Framework<sup>130</sup>、Sovrin Governance Framework<sup>131</sup>、Trust Over IP Foundation 框架<sup>132</sup>等可被 FTLA 收納為 G_industry 與 G_state 層的具體實作。歐盟 eIDAS 2.0 trust framework 已是 FTLA 的部分實作<sup>133</sup>，包含 G_state（成員國立法）、G_recognition（EU LoTL）、G_oversight（GDPR / EDPB）三層；缺少的是 G_industry 層的明確業界自治結構。


## 六、子領域複製可能：四個案例與四個邊界條件

### 6.1 為什麼問子領域

HM 顯示 P_DNS 在整體身分領域 P_ID 對應失敗。但「整體身分」不是均質的單一場域。仍有觀察者問：在特定子領域（如 civic proof、選舉、抵抗運動），DNS 模式是否仍可複製？這個問題值得認真對待，因為若答案為是，FTLA 的 G_industry 層就需要為這些子領域保留特殊的鬆散自治位置。

本章用四個子領域案例與四個邊界條件 B1-B4 評估子領域複製可能性。結論先講：B1（早期社群文化的相似性）部分滿足，B2（國家權力對子領域的關注度）失敗，B3（技術中立性的可建構性）失敗，B4（制度過渡橋樑的存在）失敗。子領域可在 G_industry 層保留鬆散自治的相對位置，但不能延伸為整體 DNS 模式復現。

### 6.2 四個子領域案例

**PSE（Privacy & Scaling Explorations）**。Ethereum Foundation 的子組織，2022 年起運作；研究方向包括 zk personhood、Anon Aadhaar、Semaphore、MACI 等隱私運算協議<sup>134</sup>。社群文化在四個案例中與 Postel jar 距離最近：偏好 RFC-style 的開放規格、強調 rough consensus、研究輸出公開於 GitHub<sup>135</sup>。

**Vocdoni**。源自 Aragon 生態，2017 年加泰隆尼亞獨立公投脈絡下開發出鏈上投票協議<sup>136</sup>。技術設計強調抗審查與匿名性。社群結構為自治社群 + 鏈上治理。

**Rarimo Freedom Tool**。在俄烏戰爭脈絡下開發；目標是讓俄羅斯流亡公民與抗議運動參與者取得可驗證身分<sup>137</sup>。社群高度政治化，使用情境帶有危機性。

**DIF（Decentralized Identity Foundation）**。W3C 周邊組織；DIDComm 與 Trust Establishment WG 為核心輸出<sup>138</sup>。成員結構包含微軟、IBM、Mastercard 等大型企業，業界寡頭風險顯著。

### 6.3 四個邊界條件

**B1 — 早期社群文化的相似性**。Postel jar 文化包含三個成分：rough consensus and running code 的決策慣例、RFC-style 開放規格的傳播機制、學術社群的同儕審查文化<sup>139</sup>。PSE 在三個成分上部分滿足；Vocdoni、Rarimo、DIF 距離較遠。Free Software 文化研究（Coleman 2013、Kelty 2008、Stallman 2002）顯示這類文化的可持續性依賴特定資助結構與社群規模<sup>140</sup>。B1 評估：部分滿足。

**B2 — 國家權力對子領域的關注度**。這個邊界條件失敗。Worldcoin 監管反彈時間線清楚標記了「國家漠不關心子領域」假設的過期：2024 年 3 月西班牙 AEPD 發布暫停命令<sup>141</sup>；2023 年 8 月肯亞 ODPC 暫停 Worldcoin<sup>142</sup>；2024 年 5 月阿根廷 AAIP 啟動調查<sup>143</sup>；2024 年 12 月 EDPB 延伸暫停<sup>144</sup>；2024 年 5 月香港 PCPD 介入<sup>145</sup>；2024 年 3 月葡萄牙 CNPD 發布 Deliberação 2024/124<sup>146</sup>；2025 年 1 月巴西 ANPD 暫停 Worldcoin<sup>147</sup>。一個 zk personhood 子領域協議的部署，已能引發七個資料保護機關在兩年內陸續介入。B2 評估：失敗。

**B3 — 技術中立性的可建構性**。子領域常處於危機驅動脈絡，難以建構技術中立論述。Vocdoni 在 2017 年加泰隆尼亞獨立公投脈絡下出現，西班牙憲法法庭裁定公投違憲後，協議與政治運動深度綁定<sup>148</sup>。Rarimo Freedom Tool 在俄烏戰爭脈絡下部署，被使用者明確視為抵抗工具<sup>149</sup>。「中立論述」在這些脈絡無法建構，因為使用者本身就把工具理解為政治武器。與 article 07 SRP 形成張力：當 root（國家頒發憑證）與 user（流亡或抗議者）的政治立場明確對立時，技術中立論述被使用情境本身否決<sup>150</sup>。PSE 與 DIF 在這方面相對好些，但 zk personhood 的政治性近年也快速上升<sup>151</sup>。B3 評估：失敗。

**B4 — 制度過渡橋樑的存在**。子領域必然消費上游國家頒發憑證。Anon Aadhaar 依賴印度 UIDAI 簽發的 Aadhaar QR code 作為輸入<sup>152</sup>；zkPassport 依賴 ICAO PKD 中的 CSCA 國家簽發證書<sup>153</sup>；Vocdoni 在實際公投中需要某種身分根（在加泰隆尼亞案例為公民人口資料）<sup>154</sup>；Rarimo Freedom Tool 仍以俄羅斯護照為驗證根<sup>155</sup>。上游 anchor 政策改變，子領域自治立刻失效。UIDAI 改變 Aadhaar QR code 規格，Anon Aadhaar 必須跟進；ICAO PKD 改變 CSCA 信任清單，zkPassport 必須跟進。子領域沒有 NTIA 等價物可作制度過渡橋樑。B4 評估：失敗。

### 6.4 三層治理對應 FTLA

子領域的觀察結果是：B1 部分滿足、B2-B4 全失敗。子領域不會「重現 Postel jar」，但仍有相對自治的位置。SA-5 的三層治理模型把它放在 G_industry 層內的子層：

> **三層治理模型**（用於子領域）
>
> - **G_state**：國家身分發行層（UIDAI、ICAO PKD、各國護照管理機關、選舉委員會）
> - **G_alliance**：跨國 trust-list alliance 層（FTLA G_recognition 對應）
> - **G_industry**：子領域業界自治層（PSE / Vocdoni / Rarimo / DIF 在此層保留鬆散自治位置）

把這個三層模型映射到 FTLA 四層：G_state 對應 FTLA G_state + G_oversight；G_alliance 對應 FTLA G_recognition；G_industry 對應 FTLA G_industry，並在其中為子領域保留特定鬆散自治空間。子領域可保留 Postel jar 精神的相對位置，但無法延伸為整體 DNS 模式復現。

子領域有被收編的風險，這個風險與「整體可複製」的命題分屬不同分析層級。Worldcoin 在七個資料保護機關介入下的處境，顯示 zk personhood 子領域並非天然受保護<sup>156</sup>。生物識別的不可逆性是另一個獨立問題：虹膜、指紋、人臉等生物特徵的洩漏不可撤回，這個工程事實在子領域與整體身分的討論中都需要處理<sup>157</sup>。子領域的 G_industry 鬆散自治位置不能掩蓋這些風險。

在 KYC、跨境投票、健保等場景，連子領域的鬆散自治也不可能。KYC 受 FATF 監管直接約束<sup>158</sup>；跨境投票涉及國家公民資格認定<sup>159</sup>；健保涉及國家社會保險體系<sup>160</sup>。這些場景的 G_state 與 G_oversight 厚度，使得 G_industry 層的子領域自治窗口幾乎不存在。

## 七、政策建議與工程接合

### 7.1 政策建議

從 HM 與 FTLA 推導七項政策建議：

第一，停止把 ICANN 當成 federated trust-list alliance 的範本。ICANN 政府只 advisory 的設計選擇與 P_ID 高主權敏感度直接衝突，套用會引發成員國強烈反彈<sup>161</sup>。

第二，採 IATA + ICAO 雙軌結構作為 FTLA 主結構。業界自律（W3C / DIF / ETSI / ISO）對應 IATA Resolution，國家承認（eIDAS 2.0 / Aadhaar Act / NIST SP 800-63-4 / TW DIW）對應 ICAO SARP；雙軌之間透過 EU LoTL、AAMVA、APEC ECBA 等互認框架運作<sup>162</sup>。

第三，G_recognition 採 Basel-like 軟法靈活性，但設定 GDPR-like 強監管 backstop。軟法處理跨境互認的差異化承認，硬法處理隱私權與消費者保護的最低底線<sup>163</sup>。

第四，G_oversight 必須有正式席位。資料保護機關（GDPR EDPB、CNIL、PDPC）、反恐金融（FATF）、消費者保護應與業界、國家同層議事<sup>164</sup>。ICANN 把政府放在 advisory 的設計缺陷不能複製到身分領域。

第五，在 G_industry 層為子領域（PSE / Vocdoni / Rarimo / DIF / 抗審查運動工具）保留鬆散自治窗口。這個窗口不是「Postel jar 重現」的承諾，是邊界條件 B2-B4 失敗下仍可運作的特定空間<sup>165</sup>。

第六，承認 G_state 厚度跨國不均勻。歐盟強、新加坡強、台灣中、印度中、東南亞多國弱、非洲多國弱<sup>166</sup>。FTLA 的設計需考慮 G_recognition 與 G_oversight 對 G_state 弱國家的補強機制，避免把弱國家拖入 lowest-common-denominator 陷阱。

第七，建立 IATA 1979 DOJ-like 反托拉斯監督。G_industry 層的 industry capture 風險（Apple Wallet、Google Wallet、Microsoft Entra Verified ID 等大型平台）需要持續的反托拉斯監督<sup>167</sup>。

### 7.2 工程接合

FTLA 與 article 03-07 的論證在工程層接合。

**與 article 03（digital-association-empirical-test）的接合**。article 03 的 H1' 三道牆處理「數位結社」的法律可能性條件，三道牆是合取結構<sup>168</sup>。HM 與 H1' 同樣是合取結構，但 HM 用於治理層的歷史性必要條件。當數位結社需要跨國互認時，FTLA G_recognition 提供具體的治理結構；H1' 三道牆若全部突破，G_industry + G_state + G_recognition 三層治理結構需就「跨國數位結社的法律承認」這個議題重新議事。

**與 article 04（pseudonymous-participation-legal）的接合**。article 04 的 T 三件式處理 pseudonymous participation 的法律前提<sup>169</sup>。HM 提供「為何 T 三件式不能單純由非國家共識網絡支撐」的歷史社會學論證——T 涉及 accountable pseudonymity，這在 HM 的 P3''（身分天然涉及主權）下無法純粹由 G_industry 層承擔，需要 G_state 與 G_oversight 介入。

**與 article 05（sybil-resistance-cost-benefit）的接合**。article 05 的 IT' 不可能三角處理 sybil resistance 的成本-效益約束<sup>170</sup>。HM 是 IT' 在治理層的對應。IT' 處理單一協議內的成本-效益權衡，HM 處理跨協議跨國的治理結構選擇。FTLA 提供 IT' 在治理層的對應補救：sybil resistance 的合規與互認需要 G_recognition 與 G_oversight 共同承擔。

**與 article 06（civic-burden-redistribution）的接合**。article 06 的 CB-Justice D1\*∧D2\* 處理 civic burden redistribution 的規範條件<sup>171</sup>。FTLA 的 G_state 與 G_industry 對應 article 06 商業 wallet vs 政府 wallet 的規範類別差異——商業 wallet（Apple、Google）位於 G_industry 層，政府 wallet（EUDI Wallet、TW DIW）位於 G_state 層；兩者的規範重疊由 G_oversight 處理。

**與 article 07（passport-rooted-paradox）的接合**。article 07 的 SRP 處理 multi-rooted civic proof 的主權根結構<sup>172</sup>。HM 的「主權無法繞開」是 SRP 在治理層的反向證明：HM 顯示 P_DNS 在身分領域對應失敗，因此 SRP 觸發後的補救必須走 FTLA 而非 ICANN。FTLA 為 SRP 提供具體的治理層回應：多根憑證（multi-rooted）的合規由 G_recognition 處理，主權根的政治經濟由 G_state 與 G_oversight 處理。

**與 did-vc-public-blockchain article（2026-05-01）的接合**。該篇處理 DID/VC 公共鏈部署，關鍵案例包括不丹 NDI 上 Ethereum 主網、台灣數位憑證皮夾信任清單上公共鏈、QuarkID 在 ZKsync L2<sup>173</sup>。這些案例在 FTLA 框架下：不丹 NDI 與 TW DIW 屬 G_state 層的具體實作，公共鏈作為訊息傳輸基礎設施屬 G_industry 層；國家根結構不變，公共鏈替代的是中心化訊息傳輸而非主權根<sup>174</sup>。這個區分對應 P3'' 的核心：身分基礎設施規模化時主權力量回流到中層，而非密碼學替代根信任。

**與 prompt 16（civic AI agent delegation limits）的接合**。FTLA 為 civic AI agent 治理提供「分層處理」的概念基礎<sup>175</sup>。AI agent 的代理權限不能用單一層級處理，G_industry 層處理 agent 互通協議、G_state 層處理代理權的法律有效性、G_recognition 層處理跨境代理承認、G_oversight 層處理代理權的消費者保護與資料保護底線。

## 八、結論

把 HM、FTLA、子領域邊界條件三者放回博論第十一章的脈絡，可以收束如下。

DNS 走出非國家治理之路是歷史機遇的產物，依賴四個前提條件 P_DNS = {P1 Postel jar 學術社群、P2' 美國策略性放手、P3' 技術中立論述被有意建構、P4' Stewardship Transition 多重否決點下勉強通過}。HM（Historical Mismatch hypothesis）顯示這四個前提在 2025 年數位身分領域全部不成立；HM 與 article 03 H1' 三道牆、article 04 T 三件式、article 05 IT' 不可能三角、article 06 CB-Justice D1\*∧D2\*、article 07 SRP 同樣是合取結構，但用於治理層的歷史性必要條件。4 跨國治理模式比較顯示 IATA + ICAO 與 SWIFT + CPMI 雙軌模式適配度最高；ICANN 不是模板，FTLA = (G_industry, G_state, G_recognition, G_oversight) 四層治理框架才是。在特定子領域（PSE / Vocdoni / Rarimo / DIF）可保留 G_industry 層的鬆散自治，但 B2-B4 邊界條件全失敗，無法擴展為整體 DNS 模式復現。

對讀者最重要的訊息有三項。其一，不要把 DNS 治理史浪漫化為「自由的網路」，它是 1969-2016 年多重歷史前提偶然成立的合取產物，每一個前提的獨立失敗都會讓整體治理結構走向不同路徑。其二，ICANN 在身分領域不適用，把它當成 federated trust-list alliance 的範本會引發成員國對主權侵犯的強烈反彈；IATA + ICAO 雙軌與 SWIFT + CPMI 業界合作社結構提供更可行的歷史類比。其三，FTLA 的四層治理框架對「同時解所有問題」的萬靈藥幻想保持拒絕；它與 ICANN 模式相比的核心優勢，落在分層處理 industry capture、state capture、lowest-common-denominator 三大風險的具體能力上。

留下三個開放問題。其一，FTLA 的跨層級協調機制如何具體運作？G_industry / G_state / G_recognition / G_oversight 之間的議事程序、優先順序、衝突解決機制需要進一步設計。其二，FTLA G_state 厚度跨國不均勻的補強機制是什麼？歐盟強、亞洲多國弱的不均勻是可被攻擊的縫隙，G_recognition 的軟法靈活性與 G_oversight 的硬法 backstop 如何補位。其三，子領域 G_industry 鬆散自治窗口的工程實作邊界在哪？PSE 距離 Postel jar 最近，但仍受 B2-B4 限制；在 KYC、跨境投票、健保等場景甚至連子領域窗口也不存在，工程設計需要清楚界定可運作範圍。

這三個問題不在本文範圍內可以完全回答。它們將留給 ICANN 多利害關係人社群、W3C VC / DID 工作組、ETSI / ISO 標準組織、各國資料保護機關、FATF、APEC、學術界與公民社會共同議事。FTLA 提供的是議事框架，不是議事結論。

## 誠實邊界

本文有四項邊界需要明示。其一，HM 的論證強度上限為中強，依賴歷史比較與反事實，而非可控實驗。其二，4 跨國治理模式類比的強度上限為中強，類比預設「結構同構」但不能保證「結果同形」，身分領域的個人權利政治化與密碼學根信任替代是 IATA / SWIFT / Basel 沒有的變數。其三，P3'（技術中立論述被有意建構）依賴對 Postel、Cerf 等人動機的詮釋，無法以檔案直接證實「真誠相信」與「戰略包裝」的二擇。其四，子領域的四個邊界條件評估有時間性，未來 5-10 年的監管反彈、危機驅動政治化、上游 anchor 政策變動皆可能改變評估結果。本文的 FTLA 框架是 2025-2026 年條件下的工程建議，需隨歷史條件變動更新。

## 參考資料

1. Mueller, M. (2010). *Networks and States: The Global Politics of Internet Governance*. MIT Press。來源等級 A。
2. Regulation (EU) 2024/1183 (eIDAS 2.0); AAMVA 2024 mDL Implementation Guidelines v1.4; APEC ECBA framework documentation。來源等級 A。
3. Mueller, M. (2002). *Ruling the Root: Internet Governance and the Taming of Cyberspace*. MIT Press。來源等級 A。
4. Pierson, P. (2004). *Politics in Time: History, Institutions, and Social Analysis*. Princeton UP; Capoccia, G., & Kelemen, R. D. (2007). The Study of Critical Junctures. *World Politics* 59(3)。來源等級 A。
5. Article 03 (digital-association-empirical-test) H1' 三道牆論證。來源等級 A（系列內部）。
6. Article 04 (pseudonymous-participation-legal) T 三件式論證。來源等級 A（系列內部）。
7. Article 05 (sybil-resistance-cost-benefit) IT' 不可能三角論證。來源等級 A（系列內部）。
8. Article 06 (civic-burden-redistribution) CB-Justice D1\*∧D2\* 論證。來源等級 A（系列內部）。
9. Article 07 (passport-rooted-paradox) SRP 論證。來源等級 A（系列內部）。
10. DeNardis, L. (2014). *The Global War for Internet Governance*. Yale UP。來源等級 A。
11. Goldsmith, J., & Wu, T. (2006). *Who Controls the Internet?: Illusions of a Borderless World*. Oxford UP。來源等級 A。
12. Drezner, D. (2007). *All Politics Is Global*. Princeton UP。來源等級 A。
13. Crocker, S. RFC 1 (1969). *Host Software*。來源等級 A。
14. Cerf, V. (2009). *History of the Internet*; Crocker, S. (2009). *How the Internet Got Its Rules*. NYT Op-ed。來源等級 A。
15. Mockapetris, P. RFC 882 / 883 (1983); RFC 1034 / 1035 (1987)。來源等級 A。
16. Postel, J. RFC 1083 / RFC 1591 (1994)。來源等級 A。
17. NSF NSFNET Backbone 政策文件; Brookings Institution Internet Governance 報告。來源等級 A/B。
18. NTIA-ICANN Memorandum of Understanding (1998-11-25)。來源等級 A。
19. ICANN Bylaws + Affirmation of Commitments (AoC, 2009-09-30)。來源等級 A。
20. ICANN ATRT 1/2/3/4 報告系列。來源等級 A。
21. ICANN GAC, ALAC, ccNSO, GNSO, ASO 多利害關係人結構文件; Levin, R. C. (2008). *Multistakeholder Internet Governance*。來源等級 A。
22. NTIA Stewardship Transition Documentation (2014-2016)。來源等級 A。
23. IANA Stewardship Transition Coordination Group (ICG) 提案 (2016)。來源等級 A。
24. Texas v. DoC, U.S. District Court (S.D. Tex.) 2016-09 訴訟文件; Hanks 法官 2016-09-30 駁回禁制令。來源等級 A/C。
25. ICANN IANA Stewardship Transition 完成公告 (2016-10-01)。來源等級 A。
26. Pierson, P. (2004). *Politics in Time*. Princeton UP, ch.1-2。來源等級 A。
27. Capoccia, G., & Kelemen, R. D. (2007). The Study of Critical Junctures. *World Politics* 59(3); Capoccia, G. (2015). *Critical Junctures and Institutional Change*. Comparative Political Studies。來源等級 A。
28. Postel, J. RFC 760 (1980); RFC 793 (1981) Robustness Principle; Postel jar 文化的 RFC 起源。來源等級 A。
29. Coleman, G. (2013). *Coding Freedom: The Ethics and Aesthetics of Hacking*. Princeton UP。來源等級 A。
30. Kelty, C. (2008). *Two Bits: The Cultural Significance of Free Software*. Duke UP。來源等級 A。
31. Lessig, L. (2006). *Code: Version 2.0*。來源等級 A。
32. ARPA / DARPA 早期歷史檔案; IETF RFC 9281 *Entities Involved in the IETF Standards Process*。來源等級 A/B。
33. ARPA / DARPA 早期歷史檔案。來源等級 B。
34. NSF NSFNET Backbone 政策文件 1985-1995; NSFNET 商業化過渡。來源等級 B。
35. Mueller, M. (2002). *Ruling the Root*; Mueller, M. (2010). *Networks and States*。來源等級 A。
36. NTIA Green Paper (1998-01-30) *A Proposal to Improve Technical Management of Internet Names and Addresses*; NTIA White Paper (1998-06-05) *Management of Internet Names and Addresses*。來源等級 A。
37. NTIA White Paper (1998-06-05)。來源等級 A。
38. Mueller, M. (2002). *Ruling the Root*, ch.7。來源等級 A。
39. ICANN Bylaws 2009; NTIA-ICANN MoU 1998 + Amendments; AoC 2009-09-30。來源等級 A。
40. Goldsmith, J., & Wu, T. (2006). *Who Controls the Internet?*. Oxford UP。來源等級 A。
41. Drezner, D. (2007). *All Politics Is Global*. Princeton UP。來源等級 A。
42. DeNardis, L. (2014). *The Global War for Internet Governance*. Yale UP; DeNardis, L. (2009). *Protocol Politics*. MIT Press。來源等級 A。
43. Postel, J. RFC 1591 (1994). *Domain Name System Structure and Delegation*。來源等級 A。
44. Cerf, V. (2009). *History of the Internet*; Postel, J. (1994). RFC 1591 measurement of ministerial function。來源等級 A。
45. ICANN root key signing ceremony 公開記錄與 KSK rollover 文件 (2018)。來源等級 A。
46. Bygrave, L. A., & Bing, J. (Eds.) (2009). *Internet Governance: Infrastructure and Institutions*. Oxford UP。來源等級 A。
47. NTIA 2014-03-14 Announcement of intent to transition stewardship of IANA functions。來源等級 A。
48. Domain Openness Through Continued Oversight Matters Act (DOTCOM Act) H.R. 4342 (2014); 多次國會聽證記錄。來源等級 A。
49. Texas v. United States Department of Commerce, Civil Action No. 4:16-CV-2410 (S.D. Tex.)。來源等級 C。
50. Hanks, G. R., U.S. District Judge, Memorandum and Order on Plaintiffs' Application for Temporary Restraining Order (2016-09-30)。來源等級 C。
51. Strickling, L. (NTIA Assistant Secretary) public statements 2014-2016; ICANN Stewardship Transition Implementation。來源等級 A。
52. ICANN ATRT 1 (2010), ATRT 2 (2013), ATRT 3 (2018), ATRT 4 (2024) 報告系列。來源等級 A。
53. ICG (IANA Stewardship Transition Coordination Group) 提案 (2016-03-10) 。來源等級 A。
54. Texas v. DoC 訴訟; Hanks 法官 2016-09-30 駁回禁制令。來源等級 C。
55. Article 05/06/07 因果論證強度上限「中強」標準; Pierson 2004 path dependency 論證強度框架。來源等級 A（系列內部 + 學術文獻）。
56. Regulation (EU) 910/2014 (eIDAS 1.0; 修正版 Regulation (EU) 2024/1183 即 eIDAS 2.0)。來源等級 A。
57. Aadhaar Act 2016 (India); UIDAI 設立文件。來源等級 A。
58. 中華人民共和國《網路安全法》(2017); 《個人信息保護法》(2021); 《數據安全法》(2021)。來源等級 A。
59. NIST SP 800-63 系列從 2004 起的修訂歷史; NIST SP 800-63-3; 800-63-4 ipd (2024)。來源等級 A。
60. W3C VC / DID 工作組記錄。來源等級 A。
61. W3C Verifiable Credentials Data Model 2.0; W3C DID Core 1.0。來源等級 A。
62. Regulation (EU) 2024/1183 (eIDAS 2.0); ISO/IEC 18013-5 mDL; AAMVA 2024 mDL Implementation Guidelines v1.4。來源等級 A。
63. IETF RFC 9281 *Entities Involved in the IETF Standards Process*。來源等級 A。
64. ITU-T 2012 WCIT-12 + Russia/China 提案文件; Mueller, M. (2017). *Will the Internet Fragment?*. Polity。來源等級 A。
65. Regulation (EU) 2024/1183 (eIDAS 2.0)。來源等級 A。
66. NIST SP 800-63-4 ipd (2024)。來源等級 A。
67. eIDAS 2.0 立法歷史記錄 (2021-2024); 歐洲議會、歐盟委員會、歐盟理事會三方協商文件。來源等級 A/C。
68. Administrative Procedure Act (5 U.S.C. § 553); NIST 公開徵詢程序。來源等級 A。
69. K.S. Puttaswamy v. Union of India (2017) 10 SCC 1; (2018) (隱私權判決)。來源等級 A。
70. 《網路安全法》(2017); 《個人信息保護法》(2021); 全國人民代表大會立法程序。來源等級 A。
71. Krasner, S. D. (1999). *Sovereignty: Organized Hypocrisy*. Princeton UP。來源等級 A。
72. Sassen, S. (2006). *Territory, Authority, Rights*. Princeton UP。來源等級 A。
73. Sassen, S. (2006). *Territory, Authority, Rights*; Sassen 全球城市與主權研究系列。來源等級 A。
74. Regulation (EU) 910/2014 (eIDAS 1.0; 修正版 Regulation (EU) 2024/1183 即 eIDAS 2.0) 立法歷史。來源等級 A。
75. Regulation (EU) 2024/1183 (eIDAS 2.0) 立法歷史與監管權力擴張條款。來源等級 A。
76. K.S. Puttaswamy v. Union of India (2018) (Aadhaar 限縮判決); UIDAI 持續主導。來源等級 A。
77. 台灣數位發展部 DIW 政策文件 2024; 公共信任清單上 Ethereum 主網部署文件。來源等級 A/B。
78. Bhutan NDI Ethereum 主網部署文件 (與 did-vc-public-blockchain article 共用)。來源等級 A/B。
79. NTIA-ICANN MoU 1998 + Amendments; IANA functions contract (Cooperative Agreement)。來源等級 A。
80. W3C VC / DID 工作組記錄; W3C Process Document。來源等級 A。
81. ETSI EN 319 401 V2.3.1; 411-1 V1.4.1; 411-2 V2.5.1; ISO/IEC 18013-5。來源等級 A。
82. ICAO Doc 9303 (2021) Part 11 + 12; ICAO PKD Annual Report 2024。來源等級 A/B。
83. NSTIC (National Strategy for Trusted Identities in Cyberspace) 2011-2017。來源等級 B。
84. NSTIC 計畫評估報告; NIST IDESG (Identity Ecosystem Steering Group) 解散文件。來源等級 B。
85. eIDAS 1.0 立法歷史; eIDAS 1.0 → 2.0 修訂分析。來源等級 A/C。
86. UIDAI 機構結構; Aadhaar Act 2016。來源等級 A。
87. NSTIC 失敗評估報告; NSTIC 終止文件 (2017)。來源等級 B。
88. W3C VC / DID 與 ETSI / ISO 標準採納依賴成員國的歷史經驗。來源等級 A。
89. ICAO PKD Annual Report 2024; ICAO PKD 國家會員結構。來源等級 A/B。
90. ICANN Bylaws + 多利害關係人結構文件。來源等級 A。
91. ICANN 加州 501(c)(3) 註冊文件。來源等級 A。
92. ICANN GAC Operating Principles; ICANN Bylaws 規定 GAC advisory 角色。來源等級 A。
93. ICANN-Verisign Cooperative Agreement; root server operators 自願協議。來源等級 A。
94. IATA Annual Reports + Resolution files; IATA 1945 成立文件。來源等級 A。
95. ICAO Annex + SARP 文件; 1944 Chicago Convention。來源等級 A。
96. United States v. International Air Transport Association (1979) DOJ 反托拉斯調查; IATA 票價協調改革。來源等級 A。
97. SWIFT Bylaws 1973 比利時合作社註冊文件。來源等級 A。
98. SWIFT ISO 20022 訊息標準規範。來源等級 A。
99. CPMI-IOSCO *Principles for Financial Market Infrastructures* (2012); G10 央行 SWIFT oversight 框架。來源等級 A。
100. SWIFT 俄羅斯銀行制裁公告 (2022-03 起); EU Council Decision (CFSP) 2022/335。來源等級 A。
101. Basel Committee on Banking Supervision 1974 成立文件; BIS Annual Report。來源等級 A。
102. Basel Committee *Basel I* (1988); *Basel II* (2004); *Basel III* (2010); *Basel IV* (Final Reform 2017)。來源等級 A。
103. Eilstrup-Sangiovanni, M. (2018). *International Networks*; 2008 金融危機後 Basel II 落地評估。來源等級 A。
104. ICANN GAC advisory 設計與身分領域主權敏感度衝突分析。來源等級 A。
105. Slaughter, A.-M. (2004). *A New World Order*. Princeton UP; Abbott, K. W., & Snidal, D. (2000). *Hard and Soft Law in International Governance*。來源等級 A。
106. W3C VC / DID + ETSI + ISO/IEC 18013-5 + AAMVA + DIF 業界結構與 IATA 自律對照。來源等級 A。
107. SA-3 § 5 適用性矩陣評估; Slaughter 2004 跨政府網絡理論。來源等級 A。
108. SWIFT ISO 20022 與 W3C VC Data Model 訊息結構對照。來源等級 A。
109. SA-3 § 5 適用性矩陣評估。來源等級 A（系列內部）。
110. Helfer, L. R. (2008). *Nonconsensual International Lawmaking*; Basel 軟法執行力評估。來源等級 A。
111. Regulation (EU) 910/2014 (eIDAS 1.0); Regulation (EU) 2024/1183 (eIDAS 2.0) 硬法與技術標準軟法雙層結構分析。來源等級 A。
112. GDPR Regulation (EU) 2016/679 第 9 條敏感資料; ECHR 第 8 條私人生活; K.S. Puttaswamy v. Union of India (2017)。來源等級 A。
113. zk personhood 文獻系列; Andolfo et al. (2024). *zkPassport*. IACR ePrint 2024/1377; Anon Aadhaar specification (PSE 2024); Sismo whitepaper; Holonym whitepaper。來源等級 A。
114. W3C VC Data Model 2.0; W3C DID Core 1.0; IETF OAuth/JWT/SD-JWT 規範; ISO/IEC 18013-5; ETSI EN 319 401/411 系列; DIF DIDComm + Trust Establishment specs; AAMVA 2024 mDL Implementation Guidelines v1.4。來源等級 A。
115. 台灣數位發展部 DIW 政策文件 2024; 數發部組織法。來源等級 A/B。
116. NIST SP 800-63-4 ipd (2024) IAL/AAL/FAL 認定。來源等級 A。
117. EU LoTL (List of Trusted Lists) 規範; eIDAS 2.0 trust list 機制。來源等級 A。
118. AAMVA 2024 mDL Implementation Guidelines v1.4。來源等級 A。
119. APEC ECBA framework documentation; APEC Cross-Border Privacy Enforcement Arrangement。來源等級 A/B。
120. APEC Cross-Border Privacy Rules System (CBPRs) + Privacy Recognition for Processors (PRP)。來源等級 A。
121. GDPR Regulation (EU) 2016/679; FATF Recommendations; FATF Travel Rule (Recommendation 15/16)。來源等級 A。
122. United States v. International Air Transport Association (1979) DOJ 反托拉斯案例; IATA 1979 reform。來源等級 A。
123. Apple Wallet, Google Wallet, Microsoft Entra Verified ID 在 W3C / DIF 工作組的成員身分; 大型平台對標準制定的影響分析。來源等級 A/B。
124. W3C Process Document; IETF RFC 9281; ETSI / ISO 多成員投票程序; AAMVA 州層級代表結構。來源等級 A。
125. 中華人民共和國《網路安全法》(2017); 《個人信息保護法》(2021); 中國身分基礎設施與國家安全框架整合分析。來源等級 A。
126. 歐盟司法獨立性下降成員國評估; 歐盟委員會對波蘭 / 匈牙利的法治程序文件。來源等級 A/B。
127. World Bank ID4D 2024 國家身分基礎設施評估; 歐盟強、亞洲多國弱的不均勻現況。來源等級 A/B。
128. Basel III 國家落地一致性評估; 2008 金融危機後 Basel II 落地不一致記錄。來源等級 A。
129. Pan-Canadian Trust Framework (PCTF)。來源等級 A/B。
130. UK Digital Identity & Attributes Trust Framework (2024 版本)。來源等級 A。
131. Sovrin Governance Framework; Sovrin Foundation 早期白皮書。來源等級 A/B。
132. Trust Over IP Foundation 框架; ToIP Stack 文件。來源等級 A/B。
133. Regulation (EU) 2024/1183 (eIDAS 2.0); EU LoTL + GDPR + EDPB 整合結構分析。來源等級 A。
134. PSE (Privacy & Scaling Explorations) 公開 GitHub + 學術論文; PSE 研究方向 2022-2025。來源等級 B。
135. PSE Semaphore / MACI / Anon Aadhaar 規格文件; PSE 開放治理結構。來源等級 B。
136. Vocdoni 加泰隆尼亞 2017 公投技術回顧 (與 article 04-07 共用)。來源等級 B。
137. Rarimo Freedom Tool 技術文件 (與 article 07 共用)。來源等級 B。
138. DIF DIDComm + Trust Establishment specs (與 article 07 共用); DIF 成員結構文件。來源等級 A/B。
139. Postel, J. RFC 1591 (1994) + RFC 920 (1984); IETF rough consensus and running code 慣例。來源等級 A。
140. Coleman, G. (2013). *Coding Freedom*; Kelty, C. (2008). *Two Bits*; Stallman, R. (2002). *Free Software, Free Society*. GNU Press。來源等級 A。
141. AEPD (Spain) (2024-03). Worldcoin 暫停命令。來源等級 A。
142. Office of the Data Protection Commissioner (Kenya) (2023-08). Worldcoin 暫停。來源等級 A。
143. AAIP (Argentina) (2024-05). Worldcoin 調查。來源等級 A。
144. EDPB (2024-12). Worldcoin 暫停延伸。來源等級 A。
145. PCPD (Hong Kong) (2024-05). Worldcoin。來源等級 A。
146. CNPD (Portugal) (2024-03). Worldcoin Deliberação 2024/124。來源等級 A。
147. ANPD (Brazil) (2025-01). Worldcoin。來源等級 A。
148. Vocdoni 加泰隆尼亞 2017 公投技術回顧; 西班牙憲法法庭 STC 122/2017 違憲判決。來源等級 A/B。
149. Rarimo Freedom Tool 技術文件 + 部署回顧; 俄烏戰爭脈絡分析。來源等級 B/C。
150. Article 07 SRP 論證 (Sovereignty-Rooted Paradox); root vs user 政治對立分析。來源等級 A（系列內部）。
151. Buterin, V. (2023). *What do I think about biometric proof of personhood?*; Hill, K. (2023). *Your Face Belongs to Us*。來源等級 A。
152. Anon Aadhaar specification (PSE 2024); UIDAI Aadhaar QR code 規格。來源等級 A。
153. Andolfo et al. (2024). *zkPassport*. IACR ePrint 2024/1377; ICAO PKD CSCA 信任清單結構。來源等級 A。
154. Vocdoni 加泰隆尼亞 2017 公投技術回顧; 加泰隆尼亞公民人口資料來源分析。來源等級 B。
155. Rarimo Freedom Tool 技術文件; 俄羅斯護照驗證根結構。來源等級 B/C。
156. Worldcoin 監管反彈時間線 (條目 141-147 整合)。來源等級 A。
157. Hill, K. (2023). *Your Face Belongs to Us*; 生物識別不可逆性技術評估; Privacy International 2024 報告。來源等級 A/B。
158. FATF Recommendations; FATF Travel Rule。來源等級 A。
159. 跨境投票公民資格認定法律分析; 國際投票權研究。來源等級 A。
160. 健保身分基礎設施與國家社會保險體系整合分析; OECD Health Data Governance 2024。來源等級 A/B。
161. ICANN GAC advisory 設計缺陷與身分領域主權敏感度衝突分析 (對應條目 104)。來源等級 A。
162. EU LoTL + AAMVA mDL + APEC ECBA 三層互認結構分析。來源等級 A。
163. Abbott & Snidal (2000) hard/soft law 框架; GDPR backstop 機制設計。來源等級 A。
164. GDPR EDPB; FATF; CNIL; PDPC; ICO; 各 DPA 監管角色文件。來源等級 A。
165. 子領域 G_industry 鬆散自治窗口邊界條件 B1-B4 評估 (對應 §6)。來源等級 A（系列內部）。
166. World Bank ID4D 2024; 各國 G_state 厚度評估比較。來源等級 A/B。
167. EU Digital Markets Act (2022); US House Antitrust Subcommittee Report on Digital Markets (2020); IATA 1979 DOJ 案例延伸到身分平台領域分析。來源等級 A。
168. Article 03 (digital-association-empirical-test) H1' 三道牆論證 (對應條目 5)。來源等級 A（系列內部）。
169. Article 04 (pseudonymous-participation-legal) T 三件式論證 (對應條目 6)。來源等級 A（系列內部）。
170. Article 05 (sybil-resistance-cost-benefit) IT' 不可能三角論證 (對應條目 7)。來源等級 A（系列內部）。
171. Article 06 (civic-burden-redistribution) CB-Justice D1\*∧D2\* 論證 (對應條目 8)。來源等級 A（系列內部）。
172. Article 07 (passport-rooted-paradox) SRP 論證 (對應條目 9)。來源等級 A（系列內部）。
173. did-vc-public-blockchain article (2026-05-01); Bhutan NDI; TW DIW; QuarkID ZKsync L2 案例。來源等級 A/B。
174. 公共鏈作為訊息傳輸基礎設施 vs 主權根的區分分析; W3C DID 公共鏈方法評估。來源等級 A。
175. Prompt 16 (civic-ai-agent-delegation-limits); FTLA 分層處理對 civic AI agent 治理的對接分析。來源等級 A（系列內部）。
