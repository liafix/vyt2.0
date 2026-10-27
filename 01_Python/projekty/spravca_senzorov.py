#!/usr/bin/env python3
"""
Miniprojekt: Systém na spracovanie meraní zo senzorov
Modul: 01_Python / projekty
"""

import csv
import json
from datetime import datetime

class SenzorMeranie:
    def __init__(self, senzor_id: str, teplota: float, vlhkost: float):
        self.senzor_id = senzor_id
        self.teplota = teplota
        self.vlhkost = vlhkost
        self.cas = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    def to_dict(self) -> dict:
        return {
            "senzor_id": self.senzor_id,
            "teplota": self.teplota,
            "vlhkost": self.vlhkost,
            "cas": self.cas
        }

class SpravcaSenzorov:
    def __init__(self):
        self.merania: list[SenzorMeranie] = []

    def pridaj_meranie(self, meranie: SenzorMeranie):
        self.merania.append(meranie)

    def vypocitaj_priemerne_hodnoty(self) -> tuple[float, float]:
        if not self.merania:
            return 0.0, 0.0
        priem_teplota = sum(m.teplota for m in self.merania) / len(self.merania)
        priem_vlhkost = sum(m.vlhkost for m in self.merania) / len(self.merania)
        return priem_teplota, priem_vlhkost

    def uloz_do_json(self, subor_cesta: str):
        data = [m.to_dict() for m in self.merania]
        with open(subor_cesta, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        print(f"[OK] Merania boli úspešne uložené do: {subor_cesta}")

def main():
    print("=== Miniprojekt: Spracovanie Meraní Senzorov ===")
    spravca = SpravcaSenzorov()

    # Vloženie vzorových meraní
    spravca.pridaj_meranie(SenzorMeranie("TEMP_01", 21.5, 45.0))
    spravca.pridaj_meranie(SenzorMeranie("TEMP_02", 23.1, 48.2))
    spravca.pridaj_meranie(SenzorMeranie("TEMP_01", 20.8, 44.5))

    priem_t, priem_v = spravca.vypocitaj_priemerne_hodnoty()
    print(f"Priemerná teplota: {priem_t:.2f} °C")
    print(f"Priemerná vlhkosť: {priem_v:.2f} %")

    # Uloženie dát
    spravca.uloz_do_json("merania_out.json")

if __name__ == "__main__":
    main()
