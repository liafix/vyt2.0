#include <stdio.h>
#include <stdlib.h>

/**
 * Modul 02: C - Ukážkový štartovací program
 * Demonštrácia práce s ukazovateľmi (pointers) a štruktúrami.
 */

// Definícia štruktúry pre BOD v 2D priestore
typedef struct {
    double x;
    double y;
} Bod2D;

// Funkcia na výpis bodu
void vypis_bod(const Bod2D *b) {
    if (b != NULL) {
        printf("Bod [X: %.2f, Y: %.2f]\n", b->x, b->y);
    }
}

// Funkcia na posun bodu
void posun_bod(Bod2D *b, double dx, double dy) {
    if (b != NULL) {
        b->x += dx;
        b->y += dy;
    }
}

int main(void) {
    printf("=== Vitajte v module 02: Jazyk C ===\n\n");

    Bod2D bod = {3.5, 7.2};
    printf("Pôvodné súradnice:\n");
    vypis_bod(&bod);

    printf("\nPosúvame bod o (dx: 1.5, dy: -2.2)...\n");
    posun_bod(&bod, 1.5, -2.2);

    printf("Nové súradnice:\n");
    vypis_bod(&bod);

    return 0;
}
