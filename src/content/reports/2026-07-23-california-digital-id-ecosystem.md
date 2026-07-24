---
title: "掃一個 QR Code，就能帶走自己的學歷與技能嗎？加州 Career Passport 給台灣的政策啟示"
description: "加州 Career Passport 把成績單、職訓、證照與工作技能做成可攜帶的數位憑證。本文從四套錢包的實測經驗出發，解釋 eTranscript 翻新、挑戰式採購、法案與預算、行動駕照、年齡驗證和數位人權，也說明台灣數位憑證皮夾下一步可如何打開第三方驗證生態。"
pubDate: 2026-07-24
draft: false
tags:
  [
    "digital-identity",
    "california",
    "mDL",
    "career-passport",
    "verifiable-credentials",
    "procurement-as-policy",
    "taiwan-comparison",
    "digital-rights",
  ]
lang: "zh-TW"
aiModel: "AI 協作"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-07-23-california-digital-id-ecosystem"
aiGeneratedDate: 2026-07-24
humanReviewed: false
category: "數位身分政策"
slug: "2026-07-23-california-digital-id-ecosystem"
---

_筆者參與 California Career Passport 的技術評估與使用者測試。本文只採用公開資料與可公開的操作經驗，不涉及個別廠商的評分、投標內容或未公開技術細節。_

如果把數位憑證皮夾想成手機裡的另一張身分證，加州正在測試的 Career Passport 可能會讓人有點困惑。它沒有要回答「你是誰」這個大問題，而是處理求學與求職時一連串很具體的小問題。你修過哪些課、取得哪些證照、接受過什麼職業訓練、在軍中或志工服務裡累積哪些經驗，這些紀錄能不能由可信任的機構簽發，放進自己控制的皮夾，再交給學校或雇主查驗。

2026 年夏天，我實際操作了四套入選 Career Passport 試辦的錢包。雖然四家廠商的介面與技術路線不盡相同，整體流程都相當通順，主要動作就是掃描 QR Code、閱讀畫面上的資料要求、同意領取或出示憑證。對一般使用者來說，背後的數位簽章、信任清單與交換標準幾乎不會出現在畫面上。這段經驗最有意思的地方，是一套複雜的數位信任基礎設施，真的可以被做成幾個很自然的日常動作。

Career Passport 也提供台灣一個難得的比較案例。台灣的數位憑證皮夾已經走到駕照驗證、超商取貨與校園憑證等真實場景，加州則把同一類技術放進社區大學、就業與行動駕照，並用短期、多廠商、真實使用者參與的採購來測試市場。兩邊面對的問題很接近，推動方法卻不太一樣。

## 先把皮夾、駕照、年齡驗證與數位身分證分開

數位身分政策容易引發不安，很大一部分原因來自幾個概念經常被混在一起。把它們拆開之後，政策討論會清楚許多。

| 名稱            | 它主要做什麼                                                 | 使用時需要揭露什麼                                             |
| --------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| 數位憑證皮夾    | 存放、管理與出示各機構簽發的憑證，本身是一個載具             | 依當次服務要求，由使用者決定送出哪些欄位                       |
| Career Passport | 把學歷、職訓、證照、先前學習與工作技能整理成可驗證的職涯紀錄 | 可以分享整份紀錄，也可以只分享與職缺相關的部分                 |
| 行動駕照 mDL    | 由交通主管機關簽發的數位駕照或身分憑證                       | 視場景提供駕駛資格、姓名、照片，或單純提供年齡門檻結果         |
| 年齡驗證        | 證明使用者已達某項服務的法定年齡                             | 理想情況只回答「符合」或「不符合」，不交出姓名、地址與完整生日 |
| 數位身分證      | 承載法律身分的基礎證件，通常會連結較廣泛的政府服務           | 依制度設計可能包含姓名、身分識別碼與其他基本資料               |

一個人走進酒吧，店家真正需要知道的通常只是他是否達到法定年齡，不需要知道住址，也未必需要留下完整生日。學生申請實習時，雇主可能只想確認他有某項醫療技術訓練，不需要調閱所有修課紀錄。數位憑證的價值就在這裡，它能把「證明一項資格」從「交出整張證件」裡分離出來。

