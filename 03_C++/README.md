# Modul 03: C++ – Objektovo Orientované Programovanie a Moderné C++

Vítajte v štvrtom module. Jazyk **C++** stavia na základoch jazyka C a prináša paradigma **Objektovo Orientovaného Programovania (OOP)**, silnú typovú kontrolu, abstrakciu, šablóny (templates) a Štandardnú knižnicu šablón (**STL**).

V modernom C++ (C++17) sa kladie dôraz na bezpečnosť pamäte, čitateľnosť, princíp **RAII** (*Resource Acquisition Is Initialization*) a používanie smart pointerov namiesto manuálnej správy pamäte.

---

## 🎯 Vzdelávacie ciele
Po absolvovaní tohto modulu budete vedieť:
- Rozumieť základy paradigmy OOP: **Puzdrenie (Encapsulation)**, **Dedičnosť (Inheritance)** a **Polymorfizmus (Polymorphism)**.
- Navrhovať vlastné triedy (`class`), definovať konštruktory, deštruktory a metódy.
- Rozumieť prístupovým právam (`public`, `private`, `protected`) a konštantným metódam (`const`).
- Efektívne pracovať so STL kontajnermi (`std::vector`, `std::string`, `std::map`) a STL algoritmami.
- Správne a bezpečne spravovať pamäť pomocou smart pointerov (`std::unique_ptr`, `std::shared_ptr`) a RAII.
- Rozumieť virtuálnym funkciám (`virtual`), čistým virtuálnym funkciám a abstraktným rozhraniam.
- Ošetrovať výnimky (`try-throw-catch`) a pracovať so súborovými prúdmi (`std::ifstream`, `std::ofstream`).

---

## 🗺️ Učebná cesta modulu

| Lekcia / Priečinok | Téma | Popis |
| :--- | :--- | :--- |
| [`00_Prostredie_a_zaklady/`](./00_Prostredie_a_zaklady/) | Prostredie a Kompilácia C++ | Kompilátor `g++`, štandardy C++17, `std::cout` a `std::cin`. |
| [`01_Typy_a_vyrazy/`](./01_Typy_a_vyrazy/) | Dátové typy v C++ | Typ `bool`, `auto`, referencie (`&`) a konštanty (`const`). |
| [`02_Podmienky_a_cykly/`](./02_Podmienky_a_cykly/) | Riadenie toku a Range-for | Podmienky, cykly a moderný `range-based for` cyklus. |
| [`03_Funkcie_a_referencie/`](./03_Funkcie_a_referencie/) | Referencie a Overloading | Preťažovanie funkcií (*Function Overloading*) a predvolené argumenty. |
| [`04_String_a_kontajnery/`](./04_String_a_kontajnery/) | STL Kontajnery | Práca so `std::string`, `std::vector` a `std::array`. |
| [`05_Triedy_a_objekty/`](./05_Triedy_a_objekty/) | Základy Tried | Definícia triedy, objektov, atribútov a metód. |
| [`06_Enkapsulacia_a_konstruktory/`](./06_Enkapsulacia_a_konstruktory/) | Enkapsulácia a Konštruktory | Konštruktory, deštruktory, explicitná inicializácia a zapuzdrenie. |
| [`07_Dedicnost_a_polymorfizmus/`](./07_Dedicnost_a_polymorfizmus/) | Dedičnosť a Polymorfizmus | Odvodené triedy, `virtual` metódy, `override` a abstraktné triedy. |
| [`08_STL_a_algoritmy/`](./08_STL_a_algoritmy/) | STL Algoritmy a Lambda | Iterátory, `std::sort`, `std::find_if` a lambda výrazy. |
| [`09_Vynimky_a_subory/`](./09_Vynimky_a_subory/) | Výnimky a Fstream | Ošetrenie chýb cez výnimky (`std::exception`) a práca so súbormi. |
| [`10_Pamat_a_RAII/`](./10_Pamat_a_RAII/) | RAII a Smart Pointers | Princíp RAII, `std::unique_ptr` a `std::shared_ptr`. |
| [`11_Testovanie_a_build/`](./11_Testovanie_a_build/) | Build a Cmake | Organizácia väčších projektov v C++. |
| [`cvicenia/`](./cvicenia/) | Cvičenia | Úlohy na procvičenie OOP v C++. |
| [`projekty/`](./projekty/) | Miniprojekt | *Objektový Systém Riadenia Mechatronického Bota (Robot Controller)*. |

---

## 📺 Odporúčané študijné zdroje

- 🌐 **W3Schools**: [C++ Tutorial](https://www.w3schools.com/cpp/)
- 📖 **Autoritatívna C++ Referencia**: [cppreference.com - C++ Reference](https://en.cppreference.com/w/cpp)
- 🎓 **Kompletný C++ Tutoriál**: [learncpp.com](https://www.learncpp.com/)

---

## 🛠️ Kompilácia a Spustenie

Na kompiláciu použite kompilátor `g++` so štandardom **C++17**:

```bash
# Kompilácia
g++ -std=c++17 -Wall -Wextra main.cpp -o main

# Spustenie
./main          # Linux / macOS
main.exe        # Windows
```

---

## 💻 Štartovací kód (Smart Pointers a Polymorfizmus)

```cpp
#include <iostream>
#include <vector>
#include <memory>
#include <string>

class Zariadenie {
protected:
    std::string nazov;
public:
    Zariadenie(std::string n) : nazov(std::move(n)) {}
    virtual ~Zariadenie() = default;

    virtual void spusti() const = 0; // Čistá virtuálna metóda
};

class Motor : public Zariadenie {
public:
    Motor(std::string n) : Zariadenie(std::move(n)) {}
    void spusti() const override {
        std::cout << "[MOTOR] " << nazov << " štartuje otáčky...\n";
    }
};

int main() {
    std::vector<std::unique_ptr<Zariadenie>> zariadenia;
    zariadenia.push_back(std::make_unique<Motor>("Krokový Motor X"));
    zariadenia.push_back(std::make_unique<Motor>("DC Motor Y"));

    for (const auto& z : zariadenia) {
        z->spusti();
    }
    return 0;
}
```

---

## 🏁 Pokračovanie v štúdiu

Po zvládnutí C++ pokračujte záverečným modulom [`04_Win32_API`](../04_Win32_API/), kde prejdete k vývoju okenných desktopových aplikácií pre operačný systém Windows.
