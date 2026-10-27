# Lekcia 07: Funkcie v Pythone

## 1. Cieľ lekcie
Pochopiť význam modularity kódu, naučiť sa definovať vlastné funkcie, odovzdávať parametre a navracať hodnoty pomocou `return`.

---

## 2. Prerekvizity
- Znalosť podmienok (`if-else`) a základných dátových typov.

---

## 3. Teoretické vysvetlenie

Funkcia je pomenovaný blok kódu, ktorý vykonáva konkrétnu úlohu. Pomáha vyhýbať sa duplicite kódu (princíp **DRY** - *Don't Repeat Yourself*).

Syntax definície funkcie:
```python
def nazov_funkcie(parameter1, parameter2):
    # Telo funkcie
    vysledok = parameter1 + parameter2
    return vysledok  # Návratová hodnota
```

---

## 4. Kódový príklad s rozborom

```python
def je_parne(cislo: int) -> bool:
    """Overí, či je zadané celé číslo párne."""
    return cislo % 2 == 0

# Volanie funkcie
testovane_cislo = 14
if je_parne(testovane_cislo):
    print(f"Číslo {testovane_cislo} je párne.")
else:
    print(f"Číslo {testovane_cislo} je nepárne.")
```

**Rozbor kódu:**
- `def je_parne(cislo: int)` definuje funkciu s jedným parametrom `cislo`. Type hint `: int` špecifikuje očakávaný typ.
- `-> bool` označuje, že funkcia vráti logickú hodnotu `True` alebo `False`.
- Operátor `%` (modulo) vracia zvyšok po delení číslom 2.

---

## 5. Časté chyby
- **Zabudnutý `return`**: Ak funkcia nemá príkaz `return`, vráti hodnotu `None`.
- **Nesprávne odsadenie**: Telo funkcie musí byť odsadené o 4 medzery.

---

## 6. Samostatné úlohy

- **Úroveň A (Základ)**: Napíšte funkciu `pozdrav(meno)`, ktorá vytlačí `"Ahoj, <meno>!"`.
- **Úroveň B (Precvičenie)**: Napíšte funkciu `kruh_obsah(polomer)`, ktorá vráti obsah kruhu ($S = \pi \cdot r^2$).
- **Úroveň C (Aplikácia)**: Napíšte funkciu `filtruj_kladne(zoznam)`, ktorá zo zadaného zoznamu čísel vráti nový zoznam obsahujúci iba kladné čísla.
- **Úroveň D (Výzva)**: Napíšte funkciu `je_prvocislo(n)`, ktorá overí, či je číslo `n` prvočíslom.