因此，年齡驗證可以使用行動駕照提供的資料，也可以使用另一張專門的年齡憑證。數位憑證皮夾可以裝入駕照，也可以完全不裝。Career Passport 可以和身分驗證服務互通，但它的核心仍是學習與就業紀錄。這些技術彼此可以連接，政策上仍應保留清楚邊界，避免每一個資格證明最後都被擴張成全面實名。

## CCCO 同時在做兩件大工程

Career Passport 由加州社區大學總監辦公室（California Community Colleges Chancellor's Office, CCCCO）主導，並與加州 Cradle-to-Career 資料辦公室及勞動與勞動力發展署共同推動。許多報導把焦點放在手機上的職涯皮夾，CCCO 的正式計畫其實包含兩份彼此依賴的採購案。一份翻新 eTranscript California，另一份才是建立 Career Passport 平台<sup>1</sup>。

eTranscript California 是加州全州性的電子成績單交換網路，2008 年上線，已交換超過 300 萬份正式成績單，服務超過 100 所高等教育機構。它目前以 XML 或 EDI 等格式，把成績單送進學校的招生與註冊系統。這套系統解決的是機構和機構之間如何安全交換正式紀錄，使用者通常看不到底層流程。新的翻新工程要讓它支援更現代的開放標準，也要能把正式成績與先前學習抵免資料送進 Career Passport，讓學生可以免費取得、長期保存並自主分享自己的學術紀錄<sup>1</sup>。

Career Passport 處理的是另一層。它把 eTranscript 提供的正式成績單，加上職業證照、學徒訓練、軍旅經驗、志工服務與先前學習抵免，組成使用者可管理的學習與就業紀錄。雇主看到的就不再只有學位名稱或一份 PDF 履歷，而是一組能由發證機構驗真的技能與資格。加州法律也要求這套工具可以銜接雇主的招募系統，支援以技能為基礎的聘僱<sup>2</sup>。

把兩個專案放在一起看，就能理解這項工程的規模。eTranscript 像是教育體系既有的資料管線，Career Passport 則把管線裡的可信資料交回個人，讓它能流向求職、進修與資格查驗。只做皮夾介面，沒有可靠的發證與交換管線，最後很容易變成一個空殼。只翻新成績單交換系統，沒有讓個人取得與使用紀錄的新介面，資料仍然停留在機構之間。

## 掃 QR Code 的背後發生了什麼

以我參與的試辦流程為例，學生先到發證端領取一張測試憑證。網頁顯示 QR Code 後，使用者以手機皮夾掃描，畫面會列出即將加入的憑證名稱、發證者與內容，確認後才存入皮夾。到了驗證環節，學校或雇主端再顯示另一個 QR Code，皮夾讀取對方要求的資料，讓使用者確認要分享哪些欄位，最後把可驗證的結果送回去。四套受測錢包的視覺設計各有差異，領取、檢視、出示與驗證的基本流程都能完成，而且不需要使用者理解密碼學。

這套流程通常會經過四個角色。發證者可能是學校、職訓機構、證照單位或政府機關，負責替資料加上數位簽章。持有人把憑證收進自己的皮夾，決定何時使用。驗證者可能是雇主、學校、租車公司或便利商店，提出一項清楚的資料要求。信任機制則告訴驗證者哪些發證單位與簽章可以信任。只要其中一環缺席，使用體驗再漂亮也很難成為真正可用的公共基礎設施。

Career Passport 採購案把 W3C Verifiable Credentials Data Model 2.0 與 Open Badges 3.0 列為必要標準，只依賴封閉、專有交換格式的提案不予考慮。它也要求不同系統之間完成互通測試，把選擇性揭露、不可連結性與 WCAG 2.1 AA 無障礙規範放進評選門檻<sup>5</sup>。這些要求的政策意義很實際。學生不應因為換了一支手機、搬到另一州、改用另一家皮夾，便失去多年累積的學習紀錄。學校與雇主也不該被綁死在單一供應商的資料格式裡。

