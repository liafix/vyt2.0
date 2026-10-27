# Lekcia 06: Ukazovatele a Správa Pamäte

## 1. Cieľ lekcie
Pochopiť koncept pamäťovej adresy, naučiť sa vytvárať ukazovatele (pointers), vykonávať dereferenciu a odovzdávať parametre funkciám odkazom.

---

## 2. Prerekvizity
- Znalosť premenných, dátových typov a funkcií v C.

---

## 3. Teoretické vysvetlenie

Pamäť RAM počítača si môžeme predstaviť ako obrovské jednorozmerné pole očíslovaných buniek (bajtov). Každý bajt má svoju unikátnu **pamäťovú adresu**.

- **Adresný operátor (`&`)**: Vráti pamäťovú adresu premennej.
- **Ukazovateľ (Pointer)**: Premenná, ktorej hodnotou je pamäťová adresa inej premennej.
- **Dereferenčný operátor (`*`)**: Sprístupní hodnotu uloženú na adrese, na ktorú ukazovateľ ukazuje.

Anatómia deklarácie ukazovateľa:
```c
int x = 42;
int *p_x = &x; // p_x obsahuje pamäťovú adresu premennej x
```

Vizualizácia pamäte:
```text
Premenná:    x                  p_x (Pointer)
Hodnota:     [ 42 ]             [ 0x7ffd8 ]
Adresa:      0x7ffd8            0x7ffdc
```

---

## 4. Kódový príklad s rozborom

```c
#include <stdio.h>

int main(void) {
    int cislo = 100;
    int *ptr = &cislo; // ptr ukazuje na cislo

    printf("Hodnota premennej cislo: %d\n", cislo);
    printf("Adresa premennej cislo:  %p\n", (void*)&cislo);
    printf("Hodnota v ukazovateli ptr: %p\n", (void*)ptr);
    printf("Hodnota na adrese *ptr:  %d\n", *ptr);

    // Zmena hodnoty cez pointer
    *ptr = 200;
    printf("Nová hodnota cislo po zmene cez *ptr: %d\n", cislo);

    return 0;
}
```

---

## 5. Časté chyby a ich oprava

- **Dereferencovanie inicializovaného (Dangling / Wild) ukazovateľa**:
  - *Chyba*: `int *p; *p = 10;` (Ukazovateľ smeruje na náhodnú pamäť - riziko Segmentation Fault).
  - *Oprava*: Vždy inicializujte ukazovateľ na platnú adresu alebo `NULL`: `int *p = NULL;`.
- **Zmena samotnej adresy namiesto hodnoty**:
  - `p++` posunie ukazovateľ na nasledujúcu pamäťovú adresu, zatiaľ čo `(*p)++` inkrementuje hodnotu na danej adrese.

---

## 6. Samostatné úlohy

- **Úroveň A (Základ)**: Vytvorte premennú typu `double` a ukazovateľ na ňu. Vytlačte hodnotu aj adresu.
- **Úroveň B (Precvičenie)**: Napíšte funkciu `void nuluj(int *p)`, ktorá nastaví hodnotu premennej na adrese `p` na `0`.
- **Úroveň C (Aplikácia)**: Napíšte funkciu `void najdi_min_max(const int *pole, int velkost, int *min, int *max)`, ktorá pomocou ukazovateľov vráti najmenšiu a najväčšiu hodnotu v poli.
- **Úroveň D (Výzva)**: Napíšte funkciu na obrátenie (reverz) poľa čísel bez použitia indexového operátora `[]` (iba pomocou pointerovej aritmetiky `ptr++`).
