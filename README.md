# Manu's Smart Server Setup

> [!CAUTION]  
> This is a personal, non-commercial project intended for educational and research purposes. Any reverse engineering activities are conducted in accordance with U.S. fair use provisions. I affirm that this work is meant solely for private study and legitimate research purposes.
>
> 
> Please see **17 U.S. Code § 1201 - Circumvention of copyright protection systems**
>
> 
> > (2) Notwithstanding the provisions of subsections (a)(2) and (b), a person may develop and employ technological means to circumvent a technological measure, or to circumvent protection afforded by a technological measure, in order to enable the identification and analysis under paragraph (1), or for the purpose of enabling interoperability of an independently created computer program with other programs, if such means are necessary to achieve such interoperability, to the extent that doing so does not constitute infringement under this title.
>
> Should you have any objection, please reach out to my email displayed on my profile.

This repository showcases a Node.js server I developed for my personal home automation setup. It was inspired by my daily need to manage multiple gadgets efficiently. Often, my mom calls me down for dinner, and turning off everything to save energy—only to turn it back on later—was a hassle. This project, running on my Raspberry Pi, automates and simplifies that process.

---

### Features

1. **Integration with Device Lock Events**
   - When my laptop is locked, it sends a lock event to the Raspberry Pi via an open API endpoint (`<network-id>.44:5000`).

2. **Control of Govee RGB Strip Lights**
   - Reverse-engineered the Govee H162A RGB strip lights using Wireshark to analyze Bluetooth packets.
   - Enables toggling RGB lights on and off seamlessly.

3. **Monitor Screen Control [In Progress]**
   - Automates turning off the monitor (currently only possible via physical buttons).

4. **Centralized Control via UI**
   - Built an Electron.js-powered user interface for controlling the entire setup directly from my laptop.

5. **Raspberry Pi Enhancements**
   - Automatically turns off internal RGB lighting and the LCD statistics display (showing CPU/memory/network stats) when I step away.
   - Reactivates these components when I return.

6. **Future Integrations**
   - **Light Sensor:** Automates device control based on room occupancy, independent of laptop lock events.
   - **Lutron Caséta LEAP Protocol:** Integrating with Lutron lights to detect and control lighting states in my room.
   - **HomeKit Integration:** Using Homebridge to connect the Raspberry Pi with Apple HomeKit for seamless smart home control.

---

### Work in Progress

- **Lutron Caséta Integration:** Connecting to Lutron's LEAP API protocol to control newly installed smart lights.
- **Light Sensor Integration:** Adding a sensor to detect room occupancy for more reliable automation.
- **Expanded Monitor Control:** Developing a system to power down monitors without physical interaction.

---

This project represents a combination of my curiosity, technical skills, and passion for home automation. The reverse engineering of Bluetooth devices and API integrations have allowed me to create a smarter, more efficient environment for daily use. More updates and improvements are coming soon!