在理想的設計中，發證單位不會在每次出示時收到通知，兩家不相干的驗證者也難以串連使用者的活動紀錄。這類設計常被稱為 no phone home 與 unlinkability，中文可以理解成「出示時不回報發證端」與「不同場次不容易被串接追蹤」。QR Code 只是入口，真正需要守住的是使用者對資料流向的控制<sup>19</sup>。

## 為什麼先讓四家廠商一起跑

加州沒有在閱讀書面企劃後就直接選定一家公司做五年。FHDA 社區大學學區受 CCCCO 委託擔任會計代理，以 RFP #1980 執行分階段的挑戰式採購。公開資料顯示，採購收到逾 40 份提案，最後選出 Auth9／Certree、Infosys、SpruceID 與 Territorium 四組團隊，試辦合約總額上限為 50 萬美元，每家約 12.5 萬美元<sup>6</sup><sup>7</sup>。

這份採購分成概念提案、約十週的現場試辦，以及根據試辦結果提出正式建置方案三個階段，後續正式合約最長可達五年<sup>5</sup>。試辦期間，廠商要接上共同的發證與驗證環境，讓真實使用者在自己的手機上完成領取和出示，也要通過跨系統的互通性測試。分階段付款與淘汰條件把履約能力拉到決標之前檢驗，政府看到的不只是一份投標文件，也能看到廠商面對真實整合問題時的反應速度、支援能力與完成度。

我認為，這個短期競爭過程比單純比較規格表更接近數位公共建設的需求。皮夾牽涉學生、教師、技術專家、政府單位、發證者與驗證者，各方對「一張憑證如何被領取、理解與接受」的想像原本就不一樣。把四套方案放進相同場景，大家會很快發現哪些名詞需要重新解釋、哪一步容易卡住、哪些資料要求太多，以及雇主端還欠缺什麼配套。試辦同時也是政策教育，讓參與者在一個可控制的範圍裡建立共同語言。

對政府採購而言，這種方法還有兩個好處。第一，開放標準可以被做成現場通關條件，廠商無法只在文件上宣稱相容。第二，政府在大額長約之前保留修正需求的空間，早期問題不必等到驗收時才爆發。相對的，主辦單位需要投入更高的技術評審、使用者研究與測試成本，也必須事先說清楚試辦成果如何進入正式採購，否則中小廠商可能在完成試作後又被迫從頭競標。挑戰式採購的價值來自完整流程，不能只留下「多找幾家來試做」的表面形式。

## 法案、預算與問責是如何接在一起的

Career Passport 的政策源頭可追到州長 Gavin Newsom 在 2023 年簽署的行政命令 N-11-23，以及 2025 年發布的《職涯教育總體規劃》。這份規劃希望降低雇主對四年制大學學位的過度依賴，讓職訓、學徒制度、軍旅與工作經驗更容易被辨識<sup>3</sup><sup>4</sup>。真正把計畫寫進法律並撥款的文件，是 2025 年高等教育預算附帶法案 AB 123。它在加州教育法典增訂 Part 53.8，正式設立 California Career Passport Program，指定 CCCCO、Cradle-to-Career 資料辦公室與勞動與勞動力發展署共同治理<sup>2</sup>。

AB 123 為 Career Passport 提供 2,500 萬美元一般基金，經費可用到 2030 年 6 月，最多 75 萬美元可用於州級行政作業，其餘可投入基礎設施、資料安全、平台功能與推廣。eTranscript 翻新使用另一筆預算，2024 年預算已有 1,200 萬美元重編經費，AB 123 再追加 655.8 萬美元<sup>2</sup>。CCCO 的時程報告也坦白表示，在兩份 RFP 完成以前，還無法估算全案正式上線後的總成本<sup>1</sup>。這些數字適合分開閱讀，因為皮夾平台、成績單交換與長期營運各自有不同的成本結構。

