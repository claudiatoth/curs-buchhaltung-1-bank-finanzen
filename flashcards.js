// ============================================
// FLASHCARDS - Buchhaltung Teil 1: Bank & Finanzen (B1)
// Claudia Toth · 32 carduri (vocabular bancar) cu TTS
// ============================================

const flashcardsData = [
    { de: "bar", ro: "in numerar" },
    { de: "kostenlos", ro: "gratuit" },
    { de: "gebührenfrei", ro: "fara taxe / comisioane" },
    { de: "sicher", ro: "sigur" },
    { de: "gültig", ro: "valabil" },
    { de: "zinslos", ro: "fara dobanda" },
    { de: "elektronisch", ro: "electronic" },
    { de: "das Konto · die Konten", ro: "contul (bancar)" },
    { de: "die Bank · die Banken", ro: "banca" },
    { de: "der Bankautomat", ro: "bancomatul" },
    { de: "die Überweisung", ro: "transferul bancar" },
    { de: "das Bargeld", ro: "numerarul" },
    { de: "die Kreditkarte", ro: "cardul de credit" },
    { de: "die Einzahlung", ro: "depunerea (bani PE cont)" },
    { de: "die Auszahlung", ro: "retragerea (bani DE PE cont)" },
    { de: "die Zinsen (Pl.)", ro: "dobanda" },
    { de: "das Darlehen / der Kredit", ro: "imprumutul / creditul" },
    { de: "die Quittung", ro: "chitanta" },
    { de: "das Passwort", ro: "parola" },
    { de: "die Unterschrift", ro: "semnatura" },
    { de: "das Girokonto", ro: "contul curent" },
    { de: "das Sparkonto", ro: "contul de economii" },
    { de: "die EC-Karte", ro: "cardul de debit" },
    { de: "der Ausweis", ro: "actul de identitate / buletinul" },
    { de: "die Meldebescheinigung", ro: "dovada de domiciliu" },
    { de: "das Startguthaben", ro: "suma initiala (la deschiderea contului)" },
    { de: "die Konditionen (Pl.)", ro: "conditiile bancare" },
    { de: "das Online-Banking", ro: "serviciul de online banking" },
    { de: "ein Konto eröffnen", ro: "a deschide un cont" },
    { de: "Geld einzahlen", ro: "a depune bani (pe cont)" },
    { de: "Geld abheben", ro: "a retrage bani (de la bancomat)" },
    { de: "Geld überweisen", ro: "a transfera bani" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: vocabularul bancar și financiar de bază.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
