#include <iostream>
#include <string>
#include <vector>
#include <memory>

/**
 * Modul 03: C++ - Ukážkový štartovací program
 * Demonštrácia OOP: Triedy, dedičnosť a polymorfizmus.
 */

// Základná rozhraniová / abstraktná trieda
class Senzor {
protected:
    std::string nazov;

public:
    Senzor(const std::string& n) : nazov(n) {}
    virtual ~Senzor() = default;

    virtual double odcitajHodnotu() = 0; // čistá virtuálna metóda
    std::string getNazov() const { return nazov; }
};

// Odvodená trieda - Teplotný senzor
class TeplotnySenzor : public Senzor {
private:
    double teplota;

public:
    TeplotnySenzor(const std::string& n, double t) : Senzor(n), teplota(t) {}

    double odcitajHodnotu() override {
        return teplota;
    }
};

int main() {
    std::cout << "=== Vitajte v module 03: C++ (OOP) ===" << std::endl << std::endl;

    // Vytvorenie vektora smart pointerov na senzory (polymorfizmus)
    std::vector<std::unique_ptr<Senzor>> senzory;
    senzory.push_back(std::make_unique<TeplotnySenzor>("Teplomer - Izba 1", 21.5));
    senzory.push_back(std::make_unique<TeplotnySenzor>("Teplomer - Exteriér", 14.2));

    for (const auto& s : senzory) {
        std::cout << "Senzor: " << s->getNazov()
                  << " | Nameraná hodnota: " << s->odcitajHodnotu() << " °C" << std::endl;
    }

    return 0;
}
