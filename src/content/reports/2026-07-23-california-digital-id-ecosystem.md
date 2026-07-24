---
title: "掃一個 QR Code，就能帶走自己的學歷與技能嗎？加州 Career Passport 給台灣的政策啟示"
description: "加州 Career Passport 把成績單、職訓、證照與工作技能做成可攜帶的數位憑證。本文從四套錢包的實測經驗出發，解釋 eTranscript 翻新、挑戰式採購、法案與預算、行動駕照、年齡驗證和數位人權，也說明台灣數位憑證皮夾下一步可如何打開第三方驗證生態。"
pubDate: 2026-07-24
draft: false
tags: ["數位身分", "數位憑證皮夾", "加州", "Career Passport", "數位人權"]
category: "數位身分政策"
aiModel: "AI 協作"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-07-23-california-digital-id-ecosystem"
aiGeneratedDate: 2026-07-24
humanReviewed: false
lang: "zh-TW"
slug: "2026-07-23-california-digital-id-ecosystem"
---

_筆者參與 California Career Passport 的技術評估與使用者測試。本文只採用公開資料與可公開的操作經驗，不涉及個別廠商的評分、投標內容或未公開技術細節。_

打開測試網頁，手機鏡頭對準 QR Code，幾秒後，一張由學校或職訓機構簽發的測試憑證便出現在數位皮夾裡。到了查驗端，再掃一次 QR Code，畫面會先列出對方索取的資料，使用者確認後才送出。2026 年夏天，我實際走過四套入選 California Career Passport 試辦的錢包，領取、檢視、出示與驗證都相當流暢。介面各有不同，核心動作都很接近日常使用手機的習慣。

手機裡出現的是一組用途清楚的求學與工作紀錄，例如修過哪些課、取得哪些證照、接受過什麼職業訓練，以及在軍中、志工服務或職場累積的技能。這些紀錄由可信任的機構簽發，個人可以長期保管，需要申請學校或工作時，再交出和當次目的有關的部分。數位簽章、信任清單與交換標準都在背景運作，一般使用者不必先理解密碼學，才有辦法使用。

台灣的數位憑證皮夾也已走進駕照驗證、超商取貨與校園憑證等場景。加州多走的一步，是把同一類技術放進社區大學與就業服務，並安排四家廠商在短期試辦裡接受真實使用者測試。兩地面對的技術問題很接近，加州的採購流程、預算問責與第三方驗證安排，提供了另一種推動公共數位建設的方法。

## 先把皮夾、駕照、年齡驗證與數位身分證分開

同一支手機可以裝進駕照、學歷、專業證照或年齡憑證，畫面看起來相似，背後的法源、用途與資料範圍卻不相同。先把幾個常被混用的名詞放在一起比較，後面的政策問題會比較容易辨認。

| 名稱            | 它主要做什麼                                                 | 使用時需要揭露什麼                                             |
| --------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| 數位憑證皮夾    | 存放、管理與出示各機構簽發的憑證，本身是一個載具             | 依當次服務要求，由使用者決定送出哪些欄位                       |
| Career Passport | 把學歷、職訓、證照、先前學習與工作技能整理成可驗證的職涯紀錄 | 可以分享整份紀錄，也可以只分享與職缺相關的部分                 |
| 行動駕照 mDL    | 由交通主管機關簽發的數位駕照或身分憑證                       | 視場景提供駕駛資格、姓名、照片，或單純提供年齡門檻結果         |
| 年齡驗證        | 證明使用者已達某項服務的法定年齡                             | 理想情況只回答「符合」或「不符合」，不交出姓名、地址與完整生日 |
| 數位身分證      | 承載法律身分的基礎證件，通常會連結較廣泛的政府服務           | 依制度設計可能包含姓名、身分識別碼與其他基本資料               |

一個人走進酒吧，店家通常只需要確認他是否達到法定年齡，住址和完整生日與這次交易無關。學生申請實習時，雇主可能只想確認他完成某項醫療技術訓練，也沒有必要調閱所有修課紀錄。過去拿出整張證件才能完成的查驗，現在有機會縮小成一句「已滿 18 歲」或「已取得某項資格」。

