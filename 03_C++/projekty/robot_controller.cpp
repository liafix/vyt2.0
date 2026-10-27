#include <iostream>
#include <vector>
#include <memory>
#include <string>

/**
 * Miniprojekt: Objektový Systém Riadenia Mechatronického Robota
 * Modul: 03_C++ / projekty
 */

class Aktuator {
protected:
    std::string ID;
public:
    Aktuator(std::string id) : ID(std::move(id)) {}
    virtual ~Aktuator() = default;

    virtual void vykonajAkciu(double hodnota) = 0;
    std::string getID() const { return ID; }
};

class ServoMotor : public Aktuator {
private:
    double aktualnyUhol;
public:
    ServoMotor(std::string id) : Aktuator(std::move(id)), aktualnyUhol(0.0) {}

    void vykonajAkciu(double uhol) override {
        aktualnyUhol = uhol;
        std::cout << "[SERVO " << ID << "] Nastavujem uhol natočenia na: " << aktualnyUhol << "°\n";
    }
};

class KrokoxMotor : public Aktuator {
private:
    long kroky;
public:
    KrokoxMotor(std::string id) : Aktuator(std::move(id)), kroky(0) {}

    void vykonajAkciu(double pocetKrokov) override {
        kroky += static_cast<long>(pocetKrokov);
        std::cout << "[KROKOVY MOTOR " << ID << "] Vykonaných " << pocetKrokov << " krokov. Celkovo: " << kroky << "\n";
    }
};

class RobotRameno {
private:
    std::string nazovRobota;
    std::vector<std::unique_ptr<Aktuator>> aktuatory;
public:
    RobotRameno(std::string nazov) : nazovRobota(std::move(nazov)) {}

    void pridajAktuator(std::unique_ptr<Aktuator> akt) {
        aktuatory.push_back(std::move(akt));
    }

    void sekvenciaPohybov() {
        std::cout << "\n--- Spúšťam sekvenciu pohybov pre robota: " << nazovRobota << " ---\n";
        for (const auto& a : aktuatory) {
            a->vykonajAkciu(45.0);
        }
    }
};

int main() {
    std::cout << "=== Miniprojekt: Riadenie Robota (C++ OOP) ===\n";

    RobotRameno robot("MechaArm-3000");
    robot.pridajAktuator(std::make_unique<ServoMotor>("SERVO_CHLAPTAC"));
    robot.pridajAktuator(std::make_unique<KrokoxMotor>("KROKOVY_ZAKLADNA"));

    robot.sekvenciaPohybov();

    return 0;
}
