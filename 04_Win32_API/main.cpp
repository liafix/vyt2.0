#ifndef UNICODE
#define UNICODE
#endif

#include <windows.h>

/**
 * Modul 04: Win32 API - Ukážkový štartovací kód
 * Vytvorenie základného okna v OS Windows a spracovanie udalostí.
 */

// Procedúra okna - spracováva správy zaslané systémom Windows
LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
    case WM_CREATE: {
        // Vytvorenie tlačidla v okne
        CreateWindow(
            L"BUTTON",  // Predefined class name
            L"Klikni sem", // Text tlačidla
            WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON, // Štýly
            50, 50, 120, 30, // Pozícia X, Y, Šírka, Výška
            hwnd,       // Rodičovské okno
            (HMENU)1,   // ID tlačidla
            (HINSTANCE)GetWindowLongPtr(hwnd, GWLP_HINSTANCE),
            NULL
        );
        return 0;
    }

    case WM_COMMAND: {
        if (LOWORD(wParam) == 1) { // Stlačené tlačidlo s ID 1
            MessageBox(hwnd, L"Pozdrav z Win32 API aplikácie!", L"Informácia", MB_OK | MB_ICONINFORMATION);
        }
        return 0;
    }

    case WM_DESTROY:
        PostQuitMessage(0);
        return 0;

    case WM_PAINT: {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hwnd, &ps);
        TextOut(hdc, 50, 20, L"Vítajte v Win32 API GUI aplikácii!", 34);
        EndPaint(hwnd, &ps);
        return 0;
    }
    }

    return DefWindowProc(hwnd, uMsg, wParam, lParam);
}

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow) {
    // Registrácia triedy okna
    const wchar_t CLASS_NAME[] = L"MojaWin32Trieda";

    WNDCLASS wc = { };
    wc.lpfnWndProc   = WindowProc;
    wc.hInstance     = hInstance;
    wc.lpszClassName = CLASS_NAME;
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
    wc.hCursor       = LoadCursor(NULL, IDC_ARROW);

    RegisterClass(&wc);

    // Vytvorenie okna
    HWND hwnd = CreateWindowEx(
        0,                              // Optional window styles
        CLASS_NAME,                     // Window class
        L"Win32 API - Programovanie",    // Window text
        WS_OVERLAPPEDWINDOW,            // Window style

        // Size and position
        CW_USEDEFAULT, CW_USEDEFAULT, 400, 200,

        NULL,       // Parent window
        NULL,       // Menu
        hInstance,  // Instance handle
        NULL        // Additional application data
    );

    if (hwnd == NULL) {
        return 0;
    }

    ShowWindow(hwnd, nCmdShow);

    // Run the message loop
    MSG msg = { };
    while (GetMessage(&msg, NULL, 0, 0) > 0) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    return 0;
}