年齡門檻可以由行動駕照提供，也可以另發一張專用憑證。數位憑證皮夾能夠裝入駕照，使用者也可以選擇只放學歷或會員資格。Career Passport 雖然能和身分驗證服務互通，收納範圍仍以學習與就業紀錄為主。技術之間可以連接，政策邊界仍要寫清楚，才不會讓每一次資格查驗都逐漸擴張成全面實名。

## CCCO 同時在做兩件大工程

手機上的職涯皮夾只是加州整項工程看得見的一端。加州社區大學總監辦公室（California Community Colleges Chancellor's Office, CCCCO）與 Cradle-to-Career 資料辦公室、勞動與勞動力發展署共同推動計畫時，同步準備了兩份彼此銜接的採購案。一份翻新 eTranscript California，另一份建立 Career Passport 平台<sup>1</sup>。加州的學校早在 2008 年便開始使用 eTranscript California 交換電子成績單，至今已處理超過 300 萬份正式紀錄，服務超過 100 所高等教育機構。現有系統透過 XML 或 EDI 等格式，把成績單送進學校的招生與註冊系統，學生通常看不到這段機構對機構的傳輸。翻新後的系統要支援較新的開放標準，也要把正式成績與先前學習抵免資料送進 Career Passport，讓學生免費取得、長期保存並自主分享自己的學術紀錄<sup>1</sup>。

正式成績單進入個人皮夾後，還會和職業證照、學徒訓練、軍旅經驗、志工服務及先前學習抵免放在一起，組成使用者可以管理的學習與就業紀錄。雇主除了閱讀學位名稱或 PDF 履歷，也能直接查驗某一項技能由誰簽發、目前是否有效。加州法律進一步要求 Career Passport 可以銜接雇主的招募系統，讓以技能為基礎的聘僱有可用的資料來源<sup>2</sup>。兩份採購案共同處理一條完整的資料路徑，eTranscript 維護教育機構之間既有的交換管線，Career Passport 接手管線裡的可信資料，交還給個人用於求職、進修與資格查驗。缺少可靠的發證與交換管線，皮夾裡沒有足夠的有效憑證；缺少讓個人領取和分享的介面，翻新的成績單仍舊只在機構之間流動。這也是整項計畫規模遠大於開發一個 App 的原因。

## 掃 QR Code 的背後發生了什麼

試辦時，學生先到發證端領取一張測試憑證。網頁顯示 QR Code 後，手機皮夾會讀出憑證名稱、發證者與內容，等使用者確認才存入。到了學校或雇主的查驗環節，另一個 QR Code 會告訴皮夾對方需要哪些資料，畫面再次取得同意，才把可驗證的結果送回去。四套錢包的視覺設計各有差異，這條從領取到查驗的路徑都能走完，使用者也不必理解背後的密碼學。掃描動作前後共有四個角色接力，學校、職訓機構、證照單位或政府機關擔任發證者，替資料加上數位簽章；持有人把憑證收進自己的皮夾，決定何時使用；雇主、學校、租車公司或便利商店擔任驗證者，提出清楚的資料要求；信任機制再告訴驗證者哪些發證單位與簽章可以接受。任何一環缺席，再漂亮的皮夾介面也很難成為可用的公共基礎設施。

RFP 把 W3C Verifiable Credentials Data Model 2.0 與 Open Badges 3.0 列為必要標準，只依賴封閉交換格式的提案不予考慮。入選系統還要彼此完成互通測試，選擇性揭露、不可連結性與 WCAG 2.1 AA 無障礙規範也都列入評選<sup>5</sup>。學生換手機、搬到另一州或改用另一家皮夾時，多年累積的學習紀錄仍應帶得走；學校與雇主更不該因為早期選了一家供應商，往後只能接受同一家的格式。使用者拿學歷應徵工作時，母校沒有必要收到通知；同一張憑證先後交給兩家雇主查驗，也不該留下足以串連求職足跡的共同識別碼。技術文件常用 no phone home 與 unlinkability 描述這兩項要求，可以理解成「出示時不回報發證端」與「不同場次不容易被串接追蹤」。QR Code 負責把兩台裝置接起來，使用者需要掌握的是資料送出多少，以及過程會不會留下追蹤線索<sup>19</sup>。

