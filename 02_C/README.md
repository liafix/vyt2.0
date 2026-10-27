# Modul 02: C – Procedurálne Programovanie a Správa Pamäte

Vítajte v treťom module. Programovací jazyk **C** je univerzálny, efektívny a systémový programovací jazyk. Tvorí základ vývoja operačných systémov, embedded zariadení, mikrokontrolérov v mechatronike a ovládačov hardvéru.

Cieľom tohto modulu je porozumieť procedurálnemu modelu, statickému typovaniu a najmä **práci s počítačovou pamäťou** (ukazovatele, adresa, zásobník, halda).

---

## 🎯 Vzdelávacie ciele
Po absolvovaní tohto modulu budete vedieť:
- Porozumieť štruktúre C programu, funkcii `main()` a hlavičkovým súborom (`#include <stdio.h>`).
- Pracovať so základnými dátovými typmi (`int`, `float`, `double`, `char`) a správnym formátovaním výstupu (`printf`, `scanf`).
- Rozumieť rozsahu platnosti premenných (`scope`) a životnosti objektov.
- **Masterovať prácu s pamäťou a ukazovateľmi**: adresný operátor `&`, dereferenčný operátor `*`, pointerová aritmetika.
- Dynamicky alokovať pamäť pomocou `malloc()`, `calloc()`, `realloc()` a prevencii únikov pamäte (`free()`).
- Definovať vlastné štruktúry (`struct`) a používateľské typy (`typedef`).
- Rozdeľovať programy do viacerých moduly pomocou `.h` a `.c` súborov.
- Používať kompilátor GCC s bezpečnostnými príznakmi `-Wall -Wextra -Wpedantic`.

---

## 🗺️ Učebná cesta modulu

| Lekcia / Priečinok | Téma | Popis |
| :--- | :--- | :--- |
| [`00_Prostredie_a_struktura_programu/`](./00_Prostredie_a_struktura_programu/) | Prostredie a Kompilácia | GCC, preprocesor, štruktúra C programu a funkcia `main`. |
| [`01_Premenne_a_datove_typy/`](./01_Premenne_a_datove_typy/) | Typy a Pamäť | Základné typy, veľkosti v bajtoch (`sizeof`) a modifikátory. |
| [`02_Operatory_a_vyrazy/`](./02_Operatory_a_vyrazy/) | Operátory | Aritmetické, bitové a logické operátory. |
| [`03_Podmienky_a_cykly/`](./03_Podmienky_a_cykly/) | Riadenie toku | Podmienky (`if-else`, `switch`) a cykly (`for`, `while`, `do-while`). |
| [`04_Funkcie_a_scope/`](./04_Funkcie_a_scope/) | Funkcie a Lokálny Scope | Deklarácia, definícia, odovzdávanie hodnotou vs. odkazom cez ukazovateľ. |
| [`05_Polia_a_retazce/`](./05_Polia_a_retazce/) | Polia a C-Reťazce | Jednorozmerné/viacrozmerné polia a reťazce ukončené `\0`. |
| [`06_Ukazovatele_a_pamat/`](./06_Ukazovatele_a_pamat/) | Ukazovatele (Pointers) | Pamäťová adresa, ukazovatele, pointerová aritmetika a dereferencia. |
| [`07_Struktury_a_vymenovane_typy/`](./07_Struktury_a_vymenovane_typy/) | Štruktúry | Užívateľské dátové typy `struct` a `enum`. |
| [`08_Dynamicka_pamat/`](./08_Dynamicka_pamat/) | Dynamická Alokácia | Práca s haldou (Heap): `malloc`, `free`, uvoľňovanie a memory leaks. |
| [`09_Subory/`](./09_Subory/) | Práca so súbormi | Čítanie a zápis pomocou `fopen`, `fprintf`, `fscanf`, `fclose`. |
| [`10_Header_a_moduly/`](./10_Header_a_moduly/) | Modulárny vývoj | Hlavičkové súbory (`.h`), include guards `#ifndef`. |
| [`11_Debugging_a_bezpecnost/`](./11_Debugging_a_bezpecnost/) | Ladenie a Bezpečnosť | Predchádzanie pretečeniu buffera (*Buffer Overflow*) a neplatným ukazovateľom. |
| [`cvicenia/`](./cvicenia/) | Cvičenia | Úlohy na precvičenie C syntaxe a ukazovateľov. |
| [`projekty/`](./projekty/) | Miniprojekt | *Dynamický Správca Pamäte pre Snímače (Dynamic Sensor Buffer)*. |

---

## 📺 Odporúčané študijné zdroje

- 🌐 **W3Schools**: [C Programming Tutorial](https://www.w3schools.com/c/)
- 📖 **Autoritatívna C Referencia**: [cppreference.com - C Reference](https://en.cppreference.com/w/c)
- 📚 **Knižná klasika**: *Brian W. Kernighan, Dennis M. Ritchie - The C Programming Language (ANSI C)*

---

## 🛠️ Kompilácia a Spustenie

Na kompiláciu použite kompilátor GCC s prísnymi varovaniami:

```bash
# Kompilácia programu main.c
gcc -std=c17 -Wall -Wextra -Wpedantic main.c -o main

# Spustenie
./main          # Linux / macOS
main.exe        # Windows
```

---

## 💻 Štartovací kód (Ukazovatele v C)

```c
#include <stdio.h>

void vymeň(int *a, int *b) {
    int dočasná = *a;
    *a = *b;
    *b = dočasná;
}

int main(void) {
    int x = 10, y = 20;
    printf("Pred výmenou: x = %d, y = %d\n", x, y);

    // Odovzdávame adresy premenných
    vymeň(&x, &y);

    printf("Po výmene:    x = %d, y = %d\n", x, y);
    return 0;
}
```

---

## 🏁 Pokračovanie v štúdiu

Po zvládnutí C a práce s pamäťou prejdite na modul [`03_C++`](../03_C++/README.md), kde využijete získané vedomosti pri objektovo orientovanom návrhu a RAII správe zdrojov.
