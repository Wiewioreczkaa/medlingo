// --- SYSTEM AUDIO ---
window.bgMusicMain = new Audio('muzykaglowna.mp3'); 
window.bgMusicMain.loop = true; 
window.bgMusicMain.volume = 0.2;

window.bgMusicLesson = new Audio('muzykapytania.mp3'); 
window.bgMusicLesson.loop = true; 
window.bgMusicLesson.volume = 0.15;

const soundCorrect = new Audio('tak.mp3'); soundCorrect.volume = 0.8;
const soundWrong = new Audio('nie.mp3'); soundWrong.volume = 0.6;

function safePlay(audioObj) {
    let playPromise = audioObj.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => console.log("Oczekiwanie na interakcję."));
    }
}

// --- BAZA 12 LEKCJI (PEŁNA WERSJA - 240 PYTAŃ) ---
const lessons = [
    {
        id: 1, title: "Anatomia Serca", difficulty: "Podstawowy",
        questions: [
            { q: "Która komora tłoczy krew do aorty?", options: ["Lewa komora", "Prawa komora", "Lewy przedsionek"], correct: 0 },
            { q: "Zastawka między lewym przedsionkiem a komorą to?", options: ["Trójdzielna", "Mitralna", "Aortalna"], correct: 1 },
            { q: "Gdzie powstaje impuls elektryczny w sercu?", options: ["Węzeł zatokowy", "Pęczek Hisa", "Włókna Purkinjego"], correct: 0 },
            { q: "Ile warstw ma ściana serca?", options: ["2", "3", "4"], correct: 1 },
            { q: "Krew odtlenowana trafia do?", options: ["Prawego przedsionka", "Lewego przedsionka", "Aorty"], correct: 0 },
            { q: "Naczynia wieńcowe zaopatrują?", options: ["Płuca", "Mózg", "Mięsień sercowy"], correct: 2 },
            { q: "Która komora ma grubszą ścianę?", options: ["Prawa", "Lewa", "Są równe"], correct: 1 },
            { q: "Osierdzie to?", options: ["Mięsień", "Worek ochronny", "Zastawka"], correct: 1 },
            { q: "Skurcz serca to inaczej?", options: ["Systola", "Diastola", "Arytmia"], correct: 0 },
            { q: "Rozkurcz serca to?", options: ["Systola", "Diastola", "Bradykardia"], correct: 1 },
            { q: "Główna tętnica ciała?", options: ["Żyła główna", "Aorta", "Tętnica płucna"], correct: 1 },
            { q: "Ile litrów krwi przepompowuje serce na minutę (spoczynek)?", options: ["2L", "5L", "10L"], correct: 1 },
            { q: "Tętno u zdrowego dorosłego (spoczynek)?", options: ["40-50", "60-90", "100-120"], correct: 1 },
            { q: "CO to objętość?", options: ["Wyrzutowa", "Minutowa", "Oddechowa"], correct: 1 },
            { q: "Pień płucny niesie krew do?", options: ["Mózgu", "Płuc", "Wątroby"], correct: 1 },
            { q: "Żyły płucne niosą krew?", options: ["Utlenowaną", "Odtlenowaną", "Mieszaną"], correct: 0 },
            { q: "Przegroda oddziela?", options: ["Przedsionki od komór", "Stronę lewą od prawej", "Serce od płuc"], correct: 1 },
            { q: "EKG mierzy?", options: ["Ciśnienie", "Aktywność elektryczną", "Przepływ krwi"], correct: 1 },
            { q: "Zastawki zapobiegają?", options: ["Zatorom", "Cofaniu się krwi", "Nadciśnieniu"], correct: 1 },
            { q: "Gdzie leży koniuszek serca?", options: ["Góra, prawo", "Dół, lewo", "Centrum"], correct: 1 }
        ]
    },
    { 
        id: 2, title: "Układ Kostny", difficulty: "Podstawowy", 
        questions: [
            { q: "Ile kości ma dorosły człowiek?", options: ["Około 150", "Około 206", "Około 300"], correct: 1 },
            { q: "Najdłuższa i najcięższa kość w ciele to?", options: ["Kość ramienna", "Kość piszczelowa", "Kość udowa"], correct: 2 },
            { q: "Która kość jest jedyną ruchomą kością czaszki?", options: ["Żuchwa", "Szczęka", "Kość czołowa"], correct: 0 },
            { q: "Gdzie znajduje się kość strzałkowa?", options: ["W ramieniu", "W podudziu", "W przedramieniu"], correct: 1 },
            { q: "Z ilu kręgów szyjnych składa się kręgosłup?", options: ["Z 5 kręgów", "Z 7 kręgów", "Z 12 kręgów"], correct: 1 },
            { q: "Pierwszy krąg szyjny (Atlas) odpowiada za?", options: ["Ruchy potakiwania", "Ruchy przeczenia", "Brak ruchów"], correct: 0 },
            { q: "Która kość NIE należy do obręczy barkowej?", options: ["Obojczyk", "Łopatka", "Mostek"], correct: 2 },
            { q: "Gdzie produkowane są krwinki?", options: ["W okostnej", "W szpiku żółtym", "W szpiku czerwonym"], correct: 2 },
            { q: "Rzepka to element stawu:", options: ["Łokciowego", "Skokowego", "Kolanowego"], correct: 2 },
            { q: "Kość udowa po łacinie to:", options: ["Tibia", "Femur", "Humerus"], correct: 1 },
            { q: "Ile par żeber prawdziwych ma człowiek?", options: ["5", "7", "12"], correct: 1 },
            { q: "Miednica to zrost kości biodrowej, kulszowej i...?", options: ["Krzyżowej", "Łonowej", "Guzicznej"], correct: 1 },
            { q: "Która kość przedramienia leży po stronie kciuka?", options: ["Łokciowa", "Promieniowa", "Ramienna"], correct: 1 },
            { q: "Ciemiączka to połączenia kości u noworodków w obrębie:", options: ["Czaszki", "Miednicy", "Klatki piersiowej"], correct: 0 },
            { q: "Utrata gęstości kości to:", options: ["Osteoporoza", "Artroza", "Skolioza"], correct: 0 },
            { q: "Główne minerały budujące kość:", options: ["Sód i potas", "Wapń i fosfor", "Żelazo i magnez"], correct: 1 },
            { q: "Błona otaczająca kość z zewnątrz to:", options: ["Śródkostna", "Okostna", "Chrząstka"], correct: 1 },
            { q: "Staw o największym zakresie ruchów (np. bark) to staw:", options: ["Zawiasowy", "Siodełkowaty", "Kulisty"], correct: 2 },
            { q: "Które kręgi są najbardziej masywne?", options: ["Szyjne", "Piersiowe", "Lędźwiowe"], correct: 2 },
            { q: "Kość ucha środkowego to:", options: ["Rzepka", "Kowadełko", "Gnykowa"], correct: 1 }
        ]
    },
    { 
        id: 3, title: "Fizjologia Płuc", difficulty: "Średni", 
        questions: [
            { q: "Gdzie zachodzi wymiana gazowa?", options: ["W oskrzelach", "W pęcherzykach płucnych", "W tchawicy"], correct: 1 },
            { q: "Które płuco ma 3 płaty?", options: ["Lewe", "Prawe", "Obie mają 3"], correct: 1 },
            { q: "Główny mięsień oddechowy to:", options: ["Przepona", "Mięsień prosty brzucha", "Biceps"], correct: 0 },
            { q: "Substancja zapobiegająca zapadaniu pęcherzyków:", options: ["Surfaktant", "Śluz", "Histamina"], correct: 0 },
            { q: "Pojemność życiowa płuc (VC) to średnio:", options: ["1-2 litry", "4-5 litrów", "10 litrów"], correct: 1 },
            { q: "Jak nazywa się błona otaczająca płuca?", options: ["Opłucna", "Osierdzie", "Otrzewna"], correct: 0 },
            { q: "Nagłośnia zapobiega:", options: ["Zachłyśnięciu", "Niedotlenieniu", "Chrapaniu"], correct: 0 },
            { q: "Białko transportujące tlen we krwi:", options: ["Miozyna", "Hemoglobina", "Keratyna"], correct: 1 },
            { q: "Badanie mierzące pojemność płuc to:", options: ["EKG", "EEG", "Spirometria"], correct: 2 },
            { q: "Niedotlenienie organizmu to:", options: ["Hipoksja", "Hiperkapnia", "Kwasica"], correct: 0 },
            { q: "Odma opłucnowa to obecność w jamie opłucnej:", options: ["Krwi", "Powietrza", "Ropy"], correct: 1 },
            { q: "CO2 we krwi przenoszone jest głównie jako:", options: ["Rozpuszczony gaz", "Jony wodorowęglanowe", "Połączone z glukozą"], correct: 1 },
            { q: "Struktura łącząca krtań z oskrzelami to:", options: ["Tchawica", "Przełyk", "Gardło"], correct: 0 },
            { q: "Zasinienie skóry z powodu braku tlenu to:", options: ["Rumień", "Sinica", "Żółtaczka"], correct: 1 },
            { q: "Podstawowy bodziec do oddychania to wzrost poziomu:", options: ["Tlenu", "Azotu", "Dwutlenku węgla"], correct: 2 },
            { q: "Ile oddechów na minutę wykonuje zdrowy dorosły?", options: ["5-10", "12-20", "30-40"], correct: 1 },
            { q: "Oddychanie komórkowe zachodzi w:", options: ["Jądrze", "Mitochondrium", "Rybosomach"], correct: 1 },
            { q: "Krtań jest narządem:", options: ["Trawiennym", "Głosowym", "Wydalniczym"], correct: 1 },
            { q: "Mięśnie wspomagające wdech to m.in.:", options: ["Międzyżebrowe zewnętrzne", "Bicepsy", "Łydki"], correct: 0 },
            { q: "Pojemność całkowita płuc (TLC) wynosi około:", options: ["3 litry", "6 litrów", "12 litrów"], correct: 1 }
        ]
    },
    { 
        id: 4, title: "Neurologia: Mózg", difficulty: "Średni", 
        questions: [
            { q: "Który płat mózgu odpowiada za wzrok?", options: ["Czołowy", "Potyliczny", "Skroniowy"], correct: 1 },
            { q: "Część mózgowia odpowiadająca za równowagę to:", options: ["Móżdżek", "Rdzeń przedłużony", "Podwzgórze"], correct: 0 },
            { q: "Połączenie między dwiema półkulami mózgu to:", options: ["Ciało modzelowate", "Pajęczynówka", "Ośrodek Broki"], correct: 0 },
            { q: "Podstawowa komórka układu nerwowego:", options: ["Nefron", "Neuron", "Hepatocyt"], correct: 1 },
            { q: "Ośrodek mowy (Broki) znajduje się zazwyczaj w płacie:", options: ["Czołowym lewym", "Potylicznym prawym", "Ciemieniowym"], correct: 0 },
            { q: "Zewnętrzna, twarda opona mózgowa to:", options: ["Opona twarda", "Pajęczynówka", "Opona miękka"], correct: 0 },
            { q: "Płyn mózgowo-rdzeniowy powstaje w:", options: ["Splotach naczyniówkowych", "Przysadce", "Móżdżku"], correct: 0 },
            { q: "Miejsce przekazywania sygnału między neuronami:", options: ["Akson", "Synapsa", "Dendryt"], correct: 1 },
            { q: "Ile par nerwów czaszkowych ma człowiek?", options: ["10", "12", "31"], correct: 1 },
            { q: "Nerw błędny to nerw czaszkowy numer:", options: ["V", "VII", "X"], correct: 2 },
            { q: "Istota szara mózgu składa się z:", options: ["Ciał komórek", "Włókien (aksonów)", "Naczyń krwionośnych"], correct: 0 },
            { q: "Hipokamp odpowiada głównie za:", options: ["Oddychanie", "Pamięć", "Wzrok"], correct: 1 },
            { q: "Zaburzenie produkcji dopaminy jest przyczyną:", options: ["Choroby Parkinsona", "Zawału", "Cukrzycy"], correct: 0 },
            { q: "Bariera krew-mózg chroni przed:", options: ["Toksynami we krwi", "Spadkiem ciśnienia", "Utratą ciepła"], correct: 0 },
            { q: "Ośrodek oddechowy znajduje się w:", options: ["Korze mózgowej", "Rdzeniu przedłużonym", "Móżdżku"], correct: 1 },
            { q: "Osłonka mielinowa na aksonach służy do:", options: ["Spowolnienia impulsu", "Przyspieszenia impulsu", "Odżywiania"], correct: 1 },
            { q: "Który nerw unerwia mięśnie mimiczne twarzy?", options: ["Nerw twarzowy", "Nerw trójdzielny", "Nerw błędny"], correct: 0 },
            { q: "Podwzgórze kontroluje m.in.:", options: ["Temperaturę ciała", "Słuch", "Koordynację ruchową"], correct: 0 },
            { q: "Choroba Alzheimera dotyka głównie funkcji:", options: ["Ruchowych", "Poznawczych (pamięci)", "Wydalniczych"], correct: 1 },
            { q: "Największa część mózgowia to:", options: ["Kresomózgowie", "Międzymózgowie", "Śródmózgowie"], correct: 0 }
        ]
    },
    { 
        id: 5, title: "Układ Pokarmowy", difficulty: "Średni", 
        questions: [
            { q: "Gdzie rozpoczyna się trawienie węglowodanów?", options: ["W żołądku", "W jamie ustnej", "W jelicie grubym"], correct: 1 },
            { q: "Enzym w ślinie to:", options: ["Pepsyna", "Lipaza", "Amylaza ślinowa"], correct: 2 },
            { q: "Zwieracz między przełykiem a żołądkiem to:", options: ["Wpust", "Odźwiernik", "Zastawka krętniczo-kątnicza"], correct: 0 },
            { q: "Kwas solny (HCl) produkowany jest w:", options: ["Trzustce", "Żołądku", "Dwunastnicy"], correct: 1 },
            { q: "Główny enzym trawiący białka w żołądku:", options: ["Pepsyna", "Glukagon", "Insulina"], correct: 0 },
            { q: "Żółć produkowana jest przez:", options: ["Wątrobę", "Pęcherzyk żółciowy", "Trzustkę"], correct: 0 },
            { q: "Funkcja żółci to:", options: ["Trawienie białek", "Zabijanie bakterii", "Emulgacja tłuszczów"], correct: 2 },
            { q: "Początkowy odcinek jelita cienkiego to:", options: ["Jelito ślepe", "Dwunastnica", "Jelito czcze"], correct: 1 },
            { q: "Kosmki jelitowe służą do:", options: ["Produkcji kwasu", "Zwiększania wchłaniania", "Ochrony"], correct: 1 },
            { q: "Największy narząd miąższowy jamy brzusznej:", options: ["Śledziona", "Trzustka", "Wątroba"], correct: 2 },
            { q: "Zapalenie wyrostka robaczkowego dotyczy części:", options: ["Jelita grubego", "Żołądka", "Przełyku"], correct: 0 },
            { q: "W jelicie grubym wchłaniana jest głównie:", options: ["Glukoza", "Woda", "Białka"], correct: 1 },
            { q: "Bakterie jelitowe (mikrobiom) produkują m.in.:", options: ["Kwas solny", "Witaminę K", "Żółć"], correct: 1 },
            { q: "Ruchy robaczkowe przesuwające pokarm to:", options: ["Perystaltyka", "Dyfuzja", "Osmoza"], correct: 0 },
            { q: "Trzustka wydziela sok trzustkowy do:", options: ["Żołądka", "Dwunastnicy", "Wątroby"], correct: 1 },
            { q: "Refluks to cofanie się treści z żołądka do:", options: ["Przełyku", "Dwunastnicy", "Jelita cienkiego"], correct: 0 },
            { q: "Uzębienie mleczne u dziecka liczy zębów:", options: ["20", "32", "16"], correct: 0 },
            { q: "Narząd odpowiedzialny za odtruwanie organizmu:", options: ["Płuca", "Wątroba", "Śledziona"], correct: 1 },
            { q: "Ostatni odcinek przewodu pokarmowego to:", options: ["Odbytnica", "Esica", "Kątnica"], correct: 0 },
            { q: "Żylaki odbytu potocznie nazywamy:", options: ["Wrzodami", "Hemofilią", "Hemoroidami"], correct: 2 }
        ]
    },
    { 
        id: 6, title: "Endokrynologia", difficulty: "Zaawansowany", 
        questions: [
            { q: "Hormon obniżający poziom cukru we krwi to:", options: ["Insulina", "Glukagon", "Kortyzol"], correct: 0 },
            { q: "Insulina produkowana jest przez:", options: ["Wątrobę", "Nadnercza", "Trzustkę"], correct: 2 },
            { q: "Gruczoł tarczowy do pracy potrzebuje:", options: ["Żelaza", "Jodu", "Wapnia"], correct: 1 },
            { q: "Hormon walki i ucieczki to:", options: ["Melatonina", "Adrenalina", "Oksytocyna"], correct: 1 },
            { q: "Hormon regulujący rytm snu:", options: ["Melatonina", "Tyroksyna", "Prolaktyna"], correct: 0 },
            { q: "Przysadka mózgowa nazywana jest:", options: ["Gruczołem nadrzędnym", "Siedzibą duszy", "Głównym magazynem"], correct: 0 },
            { q: "Męski hormon płciowy to:", options: ["Estrogen", "Testosteron", "Progesteron"], correct: 1 },
            { q: "Żeński hormon odpowiedzialny za podtrzymanie ciąży:", options: ["Prolaktyna", "Testosteron", "Progesteron"], correct: 2 },
            { q: "Kortyzol, hormon stresu, wydzielany jest przez:", options: ["Nadnercza", "Tarczycę", "Trzustkę"], correct: 0 },
            { q: "Hormon wzrostu to:", options: ["Somatotropina", "Tyroksyna", "Glukagon"], correct: 0 },
            { q: "Choroba z braku insuliny to:", options: ["Cukrzyca typu 1", "Nadczynność tarczycy", "Osteoporoza"], correct: 0 },
            { q: "Przytarczyce regulują gospodarkę:", options: ["Węglowodanową", "Wapniowo-fosforanową", "Wodną"], correct: 1 },
            { q: "Oksytocyna odpowiada m.in. za:", options: ["Skurcze macicy", "Wzrost kości", "Kolor skóry"], correct: 0 },
            { q: "Hormon pobudzający laktację (produkcję mleka):", options: ["Oksytocyna", "Prolaktyna", "Adrenalina"], correct: 1 },
            { q: "Tyroksyna (T4) to hormon:", options: ["Tarczycy", "Jajników", "Trzustki"], correct: 0 },
            { q: "Hormon antydiuretyczny (wazopresyna) zagęszcza:", options: ["Krew", "Mocz", "Żółć"], correct: 1 },
            { q: "Gruczoł zlokalizowany na górnym biegunie nerki:", options: ["Tarczyca", "Nadnercze", "Grasica"], correct: 1 },
            { q: "Hiperglikemia to:", options: ["Za niski cukier", "Wysokie ciśnienie", "Za wysoki cukier"], correct: 2 },
            { q: "Hipoglikemia bywa stanem zagrożenia życia, gdy:", options: ["Spadnie cukier", "Wzrośnie cholesterol", "Braknie tlenu"], correct: 0 },
            { q: "Cukrzyca typu 2 wiąże się głównie z:", options: ["Opornością na insulinę", "Brakiem nerek", "Niedoborem jodu"], correct: 0 }
        ]
    },
    { 
        id: 7, title: "Nefrologia: Nerki", difficulty: "Zaawansowany", 
        questions: [
            { q: "Podstawowa jednostka czynnościowa nerki to:", options: ["Neuron", "Nefron", "Pęcherzyk"], correct: 1 },
            { q: "Ile moczu pierwotnego powstaje dziennie?", options: ["1.5-2 litry", "10-20 litrów", "150-180 litrów"], correct: 2 },
            { q: "Który organ filtruje krew w nefronie?", options: ["Kłębuszek nerkowy", "Pętla Henlego", "Cewka zbiorcza"], correct: 0 },
            { q: "Moczowód łączy:", options: ["Nerkę z pęcherzem", "Pęcherz ze światem", "Wątrobę z nerką"], correct: 0 },
            { q: "Mocz odprowadzany jest z organizmu przez:", options: ["Moczowód", "Cewkę moczową", "Miedniczkę"], correct: 1 },
            { q: "Główny produkt przemiany azotowej w moczu to:", options: ["Glukoza", "Mocznik", "Białko"], correct: 1 },
            { q: "Obecność glukozy w moczu (cukromocz) sugeruje:", options: ["Cukrzycę", "Zawał", "Zdrowie"], correct: 0 },
            { q: "Wydzielanie reniny przez nerkę reguluje:", options: ["Poziom cukru", "Ciśnienie krwi", "Kolor moczu"], correct: 1 },
            { q: "Kamica nerkowa to zjawisko tworzenia się:", options: ["Guzów", "Złogów (kamieni)", "Cyst"], correct: 1 },
            { q: "Erytropoetyna produkowana w nerkach pobudza produkcję:", options: ["Białych krwinek", "Czerwonych krwinek", "Insuliny"], correct: 1 },
            { q: "Resorpcja wody z moczu kontrolowana jest przez:", options: ["Wazopresynę (ADH)", "Testosteron", "Adrenalinę"], correct: 0 },
            { q: "Zewnętrzna warstwa nerki to:", options: ["Rdzeń", "Kora", "Miedniczka"], correct: 1 },
            { q: "Aparat przykłębuszkowy odpowiada za:", options: ["Odporność", "Regulację ciśnienia krwi", "Trawienie"], correct: 1 },
            { q: "Hemodializa to sztuczne:", options: ["Oddychanie", "Oczyszczanie krwi", "Trawienie"], correct: 1 },
            { q: "Białkomocz (obecność białka w moczu) wskazuje na uszkodzenie:", options: ["Cewki", "Kłębuszków", "Pęcherza"], correct: 1 },
            { q: "Pojemność pęcherza moczowego u dorosłego to ok.:", options: ["100 ml", "400-600 ml", "2 litry"], correct: 1 },
            { q: "Mocz zdrowego człowieka jest:", options: ["Jałowy (brak bakterii)", "Pełen bakterii", "Słodki"], correct: 0 },
            { q: "Zapalenie pęcherza częściej dotyka:", options: ["Kobiet", "Mężczyzn", "Po równo"], correct: 0 },
            { q: "Barwnik nadający moczowi żółty kolor:", options: ["Hemoglobina", "Urochrom", "Bilirubina"], correct: 1 },
            { q: "Zjawisko oddawania moczu w nocy to:", options: ["Poliuria", "Nokturia", "Oliguria"], correct: 1 }
        ]
    },
    { 
        id: 8, title: "Immunologia", difficulty: "Ekspert", 
        questions: [
            { q: "Komórki odpornościowe (białe krwinki) to:", options: ["Erytrocyty", "Trombocyty", "Leukocyty"], correct: 2 },
            { q: "Przeciwciała produkowane są przez:", options: ["Limfocyty T", "Limfocyty B", "Makrofagi"], correct: 1 },
            { q: "Grasica to narząd odpowiedzialny za dojrzewanie:", options: ["Limfocytów T", "Limfocytów B", "Czerwonych krwinek"], correct: 0 },
            { q: "Śledziona działa głównie jako:", options: ["Magazyn tłuszczu", "Filtr krwi", "Gruczoł trawienny"], correct: 1 },
            { q: "Substancja obca pobudzająca układ odpornościowy to:", options: ["Przeciwciało", "Antygen", "Enzym"], correct: 1 },
            { q: "Makrofagi to komórki, które potrafią:", options: ["Pożerać patogeny (fagocytoza)", "Produkować przeciwciała", "Krzepnąć"], correct: 0 },
            { q: "Odporność po przechorowaniu to odporność:", options: ["Czynna naturalna", "Bierna sztuczna", "Bierna naturalna"], correct: 0 },
            { q: "Szczepionka to metoda nabycia odporności:", options: ["Czynnej sztucznej", "Biernej sztucznej", "Wrodzonej"], correct: 0 },
            { q: "Surowica (podanie gotowych przeciwciał) to odporność:", options: ["Bierna sztuczna", "Czynna sztuczna", "Czynna naturalna"], correct: 0 },
            { q: "Alergia to efekt:", options: ["Osłabienia układu", "Nadwrażliwości układu", "Zakażenia wirusowego"], correct: 1 },
            { q: "Choroba z autoagresji (autoimmunologiczna) polega na:", options: ["Ataku na własne tkanki", "Braku odporności", "Ataku na wirusy"], correct: 0 },
            { q: "Histamina jest mediatorem odpowiedzialnym za:", options: ["Senność", "Krwepnięcie", "Objawy alergii i stanu zapalnego"], correct: 2 },
            { q: "HIV to wirus atakujący układ odpornościowy, wywołujący:", options: ["WZW", "AIDS", "Gruźlicę"], correct: 1 },
            { q: "Które przeciwciała przenikają przez łożysko do płodu?", options: ["IgA", "IgG", "IgM"], correct: 1 },
            { q: "Przeciwciała występujące m.in. w ślinie i łzach:", options: ["IgA", "IgE", "IgM"], correct: 0 },
            { q: "Przeciwciała odpowiedzialne za reakcje alergiczne:", options: ["IgG", "IgM", "IgE"], correct: 2 },
            { q: "Bariera pierwszego kontaktu z patogenem to:", options: ["Serce", "Skóra i błony śluzowe", "Wątroba"], correct: 1 },
            { q: "Szpik kostny produkuje:", options: ["Wszystkie komórki krwi", "Tylko białe krwinki", "Tylko przeciwciała"], correct: 0 },
            { q: "Limfa (chłonka) przepływa przez:", options: ["Żyły", "Tętnice", "Węzły chłonne"], correct: 2 },
            { q: "Gorączka to objaw:", options: ["Zaburzeń wzroku", "Mechanizmu obronnego organizmu", "Hipotermii"], correct: 1 }
        ]
    },
    { 
        id: 9, title: "Kardiologia: Patologie", difficulty: "Ekspert", 
        questions: [
            { q: "Zawał mięśnia sercowego to wynik:", options: ["Niedokrwienia i martwicy", "Zbyt szybkiego tętna", "Wady zastawki"], correct: 0 },
            { q: "Choroba polegająca na zwężeniu tętnic przez blaszki to:", options: ["Zapalenie żył", "Miażdżyca", "Żylaki"], correct: 1 },
            { q: "Nadciśnienie tętnicze rozpoznajemy zazwyczaj powyżej:", options: ["120/80", "140/90", "100/60"], correct: 1 },
            { q: "Zbyt szybka akcja serca (>100 uderzeń/min) to:", options: ["Bradykardia", "Tachykardia", "Normokardia"], correct: 1 },
            { q: "Zbyt wolna akcja serca (<60 uderzeń/min) to:", options: ["Tachykardia", "Bradykardia", "Asystolia"], correct: 1 },
            { q: "Migotanie przedsionków to rodzaj:", options: ["Arytmii", "Wady zastawkowej", "Zakażenia"], correct: 0 },
            { q: "Poszerzenie i osłabienie ściany tętnicy (grozi pęknięciem) to:", options: ["Miażdżyca", "Tętniak", "Zakrzep"], correct: 1 },
            { q: "Dusznica bolesna (angina pectoris) to objaw:", options: ["Astmy", "Choroby wieńcowej", "Zapalenia płuc"], correct: 1 },
            { q: "Niewydolność serca objawia się często:", options: ["Obrzękami nóg i dusznością", "Wypadaniem włosów", "Bólem głowy"], correct: 0 },
            { q: "Szmer nad sercem najczęściej świadczy o:", options: ["Zakrzepicy", "Zaburzeniach zastawek", "Wysokim pulsie"], correct: 1 },
            { q: "Zakrzepica dotyczy zazwyczaj naczyń:", options: ["Żylnych kończyn dolnych", "Tętnic mózgowych", "Włosowatych"], correct: 0 },
            { q: "Oderwanie zakrzepu może doprowadzić do:", options: ["Zatoru (np. płucnego)", "Białaczki", "Owrzodzenia"], correct: 0 },
            { q: "Wysoki poziom złego cholesterolu (LDL) przyspiesza:", options: ["Rozwój mięśni", "Rozwój miażdżycy", "Osteoporozę"], correct: 1 },
            { q: "Złoty standard w diagnozie ostrego zawału to:", options: ["USG brzucha", "EKG i enzymy (troponina)", "RTG klatki"], correct: 1 },
            { q: "Troponina to:", options: ["Lek nasercowy", "Białko uwalniane przy zawale", "Hormon stresu"], correct: 1 },
            { q: "Asystolia (płaska linia w EKG) oznacza:", options: ["Brak aktywności elektrycznej", "Prawidłowy rytm", "Lekki zawał"], correct: 0 },
            { q: "Rozrusznik serca stosuje się by leczyć:", options: ["Zaburzenia rytmu (np. bradykardię)", "Niskie ciśnienie", "Anemię"], correct: 0 },
            { q: "Utrata przytomności z powodu nagłego spadku ciśnienia to:", options: ["Udar", "Omdlenie (syncope)", "Padaczka"], correct: 1 },
            { q: "Choroba mięśnia sercowego (np. powiększenie) to:", options: ["Kardiomiopatia", "Zapalenie wsierdzia", "Miażdżyca"], correct: 0 },
            { q: "Gwałtowny ból za mostkiem promieniujący do lewej ręki sugeruje:", options: ["Refluks", "Zawał serca", "Neuralgię"], correct: 1 }
        ]
    },
    { 
        id: 10, title: "Farmakologia", difficulty: "Mistrz", 
        questions: [
            { q: "NLPZ (np. Ibuprofen) mają działanie:", options: ["Tylko przeciwbólowe", "Przeciwbólowe i przeciwzapalne", "Nasenne"], correct: 1 },
            { q: "Paracetamol NIE posiada działania:", options: ["Przeciwbólowego", "Przeciwgorączkowego", "Przeciwzapalnego"], correct: 2 },
            { q: "Antybiotyki zwalczają infekcje:", options: ["Wirusowe", "Bakteryjne", "Grzybicze"], correct: 1 },
            { q: "Pierwszy odkryty antybiotyk to:", options: ["Penicylina", "Azytromycyna", "Doksycyklina"], correct: 0 },
            { q: "Leki obniżające poziom cholesterolu to:", options: ["Beta-blokery", "Statyny", "Diuretyki"], correct: 1 },
            { q: "Beta-blokery stosuje się głównie by:", options: ["Zwiększyć tętno", "Zmniejszyć tętno i ciśnienie", "Wyleczyć kaszel"], correct: 1 },
            { q: "Leki moczopędne (diuretyki) często stosuje się w leczeniu:", options: ["Odwodnienia", "Nadciśnienia i obrzęków", "Depresji"], correct: 1 },
            { q: "Inhibitory pompy protonowej (np. Omeprazol) obniżają:", options: ["Wydzielanie kwasu w żołądku", "Ciśnienie krwi", "Gorączkę"], correct: 0 },
            { q: "Najszybsza droga podania leku to podanie:", options: ["Doustne", "Dożylne (IV)", "Domieśniowe"], correct: 1 },
            { q: "Substancja nieaktywna używana w badaniach (efekt wiary) to:", options: ["Nocebo", "Lek generyczny", "Placebo"], correct: 2 },
            { q: "Dawka leku, która powoduje śmierć to dawka:", options: ["Terapeutyczna", "Leksykalna", "Letalna (śmiertelna)"], correct: 2 },
            { q: "Synergizm leków oznacza, że ich działanie:", options: ["Znosi się", "Wzmacnia się wzajemnie", "Nie ma na siebie wpływu"], correct: 1 },
            { q: "Antagonizm leków oznacza, że leki:", options: ["Osłabiają swoje działanie", "Są identyczne", "Działają podwójnie"], correct: 0 },
            { q: "Jak prawidłowo podaje się insulinę?", options: ["Doustnie (tabletki)", "Podskórnie (zastrzyk)", "Wziewnie"], correct: 1 },
            { q: "Silny lek przeciwbólowy z grupy opiatów to:", options: ["Morfina", "Paracetamol", "Aspiryna"], correct: 0 },
            { q: "Leki OTC (Over-The-Counter) to leki:", options: ["Na receptę narkotyczną", "Bez recepty", "Tylko dożylne"], correct: 1 },
            { q: "Kwas acetylosalicylowy to chemiczna nazwa:", options: ["Aspiryny", "Witaminy C", "Penicyliny"], correct: 0 },
            { q: "Nadmierne zażywanie antybiotyków prowadzi do:", options: ["Odporności organizmu na ból", "Lekkooporności bakterii", "Wzrostu masy ciała"], correct: 1 },
            { q: "Leki przeciwzakrzepowe potocznie nazywa się:", options: ["Rozkurczowymi", "Rozrzedzającymi krew", "Przeciwwymiotnymi"], correct: 1 },
            { q: "Adrenalinę (Epinefrynę) podaje się natychmiast w przypadku:", options: ["Kataru", "Wstrząsu anafilaktycznego", "Bólu zęba"], correct: 1 }
        ]
    },
    { 
        id: 11, title: "Chirurgia Ogólna", difficulty: "Mistrz", 
        questions: [
            { q: "Postępowanie niszczące drobnoustroje na skórze/ranie to:", options: ["Aseptyka", "Antyseptyka", "Paliatywa"], correct: 1 },
            { q: "Zapobieganie zakażeniom ran (sterylne narzędzia itp.) to:", options: ["Antyseptyka", "Aseptyka", "Biopsja"], correct: 1 },
            { q: "Mały, precyzyjny nożyk chirurgiczny to:", options: ["Pęseta", "Skalpel", "Szczypce"], correct: 1 },
            { q: "Szwy, których nie trzeba zdejmować, to szwy:", options: ["Nylonowe", "Wchłanialne (rozpuszczalne)", "Metalowe"], correct: 1 },
            { q: "Zabieg przez małe nacięcia z użyciem kamery to:", options: ["Laparoskopia", "Laparotomia", "Amputacja"], correct: 0 },
            { q: "Znieczulenie z intubacją i uśpieniem pacjenta to znieczulenie:", options: ["Miejscowe", "Zewnątrzoponowe", "Ogólne"], correct: 2 },
            { q: "Operacyjne usunięcie wyrostka robaczkowego to:", options: ["Tonsillektomia", "Appendektomia", "Mastektomia"], correct: 1 },
            { q: "Wydostanie się narządu poza jamę brzuszną (uwypuklenie) to:", options: ["Przepuklina", "Zator", "Ropień"], correct: 0 },
            { q: "Wziernikowanie wnętrza ciała (np. żołądka) to ogólnie:", options: ["Fluoroskopia", "Endoskopia", "Radioterapia"], correct: 1 },
            { q: "Zatrzymanie krwawienia to:", options: ["Hemostaza", "Homeostaza", "Hemoliza"], correct: 0 },
            { q: "Silny wylew krwi na zewnątrz lub wewnątrz ciała to:", options: ["Krwiomocz", "Krwotok", "Wybroczyna"], correct: 1 },
            { q: "Nagromadzenie powietrza w jamie opłucnej to:", options: ["Wysięk", "Odma", "Zawał"], correct: 1 },
            { q: "Rurka odprowadzająca płyny z rany to:", options: ["Cewnik", "Drenaż", "Wenflon"], correct: 1 },
            { q: "Przecięcie tchawicy dla ratowania oddechu to:", options: ["Tracheotomia", "Kolonoskopia", "Torakotomia"], correct: 0 },
            { q: "Wprowadzenie rurki do tchawicy (do respiratora) to:", options: ["Ekstubacja", "Intubacja", "Wlew"], correct: 1 },
            { q: "Martwica tkanek, często z infekcją bakteryjną, to:", options: ["Zgorzel (gangrena)", "Ropień", "Guz"], correct: 0 },
            { q: "Usunięcie części ciała (np. kończyny) to:", options: ["Amputacja", "Resekcja", "Transplantacja"], correct: 0 },
            { q: "Częściowe wycięcie narządu (np. żołądka) to:", options: ["Amputacja", "Resekcja", "Nacięcie"], correct: 1 },
            { q: "Tkanka łączna zastępująca ubytek po zranieniu to:", options: ["Strup", "Blizna", "Ziarnina"], correct: 1 },
            { q: "Lekarz usypiający pacjenta do operacji to:", options: ["Chirurg", "Internista", "Anestezjolog"], correct: 2 }
        ]
    },
    { 
        id: 12, title: "Diagnostyka Obrazowa", difficulty: "Legenda", 
        questions: [
            { q: "Jakie promieniowanie wykorzystuje RTG?", options: ["Ultrafioletowe", "Promienie X", "Podczerwone"], correct: 1 },
            { q: "Kości na zdjęciu RTG są:", options: ["Czarne", "Białe", "Niewidoczne"], correct: 1 },
            { q: "Powietrze (np. w płucach) na zdjęciu RTG jest:", options: ["Białe", "Czarne", "Szare"], correct: 1 },
            { q: "Które badanie NIE UŻYWA promieniowania rentgenowskiego?", options: ["TK (Tomografia)", "RTG", "MRI (Rezonans)"], correct: 2 },
            { q: "MRI do tworzenia obrazu wykorzystuje:", options: ["Silne pole magnetyczne", "Izotopy", "Dźwięki"], correct: 0 },
            { q: "Tomografia komputerowa (TK/CT) to badanie warstwowe używające:", options: ["Promieni RTG", "Magnesu", "Ultradźwięków"], correct: 0 },
            { q: "USG działa w oparciu o:", options: ["Fale magnetyczne", "Fale ultradźwiękowe", "Fale świetlne"], correct: 1 },
            { q: "Do badania USG używa się na skórze pacjenta:", options: ["Specjalnego żelu", "Alkoholu", "Talku"], correct: 0 },
            { q: "PET (Pozytonowa Tomografia Emisyjna) jest kluczowa w:", options: ["Ortopedii", "Onkologii (wykrywanie raka)", "Okulistyce"], correct: 1 },
            { q: "Substancja podawana by lepiej uwidocznić naczynia to:", options: ["Środek znieczulający", "Kontrast", "Sól fizjologiczna"], correct: 1 },
            { q: "Mammografia to celowane badanie RTG:", options: ["Mózgu", "Piersi", "Zębów"], correct: 1 },
            { q: "Badanie gęstości kości to:", options: ["Spirometria", "Densytometria", "Elektromiografia"], correct: 1 },
            { q: "Obrazowanie w czasie rzeczywistym używane na bloku to:", options: ["Fluoroskopia", "Rezonans", "PET"], correct: 0 },
            { q: "USG serca popularnie nazywamy:", options: ["Echo serca", "EKG", "Holter"], correct: 0 },
            { q: "EKG obrazuje pracę układu:", options: ["Oddechowego", "Krwionośnego (elektryczną)", "Nerwowego"], correct: 1 },
            { q: "EEG to badanie czynności elektrycznej:", options: ["Serca", "Mięśni", "Mózgu"], correct: 2 },
            { q: "Pobranie wycinka tkanki do badania pod mikroskopem to:", options: ["Autopsja", "Biopsja", "Kolonoskopia"], correct: 1 },
            { q: "Badanie 24-godzinne EKG to:", options: ["Próba wysiłkowa", "Holter EKG", "Angiografia"], correct: 1 },
            { q: "Badanie słuchu to:", options: ["Audiometria", "Spirometria", "Optometria"], correct: 0 },
            { q: "Badanie wnętrza naczyń (np. wieńcowych) za pomocą cewnika to:", options: ["Angiografia (koronarografia)", "USG Doppler", "Punkcja"], correct: 0 }
        ]
    }
];