## 為什麼先讓四家廠商一起跑

40 多份提案送進 FHDA 社區大學學區後，Auth9／Certree、Infosys、SpruceID 與 Territorium 四組團隊進入現場試辦。FHDA 受 CCCO 委託擔任會計代理，以 RFP #1980 執行這次分階段採購，試辦合約總額上限為 50 萬美元，每家約 12.5 萬美元<sup>6</sup><sup>7</sup>。政府在這個階段仍保留多個選項，五年期正式建置廠商尚未決定。入選團隊接著要跑完約十週的現場試辦，把產品接上共同的發證與驗證環境，讓真實使用者在自己的手機上完成領取與出示，並通過跨系統互通測試。試辦結果會成為第三階段正式建置方案的基礎，後續合約最長可達五年<sup>5</sup>。分階段付款與淘汰條件把履約能力提前放進決標過程，評審看到的除了投標文件，還包括廠商面對整合問題時的反應速度、支援能力與完成度。

實際測試四套方案時，學生、教師、技術專家、政府單位、發證者與驗證者會在同一個場景碰面。有人在意憑證名稱看不看得懂，有人發現某一步驟容易卡住，也有人開始追問雇主索取的資料是否過多。原本只存在規格書裡的名詞，經過一次領取與查驗，很快就會變成具體的操作問題。這段短期競爭同時讓多方關係人學會如何使用、評估與接受皮夾，政策與市場也逐步形成共同語言。每家廠商都要在現場證明開放標準真的能互通，早期問題也能在大額長約簽訂前被看見，政府因此保有修正需求的空間，供應商的支援與修復能力則有真實紀錄可查。這套方法也會增加技術評審、使用者研究與測試成本，主辦單位還要預先說明試辦成果如何進入正式採購，避免中小廠商完成試作後又被要求從頭競標。少了這些制度安排，挑戰式採購很容易只剩下「多找幾家來試做」的表面形式。

## 法案、預算與問責是如何接在一起的

2023 年，州長 Gavin Newsom 簽署行政命令 N-11-23；兩年後，《職涯教育總體規劃》進一步提出降低雇主對四年制大學學位的依賴，讓職訓、學徒制度、軍旅與工作經驗更容易被辨識<sup>3</sup><sup>4</sup>。同年的高等教育預算附帶法案 AB 123 把計畫寫進加州教育法典 Part 53.8，正式設立 California Career Passport Program，並指定 CCCCO、Cradle-to-Career 資料辦公室與勞動與勞動力發展署共同治理<sup>2</sup>。

AB 123 為 Career Passport 提供 2,500 萬美元一般基金，經費可用到 2030 年 6 月，其中最多 75 萬美元用於州級行政作業，其餘投入基礎設施、資料安全、平台功能與推廣。eTranscript 翻新另有一套預算，2024 年已有 1,200 萬美元重編經費，AB 123 再追加 655.8 萬美元<sup>2</sup>。CCCO 在時程報告中也說明，兩份 RFP 完成前，正式上線後的總成本還無法估算<sup>1</sup>。皮夾平台、成績單交換與長期營運各有成本，若把幾筆預算混成一個總額，反而不容易看出錢花在哪一段。

錢撥出去後，CCCO 必須定期向財政部門、立法機關與加州立法分析辦公室報告進度、支出與里程碑，2027 年提出初步發展數據，2031 年再交出學生與雇主的使用成果。法定指標會追問多少人真的拿 Career Passport 求職、多少人認為它協助取得面試或工作、多少雇主放進招募流程，以及哪些產業實際使用<sup>2</sup>。系統能不能運作是一層驗收，是否產生公共效益還有另一層，政府較難只靠下載量或發卡量交代成果。