法案沒有只要求政府把 App 做出來。CCCO 必須定期向財政部門、立法機關與加州立法分析辦公室報告進度、支出與里程碑，並在 2027 年提出初步發展數據，2031 年提出學生與雇主使用成果。法定指標包括多少人真的拿 Career Passport 求職、多少人認為它協助取得面試或工作、多少雇主放進招募流程，以及哪些產業實際使用<sup>2</sup>。這種設計把「完成系統」和「產生公共效益」分成兩個驗收層次，能降低政府只用下載量或發卡量交代成果的空間。

加州至今沒有一部統一的數位身分框架母法。2022 年提出的 California Trust Framework 法案 SB 1190 最後沒有通過<sup>8</sup>。Career Passport 依教育法與預算運作，行動駕照則依車輛法第 13020 條與後續交通預算附帶法案推進。2026 年通過的 SB 169 只是把行動駕照試辦人口上限提高到全州駕照或身分證持有人的 60%，沒有把教育、駕照與其他數位憑證整併成單一身分制度<sup>9</sup>。

這種分散做法讓各場景可以較快前進，也留下治理上的功課。AB 123 要求保護個人資料、遵守 FERPA 等教育與隱私法律，並明定個人可以分享全部或部分 Career Passport，計畫應服務公共利益並接受問責<sup>2</sup>。不過，哪些驗證者可以要求哪些資料、資料可以保存多久、使用者如何申訴、拒絕使用皮夾時是否有同等替代管道，仍要靠後續規則、契約與執行機制補齊。技術標準能確認一張憑證是真的，無法單獨決定一次資料要求是否合理。

## 加州行動駕照如何走向第三方驗證

加州的行動駕照（mobile driver's license, mDL）和 Career Passport 是兩個分開發展的計畫，卻共用許多技術與治理問題。加州民眾目前可以把 mDL 放進 CA DMV Wallet、Apple Wallet、Google Wallet 或 Samsung Wallet。2026 年 4 月官方公布約有 170 萬張有效 mDL，其中約 90 萬張放在 DMV 自營皮夾，可使用於機場安檢、特定便利商店、MyDMV 登入與社區大學身分核驗<sup>10</sup>。

真正值得台灣觀察的，是加州同時經營驗證端。DMV Wallet 內建 mDL Reader，商家下載同一個 App、切換到讀取模式，就能掃描顧客手機上的 QR Code，不必先購買專用硬體。官方文件把酒吧、餐廳、活動場館、銀行、政府機關、租車公司與執法單位都列為可能的驗證者，並公布相容讀取器所需的技術資料。DMV 也釋出 OpenCred 等開源驗證工具，讓第三方開發者可以建立符合標準的服務<sup>11</sup><sup>12</sup>。

年齡驗證是最容易理解的例子。加州把 TruAge 整合進 CA DMV Wallet，在特定便利商店購買酒類或菸品時，店員掃描 QR Code 後只看到照片與是否達到法定年齡，不會看到姓名、地址或完整生日。這項服務目前仍只在部分地點使用，官方也提醒 mDL 尚未全面取代實體駕照<sup>13</sup>。它的示範價值很清楚，政府除了發出一張數位證件，也提供商家看得懂的操作指南、讀取工具與合規路徑，讓受理端有機會逐步增加。

## 台灣已經有駕照電子卡，下一步在驗證者生態

台灣數位憑證皮夾的技術路線同樣強調資料留在使用者裝置、知情同意與選擇性揭露，實際操作也大量使用 QR Code<sup>14</sup>。公路局駕照驗證卡已在 2026 年 3 月 30 日上線，官方資料顯示已有指定租車業者使用，未來預計擴及保險、運輸與駕駛人管理等場景<sup>15</sup>。因此，台灣目前的問題已經超過「能不能把駕照放進皮夾」，更接近「哪些第三方可以依什麼規則驗證，以及如何讓更多合規業者接入」。

現階段的公開資料仍以指定場域、合作業者與沙盒為主。數位憑證皮夾沙盒允許組織申請發證端與驗證端帳號，正式對外介接的權限、審查、責任與技術符合性機制則還在形成<sup>16</sup>。這和加州已公開提供 mDL Reader、相容讀取器說明、開源驗證工具與商業場景指南相比，生態開放程度仍有差距。這裡所說的「開放」不等於任何人都能任意讀取駕照資料，而是合規的便利商店、酒吧、租車公司或其他服務提供者，可以依公開規範申請接入，只取得場景必要的欄位，並接受稽核與責任追究。

