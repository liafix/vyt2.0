# Lekcia 02: Okno a Procedúra WndProc

## 1. Cieľ lekcie
Porozumieť životnému cyklu Windows okna, správe správ (*Messages*) a funkcii `WndProc`.

---

## 2. Prerekvizity
- Základy C/C++ (ukazovatele, dátové typy).
- Funkcia `wWinMain()`.

---

## 3. Teoretické vysvetlenie

Vo Win32 API je vývoj aplikácií **riadený udalosťami** (*Event-Driven*). Keď používateľ klikne myšou, stlačí klávesu alebo zmení veľkosť okna, operačný systém Windows pošle do aplikácie **správu** (`MSG`).

- **Message Loop (Smyčka správ)**: Využíva `GetMessage()`, `TranslateMessage()` a `DispatchMessage()` na prijímanie a odosielanie správ.
- **`WndProc` (Window Procedure)**: Callback funkcia, ktorú volá systém Windows zakaždým, keď pre dané okno dorazí nová správa.

Anatómia `WndProc`:
```cpp
LRESULT CALLBACK WndProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
        case WM_PAINT:
            // Vykreslenie okna
            return 0;
        case WM_DESTROY:
            // Zatvorenie okna
            PostQuitMessage(0);
            return 0;
    }
    return DefWindowProc(hwnd, uMsg, wParam, lParam);
}
```

---

## 4. Časté chyby

- **Chýbajúce `DefWindowProc()`**: Ak v `switch` spracujete iba niektoré správy a pre ostatné nezavoláte `DefWindowProc()`, okno sa nebude vedieť správne prekresliť alebo nereaguje na vstup.
- **Zabudnutý `PostQuitMessage(0)` pri `WM_DESTROY`**: Aplikácia zatvorí okno, ale proces zostane bežať na pozadí v Správcovi úloh.

---

## 5. Samostatné úlohy

- **Úroveň A (Základ)**: Zmeňte nadpis okna pri jeho vytvorení.
- **Úroveň B (Precvičenie)**: Pridajte spracovanie správy `WM_LBUTTONDOWN` a zobrazte `MessageBox` pri kliknutí myšou do okna.
- **Úroveň C (Aplikácia)**: Vytvorte v okne jedno tlačidlo a jedno textové pole (`EDIT`) a po kliknutí na tlačidlo prečítajte text.
