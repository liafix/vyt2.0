# Modul 04: Win32 API – Vývoj Natívnych Desktopových Aplikácií pre Windows

Vítajte v záverečnom piatom module. **Win32 API** (Windows Application Programming Interface) je natívne C/C++ systémové rozhranie poskytované operačným systémom Microsoft Windows.

Umožňuje vytvárať grafické používateľské rozhrania (GUI), spravovať okno aplikácie, obsluhovať používateľské udalosti (myš, klávesnica) a komunikovať priamo so systémovými službami OS Windows.

---

## 🎯 Vzdelávacie ciele
Po absolvovaní tohto modulu budete vedieť:
- Porozumieť architektúre riadenej udalosťami (**Event-Driven Architecture**).
- Pochopiť funkciu hlavného vstupného bodu `wWinMain()` namiesto štandardného `main()`.
- Registrovať triedu okna (`RegisterClassEx`), vytvoriť okno (`CreateWindowEx`) a spustiť smyčku správ (**Message Loop**).
- Implementovať a spracovávať správu v procedúre okna `WndProc` (`WM_CREATE`, `WM_COMMAND`, `WM_PAINT`, `WM_DESTROY`).
- Vytvárať a obsluhovať štandardné Windows prvky GUI: tlačidlá (`BUTTON`), štítky (`STATIC`), textové polia (`EDIT`).
- Pracovať s dialógovými oknami (`MessageBox`) a systémovými zdrojmi.
- Rozumieť dátovým typom Win32 API: `HWND`, `HINSTANCE`, `MSG`, `WPARAM`, `LPARAM`, `LRESULT`.

---

## 🗺️ Učebná cesta modulu

| Lekcia / Priečinok | Téma | Popis |
| :--- | :--- | :--- |
| [`00_Uvod_a_priprava_prostredia/`](./00_Uvod_a_priprava_prostredia/) | Úvod a Architektúra | Základy Win32, architektonický koncept Event-Driven a nastavenie IDE. |
| [`01_Prva_desktopova_aplikacia/`](./01_Prva_desktopova_aplikacia/) | Vstupný bod `wWinMain` | Vstupný bod aplikácie a prvé okná pomocou `MessageBox`. |
| [`02_Okno_a_WndProc/`](./02_Okno_a_WndProc/) | Registrácia a Tvorba Okna | `WNDCLASSEX`, `CreateWindowEx` a registrácia v systéme. |
| [`03_Spravovanie_udalosti/`](./03_Spravovanie_udalosti/) | Message Loop a WndProc | Správová smyčka (`GetMessage`, `DispatchMessage`) a spracovanie v `WndProc`. |
| [`04_Ovladacie_prvky/`](./04_Ovladacie_prvky/) | GUI Prvky | Vkladanie tlačidiel, textových polí a správa `WM_COMMAND`. |
| [`05_Menu_a_dialogy/`](./05_Menu_a_dialogy/) | Menu a Dialógy | Tvorba hlavného menu okna a vlastné dialógové okná. |
| [`06_Subory_a_systemove_funkcie/`](./06_Subory_a_systemove_funkcie/) | Systémové API | Otváranie súborov prostredníctvom Windows API. |
| [`07_Grafika_a_GDI/`](./07_Grafika_a_GDI/) | Kreslenie a GDI | Základy Graphics Device Interface (GDI) a správa `WM_PAINT`. |
| [`08_Chyby_a_spravovanie_zdrojov/`](./08_Chyby_a_spravovanie_zdrojov/) | Správa Zdrojov | `GetLastError`, uvoľňovanie `HDC` a `HMENU`. |
| [`cvicenia/`](./cvicenia/) | Cvičenia | Úlohy na vývoj Win32 GUI aplikácií. |
| [`projekty/`](./projekty/) | Miniprojekt | *Win32 Desktopová Kalkulačka / Monitor Systému*. |

---

## 📚 Odporúčané študijné zdroje

- 📖 **Primárna Microsoft Dokumentácia**: [Microsoft Learn – Get Started with Win32 and C++](https://learn.microsoft.com/en-us/windows/win32/learnwin32/learn-to-program-for-windows)
- 📖 **Win32 API Index**: [Windows API Index](https://learn.microsoft.com/en-us/windows/win32/apiindex/windows-api-list)

---

## 🛠️ Kompilácia a Spustenie

### 1. Microsoft Visual Studio (Odporúčané)
- Vytvorte nový projekt typu **Windows Desktop Application** (C++).
- Pridajte kód zo súboru `main.cpp`.
- Stlačte `F5` pre kompiláciu a spustenie.

### 2. Kompilácia pomocou GCC (MinGW-w64) na Windows / Linux
```bash
g++ -std=c++17 -Wall main.cpp -o app.exe -mwindows -luser32 -lgdi32
./app.exe
```

---

## 💻 Štartovací kód Win32 Okna

```cpp
#ifndef UNICODE
#define UNICODE
#endif

#include <windows.h>

LRESULT CALLBACK WndProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
    case WM_CREATE:
        CreateWindow(L"BUTTON", L"Klikni ma", WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,
                     50, 50, 120, 30, hwnd, (HMENU)1, NULL, NULL);
        return 0;

    case WM_COMMAND:
        if (LOWORD(wParam) == 1) {
            MessageBox(hwnd, L"Tlačidlo bolo stlačené!", L"Info", MB_OK | MB_ICONINFORMATION);
        }
        return 0;

    case WM_DESTROY:
        PostQuitMessage(0);
        return 0;
    }
    return DefWindowProc(hwnd, uMsg, wParam, lParam);
}

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE, PWSTR, int nCmdShow) {
    const wchar_t CLASS_NAME[] = L"Win32DemoClass";
    WNDCLASS wc = {};
    wc.lpfnWndProc = WndProc;
    wc.hInstance = hInstance;
    wc.lpszClassName = CLASS_NAME;
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);

    RegisterClass(&wc);

    HWND hwnd = CreateWindowEx(0, CLASS_NAME, L"Win32 Aplikácia", WS_OVERLAPPEDWINDOW,
                               CW_USEDEFAULT, CW_USEDEFAULT, 400, 200, NULL, NULL, hInstance, NULL);

    if (!hwnd) return 0;
    ShowWindow(hwnd, nCmdShow);

    MSG msg = {};
    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
    return 0;
}
```

---

## 🏁 Záver Kurzu

Gratulujeme k absolvovaniu celého kurzu programovania! Teraz ovládate verzionovanie kódu (Git), skriptovanie (Python), správu pamäte (C), objektový návrh (C++) aj vývoj okenných aplikácií (Win32 API).
