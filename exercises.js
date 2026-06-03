// ============================================
// EXERCIȚII - Buchhaltung Teil 1: Bank & Finanzen (B1)
// Claudia Toth · 4 exerciții (sursă: fișa proprie © 2026)
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}

// ============================================
// EX1: Quiz — Bank & Finanzen Grundwortschatz
// ============================================
const ex1Items = [
    { id: 'a', q: 'Wie sagt man „în numerar" auf Deutsch?', options: ['kostenlos', 'bar', 'sicher', 'gültig'], correct: 1, explanation: 'bar = în numerar.' },
    { id: 'b', q: 'Ich mache eine ______ online.', options: ['Einzahlung', 'Auszahlung', 'Überweisung', 'Versicherung'], correct: 2, explanation: 'eine Überweisung machen = a face un transfer.' },
    { id: 'c', q: 'Was bedeutet „die Unterschrift"?', options: ['parola', 'contractul', 'semnătura', 'factura'], correct: 2, explanation: 'die Unterschrift = semnătura.' },
    { id: 'd', q: '„Ich habe kein Bargeld dabei." — Was meint die Person?', options: ['Nu are card.', 'Nu are numerar.', 'Nu are timp.', 'Nu are cont.'], correct: 1, explanation: 'das Bargeld = numerarul → nu are numerar la ea.' },
    { id: 'e', q: 'Wie heißt „dobândă" auf Deutsch?', options: ['die Zahlung', 'die Zinsen', 'die Strafe', 'der Vertrag'], correct: 1, explanation: 'die Zinsen (Pl.) = dobânda.' },
    { id: 'f', q: '„Das Online-Banking ist sicher." — Was bedeutet „sicher"?', options: ['periculos', 'sigur', 'lent', 'scump'], correct: 1, explanation: 'sicher = sigur.' },
    { id: 'g', q: 'Was bedeutet „das Konto"?', options: ['cardul', 'contul', 'chitanța', 'banca'], correct: 1, explanation: 'das Konto = contul bancar.' },
    { id: 'h', q: '„Ich bezahle die Rechnung bar." — Wie bezahlt die Person?', options: ['cu numerar', 'cu cardul', 'prin transfer', 'prin PayPal'], correct: 0, explanation: 'bar bezahlen = a plăti în numerar.' },
    { id: 'i', q: '„Der Vertrag ist ein Jahr gültig." — Was bedeutet „gültig"?', options: ['greșit', 'valabil', 'expirat', 'nou'], correct: 1, explanation: 'gültig = valabil.' },
    { id: 'j', q: 'Wie sagt man „chitanță" auf Deutsch?', options: ['das Passwort', 'die Quittung', 'der Kredit', 'das Bargeld'], correct: 1, explanation: 'die Quittung = chitanța.' }
];
function buildEx1() { buildMC('ex1', ex1Items, '<strong>🎯 Quiz: alege varianta corectă.</strong>'); }
function checkEx1() { return checkMC('ex1', ex1Items); }
function resetEx1() { ex1Items.forEach(i => delete mcPicked['ex1-' + i.id]); buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Lückentext — completează
// ============================================
const ex2Items = [
    { id: 'a', before: 'Ich bezahle meine Rechnung lieber', after: '.', answer: 'bar' },
    { id: 'b', before: 'Der', after: 'ist ein Jahr gültig.', answer: 'Vertrag' },
    { id: 'c', before: 'Ich habe kein', after: 'dabei.', answer: 'Bargeld' },
    { id: 'd', before: 'Die', after: 'wurde elektronisch geschickt.', answer: 'Rechnung' },
    { id: 'e', before: 'Ich mache eine', after: 'online.', answer: 'Überweisung' },
    { id: 'f', before: 'Mein', after: 'ist bei der Deutschen Bank.', answer: 'Konto' },
    { id: 'g', before: 'Kann ich bitte eine', after: 'bekommen?', answer: 'Quittung' },
    { id: 'h', before: 'Der Kredit ist', after: ', das heißt ohne Zinsen.', answer: 'zinslos' },
    { id: 'i', before: 'Das Online-Banking ist sehr', after: '.', answer: 'sicher' },
    { id: 'j', before: 'Ich habe mein', after: 'vergessen.', answer: 'Passwort' }
];
function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>✍️ Completează cu cuvântul potrivit.</strong><br>Cuvinte: <em>bar · Vertrag · Bargeld · Rechnung · Überweisung · Konto · Quittung · zinslos · sicher · Passwort</em></div>`;
    ex2Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.before} <input type="text" id="ex2-${item.id}" placeholder="..." style="width:150px;display:inline-block;"> ${item.after}</label></div><div class="feedback" id="ex2-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx2() { return checkTextItems(ex2Items, 'ex2'); }
function resetEx2() { buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Stimmt oder stimmt nicht? (True/False)
// ============================================
const ex3Items = [
    { id: 'a', q: '„Bar bezahlen" heißt „a plăti cu cardul".', options: ['Richtig', 'Falsch'], correct: 1, explanation: 'Greșit. „bar bezahlen" = a plăti în numerar.' },
    { id: 'b', q: 'Eine Überweisung ist ein Banktransfer.', options: ['Richtig', 'Falsch'], correct: 0, explanation: 'Corect. die Überweisung = transfer bancar.' },
    { id: 'c', q: '„Zinsen" sind das Geld, das man für einen Kredit zahlt (oder für Erspartes bekommt).', options: ['Richtig', 'Falsch'], correct: 0, explanation: 'Corect. die Zinsen = dobânda.' },
    { id: 'd', q: '„Kostenlos" bedeutet „cu costuri mari".', options: ['Richtig', 'Falsch'], correct: 1, explanation: 'Greșit. kostenlos = gratuit (fără costuri).' },
    { id: 'e', q: 'Eine Quittung ist ein Beweis für eine Zahlung.', options: ['Richtig', 'Falsch'], correct: 0, explanation: 'Corect. die Quittung = chitanța (dovada plății).' },
    { id: 'f', q: '„Sicher" und „gefährlich" bedeuten dasselbe.', options: ['Richtig', 'Falsch'], correct: 1, explanation: 'Greșit. sicher = sigur, gefährlich = periculos (opuse).' },
    { id: 'g', q: 'Ein Konto kann man nur im Ausland eröffnen.', options: ['Richtig', 'Falsch'], correct: 1, explanation: 'Greșit. Un cont îl deschizi la orice bancă, inclusiv în țară.' },
    { id: 'h', q: 'Eine Kreditkarte gehört zu einer Bank.', options: ['Richtig', 'Falsch'], correct: 0, explanation: 'Corect. Cardul de credit e emis de o bancă.' },
    { id: 'i', q: '„Gültig" heißt, dass etwas erlaubt und aktiv ist.', options: ['Richtig', 'Falsch'], correct: 0, explanation: 'Corect. gültig = valabil, în vigoare.' },
    { id: 'j', q: 'Eine Einzahlung ist, wenn man Geld auf das Konto legt.', options: ['Richtig', 'Falsch'], correct: 0, explanation: 'Corect. die Einzahlung = depunere (bani PE cont).' }
];
function buildEx3() { buildMC('ex3', ex3Items, '<strong>✅ Stimmt oder stimmt nicht? (Adevărat sau Fals?)</strong>'); }
function checkEx3() { return checkMC('ex3', ex3Items); }
function resetEx3() { ex3Items.forEach(i => delete mcPicked['ex3-' + i.id]); buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Match vocabular DE ↔ RO
// ============================================
const ex4Pairs = [
    { de: 'das Konto', ro: 'contul' },
    { de: 'die Überweisung', ro: 'transferul bancar' },
    { de: 'das Bargeld', ro: 'numerarul' },
    { de: 'die Kreditkarte', ro: 'cardul de credit' },
    { de: 'die Zinsen', ro: 'dobânda' },
    { de: 'die Quittung', ro: 'chitanța' },
    { de: 'die Einzahlung', ro: 'depunerea' },
    { de: 'die Auszahlung', ro: 'retragerea' },
    { de: 'der Kredit', ro: 'creditul' },
    { de: 'die Unterschrift', ro: 'semnătura' }
];
function buildEx4() { buildClickMatch('ex4', ex4Pairs, '<strong>🔗 Potrivește termenul bancar cu traducerea.</strong><br>Click pe cuvântul german, apoi pe traducerea corectă.', '🇩🇪 Begriff', '🇷🇴 Traducere'); }
function checkEx4() { const s = dmState['ex4']; return { correct: Object.keys(s.matched).length, total: ex4Pairs.length }; }
function resetEx4() { buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); });