let currentPoints = 0;
let currentUser = null;
let activeLesson = null;
let currentQuestionIdx = 0;
let correctAnswersCount = 0; 

// --- NAWIGACJA ---
function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function goToDashboard() {
    updateDashboard();
    showSection('dashboard-section');
    
    // Zatrzymujemy muzykę z Quizu
    bgMusicLesson.pause();
    bgMusicLesson.currentTime = 0;
    
    // Zatrzymujemy muzykę z Bazy Wiedzy (jeśli jest załadowana z nauka.js)
    if (typeof bgMusicLearn !== 'undefined') {
        bgMusicLearn.pause();
        bgMusicLearn.currentTime = 0;
    }

    // Odpalamy główny motyw Karty Głównej
    safePlay(bgMusicMain);
}

// --- LOGOWANIE ---
function register() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email && pass.length >= 6) {
        if(localStorage.getItem(email)) {
            showToast("To konto już istnieje!", "info");
        } else {
            localStorage.setItem(email, JSON.stringify({password: pass, points: 0, completed: []}));
            showToast("Konto stworzone! Możesz się zalogować.", "success");
        }
    } else {
        showToast("Email musi być poprawny, a hasło mieć min. 6 znaków.");
    }
}

function login() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const data = localStorage.getItem(email);
    
    if (data) {
        const user = JSON.parse(data);
        if (user.password === pass) {
            currentUser = email;
            currentPoints = user.points || 0;
            showToast("Zalogowano pomyślnie!", "success"); // <--- Zmiana
            goToDashboard();
        } else {
            showToast("Błędne hasło! Spróbuj ponownie."); // <--- Zmiana
        }
    } else {
        showToast("Nie znaleźliśmy konta o tym adresie."); // <--- Zmiana
    }
}

