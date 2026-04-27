// nauka.js - GIGANTYCZNA BAZA WIEDZY (PODSTAWY I ZAAWANSOWANA MEDYCYNA)

const bgMusicLearn = new Audio('wiedza.mp3');
bgMusicLearn.loop = true;
bgMusicLearn.volume = 0.15; 

const encyclopedia = [
    // --- PODSTAWY I CODZIENNA MEDYCYNA ---
    {
        id: 1, title: "Skaleczenia i Drobne Rany", category: "Pierwsza Pomoc",
        content: `
            <p>Każde przerwanie ciągłości skóry to wrota dla bakterii. Nawet najmniejsze skaleczenie wymaga odpowiedniego zaopatrzenia.</p>
            <h4>Podstawowe działanie:</h4>
            <ul>
                <li><strong>Oczyszczenie:</strong> Umyj ranę pod bieżącą, chłodną wodą z mydłem. Nie używaj wody utlenionej ani spirytusu bezpośrednio na otwartą ranę (uszkadzają zdrowe tkanki i opóźniają gojenie!).</li>
                <li><strong>Dezynfekcja:</strong> Użyj delikatnego płynu odkażającego (np. z octenidyną).</li>
                <li><strong>Opatrunek:</strong> Załóż plaster z opatrunkiem lub jałową gazę, aby zabezpieczyć miejsce przed brudem.</li>
            </ul>
            <div class="warning-box">⚠️ Kiedy do lekarza? Jeśli rana jest głęboka, silnie krwawi, rozchodzi się na boki lub powstała od zardzewiałego przedmiotu/ugryzienia zwierzęcia.</div>
        `,
        advancedDetails: `
            <h5>Szycie Chirurgiczne i Tężec</h5>
            <ul>
                <li><strong>Złota zasada 6-8 godzin:</strong> Zranienia najlepiej zszywać (zbliżać brzegi rany szwami chirurgicznymi) w ciągu 6 do 8 godzin od urazu. Po tym czasie rana jest uznawana za zakażoną i szyć jej "na głucho" z reguły nie wolno (ryzyko uwięzienia bakterii beztlenowych i ropnia).</li>
                <li><strong>Profilaktyka przeciwtężcowa:</strong> Tężec (Clostridium tetani) to śmiertelna bakteria beztlenowa żyjąca w glebie. Przy ranie brudnej/kłutej sprawdzamy kalendarz szczepień. Jeśli od ostatniej dawki minęło >5 lat (w ranie brudnej) lub >10 lat (czystej), podajemy dawkę przypominającą (szczepionka Td) oraz ew. antytoksynę (LIT - ludzka immunoglobulina przeciwtężcowa).</li>
            </ul>
        `
    },
    {
        id: 2, title: "Gorączka", category: "Fizjologia / Podstawy",
        content: `
            <p>Gorączka (temperatura >38.0°C) NIE jest chorobą. Jest obronną reakcją organizmu. Zwiększona temperatura hamuje namnażanie się wielu wirusów i pobudza nasz układ odpornościowy do walki.</p>
            <h4>Jak reagować?</h4>
            <ul>
                <li>Nie zbijaj stanu podgorączkowego (37.1 - 37.9°C), pozwól ciału walczyć.</li>
                <li>Powyżej 38.5°C można zastosować leki przeciwgorączkowe (Paracetamol lub Ibuprofen).</li>
                <li>Pamiętaj o intensywnym nawadnianiu, ponieważ wraz z potem tracimy mnóstwo wody!</li>
            </ul>
            <div class="warning-box">⚠️ Drgawki gorączkowe: Częste u dzieci od 6. miesiąca do 5. roku życia przy szybkim wzroście temperatury. Wyglądają przerażająco, ale zazwyczaj mijają same w kilka minut i nie uszkadzają mózgu.</div>
        `,
        advancedDetails: `
            <h5>Patomechanizm Gorączki</h5>
            <ul>
                <li><strong>Ośrodek termoregulacji:</strong> Znajduje się w podwzgórzu (część międzymózgowia). Działa jak termostat.</li>
                <li><strong>Pirogeny:</strong> Substancje wywołujące gorączkę. Pirogeny egzogenne (np. toksyny bakteryjne) pobudzają makrofagi do produkcji pirogenów endogennych (cytokin: np. Interleukina-1, Interleukina-6, TNF-alfa).</li>
                <li><strong>Działanie NLPZ:</strong> Leki takie jak Ibuprofen czy Paracetamol obniżają temperaturę poprzez blokowanie enzymu cyklooksygenazy (COX) w ośrodkowym układzie nerwowym, co hamuje syntezę prostaglandyny E2 (PGE2) i "resetuje" termostat podwzgórza do normy.</li>
            </ul>
        `
    },
    {
        id: 3, title: "Omdlenie (Zasłabnięcie)", category: "Kardiologia / Pierwsza Pomoc",
        content: `
            <p>Omdlenie to nagła, krótkotrwała utrata przytomności wywołana chwilowym spadkiem przepływu krwi przez mózg.</p>
            <h4>Co robić?</h4>
            <ul>
                <li>Zapewnij dopływ świeżego powietrza.</li>
                <li><strong>Pozycja:</strong> Ułóż poszkodowanego płasko na plecach i unieś jego nogi do góry (powyżej poziomu serca). To spowoduje, że krew z nóg spłynie do centralnego układu krążenia i dotleni mózg.</li>
                <li>Rozlużnij ciasną odzież (krawat, pasek).</li>
            </ul>
            <div class="warning-box">⚠️ Ważne: Jeśli osoba po omdleniu nie odzyskuje przytomności przez więcej niż minutę, traktuj to jako stan bezpośredniego zagrożenia życia i sprawdź oddech!</div>
        `,
        advancedDetails: `
            <h5>Omdlenie Wazowagalne (Wazodepresyjne)</h5>
            <ul>
                <li><strong>Mechanizm:</strong> Nadmierna reakcja nerwu błędnego (część układu przywspółczulnego) na bodziec stresowy, ból lub duszne pomieszczenie. Powoduje nagłe rozszerzenie naczyń krwionośnych w nogach (spadek ciśnienia) i zwolnienie akcji serca (bradykardia).</li>
                <li><strong>Diagnostyka różnicowa (Czerwone flagi):</strong> Omdlenie podczas wysiłku fizycznego, omdlenie w pozycji leżącej, brak objawów zwiastujących (tzw. omdlenie "jak kłoda") - te cechy sugerują omdlenie KARDIOGENNE (np. groźne arytmie jak częstoskurcz komorowy czy blok AV III stopnia). Wymagają pilnego EKG i diagnostyki szpitalnej.</li>
            </ul>
        `
    },

    // --- KLASYKA RATOWNICTWA I KARDIO ---
    {
        id: 4, title: "RKO - Resuscytacja Krążeniowo-Oddechowa", category: "Ratownictwo",
        content: `
            <p>Resuscytacja to kluczowa umiejętność przy Nagłym Zatrzymaniu Krążenia (NZK).</p>
            <ul>
                <li>Sprawdź przytomność i oddech (przez 10 sekund).</li>
                <li>Zadzwoń na 112, przynieś AED.</li>
                <li><strong>Uciski:</strong> 30 uciśnięć klatki piersiowej (środek, głębokość 5-6 cm). Następnie 2 wdechy (lub same uciski).</li>
            </ul>
            <div class="warning-box">⚠️ Pamiętaj: Nawet same uciski klatki (bez wdechów) drastycznie zwiększają szanse na przeżycie utrzymując ciśnienie perfuzyjne mózgu.</div>
        `,
        advancedDetails: `
            <h5>Algorytm ALS (Advanced Life Support)</h5>
            <ul>
                <li><strong>Rytmy do defibrylacji (VF / pVT):</strong> Migotanie komór (VF) lub częstoskurcz komorowy bez tętna (pVT). Defibrylacja (najlepiej 150J-200J bipolarnie) -> 2 minuty RKO.</li>
                <li><strong>Farmakologia w VF/pVT:</strong> 
                    <br><b>Adrenalina 1 mg i.v./i.o.</b> po 3. defibrylacji (i potem co 3-5 minut).
                    <br><b>Amiodaron 300 mg i.v./i.o.</b> po 3. defibrylacji (kolejne 150 mg po 5. defibrylacji).
                </li>
                <li><strong>Rytmy nie do defibrylacji (PEA / Asystolia):</strong> Brak wstrząsu. <b>Adrenalina 1 mg</b> najszybciej jak to możliwe, potem RKO 2 minuty.</li>
                <li><strong>Odwracalne przyczyny (4H i 4T):</strong> Hipoksja, Hipowolemia, Hipo/Hiperkaliemia, Hipotermia ORAZ Odma prężna, Tamponada, Toksyny, Zakrzepica wieńcowa/płucna.</li>
            </ul>
        `
    },
    {
        id: 5, title: "Zawał Serca (STEMI / NSTEMI)", category: "Kardiologia",
        content: `
            <p>Zawał mięśnia sercowego (OZW): Naczynia wieńcowe zatykają się, powodując obumieranie komórek serca z braku tlenu.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Gniotący, piekący ból za mostkiem, mogący promieniować do żuchwy lub lewej ręki.</li>
                <li>Zimne poty, duszność, lęk przed śmiercią.</li>
            </ul>
            <div class="warning-box">⚠️ Działanie: Natychmiast wezwij 112. Ułóż poszkodowanego w pozycji półsiedzącej i uspokój go. Jeśli pacjent nie jest uczulony, można podać 300 mg aspiryny do pogryzienia.</div>
        `,
        advancedDetails: `
            <h5>Zaawansowane Leczenie OZW</h5>
            <ul>
                <li><strong>Rozpoznanie EKG:</strong> Szukamy uniesienia odcinka ST (STEMI) mierzonym w punkcie J, w co najmniej dwóch odprowadzeniach sąsiadujących. NSTEMI charakteryzuje się brakiem uniesień ST, ale często obniżeniami ST lub ujemnymi załamkami T oraz dodatnimi troponinami.</li>
                <li><strong>Terapia MONA w ZRM:</strong> 
                    <br><b>M</b>orfina: 2-5 mg i.v. (silny ból wyrzuca katecholaminy zwiększające zapotrzebowanie serca na tlen).
                    <br><b>O</b>kigenoterapia: Tylko przy duszności i SpO2 < 90%.
                    <br><b>N</b>itrogliceryna: 0.4 mg s.l. (zmniejsza obciążenie wstępne).
                    <br><b>A</b>spiryna: 150-300 mg p.o. + Lek przeciwpłytkowy 2. linii (Klopidogrel / Tikagrelor).
                </li>
                <li><strong>Leczenie docelowe:</strong> Pilna angiografia wieńcowa z angioplastyką pierwotną (PCI) - wprowadzony cewnik z balonem rozbija skrzep i zakłada stent. Czas "od drzwi do balonu" powinien wynosić < 90 minut!</li>
            </ul>
        `
    },
    {
        id: 6, title: "Udar Mózgu - Czas to Mózg", category: "Neurologia",
        content: `
            <p>Udar mózgu to nagłe zatrzymanie dopływu krwi do części mózgu.</p>
            <ul>
                <li><strong>Niedokrwienny (80%):</strong> Skrzep blokuje tętnicę w mózgu.</li>
                <li><strong>Krwotoczny (20%):</strong> Tętnica pęka (wylew).</li>
            </ul>
            <div class="warning-box">⚠️ Test FAST: F (Twarz - asymetria), A (Ramiona - opadanie), S (Mowa - niewyraźna), T (Czas - 112!).</div>
        `,
        advancedDetails: `
            <h5>Protokoły Poudarowe i Leczenie</h5>
            <ul>
                <li><strong>Złota Godzina:</strong> Kluczem jest jak najszybszy transport do ośrodka z oddziałem udarowym. W karetce NIE obniżamy ciśnienia rutynowo (wyższe ciśnienie pozwala na "przepychanie" krwi przez oboczne naczynia ratujące tzw. penumbrę - strefę półcienia).</li>
                <li><strong>Diagnostyka Obrazowa:</strong> Tomografia Komputerowa (TK) głowy "na ostro". Cel: Wykluczyć ubytek krwotoczny. Krew w TK świeci na biało (hiperdensyjna).</li>
                <li><strong>Tromboliza dożylna (rt-PA):</strong> Podajemy lek Alteplaza, jeśli od początku objawów minęło mniej niż 4.5 godziny i wykluczono krwotok.</li>
                <li><strong>Trombektomia mechaniczna:</strong> Endowaskularne "odessanie" lub wyciągnięcie skrzepu stentu (stent retriever) do 6h od wystąpienia udaru z zamknięciem dużego naczynia.</li>
            </ul>
        `
    },

    // --- SKRAJNE STANY I CHIRURGIA ---
    {
        id: 7, title: "Wstrząs Krwotoczny (Hipowolemia)", category: "Intensywna Terapia",
        content: `
            <p>Wstrząs to stan, w którym do komórek nie dociera wystarczająca ilość tlenu, z powodu krytycznego spadku objętości krwi w układzie.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Blada, zimna, spocona skóra.</li>
                <li>Bardzo szybkie, ale słabe tętno (tachykardia).</li>
                <li>Przyspieszony, spłycony oddech oraz splątanie.</li>
            </ul>
            <div class="warning-box">⚠️ Działanie: Tamowanie widocznych krwotoków (opaski uciskowe - stazyty, uciskanie bezpośrednie). Pozycja wstrząsowa (uniesienie nóg). Zabezpieczenie przed utratą ciepła (folia NRC)!</div>
        `,
        advancedDetails: `
            <h5>Masywna Transfuzja i Resuscytacja Płynowa (Damage Control)</h5>
            <ul>
                <li><strong>Opaski ucsikowe (Tourniquet):</strong> W ratownictwie taktycznym (TCCC) zakładane "High and Tight" (wysoko i ciasno) na krwawiącą kończynę przy masywnym krwotoku, z zapisaniem czasu założenia!</li>
                <li><strong>Kwas traneksamowy (TXA):</strong> Podawany i.v. w dawce 1g w ciągu pierwszych 3 godzin od urazu. Zapobiega rozpuszczaniu się powstających skrzepów (hamuje fibrynolizę).</li>
                <li><strong>Protokół Masywnej Transfuzji (MTP):</strong> Podawanie krwi w stosunku 1:1:1 (Koncentrat Krwinek Czerwonych : Osocze Świeżo Mrożone : Płytki Krwi). Unika się pompowania samego roztworu NaCl 0.9%, ponieważ "rozcieńcza" on krew i wypłukuje czynniki krzepnięcia, powodując tzw. śmiercionośną triadę pourazową (koagulopatia, kwasica, hipotermia).</li>
            </ul>
        `
    },
    {
        id: 8, title: "Odma Prężna", category: "Chirurgia Klatki Piersiowej",
        content: `
            <p>Odma prężna to bezpośrednio zagrażający życiu stan. Powietrze przez uszkodzone płuco (lub dziurę w klatce) dostaje się do opłucnej (przestrzeni wokół płuca), ale nie może z niej uciec.</p>
            <h4>Co się dzieje?</h4>
            <p>Rośnie ciśnienie w klatce piersiowej. Płuco zostaje całkowicie zgniecione, a powietrze zaczyna spychać serce na drugą stronę klatki piersiowej, co dusi i blokuje pracę serca.</p>
            <div class="warning-box">⚠️ Objawy: Rosnąca, potworna duszność, zasinienie, powiększenie żył szyjnych i przesunięcie tchawicy w zdrową stronę.</div>
        `,
        advancedDetails: `
            <h5>Dekompresja Igłowa (Torakocenteza Ratunkowa)</h5>
            <ul>
                <li>Odma prężna jest jedną z tzw. odwracalnych przyczyn zatrzymania krążenia (4T - Tension pneumothorax). Wymaga <b>NATYCHMIASTOWEGO</b> nakłucia klatki piersiowej na miejscu zdarzenia.</li>
                <li><strong>Technika (Nowe wytyczne TCCC/ERC):</strong> Nakłucie przeprowadza się grubą kaniulą (np. pomarańczowy wenflon 14G) w <b>V przestrzeni międzyżebrowej w linii pachowej przedniej</b> (lub alternatywnie w II przestrzeni międzyżebrowej w linii środkowo-obojczykowej). Igłę prowadzimy po GÓRNYM brzegu żebra (aby nie uszkodzić pęczka naczyniowo-nerwowego biegnącego pod dolnym brzegiem).</li>
                <li>Dekompresja daje czas (usłyszymy syk uciekającego pod ciśnieniem powietrza), do momentu dojazdu na SOR, gdzie chirurg założy ostateczny drenaż klatki piersiowej.</li>
            </ul>
        `
    },
    {
        id: 9, title: "Wstrząs Anafilaktyczny", category: "Immunologia / Ratownictwo",
        content: `
            <p>Anafilaksja to gwałtowna, uogólniona reakcja alergiczna (np. po antybiotyku, orzeszkach ziemnych, użądleniu pszczoły). Rozwija się w ciągu minut.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Swędząca pokrzywka na skórze i rumień.</li>
                <li>Obrzęk języka, gardła i krtani (prowadzący do uduszenia).</li>
                <li>Spadek ciśnienia krwi (zasłabnięcie).</li>
            </ul>
            <div class="warning-box">⚠️ Działanie: Tylko Adrenalina ratuje życie! Jeśli poszkodowany ma przy sobie autowstrzykiwacz (EpiPen), zdejmij osłonkę i wbij mu w przednio-boczną część uda na 10 sekund. Dzwoń na 112.</div>
        `,
        advancedDetails: `
            <h5>Medycyna Ratunkowa Anafilaksji</h5>
            <ul>
                <li><strong>Adrenalina domięśniowa (i.m.):</strong> Lek z wyboru. Dawka dla dorosłego: 0.5 mg i.m. (z ampułki 1 mg/ml). Podaje się w mięsień obszerny boczny uda. Działa jako agonista receptorów alfa (kurczy naczynia podnosząc ciśnienie) i beta-2 (rozszerza oskrzela). Podanie dożylne w anafilaksji u pacjentów z zachowanym tętnem jest ryzykowne (grozi arytmiami).</li>
                <li><strong>Leki II Rzutu:</strong> 
                    <br>Płynoterapia: Masywna (1-2 litry) krystaloidów.
                    <br>Leki przeciwhistaminowe: Klemastyna / Antazolina i.v. (hamują swędzenie i pokrzywkę).
                    <br>Glikokortykosteroidy: Hydrokortyzon (100-200 mg) lub Deksametazon (działają wolno, zapobiegają tzw. nawrotom 2-fazowym).
                </li>
            </ul>
        `
    },
    {
        id: 10, title: "Cukrzycowa Kwasica Ketonowa (DKA)", category: "Endokrynologia",
        content: `
            <p>Ostre powikłanie cukrzycy, najczęściej Typu 1. Występuje, gdy w organizmie brakuje insuliny.</p>
            <h4>Dlaczego powstaje?</h4>
            <p>Bez insuliny komórki głodują (nie mogą pobrać cukru z krwi). Ciało zaczyna więc spalać tłuszcze dla energii, co prowadzi do powstawania ogromnych ilości szkodliwych produktów ubocznych - ketonów, które "zakwaszają" krew.</p>
            <div class="warning-box">⚠️ Objawy: Ekstremalne pragnienie, częste oddawanie moczu, oddech pachnący acetonem (zmywaczem do paznokci / zgniłymi jabłkami), wymioty i głębokie oddechy Kussmaula.</div>
        `,
        advancedDetails: `
            <h5>Leczenie DKA na Oddziale Intensywnej Terapii</h5>
            <ul>
                <li><strong>Nawodnienie to podstawa:</strong> Pacjenci mają skrajny deficyt wody (nawet 5-8 litrów) z powodu diurezy osmotycznej (glukoza ciągnie wodę do moczu). Płynoterapia NaCl 0.9% to priorytet przed podaniem insuliny!</li>
                <li><strong>Ciągły wlew Insuliny:</strong> Insulina krótko działająca we wlewie dożylnym (0.1 U/kg/h). Zahamuje ona produkcję ciał ketonowych.</li>
                <li><strong>Korekta Potasu (K+):</strong> Mimo że potas we krwi z początku wydaje się w normie lub podwyższony, całkowita pula w organizmie jest DRASTYCZNIE mała. Insulina "wepchnie" potas z powrotem do komórek. Bez suplementacji potasu i.v. pacjent umrze z powodu zagrażającej życiu arytmii na skutek hipokaliemii!</li>
            </ul>
        `
    },
    {
        id: 11, title: "Tamponada Serca", category: "Kardiologia",
        content: `
            <p>Stan nagły polegający na gromadzeniu się płynu (często krwi z pęknięcia lub urazu) w worku osierdziowym otaczającym serce.</p>
            <h4>Mechanizm zjawiska:</h4>
            <p>Worek osierdziowy nie jest rozciągliwy. Gromadząca się w nim krew zaczyna "ściskać" mięsień sercowy z zewnątrz. Ściśnięte serce nie może się rozkurczyć, by napełnić się krwią. Akcja serca staje się pusta, a ciśnienie tętnicze spada do zera.</p>
            <div class="warning-box">⚠️ Objawy: Pacjent dusi się, ma powiększone żyły szyjne, a jego tony serca (przy słuchaniu stetoskopem) są głuche i ledwo słyszalne.</div>
        `,
        advancedDetails: `
            <h5>Triada Becka i Perikardiocenteza</h5>
            <ul>
                <li><strong>Triada Becka:</strong> Klasyczne kryteria diagnostyczne dla ostrej tamponady to:
                    <br>1. Hipotensja (niskie ciśnienie).
                    <br>2. Poszerzenie żył szyjnych (wzrost Ośrodkowego Ciśnienia Żylnego - OCŻ).
                    <br>3. Stłumione, głuche tony serca (ze względu na barierę z płynu).
                </li>
                <li><strong>Inne objawy (Tętno dziwaczne):</strong> <i>Pulsus paradoxus</i> - spadek skurczowego ciśnienia tętniczego o więcej niż 10 mmHg podczas głębokiego wdechu.</li>
                <li><strong>Zabieg ratunkowy:</strong> Perikardiocenteza (nakłucie worka osierdziowego). Pod kontrolą USG nakłuwa się okolice pod wyrostkiem mieczykowatym mostka i odciąga płyn strzykawką. Usunięcie nawet 50 ml płynu pozwala natychmiast poprawić rzut serca i uratować życie!</li>
            </ul>
        `
    },
    {
        id: 12, title: "Zapalenie Wyrostka Robaczkowego", category: "Chirurgia",
        content: `
            <p>Najczęstsza ostra choroba chirurgiczna jamy brzusznej. Powstaje wskutek zablokowania światła wyrostka (np. przez kamień kałowy), co prowadzi do ostrego stanu zapalnego.</p>
            <h4>Ewolucja bólu:</h4>
            <ul>
                <li>Początkowo: Ból rozlany, tępy, często zlokalizowany w okolicy pępka lub nadbrzuszu (brak jednoznacznego źródła). Dołączają nudności.</li>
                <li>Po kilku godzinach: Ból wędruje i skupia się ostro w prawym, dolnym kwadrancie brzucha (prawy dół biodrowy).</li>
            </ul>
            <div class="warning-box">⚠️ Uwaga: Gdy zlekceważymy objawy, wyrostek może "pęknąć" (perforacja), rozlewając gnijącą treść do jamy brzusznej. To prowadzi do zagrażającego życiu Zapalenia Otrzewnej!</div>
        `,
        advancedDetails: `
            <h5>Diagnostyka, Punkty i Objawy Chirurgiczne</h5>
            <ul>
                <li><strong>Punkt McBurneya:</strong> Położony w 1/3 odległości między kolcem biodrowym przednim górnym, a pępkiem. Tu ból uciskowy jest największy.</li>
                <li><strong>Objaw Blumberga:</strong> Lekarz powoli i głęboko uciska brzuch, po czym NAGLE puszcza dłoń. Ostry, przeszywający ból w momencie puszczania to patognomoniczny znak podrażnienia otrzewnej.</li>
                <li><strong>Objaw Rovsinga:</strong> Ucisk w lewym dole biodrowym wywołuje ból po stronie prawej (wynika to z przesuwania gazów jelitowych, które uderzają w wyrostek).</li>
                <li><strong>Skala Alvarado:</strong> System punktowy oceniający ryzyko zapalenia na podstawie objawów (migracja bólu, anoreksja) i wyników laboratoryjnych (Leukocytoza > 10,000, przesunięcie w lewo w rozmazie).</li>
                <li><strong>Leczenie:</strong> Złotym standardem jest <b>Appendektomia laparoskopowa</b> (wycięcie z użyciem kamery i małych cięć), poparta osłoną antybiotykową.</li>
            </ul>
        `
    }
];