台灣可以參考加州的做法，把驗證端也當成需要設計的公共基礎設施。技術上要有公開的相容性測試、信任資料、參考讀取器與錯誤處理文件，政策上要有驗證者分級、允許用途、最小資料要求、保存期限、資安責任與退場機制。若只有少數專案合作夥伴能驗證，皮夾很難進入日常生活。若缺少清楚規範就一次全面開放，民眾也很難知道資料會流向哪裡。

## 數位人權要寫進法律、採購與操作畫面

數位憑證皮夾常以隱私保護作為賣點，真正的保障需要同時落在幾個層次。第一層是資料最小化。驗證者只能要求完成服務必要的資料，年齡門檻不應變成索取整張駕照，求職資格也不應變成調閱完整學籍。第二層是防追蹤。發證者不該因為使用者每次出示憑證就收到回報，不同驗證者也不應輕易把活動紀錄串在一起。第三層是選擇權。沒有智慧型手機、不願使用皮夾或遇到無障礙障礙的人，仍要有可負擔且不受歧視的替代管道。

第四層是驗證者治理。政府需要公開哪些機構可以驗證、可以要求什麼、能保存多久，並提供撤銷資格、稽核、申訴與救濟程序。第五層是採購治理。不可連結性、無障礙、跨廠商互通、資安測試、資料刪除與服務終止後的可攜性，都要成為合約門檻，不能留到廠商得標後再協商。Career Passport 把選擇性揭露、不可連結性與無障礙放進 RFP，正好說明採購文件也能承擔人權政策。

這些規則也能幫助台灣把年齡驗證、數位身分證與數位憑證皮夾分開討論。年齡驗證的政策問題，是哪些服務有正當理由確認年齡，以及如何用最少資料完成。數位身分證的政策問題，牽涉法律身分、跨機關資料與國家基礎建設。數位憑證皮夾則是承載和出示多種憑證的工具。三者的風險、法源與監督強度不同，不宜用同一個支持或反對立場全部包住。

缺乏規範與產業自律時，再好的密碼學也可能被不當使用。店家若可以任意要求姓名、完整生日與地址，再把每次驗證留下來，數位流程反而會製造比肉眼看證件更多的追蹤資料。另一面也同樣重要，如果政策討論只把所有數位憑證都想成全面監控，社會就很難看見只證明資格、不交出完整身分的可能性。共同理解技術實際能做什麼、政府與業者又可能做錯什麼，才有機會形成可執行的政策共識。

## 台灣可以從 Career Passport 帶走什麼

Career Passport 最值得參考之處，是加州把政策、採購、技術測試與多方學習接成同一個過程，重點不在某一家皮夾做得比較漂亮。台灣若要擴大數位憑證皮夾的第三方應用，可以先挑幾個需求清楚的場景，例如租車、年齡門檻、專業資格與學歷查驗，讓多家團隊使用共同發證與驗證環境，在真實使用者面前完成跨系統測試。政府再依操作成功率、資料最小化、無障礙、問題修復速度與驗證者採用情況，決定後續長約。

採購範圍也適合拆開。發證服務、皮夾、信任機制與驗證工具各有不同責任，不必由單一廠商全部包辦。共同標準與公開測試可以讓各層替換，降低政府與使用者被綁在單一產品的風險。台灣現有沙盒已具備發證端與驗證端的基本環境，下一步可以把沙盒升級成常態的符合性測試與第三方接入制度，公開通過條件、測試結果與責任邊界。

預算與成效指標也應跟著調整。發出多少張憑證、App 有多少下載，只能說明供給端。真正能回答政策是否成功的數字，包括多少學校與機構持續發證、多少合規驗證者實際受理、民眾完成一次服務要花多久、多少人因無障礙或裝置限制失敗、發生錯誤後能否更正，以及使用者是否因數位憑證取得原本錯失的就業或服務機會。加州把雇主使用與求職結果寫入 2031 年法定報告，台灣也可以在計畫初期就先定義長期公共效益。