function logout() { location.reload(); }

// --- DASHBOARD ---
function updateDashboard() {
    const user = JSON.parse(localStorage.getItem(currentUser));
    const userName = currentUser.split('@')[0];
    
    document.getElementById('dash-user-display').innerText = userName;
    document.getElementById('dash-avatar').innerText = userName.charAt(0).toUpperCase();
    document.getElementById('dash-points').innerText = currentPoints;
    
    const level = Math.floor(currentPoints / 500) + 1;
    document.getElementById('user-lvl').innerText = level;
    document.getElementById('dash-level-bar').style.width = ((currentPoints % 500) / 5) + "%";

    const list = document.getElementById('lessons-list');
    list.innerHTML = "";

    lessons.forEach((lesson, index) => {
        const isDone = user.completed.includes(lesson.id);
        const isUnlocked = index === 0 || user.completed.includes(lessons[index - 1].id);

        const card = document.createElement('div');
        card.className = `lesson-card ${isUnlocked ? '' : 'locked'}`;
        card.style.opacity = isUnlocked ? "1" : "0.5";

        let statusText = "";
        let btnHtml = "";

        if (isDone) {
            statusText = "✅ Ukończono sukcesem";
            btnHtml = `<button onclick="startLesson(${lesson.id})" class="start-btn" style="background:#f0f4f8; color:#7f8c8d; box-shadow:none;">Powtórz</button>`;
        } else if (isUnlocked) {
            statusText = "📖 Odblokowane! Czeka na Ciebie";
            btnHtml = `<button onclick="startLesson(${lesson.id})" class="start-btn">Rozpocznij</button>`;
        } else {
            statusText = "🔒 Musisz zdać poprzednią lekcję";
            btnHtml = `<button class="start-btn" style="background:#ecf0f1; color:#bdc3c7; box-shadow:none; cursor:not-allowed;" disabled>Zablokowane</button>`;
        }

        card.innerHTML = `
            <div class="lesson-info">
                <span class="level-badge">${lesson.difficulty}</span>
                <h3 style="margin-top:10px;">${lesson.title}</h3>
                <p style="color: #7f8c8d; font-size: 0.9rem; margin: 0;">${statusText}</p>
            </div>
            ${btnHtml}
        `;
        list.appendChild(card);
    });

    const historyList = document.getElementById('history-list');
    if (user.completed && user.completed.length > 0) {
        historyList.innerHTML = "";
        const recentIds = user.completed.slice(-4).reverse();
        recentIds.forEach(id => {
            const lessonObj = lessons.find(l => l.id === id);
            if(lessonObj) {
                historyList.innerHTML += `<div style="font-size: 0.9rem; padding: 10px 0; border-bottom: 1px solid #f0f4f8; text-align: left; color: #34495e; font-weight: bold;">✔ ${lessonObj.title}</div>`;
            }
        });
    }

    if(typeof animateDashboard === "function") animateDashboard();
}