2022 年提出的 California Trust Framework 法案 SB 1190 最後沒有通過，加州至今仍缺少一部統一的數位身分框架母法<sup>8</sup>。Career Passport 依教育法與預算運作，行動駕照沿著車輛法第 13020 條及後續交通預算附帶法案推進。2026 年通過的 SB 169 將行動駕照試辦人口上限提高到全州駕照或身分證持有人的 60%，教育、駕照與其他數位憑證仍分屬不同制度<sup>9</sup>。

分開立法讓各場景較快前進，規則之間的空隙也要靠後續治理補上。AB 123 要求保護個人資料、遵守 FERPA 等教育與隱私法律，並明定個人可以分享全部或部分 Career Passport，整項計畫要服務公共利益並接受問責<sup>2</sup>。驗證者可以索取哪些資料、資料能保存多久、使用者如何申訴，以及拒絕使用皮夾時是否有同等替代管道，仍有待規則、契約與執行機制逐項回答。技術標準可以確認憑證真假，資料要求是否合理則需要法律與監督。

## 加州行動駕照如何走向第三方驗證

加州民眾目前可以把行動駕照（mobile driver's license, mDL）放進 CA DMV Wallet、Apple Wallet、Google Wallet 或 Samsung Wallet。2026 年 4 月，官方公布約有 170 萬張有效 mDL，其中約 90 萬張放在 DMV 自營皮夾，可用於機場安檢、特定便利商店、MyDMV 登入與社區大學身分核驗<sup>10</sup>。這項計畫和 Career Passport 分開發展，使用的交換標準、隱私設計與第三方查驗問題卻有許多交集。

商家若要查驗 mDL，可以下載同一個 DMV Wallet App，切換到內建的 mDL Reader，再掃描顧客手機上的 QR Code，不必先購買專用硬體。官方文件把酒吧、餐廳、活動場館、銀行、政府機關、租車公司與執法單位都列為可能的驗證者，並公布相容讀取器所需的技術資料。DMV 也釋出 OpenCred 等開源驗證工具，讓第三方開發者建立符合標準的服務<sup>11</sup><sup>12</sup>。發證和查驗兩端一起推進，mDL 才能走出政府 App 的封閉範圍。

特定便利商店已經把 TruAge 用在酒類與菸品交易。店員掃描 CA DMV Wallet 裡的 QR Code 後，只會看到照片與是否達到法定年齡，姓名、地址和完整生日不會出現在結果中。服務目前仍限於部分地點，官方也提醒 mDL 尚未全面取代實體駕照<sup>13</sup>。從這個小規模場景可以看到，政府除了發出數位證件，也要準備商家看得懂的操作指南、讀取工具與合規路徑，受理端才有機會逐步增加。

## 台灣已經有駕照電子卡，下一步在驗證者生態

2026 年 3 月 30 日，公路局駕照驗證卡在台灣數位憑證皮夾上線，指定租車業者已經開始使用，未來預計擴及保險、運輸與駕駛人管理等場景<sup>15</sup>。台灣的技術路線同樣強調資料留在使用者裝置、知情同意與選擇性揭露，操作時也大量使用 QR Code<sup>14</sup>。駕照進入皮夾的基本功能已有實際案例，接下來的問題落在第三方依什麼規則查驗，以及更多合規業者如何加入。

打開目前公開的介接資訊，可以看到指定場域、合作業者與沙盒仍占主要位置。數位憑證皮夾沙盒允許組織申請發證端與驗證端帳號，正式對外介接所需的權限、審查、責任與技術符合性機制仍在形成<sup>16</sup>。加州已公開提供 mDL Reader、相容讀取器說明、開源驗證工具與商業場景指南，台灣距離這種開放程度還有一段路。這類開放設有清楚的權限邊界，合規的便利商店、酒吧、租車公司或其他服務提供者依公開規範申請接入，只取得場景必要的欄位，並接受稽核與責任追究。

驗證端若要成為公共基礎設施，技術上需要公開的相容性測試、信任資料、參考讀取器與錯誤處理文件，政策上也要訂出驗證者分級、允許用途、最小資料要求、保存期限、資安責任與退場機制。只讓少數專案合作夥伴查驗，皮夾很難進入日常生活；缺少清楚規範便全面開放，民眾又無法判斷資料會流向哪裡。加州的作法可以作為參考，台灣仍要依本地法規、產業結構與民眾期待設計自己的接入制度。