四套 Career Passport 的試用讓我最直接感受到，數位憑證皮夾不必從一張包辦所有用途的國家級證件開始。它可以先從一份成績單、一張專業證照、一次租車或一個年齡門檻長出來。當發證者、持有人與驗證者都能理解自己的角色，廠商必須在公開標準下證明履約能力，人權保障又被寫進法律與採購，數位信任才會成為民眾真正用得上的基礎設施。

## 參考資料

1. California Community Colleges Chancellor's Office, [California Career Passport Program Report](https://www.cccco.edu/-/media/CCCCO-Website/docs/report/california-career-passport-timeline-report-a11y.pdf), 2026。計畫時程、技術架構、eTranscript 現況與兩份 RFP。
2. California Legislature, [AB 123 Higher Education Budget Trailer Bill](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB123), 2025。California Career Passport Program 法源、預算、治理、隱私與成果報告。
3. Governor of California, [Executive Order N-11-23](https://www.gov.ca.gov/wp-content/uploads/2023/08/8.31.23-Career-Education-Executive-Order.pdf), 2023。
4. Governor of California, [California's Master Plan for Career Education](https://www.gov.ca.gov/wp-content/uploads/2025/04/2025-CA-Master-Plan-for-Career-Education.pdf), 2025。
5. Foothill-De Anza Community College District／CCCCO, RFP #1980 [Develop a New California Career Passport Platform](https://vendors.planetbids.com/portal/24809/bo/bo-detail/141049) 及公開 Q&A，2026。三階段採購、互通性、隱私與無障礙要求。
6. Foothill-De Anza Community College District, [BoardDocs 公開議事系統](https://www.boarddocs.com/ca/fhda/Board.nsf/Public), 2026 年 6 月 8 日議程。試辦合約總額與四家入選廠商。
7. Los Altos Online, [Foothill-De Anza approves $500K career passport pilot](https://www.losaltosonline.com/schools/foothill-de-anza-approves-500k-career-passport-pilot/article_1c0899e5-cbae-4465-88af-cdd532f679ab.html), 2026。
8. California Legislature, [SB 1190 California Trust Framework](https://leginfo.legislature.ca.gov/faces/billHistoryClient.xhtml?bill_id=202120220SB1190), 2021 至 2022 會期。
9. California Legislature, [Vehicle Code §13020](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=13020.) 及 [SB 169](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB169), 2026。
10. Governor of California, [California expands mobile driver's license to Samsung Wallet](https://www.gov.ca.gov/2026/04/28/california-expands-mobile-drivers-license-to-samsung-wallet-continuing-dmvs-digital-transformation/), 2026。
11. California DMV, [mDL Reader](https://www.dmv.ca.gov/portal/ca-dmv-wallet/mdl-reader/)。
12. California DMV, [mDL for Technology Developers](https://www.dmv.ca.gov/portal/ca-dmv-wallet/mdl-for-technology-developers/)；State of California, [OpenCred](https://github.com/stateofca/opencred)。
13. California DMV, [TruAge Age-Verified Purchasing](https://www.dmv.ca.gov/portal/ca-dmv-wallet/truage/)。
14. 數位發展部，[數位憑證皮夾](https://moda.gov.tw/major-policies/wallet/1695)；數位憑證皮夾官網，[操作體驗](https://wallet.gov.tw/zh-tw/step.html)。
15. 行政院青年諮詢委員會，[擴展數位憑證皮夾功能提案與辦理情形](https://advisory.yda.gov.tw/proposals-detail/324)，資料更新至 2026 年。
16. 數位憑證皮夾，[沙盒系統帳號與組織申請](https://wallet.gov.tw/apply/applyAccount.html)。
17. W3C, [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/), 2025。
18. 1EdTech, [Open Badges 3.0](https://www.1edtech.org/standards/open-badges)。
19. Electronic Frontier Foundation, [Decoding the California DMV's Mobile Driver's License](https://www.eff.org/deeplinks/2024/03/decoding-california-dmvs-mobile-drivers-license), 2024。
