# Modul 01: Python – Základy Programovania a Algoritmizácie

Vítajte v druhom module. **Python** je jeden z najpopulárnejších a najčítanejších programovacích jazykov na svete. Pre svoju čitateľnosť je ideálnym nástrojom pre výučbu algoritmického myslenia, skriptovania, spracovania dát a objektovo orientovaného programovania.

---

## 🎯 Vzdelávacie ciele
Po absolvovaní tohto modulu budete vedieť:
- Rozumieť základnej syntaxi, indentácii (odsadzovaniu) a dynamickému typovaniu v Pythone.
- Pracovať so základnými dátovými typmi (`int`, `float`, `str`, `bool`) a operátormi.
- Používať podmienky (`if-elif-else`) a cykly (`for`, `while`).
- Správne pracovať s dátovými štruktúrami: zoznamy (`list`), n-tice (`tuple`), množiny (`set`) a slovníky (`dict`).
- Písať čisté, opakovane použiteľné funkcie s parametrami a návratovými hodnotami.
- Spracovávať výnimky (`try-except`) a pracovať s textovými a CSV súbormi.
- Rozumieť základom Objektovo Orientovaného Programovania (OOP): triedy, objekty, metódy, dedičnosť.
- Dodržiavať oficiálny štýl kódu PEP 8.

---

## 🗺️ Učebná cesta modulu

| Lekcia / Priečinok | Téma | Popis |
| :--- | :--- | :--- |
| [`00_Uvod_a_prostredie/`](./00_Uvod_a_prostredie/) | Inštalácia a VS Code | Nastavenie Python 3, spustenie prvého skriptu a nastavenie IDE. |
| [`01_Premenne_a_datove_typy/`](./01_Premenne_a_datove_typy/) | Premenné a typy | Základné typy, konverzie typov (`type casting`) a premenné. |
| [`02_Vstup_a_vystup/`](./02_Vstup_a_vystup/) | Vstup a výstup | Použitie `print()`, `input()` a f-strings formátovania textu. |
| [`03_Operatory/`](./03_Operatory/) | Operátory | Aritmetické, porovnávacie a logické operátory. |
| [`04_Podmienky/`](./04_Podmienky/) | Podmienené príkazy | Řídenie toku programu pomocou `if`, `elif` a `else`. |
| [`05_Cykly/`](./05_Cykly/) | Cykly a opakovanie | Opakovanie deja pomocou `for` a `while`, príkazy `break` a `continue`. |
| [`06_Zoznamy_a_slovniky/`](./06_Zoznamy_a_slovniky/) | Dátové štruktúry | Práca so zoznamami (`list`), n-ticami (`tuple`) a slovníkmi (`dict`). |
| [`07_Funkcie/`](./07_Funkcie/) | Funkcie a modularita | Definícia vlastných funkcií (`def`), parametre a návratové hodnoty. |
| [`08_Retazce_a_subory/`](./08_Retazce_a_subory/) | Reťazce a súbory | Spracovanie reťazcov, čítanie a zápis do súborov (`with open()`). |
| [`09_Vynimky_a_moduly/`](./09_Vynimky_a_moduly/) | Ošetrenie chýb | Odchytávanie výnimiek (`try-except`) a import modulov. |
| [`10_OOP/`](./10_OOP/) | Objektový návrh | Triedy, konštruktor `__init__`, atribúty a metódy. |
| [`cvicenia/`](./cvicenia/) | Praktické úlohy | Cvičenia na prehĺbenie vedomostí. |
| [`projekty/`](./projekty/) | Miniprojekt | Komplexný študentský projekt: *Systém na sprácu meraní senzorov*. |

---

## 📺 Odporúčané študijné zdroje

- 🎬 **YouTube – Informatika s Mišom**: [Kurz Pythonu v Slovenčine](https://www.youtube.com/@InformatikasMi%C5%A1om)
- 📖 **Slovenský kurz Pythonu**: [python.input.sk (Ondrej Králik)](https://python.input.sk/)
- 🌐 **W3Schools**: [Python Tutorial](https://www.w3schools.com/python/)
- 📚 **Oficiálna dokumentácia**: [Python 3 Documentation](https://docs.python.org/3/tutorial/)
- 🎨 **Code Style Guide**: [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/)

---

## 💻 Štartovací príklad

Vytvorte súbor `main.py` a vyskúšajte si spustiť nasledujúci kód:

```python
#!/usr/bin/env python3

def vypocitaj_priemer(hodnoty: list[float]) -> float:
    """Vypočíta a vráti aritmetický priemer zo zoznamu čísel."""
    if not hodnoty:
        return 0.0
    return sum(hodnoty) / len(hodnoty)

if __name__ == "__main__":
    teploty = [21.5, 22.0, 19.8, 23.1, 20.4]
    priemer = vypocitaj_priemer(teploty)
    print(f"Priemerná nameraná teplota je: {priemer:.2f} °C")
```

---

## 🏁 Pokračovanie v štúdiu

Po absolvovaní Pythonu pokračujte modulom [`02_C`](../02_C/), kde prejdete od skriptovania k správe pamäte a procedurálnemu programovaniu v jazyku C.
