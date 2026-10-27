# Lekcia 01: Základné príkazy Gitu

## 1. Cieľ lekcie
Naučiť sa základný pracovný cyklus v Gite: zistenie stavu, prispôsobenie zoznamu zmien (*Staging Area*) a vytvorenie uloženej snímky kódu (*Commit*).

---

## 2. Prerekvizity
- Nainštalovaný Git v systéme.
- Znalosť otvorenia terminálu / Git Bash.

---

## 3. Vysvetlenie trojúrovňovej architektúry Gitu

Git rozlišuje 3 hlavné priestory, v ktorých sa vaše súbory nachádzajú:

```text
[ Working Directory ]  ---> (git add) --->  [ Staging Area ]  ---> (git commit) --->  [ Local Repository ]
 (Upravené súbory)                           (Pripravené zmeny)                          (Uložené commity)
```

1. **Working Directory (Pracovný adresár)**: Miesto, kde fyzicky upravujete svoje súbory na disku.
2. **Staging Area (Index)**: Medzipriestor, kam pridávate presne tie zmeny, ktoré chcete zahrnúť do najbližšieho commitu.
3. **Local Repository (Lokálny repozitár)**: Databáza v zložke `.git`, kde sú trvalo uložené všetky snímky (commity) histórie.

---

## 4. Príklad pracovného cyklu

```bash
# 1. Zistenie stavu repozitára
git status

# 2. Pridanie súboru do Staging Area
git add main.py

# 3. Uloženie commitu s výstižnou správou
git commit -m "feat: Pridaná funkcia pre načítanie vstupu"

# 4. Zobrazenie histórie commitov
git log --oneline
```

---

## 5. Časté chyby a ich oprava

- **Chyba**: Zabudli ste pridať súbor pomocou `git add` pred commitom.
  - *Riešenie*: Spustite `git add názov_súboru` a potom vykonajte `git commit`.
- **Chyba**: Napísali ste nezmyselnú commit správu ako `asdf` alebo `zmeny`.
  - *Riešenie*: Používajte konvenciu Conventional Commits (`feat:`, `fix:`, `docs:`).

---

## 6. Samostatné úlohy

- **Úroveň A (Základ)**: Vytvorte nový súbor `test.txt`, zistite jeho stav pomocou `git status` a pridajte ho do Staging Area.
- **Úroveň B (Precvičenie)**: Vytvorte commit so správou `"docs: Pridaný prvý testovací súbor"`.
- **Úroveň C (Aplikácia)**: Upravte súbor `test.txt`, pridajte druhý riadok a pozrite si rozdiel pomocou `git diff`.
- **Úroveň D (Výzva)**: Vytvorte súbor `.gitignore` a nastavte ho tak, aby ignoroval všetky súbory s príponou `.log`.
