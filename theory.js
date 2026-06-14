// ============================================
// TEORIE - Buchhaltung Teil 1: Bank & Finanzen (B1)
// Claudia Toth · germană pentru contabilitate și finanțe
// Sursă: materialul propriu Claudia Toth (© 2026)
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Bun venit la bancă (Bei der Bank)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Azi învățăm vocabularul de care ai nevoie la bancă și în orice discuție despre bani: cont, transfer, card, dobândă, chitanță. La final ascultăm un dialog real — eu deschid un cont la bancă cu domnul Keller.</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📍 Situație</h4>
                <p>🇩🇪 Anna möchte ein neues Konto bei der Bank eröffnen, aber sie weiß nicht genau, welche Unterlagen sie braucht und ob sie sofort mit der Karte bezahlen kann. Am Schalter spricht sie mit Herrn Keller, einem Bankangestellten.</p>
                <p style="margin-top:6px;">🇷🇴 Andreea vrea să deschidă un cont nou la bancă, dar nu știe exact ce documente îi trebuie și dacă poate plăti imediat cu cardul. La ghișeu vorbește cu domnul Keller, un angajat al băncii.</p>
            </div>

            <div class="theory-box" style="background:#fef3c7;border-color:#f59e0b;">
                <h4>✍️ Notă despre diacritice (ä, ö, ü, ß)</h4>
                <p>Verificarea e blândă: poți scrie Umlaut-urile corect (<em>gebührenfrei, Überweisung</em>) sau cu varianta de înlocuire (<em>gebuehrenfrei, Ueberweisung</em>). Ambele sunt acceptate.</p>
            </div>
        </div>
    </div>

    <!-- 1: Substantive bancare -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🏦 2. Substantive bancare (Bankbegriffe)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-substantive.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">das Konto · die Konten</td><td>contul (bancar)</td><td><em>Ich habe ein neues Konto eröffnet.</em></td></tr>
                    <tr><td class="verb">die Bank · die Banken</td><td>banca</td><td><em>Meine Bank hat gute Konditionen.</em></td></tr>
                    <tr><td class="verb">der Bankautomat / Bankomat</td><td>bancomatul</td><td><em>Ich hebe Geld am Bankautomat ab.</em></td></tr>
                    <tr><td class="verb">die Überweisung · die Überweisungen</td><td>transferul bancar</td><td><em>Ich mache eine Überweisung online.</em></td></tr>
                    <tr><td class="verb">das Bargeld</td><td>numerarul</td><td><em>Ich habe kein Bargeld dabei.</em></td></tr>
                    <tr><td class="verb">die Kreditkarte · die Kreditkarten</td><td>cardul de credit</td><td><em>Ich bezahle mit Kreditkarte.</em></td></tr>
                    <tr><td class="verb">die Einzahlung · die Einzahlungen</td><td>depunerea (bani PE cont)</td><td><em>Die Einzahlung war gestern.</em></td></tr>
                    <tr><td class="verb">die Auszahlung · die Auszahlungen</td><td>retragerea (bani DE PE cont)</td><td><em>Die Auszahlung erfolgt morgen.</em></td></tr>
                    <tr><td class="verb">die Zinsen (Pl.)</td><td>dobânda</td><td><em>Die Zinsen sind sehr hoch.</em></td></tr>
                    <tr><td class="verb">das Darlehen / der Kredit</td><td>împrumutul / creditul</td><td><em>Ich nehme ein Darlehen auf.</em></td></tr>
                    <tr><td class="verb">die Quittung · die Quittungen</td><td>chitanța</td><td><em>Kann ich bitte eine Quittung bekommen?</em></td></tr>
                    <tr><td class="verb">das Passwort · die Passwörter</td><td>parola</td><td><em>Ich habe mein Passwort vergessen.</em></td></tr>
                    <tr><td class="verb">die Unterschrift · die Unterschriften</td><td>semnătura</td><td><em>Bitte setzen Sie hier Ihre Unterschrift.</em></td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Nu confunda <strong>Einzahlung</strong> (PUI bani pe cont) cu <strong>Auszahlung</strong> (SCOȚI bani). Trucul: <em>ein</em> = înăuntru, <em>aus</em> = afară — la fel ca la verbele separabile <em>einzahlen / auszahlen</em>.</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Adjective & descrieri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🏷️ 3. Adjective și descrieri financiare</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-adjective.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">bar</td><td>în numerar</td><td><em>Ich bezahle die Rechnung bar.</em></td></tr>
                    <tr><td class="verb">kostenlos</td><td>gratuit</td><td><em>Die Beratung ist kostenlos.</em></td></tr>
                    <tr><td class="verb">gebührenfrei</td><td>fără taxe / comisioane</td><td><em>Die Überweisung ist gebührenfrei.</em></td></tr>
                    <tr><td class="verb">sicher</td><td>sigur</td><td><em>Das Online-Banking ist sicher.</em></td></tr>
                    <tr><td class="verb">gültig</td><td>valabil</td><td><em>Der Vertrag ist ein Jahr gültig.</em></td></tr>
                    <tr><td class="verb">zinslos</td><td>fără dobândă</td><td><em>Der Kredit ist zinslos.</em></td></tr>
                    <tr><td class="verb">elektronisch</td><td>electronic</td><td><em>Die Rechnung wurde elektronisch geschickt.</em></td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background:#dbeafe;border-color:#3b82f6;">
                <h4>💡 Sufixul -frei și -los = „fără"</h4>
                <p><strong>gebührenfrei</strong> = fără taxe · <strong>zinslos</strong> = fără dobândă · <strong>kostenlos</strong> = fără costuri (gratuit). Sufixele <em>-frei</em> și <em>-los</em> înseamnă amândouă „fără ceva".</p>
            </div>
        </div>
    </div>

    <!-- 3: Cum plătești -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>💳 4. Cum plătești? (Wie bezahlt man?)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-bezahlen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Modul de plată</th><th>Exemplu (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td>în numerar</td><td><em>Ich bezahle <strong>bar</strong>.</em></td><td>Plătesc în numerar.</td></tr>
                    <tr><td>cu cardul</td><td><em>Ich bezahle <strong>mit Kreditkarte</strong> / <strong>mit Karte</strong>.</em></td><td>Plătesc cu cardul.</td></tr>
                    <tr><td>prin transfer</td><td><em>Ich bezahle <strong>per Überweisung</strong>.</em></td><td>Plătesc prin transfer.</td></tr>
                </tbody>
            </table>
            <div class="theory-box">
                <h4>🔑 Verbe-cheie cu banii (toate cu prefix de direcție)</h4>
                <ul>
                    <li><strong>ein Konto eröffnen</strong> — a deschide un cont</li>
                    <li><strong>Geld einzahlen</strong> — a depune bani (PE cont)</li>
                    <li><strong>Geld abheben</strong> — a scoate/retrage bani (de la bancomat)</li>
                    <li><strong>Geld überweisen</strong> — a transfera bani</li>
                    <li><strong>eine Rechnung bezahlen</strong> — a plăti o factură</li>
                </ul>
                <p style="margin-top:6px;color:#6b7280;font-style:italic;">Conjugarea completă a verbelor o găsești în secțiunea 🔁 Verb-Konjugation.</p>
            </div>
        </div>
    </div>

    <!-- 4: La ghișeu — documente -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📑 5. La ghișeu: documente și tipuri de cont</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-ghiseu.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">der Ausweis</td><td>buletinul / actul de identitate</td></tr>
                    <tr><td class="verb">die Meldebescheinigung</td><td>dovada de domiciliu</td></tr>
                    <tr><td class="verb">das Girokonto</td><td>contul curent</td></tr>
                    <tr><td class="verb">das Sparkonto</td><td>contul de economii</td></tr>
                    <tr><td class="verb">die EC-Karte</td><td>cardul de debit</td></tr>
                    <tr><td class="verb">das Online-Banking</td><td>serviciul de online banking</td></tr>
                    <tr><td class="verb">das Startguthaben</td><td>suma inițială (la deschiderea contului)</td></tr>
                    <tr><td class="verb">die Konditionen (Pl.)</td><td>condițiile (bancare)</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">La o bancă germană ți se cer aproape mereu <strong>der Ausweis</strong> + <strong>die Meldebescheinigung</strong>. Iar întrebarea-cheie e: <em>Girokonto</em> (curent, pentru zi cu zi) sau <em>Sparkonto</em> (economii)? Ascultă acum dialogul cu Herr Keller! 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
