#ifndef UNICODE
#define UNICODE
#endif

#include <windows.h>
#include <string>

/**
 * Miniprojekt: Win32 GUI Kalkulačka
 * Modul: 04_Win32_API / projekty
 */

HWND hEditInput1, hEditInput2, hStaticResult;

LRESULT CALLBACK WndProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
    case WM_CREATE: {
        // Štítky a vstupy
        CreateWindow(L"STATIC", L"Číslo 1:", WS_VISIBLE | WS_CHILD, 20, 20, 60, 20, hwnd, NULL, NULL, NULL);
        hEditInput1 = CreateWindow(L"EDIT", L"0", WS_VISIBLE | WS_CHILD | WS_BORDER | ES_NUMBER, 90, 20, 100, 20, hwnd, NULL, NULL, NULL);

        CreateWindow(L"STATIC", L"Číslo 2:", WS_VISIBLE | WS_CHILD, 20, 50, 60, 20, hwnd, NULL, NULL, NULL);
        hEditInput2 = CreateWindow(L"EDIT", L"0", WS_VISIBLE | WS_CHILD | WS_BORDER | ES_NUMBER, 90, 50, 100, 20, hwnd, NULL, NULL, NULL);

        // Tlačidlo na výpočet
        CreateWindow(L"BUTTON", L"Spočítaj (+)", WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON, 20, 90, 170, 30, hwnd, (HMENU)101, NULL, NULL);

        // Výsledný štítok
        hStaticResult = CreateWindow(L"STATIC", L"Výsledok: 0", WS_VISIBLE | WS_CHILD, 20, 135, 200, 25, hwnd, NULL, NULL, NULL);
        return 0;
    }

    case WM_COMMAND: {
        if (LOWORD(wParam) == 101) { // Stlačené tlačidlo Spočítaj
            wchar_t buf1[32], buf2[32];
            GetWindowText(hEditInput1, buf1, 32);
            GetWindowText(hEditInput2, buf2, 32);

            double val1 = _wtof(buf1);
            double val2 = _wtof(buf2);
            double res = val1 + val2;

            std::wstring resStr = L"Výsledok: " + std::to_wstring(res);
            SetWindowText(hStaticResult, resStr.c_str());
        }
        return 0;
    }

    case WM_DESTROY:
        PostQuitMessage(0);
        return 0;
    }
    return DefWindowProc(hwnd, uMsg, wParam, lParam);
}

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE, PWSTR, int nCmdShow) {
    const wchar_t CLASS_NAME[] = L"Win32CalcClass";
    WNDCLASS wc = {};
    wc.lpfnWndProc = WndProc;
    wc.hInstance = hInstance;
    wc.lpszClassName = CLASS_NAME;
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);

    RegisterClass(&wc);

    HWND hwnd = CreateWindowEx(0, CLASS_NAME, L"Win32 Kalkulačka", WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU | WS_MINIMIZEBOX,
                               CW_USEDEFAULT, CW_USEDEFAULT, 230, 210, NULL, NULL, hInstance, NULL);

    if (!hwnd) return 0;
    ShowWindow(hwnd, nCmdShow);

    MSG msg = {};
    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
    return 0;
}
