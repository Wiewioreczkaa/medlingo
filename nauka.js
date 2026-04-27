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
    },
    {
        id: 13, title: "Zatorowość Płucna", category: "Angiologia / Pulmonologia",
        content: `
            <p>Zatorowość płucna (ZP) to stan, w którym skrzeplina (zazwyczaj z żył głębokich nóg) urywa się i płynie z prądem krwi do płuc, zatykając tętnicę płucną.</p>
            <h4>Główne objawy:</h4>
            <ul>
                <li>Nagła, niewyjaśniona duszność i ból w klatce piersiowej (o charakterze opłucnowym - nasila się przy wdechu).</li>
                <li>Kaszel, czasem z odkrztuszaniem krwi.</li>
                <li>Szybkie tętno i lęk.</li>
            </ul>
            <div class="warning-box">⚠️ Ryzyko: Szczególnie narażone są osoby po długich lotach samolotem, operacjach ortopedycznych lub stosujące antykoncepcję hormonalną bez kontroli lekarza.</div>
        `,
        advancedDetails: `
            <h5>Diagnostyka i Triada Virchowa</h5>
            <ul>
                <li><strong>Triada Virchowa:</strong> Trzy czynniki sprzyjające zakrzepicy: 1. Zastój krwi, 2. Uszkodzenie śródbłonka naczyniowego, 3. Nadkrzepliwość (trombofilia).</li>
                <li><strong>Skala Wellsa:</strong> Algorytm punktowy oceniający prawdopodobieństwo ZP.</li>
                <li><strong>Badania pomocnicze:</strong> D-dimery (wysoka czułość, niska swoistość), Angio-TK tętnic płucnych (złoty standard).</li>
                <li><strong>Leczenie:</strong> Antykoagulacja (Heparyna drobnocząsteczkowa, NOAC - np. Rywaroksaban). W stanach niestabilnych hemodynamicznie - tromboliza.</li>
            </ul>
        `
    },
    {
        id: 14, title: "Drgawki i Padaczka", category: "Neurologia",
        content: `
            <p>Atak padaczkowy to wynik gwałtownych wyładowań bioelektrycznych w mózgu. Najważniejsza jest ochrona pacjenta przed urazami wtórnymi.</p>
            <h4>Pierwsza pomoc:</h4>
            <ul>
                <li><strong>NIE wkładaj nic do ust!</strong> To mit, który powoduje wyłamanie zębów lub zadławienie.</li>
                <li>Chroń głowę przed uderzeniami o podłoże (podłóż coś miękkiego).</li>
                <li>Po ataku ułóż osobę w pozycji bocznej bezpiecznej.</li>
            </ul>
            <div class="warning-box">⚠️ Czas: Jeśli napad trwa dłużej niż 5 minut lub powtarza się bez odzyskania przytomności, mamy do czynienia ze Stanem Padaczkowym - dzwoń na 112!</div>
        `,
        advancedDetails: `
            <h5>Stan Padaczkowy (Status Epilepticus)</h5>
            <ul>
                <li><strong>Definicja:</strong> Napad trwający >5 min lub seria napadów bez powrotu świadomości. Grozi nieodwracalnym uszkodzeniem neuronów i obrzękiem mózgu.</li>
                <li><strong>Leczenie I rzutu:</strong> Benzodiazepiny i.v. (Diazepam 10mg lub Lorazepam). Jeśli brak dostępu żylnego - Diazepam we wlewce doodbytniczej lub Midazolam domięśniowo/na śluzówkę policzka.</li>
                <li><strong>Leczenie II rzutu:</strong> Fenytoina, Kwas walproinowy lub Lewetiracetam we wlewie.</li>
            </ul>
        `
    },
    {
        id: 15, title: "Zapalenie Opon Mózgowo-Rdzeniowych", category: "Choroby Zakaźne",
        content: `
            <p>Groźny stan zapalny tkanek otaczających mózg. Może być wirusowy (łagodniejszy) lub bakteryjny (piorunujący).</p>
            <h4>Kluczowe objawy:</h4>
            <ul>
                <li>Sztywność karku (pacjent nie może dotknąć brodą do klatki piersiowej).</li>
                <li>Silny ból głowy, wysoka gorączka i światłowstręt.</li>
                <li><strong>Ważne:</strong> Ciemnoczerwone plamki na skórze (wybroczyny), które nie bledną pod naciskiem szklanki, sugerują sepsę meningokokową!</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Objawy Oponowe i Płyn Mózgowo-Rdzeniowy (PMR)</h5>
            <ul>
                <li><strong>Objaw Kerniga i Brudzińskiego:</strong> Klasyczne testy fizykalne sprawdzające napięcie korzeni nerwowych przy zapaleniu opon.</li>
                <li><strong>Punkcja lędźwiowa:</strong> Pobranie PMR jest kluczowe. Bakteryjne ZOMR: PMR jest mętny, wysoka cytoza (neutrofile), niskie stężenie glukozy, wysokie białko.</li>
                <li><strong>Antybiotykoterapia:</strong> Musi być wdrożona natychmiast po pobraniu posiewów (np. Ceftriakson + Wankomycyna).</li>
            </ul>
        `
    },
    {
        id: 16, title: "Krwotok z Przewodu Pokarmowego", category: "Gastrologia",
        content: `
            <p>Utrata krwi z żołądka lub jelit może prowadzić do gwałtownego wstrząsu.</p>
            <h4>Objawy:</h4>
            <ul>
                <li><strong>Fusowate wymioty:</strong> Wyglądają jak fusy z kawy (krew ścięta przez kwas żołądkowy).</li>
                <li><strong>Smoliste stolce:</strong> Czarne, lśniące, o bardzo nieprzyjemnym zapachu (krew strawiona).</li>
                <li>Żywa krew w stolcu sugeruje krwawienie z dolnego odcinka (np. jelito grube).</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Skala Forresta i Żylaki Przełyku</h5>
            <ul>
                <li><strong>Żylaki przełyku:</strong> Częste u pacjentów z marskością wątroby. Pęknięcie to krwotok masywny, śmiertelność do 30%. Leczenie: opaskowanie endoskopowe lub sonda Sengstakena-Blakemore'a.</li>
                <li><strong>Skala Forresta:</strong> Klasyfikacja endoskopowa krwawienia z wrzodów (I - krwawienie czynne, II - ślady przebytego krwawienia, III - czyste dno wrzodu).</li>
                <li><strong>Farmakologia:</strong> Inhibitory Pompy Protonowej (IPP) w wysokich dawkach i.v. oraz Terlipresyna przy krwawieniu z żylaków.</li>
            </ul>
        `
    },
    {
        id: 17, title: "Ostre Zapalenie Trzustki (OZT)", category: "Chirurgia / Gastroenterologia",
        content: `
            <p>Proces "samostrawienia" trzustki przez jej własne enzymy. Najczęstsze przyczyny to kamica żółciowa i nadużycie alkoholu.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Bardzo silny, opasujący ból w nadbrzuszu, promieniujący do pleców.</li>
                <li>Nudności i uporczywe wymioty, które nie przynoszą ulgi.</li>
                <li>Wzdęcie brzucha.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Kryteria Ransona i Diagnostyka</h5>
            <ul>
                <li><strong>Laboratorium:</strong> Kluczowe jest oznaczenie aktywności <b>lipazy</b> (bardziej swoista) i <b>amylazy</b> we krwi (norma przekroczona min. 3-krotnie).</li>
                <li><strong>Objawy rzadkie:</strong> Objaw Cullena (siniak wokół pępka) i objaw Grey-Turnera (siniaki na bokach brzucha) świadczą o krwotocznym OZT.</li>
                <li><strong>Leczenie:</strong> Intensywna płynoterapia (nawet 5-10 litrów na dobę), agresywne leczenie przeciwbólowe (opioidy), żywienie dojelitowe.</li>
            </ul>
        `
    },
    {
        id: 18, title: "Zator Tętnicy Siatkówki (Udar Oka)", category: "Okulistyka",
        content: `
            <p>Nagła, bezbolesna utrata widzenia w jednym oku. To okulistyczny odpowiednik udaru mózgu.</p>
            <h4>Działanie:</h4>
            <p>Pacjent musi trafić do okulisty w ciągu 90-120 minut. Po tym czasie siatkówka obumiera nieodwracalnie.</p>
            <div class="warning-box">⚠️ Pierwsza pomoc: Można próbować masażu gałki ocznej przez zamkniętą powiekę (uciskaj i puszczaj), aby spróbować przesunąć zator dalej do mniejszego naczynia.</div>
        `,
        advancedDetails: `
            <h5>Objaw "Wisienki"</h5>
            <ul>
                <li><strong>Badanie dna oka:</strong> Charakterystyczny objaw czerwonej wisienki (plamka żółta pozostaje czerwona na tle bladej, niedokrwionej siatkówki).</li>
                <li><strong>Postępowanie:</strong> Obniżenie ciśnienia wewnątrzgałkowego (Acetazolamid, paracenteza przedniej komory oka) oraz próba rozszerzenia naczyń.</li>
            </ul>
        `
    },
    {
        id: 19, title: "Zatrucie Tlenkiem Węgla (Czad)", category: "Toksykologia",
        content: `
            <p>Tlenek węgla (CO) jest bezwonny i bezbarwny. Wiąże się z hemoglobiną 250 razy silniej niż tlen, blokując transport tlenu do tkanek.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Ból i zawroty głowy, nudności ("objawy grypopodobne").</li>
                <li>Różowawe zabarwienie skóry (tzw. "wiśniowa czerwień" - występuje rzadko, zwykle tuż przed śmiercią).</li>
                <li>Utrata przytomności i drgawki.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Karboksyhemoglobina (COHb)</h5>
            <ul>
                <li><strong>Mechanizm:</strong> Powstaje COHb, która przesuwa krzywą dysocjacji hemoglobiny w lewo, uniemożliwiając oddawanie tlenu w tkankach.</li>
                <li><strong>Leczenie:</strong> Tlenoterapia 100% przez maskę z rezerwuarem (skraca okres półtrwania COHb z 5h do ok. 1h). W ciężkich zatruciach - <b>komora hiperbaryczna (HBO)</b>.</li>
            </ul>
        `
    },
    {
        id: 20, title: "Odmrożenia", category: "Medycyna Ratunkowa / Środowiskowa",
        content: `
            <p>Uszkodzenie tkanek pod wpływem niskiej temperatury. Najczęściej dotyczy palców, nosa i uszu.</p>
            <h4>Co robić:</h4>
            <ul>
                <li><strong>NIE pocieraj odmrożonych miejsc śniegiem!</strong> Kryształki lodu niszczą uszkodzoną skórę.</li>
                <li>Zdejmij mokrą odzież i biżuterię (może dojść do obrzęku).</li>
                <li>Zanurz miejsce w letniej wodzie (ok. 37-40°C), NIE gorącej.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Klasyfikacja i Patofizjologia</h5>
            <ul>
                <li><strong>Stopnie:</strong> I - rumień, II - pęcherze z jasnym płynem, III - pęcherze z krwią i martwica powierzchowna, IV - martwica głęboka (do kości).</li>
                <li><strong>Zjawisko Huntingtona:</strong> Naprzemienne rozszerzanie i zwężanie naczyń w reakcji na zimno (próba ratowania tkanek przez organizm).</li>
                <li><strong>Leczenie szpitalne:</strong> Podawanie leków rozszerzających naczynia (Iloprost) oraz profilaktyka tężca.</li>
            </ul>
        `
    },
    {
        id: 21, title: "Zatarcie i Uraz Oka", category: "Okulistyka / Pierwsza Pomoc",
        content: `
            <p>Ciało obce w oku lub oparzenie chemiczne wymaga błyskawicznej reakcji.</p>
            <h4>Działanie:</h4>
            <ul>
                <li><strong>Oparzenie chemiczne:</strong> Płucz oko obficie bieżącą wodą lub solą fizjologiczną przez min. 15-20 minut!</li>
                <li><strong>Ciało obce wbite:</strong> NIE usuwaj go samemu. Załóż jałowy opatrunek na OBA OCZA (aby ograniczyć ruchy gałek ocznych) i jedź na SOR.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Erozja Rogówki i Próba Fluoresceinowa</h5>
            <ul>
                <li><strong>Fluoresceina:</strong> Barwnik, który w świetle lampy szczelinowej (filtr kobaltowy) świeci na zielono w miejscach, gdzie uszkodzony jest nabłonek rogówki.</li>
                <li><strong>Leczenie:</strong> Antybiotyki w kroplach (profilaktyka zakażenia) oraz maści przyspieszające gojenie.</li>
            </ul>
        `
    },
    {
        id: 22, title: "Odma Opłucnowa (Samoistna)", category: "Pulmonologia",
        content: `
            <p>Pęknięcie pęcherza rozedmowego na płucu powoduje ucieczkę powietrza do jamy opłucnej i zapadnięcie się płuca.</p>
            <h4>Kto choruje?</h4>
            <p>Często młodzi, wysocy i szczupli mężczyźni (tzw. typ leptosomatyczny) oraz palacze.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Nagły, kłujący ból po jednej stronie klatki piersiowej.</li>
                <li>Suchy kaszel i duszność.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Drenaż Opłucnej (Dren Monaldiego/Bülaua)</h5>
            <ul>
                <li><strong>Diagnostyka:</strong> RTG klatki piersiowej w pozycji stojącej - widoczna linia zapadniętego płuca i brak rysunku naczyniowego obwodowo.</li>
                <li><strong>Leczenie:</strong> Mała odma może się wchłonąć sama. Duża wymaga założenia drenu do klatki piersiowej podłączonego do układu ssącego (zastawka wodna).</li>
            </ul>
        `
    },
    {
        id: 23, title: "Zatrucie Paracetamolem", category: "Toksykologia",
        content: `
            <p>Paracetamol jest bezpieczny w dawkach terapeutycznych, ale w nadmiarze staje się zabójczą toksyną dla wątroby.</p>
            <div class="warning-box">⚠️ Uwaga: Dawka toksyczna dla dorosłego to już ok. 7.5 - 10g (15-20 tabletek). Objawy uszkodzenia wątroby pojawiają się dopiero po 2-3 dniach!</div>
            <h4>Pierwsze objawy:</h4>
            <p>Nudności, wymioty, ból w prawym podżebrzu (późno).</p>
        `,
        advancedDetails: `
            <h5>N-acetylocysteina (NAC) i NAPQI</h5>
            <ul>
                <li><strong>Mechanizm:</strong> Metabolit paracetamolu (NAPQI) wyczerpuje zapasy glutationu w wątrobie i niszczy hepatocyty.</li>
                <li><strong>Odtrutka:</strong> <b>N-acetylocysteina</b>. Najskuteczniejsza podana w ciągu 8 godzin od spożycia. NAC odbudowuje zasoby glutationu.</li>
                <li><strong>Nomogram Rumacka-Matthewa:</strong> Wykres pozwalający ocenić ryzyko uszkodzenia wątroby na podstawie stężenia paracetamolu we krwi względem czasu od zażycia.</li>
            </ul>
        `
    },
    {
        id: 24, title: "Przełom Tarczycowy", category: "Endokrynologia",
        content: `
            <p>Stan bezpośredniego zagrożenia życia w przebiegu nadczynności tarczycy. Organizm zostaje "zalany" hormonami tarczycy.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Ekstremalnie wysoka gorączka (nawet >40°C) bez infekcji.</li>
                <li>Bardzo szybkie tętno (tachykardia / migotanie przedsionków).</li>
                <li>Silne pobudzenie, delirium, a nawet śpiączka.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Skala Burcha i Wartofsky’ego</h5>
            <ul>
                <li><strong>Diagnostyka:</strong> Skala punktowa oceniająca ciężkość przełomu (gorączka, objawy z OUN, układu krążenia i pokarmowego).</li>
                <li><strong>Leczenie (Blokada 4-stopniowa):</strong> 
                    1. Tyreostatyki (Tiamazol), 2. Jod (płyn Lugola - hamuje uwalnianie hormonów), 3. Beta-blokery (Propranolol - hamuje objawy i konwersję T4 do T3), 4. Glikokortykosteroidy.
                </li>
            </ul>
        `
    },
    {
        id: 25, title: "Zapalenie Nagłośni", category: "Laryngologia / Pediatria",
        content: `
            <p>Bardzo niebezpieczna infekcja bakteryjna (często Haemophilus influenzae). Nagłośnia puchnie, całkowicie zamykając drogę oddechową w ciągu kilku godzin.</p>
            <h4>Objawy (Często u dzieci):</h4>
            <ul>
                <li>Nagły, bardzo silny ból gardła i trudności w połykaniu.</li>
                <li><strong>Ślinotok</strong> (dziecko nie może przełknąć własnej śliny).</li>
                <li>Pozycja "trójnogu" - siedzenie z pochyleniem do przodu i wyciągniętą szyją.</li>
            </ul>
            <div class="warning-box">⚠️ Nigdy nie używaj szpatułki do gardła u dziecka z podejrzeniem zapalenia nagłośni! Może to wywołać natychmiastowy skurcz krtani i zgon.</div>
        `,
        advancedDetails: `
            <h5>Objaw "Kciuka" w RTG</h5>
            <ul>
                <li><strong>RTG boczny szyi:</strong> Charakterystyczny obrzęk nagłośni przypominający kciuk (Thumb sign).</li>
                <li><strong>Postępowanie:</strong> Intubacja w warunkach sali operacyjnej przez najbardziej doświadczony zespół (ryzyko utraty dróg oddechowych), antybiotykoterapia dożylna (Cefalosporyny III generacji).</li>
            </ul>
        `
    },
    {
        id: 26, title: "Odma Podskórna", category: "Chirurgia / Traumatologia",
        content: `
            <p>Obecność powietrza w tkance podskórnej. Często towarzyszy urazom klatki piersiowej lub pęknięciu dróg oddechowych.</p>
            <h4>Jak to rozpoznać?</h4>
            <p>Podczas dotykania skóry czuć charakterystyczne "trzeszczenie" lub "chrupanie", przypominające dotykanie folii bąbelkowej lub chodzenie po mroźnym śniegu.</p>
        `,
        advancedDetails: `
            <h5>Pneumomediastinum</h5>
            <ul>
                <li><strong>Mechanizm:</strong> Powietrze może przedostawać się z pękniętych pęcherzyków płucnych wzdłuż naczyń do śródpiersia, a stamtąd na szyję i twarz.</li>
                <li><strong>Znaczenie kliniczne:</strong> Sama odma podskórna zazwyczaj nie jest groźna i wchłania się sama, ale jest <b>ALARMEM</b>, że doszło do uszkodzenia płuca (odma opłucnowa) lub przełyku!</li>
            </ul>
        `
    },
    {
        id: 27, title: "Małopłytkowość", category: "Hematologia",
        content: `
            <p>Zbyt mała liczba płytek krwi (trombocytów), co uniemożliwia prawidłowe krzepnięcie.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Drobne, czerwone kropki na skórze (wybroczyny), szczególnie na podudziach.</li>
                <li>Częste krwawienia z nosa i dziąseł.</li>
                <li>Obfite miesiączki.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>ITP i TTP (Stany ostre)</h5>
            <ul>
                <li><strong>Samoistna plamica małopłytkowa (ITP):</strong> Autoprzeciwciała niszczą własne płytki. Leczenie: sterydy, immunoglobuliny (IVIG).</li>
                <li><strong>Zakrzepowa plamica małopłytkowa (TTP):</strong> Stan nagły! Niedobór enzymu ADAMTS13 prowadzi do powstawania mikrozakrzepów niszczących narządy. Objawy: małopłytkowość, niedokrwistość hemolityczna, objawy neurologiczne i gorączka. Leczenie: plazmafereza (wymiana osocza).</li>
            </ul>
        `
    },
    {
        id: 28, title: "Zatrucie Muchomorem Sromotnikowym", category: "Toksykologia",
        content: `
            <p>Najbardziej zdradliwe zatrucie pokarmowe. Muchomor sromotnikowy (Amanita phalloides) smakuje dobrze i nie powoduje objawów natychmiast, co usypia czujność ofiary.</p>
            <h4>Przebieg (Trójfazowy):</h4>
            <ul>
                <li><strong>Faza utajenia (6-24h):</strong> Pacjent czuje się świetnie.</li>
                <li><strong>Faza żołądkowo-jelitowa:</strong> Gwałtowne wymioty i "choleryczna" biegunka prowadząca do odwodnienia.</li>
                <li><strong>Pozorna poprawa:</strong> Objawy mijają na jeden dzień.</li>
                <li><strong>Faza wątrobowa:</strong> Piorunujące zniszczenie wątroby, żółtaczka i zgon.</li>
            </ul>
            <div class="warning-box">⚠️ Zasada: Każde podejrzenie zatrucia grzybami blaszkowymi wymaga natychmiastowego płukania żołądka w szpitalu i zabezpieczenia popłuczyn!</div>
        `,
        advancedDetails: `
            <h5>Amatoksyny i Sylibinina</h5>
            <ul>
                <li><strong>Mechanizm:</strong> Alfa-amanityna blokuje polimerazę RNA II, co całkowicie zatrzymuje syntezę białek w komórkach (hepatocytach).</li>
                <li><strong>Leczenie:</strong> Podawanie dożylne <b>sylibininy</b> (Legalon SIL) oraz penicyliny G (blokują transport toksyn do wnętrza wątroby).</li>
                <li><strong>Ostateczność:</strong> W przypadku niewydolności wątroby (ALAT/ASPAT > 2000) jedynym ratunkiem jest pilny przeszczep (transplantacja).</li>
            </ul>
        `
    },
    {
        id: 29, title: "Obrzęk Płuc", category: "Kardiologia / Stany Nagłe",
        content: `
            <p>Stan, w którym pęcherzyki płucne zamiast powietrzem, wypełniają się płynem przesiękowym. Pacjent dosłownie "tonie na suchym lądzie".</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Gwałtowna duszność (ortopnoe) - pacjent musi siedzieć, by oddychać.</li>
                <li>Słyszalne z oddali "bulgotanie" w klatce piersiowej.</li>
                <li>Odkrztuszanie różowej, pienistej wydzieliny.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Niewydolność Lewokomorowa</h5>
            <ul>
                <li><strong>Patomechanizm:</strong> Nagły wzrost ciśnienia w krążeniu małym (np. przez zawał lub przełom nadciśnieniowy) wypycha osocze z naczyń do pęcherzyków.</li>
                <li><strong>Leczenie (L-M-N-O):</strong> 
                    <br><b>L</b>asix (Furosemid): 20-40mg i.v. (odwadnia płuca).
                    <br><b>M</b>orfina: Zmniejsza lęk i rozszerza naczynia żylne.
                    <br><b>N</b>itrogliceryna: Redukuje obciążenie serca.
                    <br><b>O</b>ksygenoterapia: Często wymagane wsparcie ciśnieniowe (CPAP/NIV).
                </li>
            </ul>
        `
    },
    {
        id: 30, title: "Sepsa (Posocznica)", category: "Choroby Zakaźne / OIT",
        content: `
            <p>Sepsa to nie choroba, a dysfunkcja narządów wywołana nieprawidłową reakcją organizmu na zakażenie. To "wojna totalna" wewnątrz ciała.</p>
            <h4>Czerwone flagi (Skala qSOFA):</h4>
            <ul>
                <li>Zaburzenia świadomości (splątanie).</li>
                <li>Skurczowe ciśnienie krwi poniżej 100 mmHg.</li>
                <li>Częstość oddechów powyżej 22 na minutę.</li>
            </ul>
            <div class="warning-box">⚠️ Liczy się każda godzina. Opóźnienie podania antybiotyku o godzinę zwiększa ryzyko zgonu o ok. 8%.</div>
        `,
        advancedDetails: `
            <h5>Wstrząs Septyczny i Mleczany</h5>
            <ul>
                <li><strong>Mleczany:</strong> Wysoki poziom kwasu mlekowego we krwi (>2 mmol/l) świadczy o niedotlenieniu tkanek.</li>
                <li><strong>Pakiet "Surviving Sepsis":</strong> Pobranie posiewów, podanie antybiotyku o szerokim spektrum i agresywna płynoterapia (30ml/kg masy ciała krystaloidów).</li>
                <li><strong>Wazopresory:</strong> Jeśli ciśnienie nie rośnie po płynach, podaje się Noradrenalinę w ciągłym wlewie.</li>
            </ul>
        `
    },
    {
        id: 31, title: "Majaczenie Alkoholowe (Delirium Tremens)", category: "Psychiatria",
        content: `
            <p>Najcięższa postać alkoholowego zespołu odstawiennego. Występuje zwykle 48-72h po zaprzestaniu picia.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Silne drżenie mięśniowe.</li>
                <li>Przerażające halucynacje (często wzrokowe - np. widzenie robaków, małych zwierząt).</li>
                <li>Agresja, lęk, całkowita dezorientacja.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Burza Wegetatywna</h5>
            <ul>
                <li><strong>Zagrożenie:</strong> Śmiertelność w nieleczonym delirium sięga 20% (z powodu zaburzeń rytmu serca i hipertermii).</li>
                <li><strong>Leczenie:</strong> Bardzo wysokie dawki benzodiazepin (np. Diazepam) pod kontrolą lekarza oraz suplementacja witaminy B1 (Tiamina), by zapobiec Encefalopatii Wernickego.</li>
            </ul>
        `
    },
    {
        id: 32, title: "Udar Cieplny", category: "Medycyna Ratunkowa",
        content: `
            <p>Całkowite załamanie termoregulacji. Temperatura ciała przekracza 40°C, co prowadzi do "ścinania się" białek w organizmie.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Skóra jest gorąca i sucha (brak pocenia się!).</li>
                <li>Ból głowy, nudności, utrata przytomności.</li>
            </ul>
            <div class="warning-box">⚠️ Działanie: Przenieś w cień, chłodź agresywnie (zimne okłady w pachwiny i pachy, spryskiwanie wodą i wachlowanie).</div>
        `,
        advancedDetails: `
            <h5>Rhabdomyoliza po udarze</h5>
            <ul>
                <li><strong>Powikłanie:</strong> Przegrzanie mięśni prowadzi do ich rozpadu. Produkty rozpadu (mioglobina) zatykają nerki, powodując ich ostrą niewydolność.</li>
                <li><strong>Ciekawostka:</strong> Istnieje też udar wysiłkowy (u sportowców), gdzie mechanizm jest napędzany produkcją ciepła przez mięśnie przy dużej wilgotności powietrza.</li>
            </ul>
        `
    },
    {
        id: 33, title: "Astma - Stan Astmatyczny", category: "Pulmonologia",
        content: `
            <p>Ciężki atak astmy, który nie ustępuje po podaniu standardowych leków rozszerzających oskrzela (niebieski inhalator).</p>
            <h4>Objawy alarmowe:</h4>
            <ul>
                <li>Pacjent mówi pojedynczymi słowami (brak tchu na całe zdanie).</li>
                <li>"Cicha klatka piersiowa" - stan tak ciężki, że przepływ powietrza jest zbyt słaby, by wywołać świsty (bardzo groźne!).</li>
                <li>Sina skóra (sinica).</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Farmakoterapia Ratunkowa</h5>
            <ul>
                <li><strong>Leki:</strong> Salbutamol w nebulizacji, Glikokortykosteroidy i.v. (Hydrokortyzon).</li>
                <li><strong>Siarczan Magnezu ($MgSO_4$):</strong> Podawany dożylnie działa jako silny lek rozkurczający mięśniówkę gładką oskrzeli w przypadkach opornych.</li>
            </ul>
        `
    },
    {
        id: 34, title: "Guz Chromochłonny (Przełom)", category: "Endokrynologia",
        content: `
            <p>Rzadki guz nadnerczy, który wyrzuca do krwi ogromne ilości adrenaliny i noradrenaliny w sposób niekontrolowany.</p>
            <h4>Triada objawów (napadowa):</h4>
            <ul>
                <li>Nagły, potworny ból głowy.</li>
                <li>Kołatanie serca (tachykardia).</li>
                <li>Zlewne poty i skok ciśnienia (np. do 250/130 mmHg).</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Katecholaminy i Diagnostyka</h5>
            <ul>
                <li><strong>Badanie:</strong> Oznaczanie metanefryn w dobowej zbiórce moczu.</li>
                <li><strong>Zasada chirurgiczna:</strong> Przed operacją usunięcia guza NALEŻY najpierw zablokować receptory alfa (np. Fenoksybenzamina), a dopiero potem beta-blokery. Odwrotna kolejność może zabić pacjenta przez niekontrolowany skurcz naczyń!</li>
            </ul>
        `
    },
    {
        id: 35, title: "Rzucawka Porodowa (Eklampsja)", category: "Ginekologia i Położnictwo",
        content: `
            <p>Stan zagrażający życiu kobiety w ciąży i dziecka, objawiający się napadami drgawek (podobnych do padaczki), niebędących wynikiem chorób mózgu.</p>
            <h4>Objawy zwiastunowe:</h4>
            <ul>
                <li>Bardzo wysokie ciśnienie krwi po 20. tygodniu ciąży.</li>
                <li>Białkomocz i silne obrzęki twarzy/dłoni.</li>
                <li>"Mroczki" przed oczami i ból w nadbrzuszu.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Zespół HELLP i Siarczan Magnezu</h5>
            <ul>
                <li><strong>HELLP:</strong> Ciężkie powikłanie (Hemolysis, Elevated Liver enzymes, Low Platelets) - rozpad krwinek, uszkodzenie wątroby i brak płytek.</li>
                <li><strong>Leczenie:</strong> Leiem z wyboru w zapobieganiu i leczeniu drgawek eklamptycznych jest <b>Siarczan Magnezu</b> (nie leki przeciwpadaczkowe!). Jedynym definitywnym leczeniem jest zakończenie ciąży (poród).</li>
            </ul>
        `
    },
    {
        id: 36, title: "Krwotok z Nosa (Epistaxis)", category: "Laryngologia",
        content: `
            <p>Częsty problem, zazwyczaj niegroźny, ale u osób z nadciśnieniem lub zaburzeniami krzepnięcia może być masywny.</p>
            <h4>Błąd kardynalny:</h4>
            <p><strong>Nigdy nie odchylaj głowy do tyłu!</strong> Powoduje to spływanie krwi do gardła, co prowadzi do zachłyśnięcia lub wymiotów.</p>
            <h4>Prawidłowe działanie:</h4>
            <ul>
                <li>Usiądź prosto, pochyl głowę lekko DO PRZODU.</li>
                <li>Uciśnij skrzydełka nosa kciukiem i palcem wskazującym na min. 10 minut.</li>
                <li>Połóż zimny okład na kark lub nasadę nosa.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Splot Kiesselbacha i Tamponada</h5>
            <ul>
                <li><strong>Miejsce:</strong> 90% krwawień pochodzi ze splotu Kiesselbacha w przedniej części przegrody nosa.</li>
                <li><strong>Tamponada przednia:</strong> Założenie do nosa specjalnych gąbek lub setonów gazowych przez lekarza, jeśli ucisk nie pomaga.</li>
                <li><strong>Krwawienie tylne:</strong> Znacznie groźniejsze, krew spływa do gardła mimo ucisku nosa. Wymaga tamponady tylnej (Bellocqa) lub cewnika Foleya.</li>
            </ul>
        `
    },
    {
        id: 37, title: "Zatrucie Cyjankami", category: "Toksykologia / Ratownictwo",
        content: `
            <p>Cyjanowodór (np. w dymie z pożarów tworzyw sztucznych) blokuje oddychanie na poziomie komórkowym. Organizm ma tlen, ale nie potrafi go użyć.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Zapach gorzkich migdałów z ust (wyczuwalny tylko przez niektóre osoby).</li>
                <li>Gwałtowna duszność mimo braku niedrożności dróg oddechowych.</li>
                <li>Jasnoczerwona skóra (krew jest nasycona tlenem, którego komórki nie pobrały).</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Hydroksykobalamina (Cyanokit)</h5>
            <ul>
                <li><strong>Mechanizm:</strong> Cyjanki blokują oksydazę cytochromową w mitochondriach.</li>
                <li><strong>Odtrutka:</strong> <b>Hydroksykobalamina</b> (witamina B12a). Wiąże cyjanki, tworząc bezpieczną cyjanokobalaminę, która jest wydalana z moczem (mocz może stać się intensywnie czerwony).</li>
            </ul>
        `
    },
    {
        id: 38, title: "Zapalenie Ucha Środkowego", category: "Pediatria / Laryngologia",
        content: `
            <p>Bardzo bolesna infekcja, najczęściej u dzieci z powodu innej budowy trąbki Eustachiusza (krótka i pozioma).</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Pulsujący ból ucha, nasilający się w nocy i w pozycji leżącej.</li>
                <li>Gorączka, pogorszenie słuchu.</li>
                <li>Małe dzieci mogą być płaczliwe i ciągnąć się za małżowinę uszną.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Paracenteza i Perforacja</h5>
            <ul>
                <li><strong>Perforacja:</strong> Jeśli ciśnienie ropy jest zbyt duże, błona bębenkowa może pęknąć (wyciek z ucha). Przynosi to natychmiastową ulgę w bólu.</li>
                <li><strong>Leczenie:</strong> Często wystarczają leki przeciwbólowe (strategia "uważnego czekania"). Antybiotyk podaje się, gdy objawy nie mijają po 48-72h lub u dzieci poniżej 6. miesiąca życia.</li>
            </ul>
        `
    },
    {
        id: 39, title: "Zespół Krupu (Podgłośniowe Zapalenie Krtani)", category: "Pediatria",
        content: `
            <p>Infekcja wirusowa powodująca obrzęk krtani u małych dzieci (6 msc. - 5 lat).</p>
            <h4>Objawy:</h4>
            <ul>
                <li><strong>Szczekający kaszel</strong> (brzmi jak foka).</li>
                <li>Świst przy wdechu (stridor).</li>
                <li>Chrypka.</li>
            </ul>
            <div class="warning-box">⚠️ Pierwsza pomoc: Wystawienie dziecka na zimne, rześkie powietrze (np. przed otwarte okno lub lodówkę) obkurcza naczynia i zmniejsza obrzęk.</div>
        `,
        advancedDetails: `
            <h5>Skala Westleya</h5>
            <ul>
                <li><strong>Leczenie:</strong> Podstawą są sterydy (Deksametazon p.o./i.m.). W ciężkich stanach nebulizacja z <b>adrenaliny</b>, która działa obkurczająco na śluzówkę krtani (efekt jest szybki, ale krótkotrwały).</li>
            </ul>
        `
    },
    {
        id: 40, title: "Skręcenie Stawu Skokowego", category: "Ortopedia / Traumatologia",
        content: `
            <p>Uszkodzenie więzadeł (najczęściej bocznych) na skutek "podwinięcia" stopy.</p>
            <h4>Protokół R.I.C.E. (Pierwsze 48h):</h4>
            <ul>
                <li><strong>R (Rest):</strong> Odpoczynek, nie obciążaj nogi.</li>
                <li><strong>I (Ice):</strong> Chłodzenie (15-20 min co kilka godzin).</li>
                <li><strong>C (Compression):</strong> Ucisk (bandaż elastyczny), by ograniczyć obrzęk.</li>
                <li><strong>E (Elevation):</strong> Uniesienie nogi powyżej poziomu serca.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Reguły Ottawskie</h5>
            <ul>
                <li><strong>Kiedy RTG?</strong> Według reguł ottawskich zdjęcie rentgenowskie jest konieczne tylko, gdy występuje ból w okolicy kostek ORAZ: tkliwość dotykowa krawędzi kostek lub niemożność wykonania 4 kroków bezpośrednio po urazie.</li>
            </ul>
        `
    },
    {
        id: 41, title: "Niedrożność Jelit (Ileus)", category: "Chirurgia",
        content: `
            <p>Zatrzymanie pasażu treści pokarmowej przez jelita. Może być mechaniczne (np. guz, zrosty) lub porażenne (brak pracy jelit).</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Brak oddawania stolca i gazów.</li>
                <li>Silny, kolkowy ból brzucha i wzdęcie.</li>
                <li>Wymioty (w późnym stadium mogą mieć zapach kału).</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Poziomy Płynów i Operacja</h5>
            <ul>
                <li><strong>Diagnostyka:</strong> RTG jamy brzusznej w pozycji stojącej pokazuje tzw. "poziomy płynów" (bańki gazu nad płynną treścią w pętlach jelit).</li>
                <li><strong>Leczenie:</strong> Założenie sondy do żołądka ("odbarczenie") i intensywne nawadnianie. Niedrożność mechaniczna zazwyczaj wymaga pilnej operacji.</li>
            </ul>
        `
    },
    {
        id: 42, title: "Zakrzepica Żył Głębokich (ZŻG)", category: "Angiologia",
        content: `
            <p>Powstanie skrzepu w żyłach głębokich, najczęściej podudzia lub uda.</p>
            <h4>Objawy:</h4>
            <ul>
                <li>Jednostronny obrzęk nogi (np. jedna łydka jest grubsza o >3cm od drugiej).</li>
                <li>Ból łydki przy chodzeniu i tkliwość przy ucisku.</li>
                <li>Ocieplenie i zaczerwienienie skóry nogi.</li>
            </ul>
            <div class="warning-box">⚠️ Ryzyko: Największym zagrożeniem jest oderwanie się skrzepu i wywołanie Zatorowości Płucnej (patrz przypadek nr 13).</div>
        `,
        advancedDetails: `
            <h5>Objaw Homansa</h5>
            <ul>
                <li><strong>Test:</strong> Ból w łydce przy gwałtownym zgięciu grzbietowym stopy (ma niską czułość, ale jest klasycznym objawem medycznym).</li>
                <li><strong>Leczenie:</strong> Leki przeciwkrzepliwe (Heparyna, warfaryna lub nowe antykoagulanty) oraz pończochy uciskowe po opanowaniu stanu ostrego.</li>
            </ul>
        `
    },
    {
        id: 43, 
        title: "Oparzenia Słoneczne (Erythema Solare)", 
        category: "Dermatologia / Pierwsza Pomoc",
        content: `
            <p>Oparzenie słoneczne to ostra reakcja zapalna skóry na nadmierną ekspozycję na promieniowanie ultrafioletowe (głównie UVB). Jest to proces niszczenia komórek naskórka, który prowadzi do rozszerzenia naczyń krwionośnych i obrzęku.</p>
            
            <h4>Jak się pojawia i przebiega?</h4>
            <ul>
                <li><strong>Faza utajenia:</strong> Rumień nie pojawia się natychmiast. Pierwsze objawy pieczenia występują zazwyczaj po 2-6 godzinach od ekspozycji.</li>
                <li><strong>Szczyt objawów:</strong> Największe nasilenie bólu i czerwieni występuje po 12-24 godzinach.</li>
                <li><strong>Złuszczanie:</strong> Po kilku dniach martwy naskórek oddziela się od warstwy regenerującej (charakterystyczne "schodzenie skóry").</li>
            </ul>

            <h4>Jak pomóc? (Protokół łagodzenia):</h4>
            <ul>
                <li><strong>Schładzanie:</strong> Letnie (nie lodowate!) prysznice trwające 10-15 minut. Nagłe ochłodzenie lodem może wywołać szok termiczny.</li>
                <li><strong>Nawilżanie:</strong> Preparaty z <b>D-pantenolem</b> (prowitamina B5) lub <b>alantoiną</b>. Wspomagają one regenerację bariery lipidowej.</li>
                <li><strong>Nawadnianie:</strong> Oparzenie ściąga płyny do skóry – pij o 1 litr wody więcej niż zwykle.</li>
            </ul>
            <div class="warning-box">⚠️ Nigdy nie przebijaj pęcherzy! Płyn surowiczy wewnątrz nich stanowi naturalny, jałowy opatrunek. Przebicie otwiera drogę do zakażenia (np. gronkowcem).</div>
        `,
        advancedDetails: `
            <h5>Patofizjologia molekularna oparzeń</h5>
            <ul>
                <li><strong>Fotoliza DNA:</strong> Promieniowanie UVB powoduje powstawanie dimerów pirymidynowych w DNA keratynocytów. Jeśli uszkodzenie jest zbyt duże, komórka wchodzi na drogę apoptozy (programowanej śmierci).</li>
                <li><strong>Kaskada zapalna:</strong> Uszkodzone komórki uwalniają mediatory: histaminę, prostaglandyny i cytokiny. To one powodują rozszerzenie naczyń (rumień) i pobudzenie zakończeń nerwowych (ból).</li>
                <li><strong>Fototypy skóry (Skala Fitzpatricka):</strong> Osoby z I i II fototypem (jasna karnacja, niebieskie oczy) mają bardzo małą ilość melaniny, przez co ich naturalna ochrona przed fotolizą praktycznie nie istnieje.</li>
            </ul>
        `
    },
    {
        id: 44, 
        title: "Zakażenie Układu Moczowego (ZUM)", 
        category: "Urologia / Interna",
        content: `
            <p>ZUM to obecność drobnoustrojów w drogach moczowych, które w warunkach fizjologicznych są jałowe. Dotyczy zazwyczaj pęcherza moczowego (cystitis), ale może objąć również nerki.</p>
            
            <h4>Dlaczego powstaje i kogo dotyczy?</h4>
            <p>Kobiety chorują znacznie częściej (nawet 50-krotnie) ze względu na krótką cewkę moczową (ok. 4 cm), co ułatwia bakteriom z okolicy odbytu kolonizację pęcherza.</p>

            <h4>Szczegółowe objawy:</h4>
            <ul>
                <li><strong>Dysuria:</strong> Ból, pieczenie lub szczypanie w cewce podczas mikcji.</li>
                <li><strong>Pollakisuria:</strong> Częste oddawanie moczu w bardzo małych ilościach.</li>
                <li><strong>Parcie naglące:</strong> Uczucie silnej potrzeby oddania moczu, nawet gdy pęcherz jest pusty.</li>
                <li><strong>Nykturia:</strong> Konieczność wstawania w nocy.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Mikrobiologia i Diagnostyka Różnicowa</h5>
            <ul>
                <li><strong>Etiologia:</strong> W 80-90% przypadków winna jest <i>Escherichia coli</i> (laseczka kałowa), która posiada tzw. fimbrie (wypustki), pozwalające jej "przyczepić się" do nabłonka dróg moczowych (urotelium).</li>
                <li><strong>Analiza moczu:</strong> Szukamy obecności <b>azotynów</b> (produkowanych przez bakterie) oraz <b>esterazy leukocytów</b> (świadczącej o stanie zapalnym).</li>
                <li><strong>Ostre odmiedniczkowe zapalenie nerek (OOZN):</strong> Stan zaawansowany. Objawia się bólem w okolicy lędźwiowej (dodatni objaw Goldflama – ból przy wstrząsaniu okolicy nerek) oraz wysoką gorączką z dreszczami. Wymaga agresywnej antybiotykoterapii (np. fluorochinolony).</li>
                <li><strong>Profilaktyka:</strong> Żurawina (utrudnia przyleganie bakterii), duża podaż płynów i dbałość o higienę po stosunku płciowym.</li>
            </ul>
        `
    },
    {
        id: 45, 
        title: "Zatrucie Pokarmowe i Nieżyt Żołądkowo-Jelitowy", 
        category: "Gastroenterologia",
        content: `
            <p>Popularnie zwane "grypą żołądkową", choć z wirusem grypy nie ma nic wspólnego. To stan zapalny błony śluzowej przewodu pokarmowego wywołany toksynami bakteryjnymi lub wirusami.</p>
            
            <h4>Jak dochodzi do zakażenia?</h4>
            <p>Głównie drogą fekalno-oralną ("choroba brudnych rąk") lub przez spożycie skażonej żywności (np. surowe jaja, niedosmażone mięso, brudne owoce).</p>

            <h4>Główne symptomy i ich znaczenie:</h4>
            <ul>
                <li><strong>Wymioty:</strong> Obronna reakcja organizmu mająca na celu usunięcie patogenu z żołądka.</li>
                <li><strong>Biegunka:</strong> Przyspieszona perystaltyka, by "wypłukać" toksyny z jelit.</li>
                <li><strong>Bolesne skurcze brzucha:</strong> Wynik gwałtownych ruchów robaczkowych jelit.</li>
            </ul>

            <h4>Precyzyjna pomoc:</h4>
            <ol>
                <li><strong>Nawadnianie (Kluczowe!):</strong> Nie sama woda, a <b>Doustne Płyny Nawadniające (DPN)</b>, które zawierają glukozę i sól w proporcjach ułatwiających wchłanianie wody w jelicie.</li>
                <li><strong>Dieta:</strong> Przez pierwsze godziny tylko płyny. Potem dieta BRAT (Banany, Ryż, Mus jabłkowy, Tosty).</li>
            </ol>
        `,
        advancedDetails: `
            <h5>Patomechanizm i Toksyny</h5>
            <ul>
                <li><strong>Enterotoksyny:</strong> Np. toksyna gronkowcowa działa bezpośrednio na ośrodek wymiotny w mózgu. Objawy pojawiają się bardzo szybko (już po 2-4h).</li>
                <li><strong>Mechanizm sekrecyjny:</strong> Patogeny (np. Vibrio cholerae czy niektóre szczepy E. coli) zmuszają komórki jelit do aktywnego wyrzucania chlorków i wody do światła jelita, co powoduje wodnistą biegunkę.</li>
                <li><strong>Leki przeciwbiegunkowe:</strong> Loperamid (np. Stoperan) można stosować u dorosłych przy biegunce wodnistej, ale <b>jest przeciwwskazany</b> przy gorączce i krwi w stolcu (może zatrzymać toksyny wewnątrz organizmu, pogarszając stan).</li>
            </ul>
        `
    },
    {
        id: 46, 
        title: "Rwa Kulszowa (Ischialgia)", 
        category: "Ortopedia / Neurologia",
        content: `
            <p>Rwa kulszowa to zespół objawów wynikających z ucisku na największy nerw w ciele człowieka – nerw kulszowy. Najczęściej jest to efekt dyskopatii w odcinku lędźwiowo-krzyżowym kręgosłupa.</p>
            
            <h4>Jak rozpoznać ten konkretny ból?</h4>
            <ul>
                <li><strong>Promieniowanie:</strong> Ból nie ogranicza się do pleców. "Strzela" przez pośladek, tylną stronę uda, aż do łydki lub stopy.</li>
                <li><strong>Charakter:</strong> Często opisywany jako rażenie prądem, pieczenie lub silne kłucie.</li>
                <li><strong>Nasilenie:</strong> Ból wzmaga się przy kaszlu, kichaniu (wzrost ciśnienia płynu mózgowo-rdzeniowego) lub próbie wyprostowania nogi.</li>
            </ul>
            <div class="warning-box">⚠️ <strong>Alarm medyczny:</strong> Jeśli nie czujesz oddawania moczu, masz "zdrętwiałe krocze" lub nie możesz stanąć na pięcie/palcach – jedź natychmiast na SOR. To może być zespół ogona końskiego!</div>
        `,
        advancedDetails: `
            <h5>Anatomia i Testy Kliniczne</h5>
            <ul>
                <li><strong>Test Lasègue'a:</strong> Klasyczny test diagnostyczny. Pacjent leży na plecach, lekarz powoli unosi jego wyprostowaną nogę. Jeśli ból promieniujący pojawia się pod kątem 30-70 stopni, test jest dodatni.</li>
                <li><strong>Patogeneza:</strong> Krążek międzykręgowy (dysk) składa się z pierścienia włóknistego i galaretowatego jądra miażdżystego. Gdy pierścień pęka, jądro wysuwa się i uciska korzenie nerwowe (L4, L5 lub S1).</li>
                <li><strong>Leczenie:</strong> 90% przypadków leczy się zachowawczo: NLPZ (np. diklofenak), leki rozluźniające mięśnie i wczesna fizjoterapia. Unika się długotrwałego leżenia w łóżku, które osłabia mięśnie stabilizujące kręgosłupa.</li>
            </ul>
        `
    },
    {
        id: 50, 
        title: "Odwodnienie (Dehydratio)", 
        category: "Pediatria / Geriatria / Fizjologia",
        content: `
            <p>Odwodnienie to stan, w którym ubytek wody i elektrolitów przekracza ich podaż. Jest to stan krytyczny, ponieważ woda jest środowiskiem dla wszystkich reakcji biochemicznych w komórkach.</p>
            
            <h4>Stopnie odwodnienia i objawy:</h4>
            <ul>
                <li><strong>Lekkie (do 5% m.c.):</strong> Zwiększone pragnienie, suchość w ustach.</li>
                <li><strong>Umiarkowane (5-10% m.c.):</strong> Zapadnięte gałki oczne, brak łez podczas płaczu, suchość śluzówek, ciemny i gęsty mocz (lub jego brak).</li>
                <li><strong>Ciężkie (>10% m.c.):</strong> Zaburzenia świadomości, wiotkość skóry (fałd skórny nie wraca na miejsce), drastyczny spadek ciśnienia.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Typy odwodnienia i Biochemia</h5>
            
            <ul>
                <li><strong>Izotoniczne:</strong> Równomierna utrata wody i sodu (np. przy biegunce).</li>
                <li><strong>Hipertoniczne:</strong> Większa utrata wody niż sodu (np. przy gorączce, potach). Komórki mózgowe kurczą się, co wywołuje silne objawy neurologiczne.</li>
                <li><strong>Hipotoniczne:</strong> Większa utrata sodu (np. przy wymiotach i piciu samej wody bez soli). Komórki puchną, co grozi obrzękiem mózgu.</li>
                <li><strong>Leczenie:</strong> U dzieci i starszych najskuteczniejsza jest rehydratacja doustna małymi porcjami (5 ml co 5 minut). Przy ciężkim odwodnieniu – wlewy kroplowe z krystaloidów (Sól fizjologiczna, Płyn Ringera).</li>
            </ul>
        `
    },
{
        id: 51, 
        title: "Katar Sienny i Alergiczny Nieżyt Nosa", 
        category: "Alergologia / Podstawy",
        content: `
            <p>Alergiczny nieżyt nosa to przewlekły stan zapalny błony śluzowej nosa wywołany nieprawidłową reakcją układu odpornościowego na alergeny środowiskowe (pyłki, roztocza, sierść).</p>
            <h4>Jak rozpoznać alergię (Manifestacja):</h4>
            <ul>
                <li><strong>Salwy kichania:</strong> Nagłe, seryjne kichanie (nawet kilkanaście razy pod rząd).</li>
                <li><strong>Wodnisty wyciek:</strong> Bezbarwna, rzadka wydzielina z nosa (tzw. katar jak woda).</li>
                <li><strong>Objawy oczne:</strong> Świąd, pieczenie, zaczerwienienie spojówek oraz intensywne łzawienie.</li>
                <li><strong>"Salat alergiczny":</strong> Charakterystyczne pocieranie czubka nosa dłonią od dołu do góry, co u dzieci może prowadzić do powstania poziomej bruzdy na nosie.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Mechanizm Nadwrażliwości Typu I</h5>
            <ul>
                <li><strong>Kaskada IgE:</strong> Alergen wiąże się z przeciwciałami klasy IgE na powierzchni komórek tucznych (mastocytów). Powoduje to ich degranulację i wyrzut <b>histaminy</b>.</li>
                <li><strong>Fazy reakcji:</strong> Faza wczesna (minuty) odpowiada za kichanie i katar. Faza późna (godziny) odpowiada za obrzęk śluzówki i blokadę nosa.</li>
                <li><strong>Farmakoterapia:</strong> Leki przeciwhistaminowe II generacji (np. Cetyryzyna, Loratadyna) oraz glikokortykosteroidy donosowe (najskuteczniejsze w leczeniu przewlekłym).</li>
            </ul>
        `
    },
    {
        id: 52, 
        title: "Wszawica Głowy (Pediculosis)", 
        category: "Pediatria / Dermatologia",
        content: `
            <p>Wszawica to choroba pasożytnicza wywołana przez wesz głowową. Jest to problem powszechny w skupiskach dziecięcych, przenoszony przez bezpośredni kontakt głowy z głową.</p>
            <h4>Jak wykryć pasożyty:</h4>
            <ul>
                <li><strong>Uporczywy świąd:</strong> Najsilniejszy w okolicy potylicznej i za uszami (tam wszy gryzą najchętniej).</li>
                <li><strong>Gnidy:</strong> Małe, biało-szare jajeczka mocno przyklejone do nasady włosa (w przeciwieństwie do łupieżu, nie dają się łatwo strzepnąć).</li>
                <li><strong>Zmiany skórne:</strong> Drobne grudki i zaczerwienienia, często z nadkażeniem bakteryjnym od drapania.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Biologia pasożyta i nowoczesne leczenie</h5>
            <ul>
                <li><strong>Mechanizm żerowania:</strong> Wesz przebija skórę i wstrzykuje ślinę zapobiegającą krzepnięciu krwi, co wywołuje reakcję alergiczną i świąd.</li>
                <li><strong>Dimetikon i Cyklometikon:</strong> Nowoczesne preparaty oparte na silikonach. Nie działają chemicznie (toksycznie), lecz fizycznie – szczelnie oblepiają wesz i jej układ oddechowy, powodując uduszenie pasożyta.</li>
                <li><strong>Zasada 7-10 dni:</strong> Kurację należy powtórzyć po tygodniu, aby wyeliminować osobniki, które wykluły się z gnid ocalałych po pierwszym zabiegu.</li>
            </ul>
        `
    },
    {
        id: 53, 
        title: "Tętniak Rozwarstwiający Aorty", 
        category: "Kardiochirurgia / Stany Nagłe",
        content: `
            <p>Krytyczny stan, w którym krew pod wysokim ciśnieniem rozdziela warstwy ściany aorty, tworząc kanał rzekomy. Grozi pęknięciem głównej tętnicy organizmu.</p>
            <h4>Objawy i diagnostyka różnicowa:</h4>
            <ul>
                <li><strong>Ból "migrujący":</strong> Nagły, rozdzierający ból, który przesuwa się w dół ciała w miarę postępu rozwarstwienia.</li>
                <li><strong>Asymetria ciśnień:</strong> Różnica ciśnienia skurczowego między ramionami >20 mmHg.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Procedury OIT i Klasyfikacja Stanford</h5>
            <ul>
                <li><strong>Typ A (Stanford):</strong> Zajmuje aortę wstępującą. Śmiertelność wynosi 1% na każdą godzinę. Wymaga natychmiastowej operacji.</li>
                <li><strong>Kontrola hemodynamiczna:</strong> Należy agresywnie obniżać ciśnienie (skurczowe 100-120 mmHg) oraz częstość akcji serca (<60/min), stosując beta-blokery i.v. (np. Esmolol), aby zmniejszyć siłę uderzenia fali tętna o uszkodzoną ścianę.</li>
            </ul>
        `
    },
    {
        id: 54, 
        title: "Przełom Nadnerczowy (Crisis Adrenocorticalis)", 
        category: "Endokrynologia / Medycyna Ratunkowa",
        content: `
            <p>Nagły, zagrażający życiu niedobór hormonów kory nadnerczy (głównie kortyzolu). Często finał nieleczonej choroby Addisona.</p>
            <h4>Kiedy podejrzewać przełom:</h4>
            <ul>
                <li><strong>Wstrząs hipowolemiczny:</strong> Gwałtowny spadek ciśnienia, który nie reaguje na podawanie płynów.</li>
                <li><strong>Bóle "pseudochirurgiczne":</strong> Silne bóle brzucha, nudności i wymioty sugerujące zapalenie wyrostka lub otrzewnej.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Patofizjologia i Terapia Ratunkowa</h5>
            <ul>
                <li><strong>Triada elektrolitowa:</strong> Hiponatremia (niski sód), Hiperkaliemia (wysoki potas) i Hipoglikemia.</li>
                <li><strong>Leczenie:</strong> Natychmiastowe podanie 100 mg <b>Hydrokortyzonu</b> i.v. oraz intensywne nawadnianie 0,9% NaCl z dodatkiem 5% glukozy. Hydrokortyzon w tej dawce uzupełnia zarówno niedobór glukokortykosteroidów, jak i mineralokortykosteroidów.</li>
            </ul>
        `
    },
    {
        id: 55, 
        title: "Zespół Serotoninowy", 
        category: "Toksykologia / Psychiatria",
        content: `
            <p>Stan nadmiernej stymulacji receptorów serotoninowych w mózgu i tkankach obwodowych, zwykle wywołany interakcją leków przeciwdepresyjnych.</p>
            <h4>Triada objawów:</h4>
            <ul>
                <li><strong>Zaburzenia neuromięśniowe:</strong> Drżenia, sztywność, <b>klonusy</b> (rytmiczne skurcze mięśni, zwłaszcza stóp).</li>
                <li><strong>Nadaktywność autonomiczna:</strong> Gorączka, poty, biegunka, rozszerzone źrenice.</li>
                <li><strong>Zaburzenia świadomości:</strong> Pobudzenie, dezorientacja.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Diagnostyka – Kryteria Huntera</h5>
            <ul>
                <li><strong>Rozpoznanie:</strong> Potwierdza obecność klonusa spontanicznego lub indukowanego u pacjenta przyjmującego leki serotoninergiczne (SSRI, SNRI, MAO-I, tramadol).</li>
                <li><strong>Postępowanie:</strong> Odstawienie leków, benzodiazepiny i.v. na uspokojenie i rozluźnienie mięśni, chłodzenie fizyczne. W ciężkich stanach odtrutka: <b>Cyproheptadyna</b>.</li>
            </ul>
        `
    },
    {
        id: 56, 
        title: "Krwotok Podpajęczynówkowy (SAH)", 
        category: "Neurochirurgia / Neurologia",
        content: `
            <p>Przedostanie się krwi do przestrzeni podpajęczynówkowej, najczęściej wskutek pęknięcia tętniaka tętnic mózgowych. Stan krytyczny.</p>
            <h4>Objawy alarmowe:</h4>
            <ul>
                <li><strong>Ból "uderzeniowy":</strong> Nagły, najsilniejszy ból głowy w życiu (Thunderclap headache).</li>
                <li><strong>Objawy oponowe:</strong> Sztywność karku, nudności, światłowstręt.</li>
            </ul>
        `,
        advancedDetails: `
            <h5>Diagnostyka i Zapobieganie Skurczowi Naczyń</h5>
            <ul>
                <li><strong>TK głowy:</strong> Widoczna krew w zbiornikach podstawy mózgu (obraz "gwiazdy").</li>
                <li><strong>Nimodypina:</strong> Bloker kanałów wapniowych podawany przez 21 dni, aby zapobiec wtórnemu skurczowi naczyń mózgowych, który może doprowadzić do niedokrwiennego udaru po kilku dniach od krwotoku.</li>
            </ul>
        `
    },
    {
        id: 57, 
        title: "Zespół Niewydolności Wielonarządowej (MODS)", 
        category: "Intensywna Terapia",
        content: `
            <p>Niewydolność przynajmniej dwóch układów narządowych u pacjenta w stanie ciężkim, najczęściej jako finał wstrząsu lub sepsy.</p>
        `,
        advancedDetails: `
            <h5>Patomechanizm Burzy Cytokinowej</h5>
            <ul>
                <li><strong>Mechanizm:</strong> Niekontrolowana odpowiedź zapalna prowadzi do uszkodzenia śródbłonka naczyń w całym ciele, co powoduje obrzęki, mikrozakrzepy i niedotlenienie tkanek.</li>
                <li><strong>Punktacja SOFA:</strong> Codzienna ocena wydolności płuc, nerek, wątroby, serca, krzepnięcia i układu nerwowego.</li>
            </ul>
        `
    },
    {
        id: 58, 
        title: "Przełom Miasteniczny", 
        category: "Neurologia / Pulmonologia",
        content: `
            <p>Gwałtowne pogorszenie miastenii, prowadzące do paraliżu mięśni oddechowych i konieczności intubacji.</p>
            <h4>Objawy:</h4>
            <p>Niewyraźna mowa, opadanie powiek, niemożność odksztuszenia wydzieliny, narastająca duszność.</p>
        `,
        advancedDetails: `
            <h5>Leczenie Ratunkowe</h5>
            <ul>
                <li><strong>Postępowanie:</strong> Odstawienie inhibitorów cholinesterazy na czas intubacji, aby uniknąć nadmiaru wydzieliny. Leczenie z wyboru to <b>plazmafereza</b> (oczyszczanie osocza z przeciwciał) lub wysokie dawki immunoglobulin (IVIG).</li>
            </ul>
        `
    },
    {
        id: 59, 
        title: "Ostra Retencja Moczu", 
        category: "Urologia / Geriatria",
        content: `
            <p>Nagła niemożność opróżnienia pęcherza mimo parcia. Powoduje ekstremalny ból w podbrzuszu.</p>
        `,
        advancedDetails: `
            <h5>Procedura cewnikowania i powikłania</h5>
            <ul>
                <li><strong>Przyczyny:</strong> Najczęściej przerost prostaty (BPH) zaostrzony przez alkohol, leki (np. pseudoefedryna) lub zaparcie.</li>
                <li><strong>Ryzyko:</strong> Zbyt szybkie spuszczenie dużej ilości moczu (>1 litr) może wywołać krwawienie z błony śluzowej pęcherza (haematuria ex vacuo) wskutek gwałtownego spadku ciśnienia w pęcherzu.</li>
            </ul>
        `
    },
    {
        id: 60, 
        title: "Zator Płynem Owodniowym", 
        category: "Ginekologia i Położnictwo",
        content: `
            <p>Rzadkie, ale tragiczne powikłanie porodu. Składniki płynu owodniowego dostają się do krwiobiegu matki, wywołując wstrząs.</p>
        `,
        advancedDetails: `
            <h5>Mechanizm Anafilaktoidalny</h5>
            <ul>
                <li><strong>Przebieg:</strong> Gwałtowna niewydolność prawokomorowa serca, zatrzymanie krążenia i zespół DIC (masywne krwawienia z powodu braku krzepliwości).</li>
                <li><strong>Śmiertelność:</strong> Bardzo wysoka (nawet 60-80%). Leczenie polega na agresywnej resuscytacji i masywnych transfuzjach.</li>
            </ul>
        `
    },
    {
        id: 61, 
        title: "Zapalenie Mięśnia Sercowego (ZMS)", 
        category: "Kardiologia",
        content: `
            <p>Proces zapalny kardiomiocytów, najczęściej o etiologii wirusowej (np. po grypie lub infekcji Coxsackie).</p>
            <h4>Obraz kliniczny:</h4>
            <p>Duszność, kłujący ból w klatce piersiowej, kołatania serca u młodej osoby po przebytej niedawno infekcji wirusowej.</p>
        `,
        advancedDetails: `
            <h5>Diagnostyka i powikłania</h5>
            <ul>
                <li><strong>EKG i Troponiny:</strong> Zmiany mogą imitować zawał serca.</li>
                <li><strong>MRI serca:</strong> Złoty standard pozwalający uwidocznić obrzęk i obszary zapalne mięśnia. Główne ryzyko to przejście w kardiomiopatię rozstrzeniową i niewydolność serca.</li>
            </ul>
        `
    },
    {
        id: 62, 
        title: "Nagłe Niedokrwienie Kończyny", 
        category: "Chirurgia Naczyniowa",
        content: `
            <p>Nagłe zatrzymanie dopływu krwi do ręki lub nogi, zwykle przez zator płynący z serca (np. przy migotaniu przedsionków).</p>
            <h4>Objawy (Reguła 6P):</h4>
            <p>1. Pain (Ból), 2. Pallor (Bladość), 3. Pulselessness (Brak tętna), 4. Paresthesia (Zaburzenia czucia), 5. Paralysis (Porażenie ruchowe), 6. Poikilothermia (Oziębienie).</p>
        `,
        advancedDetails: `
            <h5>Okienko terapeutyczne</h5>
            <ul>
                <li><strong>Czas:</strong> Mamy ok. 6 godzin na uratowanie kończyny. Leczenie polega na chirurgicznym usunięciu skrzepu (embolektomia cewnikiem Fogarty'ego) lub podaniu leków rozpuszczających skrzep bezpośrednio do tętnicy.</li>
            </ul>
        `
    },
    {
        id: 63, 
        title: "Zatrucie Metanolem", 
        category: "Toksykologia",
        content: `
            <p>Alkohol metylowy (drzewny) jest śmiertelnie toksyczny. Już 10 ml może spowodować ślepotę, a 30 ml – śmierć.</p>
            <h4>Objawy:</h4>
            <p>Początkowo jak upojenie alkoholowe, po 12-24h bóle brzucha i "obraz śnieżycy" przed oczami.</p>
        `,
        advancedDetails: `
            <h5>Mechanizm kwasu mrówkowego</h5>
            <ul>
                <li><strong>Metabolizm:</strong> Metanol pod wpływem dehydrogenazy alkoholowej utlenia się do kwasu mrówkowego, który niszczy nerw wzrokowy i powoduje głęboką kwasicę metaboliczną.</li>
                <li><strong>Odtrutka:</strong> <b>Czysty etanol</b> (alkohol etylowy) lub Fomepizol – blokują one enzym, zapobiegając powstawaniu trucizny.</li>
            </ul>
        `
    },
    {
        id: 64, 
        title: "Pneumocystoza (PJP)", 
        category: "Infectiologia / Immunologia",
        content: `
            <p>Ciężkie zapalenie płuc wywołane przez grzyba u osób z głębokim niedoborem odporności (np. AIDS).</p>
        `,
        advancedDetails: `
            <h5>Diagnostyka i leczenie</h5>
            <ul>
                <li><strong>Objawy:</strong> Suchy kaszel i narastająca duszność przy czystym osłuchowo obrazie płuc.</li>
                <li><strong>Leczenie:</strong> Wysokie dawki <b>Kotrimoksazolu</b> (Biseptol). Często dołącza się sterydy, aby wyciszyć reakcję zapalną w pęcherzykach płucnych.</li>
            </ul>
        `
    },
    {
        id: 65, 
        title: "Atak Kolki Żółciowej", 
        category: "Chirurgia Ogólna",
        content: `
            <p>Ból spowodowany zablokowaniem przewodu pęcherzykowego przez kamień żółciowy.</p>
            <h4>Lokalizacja bólu:</h4>
            <p>Prawy podżebrze, promieniujący do prawej łopatki, często po tłustym posiłku.</p>
        `,
        advancedDetails: `
            <h5>Objaw Murphy'ego</h5>
            <ul>
                <li><strong>Test:</strong> Pacjent bierze wdech podczas gdy lekarz uciska okolicę podżebrową prawą. Jeśli pacjent przerwie wdech z powodu bólu – objaw jest dodatni, sugerując zapalenie pęcherzyka żółciowego.</li>
            </ul>
        `
    },
    {
        id: 66, 
        title: "Przełom Nadciśnieniowy", 
        category: "Kardiologia / Stany Nagłe",
        content: `
            <p>Gwałtowny skok ciśnienia (zazwyczaj >180/120 mmHg) zagrażający uszkodzeniem mózgu, serca lub nerek.</p>
        `,
        advancedDetails: `
            <h5>Zasady obniżania ciśnienia</h5>
            <ul>
                <li><strong>Emergency vs Urgency:</strong> Jeśli występują objawy narządowe (ból w klatce, zaburzenia widzenia), ciśnienie należy obniżać dożylnie (np. Urapidyl, Labetalol). Ważne: nie obniżamy go do normy natychmiast, lecz o ok. 20-25% w ciągu pierwszej godziny, aby uniknąć udaru niedokrwiennego.</li>
            </ul>
        `
    },
    {
        id: 67, 
        title: "Zatrucie Digoksyną", 
        category: "Toksykologia / Kardiologia",
        content: `
            <p>Przedawkowanie leku nasercowego. Częste u osób starszych z niewydolnością nerek.</p>
            <h4>Objawy:</h4>
            <p>Nudności, wymioty, zaburzenia rytmu serca i charakterystyczne <b>widzenie na żółto-zielono</b>.</p>
        `,
        advancedDetails: `
            <h5>Odtrutka – przeciwciała Fab</h5>
            <ul>
                <li><strong>Mechanizm:</strong> Nadmiar digoksyny blokuje pompę sodowo-potasową. Specyficzne przeciwciała (Digitalis-Antidot) wiążą lek, neutralizując go w kilka minut.</li>
            </ul>
        `
    },
    {
        id: 68, 
        title: "Anemia z niedoboru Witaminy B12", 
        category: "Hematologia",
        content: `
            <p>Niedokrwistość megaloblastyczna wynikająca z braku witaminy B12, niezbędnej do produkcji krwinek i osłonek nerwowych.</p>
            <h4>Objawy:</h4>
            <p>Bladość, duszność, ale też pieczenie języka ("język bawoli") i mrowienie w palcach (neuropatia).</p>
        `,
        advancedDetails: `
            <h5>Choroba Addisona-Biermera</h5>
            <ul>
                <li><strong>Przyczyna:</strong> Autoimmunologiczne niszczenie komórek żołądka produkujących czynnik wewnętrzny (IF), bez którego B12 nie wchłonie się w jelitach. Leczenie polega na dożywotnich zastrzykach domięśniowych z witaminy B12.</li>
            </ul>
        `
    },
    {
        id: 69, 
        title: "Wzmożone Ciśnienie Wewnątrzczaszkowe", 
        category: "Neurologia / Neurochirurgia",
        content: `
            <p>Stan, w którym zawartość czaszki (mózg, krew, płyn) uciska na tkankę nerwową. Grozi wgłobieniem mózgu i śmiercią.</p>
        `,
        advancedDetails: `
            <h5>Triada Cushinga</h5>
            <ul>
                <li><strong>Objawy kliniczne:</strong> 1. Nadciśnienie tętnicze, 2. Bradykardia (wolne tętno), 3. Nieregularny oddech. To sygnał, że pień mózgu jest uciśnięty.</li>
            </ul>
        `
    },
    {
        id: 70, 
        title: "Zatrucie Glikolem Etylowym", 
        category: "Toksykologia",
        content: `
            <p>Płyn do chłodnic. Smakuje słodko, co kusi dzieci i zwierzęta, ale jest śmiertelnie toksyczny dla nerek.</p>
        `,
        advancedDetails: `
            <h5>Kwasica i kryształy szczawianu</h5>
            <ul>
                <li><strong>Mechanizm:</strong> Metabolity glikolu niszczą kanaliki nerkowe. W osadzie moczu widoczne są kryształy szczawianu wapnia. Odtrutka: alkohol etylowy lub Fomepizol.</li>
            </ul>
        `
    },
    {
        id: 71, 
        title: "Choroba Gravesa-Basedowa", 
        category: "Endokrynologia",
        content: `
            <p>Autoimmunologiczna nadczynność tarczycy. Organizm produkuje przeciwciała pobudzające tarczycę do pracy.</p>
            <h4>Cechy charakterystyczne:</h4>
            <p>Drżenie rąk, chudnięcie mimo apetytu, wytrzeszcz oczu (orbitopatia).</p>
        `,
        advancedDetails: `
            <h5>Przełom tarczycowy</h5>
            <ul>
                <li>Zagrażający życiu stan nagłej, skrajnej nadczynności. Objawia się wysoką gorączką, tachykardią i pobudzeniem. Leczenie: Tyreostatyki, jod i beta-blokery.</li>
            </ul>
        `
    },
    {
        id: 72, 
        title: "Obrzęk Płuc (HAPE) i Mózgu (HACE) w Górach", 
        category: "Medycyna Góralska / Stany Nagłe",
        content: `
            <p>Skrajne postacie choroby wysokościowej wynikające z braku aklimatyzacji powyżej 2500-3000 m n.p.m.</p>
        `,
        advancedDetails: `
            <h5>Leczenie na wysokości</h5>
            <ul>
                <li><strong>Postępowanie:</strong> Natychmiastowe schodzenie w dół. W HAPE (płuca) podaje się Nifedypinę, w HACE (mózg) Deksametazon. Ratunkiem jest też worek hiperbaryczny (Gamowa).</li>
            </ul>
        `
    },
    {
        id: 73, 
        title: "Wstrząs Krwotoczny (Hypovolaemia)", 
        category: "Traumatologia / Ratownictwo",
        content: `
            <p>Stan niedotlenienia tkanek wskutek gwałtownej utraty krwi. Serce nie ma co pompować.</p>
        `,
        advancedDetails: `
            <h5>Śmiercionośna Triada Pourazowa</h5>
            <ul>
                <li><strong>Zagrożenie:</strong> Połączenie Hipotermii, Kwasicy i Koagulopatii (zaburzeń krzepnięcia). Aby uratować pacjenta, należy nie tylko toczyć krew, ale też intensywnie go ogrzewać.</li>
            </ul>
        `
    },
    {
        id: 74, 
        title: "Zapalenie Wyrostka u Kobiet w Ciąży", 
        category: "Chirurgia / Ginekologia",
        content: `
            <p>Trudne diagnostycznie, ponieważ rosnąca macica przesuwa wyrostek robaczkowy w górę klatki piersiowej.</p>
        `,
        advancedDetails: `
            <h5>Objaw Adlera</h5>
            <ul>
                <li><strong>Test:</strong> Różnicowanie bólu wyrostka od bólu macicy. Jeśli ból przy ucisku nie przesuwa się przy zmianie pozycji pacjentki na bok, sugeruje to wyrostek.</li>
            </ul>
        `
    },
    {
        id: 75, 
        title: "Pęknięcie Śledziony (Symptom Kehra)", 
        category: "Chirurgia / Traumatologia",
        content: `
            <p>Częsty uraz tępy brzucha (np. wypadek komunikacyjny). Śledziona obficie krwawi do jamy otrzewnej.</p>
        `,
        advancedDetails: `
            <h5>Ból rzutowany</h5>
            <ul>
                <li><strong>Objaw Kehra:</strong> Silny ból w lewym barku wynikający z drażnienia nerwu przeponowego przez krew zbierającą się pod przeponą.</li>
            </ul>
        `
    },
    {
        id: 76, 
        title: "Złośliwy Zespół Neuroleptyczny (ZZN)", 
        category: "Psychiatria / Neurologia",
        content: `
            <p>Rzadka, groźna reakcja na leki przeciwpsychotyczne (neuroleptyki).</p>
            <h4>Objawy:</h4>
            <p>Wysoka gorączka, sztywność mięśni "jak rura ołowiana", poty i splątanie.</p>
        `,
        advancedDetails: `
            <h5>Dantrolen</h5>
            <ul>
                <li><strong>Leczenie:</strong> Natychmiastowe odstawienie leków i podanie <b>Dantrolenu</b> – leku rozluźniającego mięśnie bezpośrednio, co hamuje produkcję ciepła i niszczenie mięśni (rhabdomyolizę).</li>
            </ul>
        `
    },
    {
        id: 77, 
        title: "Jad Kiełbasiany (Botulizm)", 
        category: "Toksykologia / Choroby Zakaźne",
        content: `
            <p>Zatrucie jedną z najsilniejszych toksyn świata, produkowaną przez beztlenowce w zepsutych konserwach.</p>
            <h4>Objawy 4D:</h4>
            <p>Diplopia (podwójne widzenie), Dysfagia (trudność w połykaniu), Dysfonia (chrypka), Dyspnoe (duszność).</p>
        `,
        advancedDetails: `
            <h5>Mechanizm SNARE</h5>
            <ul>
                <li><strong>Działanie:</strong> Toksyna botulinowa trwale niszczy białka odpowiedzialne za wyrzut acetylocholiny w mięśniach. Prowadzi to do wiotkiego paraliżu. Leczenie to podanie antytoksyny.</li>
            </ul>
        `
    },
    {
        id: 78, 
        title: "Zakrzepica Zatoki Strzałkowej", 
        category: "Neurologia",
        content: `
            <p>Rzadka postać udaru, gdzie skrzep powstaje w żyłach mózgu, a nie w tętnicach. Częściej dotyczy młodych kobiet (antykoncepcja, połóg).</p>
        `,
        advancedDetails: `
            <h5>Diagnostyka – Objaw Delta</h5>
            <ul>
                <li><strong>Obrazowanie:</strong> W tomografii z kontrastem widoczny jest ubytek wypełnienia w zatoce żylnej (tzw. empty delta sign). Leczenie polega na podawaniu heparyny mimo ryzyka krwawienia.</li>
            </ul>
        `
    },
    {
        id: 79, 
        title: "Zapalenie Osierdzia (Pericarditis)", 
        category: "Kardiologia",
        content: `
            <p>Zapalenie worka otaczającego serce, często wirusowe.</p>
            <h4>Charakter bólu:</h4>
            <p>Ostry, kłujący, nasila się przy wdechu i w pozycji leżącej, <b>zmniejsza się przy pochyleniu do przodu</b>.</p>
        `,
        advancedDetails: `
            <h5>Tarcie osierdziowe</h5>
            <ul>
                <li><strong>Osłuchiwanie:</strong> Charakterystyczny dźwięk "skrzypienia śniegu" słyszalny nad sercem. Leczenie: wysokie dawki Aspiryny lub Kolchicyna.</li>
            </ul>
        `
    },
    {
        id: 80, 
        title: "Zapalenie Pochewek Ścięgien (De Quervain)", 
        category: "Ortopedia",
        content: `
            <p>Ból kciuka i nadgarstka wynikający z przeciążenia (częste u młodych matek lub od pisania na smartfonie).</p>
        `,
        advancedDetails: `
            <h5>Test Finkelsteina</h5>
            <ul>
                <li><strong>Diagnostyka:</strong> Pacjent chowa kciuk w dłoni, zaciska pięść i odchyla nadgarstek w stronę małego palca. Jeśli pojawia się ostry ból – test jest dodatni.</li>
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
