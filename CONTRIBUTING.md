# Pokyny pre prispievateľov (CONTRIBUTING.md)

Ďakujeme za váš záujem prispieť do vzdelávacieho repozitára **Programovanie**. Tento repozitár slúži pre výučbu študentov stredných odborných škôl so zameraním na informatiku, mechatroniku a elektrotechniku.

Aby sme udržali vysokú odbornú a metodickú úroveň, prosíme o dodržiavanie nasledujúcich zásad.

---

## 📐 Konvencie pomenovávania súborov a adresárov

1. **Názvy adresárov**: Používajte ASCII znaky bez diakritiky, medzery odpájajte podčiarkovníkom (`_`).
   - Príklad: `01_Premenne_a_datove_typy/`
2. **Názvy kódových súborov**:
   - Python: `lowercase` s podčiarkovníkom, napr. `kalkulacka.py`.
   - C / C++: `main.c`, `main.cpp` alebo popisné názvy ako `array_sorting.cpp`.
3. **Priečinky pre cvičenia a projekty**:
   - Všetky samostané úlohy patria do priečinka `cvicenia/`.
   - Komplexnejšie práce a študentské projekty patria do priečinka `projekty/`.

---

## 📖 Metodická štruktúra výučbového materiálu

Každá nová lekcia alebo študijný materiál v Markdown formáte by mal podľa možností dodržiavať túto šablónu:

1. **Názov a cieľ lekcie**
2. **Prerekvizity** (čo už musí žiak vedieť)
3. **Vysvetlenie nového pojmu** (s dôrazom na pamäť a algoritmus)
4. **Jednoduchý kódový príklad**
5. **Podrobný rozbor kódu**
6. **Časté chyby a ich oprava**
7. **Samostatné úlohy (od úrovne A po D)**
8. **Zdroje na ďalšie štúdium**

---

## 🛠️ Štandard kvality zdrojového kódu

- **Odsadzovanie**: 4 medzery (Python, C, C++).
- **Komentáre**: Píšte v slovenskom jazyku. Komentáre majú vysvetľovať *prečo* sa niečo robí, nie iba opakovať syntax.
- **Formálne oslovenie**: Voči študentom používame vykanie ("Vytvorte...", "Nainštalujte...").
- **Kompilácia bez varovaní**: C/C++ kód musí byť skompilovateľný s príznakmi `-Wall -Wextra`.

---

## 🔗 Odkazy a referencie

- Pri odkazovaní na externé zdroje používajte primárne autoritatívne zdroje (docs.python.org, cppreference.com, learn.microsoft.com).
- Pri výučbových videách odkloňte na kanál **Informatika s Mišom** (`https://www.youtube.com/@InformatikasMišom`).
- Všetky interné odkazy musia byť relatívne k root adresáru repozitára.

---

## 🚀 Postup pri odovzdávaní zmien (Git Workflow)

1. Vytvorte si novú vetvu (`git checkout -b nova-lekcia-python`).
2. Vykonajte úpravy a otestujte spustiteľnosť kódov.
3. Overte funkčnosť relatívnych odkazov v Markdown.
4. Vytvorte výstižný commit (`git commit -m "Pridaná lekcia o pointeroch v C"`).
5. Vytvorte Pull Request.