// --- LOGIKA QUIZU ---
function startLesson(id) {
    activeLesson = lessons.find(l => l.id === id);
    currentQuestionIdx = 0;
    correctAnswersCount = 0;
    
    bgMusicMain.pause();
    bgMusicLesson.currentTime = 0;
    safePlay(bgMusicLesson);

    showSection('game-section');
    
    document.getElementById('lesson-title-side').innerText = activeLesson.title;
    document.getElementById('quiz-avatar').innerText = currentUser.split('@')[0].charAt(0).toUpperCase();
    document.getElementById('quiz-points-display').innerText = currentPoints;

    loadQuestion();
}

function loadQuestion() {
    const question = activeLesson.questions[currentQuestionIdx];
    const total = activeLesson.questions.length;
    
    document.getElementById('lesson-progress-fill').style.width = (currentQuestionIdx / total) * 100 + "%";
    document.getElementById('question-counter').innerText = `${currentQuestionIdx + 1}/${total}`;
    document.getElementById('question').innerText = question.q;
    
    const hints = [
        "Pamiętaj, by czytać uważnie. Pośpiech to największy wróg dobrego diagnosty!",
        "Aby zdać ten moduł, musisz odpowiedzieć poprawnie na co najmniej 60% pytań.",
        "Medycyna to ciągła nauka. Każdy błąd to nowa lekcja!",
        "Trzymaj się! Punkty XP zostają z Tobą, nawet jeśli nie zdasz."
    ];
    document.getElementById('medical-hint').innerText = hints[Math.floor(Math.random() * hints.length)];

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = "";

    question.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = "answer-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, question.correct, btn);
        answersDiv.appendChild(btn);
    });

    if(typeof animateNewQuestion === "function") animateNewQuestion();
}