// Otwieranie trybu
function openLearnMode() {
    showSection('learn-section');
    
    bgMusicMain.pause();
    if(typeof bgMusicLesson !== 'undefined') bgMusicLesson.pause();
    
    bgMusicLearn.currentTime = 0;
    if (typeof safePlay === "function") { safePlay(bgMusicLearn); } else { bgMusicLearn.play(); }
    
    if (typeof soundSelect !== 'undefined') {
        soundSelect.currentTime = 0;
        soundSelect.play().catch(e=>console.log(e));
    }

    renderLearnTopics();
    if(typeof animateLearnEntry === "function") animateLearnEntry();
}

function renderLearnTopics() {
    const list = document.getElementById('learn-topics-list');
    list.innerHTML = "";

    encyclopedia.forEach(topic => {
        const btn = document.createElement('button');
        btn.className = "topic-btn";
        btn.innerHTML = `<span style="color:#9b59b6; margin-right: 8px;">■</span> ${topic.title}`;
        btn.onclick = () => {
            if(typeof applyReadingHighlight === "function") applyReadingHighlight(btn);
            showArticle(topic);
        };
        list.appendChild(btn);
    });
}

function toggleAdvancedDetails() {
    if (typeof soundSelect !== 'undefined') {
        soundSelect.currentTime = 0;
        soundSelect.play().catch(e=>console.log(e));
    }
    const container = document.getElementById('advanced-details-container');
    const icon = document.getElementById('expand-icon');
    
    if (container.classList.contains('advanced-content-hidden')) {
        container.classList.remove('advanced-content-hidden');
        container.classList.add('advanced-content-visible');
        icon.innerText = "🔼";
    } else {
        container.classList.remove('advanced-content-visible');
        container.classList.add('advanced-content-hidden');
        icon.innerText = "🔽";
    }
}

function showArticle(topic) {
    if (typeof soundSelect !== 'undefined') {
        soundSelect.currentTime = 0;
        soundSelect.play().catch(e=>console.log(e));
    }
    document.getElementById('learn-content-placeholder').style.display = 'none';
    const article = document.getElementById('learn-article');
    article.style.display = 'block';
    
    document.getElementById('article-title').innerText = topic.title;
    document.getElementById('article-category').innerText = topic.category;
    
    let fullHtml = topic.content;
    
    if (topic.advancedDetails) {
        fullHtml += `
            <div class="advanced-medical-wrapper">
                <button class="btn-expand-medical" onclick="toggleAdvancedDetails()">
                    <span id="expand-icon" class="icon">🔽</span> Rozwiń zaawansowane szczegóły medyczne
                </button>
                <div id="advanced-details-container" class="advanced-content-hidden">
                    <div class="advanced-details-box">
                        ${topic.advancedDetails}
                    </div>
                </div>
            </div>
        `;
    }
    
    document.getElementById('article-body').innerHTML = fullHtml;

    if(typeof animateArticleLoad === "function") animateArticleLoad();
}