// ============================================
// VERB-KONJUGATION - Buchhaltung Teil 1 (B1)
// Claudia Toth · verbe bancare · PONS-verified
// Präteritum = IMPERFECT. Perfekt = timp vorbit.
// ============================================

const verbsData = [
    {
        infinitiv: 'eröffnen', ro: 'a deschide (un cont)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'eröffne', ro: 'deschid' },
            { p: 'du', f: 'eröffnest', ro: 'deschizi' },
            { p: 'er/sie/es', f: 'eröffnet', ro: 'deschide' },
            { p: 'wir', f: 'eröffnen', ro: 'deschidem' },
            { p: 'ihr', f: 'eröffnet', ro: 'deschideți' },
            { p: 'sie/Sie', f: 'eröffnen', ro: 'deschid / deschideți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'eröffnete', ro: 'deschideam' },
            { p: 'du', f: 'eröffnetest', ro: 'deschideai' },
            { p: 'er/sie/es', f: 'eröffnete', ro: 'deschidea' },
            { p: 'wir', f: 'eröffneten', ro: 'deschideam (noi)' },
            { p: 'ihr', f: 'eröffnetet', ro: 'deschideați' },
            { p: 'sie/Sie', f: 'eröffneten', ro: 'deschideau' }
        ],
        perfekt: 'ich habe ein Konto eröffnet', perfektRo: 'am deschis un cont',
        notes: 'Verb regulat cu prefix NEseparabil er- → Perfekt FĂRĂ „ge-": eröffnet. „ein Konto eröffnen" = a deschide un cont.'
    },
    {
        infinitiv: 'einzahlen', ro: 'a depune (bani pe cont)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'zahle ... ein', ro: 'depun' },
            { p: 'du', f: 'zahlst ... ein', ro: 'depui' },
            { p: 'er/sie/es', f: 'zahlt ... ein', ro: 'depune' },
            { p: 'wir', f: 'zahlen ... ein', ro: 'depunem' },
            { p: 'ihr', f: 'zahlt ... ein', ro: 'depuneți' },
            { p: 'sie/Sie', f: 'zahlen ... ein', ro: 'depun / depuneți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'zahlte ... ein', ro: 'depuneam' },
            { p: 'du', f: 'zahltest ... ein', ro: 'depuneai' },
            { p: 'er/sie/es', f: 'zahlte ... ein', ro: 'depunea' },
            { p: 'wir', f: 'zahlten ... ein', ro: 'depuneam (noi)' },
            { p: 'ihr', f: 'zahltet ... ein', ro: 'depuneați' },
            { p: 'sie/Sie', f: 'zahlten ... ein', ro: 'depuneau' }
        ],
        perfekt: 'ich habe Geld eingezahlt', perfektRo: 'am depus bani',
        notes: 'Verb regulat SEPARABIL (ein-): prefixul pleacă la sfârșit (Ich zahle Geld ein). Perfekt cu „-ge-" între prefix și rădăcină: ein-ge-zahlt.'
    },
    {
        infinitiv: 'abheben', ro: 'a retrage / a scoate (bani)', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'hebe ... ab', ro: 'retrag' },
            { p: 'du', f: 'hebst ... ab', ro: 'retragi' },
            { p: 'er/sie/es', f: 'hebt ... ab', ro: 'retrage' },
            { p: 'wir', f: 'heben ... ab', ro: 'retragem' },
            { p: 'ihr', f: 'hebt ... ab', ro: 'retrageți' },
            { p: 'sie/Sie', f: 'heben ... ab', ro: 'retrag / retrageți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'hob ... ab', ro: 'retrăgeam' },
            { p: 'du', f: 'hobst ... ab', ro: 'retrăgeai' },
            { p: 'er/sie/es', f: 'hob ... ab', ro: 'retrăgea' },
            { p: 'wir', f: 'hoben ... ab', ro: 'retrăgeam (noi)' },
            { p: 'ihr', f: 'hobt ... ab', ro: 'retrăgeați' },
            { p: 'sie/Sie', f: 'hoben ... ab', ro: 'retrăgeau' }
        ],
        perfekt: 'ich habe Geld abgehoben', perfektRo: 'am retras bani',
        notes: 'Verb tare (neregulat) SEPARABIL (ab-): heben → hob → gehoben. „Geld am Bankautomat abheben" = a scoate bani de la bancomat.'
    },
    {
        infinitiv: 'überweisen', ro: 'a transfera (bani)', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'überweise', ro: 'transfer' },
            { p: 'du', f: 'überweist', ro: 'transferi' },
            { p: 'er/sie/es', f: 'überweist', ro: 'transferă' },
            { p: 'wir', f: 'überweisen', ro: 'transferăm' },
            { p: 'ihr', f: 'überweist', ro: 'transferați' },
            { p: 'sie/Sie', f: 'überweisen', ro: 'transferă / transferați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'überwies', ro: 'transferam' },
            { p: 'du', f: 'überwiest', ro: 'transferai' },
            { p: 'er/sie/es', f: 'überwies', ro: 'transfera' },
            { p: 'wir', f: 'überwiesen', ro: 'transferam (noi)' },
            { p: 'ihr', f: 'überwiest', ro: 'transferați' },
            { p: 'sie/Sie', f: 'überwiesen', ro: 'transferau' }
        ],
        perfekt: 'ich habe das Geld überwiesen', perfektRo: 'am transferat banii',
        notes: 'Verb tare (neregulat) cu prefix NEseparabil über- → Perfekt FĂRĂ „ge-": überwiesen. „Geld auf ein Konto überweisen".'
    },
    {
        infinitiv: 'bezahlen', ro: 'a plăti', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'bezahle', ro: 'plătesc' },
            { p: 'du', f: 'bezahlst', ro: 'plătești' },
            { p: 'er/sie/es', f: 'bezahlt', ro: 'plătește' },
            { p: 'wir', f: 'bezahlen', ro: 'plătim' },
            { p: 'ihr', f: 'bezahlt', ro: 'plătiți' },
            { p: 'sie/Sie', f: 'bezahlen', ro: 'plătesc / plătiți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'bezahlte', ro: 'plăteam' },
            { p: 'du', f: 'bezahltest', ro: 'plăteai' },
            { p: 'er/sie/es', f: 'bezahlte', ro: 'plătea' },
            { p: 'wir', f: 'bezahlten', ro: 'plăteam (noi)' },
            { p: 'ihr', f: 'bezahltet', ro: 'plăteați' },
            { p: 'sie/Sie', f: 'bezahlten', ro: 'plăteau' }
        ],
        perfekt: 'ich habe die Rechnung bezahlt', perfektRo: 'am plătit factura',
        notes: 'Verb regulat cu prefix NEseparabil be- → Perfekt FĂRĂ „ge-": bezahlt. „bar / mit Karte / per Überweisung bezahlen".'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#fffbeb;border-left:4px solid #f59e0b">
            <h4>📌 Verbe bancare — separabile vs. neseparabile</h4>
            <p><strong>Separabile</strong> (einzahlen, abheben) → prefixul pleacă la sfârșit + Perfekt cu „-ge-" la mijloc (ein<u>ge</u>zahlt, ab<u>ge</u>hoben).<br>
            <strong>Neseparabile</strong> (eröffnen, überweisen, bezahlen) → prefixul rămâne lipit + Perfekt FĂRĂ „ge-" (eröffnet, überwiesen, bezahlt).</p>
            <p style="margin-top:8px"><strong>Reamintire:</strong> Präteritum = IMPERFECT (plătea, transfera). Perfekt = perfect compus (a plătit).</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const auxColor = v.aux === 'sein' ? '#3b82f6' : '#10b981';
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'TARE (neregulat)' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        let praeteritumRows = ''; v.praeteritum.forEach(r => { praeteritumRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                        <span style="background:${auxColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:4px">Perfekt + ${v.aux}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📗 Präteritum (imperfect / timp scris)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praeteritumRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📕 Perfekt (timp vorbit)</h4>
                    <div class="example-box"><div class="de">${v.perfekt}</div><div class="ro">${v.perfektRo}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#f0fdf4"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