function checkAnswer(selected, correct, btn) {
    const all = document.querySelectorAll('.answer-btn');
    all.forEach(b => b.classList.add('disabled'));

    if (selected === correct) {
        soundCorrect.currentTime = 0;
        safePlay(soundCorrect);
        
        btn.classList.add('correct');
        if(typeof animateCorrect === "function") animateCorrect(btn);
        
        currentPoints += 10;
        correctAnswersCount++;
        document.getElementById('quiz-points-display').innerText = currentPoints;
    } else {
        soundWrong.currentTime = 0;
        safePlay(soundWrong);
        
        btn.classList.add('wrong');
        all[correct].classList.add('correct');
        if(typeof animateWrong === "function") animateWrong(btn);
    }

    const user = JSON.parse(localStorage.getItem(currentUser));
    user.points = currentPoints;
    localStorage.setItem(currentUser, JSON.stringify(user));

    setTimeout(() => {
        currentQuestionIdx++;
        if (currentQuestionIdx < activeLesson.questions.length) {
            loadQuestion();
        } else {
            finishLesson();
        }
    }, 1500);
}

// --- EKRAN KOŃCOWY ---
function finishLesson() {
    const user = JSON.parse(localStorage.getItem(currentUser));
    const totalQuestions = activeLesson.questions.length;
    const percent = Math.round((correctAnswersCount / totalQuestions) * 100);
    
    const summarySection = document.querySelector('#summary-section h1');
    const summaryIcon = document.querySelector('.success-icon');
    const summaryText = document.getElementById('summary-text');
    
    if (percent >= 60) {
        if (!user.completed.includes(activeLesson.id)) {
            user.completed.push(activeLesson.id);
        }
        summarySection.innerText = "🎉 Zaliczone!";
        summaryText.innerHTML = `Lekcja "${activeLesson.title}" ukończona!<br>Twój wynik to <b>${percent}%</b> (${correctAnswersCount}/${totalQuestions}). Odblokowałeś kolejny etap!`;
        safePlay(soundCorrect);
    } else {
        summarySection.innerText = "💔 Prawie się udało!";
        summaryText.innerHTML = `Twój wynik to <b>${percent}%</b> (${correctAnswersCount}/${totalQuestions}).<br>Aby zdać i odblokować następną lekcję, potrzebujesz 60%. Zdobytą wiedzę (i XP) już masz, spróbuj ponownie!`;
        safePlay(soundWrong);
    }

    localStorage.setItem(currentUser, JSON.stringify(user));
    
    document.getElementById('lesson-progress-fill').style.width = "100%";
    bgMusicLesson.pause();
    
    showSection('summary-section');
}

function showToast(message, type = 'error') {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Ikona w zależności od typu
    let icon = '⚠️';
    if(type === 'success') icon = '✅';
    if(type === 'info') icon = 'ℹ️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    // Automatyczne usuwanie po 4 sekundach
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}