## 數位人權要寫進法律、採購與操作畫面

便利商店確認年齡時，只需要得到門檻結果；雇主查驗專業資格時，也只需要看到和職缺有關的紀錄。驗證者若能順手索取整張駕照或完整學籍，選擇性揭露便失去意義。發證者也不該在使用者每次出示憑證時收到回報，不同驗證者之間更不應輕易串連活動紀錄。資料最小化、防追蹤與使用者同意都要落進實際操作流程，不能只寫在產品介紹頁上。

沒有智慧型手機、不願使用皮夾，或因無障礙問題無法完成操作的人，也應保有可負擔且不受歧視的替代管道。政府還要公開哪些機構可以查驗、可以要求什麼、能保存多久，並準備撤銷資格、稽核、申訴與救濟程序。不可連結性、無障礙、跨廠商互通、資安測試、資料刪除與服務終止後的可攜性，都適合在採購時列為合約門檻。Career Passport 已將選擇性揭露、不可連結性與無障礙放進 RFP，採購文件因而成為落實人權政策的一個環節。

回到台灣的公共討論，年齡驗證要處理哪些服務有正當理由確認年齡，以及如何用最少資料完成；數位身分證牽涉法律身分、跨機關資料與國家基礎建設；數位憑證皮夾則負責承載和出示多種憑證。三者可能使用相近技術，風險、法源與監督強度仍有明顯差異。把每一項用途分開檢視，社會才能對具體制度形成支持、反對或修正意見。

店家若能任意要求姓名、完整生日與地址，再把每次查驗保存下來，數位流程會製造比肉眼看證件更多的追蹤資料。缺乏規範與產業自律，再好的密碼學也可能被不當使用。公共討論若把所有數位憑證都視為全面監控，又會忽略只證明資格、不交出完整身分的技術選項。先共同理解技術能做到什麼、政府與業者可能在哪裡做錯，政策才有可討論的共同現實。

## 台灣可以從 Career Passport 帶走什麼

四套皮夾放進同一個試辦環境後，政策、採購、技術測試與多方學習便發生在同一段時間裡，評選也不會只剩下介面美觀或規格表上的勾選。台灣若要擴大第三方應用，可以先挑租車、年齡門檻、專業資格與學歷查驗等需求清楚的場景，讓多家團隊使用共同的發證與驗證環境，在真實使用者面前完成跨系統測試。操作成功率、資料最小化、無障礙、問題修復速度與驗證者採用情況，都可以成為後續長約的決策依據。

一張憑證從簽發到查驗，會經過發證服務、皮夾、信任機制與驗證工具，各層的責任和生命週期並不相同。採購若能依功能拆分，再用共同標準與公開測試維持互通，政府與使用者較不容易被綁在單一產品。台灣現有沙盒已具備發證端與驗證端的基本環境，後續可以逐步升級成常態的符合性測試與第三方接入制度，公開通過條件、測試結果與責任邊界。

發出多少張憑證、App 有多少下載，主要反映供給端的建置進度。政策成效還要觀察多少學校與機構持續發證、多少合規驗證者實際受理、民眾完成一次服務要花多久、多少人因無障礙或裝置限制失敗、錯誤能否更正，以及使用者有沒有因此取得原本錯失的就業或服務機會。加州已把雇主使用與求職結果寫入 2031 年法定報告，台灣也可以在計畫初期就定義長期公共效益，讓預算和成果報告回到同一套目標。

走完四套 Career Passport 的測試，我最深的印象仍是幾次簡單的 QR Code 掃描。數位憑證皮夾可以從一份成績單、一張專業證照、一次租車或一個年齡門檻慢慢長出使用場景，不必先綁上一張包辦所有用途的國家級證件。發證者、持有人與驗證者理解自己的角色，廠商在公開標準下證明履約能力，人權保障再被寫進法律與採購，民眾才有機會在日常服務中逐步建立對數位信任的理解。

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
