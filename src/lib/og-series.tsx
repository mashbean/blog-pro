import React from "react";

const designs: Record<string, {title: string; en: string; sub: string; subEn: string; color: string; nodes: string[]; nodesEn: string[]; base: string; baseEn: string}> = {
  "ready-digital-government": {title: "有備而來", en: "Bonds", sub: "理想的數位皮夾開發報告", subEn: "Building a digital wallet that works", color: "#276b5c", nodes: ["發行", "持有", "驗證"], nodesEn: ["ISSUER", "HOLDER", "VERIFIER"], base: "信任基礎 · TRUST", baseEn: "TRUST INFRASTRUCTURE"},
  "dns-rpz": {title: "DNS RPZ", en: "DNS RPZ", sub: "台灣的網域停止解析機制", subEn: "Inside Taiwan’s domain blocking regime", color: "#9d482b", nodes: ["處分", "解析", "封鎖"], nodesEn: ["ORDER", "RESOLVE", "BLOCK"], base: "資料公開 · 制度檢查", baseEn: "OPEN DATA · PUBLIC ACCOUNTABILITY"},
  "civic-proof": {title: "公民證明", en: "Civic Proof", sub: "從國家發證，到公民自證", subEn: "From state-issued IDs to citizen-held proofs", color: "#4d4b97", nodes: ["公民", "證明", "公共性"], nodesEn: ["CITIZEN", "PROOF", "PUBLIC"], base: "概念 · 法理 · 工程", baseEn: "CONCEPTS · LAW · ENGINEERING"},
  "演講講稿": {title: "演講講稿", en: "Talks", sub: "把現場的思考，留在文字裡", subEn: "Ideas from the stage, kept in words", color: "#315f90", nodes: ["提問", "對話", "實踐"], nodesEn: ["ASK", "DISCUSS", "ACT"], base: "現場 · 文字 · 公共討論", baseEn: "ON STAGE · IN WRITING · IN PUBLIC"},
  "specials": {title: "研究專題", en: "Specials", sub: "讓問題長成專案，讓研究走進實作", subEn: "Questions become projects. Research becomes practice.", color: "#315f90", nodes: ["公民證明", "有備而來", "DNS RPZ"], nodesEn: ["CIVIC PROOF", "BONDS", "DNS RPZ"], base: "豆泥的難題 · 專題入口", baseEn: "OPEN QUESTIONS · PROJECT INDEX"},
};

export function seriesScene(id: string, locale: string) {
  const d = designs[id];
  const en = locale === "en";
  return <div style={{display:"flex", flexDirection:"column", width:1200, height:630, padding:"44px 58px", background:"#f6f4ee", color:"#202523", fontFamily:"Noto Serif TC", borderTop:`12px solid ${d.color}`}}>
    <div style={{display:"flex", justifyContent:"space-between", fontSize:20, color:d.color}}>
      <span>{en ? "MASHBEAN / OPEN QUESTIONS" : "豆泥的難題 / 研究專題"}</span><span style={{fontFamily:"IBM Plex Mono"}}>pro.mashbean.net</span>
    </div>
    <div style={{display:"flex", fontSize:86, fontWeight:700, marginTop:26, letterSpacing:-2}}>{en ? d.en : d.title}</div>
    <div style={{display:"flex", fontSize:en ? 27 : 32, marginTop:8}}>{en ? d.subEn : d.sub}</div>
    <div style={{display:"flex", alignItems:"center", marginTop:38}}>
      {(en ? d.nodesEn : d.nodes).flatMap((node,i) => [
        i > 0 && <div key={`arrow-${i}`} style={{display:"flex", width:56, justifyContent:"center", color:d.color, fontSize:34}}>→</div>,
        <div key={node} style={{display:"flex", width:324, flexShrink:0, height:88, alignItems:"center", justifyContent:"center", background:"#ffffff", border:`2px solid ${d.color}`, borderRadius:14, fontSize:en ? 25 : 31, fontWeight:700}}>{node}</div>
      ])}
    </div>
    <div style={{display:"flex", marginTop:24, height:52, justifyContent:"center", alignItems:"center", borderTop:`2px dashed ${d.color}`, color:d.color, fontSize:21}}>{en ? d.baseEn : d.base}</div>
    <div style={{display:"flex", marginTop:"auto", fontFamily:"IBM Plex Mono", color:"#6e746f", fontSize:16}}>RESEARCH / FIELD NOTES / EXPERIMENTS</div>
  </div>;
}
