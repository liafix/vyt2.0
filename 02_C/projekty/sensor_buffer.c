#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/**
 * Miniprojekt: Dynamický Pamäťový Zásobník pre Senzorové Dáta
 * Modul: 02_C / projekty
 */

typedef struct {
    int id;
    float teplota;
    float tlak;
} SenzorDati;

typedef struct {
    SenzorDati *data;
    size_t kapacita;
    size_t pocet;
} SenzorBuffer;

SenzorBuffer* vytvor_buffer(size_t zaciatocna_kapacita) {
    SenzorBuffer *b = (SenzorBuffer*)malloc(sizeof(SenzorBuffer));
    if (!b) return NULL;

    b->data = (SenzorDati*)malloc(zaciatocna_kapacita * sizeof(SenzorDati));
    if (!b->data) {
        free(b);
        return NULL;
    }
    b->kapacita = zaciatocna_kapacita;
    b->pocet = 0;
    return b;
}

int pridaj_zaznam(SenzorBuffer *b, SenzorDati zaznam) {
    if (b->pocet >= b->kapacita) {
        size_t nova_kapacita = b->kapacita * 2;
        SenzorDati *novy_data = (SenzorDati*)realloc(b->data, nova_kapacita * sizeof(SenzorDati));
        if (!novy_data) return 0; // Alokácia zlyhala
        b->data = novy_data;
        b->kapacita = nova_kapacita;
        printf("[INFO] Alokácia rozšírená na kapacitu: %zu\n", nova_kapacita);
    }
    b->data[b->pocet++] = zaznam;
    return 1;
}

void uvolni_buffer(SenzorBuffer *b) {
    if (b) {
        if (b->data) free(b->data);
        free(b);
        printf("[OK] Dynamická pamäť bola úspešne uvoľnená.\n");
    }
}

int main(void) {
    printf("=== Miniprojekt: Dynamická Správa Pamäte (C) ===\n\n");

    SenzorBuffer *buffer = vytvor_buffer(2);
    if (!buffer) {
        fprintf(stderr, "Chyba alokácie pamäte!\n");
        return 1;
    }

    SenzorDati d1 = {1, 22.4f, 1013.2f};
    SenzorDati d2 = {2, 23.1f, 1012.8f};
    SenzorDati d3 = {3, 21.9f, 1014.0f};

    pridaj_zaznam(buffer, d1);
    pridaj_zaznam(buffer, d2);
    pridaj_zaznam(buffer, d3); // Vyvolá realloc

    printf("\nUložené záznamy (%zu/%zu):\n", buffer->pocet, buffer->kapacita);
    for (size_t i = 0; i < buffer->pocet; i++) {
        printf("  ID: %d | Teplota: %.1f °C | Tlak: %.1f hPa\n",
               buffer->data[i].id, buffer->data[i].teplota, buffer->data[i].tlak);
    }

    uvolni_buffer(buffer);
    return 0;
}
