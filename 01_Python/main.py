#!/usr/bin/env python3
"""
Modul 01: Python - Ukážkový štartovací skript
Tento skript demonštruje základné funkcie, prácu so zoznamami a podmienkami v Pythone.
"""

def vypocitaj_statistiky(cisla: list[float]) -> dict:
    """Vypočíta súčet, priemer, minimum a maximum zo zoznamu čísel."""
    if not cisla:
        return {}

    sucet = sum(cisla)
    priemer = sucet / len(cisla)
    return {
        "sucet": sucet,
        "priemer": priemer,
        "min": min(cisla),
        "max": max(cisla)
    }

def main():
    print("=== Vitajte v module 01: Python ===")

    # Práca so zoznamom
    namerane_hodnoty = [12.5, 14.2, 9.8, 15.0, 11.3]
    print(f"Namerané hodnoty: {namerane_hodnoty}")

    vysledky = vypocitaj_statistiky(namerane_hodnoty)

    print("\nVýsledky spracovania:")
    for kluc, hodnota in vysledky.items():
        print(f"  - {kluc.capitalize()}: {hodnota:.2f}")

if __name__ == "__main__":
    main()
