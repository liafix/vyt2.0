# Lekcia 07: Dedičnosť a Polymorfizmus v C++

## 1. Cieľ lekcie
Pochopiť princípy dedičnosti, vytvárať odvodené triedy, rozumieť kľúčovému slovu `virtual`, `override` a implementovať polymorfný návrh rozhraní.

---

## 2. Prerekvizity
- Znalosť základov tried, konštruktorov a zapuzdrenia v C++.

---

## 3. Teoretické vysvetlenie

- **Dedičnosť (Inheritance)**: Umožňuje novej (odvodenej) triede prevziať atribúty a metódy zo základnej triedy.
- **Polymorfizmus (Polymorphism)**: Schopnosť volať rovnaké meno metódy na rôznych objektoch v hierarchii, pri čom sa vykoná správna implementácia podľa skutočného typu objektu za behu programu (*Dynamic Dispatch*).

Kľúčové slová:
- `virtual`: Označuje metódu v základnej triede, ktorú je možné prepísať.
- `override`: Označuje v odvodenej triede, že metóda zámerne prepisuje virtuálnu metódu zo základnej triedy (kontrola kompilátorom).
- `= 0`: Robí metódu **čisto virtuálnou** (*Pure Virtual Function*) a zo základnej triedy vytvára **abstraktnú triedu** (nie je možné vytvárať jej priame inštancie).

---

## 4. Kódový príklad s rozborom

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <memory>

// Abstraktná základná trieda (Rozhranie)
class Senzor {
protected:
    std::string nazov;
public:
    Senzor(std::string n) : nazov(std::move(n)) {}
    virtual ~Senzor() = default; // Vždy virtuálny deštruktor pre polymorfné triedy!

    virtual double odcitaj() const = 0; // Čistá virtuálna metóda
    std::string getNazov() const { return nazov; }
};

// Odvodená trieda 1
class Teplomer : public Senzor {
private:
    double teplota;
public:
    Teplomer(std::string n, double t) : Senzor(std::move(n)), teplota(t) {}
    double odcitaj() const override {
        return teplota;
    }
};

int main() {
    std::vector<std::unique_ptr<Senzor>> senzory;
    senzory.push_back(std::make_unique<Teplomer>("Izbový Teplomer", 22.5));

    for (const auto& s : senzory) {
        std::cout << s->getNazov() << " -> " << s->odcitaj() << " °C\n";
    }
    return 0;
}
```

---

## 5. Časté chyby

- **Chýbajúci virtuálny deštruktor v základnej triede**: Ak vymažete objekt odvodenej triedy cez pointer na základnú triedu bez virtuálneho deštruktora, deštruktor odvodenej triedy sa nezavolá (únik zdrojov/pamäte).
- **Zabudnuté `override`**: Ak sa pomýlite v hlavičke metódy bez `override`, kompilátor vytvorí novú metódu namiesto prepísania existujúcej.

---

## 6. Samostatné úlohy

- **Úroveň A (Základ)**: Vytvorte základnú triedu `Tvar` s metódou `vypis()` a odvodenú triedy `Kruh`.
- **Úroveň B (Precvičenie)**: Pridajte do abstraktnej triedy `Tvar` čistú virtuálnu metódu `double vypocitajObsah() const = 0` a implementujte ju pre `Obdlznik` a `Kruh`.
- **Úroveň C (Aplikácia)**: Vytvorte zoznam `std::vector<std::unique_ptr<Tvar>>`, naplňte ho rôznymi tvarmi a spočítajte celkový obsah všetkých tvarov.
- **Úroveň D (Výzva)**: Navrhnite triedu `KombinovanyTvar`, ktorá v sebe obsahuje zoznam iných tvarov (vzor *Composite*) a vypočíta ich súhrnný obsah.
