const QUESTION_BANK = [
  {
    "topic": "BIOS",
    "number": 1,
    "question": "After completing initial diagnostics and allocating system resources, the startup BIOS program checks for information about secondary storage devices that might contain the OS. The list of these devices and the order in which they are checked can be found and configured in BIOS via:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "ACPI settings",
      "B": "System Configuration utility",
      "C": "Boot options",
      "D": "Security tab/menu"
    },
    "explanations": {
      "A": "ACPI settings control power-management and hardware configuration behavior, not the sequence of bootable storage devices.",
      "B": "A system configuration utility in the operating system is not the BIOS menu used to set firmware boot priority.",
      "C": "The BIOS/UEFI Boot options menu contains the boot-device list and lets you set the order in which storage devices are checked for a bootable operating system.",
      "D": "The Security menu is used for firmware security features and passwords rather than normal boot-device ordering."
    },
    "tip": "Boot options = choose which device BIOS/UEFI checks first for an operating system. CompTIA A+ 220-1201 - BIOS Quiz Page 3"
  },
  {
    "topic": "BIOS",
    "number": 2,
    "question": "Which BIOS configuration option helps mitigate a common vector for malware infection?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "User password",
      "B": "Chassis intrusion detection",
      "C": "Supervisor password",
      "D": "USB permissions settings"
    },
    "explanations": {
      "A": "A user or boot password helps block unauthorized startup, but it does not specifically disable a removable-device malware path.",
      "B": "Chassis intrusion detection can record that the computer case was opened; it does not control removable-device access.",
      "C": "A supervisor password protects BIOS/UEFI settings from unauthorized changes but does not itself remove the malware vector targeted by this question.",
      "D": "USB permissions can restrict or disable USB device access, reducing the risk of malware being introduced through unauthorized removable USB media."
    },
    "tip": "Restricting USB access can reduce malware risk from unknown flash drives and other removable devices. CompTIA A+ 220-1201 - BIOS Quiz Page 4"
  },
  {
    "topic": "BIOS",
    "number": 3,
    "question": "The TPM functionality (if available) in the BIOS/UEFI setup interface provides which of the following features? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "Allows only trusted boot files to run at startup",
      "B": "Stores encryption keys in secure hardware for full-disk encryption",
      "C": "Encrypts individual user accounts on the OS",
      "D": "Logs boot processes to detect changes",
      "E": "Safely creates and stores cryptographic keys",
      "F": "Checks system integrity before granting network access"
    },
    "explanations": {
      "A": "TPM can participate in trusted/measured boot processes by protecting measurements and keys used to establish a trusted startup state.",
      "B": "A TPM can securely protect cryptographic keys used by full-disk encryption technologies.",
      "C": "TPM provides hardware-backed cryptographic functions; it does not directly encrypt individual operating-system user accounts.",
      "D": "TPM platform configuration registers can store measurements of boot components so unexpected changes can be detected.",
      "E": "Secure key generation and protected key storage are core TPM functions.",
      "F": "TPM-based integrity measurements can be used in attestation scenarios where system health is evaluated before access is granted."
    },
    "tip": "TPM = protected keys plus platform-integrity measurements that help establish trust in one computer. CompTIA A+ 220-1201 - BIOS Quiz Page 5"
  },
  {
    "topic": "BIOS",
    "number": 4,
    "question": "Modern motherboards feature temperature sensors near key components like the CPU and chipset. The BIOS/UEFI firmware periodically polls these sensors and, according to configured fan-control settings, adjusts the speed of the system's cooling fans.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "BIOS/UEFI hardware-monitoring and fan-control features can read onboard temperature sensors and automatically adjust fan speeds according to configured temperature curves or policies.",
      "B": "False is incorrect because motherboard firmware commonly provides temperature monitoring and automatic or user-configurable fan control."
    },
    "tip": "BIOS/UEFI hardware monitoring can read temperatures and control fan speed before the operating system loads. CompTIA A+ 220-1201 - BIOS Quiz Page 6"
  },
  {
    "topic": "BIOS",
    "number": 5,
    "question": "Which of the following terms refers to the advanced security feature integrated into modern UEFI firmware that ensures only digitally signed, trusted software is allowed to run during the system's startup process?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Secure Boot",
      "B": "Trusted OS Loader",
      "C": "Boot Guard",
      "D": "Trusted Boot"
    },
    "explanations": {
      "A": "Secure Boot verifies the signatures of boot components and blocks untrusted or improperly signed startup software according to the configured trust database.",
      "B": "This is not the UEFI firmware feature name used for signature enforcement during startup.",
      "C": "Boot Guard is a different platform-security technology and is not the general UEFI feature requested here.",
      "D": "Trusted Boot can describe later operating-system boot validation, while Secure Boot is the UEFI feature that enforces trusted signed boot software."
    },
    "tip": "Secure Boot = UEFI checks digital signatures before allowing boot software to run. CompTIA A+ 220-1201 - BIOS Quiz Page 7"
  },
  {
    "topic": "BIOS",
    "number": 6,
    "question": "Which of the answers listed below refer(s) to a boot password? (Select all that apply)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Required to access and modify BIOS/UEFI settings",
      "B": "Primarily protects against unauthorized use of the device",
      "C": "Activated only when entering the BIOS configuration menu",
      "D": "Required before the OS loads to prevent unauthorized access",
      "E": "Does not restrict access to BIOS/UEFI settings",
      "F": "Prevents configuration changes to firmware settings"
    },
    "explanations": {
      "A": "That describes a BIOS/supervisor/setup password rather than a boot password.",
      "B": "A boot password stops an unauthorized person from simply starting and using the computer.",
      "C": "A boot password is requested during startup, not only when opening firmware setup.",
      "D": "The password prompt occurs before the operating system loads, blocking startup until the correct password is entered.",
      "E": "Its main purpose is controlling system startup; BIOS/UEFI configuration access is protected by a separate setup/supervisor password.",
      "F": "Preventing firmware-setting changes is the purpose of a BIOS/supervisor/setup password."
    },
    "tip": "Boot password protects startup; BIOS/supervisor password protects firmware settings. CompTIA A+ 220-1201 - BIOS Quiz Page 8"
  },
  {
    "topic": "BIOS",
    "number": 7,
    "question": "Which of the following statements does not apply to a BIOS password?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Activated only when entering the BIOS configuration menu",
      "B": "Restricts access to the BIOS/UEFI setup interface",
      "C": "Does not interfere with the actual boot process once configured",
      "D": "Ensures that unauthorized users cannot start the system",
      "E": "Prevents unauthorized modifications to firmware settings"
    },
    "explanations": {
      "A": "A BIOS/setup password is associated with entering firmware configuration, so this applies to it.",
      "B": "Restricting firmware setup access is a primary purpose of a BIOS password.",
      "C": "A setup password can protect firmware settings without requiring a password for every normal system boot.",
      "D": "Preventing the computer from starting is the role of a boot or power-on password, not a BIOS/setup password.",
      "E": "A BIOS password helps stop unauthorized users from changing firmware configuration."
    },
    "tip": "BIOS password = protects setup changes; boot password = blocks unauthorized system startup."
  },
  {
    "topic": "CPU",
    "number": 1,
    "question": "Which of the following terms refers to a 32-bit CPU architecture?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "x32",
      "B": "x48",
      "C": "x64",
      "D": "x86"
    },
    "explanations": {
      "A": "x32 is not the standard architecture name used in this quiz for 32-bit x86-compatible processors.",
      "B": "x48 is not a standard PC CPU architecture designation.",
      "C": "x64 refers to the 64-bit extension of the x86 architecture, not 32-bit processing.",
      "D": "In common PC terminology, x86 is used to identify the 32-bit Intel-compatible CPU architecture."
    },
    "tip": "x86 usually means 32-bit; x64 means 64-bit in Windows and CompTIA terminology. CompTIA A+ 220-1201 - CPU Quiz Page 3"
  },
  {
    "topic": "CPU",
    "number": 2,
    "question": "Which of the terms listed below describes a CPU designed for 64-bit processing?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "x32",
      "B": "x48",
      "C": "x64",
      "D": "x86"
    },
    "explanations": {
      "A": "x32 does not identify the standard 64-bit PC architecture.",
      "B": "x48 is not a standard CPU architecture designation.",
      "C": "x64 identifies the 64-bit extension of the x86 processor architecture and supports 64-bit processing.",
      "D": "In the context of this quiz, x86 refers to 32-bit processing rather than 64-bit processing."
    },
    "tip": "Look for x64 when a question asks specifically about 64-bit CPU or Windows architecture. CompTIA A+ 220-1201 - CPU Quiz Page 4"
  },
  {
    "topic": "CPU",
    "number": 3,
    "question": "The presence of the Program Files (x86) folder on the C drive in MS Windows indicates that the system uses a 32-bit architecture and a 32-bit OS version.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "On 32-bit Windows there is normally only one Program Files folder; the separate Program Files (x86) folder is used by 64-bit Windows for 32-bit applications.",
      "B": "The statement is false because Program Files (x86) is a sign of a 64-bit Windows installation that separates 32-bit applications from native 64-bit applications."
    },
    "tip": "Program Files (x86) on Windows is a clue that the OS is 64-bit and can run 32-bit applications. CompTIA A+ 220-1201 - CPU Quiz Page 5"
  },
  {
    "topic": "CPU",
    "number": 4,
    "question": "A CPU design based on an instruction set that tries to improve speed by utilizing relatively few and simple instructions is called:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "RISC",
      "B": "IA-64",
      "C": "EPIC",
      "D": "CISC"
    },
    "explanations": {
      "A": "Reduced Instruction Set Computer architecture emphasizes a smaller set of relatively simple instructions that can be executed efficiently.",
      "B": "IA-64 is a specific 64-bit architecture rather than the general simple-instruction design described.",
      "C": "EPIC is an instruction architecture approach associated with explicitly parallel instruction execution, not the answer named by the source.",
      "D": "Complex Instruction Set Computer architecture uses a larger set of more complex instructions, which is the opposite of the description."
    },
    "tip": "RISC = Reduced Instruction Set Computer; think fewer, simpler instructions. CompTIA A+ 220-1201 - CPU Quiz Page 6"
  },
  {
    "topic": "CPU",
    "number": 5,
    "question": "Which of the following answers refer(s) to ARM-type CPU architecture? (Select all that apply)",
    "answers": [
      "A",
      "C",
      "E",
      "F"
    ],
    "options": {
      "A": "Characterized by lowered power consumption",
      "B": "Typically used in personal computers, laptops, and servers",
      "C": "Focuses on simplifying the instruction set to enhance processing efficiency",
      "D": "Employs complex instructions for efficient memory management and backward compatibility",
      "E": "Commonly used in mobile devices and embedded systems",
      "F": "Suitable for battery-powered devices"
    },
    "explanations": {
      "A": "ARM designs emphasize power efficiency, which is valuable in devices that must minimize heat and battery use.",
      "B": "The source contrasts this with ARM use in mobile and embedded systems; traditional PCs and servers have historically been associated more with x86/x64.",
      "C": "ARM is based on RISC principles, using a streamlined instruction set to improve processing efficiency.",
      "D": "That description aligns more closely with CISC-style x86 architecture than ARM RISC design.",
      "E": "ARM processors are widely used in phones, tablets, embedded controllers, and other compact systems.",
      "F": "ARM power efficiency makes the architecture well suited to devices that operate from batteries."
    },
    "tip": "ARM = RISC-style efficiency, low power, and strong use in mobile, embedded, and battery-powered devices. CompTIA A+ 220-1201 - CPU Quiz Page 7"
  },
  {
    "topic": "CPU",
    "number": 6,
    "question": "A type of CPU architecture where a single physical CPU contains more than one physical processing unit on a single integrated circuit is referred to as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Multiprocessor system architecture",
      "B": "Multicore architecture",
      "C": "Modular processor design architecture",
      "D": "Multithreading architecture"
    },
    "explanations": {
      "A": "A multiprocessor system normally refers to a system with multiple physical processor packages or sockets, not multiple cores inside one CPU package.",
      "B": "A multicore CPU contains two or more physical processing cores within a single processor package/integrated circuit.",
      "C": "This is not the standard term for multiple processing cores integrated into one CPU.",
      "D": "Multithreading allows concurrent instruction threads but does not necessarily mean multiple physical cores exist."
    },
    "tip": "Multicore = several physical processing cores inside one CPU package. CompTIA A+ 220-1201 - CPU Quiz Page 8"
  },
  {
    "topic": "CPU",
    "number": 7,
    "question": "A set of Intel CPU hardware enhancements that enable virtualization is known as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "ESXi",
      "B": "VT-x",
      "C": "Xen",
      "D": "Hyper-V",
      "E": "vSphere"
    },
    "explanations": {
      "A": "ESXi is VMware hypervisor software, not an Intel CPU hardware virtualization feature.",
      "B": "Intel VT-x provides processor-level hardware assistance that allows hypervisors to run virtual machines more efficiently.",
      "C": "Xen is a hypervisor platform rather than an Intel processor enhancement.",
      "D": "Hyper-V is Microsoft virtualization software, not the name of Intel CPU virtualization extensions.",
      "E": "vSphere is VMware virtualization infrastructure/software, not a CPU instruction-set enhancement."
    },
    "tip": "Intel virtualization hardware = VT-x; the hypervisor is separate software. CompTIA A+ 220-1201 - CPU Quiz Page 9"
  },
  {
    "topic": "CPU",
    "number": 8,
    "question": "Which of the answers listed below refers to AMD's CPU hardware virtualization enhancements?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Zen",
      "B": "AMD-V",
      "C": "Catalyst"
    },
    "explanations": {
      "A": "Zen is the name of an AMD CPU microarchitecture family, not the virtualization extension requested.",
      "B": "AMD-V is AMD hardware-assisted virtualization technology that provides processor support for virtual machines.",
      "C": "Catalyst is associated with AMD graphics software/branding and is not the CPU virtualization technology."
    },
    "tip": "AMD virtualization = AMD-V; Intel virtualization = VT-x. CompTIA A+ 220-1201 - CPU Quiz Page 10"
  },
  {
    "topic": "CPU",
    "number": 9,
    "question": "Which of the following answers refer(s) to (a) solution(s) directly aimed at improving CPU heat dissipation? (Select all that apply)",
    "answers": [
      "B",
      "C",
      "D",
      "F"
    ],
    "options": {
      "A": "CPU undervolting",
      "B": "Thermal pad",
      "C": "CPU fan",
      "D": "Heat sink",
      "E": "CPU throttling",
      "F": "Thermal paste"
    },
    "explanations": {
      "A": "Undervolting can reduce heat generation, but the source does not classify it as a direct heat-dissipation solution for this question.",
      "B": "A thermal pad improves heat transfer between components and a cooling surface by filling small gaps.",
      "C": "A CPU fan moves air across the cooler to carry heat away from the processor area.",
      "D": "A heat sink increases surface area so CPU heat can transfer into surrounding air more effectively.",
      "E": "Throttling lowers CPU performance to reduce heat production; it does not directly transfer existing heat away.",
      "F": "Thermal paste fills microscopic air gaps between mating surfaces, improving heat conduction from the CPU to its cooler. G. Liquid-based cooling - CORRECT Liquid cooling carries heat away from the CPU block to a radiator where it can be released into the air."
    },
    "tip": "Heat dissipation uses a thermal interface plus a cooler: paste/pad transfers heat, while heatsinks, fans, or liquid cooling remove it. CompTIA A+ 220-1201 - CPU Quiz Page 11"
  },
  {
    "topic": "CPU",
    "number": 10,
    "question": "As opposed to active cooling components like cooling fans, heat sinks are considered passive cooling components because they do not require electrical power to operate.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A heat sink dissipates heat through conduction and convection using its metal surface area and does not need electrical power by itself.",
      "B": "False is incorrect because a basic heat sink has no motor or powered moving parts; a fan attached to it would be the active component."
    },
    "tip": "Heat sink = passive metal cooling; fan = active powered airflow. CompTIA A+ 220-1201 - CPU Quiz Page 12"
  },
  {
    "topic": "CPU",
    "number": 11,
    "question": "In CPU cooling, thermal paste is applied to fill the narrow gap between the:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "CPU and heat sink",
      "B": "Heat sink and thermal pad",
      "C": "CPU and thermal pad",
      "D": "Heat sink and CPU fan"
    },
    "explanations": {
      "A": "Thermal paste fills microscopic imperfections between the CPU heat spreader and the heat-sink contact surface, replacing insulating air gaps and improving heat transfer.",
      "B": "A thermal pad is an alternative thermal interface material and is not normally paired with paste in the gap described.",
      "C": "The question asks where thermal paste itself is applied; the intended interface is directly between the CPU and heat sink.",
      "D": "The fan moves air through or across the heat sink and does not require thermal paste at its mounting interface."
    },
    "tip": "Thermal paste belongs between the CPU and heat sink - use a thin interface layer to eliminate tiny air gaps."
  },
  {
    "topic": "Cabling",
    "number": 1,
    "question": "Which of the answers listed below refer to T568A and T568B standards? (Select 2 answers)",
    "answers": [
      "B",
      "C"
    ],
    "options": {
      "A": "Specify the shielding requirements for twisted-pair cabling",
      "B": "Define the pinout configuration for RJ45 connectors used in Ethernet cabling",
      "C": "Specify the pin assignments for the eight wires contained in twisted-pair cables",
      "D": "Control the twist rate of each pair in a twisted-pair cable",
      "E": "Set the standards for plenum-rated cable coatings"
    },
    "explanations": {
      "A": "T568A and T568B do not define whether a cable is shielded; shielding is a cable construction feature.",
      "B": "T568A and T568B define the conductor color order used when terminating twisted-pair Ethernet cable to an 8-position modular connector.",
      "C": "Both standards specify where each of the eight conductors is placed at the connector.",
      "D": "The twist rate is part of cable manufacturing and category performance, not the T568A/B termination pinout.",
      "E": "Plenum ratings concern fire and smoke characteristics of the cable jacket, not Ethernet wire order."
    },
    "tip": "T568A and T568B tell you the eight-wire color order at an Ethernet termination. CompTIA A+ 220-1201 - Cabling Page 3"
  },
  {
    "topic": "Cabling",
    "number": 2,
    "question": "Which of the following statements describe(s) coaxial cabling? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Commonly used for cable television signals",
      "B": "Features a single copper conductor surrounded by insulation and shielding",
      "C": "Classified as a copper-based transmission medium",
      "D": "Typically used in broadband cable Internet connections",
      "E": "Contains multiple twisted pairs of copper wires in a single sheath"
    },
    "explanations": {
      "A": "Coaxial cable is widely used to carry cable television and related RF signals.",
      "B": "Coax has a center conductor, dielectric insulation, shielding, and an outer jacket.",
      "C": "Its signal travels through a copper center conductor, so coax is a copper medium.",
      "D": "Cable modems commonly use coaxial infrastructure for the provider connection.",
      "E": "That construction describes twisted-pair cable such as UTP or STP, not coax."
    },
    "tip": "Coax = one center copper conductor with insulation and shielding; think cable TV and cable Internet. CompTIA A+ 220-1201 - Cabling Page 4"
  },
  {
    "topic": "Cabling",
    "number": 3,
    "question": "Which type of twisted-pair copper cabling takes advantage of an additional protective cover reducing signal interference from outside sources?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Coax",
      "B": "STP",
      "C": "UTP",
      "D": "Twinax"
    },
    "explanations": {
      "A": "Coax has a different single-conductor construction and is not a twisted-pair cable type.",
      "B": "Shielded Twisted Pair adds conductive shielding that helps reduce electromagnetic and radio-frequency interference.",
      "C": "Unshielded Twisted Pair relies mainly on twisting the wire pairs and does not include the extra shielding described.",
      "D": "Twinax uses two inner conductors in a shielded construction but is not the standard shielded twisted-pair Ethernet answer here."
    },
    "tip": "STP = Shielded Twisted Pair; the S reminds you it has extra shielding against interference. CompTIA A+ 220-1201 - Cabling Page 5"
  },
  {
    "topic": "Cabling",
    "number": 4,
    "question": "Which of the answers listed below refer(s) to direct burial STP's features and applications? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "Enhanced shielding",
      "B": "Underground network infrastructure",
      "C": "Plenum-rated outer jacket for fire resistance",
      "D": "Water and chemical resistance",
      "E": "Outdoor network infrastructure",
      "F": "Durable outer jacket"
    },
    "explanations": {
      "A": "Direct-burial STP combines twisted-pair shielding with construction intended for harsher outdoor environments.",
      "B": "Direct-burial cable is designed for runs placed underground without ordinary indoor-only cable construction.",
      "C": "Plenum cable is designed for air-handling spaces inside buildings; that is a different environmental rating.",
      "D": "Direct-burial jackets are designed to resist moisture and environmental exposure that could damage normal indoor cable.",
      "E": "Its rugged jacket and environmental protection make it suitable for outdoor installations.",
      "F": "A tougher jacket protects the cable from soil, moisture, and physical exposure."
    },
    "tip": "Direct burial means outdoor/underground protection: durable jacket, moisture resistance, and shielding. CompTIA A+ 220-1201 - Cabling Page 6"
  },
  {
    "topic": "Cabling",
    "number": 5,
    "question": "A key feature of all twisted-pair cabling types is that wires inside the cable are grouped into pairs, and the wires in each pair are twisted around each other to reduce signal interference from adjacent wire pairs.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Twisting conductors in pairs helps cancel electromagnetic noise and reduces crosstalk between neighboring pairs.",
      "B": "False is incorrect because the paired twisting is the defining physical design that gives twisted-pair cable its name and helps control interference."
    },
    "tip": "Twists reduce crosstalk - keeping each pair twisted is important for Ethernet signal quality. CompTIA A+ 220-1201 - Cabling Page 7"
  },
  {
    "topic": "Cabling",
    "number": 6,
    "question": "Which of the following answers does not refer to UTP cabling?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Used in Ethernet networks and telephone systems",
      "B": "Characterized by low cost and ease of installation",
      "C": "Shielded to reduce external interference",
      "D": "In Ethernet networks, installed with RJ45 connector type",
      "E": "Classified as twisted-pair copper cabling"
    },
    "explanations": {
      "A": "UTP is commonly used for Ethernet and has also been widely used for telephone wiring.",
      "B": "UTP is popular partly because it is inexpensive, flexible, and easy to terminate.",
      "C": "UTP means Unshielded Twisted Pair, so it does not include the conductive shielding described.",
      "D": "Ethernet UTP is commonly terminated with the modular connector generally called RJ45.",
      "E": "UTP is a copper cable containing twisted conductor pairs."
    },
    "tip": "UTP starts with Unshielded; if an answer says extra shielding, it describes STP instead. CompTIA A+ 220-1201 - Cabling Page 8"
  },
  {
    "topic": "Cabling",
    "number": 7,
    "question": "A type of enclosed space in a building, such as the one between a dropped ceiling and the structural ceiling, used for air handling, is commonly referred to as a plenum space. A special type of cabling with a fire-retardant jacket, designed for use in that space, is known as plenum-rated cabling.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Plenum-rated cable uses jacket material designed to limit flame spread and smoke in building air-handling spaces.",
      "B": "False is incorrect because the statement accurately describes both a plenum space and the purpose of plenum-rated cabling."
    },
    "tip": "Plenum cable is for air-handling spaces where low-smoke, fire-resistant jacket material is required. CompTIA A+ 220-1201 - Cabling Page 9"
  },
  {
    "topic": "Cabling",
    "number": 8,
    "question": "What are the key features of single-mode fiber optics? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Supports transmission distances of up to 2 km",
      "B": "Typically incurs a higher cost than multimode fiber optic systems",
      "C": "Employs LED light sources for transmission",
      "D": "Offers long-distance transmission capabilities, often exceeding 100 km",
      "E": "Utilizes laser light as the source of transmission",
      "F": "Typically incurs lower costs than multimode fiber optic systems"
    },
    "explanations": {
      "A": "The source associates shorter distances of up to about 2 km with multimode fiber.",
      "B": "Single-mode optics and laser transceivers are generally more expensive than typical multimode components.",
      "C": "LED light sources are associated with multimode fiber in the source quiz.",
      "D": "Single-mode fiber has a small core and low modal dispersion, supporting very long transmission distances.",
      "E": "Single-mode links use laser-based light sources to send a narrow optical path through the fiber.",
      "F": "The source describes single-mode systems as typically more expensive, not less expensive."
    },
    "tip": "Single-mode = laser + long distance + higher optical equipment cost. CompTIA A+ 220-1201 - Cabling Page 10"
  },
  {
    "topic": "Cabling",
    "number": 9,
    "question": "Which of the answers listed below refer to the characteristics of multimode fiber optics? (Select 3 answers)",
    "answers": [
      "B",
      "E",
      "F"
    ],
    "options": {
      "A": "Utilizes laser light sources for transmission",
      "B": "Supports transmission distances of up to 2 km",
      "C": "Generally more expensive than single-mode fiber optics",
      "D": "Capable of supporting transmission distances of up to 100 km or more",
      "E": "Usually less expensive than single-mode fiber optics",
      "F": "Employs LED light sources for transmission"
    },
    "explanations": {
      "A": "The source associates laser transmission with single-mode fiber.",
      "B": "Multimode is intended for shorter links and the quiz identifies distances up to about 2 km.",
      "C": "The source identifies multimode systems as usually less expensive than single-mode.",
      "D": "Very long distances are a strength of single-mode fiber rather than multimode.",
      "E": "Multimode transceivers and related equipment are commonly less costly for short-distance links.",
      "F": "The source quiz identifies LED light sources as a characteristic of multimode fiber."
    },
    "tip": "Multimode = shorter distance + LED + usually lower cost. CompTIA A+ 220-1201 - Cabling Page 11"
  },
  {
    "topic": "Cabling",
    "number": 10,
    "question": "USB 2.0 (a.k.a. Hi-Speed USB) specifies the maximum data transfer rate of:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "120 Mbps",
      "B": "240 Mbps",
      "C": "480 Mbps",
      "D": "960 Mbps"
    },
    "explanations": {
      "A": "This is below the USB 2.0 Hi-Speed maximum specified in the quiz.",
      "B": "USB 2.0 is rated higher than 240 Mbps.",
      "C": "USB 2.0 Hi-Speed has a theoretical maximum signaling rate of 480 Mbps.",
      "D": "960 Mbps is not the USB 2.0 maximum rate."
    },
    "tip": "USB 2.0 Hi-Speed = 480 Mbps. CompTIA A+ 220-1201 - Cabling Page 12"
  },
  {
    "topic": "Cabling",
    "number": 11,
    "question": "What is the maximum allowable cable length for USB 2.0?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "3 meters",
      "B": "4.5 meters",
      "C": "5 meters",
      "D": "10 meters"
    },
    "explanations": {
      "A": "The source gives a longer maximum for a standard USB 2.0 cable.",
      "B": "4.5 meters is not the value identified in the quiz.",
      "C": "The source quiz identifies 5 meters as the maximum allowable USB 2.0 cable length.",
      "D": "10 meters exceeds the standard passive USB 2.0 cable length given in the quiz."
    },
    "tip": "USB 2.0 = 480 Mbps and up to 5 meters in this quiz. CompTIA A+ 220-1201 - Cabling Page 13"
  },
  {
    "topic": "Cabling",
    "number": 12,
    "question": "Which of the following answers refer to the USB 3.0 standard? (Select 3 answers)",
    "answers": [
      "B",
      "E",
      "F"
    ],
    "options": {
      "A": "High Speed USB",
      "B": "Backward compatibility with earlier USB versions",
      "C": "3 Gbps data transfer rate",
      "D": "Full Speed USB",
      "E": "5 Gbps data transfer rate",
      "F": "SuperSpeed USB"
    },
    "explanations": {
      "A": "High-Speed is the USB 2.0 marketing name.",
      "B": "USB 3.0 was designed to maintain compatibility with earlier USB generations where connector support permits.",
      "C": "USB 3.0 is rated at 5 Gbps, not 3 Gbps.",
      "D": "Full-Speed refers to an earlier USB speed tier, not USB 3.0.",
      "E": "USB 3.0 introduced a theoretical 5 Gbps transfer rate.",
      "F": "SuperSpeed is the name associated with USB 3.0. G. 10 Gbps data transfer rate - INCORRECT 10 Gbps is associated with USB 3.1 in the source quiz. H. No backward compatibility with earlier USB versions - INCORRECT This contradicts USB 3.0 backward compatibility."
    },
    "tip": "USB 3.0 = SuperSpeed + 5 Gbps + backward compatibility. CompTIA A+ 220-1201 - Cabling Page 14"
  },
  {
    "topic": "Cabling",
    "number": 13,
    "question": "USB 3.1 improves over its predecessors by supporting a maximum data transfer rate of:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "6 Gbps",
      "B": "10 Gbps",
      "C": "12 Gbps",
      "D": "20 Gbps"
    },
    "explanations": {
      "A": "The quiz gives a higher USB 3.1 maximum.",
      "B": "USB 3.1 is identified in the source as supporting up to 10 Gbps.",
      "C": "12 Gbps is not the USB 3.1 rate used in the quiz.",
      "D": "The source associates 20 Gbps with USB 3.2 rather than USB 3.1."
    },
    "tip": "USB 3.0 = 5 Gbps; USB 3.1 = 10 Gbps; USB 3.2 = 20 Gbps in this quiz. CompTIA A+ 220-1201 - Cabling Page 15"
  },
  {
    "topic": "Cabling",
    "number": 14,
    "question": "What is the maximum theoretical data transfer rate supported by USB 3.2?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "10 Gbps",
      "B": "20 Gbps",
      "C": "30 Gbps",
      "D": "40 Gbps"
    },
    "explanations": {
      "A": "The quiz identifies USB 3.2 as doubling the 10 Gbps rate.",
      "B": "USB 3.2 is listed with a maximum theoretical transfer rate of 20 Gbps.",
      "C": "30 Gbps is not the USB 3.2 maximum in the source.",
      "D": "40 Gbps is associated with technologies such as Thunderbolt 3, not USB 3.2 in this quiz."
    },
    "tip": "USB 3.2 reaches 20 Gbps in the source material. CompTIA A+ 220-1201 - Cabling Page 16"
  },
  {
    "topic": "Cabling",
    "number": 15,
    "question": "What is the maximum practical cable length for a typical USB 3.x connection?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "1 meter",
      "B": "3 meters",
      "C": "4.5 meters",
      "D": "5 meters"
    },
    "explanations": {
      "A": "The source gives a longer typical practical maximum.",
      "B": "The quiz identifies 3 meters as the practical maximum for a typical USB 3.x connection.",
      "C": "4.5 meters is not the value given for USB 3.x.",
      "D": "5 meters is associated with USB 2.0 in the source quiz, not typical USB 3.x."
    },
    "tip": "Faster USB 3.x signaling generally uses a shorter practical passive cable than USB 2.0. CompTIA A+ 220-1201 - Cabling Page 17"
  },
  {
    "topic": "Cabling",
    "number": 16,
    "question": "Which of the answers listed below refers to an older type of serial cable used to connect modems, printers, mice, and other peripheral devices?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "RJ11",
      "B": "RG-6",
      "C": "RS-232",
      "D": "RG-59"
    },
    "explanations": {
      "A": "RJ11 is a modular connector commonly associated with telephone lines, not the legacy serial interface described.",
      "B": "RG-6 is coaxial cable commonly used for cable television and broadband.",
      "C": "RS-232 is a legacy serial communication standard historically used with modems, mice, printers, and other peripherals.",
      "D": "RG-59 is another coaxial cable type, not a serial peripheral interface."
    },
    "tip": "RS-232 = classic serial connection for older modems and peripherals. CompTIA A+ 220-1201 - Cabling Page 18"
  },
  {
    "topic": "Cabling",
    "number": 17,
    "question": "Thunderbolt 1 uses two separate 10 Gbps data channels, providing a combined maximum throughput of 20 Gbps. However, a single task may use only one of these channels at a time, limiting the speed to 10 Gbps per task. Thunderbolt 2 bonds the two channels into one unified 20 Gbps connection, allowing one high-bandwidth task to utilize the full capacity, while Thunderbolt 3 further increases this overall throughput to 40 Gbps.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement matches the progression described by the source: Thunderbolt 1 uses two 10 Gbps channels, Thunderbolt 2 bonds them for 20 Gbps, and Thunderbolt 3 reaches 40 Gbps.",
      "B": "False is incorrect because the statement reflects the Thunderbolt throughput characteristics given in the quiz."
    },
    "tip": "Thunderbolt 1 = 10 Gbps per channel, Thunderbolt 2 = 20 Gbps bonded, Thunderbolt 3 = 40 Gbps. CompTIA A+ 220-1201 - Cabling Page 19"
  },
  {
    "topic": "Cabling",
    "number": 18,
    "question": "What is the maximum allowable length for a Thunderbolt copper cable?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Up to 3 meters",
      "B": "Up to 6 meters",
      "C": "Up to 10 meters",
      "D": "Up to 15 meters"
    },
    "explanations": {
      "A": "The source quiz identifies up to 3 meters as the maximum allowable Thunderbolt copper-cable length.",
      "B": "6 meters exceeds the copper length given in the source.",
      "C": "10 meters is not the Thunderbolt copper limit listed in the quiz.",
      "D": "15 meters is far beyond the copper length specified here."
    },
    "tip": "Thunderbolt copper = short run, up to 3 meters in this quiz. CompTIA A+ 220-1201 - Cabling Page 20"
  },
  {
    "topic": "Cabling",
    "number": 19,
    "question": "The fiber-optic Thunderbolt interface allows for a maximum cable length of:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "30 meters",
      "B": "40 meters",
      "C": "50 meters",
      "D": "60 meters"
    },
    "explanations": {
      "A": "The source gives a longer fiber-optic Thunderbolt maximum.",
      "B": "40 meters is not the value selected in the quiz.",
      "C": "The source identifies 60 meters rather than 50.",
      "D": "The quiz lists 60 meters as the maximum cable length for fiber-optic Thunderbolt."
    },
    "tip": "Fiber extends Thunderbolt much farther than copper: 60 meters versus 3 meters in this quiz. CompTIA A+ 220-1201 - Cabling Page 21"
  },
  {
    "topic": "Cabling",
    "number": 20,
    "question": "Which of the following answers refer(s) to video connection standards? (Select all that apply)",
    "answers": [
      "B",
      "C",
      "F"
    ],
    "options": {
      "A": "SATA",
      "B": "DVI",
      "C": "DisplayPort",
      "D": "USB",
      "E": "eSATA",
      "F": "HDMI"
    },
    "explanations": {
      "A": "SATA is a storage interface for drives, not a display connection standard.",
      "B": "DVI is a video interface used to connect displays.",
      "C": "DisplayPort is a digital display interface for video and, when supported, audio.",
      "D": "Standard USB is primarily a general peripheral/data interface; the source does not select it as a dedicated video standard here.",
      "E": "eSATA is an external storage interface, not a video connection.",
      "F": "HDMI is a digital audio/video display interface. G. VGA - CORRECT VGA is a legacy analog video interface. H. S/PDIF - INCORRECT S/PDIF carries digital audio, not video."
    },
    "tip": "Core display connectors here are VGA, DVI, HDMI, and DisplayPort. CompTIA A+ 220-1201 - Cabling Page 22"
  },
  {
    "topic": "Cabling",
    "number": 21,
    "question": "Which of the interfaces listed below provide the capability for transmission of both video and audio data? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "DVI",
      "B": "VGA",
      "C": "HDMI",
      "D": "DisplayPort"
    },
    "explanations": {
      "A": "DVI is primarily a video interface and is not selected by the source for combined audio/video transmission.",
      "B": "VGA carries analog video only and does not carry audio.",
      "C": "HDMI is designed to carry digital video and digital audio over the same cable.",
      "D": "DisplayPort can transport digital video and audio together."
    },
    "tip": "HDMI and DisplayPort can carry both picture and sound on one cable. CompTIA A+ 220-1201 - Cabling Page 23"
  },
  {
    "topic": "Cabling",
    "number": 22,
    "question": "What are the characteristic features of the signal that can be carried through an HDMI cable? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Analog signal",
      "B": "Video only",
      "C": "Digital signal",
      "D": "Audio only",
      "E": "Video and audio"
    },
    "explanations": {
      "A": "HDMI is a digital interface, not an analog one.",
      "B": "HDMI can carry audio in addition to video.",
      "C": "HDMI transmits digital data.",
      "D": "HDMI is not limited to audio; it carries video as well.",
      "E": "A key HDMI feature is combined digital video and audio transmission over one cable."
    },
    "tip": "HDMI = digital audio + digital video together. CompTIA A+ 220-1201 - Cabling Page 24"
  },
  {
    "topic": "Cabling",
    "number": 23,
    "question": "Which of the following answers best describes the signal capabilities of DisplayPort?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Analog video",
      "B": "Audio only",
      "C": "Digital audio/video",
      "D": "Video only",
      "E": "Analog audio"
    },
    "explanations": {
      "A": "DisplayPort is a digital interface rather than a legacy analog video connection.",
      "B": "DisplayPort is not limited to audio.",
      "C": "DisplayPort can carry both digital video and digital audio.",
      "D": "DisplayPort can also carry audio, so video-only is incomplete.",
      "E": "DisplayPort does not use analog audio as its defining signal type."
    },
    "tip": "DisplayPort = digital display connection that can carry both video and audio. CompTIA A+ 220-1201 - Cabling Page 25"
  },
  {
    "topic": "Cabling",
    "number": 24,
    "question": "Which of the DVI versions listed below does not provide support for digital signal transmission?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "DVI-D",
      "B": "DVI-A",
      "C": "DVI-I",
      "D": "DVI-A/D"
    },
    "explanations": {
      "A": "DVI-D means digital-only and therefore supports digital video.",
      "B": "DVI-A carries analog video and does not provide digital signal transmission.",
      "C": "DVI-I is integrated and can support both digital and analog video.",
      "D": "This is not the source answer; DVI-A is the analog-only DVI type."
    },
    "tip": "DVI-A = analog; DVI-D = digital; DVI-I = integrated analog + digital. CompTIA A+ 220-1201 - Cabling Page 26"
  },
  {
    "topic": "Cabling",
    "number": 25,
    "question": "Which DVI type does not provide support for analog signal transmission?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "DVI-D",
      "B": "DVI-A",
      "C": "DVI-I",
      "D": "DVI-A/D"
    },
    "explanations": {
      "A": "DVI-D is digital-only, so it does not carry analog video.",
      "B": "DVI-A is specifically the analog DVI variant.",
      "C": "DVI-I supports both digital and analog signaling.",
      "D": "The source identifies DVI-D as the type without analog support."
    },
    "tip": "The D in DVI-D stands for digital-only. CompTIA A+ 220-1201 - Cabling Page 27"
  },
  {
    "topic": "Cabling",
    "number": 26,
    "question": "DVI-I provides support for both digital and analog video signal transmission.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "DVI-I means DVI Integrated and supports both digital and analog video signaling.",
      "B": "False is incorrect because dual signal support is the defining distinction of DVI-I."
    },
    "tip": "DVI-I = Integrated - both analog and digital video. CompTIA A+ 220-1201 - Cabling Page 28"
  },
  {
    "topic": "Cabling",
    "number": 27,
    "question": "Which of the answers listed below refer to the characteristic features of the signal that can be carried through a standard VGA cable? (Select 2 answers)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "Audio",
      "B": "Video and audio",
      "C": "Digital",
      "D": "Video",
      "E": "Analog"
    },
    "explanations": {
      "A": "Standard VGA does not carry audio.",
      "B": "VGA carries video only, so audio needs a separate connection.",
      "C": "VGA is an analog display interface.",
      "D": "VGA carries video information to a display.",
      "E": "The VGA signal is analog rather than digital."
    },
    "tip": "VGA = analog video only. CompTIA A+ 220-1201 - Cabling Page 29"
  },
  {
    "topic": "Cabling",
    "number": 28,
    "question": "USB-C supports Alternate Mode (Alt Mode), which allows it to transmit video signals using protocols such as DisplayPort or HDMI. Through Alt Mode, USB-C can deliver video to external displays like monitors or TVs, offering the same functionality as dedicated video cables. To connect to most external displays, USB-C requires a compatible adapter or cable, such as USB-C to DisplayPort or USB-C to HDMI.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "USB-C Alt Mode can carry supported display protocols over the USB-C connector, allowing compatible systems to output video to external displays.",
      "B": "False is incorrect because the statement accurately describes USB-C Alternate Mode as presented in the source."
    },
    "tip": "USB-C is the connector; Alt Mode lets that connector carry a display protocol such as DisplayPort. CompTIA A+ 220-1201 - Cabling Page 30"
  },
  {
    "topic": "Cabling",
    "number": 29,
    "question": "What are the characteristic features of SATA revision 1.0 (SATA I)? (Select 2 answers)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "1.5 Gbps data transfer rate",
      "B": "Maximum cable length of 1 meter",
      "C": "3 Gbps data transfer rate",
      "D": "Maximum cable length of 2 meters",
      "E": "6 Gbps data transfer rate",
      "F": "Maximum cable length of 3 meters"
    },
    "explanations": {
      "A": "SATA I has a theoretical signaling rate of 1.5 Gbps.",
      "B": "The source quiz lists 1 meter as the maximum SATA I data-cable length.",
      "C": "3 Gbps is associated with SATA II.",
      "D": "The source uses 1 meter for standard internal SATA data cabling.",
      "E": "6 Gbps is associated with SATA III.",
      "F": "3 meters is not the SATA I cable length selected in the source."
    },
    "tip": "SATA I = 1.5 Gbps; SATA II = 3 Gbps; SATA III = 6 Gbps. CompTIA A+ 220-1201 - Cabling Page 31"
  },
  {
    "topic": "Cabling",
    "number": 30,
    "question": "The SATA interface specification defines a power connector consisting of:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "12 pins",
      "B": "15 pins",
      "C": "20 pins",
      "D": "24 pins"
    },
    "explanations": {
      "A": "The SATA power connector has more contacts than 12.",
      "B": "Standard SATA power uses a 15-pin connector to provide multiple voltage rails and ground connections.",
      "C": "20 pins is not the SATA power-connector count.",
      "D": "24 pins is associated with the common ATX motherboard power connector, not SATA power."
    },
    "tip": "SATA power = 15 pins; SATA data = 7 pins. CompTIA A+ 220-1201 - Cabling Page 32"
  },
  {
    "topic": "Cabling",
    "number": 31,
    "question": "SATA revision 2.0 (SATA II) specifies: (Select 2 answers)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "Maximum cable length of 3 meters",
      "B": "6 Gbps data transfer rate",
      "C": "Maximum cable length of 2 meters",
      "D": "3 Gbps data transfer rate",
      "E": "Maximum cable length of 1 meter",
      "F": "1.5 Gbps data transfer rate"
    },
    "explanations": {
      "A": "The source uses a 1-meter maximum for standard SATA data cables.",
      "B": "6 Gbps is SATA III.",
      "C": "2 meters is not the SATA II cable length selected in the quiz.",
      "D": "SATA II doubles SATA I signaling to 3 Gbps.",
      "E": "The source lists 1 meter as the standard maximum cable length.",
      "F": "1.5 Gbps is SATA I."
    },
    "tip": "SATA II = 3 Gbps with a 1-meter internal data cable in this quiz. CompTIA A+ 220-1201 - Cabling Page 33"
  },
  {
    "topic": "Cabling",
    "number": 32,
    "question": "A single SATA data cable can be used to connect a motherboard slot with:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Up to 3 devices",
      "B": "Up to 2 devices",
      "C": "Only 1 device",
      "D": "Up to 4 devices"
    },
    "explanations": {
      "A": "Standard SATA uses point-to-point connections rather than multiple devices on one data cable.",
      "B": "Unlike older parallel ATA arrangements, SATA does not place two drives on one standard data cable.",
      "C": "Each SATA data cable forms a point-to-point link between one motherboard/controller port and one storage device.",
      "D": "A standard SATA data cable does not support four devices."
    },
    "tip": "SATA is one port, one cable, one device. CompTIA A+ 220-1201 - Cabling Page 34"
  },
  {
    "topic": "Cabling",
    "number": 33,
    "question": "The characteristic features of SATA revision 3.0 (SATA III) include: (Select 2 answers)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "32 Gbps data transfer rate",
      "B": "Maximum cable length of 2 meters",
      "C": "16 Gbps data transfer rate",
      "D": "Maximum cable length of 1 meter",
      "E": "6 Gbps data transfer rate",
      "F": "Maximum cable length of 3 meters"
    },
    "explanations": {
      "A": "32 Gbps is far above the SATA III signaling rate.",
      "B": "The source identifies 1 meter as the maximum standard SATA data-cable length.",
      "C": "16 Gbps is not the SATA III rate.",
      "D": "The source lists 1 meter for SATA III data cabling.",
      "E": "SATA III supports a theoretical signaling rate of 6 Gbps.",
      "F": "3 meters is not the standard SATA III cable length in the quiz."
    },
    "tip": "SATA III = 6 Gbps, 1-meter standard internal data cable. CompTIA A+ 220-1201 - Cabling Page 35"
  },
  {
    "topic": "Cabling",
    "number": 34,
    "question": "The SATA interface specification defines a data cable connector consisting of:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "4 pins",
      "B": "6 pins",
      "C": "7 pins",
      "D": "8 pins"
    },
    "explanations": {
      "A": "A SATA data connector has more than four contacts.",
      "B": "Six is not the SATA data-connector pin count.",
      "C": "Standard SATA data uses a 7-pin connector.",
      "D": "Eight is not the standard SATA data pin count."
    },
    "tip": "SATA data = 7 pins; SATA power = 15 pins. CompTIA A+ 220-1201 - Cabling Page 36"
  },
  {
    "topic": "Cabling",
    "number": 35,
    "question": "Which of the following answers refer(s) to eSATA? (Select all that apply)",
    "answers": [
      "C",
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "Data transfer rate of up to 4 Gbps",
      "B": "Maximum cable length of 1 meter",
      "C": "Hot-swappable functionality",
      "D": "A standard cable length of up to 2 meters",
      "E": "External connection for storage",
      "F": "Data transfer rate of up to 6 Gbps"
    },
    "explanations": {
      "A": "The source identifies eSATA as supporting up to 6 Gbps rather than 4 Gbps.",
      "B": "The source gives a longer standard eSATA cable length.",
      "C": "eSATA supports external storage connections that can support hot-swapping when the controller and system configuration allow it.",
      "D": "The source quiz lists up to 2 meters for standard eSATA cabling.",
      "E": "The e in eSATA refers to external use, providing SATA connectivity to external storage devices.",
      "F": "The source lists eSATA speeds up to 6 Gbps."
    },
    "tip": "eSATA = external SATA: external storage, up to 2 meters, and up to 6 Gbps in this quiz. CompTIA A+ 220-1201 - Cabling Page 37"
  },
  {
    "topic": "Cabling",
    "number": 36,
    "question": "Which of the answers listed below describes the functionality offered by a cable adapter?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Hot swap capability for connected devices",
      "B": "Single-port-to-multi-port expansion",
      "C": "Connector form factor adjustment",
      "D": "Signal amplification for extended range"
    },
    "explanations": {
      "A": "Hot-swap support depends on the interface and device design, not simply on using a cable adapter.",
      "B": "Expanding one port into several is the role of a hub, dock, or splitter rather than a basic adapter.",
      "C": "A cable adapter changes one connector type or physical form factor into another compatible connection.",
      "D": "Signal amplification is performed by repeaters, extenders, or active electronics rather than a basic form-factor adapter."
    },
    "tip": "Adapter changes the connector/interface form; extender or repeater is used when the goal is longer range."
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 1,
    "question": "Which of the answers listed below best describes a private cloud?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "A cloud infrastructure that is exclusively used by a single organization",
      "B": "A cloud environment where several organizations collaborate and share resources",
      "C": "A cloud computing model that blends internal resources with public services",
      "D": "A cloud platform that offers on-demand access for various organizations"
    },
    "explanations": {
      "A": "A private cloud dedicates its cloud environment to one organization, giving that organization greater control over resources and policies.",
      "B": "That describes a community cloud, where organizations with common needs share infrastructure.",
      "C": "That describes a hybrid cloud, which combines private and public cloud resources.",
      "D": "That description aligns more closely with a public cloud serving many customers."
    },
    "tip": "Private cloud = cloud resources dedicated to one organization. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 3"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 2,
    "question": "What type of entities would typically use a private cloud?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Small businesses looking to reduce costs",
      "B": "Public service providers",
      "C": "Organizations with strict compliance and security requirements",
      "D": "Anyone seeking to make use of cloud storage"
    },
    "explanations": {
      "A": "A public cloud is often more cost-effective for organizations primarily seeking lower infrastructure costs.",
      "B": "A general public service provider is not the source-selected example of an organization needing dedicated private-cloud controls.",
      "C": "Private clouds provide stronger organizational control and isolation, which can help entities with demanding compliance and security requirements.",
      "D": "General cloud-storage users typically use public cloud services rather than deploying a private cloud."
    },
    "tip": "Private clouds are useful when control, security, or compliance requirements are especially strict. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 4"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 3,
    "question": "Which cloud deployment model has resources owned and operated by a third-party provider and shared across multiple organizations or tenants?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Hybrid cloud",
      "B": "Private cloud",
      "C": "Community cloud",
      "D": "Public cloud"
    },
    "explanations": {
      "A": "Hybrid cloud combines private and public resources rather than referring only to third-party shared infrastructure.",
      "B": "Private cloud resources are dedicated to one organization.",
      "C": "Community cloud is shared by organizations with common requirements, not broadly by many unrelated tenants.",
      "D": "A public cloud is operated by a provider that offers shared computing resources to multiple customers or tenants."
    },
    "tip": "Public cloud = provider-owned shared infrastructure for many customers. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 5"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 4,
    "question": "Which of the answers listed below best defines a hybrid cloud?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "A model that offers on-demand access to shared public resources",
      "B": "A model that pools resources exclusively among organizations with shared interests",
      "C": "A model that integrates both private and public cloud resources",
      "D": "A model that dedicates the entire infrastructure to one organization"
    },
    "explanations": {
      "A": "That describes the public-cloud model by itself.",
      "B": "That describes a community cloud.",
      "C": "Hybrid cloud connects or combines private-cloud resources with public-cloud services.",
      "D": "That describes a private cloud."
    },
    "tip": "Hybrid = private cloud plus public cloud working together. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 6"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 5,
    "question": "What is the primary advantage of a hybrid cloud?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Allows for shared infrastructure between organizations",
      "B": "Combines the benefits of private and public cloud deployment models",
      "C": "Offers dedicated infrastructure for a single organization",
      "D": "Provides enhanced control over security and privacy"
    },
    "explanations": {
      "A": "Sharing infrastructure among organizations is more characteristic of a community cloud.",
      "B": "Hybrid cloud lets an organization use private resources where control is important and public resources where flexibility or scale is useful.",
      "C": "Dedicated infrastructure alone describes a private cloud, not the advantage of combining models.",
      "D": "Private cloud can provide this advantage, but the defining hybrid benefit is combining private and public capabilities."
    },
    "tip": "Hybrid cloud balances private-cloud control with public-cloud flexibility. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 7"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 6,
    "question": "A type of cloud infrastructure shared by several organizations with similar security, compliance, or industry requirements is known as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Federated cloud",
      "B": "Distributed cloud",
      "C": "Shared cloud",
      "D": "Community cloud"
    },
    "explanations": {
      "A": "Federated cloud is not the deployment model selected by the source for organizations sharing common requirements.",
      "B": "Distributed cloud concerns cloud services spread across locations, not a shared-interest organization group.",
      "C": "Shared cloud is a generic phrase rather than the standard deployment model in this question.",
      "D": "A community cloud is shared by organizations that have common security, compliance, mission, or industry requirements."
    },
    "tip": "Community cloud = a cloud shared by organizations with a common mission or requirements. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 8"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 7,
    "question": "Which of the following answers refer to example implementations of the community cloud deployment model? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "A federated cloud infrastructure connecting multiple independent providers",
      "B": "A cloud environment developed for universities conducting joint research projects",
      "C": "A shared cloud used by several government agencies",
      "D": "A cloud-based solution for public safety organizations with similar data handling policies",
      "E": "A multinational cloud infrastructure using separate private clouds in each region"
    },
    "explanations": {
      "A": "Connecting independent cloud providers does not by itself describe a community cloud built around shared organizational requirements.",
      "B": "Universities collaborating on research can share a cloud built around common academic and research requirements.",
      "C": "Government agencies can share infrastructure when they have similar policy, security, or compliance needs.",
      "D": "Organizations with similar public-safety and data-handling requirements are a strong community-cloud use case.",
      "E": "Separate private clouds do not constitute one shared community-cloud environment."
    },
    "tip": "Community cloud examples involve organizations that share a mission, industry, or compliance needs. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 9"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 8,
    "question": "Which cloud computing service model lets clients access computing infrastructure as an outsourced service instead of buying the hardware and software themselves?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "SaaS",
      "B": "DaaS",
      "C": "PaaS",
      "D": "IaaS"
    },
    "explanations": {
      "A": "SaaS delivers finished software applications to users rather than raw computing infrastructure.",
      "B": "DaaS commonly delivers virtual desktops rather than general servers, storage, and infrastructure.",
      "C": "PaaS provides a managed application-development platform rather than primarily supplying infrastructure resources.",
      "D": "Infrastructure as a Service provides virtualized servers, storage, networking, and related infrastructure maintained by the provider."
    },
    "tip": "IaaS = rent infrastructure; PaaS = build on a platform; SaaS = use finished software. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 10"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 9,
    "question": "A cloud computing service model that provides users with remote access to applications over the Internet on a subscription basis is called:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "PaaS",
      "B": "SaaS",
      "C": "IaaS",
      "D": "DaaS"
    },
    "explanations": {
      "A": "PaaS supplies a development and deployment platform rather than primarily delivering finished applications to end users.",
      "B": "Software as a Service delivers provider-hosted applications over the Internet, commonly through subscriptions.",
      "C": "IaaS provides infrastructure components such as virtual servers and storage.",
      "D": "DaaS focuses on delivering hosted desktop environments rather than individual software applications."
    },
    "tip": "SaaS = software you access as an online service instead of installing and managing it yourself. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 11"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 10,
    "question": "Which cloud computing service model would provide the best solution for a web developer intending to create a web app?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "DaaS",
      "B": "SaaS",
      "C": "PaaS",
      "D": "IaaS"
    },
    "explanations": {
      "A": "DaaS provides virtual desktops and is not specifically a web-application development platform.",
      "B": "SaaS provides completed applications for users rather than a development environment.",
      "C": "Platform as a Service provides managed runtimes, development tools, and deployment services that help developers build and host applications.",
      "D": "IaaS can host web apps, but it requires more infrastructure management than the development-focused PaaS answer selected by the source."
    },
    "tip": "PaaS gives developers a managed platform for building and deploying applications. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 12"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 11,
    "question": "Which cloud deployment model primarily relies on the concept of shared resources?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Private cloud",
      "B": "Hybrid cloud",
      "C": "Dedicated cloud",
      "D": "Public cloud"
    },
    "explanations": {
      "A": "Private cloud resources are dedicated to one organization.",
      "B": "Hybrid cloud combines deployment models and does not inherently mean all resources are shared.",
      "C": "Dedicated resources are specifically reserved rather than pooled among many customers.",
      "D": "Public cloud providers pool infrastructure across multiple tenants while logically separating customer workloads."
    },
    "tip": "Public cloud uses pooled shared infrastructure across many tenants. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 13"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 12,
    "question": "Which of the following is a key benefit of utilizing shared resources in cloud computing?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Enhanced security through isolation",
      "B": "Full control over the physical infrastructure",
      "C": "Lower costs due to economies of scale",
      "D": "Predictable and consistent performance"
    },
    "explanations": {
      "A": "Dedicated resources generally provide stronger physical or resource isolation than shared resources.",
      "B": "Customers in shared public environments typically do not control the provider's physical infrastructure.",
      "C": "Pooling infrastructure across many customers lets providers spread hardware and operational costs, which can reduce customer costs.",
      "D": "Shared-resource performance can vary when other tenants create heavy demand."
    },
    "tip": "Shared cloud resources lower cost by spreading infrastructure expenses across many customers. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 14"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 13,
    "question": "What is a potential drawback of using shared resources in a cloud environment?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Possible performance degradation during high demand periods",
      "B": "Difficulty in managing multiple cloud instances simultaneously",
      "C": "Inability to scale resources up or down based on demand",
      "D": "More complex management of the underlying infrastructure for the user"
    },
    "explanations": {
      "A": "When many tenants compete for shared infrastructure, heavy demand can reduce the resources or performance available to an individual workload.",
      "B": "Management complexity is not the specific shared-resource drawback identified by the source.",
      "C": "Cloud environments commonly support scaling, and shared resource pools can help enable it.",
      "D": "Cloud providers usually handle much of the underlying infrastructure, reducing rather than necessarily increasing customer management."
    },
    "tip": "Shared resources can create contention - heavy tenant demand may affect performance. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 15"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 14,
    "question": "Which of the answers listed below describe effects of using dedicated resources in cloud computing? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "F"
    ],
    "options": {
      "A": "Performance degradation during peak usage",
      "B": "Consistent and reliable performance",
      "C": "Higher, fixed costs regardless of resource use",
      "D": "Cost-effective pay-as-you-go pricing",
      "E": "Reliance on provider's security controls",
      "F": "Greater control and stronger data isolation"
    },
    "explanations": {
      "A": "Dedicated resources reduce competition from other tenants, so shared-resource contention is less likely.",
      "B": "Reserved resources can provide more predictable performance because they are not being competed for by unrelated tenants.",
      "C": "Dedicated capacity can cost more because resources are reserved even when they are not fully utilized.",
      "D": "Pay-as-you-go economics are more strongly associated with pooled, shared public-cloud resources.",
      "E": "Provider security remains relevant, but this is not one of the source-selected effects of dedicated resources.",
      "F": "Dedicated resources provide stronger separation and can give the customer more control over its environment."
    },
    "tip": "Dedicated resources trade higher cost for stronger isolation and more predictable performance. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 16"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 15,
    "question": "Which cloud deployment model most commonly relies on dedicated resources?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Public cloud",
      "B": "Community cloud",
      "C": "Hybrid cloud",
      "D": "Private cloud"
    },
    "explanations": {
      "A": "Public cloud commonly uses shared multi-tenant resource pools.",
      "B": "Community cloud is shared by a defined group of organizations.",
      "C": "Hybrid cloud mixes private and public resources and is not inherently fully dedicated.",
      "D": "A private cloud is dedicated to a single organization and therefore most commonly relies on dedicated resources."
    },
    "tip": "Private cloud most closely matches dedicated organizational resources. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 17"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 16,
    "question": "In cloud computing, metered utilization refers to a billing model where customers are charged based on actual resource consumption.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Metered utilization tracks consumed resources and bases charges on measured usage.",
      "B": "False is incorrect because usage-based charging is the defining idea of metered cloud utilization."
    },
    "tip": "Metered utilization = pay according to measured cloud usage. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 18"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 17,
    "question": "Which of the following are the core components of metered billing in cloud services? (Select 2 answers)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "Volume of ingress data",
      "B": "The number of API calls made to the service",
      "C": "Power consumption levels",
      "D": "Volume of egress data",
      "E": "Number of database transactions processed"
    },
    "explanations": {
      "A": "The source includes the amount of data entering the cloud as a measured component in this metered-billing question.",
      "B": "API calls can be billed by some services, but they are not one of the two source-selected components here.",
      "C": "Customers are generally billed for cloud service usage rather than the provider's direct electrical consumption.",
      "D": "The amount of data leaving a cloud service is commonly measured and can be part of usage-based billing.",
      "E": "Transactions can be metered in some services, but the source specifically selects ingress and egress data volumes."
    },
    "tip": "In this quiz, metered data billing focuses on ingress and egress volume. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 19"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 18,
    "question": "In the context of metered utilization, what does the term egress refer to?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Data download speed",
      "B": "Data upload speed",
      "C": "Data leaving cloud",
      "D": "Data entering cloud"
    },
    "explanations": {
      "A": "Egress describes the direction of data movement, not its transfer speed.",
      "B": "Upload speed is a rate and does not define egress.",
      "C": "Egress is outbound data transferred from the cloud environment to another destination.",
      "D": "Data entering the cloud is ingress, the opposite direction."
    },
    "tip": "Egress = exit - data leaving the cloud. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 20"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 19,
    "question": "Under a metered utilization model, ingress is defined as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Data transfer speed into the cloud",
      "B": "Data entering the cloud environment",
      "C": "Data transfer speed from the cloud",
      "D": "Data leaving the cloud environment"
    },
    "explanations": {
      "A": "Ingress refers to direction and volume of incoming data, not the speed of the transfer.",
      "B": "Ingress is inbound data moving into the cloud environment.",
      "C": "This describes a rate for outbound traffic, not ingress.",
      "D": "Outbound data is egress."
    },
    "tip": "Ingress = incoming data entering the cloud. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 21"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 20,
    "question": "Elasticity in cloud computing automatically increases resources when demand rises and scales them down when demand falls, helping reduce over-provisioning and under-provisioning.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Elasticity dynamically adjusts allocated cloud resources to match workload demand, improving resource efficiency.",
      "B": "False is incorrect because automatic scaling up and down according to demand is the behavior described by cloud elasticity."
    },
    "tip": "Elasticity = resources expand and contract with workload demand. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 22"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 21,
    "question": "What is the goal of availability in cloud computing?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Synchronizing data across multiple user devices in real time",
      "B": "Allowing multiple users to share the same resources",
      "C": "Dynamically scaling resources based on demand",
      "D": "Ensuring services are accessible with minimal interruption"
    },
    "explanations": {
      "A": "That describes synchronization rather than service availability.",
      "B": "That relates to resource sharing or multitenancy, not availability.",
      "C": "That is elasticity.",
      "D": "Availability aims to keep cloud services operational and reachable with as little downtime as possible."
    },
    "tip": "Availability = keeping the service reachable and minimizing downtime. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 23"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 22,
    "question": "Which metric is most commonly used to represent the availability of a cloud service?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Outage duration",
      "B": "Error rate percentage",
      "C": "Network packet loss rate",
      "D": "Uptime percentage"
    },
    "explanations": {
      "A": "Outage duration is useful operational information, but availability is most commonly expressed as a percentage of uptime.",
      "B": "Error rate measures failed operations rather than overall service availability.",
      "C": "Packet loss is a network-quality metric, not the standard availability measure.",
      "D": "Availability is commonly represented as the percentage of time a service remains operational and accessible."
    },
    "tip": "Cloud availability is commonly expressed as uptime percentage, such as 99.9%. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 24"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 23,
    "question": "Which term refers to the formal agreement specifying availability guarantees between a cloud service provider and a customer?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "BPA",
      "B": "EULA",
      "C": "SLA",
      "D": "MSA"
    },
    "explanations": {
      "A": "A business partnership agreement is not the standard contract used to define cloud availability guarantees.",
      "B": "An end-user license agreement defines software usage rights and terms rather than service uptime commitments.",
      "C": "A Service Level Agreement defines measurable service commitments such as uptime or availability and may describe remedies if targets are missed.",
      "D": "A master service agreement establishes broad contractual terms, while specific service-level guarantees are defined in an SLA."
    },
    "tip": "SLA = Service Level Agreement; look there for uptime and availability commitments. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 25"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 24,
    "question": "Which of the answers listed below best describes file synchronization in a cloud environment?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Maintaining a version history for documents stored online",
      "B": "Reflecting file edits made on one device across all other connected devices",
      "C": "Allowing multiple users to simultaneously edit different sections of a shared online document",
      "D": "Transferring file documents between different cloud service providers"
    },
    "explanations": {
      "A": "Version history preserves earlier file revisions but is different from synchronizing current changes across devices.",
      "B": "Synchronization propagates file changes so connected devices maintain matching current copies.",
      "C": "That describes collaborative editing rather than file synchronization itself.",
      "D": "Moving files between providers is migration or transfer, not the normal synchronization concept."
    },
    "tip": "File sync keeps the same file changes updated across connected devices. CompTIA A+ 220-1201 - Cloud Computing Concepts Quiz Page 26"
  },
  {
    "topic": "Cloud Computing Concepts",
    "number": 25,
    "question": "Which cloud computing feature enables several customers to share a single software deployment without accessing each other's data?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Multitenancy",
      "B": "Elasticity",
      "C": "Dynamic provisioning",
      "D": "Load balancing"
    },
    "explanations": {
      "A": "Multitenancy lets multiple customers use the same application or infrastructure instance while logically isolating each tenant's data and configuration.",
      "B": "Elasticity changes resource capacity according to demand; it does not define multiple isolated customers sharing one deployment.",
      "C": "Dynamic provisioning automatically allocates resources but is not the customer-isolation model described.",
      "D": "Load balancing distributes workloads across resources to improve performance or availability; it does not define tenant separation."
    },
    "tip": "Multitenancy = many customers share the platform while each tenant's data stays logically separated."
  },
  {
    "topic": "Common Networking Hardware",
    "number": 1,
    "question": "Which of the following answers describe the characteristics of a router? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Operates at Layer 2 of the OSI model",
      "B": "Connects multiple networks together",
      "C": "Uses MAC addresses to forward data frames to the correct port",
      "D": "Operates at Layer 3 of the OSI model",
      "E": "Uses IP addresses to send data packets to their destination",
      "F": "Connects multiple devices within a single network"
    },
    "explanations": {
      "A": "Layer 2 forwarding is the normal role of a network switch. A router primarily makes forwarding decisions at Layer 3.",
      "B": "A router interconnects separate IP networks and forwards traffic between them.",
      "C": "Using a MAC address table to forward Ethernet frames is a Layer 2 switch function.",
      "D": "Routers operate primarily at the Network layer, where IP addressing and routing take place.",
      "E": "A router examines destination IP information and its routing table to decide where a packet should go.",
      "F": "Connecting devices inside one LAN is the typical function of a switch rather than the defining role of a router."
    },
    "tip": "Router = Layer 3 + IP addresses + connects different networks. CompTIA A+ 220-1201 - Common Networking Hardware Page 3"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 2,
    "question": "Which of the answers listed below refer to a network switch? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "Connects multiple devices within a single network",
      "B": "Operates at Layer 3 of the OSI model",
      "C": "Uses MAC addresses to forward data frames to the correct port",
      "D": "Connects multiple networks together",
      "E": "Operates at Layer 2 of the OSI model",
      "F": "Uses IP addresses to send data packets to their destination"
    },
    "explanations": {
      "A": "A switch provides Ethernet connectivity among devices that belong to the same local network.",
      "B": "A standard Ethernet switch is primarily a Layer 2 device; Layer 3 switches add routing features, but that is not the basic switch characteristic here.",
      "C": "A switch learns MAC addresses and uses its MAC address table to send Ethernet frames to the appropriate switch port.",
      "D": "Connecting separate IP networks is primarily the job of a router.",
      "E": "A traditional network switch operates at the Data Link layer of the OSI model.",
      "F": "IP-based packet routing is a Layer 3 router function rather than the defining function of a Layer 2 switch."
    },
    "tip": "Switch = Layer 2 + MAC addresses + connects devices inside a LAN. CompTIA A+ 220-1201 - Common Networking Hardware Page 4"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 3,
    "question": "What are the characteristic features of a managed switch? (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "F"
    ],
    "options": {
      "A": "Cannot be managed or adjusted remotely",
      "B": "Operates on a simple plug-and-play basis without the need (or ability) for manual configuration",
      "C": "Can be monitored and controlled remotely",
      "D": "Includes integrated tools for real-time monitoring, diagnostics, and security features",
      "E": "Simply forwards data without offering monitoring capabilities or advanced security measures",
      "F": "Offers extensive configuration options"
    },
    "explanations": {
      "A": "Remote administration is one of the major benefits of a managed switch.",
      "B": "That describes an unmanaged switch, which provides little or no administrative configuration.",
      "C": "Managed switches provide administrative interfaces such as web, CLI, SSH, or management platforms for remote control and monitoring.",
      "D": "Managed models commonly provide monitoring, diagnostics, VLANs, port security, and other advanced network features.",
      "E": "That is characteristic of an unmanaged switch rather than a managed one.",
      "F": "A managed switch lets administrators configure ports, VLANs, security, QoS, monitoring, and other features."
    },
    "tip": "Managed switch = configurable, monitorable, and remotely administered. CompTIA A+ 220-1201 - Common Networking Hardware Page 5"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 4,
    "question": "An unmanaged switch: (Select 3 answers)",
    "answers": [
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "Offers extensive configuration options",
      "B": "Includes built-in tools for real-time monitoring, diagnostics, and security features",
      "C": "Allows remote access for monitoring and management",
      "D": "Operates as a simple plug-and-play device, requiring no manual setup",
      "E": "Forwards network traffic without providing monitoring features or advanced security functions",
      "F": "Cannot be managed or reconfigured remotely"
    },
    "explanations": {
      "A": "Extensive configuration is a managed-switch feature.",
      "B": "Those advanced administrative capabilities are associated with managed switches.",
      "C": "Unmanaged switches normally do not provide a remote management interface.",
      "D": "An unmanaged switch is designed to work immediately with little or no configuration.",
      "E": "Its main job is basic Ethernet forwarding rather than advanced administration or monitoring.",
      "F": "Because it lacks a management interface, administrators generally cannot remotely change its configuration."
    },
    "tip": "Unmanaged switch = plug it in and it switches traffic; no advanced remote configuration. CompTIA A+ 220-1201 - Common Networking Hardware Page 6"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 5,
    "question": "A networking hardware device connecting wireless devices to a wired network is referred to as a(n):",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Wi-Fi extender",
      "B": "Network bridge",
      "C": "Access point",
      "D": "Media converter"
    },
    "explanations": {
      "A": "A Wi-Fi extender repeats or extends wireless coverage rather than serving as the primary bridge between wireless clients and a wired LAN.",
      "B": "A bridge connects network segments, but the specific wireless-to-wired device requested is an access point.",
      "C": "A wireless access point provides Wi-Fi connectivity and bridges wireless client traffic onto the wired network.",
      "D": "A media converter changes one physical media type to another, such as copper Ethernet to fiber, rather than providing Wi-Fi access."
    },
    "tip": "Access point = the doorway that lets Wi-Fi clients enter the wired LAN. CompTIA A+ 220-1201 - Common Networking Hardware Page 7"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 6,
    "question": "A simple device consisting of multiple connector blocks and ports used for copper cable management is known as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Cable splitter",
      "B": "Patch panel",
      "C": "Ethernet hub",
      "D": "Cable distribution unit"
    },
    "explanations": {
      "A": "A splitter divides a signal path; it is not a structured termination and organization point for Ethernet cabling.",
      "B": "A patch panel terminates and organizes many permanent copper cable runs into labeled ports that can be patched to network equipment.",
      "C": "A hub is an active networking device that repeats Ethernet traffic; it is not primarily a cable-management termination panel.",
      "D": "This is not the standard term for the passive multiport copper-cable termination device described."
    },
    "tip": "Patch panel = organized cable termination; patch cords then connect its ports to switches. CompTIA A+ 220-1201 - Common Networking Hardware Page 8"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 7,
    "question": "Which of the following answers refers to a hardware security device or software application that monitors and controls both incoming and outgoing network traffic based on predetermined security rules?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Proxy server",
      "B": "Malware scanner",
      "C": "Firewall",
      "D": "Content filter"
    },
    "explanations": {
      "A": "A proxy relays application requests and can filter them, but the general security control that permits or blocks network traffic by rules is a firewall.",
      "B": "A malware scanner searches for malicious software rather than controlling network flows according to traffic rules.",
      "C": "A firewall inspects network traffic and permits or blocks connections according to configured security rules.",
      "D": "A content filter restricts selected content or categories, while a firewall provides broader traffic-control enforcement."
    },
    "tip": "Firewall = traffic gatekeeper; its rules decide what network communication is allowed or blocked. CompTIA A+ 220-1201 - Common Networking Hardware Page 9"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 8,
    "question": "The IEEE 802.3 standards for Power over Ethernet (PoE) provide varying levels of power to support different types of devices based on their energy needs. IEEE 802.3af (PoE) delivers up to 15.4W per port, IEEE 802.3at (PoE+) increases power delivery, and IEEE 802.3bt (PoE++) supports still higher-power devices while transmitting both power and data over a single Ethernet cable.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement correctly describes the progression of PoE standards in the supplied quiz: newer PoE generations support higher power levels while carrying power and Ethernet data over the same cable.",
      "B": "False is incorrect because the supplied statement accurately describes the purpose and increasing power capabilities of IEEE 802.3 PoE standards."
    },
    "tip": "PoE, PoE+, PoE++ = increasing power over the same Ethernet cable used for data. CompTIA A+ 220-1201 - Common Networking Hardware Page 10"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 9,
    "question": "Which device enables a network switch without built-in PoE support to deliver power over Ethernet?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "PoE converter",
      "B": "PoE adapter",
      "C": "PoE injector",
      "D": "PoE extender"
    },
    "explanations": {
      "A": "A converter is not the standard device used to add power onto an Ethernet link from a non-PoE switch.",
      "B": "Adapter is a generic term; the specific networking device that injects power onto the Ethernet cable is a PoE injector.",
      "C": "A PoE injector adds electrical power to the Ethernet connection between a non-PoE switch and a PoE-powered device.",
      "D": "A PoE extender is used to extend the reach of a PoE Ethernet connection, not primarily to add PoE capability to a non-PoE switch."
    },
    "tip": "Injector adds PoE; extender increases PoE distance. CompTIA A+ 220-1201 - Common Networking Hardware Page 11"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 10,
    "question": "Which of the answers listed below refer to the characteristic features of cable modems? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "D"
    ],
    "options": {
      "A": "Cabling that carries TV signals",
      "B": "Telephone lines",
      "C": "Coaxial cabling",
      "D": "Shared bandwidth",
      "E": "Twisted-pair copper cabling",
      "F": "Dedicated bandwidth"
    },
    "explanations": {
      "A": "Cable Internet uses the same cable-provider infrastructure that carries television services.",
      "B": "Telephone copper lines are associated with DSL rather than cable modem service.",
      "C": "Cable modems connect to the provider over coaxial cable infrastructure.",
      "D": "Subscribers in a cable service area can share available segment capacity, so local usage can affect performance.",
      "E": "Twisted-pair telephone wiring is associated with DSL service, not the provider side of a cable modem connection.",
      "F": "Cable broadband commonly uses shared neighborhood infrastructure rather than a dedicated access loop for each subscriber."
    },
    "tip": "Cable modem = coax + cable TV infrastructure + shared local bandwidth. CompTIA A+ 220-1201 - Common Networking Hardware Page 12"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 11,
    "question": "Which term describes the use of cable modems for Internet access over a standard cable television infrastructure?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Dial-up",
      "B": "Cable broadband",
      "C": "Frame relay",
      "D": "Metro-Ethernet"
    },
    "explanations": {
      "A": "Dial-up uses the telephone network and an analog modem rather than cable television infrastructure.",
      "B": "Cable broadband provides Internet access through the cable provider network using a cable modem.",
      "C": "Frame Relay is a legacy WAN packet-switching technology, not residential cable Internet.",
      "D": "Metro Ethernet is a carrier Ethernet service and does not describe Internet access through a cable TV network."
    },
    "tip": "Cable modem + TV coax infrastructure = cable broadband. CompTIA A+ 220-1201 - Common Networking Hardware Page 13"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 12,
    "question": "Which of the following characteristics apply to DSL modems? (Select 3 answers)",
    "answers": [
      "A",
      "D",
      "E"
    ],
    "options": {
      "A": "Dedicated bandwidth",
      "B": "Cabling that carries TV signals",
      "C": "Shared bandwidth",
      "D": "Twisted-pair copper cabling",
      "E": "Telephone lines",
      "F": "Coaxial cabling"
    },
    "explanations": {
      "A": "In the quiz comparison, the DSL access line from the customer to the provider is treated as a dedicated local connection rather than the shared coax segment used by cable service.",
      "B": "Cable television infrastructure is associated with cable modems, not traditional DSL.",
      "C": "Shared neighborhood coax capacity is the characteristic associated with cable broadband in this quiz.",
      "D": "DSL operates over copper twisted-pair telephone wiring.",
      "E": "DSL delivers broadband service over the existing telephone-line infrastructure.",
      "F": "Coaxial cable is used by cable modem service rather than traditional DSL service."
    },
    "tip": "DSL = telephone line + twisted pair; cable Internet = coax. CompTIA A+ 220-1201 - Common Networking Hardware Page 14"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 13,
    "question": "Which type of fiber-optic equipment is typically located at a demarcation point?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "MDI",
      "B": "IDF",
      "C": "ONT",
      "D": "MDF"
    },
    "explanations": {
      "A": "MDI refers to an Ethernet interface pinout concept and is not the fiber termination device at the customer demarcation.",
      "B": "An IDF is an intermediate distribution frame used for internal building cabling distribution.",
      "C": "An Optical Network Terminal terminates the provider fiber at or near the customer premises and converts the optical service for customer equipment.",
      "D": "An MDF is a main distribution frame for building cabling, not the provider fiber terminal itself."
    },
    "tip": "ONT = Optical Network Terminal; it is where provider fiber becomes usable customer-side connectivity. CompTIA A+ 220-1201 - Common Networking Hardware Page 15"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 14,
    "question": "Which of the answers listed below refers to a computer's hardware component designed for enabling network access?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "CPU",
      "B": "PSU",
      "C": "NIC",
      "D": "GPU"
    },
    "explanations": {
      "A": "The CPU executes program instructions but is not the dedicated network interface.",
      "B": "The power supply provides electrical power to computer components.",
      "C": "A Network Interface Card or controller provides the hardware interface that connects a computer to a network.",
      "D": "The GPU processes graphics and display workloads rather than network communication."
    },
    "tip": "NIC = Network Interface Card - the computer hardware that connects to the network. CompTIA A+ 220-1201 - Common Networking Hardware Page 16"
  },
  {
    "topic": "Common Networking Hardware",
    "number": 15,
    "question": "Which of the following refers to a unique, 48-bit identifier used as a physical network address?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "SSID",
      "B": "IP",
      "C": "GUID",
      "D": "MAC"
    },
    "explanations": {
      "A": "An SSID is the name of a Wi-Fi network, not a 48-bit hardware address.",
      "B": "An IP address is a logical Layer 3 address and can be IPv4 or IPv6; it is not the 48-bit physical identifier described.",
      "C": "A GUID is a general globally unique identifier and is not specifically the Ethernet physical address.",
      "D": "A MAC address is the Layer 2 hardware identifier commonly represented as 48 bits for Ethernet and Wi-Fi interfaces."
    },
    "tip": "MAC = physical Layer 2 address; IPv4/IPv6 = logical Layer 3 address."
  },
  {
    "topic": "Connector",
    "number": 1,
    "question": "Which of the following answer choices describe typical applications of the RJ11 connector? (Select 3 answers)",
    "answers": [
      "B",
      "E",
      "F"
    ],
    "options": {
      "A": "Ethernet network cabling",
      "B": "Telephone equipment",
      "C": "Fiber-optic cabling",
      "D": "Coaxial cabling",
      "E": "Dial-up networking",
      "F": "Twisted-pair copper cabling"
    },
    "explanations": {
      "A": "Ethernet LAN cabling normally uses the larger 8-position RJ45-style connector rather than RJ11.",
      "B": "RJ11 is commonly used with analog telephone equipment and telephone wall jacks.",
      "C": "Fiber uses optical connectors such as LC, SC, or ST rather than an RJ11 copper connector.",
      "D": "Coaxial cable uses connectors such as F-type or BNC, not RJ11.",
      "E": "Dial-up modems connect to analog telephone lines, where RJ11 connectors are commonly used.",
      "F": "RJ11 terminates small twisted-pair copper telephone cable, typically using fewer conductors than Ethernet."
    },
    "tip": "RJ11 = telephone line connector; think phones and dial-up, not Ethernet. CompTIA A+ 220-1201 - Connector Quiz Page 3"
  },
  {
    "topic": "Connector",
    "number": 2,
    "question": "The RJ45 connector is used with: (Select 2 answers)",
    "answers": [
      "D",
      "F"
    ],
    "options": {
      "A": "Fiber-optic cabling",
      "B": "Coaxial cabling",
      "C": "Dial-up networking",
      "D": "Twisted-pair copper cabling",
      "E": "Telephone equipment",
      "F": "Ethernet network cabling"
    },
    "explanations": {
      "A": "Fiber-optic cable requires optical connectors and does not use the copper-contact RJ45-style connector.",
      "B": "Coax uses connectors such as F-type or BNC.",
      "C": "Traditional dial-up networking uses telephone lines and RJ11 connectors.",
      "D": "RJ45-style modular connectors are commonly used to terminate twisted-pair Ethernet cables such as Cat 5e and Cat 6.",
      "E": "Telephone equipment is typically associated with RJ11 rather than RJ45.",
      "F": "RJ45-style connectors are the standard modular connectors used on common copper Ethernet patch cables."
    },
    "tip": "RJ45 = Ethernet over twisted-pair copper; RJ11 = telephone. CompTIA A+ 220-1201 - Connector Quiz Page 4"
  },
  {
    "topic": "Connector",
    "number": 3,
    "question": "What are the characteristic features of the F-type connector? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "E"
    ],
    "options": {
      "A": "Threaded (screw-on) connector",
      "B": "Satellite/cable TV, broadband Internet connections via cable modems",
      "C": "Twisted-pair copper cabling",
      "D": "Bayonet-style (twist-and-lock) connector",
      "E": "Coaxial cabling",
      "F": "Professional audio and video equipment, CCTV systems, laboratory, and testing equipment"
    },
    "explanations": {
      "A": "The F-type connector uses a threaded coupling that screws onto the matching port for a secure coaxial connection.",
      "B": "F-type connectors are widely used on coaxial cabling for television, satellite, and cable-modem service.",
      "C": "Twisted-pair Ethernet uses modular connectors such as RJ45, not F-type.",
      "D": "The bayonet twist-and-lock design is characteristic of BNC, not F-type.",
      "E": "F-type connectors terminate coaxial cable such as RG-6 used in television and broadband installations.",
      "F": "Those uses are more strongly associated with BNC connectors in the quiz."
    },
    "tip": "F-type = threaded coax connector used for cable TV, satellite, and cable Internet. CompTIA A+ 220-1201 - Connector Quiz Page 5"
  },
  {
    "topic": "Connector",
    "number": 4,
    "question": "Which of the answers listed below describe the ST fiber-optic connector? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "D"
    ],
    "options": {
      "A": "Bayonet twist-and-lock mechanism",
      "B": "Common in high-density network environments like data centers",
      "C": "Large cylindrical shape",
      "D": "Common in older networks and multimode fiber setups",
      "E": "Small form factor connector",
      "F": "Latch locking mechanism similar to RJ-45 connectors"
    },
    "explanations": {
      "A": "ST connectors secure to the port with a bayonet-style twist-and-lock coupling.",
      "B": "High-density installations favor smaller connectors such as LC.",
      "C": "ST is a relatively large, round fiber connector compared with small-form-factor designs.",
      "D": "ST was widely used in older fiber installations and is often associated with multimode networks.",
      "E": "LC is the small-form-factor connector in the quiz.",
      "F": "A latch mechanism is associated with LC; ST uses a bayonet lock. G. Widely used in datacom and telecom applications - INCORRECT The source assigns this characteristic to SC rather than ST."
    },
    "tip": "ST = round connector that twists and locks; think older multimode fiber. CompTIA A+ 220-1201 - Connector Quiz Page 6"
  },
  {
    "topic": "Connector",
    "number": 5,
    "question": "What are the characteristic features of the SC fiber-optic connector? (Select 2 answers)",
    "answers": [
      "C",
      "F"
    ],
    "options": {
      "A": "Latch locking mechanism similar to RJ-45 connectors",
      "B": "Bayonet twist-and-lock mechanism",
      "C": "Push-pull locking mechanism for easy insertion and removal",
      "D": "Common in older networks and multimode fiber setups",
      "E": "Large cylindrical shape",
      "F": "Widely used in datacom and telecom applications"
    },
    "explanations": {
      "A": "The RJ45-like latch is associated with LC, not SC.",
      "B": "Bayonet locking describes ST.",
      "C": "SC uses a push-pull coupling that lets the connector be inserted and removed without twisting.",
      "D": "The quiz associates that description with ST.",
      "E": "The large cylindrical shape is an ST characteristic.",
      "F": "SC has been broadly deployed in data communications and telecommunications fiber installations."
    },
    "tip": "SC = square-style fiber connector with a simple push-pull connection. CompTIA A+ 220-1201 - Connector Quiz Page 7"
  },
  {
    "topic": "Connector",
    "number": 6,
    "question": "Which of the following characteristics describe the LC fiber-optic connector? (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Common in older networks and multimode fiber setups",
      "B": "Bayonet twist-and-lock mechanism",
      "C": "Latch locking mechanism similar to RJ-45 connectors",
      "D": "Common in high-density network environments like data centers",
      "E": "Small form factor connector"
    },
    "explanations": {
      "A": "That description is associated with ST rather than LC.",
      "B": "ST uses the bayonet twist-and-lock mechanism.",
      "C": "LC uses a small latch that resembles the retention tab on an RJ45-style connector.",
      "D": "Its compact size allows many LC connections to fit into dense switches, patch panels, and transceiver installations.",
      "E": "LC is significantly smaller than connectors such as SC and ST."
    },
    "tip": "LC = Little Connector: small, latched, and excellent for high-density fiber ports. CompTIA A+ 220-1201 - Connector Quiz Page 8"
  },
  {
    "topic": "Connector",
    "number": 7,
    "question": "A termination device (or module) that secures individual wires directly onto metal contacts to form permanent, solderless connections is known as:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Punchdown block",
      "B": "Keystone wall plate",
      "C": "Patch panel",
      "D": "Wire junction box"
    },
    "explanations": {
      "A": "A punchdown block uses insulation-displacement contacts to secure individual conductors without soldering.",
      "B": "A wall plate holds modules or jacks but is not itself the termination block described.",
      "C": "A patch panel organizes many cable terminations, but the specific termination device described by the quiz is a punchdown block.",
      "D": "A junction box encloses wire connections but does not specifically describe IDC punchdown termination."
    },
    "tip": "Punchdown block = wires are pressed into IDC contacts for a permanent solderless termination. CompTIA A+ 220-1201 - Connector Quiz Page 9"
  },
  {
    "topic": "Connector",
    "number": 8,
    "question": "Which of the answers listed below refer(s) to (a) non-reversible connector type(s) used in older mobile devices? (Select all that apply)",
    "answers": [
      "B",
      "D"
    ],
    "options": {
      "A": "USB Type-A",
      "B": "MicroUSB",
      "C": "USB-C",
      "D": "MiniUSB",
      "E": "USB Type-B"
    },
    "explanations": {
      "A": "Type-A is non-reversible, but the source question specifically identifies older mobile-device connector types.",
      "B": "MicroUSB was widely used on older mobile devices and must be inserted in the correct orientation.",
      "C": "USB-C is reversible, so either orientation can be inserted.",
      "D": "MiniUSB appeared on older mobile devices and peripherals and is non-reversible.",
      "E": "Type-B is non-reversible but is mainly associated with peripherals such as printers rather than the older mobile-device connectors targeted here."
    },
    "tip": "Older mobile USB = MiniUSB and MicroUSB; modern USB-C is reversible. CompTIA A+ 220-1201 - Connector Quiz Page 10"
  },
  {
    "topic": "Connector",
    "number": 9,
    "question": "Which of the following answers applies to USB-C connector?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Symmetrical connector design",
      "B": "Bi-directional power and data transfer",
      "C": "Video output capability (DisplayPort/HDMI over USB-C)",
      "D": "High data transfer speeds",
      "E": "All of the above"
    },
    "explanations": {
      "A": "This is a true USB-C feature, but the question's answer combines all listed USB-C capabilities.",
      "B": "USB-C can support power delivery and data in either direction, but this is only one listed characteristic.",
      "C": "Compatible USB-C ports can carry display signals through Alternate Mode, but this is only part of the complete answer.",
      "D": "USB-C can support high-speed USB protocols, but the connector shape alone is not the only characteristic listed.",
      "E": "The source marks all listed features as applicable: reversible design, power/data capability, supported video output modes, and high-speed data support."
    },
    "tip": "USB-C describes the connector; its major strengths include reversibility and support for data, power, and compatible video modes. CompTIA A+ 220-1201 - Connector Quiz Page 11"
  },
  {
    "topic": "Connector",
    "number": 10,
    "question": "What is the name of the most common connector type used for providing power to various hardware components inside a computer case?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "D-sub connector",
      "B": "Mini-DIN connector",
      "C": "Berg connector",
      "D": "Molex connector"
    },
    "explanations": {
      "A": "D-sub connectors are used for interfaces such as legacy serial or VGA connections, not general internal component power.",
      "B": "Mini-DIN is associated with external legacy connections such as PS/2.",
      "C": "Berg connectors were commonly used for smaller legacy devices such as floppy drives, not as the general-purpose internal power connector requested.",
      "D": "The traditional 4-pin Molex peripheral connector has long been used to supply power to drives, fans, and other components inside PCs."
    },
    "tip": "Molex = classic 4-pin internal peripheral power connector. CompTIA A+ 220-1201 - Connector Quiz Page 12"
  },
  {
    "topic": "Connector",
    "number": 11,
    "question": "Which of the answers listed below refers to a proprietary 8-pin connector used for charging, data transfer, and audio output in iOS devices?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Thunderbolt",
      "B": "FireWire",
      "C": "Doc Connector",
      "D": "Lightning"
    },
    "explanations": {
      "A": "Thunderbolt is a high-speed data/display interface and is not the proprietary 8-pin iOS connector described.",
      "B": "FireWire is an older serial interface and does not match the 8-pin iOS charging connector.",
      "C": "Apple's older dock connector used a larger multi-pin design, not the 8-pin connector described.",
      "D": "Lightning is Apple's proprietary 8-pin reversible connector used on many earlier iPhones and other iOS devices for charging and data, with supported audio accessories."
    },
    "tip": "Lightning = Apple's small 8-pin connector used before USB-C became common on newer Apple devices. CompTIA A+ 220-1201 - Connector Quiz Page 13"
  },
  {
    "topic": "Connector",
    "number": 12,
    "question": "Which of the following answers refers to a serial communication copper connector often found on older PCs, networking equipment, and industrial hardware?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "RG-6",
      "B": "PS/2",
      "C": "RG-59",
      "D": "DB-9"
    },
    "explanations": {
      "A": "RG-6 is coaxial cable used for television and broadband signals, not a serial connector.",
      "B": "PS/2 is a Mini-DIN interface for legacy keyboards and mice, not the general serial connector described.",
      "C": "RG-59 is a coaxial cable type and is not a serial communication connector.",
      "D": "The 9-pin D-sub connector, commonly called DB-9, was widely used for RS-232 serial ports on PCs, networking equipment, and industrial devices."
    },
    "tip": "DB-9 = 9-pin legacy serial connector commonly associated with RS-232."
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 1,
    "question": "A Power-On Self-Test (POST) is a diagnostic sequence run by BIOS/UEFI at startup, and BIOS beep-code meanings vary by manufacturer.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "POST checks essential hardware before the operating system loads. If POST finds a problem, firmware may use manufacturer-specific beep patterns to identify the fault.",
      "B": "There is no single universal beep-code standard. The motherboard or BIOS/UEFI vendor documentation must be checked for the specific pattern."
    },
    "tip": "POST happens before the OS loads; always match beep codes to the correct BIOS/UEFI vendor. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 3"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 2,
    "question": "The Blue Screen of Death (BSoD) is a Windows stop-error screen caused by a critical error, and Windows must restart to recover.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A BSoD occurs when Windows encounters a serious condition it cannot safely recover from while continuing to run. The stop code can help diagnose the cause, and recovery requires a restart.",
      "B": "A BSoD is not a normal application error that Windows can simply ignore; it represents a critical system-level stop condition."
    },
    "tip": "Record the BSoD stop code before restarting because it can point to a driver, hardware, or system problem. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 4"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 3,
    "question": "When a blank screen appears after system startup, checking power, monitor connections/input, RAM, GPU, CPU installation, CMOS settings, cables, and the monitor itself are valid troubleshooting steps.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A blank screen can come from an external display problem or a system that cannot complete POST. Checking the display path first and then reseating critical hardware helps isolate the failure.",
      "B": "These are appropriate troubleshooting steps because both display-side faults and internal POST failures can produce no visible output."
    },
    "tip": "Blank screen troubleshooting starts outside the PC, then moves inward to POST-critical components. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 5"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 4,
    "question": "Which of these external checks would be useful when troubleshooting a PC that shows no signs of receiving power?",
    "answers": [
      "F"
    ],
    "options": {
      "A": "Ensure that the power cord is securely connected to both the wall outlet and the PSU",
      "B": "Confirm that the outlet is delivering power by testing it with another device or using a circuit tester",
      "C": "Examine the power cord for physical damage or fraying",
      "D": "Verify that any surge protector or power strip is turned on and functioning properly",
      "E": "Plug the system directly into the wall outlet to eliminate the surge protector as a factor",
      "F": "All of the above"
    },
    "explanations": {
      "A": "This is a valid external power check, but it is not the only valid one listed.",
      "B": "This can identify a dead outlet, but the other listed external checks are also useful.",
      "C": "A damaged cable can interrupt power or create a safety hazard, but it is one of several correct checks.",
      "D": "A failed or switched-off strip can prevent power, but it is not the only applicable check.",
      "E": "Bypassing the strip can isolate it as the fault, but the other checks remain valid.",
      "F": "Every listed action checks a possible external interruption between utility power and the computer's PSU."
    },
    "tip": "For a dead PC, trace power from the wall to the outlet, strip, cord, PSU, and then internal connections. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 6"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 5,
    "question": "Which of the following actions might be of help when troubleshooting a PSU that fails to power on?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Confirming that the PSU's power switch is turned on",
      "B": "Inspecting the PSU for physical damage, burning smells, or unusual noises",
      "C": "Performing a paperclip test (ATX jumper test) to verify PSU fan activation",
      "D": "Testing the PSU with a PSU tester or temporarily replacing it with a known-good unit",
      "E": "All of the above"
    },
    "explanations": {
      "A": "A switched-off PSU can make the entire PC appear dead, but additional PSU checks are also valid.",
      "B": "Visible or sensory signs can reveal PSU failure, but this is not the only useful action.",
      "C": "This can provide a basic indication that the PSU starts, but it does not fully validate voltage quality and is only one test.",
      "D": "A tester or known-good replacement can help confirm PSU failure, but all listed steps are useful.",
      "E": "The source identifies each listed action as a useful PSU troubleshooting step."
    },
    "tip": "A PSU fan spinning is only a basic sign of life; a PSU tester or known-good unit gives stronger confirmation. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 7"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 7,
    "question": "Which motherboard-related issue can result in degraded performance without triggering errors or shutdowns?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Corrupted BIOS/UEFI firmware",
      "B": "Swollen/leaking capacitors",
      "C": "Improperly seated CPU",
      "D": "Disconnected ATX power cable"
    },
    "explanations": {
      "A": "Corrupted firmware is more likely to cause boot, configuration, or stability problems rather than the specific gradual degradation identified here.",
      "B": "Failing capacitors can provide unstable power filtering and cause degraded motherboard performance before complete failure occurs.",
      "C": "A badly seated CPU commonly causes failure to POST or severe instability rather than quiet performance degradation.",
      "D": "A disconnected main ATX cable normally prevents the motherboard from powering on."
    },
    "tip": "Bulging or leaking capacitors are physical warning signs that a motherboard may be failing. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 9"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 8,
    "question": "During heavy multitasking, disk activity stays high and monitoring shows unusually high paging. What is the most likely cause?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Overheating of the CPU",
      "B": "Background antivirus scan",
      "C": "Faulty disk controller",
      "D": "Insufficient amount of RAM"
    },
    "explanations": {
      "A": "CPU overheating can cause throttling, but it does not directly explain heavy paging to disk.",
      "B": "A scan can create disk activity, but the question specifically states that performance monitoring confirms excessive paging.",
      "C": "A faulty controller may cause errors or storage failures, but it does not normally cause the OS to page excessively.",
      "D": "When physical RAM is exhausted, the OS moves memory pages to storage more frequently, causing heavy disk activity and slow responsiveness."
    },
    "tip": "Heavy paging plus slow multitasking usually means the system is short on physical RAM. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 10"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 9,
    "question": "What are the likely effects of mixing RAM modules of different sizes and speeds? (Select 2 answers)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "The system will use the total combined memory size of all installed RAM modules",
      "B": "The system will automatically downgrade performance to the speed of the slowest RAM module",
      "C": "The system will use only the fastest RAM module to compensate for slower performance",
      "D": "The system will prioritize the RAM module with the highest capacity",
      "E": "Mixing RAM modules of different sizes will not affect system performance"
    },
    "explanations": {
      "A": "When the modules are compatible and recognized, their capacities generally contribute to the system's total usable memory.",
      "B": "Mixed-speed RAM normally operates at a mutually supported speed, often matching the slowest installed module.",
      "C": "The system does not normally disable slower compatible RAM simply to favor the fastest module.",
      "D": "Memory controllers do not generally ignore other compatible modules in favor of the largest one.",
      "E": "Mixed modules can affect memory-channel operation and speed, so performance can change."
    },
    "tip": "Mixed RAM can add capacity, but memory speed usually falls to the slowest common supported setting. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 11"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 10,
    "question": "A CPU is operating well below its advertised speed and BIOS reports a lower frequency. Which setting could cause this behavior?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Incorrect fan speed control settings",
      "B": "Enabled power-saving mode",
      "C": "Disabled CPU temperature monitoring",
      "D": "Enabled CPU thermal throttling protection"
    },
    "explanations": {
      "A": "Fan settings can affect cooling, but they do not directly configure the CPU to run at a deliberately reduced frequency.",
      "B": "Power-saving settings can intentionally reduce CPU frequency and voltage to lower power consumption.",
      "C": "Disabling monitoring removes temperature reporting or protection features but does not intentionally lower normal CPU frequency.",
      "D": "Thermal throttling lowers speed when temperatures are excessive; the question points to a BIOS setting causing reduced frequency without stating an overheating condition."
    },
    "tip": "Power-saving features can intentionally lower CPU clock speed even when the processor itself is healthy. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 12"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 11,
    "question": "After installing a high-performance GPU, a PC becomes unstable and shuts down or reboots under heavy load. What is the most likely cause?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Overheating CPU",
      "B": "Faulty GPU",
      "C": "Overloaded PSU",
      "D": "Insufficient RAM"
    },
    "explanations": {
      "A": "CPU heat can cause instability, but the timing after a high-power GPU upgrade points more directly to system power demand.",
      "B": "A faulty GPU can cause crashes or artifacts, but repeated load-related shutdowns after increasing power requirements strongly suggest PSU capacity.",
      "C": "A high-performance GPU can push total system power demand beyond the PSU's capacity, causing voltage instability, shutdowns, or reboots.",
      "D": "Low RAM usually causes paging and poor performance rather than sudden power loss under GPU load."
    },
    "tip": "After a GPU upgrade, compare the PSU wattage and connectors against the GPU and total system power requirements. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 13"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 12,
    "question": "Windows Task Manager's Performance and Processes tabs can help identify hardware bottlenecks and compute-intensive processes that cause sluggish performance.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The Performance tab shows utilization of major resources, while Processes helps identify applications consuming CPU, memory, disk, or other resources.",
      "B": "Task Manager is specifically useful for observing resource usage and identifying processes contributing to poor performance."
    },
    "tip": "Performance shows which resource is stressed; Processes helps show what is consuming it. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 14"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 13,
    "question": "Excessive dust buildup can cause overheating, which may lead to:",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Sluggish performance",
      "B": "Frequent system crashes",
      "C": "Unexpected shutdowns",
      "D": "Irreversible hardware damage",
      "E": "All of the above"
    },
    "explanations": {
      "A": "Heat can trigger throttling and reduce performance, but this is only one possible effect.",
      "B": "Overheating can destabilize hardware and cause crashes, but other listed effects are also possible.",
      "C": "Thermal protection can shut the system down to prevent damage, but this is not the only consequence.",
      "D": "Sustained excessive heat can shorten component life or cause permanent damage, but the other choices are also valid.",
      "E": "Dust-restricted cooling can lead to throttling, crashes, shutdowns, and potentially permanent hardware damage."
    },
    "tip": "Dust blocks airflow and traps heat, so cleaning cooling paths is preventive hardware maintenance. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 15"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 14,
    "question": "Which symptom is most likely a direct result of overheating?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Reduced cooling efficiency",
      "B": "Application crashes",
      "C": "Random system shutdowns",
      "D": "Blank screen during boot"
    },
    "explanations": {
      "A": "Reduced cooling efficiency is usually a cause of overheating rather than a symptom produced by it.",
      "B": "Heat can contribute to crashes, but the source identifies a more direct hardware-protection symptom.",
      "C": "Systems may shut down automatically when temperatures become unsafe to protect the CPU, GPU, or motherboard.",
      "D": "A blank boot screen can have many causes and is not the most direct symptom of overheating."
    },
    "tip": "Sudden shutdowns under load can be the system protecting itself from unsafe temperatures. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 16"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 15,
    "question": "What is thermal throttling in relation to CPU overheating?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "The CPU increasing fan speed to cool down",
      "B": "The CPU reducing its operating speed to avoid damage",
      "C": "The PSU reducing voltage to the CPU",
      "D": "The CPU entering a low-power state to reduce energy consumption"
    },
    "explanations": {
      "A": "Fan control may respond to heat, but thermal throttling refers specifically to reducing processor performance.",
      "B": "The CPU lowers clock speed and power use when temperature limits are approached, reducing heat generation.",
      "C": "Thermal throttling is controlled by the processor/platform rather than being a PSU fault response.",
      "D": "Normal low-power states are primarily for energy saving, while thermal throttling is a protective response to excessive temperature."
    },
    "tip": "Thermal throttling protects the CPU by sacrificing speed to reduce heat. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 17"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 16,
    "question": "What is the most appropriate immediate action when a burning smell is detected coming from a computer case?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Disconnect all external devices and peripherals",
      "B": "Inspect physical components for burn marks or discoloration",
      "C": "Disable performance-boosting features in the OS to mitigate heat",
      "D": "Shut down the system and unplug it from a power source"
    },
    "explanations": {
      "A": "Removing peripherals does not eliminate the immediate electrical or fire risk inside the powered computer.",
      "B": "Inspection should happen only after power has been removed and the system is safe.",
      "C": "Software tuning is inappropriate when there may be an active electrical failure.",
      "D": "Removing power immediately reduces the risk of further component damage, electrical failure, or fire."
    },
    "tip": "Burning smell = remove power first; troubleshoot only after the system is safely disconnected. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 18"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 17,
    "question": "Which of the following could lead to unexpected shutdowns in a computer system?",
    "answers": [
      "F"
    ],
    "options": {
      "A": "Dust buildup restricting airflow",
      "B": "Overheating CPU/GPU",
      "C": "Memory errors or failing RAM modules",
      "D": "Failing or underpowered PSU",
      "E": "Software corruption or misconfiguration",
      "F": "All of the above"
    },
    "explanations": {
      "A": "Restricted airflow can cause overheating and shutdowns, but other listed causes are also valid.",
      "B": "Thermal protection can shut the PC down, but this is not the only possible cause.",
      "C": "Memory faults can destabilize the system and contribute to crashes or shutdowns.",
      "D": "A PSU that cannot supply stable power can cause sudden shutdowns, especially under load.",
      "E": "Severe software or driver problems can also produce crashes and restarts.",
      "F": "Each listed hardware or software problem can contribute to unexpected system shutdowns."
    },
    "tip": "Unexpected shutdowns can be thermal, memory, power, or software related - check evidence instead of assuming one cause. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 19"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 18,
    "question": "Which actions can help maintain system stability and prevent hardware-related crashes?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Clean internal components with compressed air to remove dust buildup",
      "B": "Replace or reapply CPU thermal paste as needed",
      "C": "Conduct memory diagnostic tests",
      "D": "Install a PSU that meets or exceeds power requirements",
      "E": "All of the above"
    },
    "explanations": {
      "A": "Cleaning improves airflow and cooling, but it is one of several useful maintenance actions.",
      "B": "Good thermal transfer helps prevent overheating, but other preventive steps are also valid.",
      "C": "Memory testing can reveal unstable or failing RAM, but it is not the only useful action.",
      "D": "Adequate power capacity improves stability, but the other maintenance actions also matter.",
      "E": "Cooling maintenance, memory testing, and adequate power delivery all help reduce hardware-related instability."
    },
    "tip": "Stable PCs need clean cooling, healthy RAM, good thermal contact, and enough PSU capacity. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 20"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 19,
    "question": "Which Windows tools can help troubleshoot unresponsive apps and identify potential causes of application crashes?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Event Viewer",
      "B": "Reliability Monitor",
      "C": "Task Manager",
      "D": "All of the above"
    },
    "explanations": {
      "A": "Event Viewer records system and application events that can reveal error details, but it is not the only useful tool.",
      "B": "Reliability Monitor provides a timeline of crashes and failures, but other listed tools also help.",
      "C": "Task Manager can identify and terminate unresponsive processes and show resource use, but it is one of several useful tools.",
      "D": "Event Viewer, Reliability Monitor, and Task Manager provide complementary information for investigating application problems."
    },
    "tip": "Task Manager handles the current process, Reliability Monitor shows the failure timeline, and Event Viewer provides detailed logs. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 21"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 20,
    "question": "A user reports a popping sound from their computer, followed by it shutting down. What is the most probable cause?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Failing hard drive",
      "B": "Power surge from the wall outlet",
      "C": "Static electricity discharge",
      "D": "Blown capacitor"
    },
    "explanations": {
      "A": "Hard drives may click or grind, but a pop followed by immediate shutdown more strongly indicates an electrical component failure.",
      "B": "A surge could cause damage, but the source identifies the failed component associated with the popping symptom.",
      "C": "ESD can damage electronics, but it is not the most likely explanation for a pop from inside the running computer followed by shutdown.",
      "D": "A capacitor can fail with a pop and immediately disrupt motherboard or power circuitry, causing the computer to shut down."
    },
    "tip": "A pop plus sudden power loss can indicate a failed capacitor or other electrical component - disconnect power before inspection. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 22"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 21,
    "question": "A visual inspection of a motherboard reveals a capacitor with a rounded top. What is the best course of action?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Use a voltage meter to test the capacitor's charge",
      "B": "Gently press down on the top of the capacitor",
      "C": "Ignore it unless the system starts showing problems",
      "D": "Replace the motherboard or affected component"
    },
    "explanations": {
      "A": "A visibly bulging capacitor already shows physical failure and testing it in place is not the appropriate repair approach for a typical PC technician.",
      "B": "Pressing a swollen capacitor is unsafe and cannot restore the damaged component.",
      "C": "Bulging is a failure indicator and should not be ignored because the component may leak or fail further.",
      "D": "A rounded or bulging capacitor indicates hardware failure; replacing the affected assembly is the appropriate service action."
    },
    "tip": "Healthy electrolytic capacitors should not bulge; swelling or leakage means the component is failing. CompTIA A+ 220-1201 - Core PC Hardware Troubleshooting Page 23"
  },
  {
    "topic": "Core PC Hardware Troubleshooting",
    "number": 22,
    "question": "What should be done if a computer's system date and time reset every time it is powered off, despite being set correctly in the OS?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Verify CMOS jumper settings",
      "B": "Enable automatic time synchronization",
      "C": "Update the system BIOS firmware",
      "D": "Replace the CMOS battery"
    },
    "explanations": {
      "A": "A jumper can reset firmware settings when deliberately used, but repeated loss of time after power-off usually indicates loss of standby CMOS power.",
      "B": "Internet time can correct the clock after boot, but it does not fix the hardware cause of losing time while powered off.",
      "C": "A firmware update is not the normal fix for a clock that repeatedly loses its stored time when power is removed.",
      "D": "The CMOS/RTC battery maintains the real-time clock and firmware settings when the PC is disconnected from main power; a weak battery causes resets."
    },
    "tip": "If BIOS time resets after power-off, suspect the CMOS/RTC battery first."
  },
  {
    "topic": "Display Devices",
    "number": 1,
    "question": "Which of the answers listed below refers to a display technology most commonly used in modern computing devices?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "LCD",
      "B": "OLED",
      "C": "Plasma",
      "D": "CRT"
    },
    "explanations": {
      "A": "LCD technology is widely used in modern monitors, laptops, and many other computing displays because it is thin, efficient, and available in many panel types.",
      "B": "OLED is increasingly common in premium devices, but LCD remains more broadly used across modern computing displays in the source quiz.",
      "C": "Plasma displays were mainly used in older large televisions and are no longer a common computing-display technology.",
      "D": "CRT displays are bulky legacy devices that have largely been replaced by flat-panel technologies."
    },
    "tip": "LCD is the broad modern display family; IPS, TN, and VA are common LCD panel types. CompTIA A+ 220-1201 - Display Devices Page 3"
  },
  {
    "topic": "Display Devices",
    "number": 2,
    "question": "What are the characteristic features of IPS display technology? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "High color quality",
      "B": "Fast response times",
      "C": "Wide viewing angles",
      "D": "Low color quality",
      "E": "Slow response times",
      "F": "Low viewing angles"
    },
    "explanations": {
      "A": "IPS panels are known for strong color reproduction, making them useful when accurate or consistent color matters.",
      "B": "TN panels are traditionally better known for the fastest response times; IPS prioritizes color and viewing angles in this quiz.",
      "C": "IPS technology maintains image and color quality well when viewed from off-center angles.",
      "D": "Low color quality is the opposite of a major IPS strength.",
      "E": "Compared with TN in the quiz framing, IPS has traditionally had slower pixel response times.",
      "F": "IPS is specifically known for wide, not narrow, viewing angles."
    },
    "tip": "IPS = excellent color + wide angles, with response speed traditionally behind TN. CompTIA A+ 220-1201 - Display Devices Page 4"
  },
  {
    "topic": "Display Devices",
    "number": 3,
    "question": "Which of the following answers describe the TN display technology? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Low viewing angles",
      "B": "Fast response times",
      "C": "Low color quality",
      "D": "Slow response times",
      "E": "High color quality",
      "F": "Wide viewing angles"
    },
    "explanations": {
      "A": "TN panels lose color and contrast more noticeably when viewed away from the ideal angle.",
      "B": "TN technology is known for quick pixel response, which historically made it popular for fast-motion and gaming displays.",
      "C": "Compared with IPS and VA in the quiz, TN generally provides weaker color reproduction.",
      "D": "TN is associated with fast rather than slow response times.",
      "E": "High color quality is more strongly associated with IPS in the source material.",
      "F": "Wide viewing angles are an IPS strength; TN has more limited viewing angles."
    },
    "tip": "TN = speed first; color quality and viewing angles are the trade-offs. CompTIA A+ 220-1201 - Display Devices Page 5"
  },
  {
    "topic": "Display Devices",
    "number": 4,
    "question": "The VA display technology can be characterized by: (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "High contrast ratios",
      "B": "Low color quality",
      "C": "Good viewing angles",
      "D": "Low contrast ratios",
      "E": "Good color quality",
      "F": "Low viewing angles"
    },
    "explanations": {
      "A": "VA panels can block backlight effectively, producing strong contrast between bright and dark areas.",
      "B": "The quiz identifies VA as providing good color quality rather than low color quality.",
      "C": "VA generally provides better viewing angles than TN, although IPS is often strongest in this area.",
      "D": "High contrast is one of the defining advantages of VA technology.",
      "E": "VA panels provide good color reproduction, balancing image quality and contrast.",
      "F": "The source quiz describes VA as having good rather than low viewing angles."
    },
    "tip": "VA = strong contrast with good color and viewing angles. CompTIA A+ 220-1201 - Display Devices Page 6"
  },
  {
    "topic": "Display Devices",
    "number": 5,
    "question": "What are the key features of an OLED display? (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "F"
    ],
    "options": {
      "A": "Requires backlight to illuminate the screen",
      "B": "Can reach greater brightness levels, especially in well-lit environments",
      "C": "Enables lightweight, bendable, and ultra-slim screens",
      "D": "Works without backlight",
      "E": "Typically offers longer lifespan and is less vulnerable to burn-in",
      "F": "Provides exceptional contrast ratio and black levels"
    },
    "explanations": {
      "A": "OLED pixels emit their own light, so a separate LCD-style backlight is not required.",
      "B": "The source quiz assigns high peak brightness as a Mini-LED strength rather than one of the selected OLED characteristics.",
      "C": "OLED panels can be made very thin and can support flexible display designs because they do not require a conventional backlight assembly.",
      "D": "Each OLED pixel is self-emissive, so the panel can create light directly.",
      "E": "OLED can be susceptible to image retention or burn-in, so this statement is not a key OLED advantage.",
      "F": "OLED can turn individual pixels completely off, producing extremely deep blacks and very high contrast."
    },
    "tip": "OLED pixels make their own light, allowing true black, high contrast, and very thin panels. CompTIA A+ 220-1201 - Display Devices Page 7"
  },
  {
    "topic": "Display Devices",
    "number": 6,
    "question": "Which of the statements listed below refer to Mini-LED displays? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Use a backlight system with smaller, more densely packed LEDs",
      "B": "Offer excellent contrast due to refined backlight control",
      "C": "Achieve high peak brightness suitable for bright environments",
      "D": "Do not require a backlight to illuminate the screen",
      "E": "Provide true black levels by turning off individual pixels",
      "F": "Enable greater control of color accuracy due to self-emissive pixels"
    },
    "explanations": {
      "A": "Mini-LED is an LCD backlighting technology that uses many smaller LEDs to create more precise local-dimming zones.",
      "B": "More and smaller dimming zones let Mini-LED displays control dark and bright areas more precisely than conventional LED-backlit LCDs.",
      "C": "Mini-LED backlights can deliver strong brightness, making them useful in bright rooms and for high-dynamic-range content.",
      "D": "Mini-LED displays are still LCDs and require a backlight; self-emissive OLED does not.",
      "E": "Individual pixels do not emit their own light in Mini-LED LCDs; local dimming controls groups or zones of backlight LEDs.",
      "F": "Mini-LED pixels are not self-emissive. The smaller LEDs belong to the backlight system."
    },
    "tip": "Mini-LED is still LCD: many tiny backlight LEDs improve brightness and local dimming. CompTIA A+ 220-1201 - Display Devices Page 8"
  },
  {
    "topic": "Display Devices",
    "number": 7,
    "question": "IPS, TN, VA, and OLED are all implementations of LCD display technology.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "IPS, TN, and VA are LCD panel technologies, but OLED is a separate self-emissive display technology and is not an LCD implementation.",
      "B": "The statement is false because OLED does not use liquid crystals or an LCD backlight; only IPS, TN, and VA belong to the LCD family here."
    },
    "tip": "IPS + TN + VA = LCD; OLED is its own self-emissive technology. CompTIA A+ 220-1201 - Display Devices Page 9"
  },
  {
    "topic": "Display Devices",
    "number": 8,
    "question": "Which of the following devices is capable of performing both input and output functions?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Game controller",
      "B": "Barcode reader",
      "C": "Touch screen",
      "D": "Graphics tablet"
    },
    "explanations": {
      "A": "A game controller is primarily an input device that sends user commands to the computer or console.",
      "B": "A barcode reader captures barcode information and sends it to a computer, so its main role is input.",
      "C": "A touch screen displays visual information as output while its touch-sensitive layer detects finger or stylus actions as input.",
      "D": "A graphics tablet primarily captures pen or stylus input; it is not generally the display-output device described in the quiz."
    },
    "tip": "Touch screen = display output + touch input in one device. CompTIA A+ 220-1201 - Display Devices Page 10"
  },
  {
    "topic": "Display Devices",
    "number": 9,
    "question": "Which of the answers listed below refer to the function of digitizer? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "A mobile device component responsible for producing output",
      "B": "A component of a mobile device's screen that allows control of the device with a stylus or fingertip",
      "C": "A mobile device component responsible for taking input",
      "D": "A component of a mobile device that handles the rendering of graphics on the display",
      "E": "A mobile device component that translates analog data into a format suitable for computer processing"
    },
    "explanations": {
      "A": "Producing the visible image is the job of the display panel, not the digitizer.",
      "B": "The digitizer detects touch or stylus interaction on the screen surface so the device can respond to user input.",
      "C": "The digitizer is an input component because it senses physical interaction and converts it into data.",
      "D": "Graphics rendering is handled by graphics hardware and software, not by the digitizer.",
      "E": "The digitizer converts the physical or analog touch position into digital information the system can process."
    },
    "tip": "Digitizer = touch-input layer that converts finger or stylus movement into digital coordinates. CompTIA A+ 220-1201 - Display Devices Page 11"
  },
  {
    "topic": "Display Devices",
    "number": 10,
    "question": "Which of the following answers describe key functions of an inverter? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "Converts DC power into AC power",
      "B": "Essential for operating DC-powered devices from AC sources",
      "C": "Used for supplying voltage to backlights in older types of LCD panels",
      "D": "Converts AC power into DC power",
      "E": "Essential for operating AC-powered devices from DC sources",
      "F": "Used for supplying voltage to backlights in OLED displays"
    },
    "explanations": {
      "A": "An inverter changes direct current into alternating current.",
      "B": "Operating DC equipment from an AC source requires AC-to-DC conversion, which is the role of a rectifier or power adapter rather than an inverter.",
      "C": "Older LCDs with CCFL backlights use an inverter to generate the AC voltage needed by the backlight.",
      "D": "AC-to-DC conversion is the opposite of an inverter's primary function.",
      "E": "An inverter allows an AC-powered device to operate when the available source provides DC power.",
      "F": "OLED is self-emissive and does not use the CCFL backlight/inverter arrangement found in older LCD panels."
    },
    "tip": "Inverter = DC to AC; in older LCDs it powered the CCFL backlight. CompTIA A+ 220-1201 - Display Devices Page 12"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 1,
    "question": "What is the most common cause when a display shows No Signal even though the device is powered on?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Outdated display driver",
      "B": "Faulty GPU",
      "C": "Loose power cable",
      "D": "Incorrect input source"
    },
    "explanations": {
      "A": "A driver problem can affect image quality or OS-level display behavior, but a basic No Signal message usually means the monitor is not receiving the selected video input.",
      "B": "A failed GPU can cause no video, but it is less common than simply having the display set to the wrong input source.",
      "C": "The question states the display is powered on, so its power cable is already supplying power.",
      "D": "If the monitor is set to a different HDMI, DisplayPort, or other input than the connected device, it can remain powered while reporting No Signal."
    },
    "tip": "A powered monitor with No Signal should first be checked for the correct HDMI/DisplayPort input. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 3"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 2,
    "question": "A user connects a laptop to an external monitor with an HDMI cable, but the monitor displays a distorted image. What should be done first?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Verify correct input selection using the display's menu",
      "B": "Update the monitor's firmware to the latest version",
      "C": "Restart the connected device to reset display configuration",
      "D": "Ensure the HDMI cable is not damaged or loose"
    },
    "explanations": {
      "A": "The monitor is already receiving enough signal to show an image, so input selection is less likely than a connection problem.",
      "B": "Firmware updates are not the first step for a newly distorted HDMI image.",
      "C": "Restarting may clear a temporary problem, but the physical HDMI connection should be checked first.",
      "D": "A loose or damaged HDMI cable can corrupt the digital video signal and cause distortion, making the cable the first item to inspect."
    },
    "tip": "For a distorted external display, check the video cable and connectors before changing software. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 4"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 3,
    "question": "Which standard troubleshooting steps can help identify physical cabling issues with a display? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Adjust the cable length to improve signal quality",
      "B": "Inspect the cable for visible damage",
      "C": "Ensure the cable is securely connected to both the device and the display",
      "D": "Test the connection with a different cable",
      "E": "Verify the cable's bend radius is within specifications"
    },
    "explanations": {
      "A": "Changing cable length is not a standard first troubleshooting step and does not confirm whether the existing cable is damaged.",
      "B": "Cuts, crushed areas, bent connectors, or exposed wiring can directly explain signal problems.",
      "C": "A partially seated connector can cause intermittent, missing, or distorted video.",
      "D": "A known-good replacement cable is an effective way to isolate a defective cable.",
      "E": "Bend radius matters for some cabling, but it is not one of the source-selected standard checks for this display problem."
    },
    "tip": "Inspect, reseat, and swap the cable - those three steps quickly isolate many physical display-link problems. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 5"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 4,
    "question": "What is the most common symptom of a burnt-out projector bulb?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "The projector powers on, but no image is displayed",
      "B": "The projector displays a dim or distorted image",
      "C": "The projector fails to detect any input sources",
      "D": "The projector shuts down immediately after powering on"
    },
    "explanations": {
      "A": "The projector electronics can still power up while a failed lamp produces no projected light or image.",
      "B": "A weakening lamp can become dim, but a completely burnt-out bulb most directly results in no projected image.",
      "C": "Input detection is handled by the projector electronics and is separate from whether the lamp can produce light.",
      "D": "Shutdown can be caused by thermal or hardware protection issues; it is not the most common direct symptom of a burnt-out lamp."
    },
    "tip": "Projector powers up but produces no light or picture - suspect the lamp/bulb. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 6"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 5,
    "question": "What types of misuse can shorten the life of a projector bulb? (Select 2 answers)",
    "answers": [
      "B",
      "D"
    ],
    "options": {
      "A": "Setting the projector to the highest refresh rate",
      "B": "Powering off the projector without allowing it to cool down",
      "C": "Using the projector in a brightly lit room",
      "D": "Allowing frequent overheating due to poor ventilation",
      "E": "Bypassing lamp replacement warnings through manual reset"
    },
    "explanations": {
      "A": "Refresh rate is not the source-selected behavior that damages the lamp.",
      "B": "Projector lamps operate at high temperatures, and interrupting the proper cooldown cycle can increase thermal stress and shorten lamp life.",
      "C": "Ambient room light reduces perceived image contrast but does not directly shorten bulb life.",
      "D": "Excessive heat stresses the lamp and surrounding components, accelerating wear.",
      "E": "Ignoring a replacement warning is unwise, but the source identifies improper cooldown and overheating as the two misuse conditions."
    },
    "tip": "Projector lamps hate heat - allow cooldown and keep ventilation clear. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 7"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 6,
    "question": "A monitor image appears blurry or unfocused even after brightness and contrast are adjusted. Text and icons look indistinct. What is the most likely cause?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Outdated monitor firmware",
      "B": "Incorrect display resolution setting",
      "C": "Monitor backlight issue",
      "D": "Video screen burn-in"
    },
    "explanations": {
      "A": "Firmware is not the most likely cause of uniformly blurry text and icons.",
      "B": "LCDs are sharpest at their native resolution; a non-native resolution requires scaling and can make text and graphics look blurry.",
      "C": "Backlight problems mainly affect brightness or uniformity, not image focus.",
      "D": "Burn-in leaves persistent image remnants rather than making all text and icons blurry."
    },
    "tip": "Blurry LCD text often means the resolution does not match the panel's native resolution. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 8"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 7,
    "question": "A retail monitor constantly shows a static interface and a faint ghost of its logo remains visible. What is the most likely cause?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Damaged inverter",
      "B": "Backlight bleed",
      "C": "Afterimage effect",
      "D": "Display burn-in"
    },
    "explanations": {
      "A": "An inverter problem affects backlight operation rather than leaving a persistent copy of a static image.",
      "B": "Backlight bleed appears as uneven light around edges or dark scenes, not a ghost of previous content.",
      "C": "Temporary image retention can fade, but the source identifies the persistent uneven-wear condition as display burn-in.",
      "D": "Displaying the same static content for long periods can cause uneven pixel wear and leave a persistent visible image."
    },
    "tip": "Static logos and interfaces left on for long periods can cause burn-in; rotate content or blank the display. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 9"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 8,
    "question": "Persistent image retention can result from static images remaining on a screen for extended periods. Avoiding prolonged static content, changing on-screen elements, using dynamic screensavers, or turning the display off can help prevent it.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source explains that repeated use of the same pixels can create uneven degradation and that changing or blanking content helps reduce the risk.",
      "B": "False contradicts the source explanation that prolonged static content contributes to persistent image retention."
    },
    "tip": "Prevent image retention by giving pixels changing content and periods without a fixed image. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 10"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 9,
    "question": "An LCD panel has one pixel that remains black at all times and never changes color. Which troubleshooting step should be attempted first?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Switch the monitor off and unplug it for an extended period",
      "B": "Apply light, localized pressure to the affected pixel area",
      "C": "Use an app that flashes primary colors or high-contrast patterns",
      "D": "Tap the screen around the affected pixel with a soft object",
      "E": "None of the above"
    },
    "explanations": {
      "A": "Power cycling does not normally restore a truly dead pixel.",
      "B": "Physical pressure can damage an LCD and is not a reliable repair for a pixel that remains black.",
      "C": "Pixel-cycling utilities may sometimes help a stuck pixel, but a permanently black pixel is typically dead.",
      "D": "Tapping the panel can damage it and is not an appropriate troubleshooting method.",
      "E": "The listed actions are not appropriate first fixes for a pixel that remains permanently black; a dead pixel may require panel service or replacement."
    },
    "tip": "A black pixel that never changes is usually dead; do not press or tap the LCD panel. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 11"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 10,
    "question": "A monitor intermittently goes black for brief periods before returning, producing a flashing effect. What are the recommended troubleshooting steps? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Reboot the system to clear temporary software glitches",
      "B": "Cycle through available input selections",
      "C": "Test the connection with a different port if present",
      "D": "Examine the area for electromagnetic interference",
      "E": "Check for loose or damaged video cable"
    },
    "explanations": {
      "A": "A reboot can help software issues, but the source-selected first checks focus on the physical video path.",
      "B": "Input selection problems usually cause a consistent wrong/no signal rather than brief recurring blackouts.",
      "C": "A failing or loose video port can interrupt the signal, so another port helps isolate the problem.",
      "D": "Interference is possible in some environments, but it is not one of the source-selected troubleshooting actions.",
      "E": "A damaged or poorly seated cable can cause intermittent signal loss and brief black screens."
    },
    "tip": "Intermittent blackouts often point to the signal path - check the cable and try another video port. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 12"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 11,
    "question": "Which troubleshooting step would NOT address a monitor displaying washed-out or incorrect colors?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Update graphics and display drivers",
      "B": "Verify cable connection integrity",
      "C": "Adjust the monitor brightness level",
      "D": "Check color calibration settings",
      "E": "Reset monitor to factory defaults"
    },
    "explanations": {
      "A": "Driver problems can affect color output and display behavior, so updating them can be relevant.",
      "B": "A poor video connection can cause incorrect color channels or signal corruption.",
      "C": "Brightness changes overall luminance but does not directly correct inaccurate or washed-out color reproduction.",
      "D": "Calibration directly affects color balance, gamma, and accuracy.",
      "E": "A reset can clear incorrect monitor color settings and is therefore relevant."
    },
    "tip": "Brightness controls light level; color calibration controls color accuracy. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 13"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 12,
    "question": "If a monitor with built-in speakers is not producing sound, the common issue could be that:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "The system's microphone is interfering with speaker output",
      "B": "The sound output in the OS is routed to a different audio playback device",
      "C": "Audio effects and enhancements cause driver conflicts",
      "D": "The monitor's audio output is blocked by an incompatible audio format"
    },
    "explanations": {
      "A": "Microphone input does not normally prevent the monitor's speakers from being selected for playback.",
      "B": "HDMI and DisplayPort can carry audio, but the OS must route playback to the display rather than another speaker or headset.",
      "C": "Enhancements can cause unusual audio behavior, but incorrect playback-device selection is a more common cause.",
      "D": "Format compatibility can matter in special cases, but it is not the common issue identified here."
    },
    "tip": "No monitor audio? Check the OS playback device before assuming the speakers are broken. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 14"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 13,
    "question": "Which actions would help when audio plays through laptop speakers instead of the intended external display? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "Turn off automatic audio device switching in system preferences",
      "B": "Adjust equalizer settings in the audio control panel",
      "C": "Verify that the monitor supports audio over the selected input",
      "D": "Set the external display as the default audio device",
      "E": "Disable the laptop's internal speakers"
    },
    "explanations": {
      "A": "This is not necessary if the correct external audio endpoint can simply be selected.",
      "B": "Equalizer settings change sound characteristics but do not route audio to another device.",
      "C": "The connection and monitor must support audio transport; for example, HDMI and DisplayPort commonly carry audio.",
      "D": "Selecting the display as the playback device directs system audio to its built-in speakers.",
      "E": "Disabling internal speakers is unnecessary and does not verify that the external display is a valid audio endpoint."
    },
    "tip": "External-display sound needs both an audio-capable connection and the display selected as the playback device. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 15"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 14,
    "question": "Which hardware component is most likely to cause a dim image on an LCD monitor?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Malfunctioning backlight",
      "B": "Damaged inverter board",
      "C": "Loose monitor power cable",
      "D": "Overheating video adapter"
    },
    "explanations": {
      "A": "The backlight provides illumination through the LCD panel; when it weakens or fails, the picture can remain present but appear very dim.",
      "B": "An inverter can cause dimness on older CCFL-backlit displays, but the source identifies the backlight itself as the most likely component.",
      "C": "A loose power cable is more likely to cause loss of power or intermittent shutdown than a consistently dim image.",
      "D": "GPU overheating can create artifacts or instability, not usually a uniformly dim LCD image."
    },
    "tip": "If the picture is there but very dark, think backlight. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 16"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 15,
    "question": "A user complains that the monitor image is dim. What should be the initial troubleshooting steps? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Enable the monitor's dynamic contrast feature",
      "B": "Check the brightness and contrast settings on the monitor",
      "C": "Adjust saturation levels in display settings",
      "D": "Verify the monitor's power-saving or eco mode is disabled",
      "E": "Inspect the video and power cable connections"
    },
    "explanations": {
      "A": "Dynamic contrast is an optional image-processing feature and is not a basic first diagnostic step.",
      "B": "Incorrect display controls can make a healthy monitor appear dim and are quick to verify.",
      "C": "Saturation changes color intensity, not overall display brightness.",
      "D": "Eco modes can intentionally reduce backlight output to save power.",
      "E": "Loose or damaged connections can cause unstable or abnormal display operation and should be checked early."
    },
    "tip": "For a dim monitor, check brightness, eco/power-saving settings, and cables before replacing hardware. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 17"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 16,
    "question": "A laptop display is dim on battery power but brightens when connected to AC. What is the most probable cause?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "The AC adapter overrides adaptive brightness features",
      "B": "The laptop battery is undercharged and affecting the display",
      "C": "The laptop is in power-saving mode with reduced brightness",
      "D": "The display inverter is misconfigured for battery use"
    },
    "explanations": {
      "A": "The behavior is more directly explained by the laptop's battery power profile reducing brightness.",
      "B": "Low charge can trigger power-saving policies, but the source identifies the configured power-saving mode itself.",
      "C": "Battery power plans commonly lower screen brightness to reduce energy consumption and extend runtime.",
      "D": "This is not the normal explanation for predictable brightness changes between battery and AC power."
    },
    "tip": "If brightness changes with AC versus battery, check the Windows or laptop power plan. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 18"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 17,
    "question": "Which issue is least likely to cause an intermittent shutdown in a projector?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Insufficient voltage supply",
      "B": "Malfunctioning cooling fan",
      "C": "Improperly seated video cable",
      "D": "Dust buildup in air filters"
    },
    "explanations": {
      "A": "Unstable or insufficient power can cause a projector to shut down unexpectedly.",
      "B": "A failed fan can trigger thermal protection and intermittent shutdowns.",
      "C": "A video cable problem affects the image signal but normally does not shut off the projector's power.",
      "D": "Blocked filters reduce cooling and can cause overheating-related shutdowns."
    },
    "tip": "A video cable can lose the picture, but cooling and power problems can shut the projector itself down. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 19"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 18,
    "question": "Which actions can help prevent intermittent projector shutdowns? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "Using a surge protector in the power connection",
      "B": "Disabling auto-shutdown features in projector settings",
      "C": "Regularly cleaning or replacing air filters",
      "D": "Keeping ventilation openings clear of obstructions",
      "E": "Decreasing the projector's lamp brightness"
    },
    "explanations": {
      "A": "Surge protection is useful electrical protection, but it does not address the source-selected overheating prevention measures.",
      "B": "Disabling protection can hide symptoms and may increase damage if overheating occurs.",
      "C": "Clean filters allow proper airflow and help keep internal temperatures within safe limits.",
      "D": "Unblocked vents let hot air escape and reduce thermal shutdowns.",
      "E": "Lower lamp output can reduce heat, but it is not one of the two source-selected preventive actions."
    },
    "tip": "Projector shutdown prevention is mainly about airflow - clean filters and clear vents. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 20"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 19,
    "question": "A monitor's displayed area is significantly smaller than the physical screen, with black borders on all four sides. Which steps are relevant? (Select 2 answers)",
    "answers": [
      "B",
      "C"
    ],
    "options": {
      "A": "Adjust scale and layout options in the OS display settings",
      "B": "Verify the resolution is set to the monitor's native resolution",
      "C": "Modify display scaling in the monitor's built-in on-screen menu",
      "D": "Extend the monitor's viewable area in the OS display settings",
      "E": "Set OS scaling to a higher percentage"
    },
    "explanations": {
      "A": "OS text/app scaling changes interface size but does not normally remove an underscanned image surrounded by black borders.",
      "B": "A mismatched resolution can cause the image to be scaled instead of filling the panel.",
      "C": "Monitor scaling/aspect controls can determine whether the incoming image fills the screen.",
      "D": "There is no standard OS setting described this way for correcting the physical image area.",
      "E": "Higher UI scaling makes text and apps larger but does not directly correct black borders around the entire video image."
    },
    "tip": "Black borders around the whole image suggest resolution or monitor scaling/underscan, not normal text scaling. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 21"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 20,
    "question": "A technician installs a new widescreen monitor. The image appears stretched and blurry. Which action should be taken first?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Modify the contrast ratio to enhance display sharpness",
      "B": "Decrease the screen scaling percentage in OS settings",
      "C": "Adjust the display resolution to match the monitor's native resolution",
      "D": "Update the monitor's firmware to the latest version"
    },
    "explanations": {
      "A": "Contrast changes tonal separation, not the geometry or scaling causing stretching.",
      "B": "UI scaling affects interface size but does not fix a non-native video resolution.",
      "C": "Using the panel's native resolution restores the correct aspect ratio and avoids interpolation that can make the image blurry.",
      "D": "Firmware is not the first fix for a stretched image after installing a new monitor."
    },
    "tip": "Stretched plus blurry on an LCD usually means the resolution does not match the panel's native resolution. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 22"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 21,
    "question": "A monitor displays random artifacts and flickering colored pixels. What is a common hardware cause?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Overheating or failing graphics card",
      "B": "Faulty monitor power supply",
      "C": "Damaged backlight in the monitor",
      "D": "Outdated or corrupted display driver"
    },
    "explanations": {
      "A": "GPU overheating or failing graphics memory can corrupt rendered data and create artifacts, flickering pixels, or unusual colors.",
      "B": "Power problems more commonly cause power loss, flicker, or shutdown rather than GPU-like colored artifacts.",
      "C": "Backlight damage affects illumination, not the pixel data used to draw random colored artifacts.",
      "D": "Drivers can cause graphical problems, but the question specifically asks for a common hardware cause."
    },
    "tip": "Random colored artifacts under load can be a warning sign of an overheating or failing GPU/VRAM. CompTIA A+ 220-1201 - Display Devices Troubleshooting Page 23"
  },
  {
    "topic": "Display Devices Troubleshooting",
    "number": 22,
    "question": "A monitor intermittently displays a distorted, garbled image with misaligned colors and jagged text. Which step should a technician take first?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Update the monitor's firmware",
      "B": "Test the monitor with a different power cable",
      "C": "Switch to an alternate video input port",
      "D": "Reseat or replace the video cable"
    },
    "explanations": {
      "A": "Firmware is a later possibility; a physical video connection is faster and more likely to explain intermittent signal corruption.",
      "B": "Power cabling can cause power interruptions, but garbled color and text point more directly to the video signal path.",
      "C": "Trying another port can help, but the source-selected first step is to address the cable itself.",
      "D": "A loose or damaged video cable can corrupt signal transmission and produce intermittent distortion, color errors, and jagged output."
    },
    "tip": "Garbled video should start with the simplest signal-path check - reseat or swap the video cable."
  },
  {
    "topic": "IP Addressing",
    "number": 1,
    "question": "An IPv4 address consists of:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "32 bits",
      "B": "48 bits",
      "C": "64 bits",
      "D": "128 bits"
    },
    "explanations": {
      "A": "IPv4 uses a 32-bit address space, divided into four 8-bit octets.",
      "B": "48 bits is the common length of a MAC address, not an IPv4 address.",
      "C": "IPv4 is not 64 bits; its total address length is 32 bits.",
      "D": "128 bits is the length of an IPv6 address."
    },
    "tip": "IPv4 = 32 bits; IPv6 = 128 bits; MAC = 48 bits. CompTIA A+ 220-1201 - IP Addressing Page 3"
  },
  {
    "topic": "IP Addressing",
    "number": 2,
    "question": "IPv4 addresses are expressed with the use of:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Octagonal numbers",
      "B": "Binary numbers",
      "C": "Hexadecimal numbers",
      "D": "Decimal numbers"
    },
    "explanations": {
      "A": "Octagonal is not the standard notation used for IPv4 addresses.",
      "B": "IPv4 is stored internally in binary, but normal human-readable IPv4 notation uses decimal values.",
      "C": "Hexadecimal notation is commonly associated with IPv6, not standard IPv4 display.",
      "D": "IPv4 addresses are normally written in dotted-decimal notation, such as 192.168.1.10."
    },
    "tip": "IPv4 looks like four decimal numbers separated by dots. CompTIA A+ 220-1201 - IP Addressing Page 4"
  },
  {
    "topic": "IP Addressing",
    "number": 3,
    "question": "Which of the answers listed below refer to private IP addresses? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "Assigned within a home or business network for internal communication",
      "B": "Used for devices that need to communicate directly with the Internet and are routable through the global internet infrastructure",
      "C": "Cannot be routed over the public Internet and are only valid within the confines of a local network",
      "D": "Unique across the entire Internet, ensuring that devices can be identified and located globally",
      "E": "Can be reused across different networks (i.e., they do not need to be unique globally)",
      "F": "Assigned by ISPs to devices for communication over the Internet"
    },
    "explanations": {
      "A": "Private IP addresses are used inside local networks for communication among internal devices.",
      "B": "Private addresses are not globally routable; public addresses are used for direct Internet routing.",
      "C": "Private address ranges are reserved for internal use and are not routed across the public Internet.",
      "D": "Private addresses can be reused by many separate organizations and therefore are not globally unique.",
      "E": "The same private address ranges can be used independently in many homes and businesses.",
      "F": "ISPs provide public Internet addressing; private addresses are normally assigned within local networks."
    },
    "tip": "Private IP = internal, reusable, and not publicly routable. CompTIA A+ 220-1201 - IP Addressing Page 5"
  },
  {
    "topic": "IP Addressing",
    "number": 4,
    "question": "Which of the following answers refer to the characteristic features of the 10.0.0.0 - 10.255.255.255 (10.0.0.0/8) IPv4 address space? (Select 2 answers)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "Class A range",
      "B": "Public IP address range",
      "C": "Class B range",
      "D": "Non-routable (private) IP address range",
      "E": "Class C range"
    },
    "explanations": {
      "A": "Under the traditional classful description used by the quiz, the 10.0.0.0 private block falls within Class A address space.",
      "B": "10.0.0.0/8 is reserved for private use and is not a public Internet address range.",
      "C": "The quiz classifies this block as Class A, not Class B.",
      "D": "10.0.0.0/8 is one of the RFC 1918 private IPv4 ranges and is not routed on the public Internet.",
      "E": "The 10.0.0.0 block is not the traditional Class C private block."
    },
    "tip": "Private 10.x.x.x = 10.0.0.0/8 and is the large private Class A block in traditional terminology. CompTIA A+ 220-1201 - IP Addressing Page 6"
  },
  {
    "topic": "IP Addressing",
    "number": 5,
    "question": "Which of the answers listed below refer to the 172.16.0.0 - 172.31.255.255 (172.16.0.0/12) IPv4 address space? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "Class A range",
      "B": "Public IP address range",
      "C": "Class B range",
      "D": "Non-routable (private) IP address range",
      "E": "Class C range"
    },
    "explanations": {
      "A": "The quiz associates this private block with the traditional Class B range.",
      "B": "172.16.0.0 through 172.31.255.255 is reserved for private networking.",
      "C": "In traditional classful terminology, the 172.16.0.0/12 private block lies in Class B address space.",
      "D": "This is one of the three major RFC 1918 private IPv4 ranges.",
      "E": "The traditional private Class C block is associated with 192.168.0.0/16, not this range."
    },
    "tip": "Private 172 range is only 172.16 through 172.31 - not every 172 address is private. CompTIA A+ 220-1201 - IP Addressing Page 7"
  },
  {
    "topic": "IP Addressing",
    "number": 6,
    "question": "What are the characteristic features of the 192.168.0.0 - 192.168.255.255 (192.168.0.0/16) IPv4 address space? (Select 2 answers)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "Class A range",
      "B": "Public IP address range",
      "C": "Class B range",
      "D": "Non-routable (private) IP address range",
      "E": "Class C range"
    },
    "explanations": {
      "A": "The quiz classifies 192.168.0.0/16 within traditional Class C address space.",
      "B": "192.168.0.0/16 is reserved for private internal networking.",
      "C": "This is not the traditional Class B private range.",
      "D": "192.168.0.0/16 is an RFC 1918 private block and is not routed on the public Internet.",
      "E": "Under traditional classful terminology used by the quiz, 192.168.x.x belongs to Class C address space."
    },
    "tip": "192.168.x.x is the private range you commonly see on home routers and LANs. CompTIA A+ 220-1201 - IP Addressing Page 8"
  },
  {
    "topic": "IP Addressing",
    "number": 7,
    "question": "Which of the following statements describe public IP addresses? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "Assigned by ISPs to devices for communication over the Internet",
      "B": "Can be reused across different networks (i.e., they do not need to be unique globally)",
      "C": "Unique across the entire Internet, ensuring that devices can be identified and located globally",
      "D": "Cannot be routed over the public Internet and are only valid within the confines of a local network",
      "E": "Used for devices that need to communicate directly with the Internet and are routable through the global internet infrastructure",
      "F": "Assigned within a home or business network for internal communication"
    },
    "explanations": {
      "A": "Public IP addresses are commonly allocated through Internet service providers for Internet-facing communication.",
      "B": "Public addresses must be globally unique while they are assigned and routed on the Internet.",
      "C": "Global uniqueness allows Internet routers to direct traffic to the correct public destination.",
      "D": "That describes private addressing, not public IP addresses.",
      "E": "Public addresses are designed to be routable across the global Internet.",
      "F": "Internal local addressing is commonly handled with private IP ranges."
    },
    "tip": "Public IP = globally unique and Internet-routable; private IP = reusable inside local networks. CompTIA A+ 220-1201 - IP Addressing Page 9"
  },
  {
    "topic": "IP Addressing",
    "number": 8,
    "question": "An IPv6 address consists of:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "32 bits",
      "B": "48 bits",
      "C": "64 bits",
      "D": "128 bits"
    },
    "explanations": {
      "A": "32 bits is the size of an IPv4 address.",
      "B": "48 bits is commonly associated with MAC addresses.",
      "C": "IPv6 uses 128 bits in total, although /64 is a common IPv6 subnet prefix length.",
      "D": "IPv6 uses a 128-bit address space, providing vastly more addresses than IPv4."
    },
    "tip": "IPv6 doubles 64 to make 128 total address bits. CompTIA A+ 220-1201 - IP Addressing Page 10"
  },
  {
    "topic": "IP Addressing",
    "number": 9,
    "question": "IPv6 addresses are expressed with the use of:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Decimal numbers",
      "B": "Hexadecimal numbers",
      "C": "Binary numbers",
      "D": "Octagonal numbers"
    },
    "explanations": {
      "A": "Dotted decimal is the standard human-readable notation for IPv4.",
      "B": "IPv6 addresses are written as groups of hexadecimal digits separated by colons.",
      "C": "IPv6 is represented internally in binary, but normal written notation uses hexadecimal.",
      "D": "Octagonal notation is not used for standard IPv6 addresses."
    },
    "tip": "IPv6 = hexadecimal groups separated by colons. CompTIA A+ 220-1201 - IP Addressing Page 11"
  },
  {
    "topic": "IP Addressing",
    "number": 10,
    "question": "IPv6 was primarily developed to mitigate the issue of:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Address exhaustion",
      "B": "Outdated protocols",
      "C": "Routing limitations",
      "D": "Network congestion"
    },
    "explanations": {
      "A": "IPv6 provides a vastly larger 128-bit address space to address the shortage of available IPv4 addresses.",
      "B": "Protocol modernization is not the primary reason identified by the quiz for IPv6 development.",
      "C": "IPv6 includes routing improvements, but IPv4 address exhaustion was the primary driving problem.",
      "D": "IPv6 does not primarily exist to solve general network congestion."
    },
    "tip": "IPv6 exists mainly because 32-bit IPv4 could not provide enough unique addresses. CompTIA A+ 220-1201 - IP Addressing Page 12"
  },
  {
    "topic": "IP Addressing",
    "number": 11,
    "question": "APIPA allows a Windows host to self-configure an IPv4 address and subnet mask when a DHCP server is unavailable. APIPA uses the address block range from 169.254.0.0 to 169.254.255.255. APIPA-assigned addresses are valid only for communication within the network segment to which the host is connected. A host with an APIPA-assigned address cannot connect to the Internet.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement matches the quiz: Windows can self-assign an APIPA address in the 169.254.0.0/16 range when DHCP is unavailable, providing only local-link communication.",
      "B": "False is incorrect because the statement accurately describes the APIPA range and its local-only behavior."
    },
    "tip": "169.254.x.x usually means the device could not obtain an address from DHCP. CompTIA A+ 220-1201 - IP Addressing Page 13"
  },
  {
    "topic": "IP Addressing",
    "number": 12,
    "question": "Which of the statements listed below describe static IP addresses? (Select 3 answers)",
    "answers": [
      "A",
      "D",
      "E"
    ],
    "options": {
      "A": "Provide a permanent address, essential for services requiring consistent reachability",
      "B": "Assigned automatically by a DHCP server, minimizing user configuration",
      "C": "Commonly used for consumer devices, prioritizing ease of use, security, and cost efficiency",
      "D": "Must be manually assigned or reserved through administrative tools, requiring more management",
      "E": "Ideal for servers, network devices needing a stable address, and remote access applications",
      "F": "Change periodically, making them unsuitable for hosting services that require a fixed address"
    },
    "explanations": {
      "A": "Static addressing keeps a device at a predictable address, which helps clients reliably reach hosted services.",
      "B": "Automatic DHCP assignment describes dynamic addressing rather than a manually configured static address.",
      "C": "Typical consumer client devices usually use dynamic DHCP addressing because it requires less administration.",
      "D": "Static or administratively fixed addressing requires deliberate configuration and management.",
      "E": "Servers, routers, printers, and remotely accessed systems often need predictable addresses.",
      "F": "Periodic change is a characteristic associated with dynamic addresses, not static ones."
    },
    "tip": "Static = stable and predictable, so it is useful for servers, printers, and network infrastructure. CompTIA A+ 220-1201 - IP Addressing Page 14"
  },
  {
    "topic": "IP Addressing",
    "number": 13,
    "question": "Which of the following answers refer to dynamic IP addresses? (Select 3 answers)",
    "answers": [
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "Must be manually assigned or reserved through administrative tools, requiring more management",
      "B": "Provide a permanent address, essential for services requiring consistent reachability",
      "C": "Ideal for servers, network devices needing a stable address, and remote access applications",
      "D": "Change periodically, making them unsuitable for hosting services that require a fixed address",
      "E": "Assigned automatically by a DHCP server, minimizing user configuration",
      "F": "Commonly used for consumer devices, prioritizing ease of use, security, and cost efficiency"
    },
    "explanations": {
      "A": "Manual or reserved assignment describes administratively fixed addressing rather than ordinary dynamic addressing.",
      "B": "Dynamic addresses may change and therefore are not inherently permanent.",
      "C": "Systems requiring a consistently known address are better suited to static or reserved addressing.",
      "D": "Dynamic addresses are leased and can change over time, making them less suitable when a service requires a fixed destination address.",
      "E": "DHCP automatically provides dynamic addressing and related network settings to clients.",
      "F": "Dynamic DHCP addressing is convenient for ordinary client devices because it reduces manual configuration and administrative overhead."
    },
    "tip": "Dynamic = DHCP lease; convenient for clients, but the address can change. CompTIA A+ 220-1201 - IP Addressing Page 15"
  },
  {
    "topic": "IP Addressing",
    "number": 14,
    "question": "A subnet mask is a 32-bit number that divides an IP address into network and host portions, determining the size of a network.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "For IPv4, a subnet mask is 32 bits and identifies which address bits represent the network and which represent hosts, thereby defining subnet size.",
      "B": "False is incorrect because the statement accurately describes the purpose and length of an IPv4 subnet mask."
    },
    "tip": "Subnet mask separates network bits from host bits. CompTIA A+ 220-1201 - IP Addressing Page 16"
  },
  {
    "topic": "IP Addressing",
    "number": 15,
    "question": "In a network using subnets, the term \"Default gateway\" refers to a network device (router) that enables exchange of data between hosts residing in different subnets.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A default gateway is normally the router interface a host sends traffic to when the destination is outside its local subnet.",
      "B": "False is incorrect because routing through the default gateway enables communication beyond the local subnet, including other subnets and external networks."
    },
    "tip": "Local destination = communicate directly; remote subnet = send the traffic to the default gateway."
  },
  {
    "topic": "Internet Connection Types",
    "number": 1,
    "question": "What are the characteristic features of satellite Internet connections? (Select 3 answers)",
    "answers": [
      "A",
      "D",
      "F"
    ],
    "options": {
      "A": "High signal latency",
      "B": "Lack of signal interference",
      "C": "Cheaper in comparison to terrestrial links",
      "D": "Interference (weather dependent)",
      "E": "Low signal latency",
      "F": "Relatively high cost in comparison to terrestrial links"
    },
    "explanations": {
      "A": "Satellite traffic must travel a very long distance between the user, satellite, and ground infrastructure. That extra travel time creates noticeably higher latency than most terrestrial connections.",
      "B": "Satellite signals can be affected by interference and environmental conditions, so they are not free from signal disruption.",
      "C": "The quiz identifies satellite connectivity as relatively expensive compared with terrestrial alternatives.",
      "D": "Weather conditions can weaken or disrupt satellite radio signals, which can reduce connection quality.",
      "E": "Satellite links are known for higher latency because of the long signal path.",
      "F": "Satellite equipment and service can be more expensive than many wired terrestrial broadband options."
    },
    "tip": "Satellite reaches remote areas, but distance causes latency and weather can affect the signal. CompTIA A+ 220-1201 - Internet Connection Types Page 3"
  },
  {
    "topic": "Internet Connection Types",
    "number": 2,
    "question": "What is a key advantage of fiber-optic Internet over other broadband types like DSL or cable?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Offers higher bandwidth and faster speeds with minimal signal loss",
      "B": "Easier to install in every type of building",
      "C": "Significantly cheaper to deploy over short distances",
      "D": "Immune to hacking and cyberattacks due to its physical properties",
      "E": "Can be easily upgraded to higher speeds without any infrastructure changes"
    },
    "explanations": {
      "A": "Fiber carries data as light and supports very high bandwidth over long distances with less signal degradation than copper-based broadband.",
      "B": "Fiber installation can require specialized cabling, termination, and equipment, so it is not always the easiest option to install.",
      "C": "Fiber deployment can have higher installation costs than reusing existing copper or coax infrastructure.",
      "D": "Fiber is resistant to electromagnetic interference, but that does not make networks using fiber immune to cybersecurity attacks.",
      "E": "Fiber has excellent upgrade potential, but higher speeds can still require changes to transceivers, provider equipment, or other network components."
    },
    "tip": "Fiber = very high bandwidth, high speed, long distance, and low signal loss. CompTIA A+ 220-1201 - Internet Connection Types Page 4"
  },
  {
    "topic": "Internet Connection Types",
    "number": 3,
    "question": "Which of the statements listed below best describes cable Internet connectivity?",
    "answers": [
      "F"
    ],
    "options": {
      "A": "Shared bandwidth among users",
      "B": "Coaxial cabling infrastructure",
      "C": "High-speed data transmission",
      "D": "Not reliant on telephone lines",
      "E": "Often bundled with cable TV",
      "F": "All of the above"
    },
    "explanations": {
      "A": "This is a true characteristic of cable Internet, but the quiz includes several correct characteristics and therefore expects the combined answer.",
      "B": "Cable Internet uses coaxial cable infrastructure, but this is only one of the listed correct characteristics.",
      "C": "Cable broadband can provide high-speed Internet access, but this option alone is incomplete.",
      "D": "Cable Internet uses cable-TV infrastructure rather than traditional telephone lines, but the quiz expects all listed characteristics together.",
      "E": "Cable providers often bundle Internet and television services, but this is only one part of the full answer.",
      "F": "All five listed characteristics apply in the source quiz: cable Internet uses coaxial cable infrastructure, provides high-speed service, is not dependent on telephone lines, may be bundled with TV, and typically shares local bandwidth among users."
    },
    "tip": "Cable Internet = coax, shared neighborhood capacity, and often the same provider infrastructure used for cable TV. CompTIA A+ 220-1201 - Internet Connection Types Page 5"
  },
  {
    "topic": "Internet Connection Types",
    "number": 4,
    "question": "Which physical medium does DSL primarily use for Internet connectivity?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Fiber-optic cabling",
      "B": "Coaxial cabling",
      "C": "Satellite dish",
      "D": "Copper telephone line"
    },
    "explanations": {
      "A": "Fiber-optic cabling is used by fiber broadband services rather than traditional DSL.",
      "B": "Coaxial cable is the physical medium associated with cable Internet.",
      "C": "A satellite dish is used for satellite Internet connectivity, not DSL.",
      "D": "DSL provides broadband service over copper telephone-line infrastructure, commonly twisted-pair copper wiring."
    },
    "tip": "DSL = broadband over copper telephone lines. CompTIA A+ 220-1201 - Internet Connection Types Page 6"
  },
  {
    "topic": "Internet Connection Types",
    "number": 5,
    "question": "How does DSL performance typically compare with other Internet connection types like cable and fiber?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "DSL typically provides symmetrical upload and download speeds",
      "B": "DSL generally offers moderate speeds that decline over distance",
      "C": "DSL offers higher download speeds than cable and fiber",
      "D": "DSL is immune to network congestion and environmental factors"
    },
    "explanations": {
      "A": "Many common DSL services are asymmetric, with download speeds higher than upload speeds.",
      "B": "DSL performance is strongly affected by the length and quality of the copper line, so speeds generally decrease as distance from provider equipment increases.",
      "C": "Cable and especially fiber can generally support substantially higher broadband speeds than traditional DSL.",
      "D": "DSL performance can be affected by line quality, distance, electrical interference, and other conditions, so it is not immune to performance problems."
    },
    "tip": "With DSL, farther from the provider equipment usually means a weaker signal and lower speed. CompTIA A+ 220-1201 - Internet Connection Types Page 7"
  },
  {
    "topic": "Internet Connection Types",
    "number": 6,
    "question": "Which of the following is an advantage of using a cellular Internet connection over wired broadband options like fiber-optic or cable?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Provides unlimited bandwidth for streaming and downloading",
      "B": "Offers higher speeds than fiber-optic connections",
      "C": "Requires no installation of physical cables or infrastructure",
      "D": "Offers guaranteed, symmetrical upload and download speeds"
    },
    "explanations": {
      "A": "Cellular plans and networks can have data limits, throttling, or capacity constraints, so unlimited bandwidth is not guaranteed.",
      "B": "Fiber can provide extremely high and consistent speeds, so cellular is not generally faster than fiber.",
      "C": "A cellular connection uses the mobile provider radio network, allowing a user to connect without installing a wired cable to the premises.",
      "D": "Cellular performance varies with signal strength, network load, technology, and location, and speeds are not guaranteed to be symmetrical."
    },
    "tip": "Cellular Internet is useful when you need broadband without running a physical cable to the location. CompTIA A+ 220-1201 - Internet Connection Types Page 8"
  },
  {
    "topic": "Internet Connection Types",
    "number": 7,
    "question": "Which of the answers listed below best describes how a WISP network delivers Internet connectivity?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Through the installation of underground fiber-optic cables",
      "B": "By transmitting radio frequency signals wirelessly from a central tower to subscriber antennas",
      "C": "Through coaxial cabling infrastructure",
      "D": "By using satellite dishes to communicate with orbiting satellites"
    },
    "explanations": {
      "A": "That describes a wired fiber deployment rather than a Wireless Internet Service Provider connection.",
      "B": "A WISP uses wireless radio links from provider towers or access points to antennas or receivers at subscriber locations.",
      "C": "Coaxial infrastructure is associated with cable Internet service.",
      "D": "That describes satellite Internet, while a WISP normally uses terrestrial wireless towers and antennas."
    },
    "tip": "WISP = terrestrial wireless ISP; tower sends RF signals to an antenna at the customer location. CompTIA A+ 220-1201 - Internet Connection Types Page 9"
  },
  {
    "topic": "Internet Connection Types",
    "number": 8,
    "question": "The common limitations of WISP-based connectivity include:",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Clear line-of-sight dependency",
      "B": "Susceptibility to RF interference and environmental factors",
      "C": "Limited bandwidth capacity relative to wired broadband",
      "D": "Signal degradation over longer distances",
      "E": "All of the above"
    },
    "explanations": {
      "A": "WISP links often work best when the subscriber antenna has a clear path to the provider tower, but the quiz lists several limitations.",
      "B": "Wireless signals can be disrupted by interference, weather, terrain, and obstacles, but this is only one listed limitation.",
      "C": "Wireless capacity can be more constrained than high-capacity wired broadband, but the quiz expects the combined answer.",
      "D": "Radio links weaken over distance and can become less reliable, but this option alone is incomplete.",
      "E": "The source quiz identifies all four listed issues as common WISP limitations: line-of-sight needs, RF/environmental interference, lower capacity than some wired services, and signal degradation with distance."
    },
    "tip": "WISP performance depends on the radio path - distance, obstacles, interference, and available wireless capacity all matter."
  },
  {
    "topic": "Mobile Device Application Support",
    "number": 1,
    "question": "Which software solution is used for centralized mobile device administration?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "XDR",
      "B": "MDM",
      "C": "DLP",
      "D": "UTM"
    },
    "explanations": {
      "A": "XDR combines security data from multiple sources to detect and respond to threats. It is a security detection platform, not the standard solution for centrally administering mobile devices.",
      "B": "Mobile Device Management (MDM) lets an organization centrally configure, monitor, secure, update, and control enrolled mobile devices.",
      "C": "Data Loss Prevention (DLP) focuses on preventing sensitive information from being exposed, copied, or transferred improperly rather than providing complete mobile-device administration.",
      "D": "Unified Threat Management (UTM) combines network-security functions such as firewalling and threat protection. It does not serve as the primary centralized management system for mobile devices."
    },
    "tip": "MDM means Mobile Device Management - think one central console controlling settings, security, apps, and policies on many mobile devices. CompTIA A+ 220-1201 - Mobile Device Application Support Page 3"
  },
  {
    "topic": "Mobile Device Application Support",
    "number": 2,
    "question": "Which mobile device deployment model allows organizations to provide and own the devices while permitting personal use?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "BYOD",
      "B": "COPE",
      "C": "ZTA",
      "D": "CYOD"
    },
    "explanations": {
      "A": "Bring Your Own Device means the employee owns the device and brings it to work, so the organization does not provide and own the hardware.",
      "B": "Corporate-Owned, Personally Enabled (COPE) means the organization owns and supplies the device while allowing the employee to use it for approved personal activities.",
      "C": "Zero Trust Architecture (ZTA) is a security model based on continuously verifying access. It is not a mobile-device ownership and deployment model.",
      "D": "Choose Your Own Device (CYOD) generally lets employees select from an approved list of devices, but it is not the specific model described in the question."
    },
    "tip": "COPE = Corporate-Owned, Personally Enabled - the company owns it, but personal use is allowed. CompTIA A+ 220-1201 - Mobile Device Application Support Page 4"
  },
  {
    "topic": "Mobile Device Application Support",
    "number": 3,
    "question": "Which mobile device deployment model allows employees to use their personal mobile devices to access a company's restricted data and applications?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "COPE",
      "B": "CYOD",
      "C": "BYOD",
      "D": "COBO"
    },
    "explanations": {
      "A": "COPE uses company-owned devices. The question specifically describes employees using devices they personally own.",
      "B": "CYOD involves choosing a device from an organization-approved selection and does not specifically mean bringing an already personally owned device.",
      "C": "Bring Your Own Device (BYOD) allows employees to use their personally owned phones, tablets, or other devices to access approved organizational resources.",
      "D": "Corporate-Owned, Business-Only (COBO) devices belong to the organization and are restricted to business use, which is the opposite of the personal-device model described."
    },
    "tip": "BYOD = Bring Your Own Device - the employee owns the hardware, while company policies control how business resources are accessed. CompTIA A+ 220-1201 - Mobile Device Application Support Page 5"
  },
  {
    "topic": "Mobile Device Application Support",
    "number": 4,
    "question": "Which of the following allows organizations to manage and enforce mobile device policies and security procedures?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "MAC",
      "B": "ZTA",
      "C": "MDM",
      "D": "EDR"
    },
    "explanations": {
      "A": "A MAC address identifies a network interface at the data-link layer. It does not provide centralized policy enforcement for mobile devices.",
      "B": "Zero Trust Architecture is a security approach for verifying users, devices, and access requests, but it is not the mobile administration platform identified by the quiz.",
      "C": "MDM provides centralized controls that can enforce requirements such as screen locks, encryption, approved applications, configuration settings, and remote actions.",
      "D": "Endpoint Detection and Response (EDR) monitors endpoints for suspicious activity and supports threat response, but it is not primarily used to administer general mobile-device policies."
    },
    "tip": "If the question says enforce mobile policies from one place, think MDM - administrators can push security rules and configurations to enrolled devices. CompTIA A+ 220-1201 - Mobile Device Application Support Page 6"
  },
  {
    "topic": "Mobile Device Application Support",
    "number": 5,
    "question": "A user reports that a critical business application is no longer appearing on their company-issued smartphone, while other colleagues still have the application. What is the most likely cause to investigate first?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "The user accidentally deleted the application icon from their home screen",
      "B": "The application may have been remotely uninstalled, or the user's access to it may have been revoked",
      "C": "The app may be restricted due to the user's geolocation, causing it to be hidden",
      "D": "The device is in airplane mode, preventing app synchronization"
    },
    "explanations": {
      "A": "Removing a home-screen shortcut may hide an icon without uninstalling the application, but on a managed company device the first investigation should focus on centralized app deployment and user access.",
      "B": "Company-issued smartphones are often centrally managed. An administrator or management policy can remotely remove an application or change the user's authorization, explaining why colleagues still have it while one user does not.",
      "C": "Location-based restrictions are possible in specialized deployments, but the supplied quiz identifies remote removal or revoked access as the most likely first cause.",
      "D": "Airplane mode can interrupt network synchronization, but it normally does not make an already installed application disappear from the device."
    },
    "tip": "On a managed company phone, a missing business app can be an MDM issue - check whether the app assignment or the user's access was changed remotely. CompTIA A+ 220-1201 - Mobile Device Application Support Page 7"
  },
  {
    "topic": "Mobile Device Application Support",
    "number": 6,
    "question": "Mobile device synchronization involves ensuring that data across various applications, such as calendars, contacts, business emails, and cloud storage, is kept consistent between the device and remote servers. It is essential to manage synchronization carefully, especially with mobile data usage, to avoid exceeding data caps. By configuring devices to sync only over Wi-Fi or adjusting sync frequency, users can reduce mobile data consumption while ensuring critical business applications remain up-to-date.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement correctly describes synchronization: device data is kept consistent with remote services, and settings such as Wi-Fi-only synchronization or reduced sync frequency can help control cellular-data usage.",
      "B": "False is incorrect because the statement accurately explains both the purpose of synchronization and common ways to manage its mobile-data consumption."
    },
    "tip": "Sync keeps local and remote data consistent; Wi-Fi-only sync and longer sync intervals can reduce cellular-data use."
  },
  {
    "topic": "Mobile Device Connection Methods",
    "number": 1,
    "question": "Examples of USB ports that can be found on mobile devices include: (Select all that apply)",
    "answers": [
      "A",
      "B",
      "D"
    ],
    "options": {
      "A": "USB-C",
      "B": "MicroUSB",
      "C": "USB Type-A",
      "D": "MiniUSB",
      "E": "USB Type-B"
    },
    "explanations": {
      "A": "USB-C is widely used on modern phones, tablets, and other mobile devices for charging, data transfer, and peripheral connections.",
      "B": "MicroUSB was commonly used on many older Android phones, tablets, and mobile accessories for charging and data.",
      "C": "USB Type-A is the traditional full-size host connector found mainly on computers, chargers, and hubs rather than as a typical port on compact mobile devices.",
      "D": "MiniUSB appeared on older portable and mobile electronics, including some early mobile devices, cameras, and GPS units.",
      "E": "The full-size USB Type-B connector is commonly associated with peripherals such as printers and is not a typical mobile-device port."
    },
    "tip": "Mobile USB ports are designed for compact devices - remember MiniUSB and MicroUSB as older small connectors, while USB-C is the modern reversible connector. CompTIA A+ 220-1201 - Mobile Device Connection Methods Page 3"
  },
  {
    "topic": "Mobile Device Connection Methods",
    "number": 2,
    "question": "A type of USB connection method commonly used in modern mobile devices due to its reversible design, fast data transfer, and power capabilities is known as:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "USB Type-B",
      "B": "MiniUSB",
      "C": "USB-C",
      "D": "MicroUSB",
      "E": "USB Type-A",
      "F": "Thunderbolt"
    },
    "explanations": {
      "A": "USB Type-B is normally used on larger peripherals such as printers and does not have the small reversible design associated with modern mobile devices.",
      "B": "MiniUSB is an older small connector, but it is not reversible and has largely been replaced on modern devices.",
      "C": "USB-C has a reversible connector and can support high-speed data transfer and substantial power delivery, making it common on current mobile devices.",
      "D": "MicroUSB was common on older mobile devices, but its connector is not reversible and generally offers fewer modern capabilities than USB-C.",
      "E": "USB Type-A is the familiar rectangular connector and is not reversible; it is more common as a host-side port.",
      "F": "Thunderbolt is a high-speed interface that can use the USB-C connector on newer systems, but the question asks for the USB connection type itself."
    },
    "tip": "USB-C describes the reversible connector type; a USB-C port can carry USB data and, on supported devices, additional technologies and power delivery. CompTIA A+ 220-1201 - Mobile Device Connection Methods Page 4"
  },
  {
    "topic": "Mobile Device Connection Methods",
    "number": 3,
    "question": "Which proprietary connector was developed by Apple for its mobile devices?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "USB-C",
      "B": "FireWire",
      "C": "Lightning",
      "D": "Thunderbolt"
    },
    "explanations": {
      "A": "USB-C is an industry-standard connector developed through the USB standards ecosystem, not an Apple-proprietary mobile connector.",
      "B": "FireWire was an IEEE 1394 interface used for high-speed peripherals and was not Apple's proprietary mobile-device charging connector.",
      "C": "Lightning was developed by Apple as a proprietary reversible connector for many generations of iPhone, iPad, and related accessories.",
      "D": "Thunderbolt was developed through collaboration between Intel and Apple for high-speed computer connectivity and is not the proprietary mobile connector described here."
    },
    "tip": "Lightning is associated with many earlier Apple mobile devices; USB-C is the newer industry-standard connector used by many current devices. CompTIA A+ 220-1201 - Mobile Device Connection Methods Page 5"
  },
  {
    "topic": "Mobile Device Connection Methods",
    "number": 4,
    "question": "NFC enables: (Select all that apply)",
    "answers": [
      "A",
      "C",
      "D"
    ],
    "options": {
      "A": "Contactless payment transactions",
      "B": "Long-range wireless communication",
      "C": "Device pairing and data exchange",
      "D": "Access control and authentication",
      "E": "Wireless charging of mobile devices"
    },
    "explanations": {
      "A": "NFC allows a device to exchange data at very short range with compatible payment terminals, enabling tap-to-pay transactions.",
      "B": "NFC is intentionally a very short-range technology, usually operating only within a few centimeters.",
      "C": "NFC can exchange small amounts of data and can simplify pairing or initiating communication between nearby compatible devices.",
      "D": "NFC tags, cards, and mobile credentials can be used by compatible systems for identity checks and physical access control.",
      "E": "Standard mobile-device wireless charging is typically based on technologies such as Qi; NFC's primary purpose is short-range communication, not general phone charging."
    },
    "tip": "NFC means near-field communication - think tap-to-pay, tap-to-pair, and tap-to-authenticate at very short range. CompTIA A+ 220-1201 - Mobile Device Connection Methods Page 6"
  },
  {
    "topic": "Mobile Device Connection Methods",
    "number": 5,
    "question": "Which of the following is a popular, short-range wireless standard for connecting various personal devices in a WPAN?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Zigbee",
      "B": "NFC",
      "C": "Bluetooth",
      "D": "Wi-Fi Direct"
    },
    "explanations": {
      "A": "Zigbee is a low-power wireless technology commonly used for IoT and home-automation networks rather than the typical personal-device connections described here.",
      "B": "NFC works only at extremely short range and is mainly used for taps, tags, payments, and quick exchanges rather than general WPAN peripheral connectivity.",
      "C": "Bluetooth is a short-range wireless standard commonly used in wireless personal area networks to connect devices such as headsets, keyboards, mice, phones, and wearables.",
      "D": "Wi-Fi Direct can connect devices directly over Wi-Fi, but Bluetooth is the standard most strongly associated with common short-range WPAN personal-device connections."
    },
    "tip": "WPAN is the personal-device zone around you - Bluetooth commonly connects headphones, keyboards, mice, watches, and phones within that space. CompTIA A+ 220-1201 - Mobile Device Connection Methods Page 7"
  },
  {
    "topic": "Mobile Device Connection Methods",
    "number": 6,
    "question": "Which of the terms listed below best describes a mobile device's ability to share its Internet connection with other devices?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Pairing",
      "B": "Clustering",
      "C": "Tethering",
      "D": "Bonding"
    },
    "explanations": {
      "A": "Pairing establishes a trusted connection between devices, commonly with Bluetooth, but it does not specifically mean sharing an Internet connection.",
      "B": "Clustering combines multiple computers or systems to work together and is unrelated to mobile Internet sharing.",
      "C": "Tethering is the process of sharing a mobile device's Internet connection with another device through Wi-Fi, USB, or Bluetooth.",
      "D": "Network bonding combines multiple network links or interfaces for performance or redundancy; it is not the normal term for sharing a phone's Internet access."
    },
    "tip": "Tethering turns a phone's cellular data connection into Internet access for another device through Wi-Fi, USB, or Bluetooth. CompTIA A+ 220-1201 - Mobile Device Connection Methods Page 8"
  },
  {
    "topic": "Mobile Device Connection Methods",
    "number": 7,
    "question": "A mobile hotspot is a device that creates a WLAN by acting as a portable WAP for other devices.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A mobile hotspot provides wireless network access by functioning as a portable wireless access point and typically shares a cellular Internet connection with connected devices.",
      "B": "This statement is accurate: a hotspot creates a local wireless network and provides Wi-Fi access to client devices, so False is not correct."
    },
    "tip": "A mobile hotspot is essentially a portable access point - client devices join its Wi-Fi network to reach the shared Internet connection."
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 1,
    "question": "Which of the following actions are considered best practices for monitoring the health of a mobile device battery? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Always fully discharge the battery before recharging",
      "B": "Track battery health using built-in OS tools or third-party apps",
      "C": "Disable battery-saving features to get a more accurate reading of capacity loss",
      "D": "Monitor charging cycles and battery capacity degradation",
      "E": "Check for swelling, overheating, or failure to hold a charge"
    },
    "explanations": {
      "A": "Repeated deep discharges can add unnecessary wear to modern lithium-ion batteries and are not required for routine health monitoring.",
      "B": "Battery-health utilities can report useful measurements such as condition, capacity, charge behavior, and sometimes cycle count.",
      "C": "Battery-saving features change power usage, but disabling them is not a standard requirement for checking the battery's physical health or capacity.",
      "D": "Cycle count and declining maximum capacity are useful indicators of battery aging and long-term wear.",
      "E": "These physical and performance symptoms can indicate a damaged, unsafe, or worn-out battery."
    },
    "tip": "Battery health combines software data with physical warning signs - check capacity and cycles, but also watch for heat, swelling, and poor charge retention. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 3"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 2,
    "question": "Which of the steps listed below should be followed when replacing a mobile device's battery? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "E"
    ],
    "options": {
      "A": "Follow manufacturer guidelines for safe removal and installation",
      "B": "Ensure proper disposal of the old battery according to local regulations for electronic waste",
      "C": "Use any available universal battery as long as it fits physically within the device",
      "D": "Charge the new battery to 100% immediately after installation and then let it fully discharge to 'condition' it",
      "E": "Ensure the replacement battery is compatible with the device model"
    },
    "explanations": {
      "A": "Manufacturer procedures identify the correct disassembly method, connector handling, and safety precautions for that device.",
      "B": "Lithium batteries should be recycled or disposed of through approved e-waste channels because they can present fire and environmental hazards.",
      "C": "Physical fit does not guarantee correct voltage, connector type, capacity, charging circuitry, or safety compatibility.",
      "D": "Modern lithium-ion batteries do not require a full charge/full discharge conditioning cycle, and repeated deep discharge can increase wear.",
      "E": "A compatible battery must match the device's electrical and physical requirements so it can operate and charge safely."
    },
    "tip": "For battery replacement, think SAFE: correct Service procedure, Approved/compatible battery, and proper E-waste disposal. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 4"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 3,
    "question": "Which action does not conform with recommended practices for diagnosing and repairing a mobile device's keyboard?",
    "answers": [
      "F"
    ],
    "options": {
      "A": "Implement proper ESD safety measures by using an anti-static wristband and working on an ESD mat to protect sensitive components from static discharge",
      "B": "Perform comprehensive diagnostics using specialized key testing software to accurately identify any malfunctioning keys",
      "C": "Use appropriate tools (such as precision screwdrivers and plastic pry tools) and OEM-approved replacement parts to avoid causing further damage during the repair",
      "D": "Conduct detailed visual inspections to detect physical damage, debris accumulation, or water exposure on the keyboard",
      "E": "Follow manufacturer guidelines by consulting the service manual or official repair guide to ensure safe disassembly and reassembly of the device",
      "F": "Leave the device powered on during repair to provide immediate feedback on the exact malfunctioning component, such as a faulty key"
    },
    "explanations": {
      "A": "This is recommended because ESD precautions help protect exposed electronic components during service.",
      "B": "This is a valid diagnostic step because software testing can identify keys that fail to register or send incorrect input.",
      "C": "Proper tools and approved parts reduce the risk of damaging connectors, fasteners, or the device enclosure.",
      "D": "Visual inspection is an appropriate first-line diagnostic method for identifying contamination or physical damage.",
      "E": "Service documentation provides device-specific procedures and is a recommended repair resource.",
      "F": "Working inside a powered device increases the risk of short circuits, component damage, and injury. The device should normally be powered down before internal repair."
    },
    "tip": "Diagnose while the device is safe to test, but power it down before opening it or disconnecting internal keyboard hardware. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 5"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 4,
    "question": "Which of the following devices generally offers the easiest and most user-accessible RAM replacement procedure?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Smartphone",
      "B": "Tablet",
      "C": "Gaming console",
      "D": "Laptop"
    },
    "explanations": {
      "A": "Smartphone memory is normally soldered to the logic board and is not designed as a user-replaceable RAM module.",
      "B": "Tablet RAM is generally integrated or soldered to the mainboard, making replacement impractical for normal servicing.",
      "C": "Console memory is commonly integrated into the motherboard and is not normally installed in user-accessible DIMM or SODIMM slots.",
      "D": "Many serviceable laptops use removable SODIMM modules behind a bottom cover or access panel, making RAM replacement comparatively straightforward."
    },
    "tip": "If you see SODIMM in a mobile-hardware question, think laptop RAM - small removable memory modules designed for compact computers. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 6"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 5,
    "question": "Which of the tools listed below can be used to monitor the health and performance of a laptop's storage drive?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "S.M.A.R.T.",
      "B": "Storage Sense",
      "C": "chkdsk",
      "D": "Disk defragmenter"
    },
    "explanations": {
      "A": "S.M.A.R.T. records drive health indicators and can report warning signs related to reliability and failure risk.",
      "B": "Storage Sense is mainly a Windows storage-cleanup feature that removes unnecessary files; it is not a drive-health monitoring standard.",
      "C": "chkdsk checks a file system and can locate logical errors or bad sectors, but it is not the primary ongoing health-monitoring technology listed here.",
      "D": "Defragmentation reorganizes data on an HDD to improve access efficiency; it does not provide the drive-health monitoring data supplied by S.M.A.R.T."
    },
    "tip": "S.M.A.R.T. means the drive is reporting on itself - use it to watch storage-health indicators before a failure becomes obvious. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 7"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 6,
    "question": "What should be the preliminary step of an HDD/SSD replacement procedure?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Power down the device and remove the battery",
      "B": "Format the new drive before installing it",
      "C": "Perform a full system reset before replacing the drive",
      "D": "Backup the data on the existing drive"
    },
    "explanations": {
      "A": "Powering down is necessary before physically replacing the drive, but protecting the user's data should come first when the existing drive is still readable.",
      "B": "Formatting may be part of setup later, but it should not occur before preserving data from the old drive.",
      "C": "A reset can erase settings or data and is unnecessary as the first step in a normal storage replacement.",
      "D": "Backing up first protects files and gives the technician a recovery source before hardware changes create any risk of data loss."
    },
    "tip": "Before replacing storage, protect the data first - backup before disassembly, formatting, cloning, or operating-system installation. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 8"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 7,
    "question": "Which actions should be performed first when replacing a faulty wireless card/module in a laptop? (Select 2 answers)",
    "answers": [
      "A",
      "C"
    ],
    "options": {
      "A": "Power down the laptop and remove the battery",
      "B": "Label all screws and connectors during disassembly to aid reassembly",
      "C": "Remove all external peripherals from the device",
      "D": "Perform a full power cycle of the laptop by turning it off and then on again",
      "E": "Locate the wireless card slot on the motherboard"
    },
    "explanations": {
      "A": "Removing power reduces the risk of short circuits and accidental damage while working with the internal wireless card.",
      "B": "Labeling can be useful during disassembly, but it comes after the initial safety and preparation steps.",
      "C": "Disconnecting attached devices clears the workspace and prevents connected peripherals or cables from interfering with service.",
      "D": "Restarting does not prepare the laptop for physical wireless-card replacement and would restore power to a device that needs to be opened.",
      "E": "The card location must be identified during disassembly, but the laptop should first be powered down and disconnected from external equipment."
    },
    "tip": "Before internal laptop service, remove sources of power and external connections; locate and replace the component only after the device is safe to open. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 9"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 8,
    "question": "Which of the following statements regarding a mobile device Bluetooth module is true?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Bluetooth modules are typically located near the device's display and require screen removal for replacement",
      "B": "Once a Bluetooth module is replaced, it will automatically adjust to the device's current settings without the need for manual pairing",
      "C": "Bluetooth is usually integrated into the Wi-Fi card or directly into the motherboard",
      "D": "When replacing a faulty Bluetooth module, as long as the physical connectors match, the new Bluetooth module can come from a different device model"
    },
    "explanations": {
      "A": "Bluetooth hardware is not generally defined by a display-area location; its placement depends on the device design.",
      "B": "Replacement hardware may require drivers, configuration, and new pairing with Bluetooth accessories.",
      "C": "Modern mobile devices commonly combine Wi-Fi and Bluetooth functions on one wireless module or integrate them onto the mainboard.",
      "D": "Matching connectors alone does not guarantee chipset, firmware, driver, antenna, or electrical compatibility."
    },
    "tip": "Wi-Fi and Bluetooth often share hardware - a combo wireless card can provide both radio functions in one module. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 10"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 9,
    "question": "What is a recommended practice for assessing the effectiveness and reliability of biometric components on a mobile device?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Using software tools to track scan success rates, response times, and error logs",
      "B": "Ensuring proper calibration through built-in settings or specialized diagnostic software",
      "C": "Tracking access attempts and failures for security auditing purposes",
      "D": "Updating drivers and firmware to prevent malfunctions caused by outdated software",
      "E": "All of the above"
    },
    "explanations": {
      "A": "This is a valid assessment method, but it is only one of several recommended practices listed.",
      "B": "Calibration helps the sensor interpret readings accurately, but this is not the only useful reliability check.",
      "C": "Reviewing successes and failures can reveal reliability or security problems, but it is only part of a complete assessment.",
      "D": "Current drivers and firmware can correct compatibility or performance problems, but this alone does not cover all assessment practices.",
      "E": "Each listed action contributes to evaluating or maintaining biometric reliability, so the combined choice is the most complete answer."
    },
    "tip": "Biometric reliability is more than one scan - verify performance data, calibration, security failures, and supporting software or firmware. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 11"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 10,
    "question": "After replacing a faulty biometric scanner on a mobile device, which essential step must be performed to ensure that the scanner produces accurate readings?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Recalibration",
      "B": "Factory reset",
      "C": "Driver update",
      "D": "Firmware update"
    },
    "explanations": {
      "A": "A newly installed biometric sensor should be calibrated so its readings align correctly with the device's hardware and software expectations.",
      "B": "A factory reset erases user configuration and is not normally required just to make a replacement biometric sensor read accurately.",
      "C": "A driver update may be needed for compatibility, but it does not replace the calibration process required for accurate sensor readings.",
      "D": "Firmware can affect device operation, but updating it is not the specific post-replacement step that establishes sensor reading accuracy."
    },
    "tip": "Replacement sensor plus calibration go together - installation makes the hardware available; calibration makes its readings accurate. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 12"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 11,
    "question": "A technician is troubleshooting a mobile device's NFC functionality. Which action(s) would help verify the NFC scanner's operational status? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "E"
    ],
    "options": {
      "A": "Check for dirt or moisture on the sensor's surface",
      "B": "Test the NFC functionality with a known compatible NFC tag or device",
      "C": "Update the device's screen brightness, as the NFC sensor relies on ambient light levels",
      "D": "Connect to a Wi-Fi network to test device connectivity",
      "E": "Ensure NFC is enabled in the device settings"
    },
    "explanations": {
      "A": "Contamination or moisture can interfere with close-range communication or indicate a physical condition that should be corrected before further testing.",
      "B": "A known-good tag or device provides a controlled test to determine whether the NFC hardware can detect and communicate properly.",
      "C": "NFC uses short-range radio-frequency communication, not ambient light, so screen brightness does not determine NFC operation.",
      "D": "Wi-Fi and NFC are different wireless technologies; successful Wi-Fi connectivity does not prove that the NFC radio is working.",
      "E": "The NFC hardware cannot be meaningfully tested if the feature is disabled at the operating-system level."
    },
    "tip": "Test NFC in three layers: enabled setting, clean/usable hardware area, and communication with a known-good NFC target. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 13"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 12,
    "question": "Which of the answers listed below correctly describes the typical location of a laptop's Wi-Fi antenna?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "On the WLAN module",
      "B": "Near the top, inside display case",
      "C": "Inside laptop's case",
      "D": "Typically attached via external expansion port"
    },
    "explanations": {
      "A": "The WLAN card contains the radio circuitry and antenna connectors, but the antenna elements themselves are usually routed elsewhere for better reception.",
      "B": "Laptop Wi-Fi antennas are commonly positioned around the upper display/bezel area, where they can receive signals with less obstruction from internal components.",
      "C": "This is too general and does not identify the typical high-mounted display-area placement used to improve wireless reception.",
      "D": "Built-in laptop Wi-Fi antennas are internal components and normally do not connect through an external expansion port."
    },
    "tip": "Laptop Wi-Fi antenna leads often run from the wireless card through the hinge and up around the display bezel. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 14"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 13,
    "question": "Which of the following actions would not help in troubleshooting a malfunctioning mobile device camera?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Inspect and clean the camera lens",
      "B": "Verify camera settings and permissions",
      "C": "Test camera functionality in multiple apps",
      "D": "Adjust the host device's screen brightness",
      "E": "Check for firmware and software updates"
    },
    "explanations": {
      "A": "Cleaning removes dirt or smudges that can cause blurry or obstructed images, so it is a useful troubleshooting step.",
      "B": "Incorrect permissions or settings can prevent an app from accessing the camera, making this an appropriate software check.",
      "C": "Testing more than one app helps distinguish an app-specific problem from a system-wide camera issue.",
      "D": "Display brightness changes how the screen looks to the user but does not repair or diagnose the camera hardware or its software access.",
      "E": "Updates can resolve camera-driver, firmware, compatibility, or application defects, so checking them can help."
    },
    "tip": "Camera troubleshooting follows the image path - lens, permissions, apps, and software; screen brightness affects the display, not camera operation. CompTIA A+ 220-1201 - Mobile Device Hardware Servicing Study Guide Page 15"
  },
  {
    "topic": "Mobile Device Hardware Servicing",
    "number": 14,
    "question": "Which of the items listed below is not recommended for clearing potential blockages from a mobile device microphone?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Lint-free cloth",
      "B": "Soft brush",
      "C": "Can of compressed air",
      "D": "Microfiber cloth"
    },
    "explanations": {
      "A": "A lint-free cloth can safely wipe the exterior microphone area without leaving fibers behind when used gently.",
      "B": "A soft brush can loosen surface debris around a microphone opening without forcing material deeply into the device when used carefully.",
      "C": "Compressed air can force debris or moisture farther into the microphone opening and may damage delicate internal components, so it is not recommended here.",
      "D": "A microfiber cloth is suitable for gentle exterior cleaning because it can remove surface dirt without abrasive contact."
    },
    "tip": "Mobile microphones are delicate - clean the opening gently from the outside instead of blasting debris inward with compressed air."
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 1,
    "question": "What is the latest standard for mobile telecommunications?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Wi-Fi 7",
      "B": "Bluetooth 6.0",
      "C": "5G",
      "D": "WiMAX 3",
      "E": "None of the above"
    },
    "explanations": {
      "A": "Wi-Fi 7 is a wireless LAN standard, not a cellular mobile-telecommunications generation.",
      "B": "Bluetooth is a short-range personal-area networking technology rather than a cellular telecommunications standard.",
      "C": "The supplied quiz identifies 5G as the current mobile-telecommunications standard among these choices. It is designed for cellular voice and data service with higher capacity and performance than earlier generations.",
      "D": "WiMAX is a broadband wireless technology and is not the cellular generation identified by the quiz.",
      "E": "This is incorrect because 5G is one of the listed choices and is the answer marked correct in the supplied quiz."
    },
    "tip": "The G in 5G means generation of cellular technology; Wi-Fi and Bluetooth are different wireless technologies. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 3"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 2,
    "question": "What is the primary purpose of enabling a mobile hotspot feature on a smartphone?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "To transfer files between the phone and other devices",
      "B": "To boost Wi-Fi signal strength in the area",
      "C": "To share the phone's cellular data connection with other devices",
      "D": "To allow the phone to access a wired network"
    },
    "explanations": {
      "A": "File transfer can be performed through technologies such as Bluetooth, USB, or cloud services, but it is not the main purpose of a hotspot.",
      "B": "A phone hotspot creates its own wireless access point; it is not primarily a Wi-Fi range extender.",
      "C": "A mobile hotspot lets nearby client devices connect to the phone over Wi-Fi and use the phone's cellular Internet connection.",
      "D": "A hotspot is used to share the phone's connection with clients, not to give the phone access to a wired Ethernet network."
    },
    "tip": "Hotspot = share cellular Internet over Wi-Fi; the phone acts like a small wireless access point. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 4"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 3,
    "question": "What can be a probable reason why a mobile hotspot might not be working on a device?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "The device has a locked SIM card",
      "B": "Wi-Fi is disabled on the connecting device",
      "C": "The device is not compatible with the connecting device",
      "D": "Cellular data is disabled on the device",
      "E": "The device is being used to make a phone call"
    },
    "explanations": {
      "A": "A SIM issue can affect cellular service, but the supplied quiz identifies disabled cellular data as the best answer for this question.",
      "B": "This could stop that particular client from joining the hotspot, but it does not necessarily mean the hotspot feature itself is not working.",
      "C": "Hotspots use standard Wi-Fi connectivity, so general device-to-device compatibility is not the primary cause identified here.",
      "D": "The hotspot normally shares the phone's cellular data. If cellular data is disabled, the hotspot may provide a Wi-Fi connection without usable Internet access.",
      "E": "A phone call does not normally disable hotspot service on modern cellular networks, so this is not the best explanation."
    },
    "tip": "A hotspot needs two sides working: cellular data supplies the Internet, and Wi-Fi distributes it to client devices. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 5"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 4,
    "question": "A user is attempting to connect to a workplace Wi-Fi network, but their mobile device shows no available networks. What is the most appropriate first step in troubleshooting this issue?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Restart the wireless access point",
      "B": "Switch to a different frequency band",
      "C": "Verify that Wi-Fi is enabled on the mobile device",
      "D": "Change the wireless channel"
    },
    "explanations": {
      "A": "Restarting infrastructure affects other users and is too disruptive before checking the mobile device's basic settings.",
      "B": "Band selection can matter later, but first verify that the device's Wi-Fi radio is actually enabled.",
      "C": "Troubleshooting should begin with the simplest local cause. If Wi-Fi is turned off, the device cannot scan for or display nearby wireless networks.",
      "D": "Changing the access point's channel is an advanced infrastructure step and should not be the first action when one mobile device sees no networks."
    },
    "tip": "Start Wi-Fi troubleshooting at the device: verify Wi-Fi is on before changing access points, bands, or channels. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 6"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 5,
    "question": "Which of the statements listed below does not refer to the characteristic features of a traditional SIM?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Physical card",
      "B": "Installed by inserting the card into a device's SIM slot",
      "C": "Can be moved between devices",
      "D": "Requires physical SIM swap for changing carriers",
      "E": "None of the above"
    },
    "explanations": {
      "A": "A traditional SIM is a removable physical card, so this does describe it.",
      "B": "Traditional SIM cards are physically inserted into a SIM slot, so this is a valid characteristic.",
      "C": "A removable SIM can generally be transferred between compatible devices, so this is characteristic of a traditional SIM.",
      "D": "With a traditional physical SIM, changing carrier profiles commonly involves replacing the SIM card, so this describes the traditional approach.",
      "E": "All four preceding statements describe traditional physical SIM characteristics, so none of them is the exception."
    },
    "tip": "Traditional SIM = removable physical card; eSIM = embedded chip with carrier profiles managed electronically. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 7"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 6,
    "question": "An eSIM is a modern alternative to the traditional SIM card. Unlike traditional SIMs, an eSIM is an embedded chip built into the device (not a physical card).",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the supplied quiz: an eSIM is embedded in the device and can store carrier information without requiring a removable physical SIM card.",
      "B": "False is incorrect because the statement accurately describes the basic distinction between an eSIM and a traditional removable SIM."
    },
    "tip": "The e in eSIM can remind you of embedded - it is built into the device instead of inserted as a removable card. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 8"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 7,
    "question": "In the Bluetooth authentication process, a PIN serves as a shared secret or passkey used during the pairing process to authenticate the identity of the two devices attempting to connect.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "During Bluetooth pairing, a PIN or passkey can be used to confirm that the intended devices are establishing the trusted connection.",
      "B": "False is incorrect because a PIN/passkey is a recognized Bluetooth pairing method used to authenticate or confirm the connection between devices."
    },
    "tip": "Bluetooth pairing establishes trust; matching or confirming a PIN/passkey helps verify that the correct devices are being connected. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 9"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 8,
    "question": "What is the correct sequence of steps to establish Bluetooth connectivity?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Enable Bluetooth -> Test connectivity -> Find a device for pairing -> Enter identification code -> Enable pairing",
      "B": "Find a device for pairing -> Enable Bluetooth -> Test connectivity -> Enable pairing -> Enter identification code",
      "C": "Enable Bluetooth -> Enable pairing -> Find a device for pairing -> Enter identification code -> Test connectivity",
      "D": "Test connectivity -> Enable Bluetooth -> Find a device for pairing -> Enable pairing -> Enter identification code"
    },
    "explanations": {
      "A": "Testing cannot logically occur before the devices have been paired, and pairing must be enabled before completing the connection.",
      "B": "Bluetooth must be enabled before the device can properly discover nearby Bluetooth devices, and testing belongs at the end.",
      "C": "This follows the correct workflow shown in the quiz: turn Bluetooth on, make pairing possible, discover the device, authenticate the connection, and then verify that it works.",
      "D": "Connectivity cannot be tested before Bluetooth is enabled and the devices have established a paired connection."
    },
    "tip": "Bluetooth setup follows ON -> PAIR -> FIND -> AUTHENTICATE -> TEST. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 10"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 9,
    "question": "A mobile device's built-in functionality enabling the usage of locator applications is called:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "GPS",
      "B": "LTE",
      "C": "GSM",
      "D": "MDM"
    },
    "explanations": {
      "A": "GPS provides geographic positioning information that locator and navigation applications can use to determine the device's location.",
      "B": "LTE is a cellular network technology for mobile communications and data, not the built-in positioning function named by the question.",
      "C": "GSM is a cellular communications standard and does not specifically describe the device's satellite-based locator functionality.",
      "D": "Mobile Device Management is used by organizations to administer and secure devices; it is not the positioning technology used by locator apps."
    },
    "tip": "GPS tells the device where it is; LTE and GSM connect it to cellular networks, while MDM manages the device. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 11"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 10,
    "question": "Which of the following is a common issue that can prevent cellular location services from working properly? (Select the best answer)",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Location services turned off",
      "B": "Weak cellular signal",
      "C": "Incorrect permissions for location-based applications",
      "D": "Any of the above"
    },
    "explanations": {
      "A": "Turning location services off can prevent location features from working, but the quiz includes several valid causes and therefore selects the inclusive answer.",
      "B": "A weak cellular signal can reduce the availability or accuracy of network-based location information, but it is only one possible cause.",
      "C": "If an app lacks location permission, it may be unable to access location data even when the underlying service is available.",
      "D": "Each preceding condition can interfere with cellular or application-based location functionality, so the supplied quiz marks the combined answer as correct."
    },
    "tip": "Location troubleshooting has three layers: service enabled, usable network signal, and permission for the app. CompTIA A+ 220-1201 - Mobile Device Network Connectivity Page 12"
  },
  {
    "topic": "Mobile Device Network Connectivity",
    "number": 11,
    "question": "Which of the answers listed below accurately describes the advantage of using cellular location services over GPS in certain scenarios?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Cellular location services can provide more precise location data than GPS",
      "B": "Cellular location services work indoors and in locations where GPS signals are blocked",
      "C": "Cellular location services use satellite signals for location tracking",
      "D": "Cellular location services do not use network data"
    },
    "explanations": {
      "A": "GPS generally provides more precise positioning when strong satellite signals are available, so greater precision is not the main cellular advantage.",
      "B": "Cellular positioning can use nearby network infrastructure and may continue to provide location information where satellite visibility is poor, such as inside buildings.",
      "C": "Satellite signals are associated with GPS. Cellular location services rely on cellular network information rather than being defined by satellite tracking.",
      "D": "Cellular location methods depend on network infrastructure and may use network data or signaling, so this statement is inaccurate."
    },
    "tip": "GPS works best with a clear view of satellites; cellular positioning can still help when buildings or other obstacles block satellite signals."
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 1,
    "question": "A phone's battery drains quickly and the phone is noticeably warm even when not in heavy use. What is the most likely initial troubleshooting step?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Adjust the device's display timeout settings",
      "B": "Calibrate the battery by fully discharging and recharging",
      "C": "Inspect the phone's charging port for physical damage",
      "D": "Check for excessive background application activity"
    },
    "explanations": {
      "A": "A shorter timeout can save some power, but unusual warmth and rapid drain suggest a process may be consuming resources continuously.",
      "B": "Modern lithium batteries do not require routine full-discharge calibration, and this does not identify the source of abnormal heat.",
      "C": "Port damage mainly affects charging reliability rather than unexplained battery drain while the phone is in use.",
      "D": "Apps running heavily in the background can keep the CPU, network, and other components active, producing both heat and rapid battery drain."
    },
    "tip": "Warm phone plus fast battery drain - check battery usage and background apps first. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 3"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 2,
    "question": "If a mobile device battery shows slight swelling, it is safe to keep using it and puncture it to release the gas.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A swollen lithium battery is a safety hazard. Continuing to use it or puncturing it can cause leakage, fire, or thermal runaway.",
      "B": "A swollen battery should not be punctured or kept in service; the device should be powered down and the battery handled or replaced safely."
    },
    "tip": "Swollen battery = stop using it; never puncture, bend, squeeze, or charge it. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 4"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 3,
    "question": "Backing up a mobile device's data is always recommended before replacing a broken screen, even if the device appears to function normally.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Screen repair involves opening and handling the device, so backing up protects the user's data if something goes wrong during service.",
      "B": "Skipping a backup creates unnecessary risk because a repair can expose the device to accidental damage or data loss."
    },
    "tip": "Before mobile hardware repair, protect the user's data with a backup whenever possible. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 5"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 4,
    "question": "What is the first step when troubleshooting a mobile device that is not charging properly?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Remove the battery and reinsert it before charging",
      "B": "Check the charging cable and adapter for physical damage",
      "C": "Verify the wall outlet is providing power",
      "D": "Consult the device's user manual for charging tips"
    },
    "explanations": {
      "A": "Many modern devices have non-removable batteries, and battery removal is not the simplest first check.",
      "B": "Damaged cables, bent connectors, and failing adapters are common charging causes and can be checked quickly before opening the device.",
      "C": "The outlet is worth checking, but the source identifies the cable and adapter inspection as the first step.",
      "D": "Documentation may help later, but basic physical inspection should come first."
    },
    "tip": "Charging problem - start with the cable and adapter before blaming the phone. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 6"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 5,
    "question": "Which tool is best suited to check for power delivery issues when a mobile device is not charging properly?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Voltage tester",
      "B": "Diagnostic software",
      "C": "Cable continuity tester",
      "D": "USB multimeter"
    },
    "explanations": {
      "A": "A general voltage tester is not as convenient for measuring the USB voltage/current actually being delivered to the device.",
      "B": "Software cannot directly measure electrical output from a charger or USB cable.",
      "C": "Continuity can identify a broken conductor but does not show the voltage and current delivered during charging.",
      "D": "A USB multimeter can measure charging voltage and current, helping isolate weak adapters, cables, or abnormal power draw."
    },
    "tip": "A USB multimeter shows what power is actually flowing through the charging connection. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 7"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 6,
    "question": "Regularly fully discharging a modern mobile battery before recharging it to 100% helps preserve battery lifespan.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Routine deep discharges increase cycle stress on modern lithium-ion batteries rather than preserving them.",
      "B": "Modern lithium batteries generally benefit from avoiding repeated full discharges; partial charging is normally easier on the battery."
    },
    "tip": "Modern lithium batteries do not need the old 'drain to zero' routine. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 8"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 7,
    "question": "A mobile device frequently loses Wi-Fi or cannot connect to networks. What is the best first troubleshooting step?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Remove and reinsert the SIM card",
      "B": "Perform a hard reboot of the device",
      "C": "Forget all saved Wi-Fi networks and reconnect",
      "D": "Restart the device's Wi-Fi adapter to reset the connection"
    },
    "explanations": {
      "A": "The SIM primarily supports cellular service and normally has no role in Wi-Fi connectivity.",
      "B": "A forced restart is more disruptive than resetting the affected wireless interface.",
      "C": "This can help with a bad saved profile, but it is broader than the source-selected first step.",
      "D": "Toggling Wi-Fi off and back on quickly resets the wireless interface and can clear a temporary connection fault."
    },
    "tip": "Troubleshoot the affected radio first - toggle Wi-Fi before using broader resets. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 9"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 8,
    "question": "If a mobile device intermittently loses Wi-Fi, which action will have no effect on improving Wi-Fi stability?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Move closer to the Wi-Fi router or access point",
      "B": "Restart the Wi-Fi adapter on the device",
      "C": "Check for and reduce Wi-Fi interference from other devices",
      "D": "Forget and reconnect to the Wi-Fi network",
      "E": "Disable mobile data to prioritize Wi-Fi connection"
    },
    "explanations": {
      "A": "A stronger signal can improve connection stability.",
      "B": "Resetting the Wi-Fi interface can clear temporary connection problems.",
      "C": "Reducing radio interference can improve wireless reliability.",
      "D": "Recreating the saved Wi-Fi profile can fix configuration or authentication problems.",
      "E": "Turning off cellular data does not strengthen or stabilize the Wi-Fi radio connection itself."
    },
    "tip": "Cellular data and Wi-Fi are separate radios; disabling one does not repair the other's signal. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 10"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 9,
    "question": "A phone has no cellular signal and cannot make or receive calls or texts. What is the most common initial step?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Perform a network settings reset",
      "B": "Clear cached data related to cellular services",
      "C": "Toggle airplane mode on and off to reestablish signal",
      "D": "Verify the cellular data plan is active and not exhausted"
    },
    "explanations": {
      "A": "A full network reset is more disruptive and is better reserved for later troubleshooting.",
      "B": "Cache clearing is not the simplest initial way to force cellular registration.",
      "C": "Airplane mode temporarily disables the radios; turning it back off forces the phone to reconnect to the cellular network.",
      "D": "Plan status matters for data service, but no calls, texts, or bars points first to cellular registration."
    },
    "tip": "No bars? Airplane mode on/off is a quick way to force the cellular radio to reconnect. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 11"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 10,
    "question": "A user spills water on a smartphone. What actions should be taken to minimize damage? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Leave the device powered off until it dries",
      "B": "Remove the battery if possible after disconnecting power",
      "C": "Disconnect external accessories or cables",
      "D": "Remove the SIM card and memory card if accessible",
      "E": "Use a direct heat source such as a hairdryer"
    },
    "explanations": {
      "A": "Keeping power off reduces the chance that moisture will create electrical shorts.",
      "B": "Removing the battery, when safely possible, cuts electrical power while moisture is present.",
      "C": "Removing cables and accessories prevents additional power paths and makes drying safer.",
      "D": "Removing accessible cards protects removable components and opens areas that may help moisture escape.",
      "E": "Direct heat can damage adhesives, plastics, batteries, and internal components and can push moisture deeper."
    },
    "tip": "Liquid exposure - remove power and accessories, then let the device dry without direct heat. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 12"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 11,
    "question": "What are best practices for drying a smartphone exposed to liquid? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "F"
    ],
    "options": {
      "A": "Apply desiccant-based drying methods",
      "B": "Use an oven, microwave, or direct sunlight",
      "C": "Keep the device turned off for at least 24-48 hours before testing",
      "D": "Submerge the device in uncooked rice",
      "E": "Blow compressed air into ports or speakers",
      "F": "Place the device in a sealed bag with silica gel packets"
    },
    "explanations": {
      "A": "A proper desiccant can help draw moisture from the device without exposing it to damaging heat.",
      "B": "Direct or intense heat can damage the battery, display, adhesives, and electronics.",
      "C": "Keeping the device unpowered gives moisture time to evaporate and reduces short-circuit risk.",
      "D": "Rice is not a recommended controlled drying method and can introduce dust or debris into ports.",
      "E": "Compressed air can drive liquid deeper into the device instead of removing it.",
      "F": "Silica gel is a desiccant that can absorb moisture in a controlled enclosed environment."
    },
    "tip": "Dry electronics with time and desiccant, not ovens, hairdryers, rice, or compressed air. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 13"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 13,
    "question": "Which measures reduce the risk of digitizer issues? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Avoid dropping the device or applying excessive pressure to the screen",
      "B": "Use a high-quality case and screen guard for impact resistance",
      "C": "Keep the device away from moisture and extreme temperatures",
      "D": "Limit stylus use to prevent touchscreen wear",
      "E": "Use a thicker screen protector to shield against extreme impacts"
    },
    "explanations": {
      "A": "Impact and pressure can crack or damage the digitizer layer and its connections.",
      "B": "Physical protection can reduce shock and screen damage from drops.",
      "C": "Liquid and extreme heat/cold can damage touch electronics and screen layers.",
      "D": "Normal compatible stylus use is not a primary cause of digitizer failure.",
      "E": "An overly thick protector can interfere with touch sensitivity and is not a substitute for proper impact protection."
    },
    "tip": "Protect the digitizer from its biggest enemies - impact, pressure, moisture, and extreme temperature. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 15"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 14,
    "question": "After dropping a tablet, part of the touchscreen no longer registers input. What is the first troubleshooting step?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Check if the device is overheating",
      "B": "Apply light localized pressure to the affected area",
      "C": "Power cycle the device",
      "D": "Remove the screen protector and test touch response"
    },
    "explanations": {
      "A": "Overheating can cause general instability but does not specifically explain a dead touch area immediately after a drop.",
      "B": "Pressing the damaged screen can worsen cracks or digitizer damage.",
      "C": "Restarting is a safe first step that rules out a temporary software or touch-controller problem before assuming physical damage.",
      "D": "A protector can affect touch, but the problem began after a drop and the source selects a power cycle first."
    },
    "tip": "Even after physical impact, rule out a temporary controller glitch with a safe restart before deeper repair. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 16"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 15,
    "question": "Which actions can help troubleshoot a non-responsive touchscreen?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Perform a soft reset",
      "B": "Remove the screen protector and clean the touchscreen",
      "C": "Boot into safe mode to check for app conflicts",
      "D": "Perform a factory reset after backing up data",
      "E": "All of the above"
    },
    "explanations": {
      "A": "Restarting can clear temporary touch-controller or OS problems, but it is not the only useful step.",
      "B": "Dirt, moisture, or a poor protector can interfere with touch detection.",
      "C": "Safe mode can determine whether third-party software is interfering with touch behavior.",
      "D": "A factory reset can eliminate persistent software causes, but it should be a later step.",
      "E": "Each listed action can be useful at an appropriate stage of touchscreen troubleshooting."
    },
    "tip": "Touchscreen troubleshooting progresses from restart and cleaning to safe mode, then factory reset only if needed. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 17"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 16,
    "question": "A USB-C port appears damaged because charging works only when the cable is held at an angle. What is the most appropriate next step?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Replace the charging port",
      "B": "Test with a known working cable",
      "C": "Retry after removing the device case",
      "D": "Switch to a wireless charger"
    },
    "explanations": {
      "A": "Replacement may eventually be required, but first confirm that the cable itself is not the fault.",
      "B": "A known-good cable isolates whether the intermittent connection comes from the cable connector or the device's USB-C port.",
      "C": "A case can obstruct a connector, but the source identifies a known-good cable test as the next diagnostic step.",
      "D": "Wireless charging bypasses the port but does not diagnose whether the USB-C port is actually damaged."
    },
    "tip": "Before replacing a port, eliminate the cable as the variable with a known-good cable. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 18"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 17,
    "question": "Which symptoms may indicate a mobile device has been compromised by malicious software? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "D"
    ],
    "options": {
      "A": "Frequent pop-ups or intrusive ads",
      "B": "Unauthorized activity such as messages, calls, or data usage",
      "C": "Device failing to recognize a SIM card",
      "D": "Unusual slowdown, crashes, freezing, or battery drain",
      "E": "Intermittent loss of cellular signal"
    },
    "explanations": {
      "A": "Unexpected advertising can indicate adware or another malicious application running on the device.",
      "B": "Activity the user did not initiate can indicate that malicious software or an attacker is controlling device functions.",
      "C": "SIM recognition problems are more commonly hardware, contact, carrier, or configuration issues.",
      "D": "Malware can consume CPU, memory, network, and battery resources, producing abnormal performance problems.",
      "E": "Signal loss is usually related to coverage, radio, SIM, or carrier issues rather than being a strong malware indicator."
    },
    "tip": "Malware clues often combine unwanted activity with pop-ups and unexplained resource usage. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 19"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 18,
    "question": "Which approach works best for eliminating persistent malware from a mobile device?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Uninstall suspicious apps",
      "B": "Perform a hard reset of the device",
      "C": "Troubleshoot in safe mode",
      "D": "Run a reputable anti-malware scan",
      "E": "Perform a factory reset"
    },
    "explanations": {
      "A": "Removing a suspicious app can help, but persistent malware may leave components or settings behind.",
      "B": "A forced restart does not erase malware stored on the device.",
      "C": "Safe mode can help identify problematic apps, but it does not guarantee complete removal.",
      "D": "A scan can remove many threats, but persistent infections may survive or return.",
      "E": "A factory reset removes installed applications and user data, making it the strongest listed method for eliminating persistent malware when less destructive methods fail."
    },
    "tip": "Persistent malware may require a factory reset - back up clean data first and avoid restoring the malicious app. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 20"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 19,
    "question": "Installing mobile apps from official sources such as Apple's App Store or Google Play significantly reduces malware risk.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Official stores apply review, signing, and security controls that reduce exposure to malicious or tampered applications.",
      "B": "Although no store can guarantee zero risk, trusted official stores generally reduce risk compared with unverified sources."
    },
    "tip": "Trusted app stores reduce risk because apps pass platform security checks before distribution. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 21"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 20,
    "question": "Which answer refers to a common fix for cursor drift?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Modify touch sensitivity settings",
      "B": "Restart the touchscreen driver service",
      "C": "Test the device with a stylus",
      "D": "Calibrate the touchscreen"
    },
    "explanations": {
      "A": "Sensitivity changes how easily touch is detected but does not correct positional drift.",
      "B": "Restarting software may help temporary failures but does not correct a consistently misaligned pointer.",
      "C": "A stylus can help diagnose input behavior but is not itself the fix.",
      "D": "Calibration realigns the touch coordinates with the displayed screen positions, correcting drift or inaccurate cursor placement."
    },
    "tip": "Cursor or touch point does not line up with your finger - recalibrate the touchscreen. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 22"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 21,
    "question": "A user cannot install a new app. Which option should be considered first?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Verify app store login status",
      "B": "Clear the app store cache and data",
      "C": "Update the OS to the latest version",
      "D": "Check available storage space"
    },
    "explanations": {
      "A": "Account status can block downloads, but insufficient storage is a very common and immediate installation constraint.",
      "B": "Cache clearing may help a malfunctioning store app, but first verify the device has room for the installation.",
      "C": "OS compatibility can matter, but the source-selected first check is available storage.",
      "D": "An app cannot install if the device lacks enough free space for the package, temporary installation files, and app data."
    },
    "tip": "App will not install? Check free storage before using more disruptive fixes. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 23"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 22,
    "question": "While sideloading an Android app, installation is blocked by security settings. What must be changed?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Grant administrator privileges to the app",
      "B": "Disable app verification in Google Play settings",
      "C": "Enable 'Install unknown apps' or 'Unknown sources'",
      "D": "Turn on developer options"
    },
    "explanations": {
      "A": "Administrator privileges are not required simply to permit sideloading.",
      "B": "Play verification is separate from granting a source permission to install packages.",
      "C": "Android blocks packages from unapproved sources unless the relevant unknown-app installation permission is enabled.",
      "D": "Developer options provide advanced settings but are not the specific permission required for normal APK sideloading."
    },
    "tip": "Android sideloading requires permission for the source to install unknown apps. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 24"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 23,
    "question": "An MDM administrator receives many reports that users cannot update existing apps or download new ones. What is the most likely reason?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "App store outage",
      "B": "Pending security updates",
      "C": "Compatibility issues",
      "D": "Policy enforcement"
    },
    "explanations": {
      "A": "An outage is possible, but the organization-wide managed-device context points more directly to centrally enforced restrictions.",
      "B": "Pending updates can affect compatibility but do not usually block all app updates and downloads across managed users.",
      "C": "Compatibility usually affects specific apps or device models, not a broad managed population at once.",
      "D": "MDM policies can centrally restrict app installation and updates, producing the same behavior across many enrolled devices."
    },
    "tip": "When many managed devices fail the same way, check MDM policy before troubleshooting each phone separately. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 25"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 24,
    "question": "A stylus has stopped responding. What is the first practical troubleshooting step?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Reboot the device to reset touch inputs",
      "B": "Clean the screen protector with a soft cloth",
      "C": "Reset the device's Wi-Fi connection",
      "D": "Verify the stylus battery status"
    },
    "explanations": {
      "A": "A reboot may help, but an active stylus can simply have a depleted battery.",
      "B": "Screen cleanliness is less likely when the stylus itself has stopped responding.",
      "C": "Wi-Fi is unrelated to normal stylus input.",
      "D": "Many active styluses require battery power, so checking charge is a quick and practical first step."
    },
    "tip": "Active stylus not working? Check its battery before changing tablet settings. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 26"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 25,
    "question": "A stylus works intermittently while finger touch works normally. What should be considered first?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Attempt to reconnect the stylus to the device",
      "B": "Recalibrate the touchscreen",
      "C": "Inspect the stylus tip for damage or wear",
      "D": "Test input after removing the screen protector"
    },
    "explanations": {
      "A": "Reconnection can help wireless styluses, but intermittent physical contact points first to the tip.",
      "B": "Normal finger input suggests the touchscreen itself is functioning correctly.",
      "C": "A worn, loose, or damaged nib can make contact inconsistent even when the touchscreen works normally.",
      "D": "A protector can affect input, but normal finger touch makes stylus-tip condition the more direct first check."
    },
    "tip": "Finger works but stylus cuts out - inspect the stylus nib/tip before blaming the touchscreen. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 27"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 26,
    "question": "A Bluetooth stylus does not appear in the tablet's Bluetooth list. What mode should the user confirm the stylus is in?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Input mode",
      "B": "Discovery mode",
      "C": "Sync mode",
      "D": "Pairing mode"
    },
    "explanations": {
      "A": "Input mode describes use, not the discoverable Bluetooth state needed to establish a new connection.",
      "B": "Bluetooth devices become discoverable during pairing, but the source uses the more specific stylus state 'pairing mode.'",
      "C": "Sync is not the standard mode used to make a new Bluetooth stylus available for connection.",
      "D": "The stylus must enter pairing mode so the tablet can discover it and establish the Bluetooth relationship."
    },
    "tip": "New Bluetooth accessory not listed? Put the accessory itself into pairing mode. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 28"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 27,
    "question": "What factors can contribute to unexpected performance drops on a mobile device? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Outdated operating system software",
      "B": "Too many background applications",
      "C": "Enabled battery saver mode",
      "D": "Malware consuming system resources",
      "E": "Excessive app data and cache buildup"
    },
    "explanations": {
      "A": "Older software may contain unresolved performance bugs or lack optimizations.",
      "B": "Background apps compete for CPU time, memory, network, and battery resources.",
      "C": "Battery saver may intentionally limit some performance, but it is not one of the source-selected unexpected degradation factors.",
      "D": "Malware can continuously consume processing, memory, network, and battery resources.",
      "E": "Large caches and accumulated app data can consume storage and contribute to slower application behavior."
    },
    "tip": "Mobile slowdowns often come from software age, background load, malware, or excessive stored app data. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 29"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 28,
    "question": "A phone has become increasingly slow, apps take a long time to open, and they frequently freeze. Which steps should be tried first? (Select 2 answers)",
    "answers": [
      "B",
      "D"
    ],
    "options": {
      "A": "Review battery usage by apps",
      "B": "Clear cached data",
      "C": "Run a benchmark test",
      "D": "Uninstall unused apps",
      "E": "Enable power-saving mode"
    },
    "explanations": {
      "A": "Battery statistics may identify heavy apps, but the source-selected first performance cleanup steps are cache and unused-app removal.",
      "B": "Excessive cached data can consume storage and contribute to sluggish application behavior.",
      "C": "A benchmark measures performance but does not directly correct the user's problem.",
      "D": "Removing unused apps frees storage and can reduce background services and resource competition.",
      "E": "Power-saving mode can reduce CPU performance and may make a slow device feel even less responsive."
    },
    "tip": "For gradual slowdown, free resources first - clear unnecessary cache and remove unused apps. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 30"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 29,
    "question": "A mobile device has a sudden major performance drop, unusual pop-ups, and battery drain. What is the most likely cause?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Low battery health",
      "B": "Excessive push notifications",
      "C": "Disabled pop-up blocker",
      "D": "Malware infection"
    },
    "explanations": {
      "A": "Battery aging can shorten runtime but does not normally create unusual pop-ups.",
      "B": "Notifications can be annoying and consume some resources, but they do not best explain the combined symptoms.",
      "C": "A browser setting might allow web pop-ups but does not explain system-wide performance loss and battery drain.",
      "D": "Malware can generate intrusive pop-ups while consuming CPU, network, and battery resources, matching all three symptoms."
    },
    "tip": "Sudden slowdown plus pop-ups plus battery drain is a strong malware warning pattern. CompTIA A+ 220-1201 - Mobile Devices Troubleshooting Page 31"
  },
  {
    "topic": "Mobile Devices Troubleshooting",
    "number": 30,
    "question": "When applications take unusually long to launch, which factors are typically the most immediate and direct causes? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Device overheating from prolonged use",
      "B": "Heavy load on the CPU",
      "C": "Real-time encryption and decryption of data",
      "D": "Device storage nearing full capacity",
      "E": "Insufficient memory"
    },
    "explanations": {
      "A": "Heat can cause throttling, but the source identifies processor workload and memory pressure as the most immediate direct causes.",
      "B": "When the processor is already busy, new apps wait longer for CPU time and initialization work takes longer.",
      "C": "Encryption adds overhead in some cases, but it is not one of the two source-selected immediate causes.",
      "D": "Low storage can contribute to poor performance, but the source selects CPU load and insufficient memory for this question.",
      "E": "When RAM is scarce, the OS must reclaim memory or reload data more often, delaying application launches."
    },
    "tip": "Slow app launch often means the device is short on two core resources - CPU time and RAM."
  },
  {
    "topic": "Motherboard",
    "number": 1,
    "question": "What is the most common motherboard form factor used in desktop PCs?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "ATX",
      "B": "mATX",
      "C": "ITX",
      "D": "mITX",
      "E": "LPX/NLX",
      "F": "BTX"
    },
    "explanations": {
      "A": "ATX is the standard full-size desktop motherboard form factor and is widely supported by desktop cases and power supplies.",
      "B": "microATX is a smaller desktop form factor, but the source identifies ATX as the most common overall.",
      "C": "ITX is a compact motherboard family intended for smaller systems.",
      "D": "Mini-ITX is designed for small-form-factor computers rather than being the standard full-size desktop format.",
      "E": "LPX and NLX are older low-profile motherboard designs and are not common in modern desktops.",
      "F": "BTX was an alternative motherboard layout but did not replace ATX as the mainstream desktop standard. G. E-ATX - INCORRECT Extended ATX is larger and generally used for high-end systems that need additional expansion space."
    },
    "tip": "ATX is the standard desktop baseline; microATX is smaller and E-ATX is larger. CompTIA A+ 220-1201 - Motherboard Quiz Page 3"
  },
  {
    "topic": "Motherboard",
    "number": 2,
    "question": "Which motherboard form factor would be the optimal choice for a compact or budget-friendly desktop build?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "E-ATX",
      "B": "microATX",
      "C": "NLX"
    },
    "explanations": {
      "A": "E-ATX is large and typically used in high-end builds with extra expansion requirements.",
      "B": "microATX reduces board size and expansion slots while retaining common desktop features, making it practical for compact and lower-cost builds.",
      "C": "NLX is an older low-profile form factor and is not a normal choice for a modern desktop build."
    },
    "tip": "microATX = smaller and usually less expensive while still supporting standard desktop components. CompTIA A+ 220-1201 - Motherboard Quiz Page 4"
  },
  {
    "topic": "Motherboard",
    "number": 3,
    "question": "Which of the answers listed below refers to a low-power consumption, small form factor motherboard type used in industrial and embedded PC applications?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "ITX",
      "B": "ATX",
      "C": "LPX"
    },
    "explanations": {
      "A": "ITX was designed around compact, low-power systems and is associated with embedded and industrial applications.",
      "B": "ATX is a larger general-purpose desktop form factor.",
      "C": "LPX is a legacy low-profile desktop form factor rather than the low-power embedded design identified by the source."
    },
    "tip": "ITX emphasizes small size and low power for embedded or specialized systems. CompTIA A+ 220-1201 - Motherboard Quiz Page 5"
  },
  {
    "topic": "Motherboard",
    "number": 4,
    "question": "Which of the following motherboard form factors is the smallest?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "ITX",
      "B": "E-ATX",
      "C": "EE-ATX",
      "D": "microATX"
    },
    "explanations": {
      "A": "Among the choices provided, ITX is the smallest form factor in the source quiz.",
      "B": "E-ATX is an extended, larger-than-ATX board.",
      "C": "EE-ATX is even larger and intended for systems requiring extensive expansion.",
      "D": "microATX is smaller than ATX but larger than the ITX choice in this quiz."
    },
    "tip": "ITX is the compact choice; E-ATX and EE-ATX move in the opposite direction toward larger boards. CompTIA A+ 220-1201 - Motherboard Quiz Page 6"
  },
  {
    "topic": "Motherboard",
    "number": 5,
    "question": "PCIe is a high-speed, serial expansion bus designed as a replacement for:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "VGA",
      "B": "PCI",
      "C": "IDE",
      "D": "ATA"
    },
    "explanations": {
      "A": "VGA is a display interface, not the expansion bus that PCIe replaced.",
      "B": "PCI Express succeeded the older parallel PCI expansion bus with a faster serial, lane-based design.",
      "C": "IDE is a storage interface rather than the general-purpose expansion bus replaced by PCIe.",
      "D": "ATA is a storage-interface family and is not the direct predecessor expansion bus to PCIe."
    },
    "tip": "PCIe means PCI Express - it replaced the older PCI expansion bus. CompTIA A+ 220-1201 - Motherboard Quiz Page 7"
  },
  {
    "topic": "Motherboard",
    "number": 6,
    "question": "In PCIe architecture, a lane is a full-duplex point-to-point serial path. PCIe labels such as x1, x4, x8, x16, and x32 indicate the number of lanes, and aggregate bandwidth increases with the lane count.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source accurately describes PCIe lanes as separate transmit and receive paths and explains that the x-number represents how many lanes the link provides.",
      "B": "False is incorrect because lane count is exactly what PCIe x1, x4, x8, x16, and similar labels indicate."
    },
    "tip": "In PCIe, the x-number is the lane count; more lanes provide more aggregate bandwidth at the same generation. CompTIA A+ 220-1201 - Motherboard Quiz Page 8"
  },
  {
    "topic": "Motherboard",
    "number": 7,
    "question": "Which of the answers listed below refers to the main power connector used in modern ATX power supplies?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "16-pin connector",
      "B": "20-pin connector",
      "C": "24-pin connector",
      "D": "28-pin connector"
    },
    "explanations": {
      "A": "A 16-pin connector is associated with newer high-power graphics-card power standards, not the main ATX motherboard connector.",
      "B": "20-pin ATX was used on older systems; modern ATX motherboards normally use 24 pins.",
      "C": "The 24-pin ATX connector supplies the motherboard with its primary power rails.",
      "D": "28-pin is not the standard main ATX motherboard power connector."
    },
    "tip": "Main motherboard power = 24-pin ATX; CPU power uses separate 12V connectors. CompTIA A+ 220-1201 - Motherboard Quiz Page 9"
  },
  {
    "topic": "Motherboard",
    "number": 8,
    "question": "Which of the following connectors provide(s) additional power to the CPU? (Select all that apply)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "4-pin 12V connector",
      "B": "8-pin PCIe connector",
      "C": "4+4-pin 12V connector",
      "D": "6-pin PCIe connector",
      "E": "8-pin 12V connector"
    },
    "explanations": {
      "A": "The 4-pin ATX12V connector supplies dedicated 12V power to the CPU voltage-regulation circuitry.",
      "B": "The 8-pin PCIe connector is intended for graphics-card power.",
      "C": "A 4+4 EPS-style CPU connector can be combined into an 8-pin CPU power connection or separated where supported.",
      "D": "The 6-pin PCIe connector provides auxiliary power to graphics cards, not the CPU.",
      "E": "An 8-pin EPS12V connector supplies additional 12V power for the processor."
    },
    "tip": "CPU power connectors are labeled 12V/EPS: 4-pin, 4+4-pin, or 8-pin - not PCIe GPU plugs. CompTIA A+ 220-1201 - Motherboard Quiz Page 10"
  },
  {
    "topic": "Motherboard",
    "number": 9,
    "question": "Which of the answers listed below refer to auxiliary connector types most commonly used for supplying additional power to graphics cards? (Select 2 answers)",
    "answers": [
      "B",
      "D"
    ],
    "options": {
      "A": "8-pin 12V connector",
      "B": "6-pin PCIe connector",
      "C": "4+4-pin 12V connector",
      "D": "8-pin PCIe connector",
      "E": "4-pin 12V connector"
    },
    "explanations": {
      "A": "The source distinguishes the CPU 12V connector from PCIe auxiliary graphics power.",
      "B": "A 6-pin PCIe power connector provides extra power to graphics cards that need more than the slot can supply.",
      "C": "The 4+4-pin 12V connector is intended for CPU power.",
      "D": "An 8-pin PCIe power connector supplies higher auxiliary power to compatible graphics cards.",
      "E": "The 4-pin 12V connector is a CPU power connector, not a graphics-card auxiliary connector."
    },
    "tip": "GPU auxiliary power = PCIe 6-pin or 8-pin; CPU auxiliary power = 12V/EPS connectors. CompTIA A+ 220-1201 - Motherboard Quiz Page 11"
  },
  {
    "topic": "Motherboard",
    "number": 10,
    "question": "Which motherboard connector features an L-shape design that prevents its improper insertion?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "SATA",
      "B": "M.2",
      "C": "eSATA",
      "D": "PCIe"
    },
    "explanations": {
      "A": "SATA data connectors use an L-shaped key so the plug aligns in only the correct orientation.",
      "B": "M.2 uses keyed notches on the card edge rather than an L-shaped cable connector.",
      "C": "eSATA is an external SATA interface with a different connector shape.",
      "D": "PCIe expansion slots use keyed slot geometry but not the L-shaped SATA connector design."
    },
    "tip": "SATA connectors have the easy-to-recognize L-shaped key. CompTIA A+ 220-1201 - Motherboard Quiz Page 12"
  },
  {
    "topic": "Motherboard",
    "number": 11,
    "question": "Adding an eSATA device to a PC can be done either through an integrated I/O eSATA port, an eSATA bracket, or by attaching it directly to a dedicated slot on the motherboard.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The final part is incorrect: an external eSATA device does not plug directly into a dedicated motherboard expansion slot as stated.",
      "B": "The source marks this statement false because the description incorrectly includes direct attachment of the eSATA device to a motherboard slot."
    },
    "tip": "eSATA is an external storage connection; use an eSATA port or appropriate bracket/interface, not a normal motherboard expansion slot. CompTIA A+ 220-1201 - Motherboard Quiz Page 13"
  },
  {
    "topic": "Motherboard",
    "number": 12,
    "question": "Inside a PC case, connector cables from a power switch, reset switch, or LEDs on the front/top panel of the case attach to their corresponding slots located on the main power supply unit.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Case switches and LEDs connect to motherboard front-panel headers, not directly to the power supply unit.",
      "B": "The statement is false because the motherboard contains the front-panel header pins for power switch, reset switch, power LED, and drive activity LED connections."
    },
    "tip": "Case buttons and LEDs go to the motherboard front-panel header, not the PSU. CompTIA A+ 220-1201 - Motherboard Quiz Page 14"
  },
  {
    "topic": "Motherboard",
    "number": 13,
    "question": "The installation of USB ports located on the front panel of a computer case requires plugging internal USB cable connectors into compatible groupings of metal pins (headers) on the motherboard.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Front-panel USB ports connect internally to motherboard USB headers using the case USB cable.",
      "B": "False is incorrect because motherboard USB headers are specifically provided for internal connections such as case-front USB ports."
    },
    "tip": "Front USB ports need an internal cable connected to the matching motherboard USB header. CompTIA A+ 220-1201 - Motherboard Quiz Page 15"
  },
  {
    "topic": "Motherboard",
    "number": 14,
    "question": "Which of the following slots/ports on the PC motherboard enable(s) the connection of an M.2 device? (Select all that apply)",
    "answers": [
      "A",
      "C",
      "F"
    ],
    "options": {
      "A": "B key slot",
      "B": "SATA port",
      "C": "M key slot",
      "D": "USB slot",
      "E": "PCIe slot",
      "F": "B+M key slot"
    },
    "explanations": {
      "A": "B-keyed M.2 sockets support compatible B-key or certain B+M-key M.2 devices.",
      "B": "A standard SATA cable port is not an M.2 card socket.",
      "C": "M-keyed M.2 sockets are commonly used for high-performance PCIe/NVMe SSDs.",
      "D": "USB is not the motherboard socket used to install an M.2 card.",
      "E": "Although some M.2 devices use PCIe signaling, a standard PCIe expansion slot is not an M.2 socket without an adapter.",
      "F": "The source identifies B+M keying as an M.2-compatible slot/key arrangement."
    },
    "tip": "M.2 compatibility is controlled by keying - B, M, and B+M notch arrangements matter. CompTIA A+ 220-1201 - Motherboard Quiz Page 16"
  },
  {
    "topic": "Motherboard",
    "number": 15,
    "question": "Motherboards used in laptops and mobile devices can be characterized by their proprietary design, which means that replacing a motherboard in such devices typically requires a part designed specifically for the make and model of the device.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Laptop and mobile-device boards are commonly custom-shaped around the chassis, ports, cooling, and components, so replacements are often model-specific.",
      "B": "False is incorrect because mobile motherboards generally do not follow interchangeable desktop form-factor standards such as ATX."
    },
    "tip": "Desktop boards use standard form factors; laptop boards are usually model-specific. CompTIA A+ 220-1201 - Motherboard Quiz Page 17"
  },
  {
    "topic": "Motherboard",
    "number": 16,
    "question": "Which of the answers listed below refer to the main CPU manufacturers for personal computers? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "ASUS",
      "B": "Nvidia",
      "C": "AMD",
      "D": "EVGA",
      "E": "Intel"
    },
    "explanations": {
      "A": "ASUS manufactures motherboards and other PC hardware but is not one of the two CPU manufacturers selected by the source.",
      "B": "Nvidia is best known for GPUs and related computing hardware rather than being one of the source quiz answers for mainstream PC CPUs.",
      "C": "AMD produces x86 processors used in desktop and laptop personal computers.",
      "D": "EVGA is associated with graphics cards and PC components, not mainstream PC CPU manufacturing.",
      "E": "Intel produces x86 processors widely used in personal computers."
    },
    "tip": "For mainstream PC CPUs in this quiz, remember AMD and Intel. CompTIA A+ 220-1201 - Motherboard Quiz Page 18"
  },
  {
    "topic": "Motherboard",
    "number": 17,
    "question": "High-end PC motherboards typically feature microprocessor sockets that are compatible with CPUs from different manufacturers.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "CPU sockets and chipsets are designed for specific processor families and manufacturers; one socket does not normally accept competing manufacturers CPUs.",
      "B": "The statement is false because motherboard socket and chipset compatibility restrict which CPU families can be installed."
    },
    "tip": "Always match the CPU to the motherboard socket and chipset; processor brands are not interchangeable. CompTIA A+ 220-1201 - Motherboard Quiz Page 19"
  },
  {
    "topic": "Motherboard",
    "number": 18,
    "question": "Which of the following answers refer to the characteristic features of a dedicated server motherboard? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "D"
    ],
    "options": {
      "A": "Supports ECC RAM",
      "B": "Designed for tower case installation",
      "C": "Supports multiple CPUs (multi-socket motherboard)",
      "D": "Designed for limited space (rack-mount / blade)",
      "E": "Typically features a single CPU socket",
      "F": "Supports non-ECC RAM"
    },
    "explanations": {
      "A": "Server motherboards commonly support ECC memory to improve data integrity by detecting and correcting supported memory errors.",
      "B": "Servers can use towers, but the source contrasts dedicated server boards with typical desktop tower designs.",
      "C": "Many dedicated server boards support multiple processor sockets for higher compute capacity.",
      "D": "Server motherboards may be designed around dense rack or blade chassis where space and airflow are tightly controlled.",
      "E": "The source identifies multi-socket support as a server characteristic.",
      "F": "The source emphasizes ECC rather than ordinary non-ECC memory as a server-board characteristic."
    },
    "tip": "Server motherboard = ECC support, possible multiple CPU sockets, and rack/blade-oriented designs. CompTIA A+ 220-1201 - Motherboard Quiz Page 20"
  },
  {
    "topic": "Motherboard",
    "number": 19,
    "question": "Which of the answers listed below can be used to describe the characteristics of a typical desktop motherboard? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "E"
    ],
    "options": {
      "A": "Supports non-ECC RAM",
      "B": "Typically features a single CPU socket",
      "C": "Designed for limited space (rack-mount / blade)",
      "D": "Supports multiple CPUs (multi-socket motherboard)",
      "E": "Designed for tower case installation",
      "F": "Supports ECC"
    },
    "explanations": {
      "A": "Typical consumer desktop motherboards commonly use standard non-ECC memory.",
      "B": "Most desktop PCs use one processor socket.",
      "C": "Rack and blade constraints are characteristic of dedicated server hardware.",
      "D": "Multiple CPU sockets are uncommon on normal consumer desktop boards.",
      "E": "Desktop motherboards such as ATX and microATX are commonly installed in tower-style cases.",
      "F": "ECC support is more strongly associated with workstation/server platforms in the source comparison."
    },
    "tip": "Typical desktop board = tower case, one CPU socket, and non-ECC RAM. CompTIA A+ 220-1201 - Motherboard Quiz Page 21"
  },
  {
    "topic": "Motherboard",
    "number": 20,
    "question": "Which of the following answers refer to the characteristic features of TPM? (Select 3 answers)",
    "answers": [
      "C",
      "E",
      "F"
    ],
    "options": {
      "A": "Supports multiple devices, users, and systems across a network, not tied to a single device",
      "B": "Can be a dedicated network-attached appliance, a PCIe card, or a USB device",
      "C": "Typically embedded directly into consumer devices (e.g., motherboards in PCs and laptops)",
      "D": "Designed for centralized cryptographic key management, supporting high volumes of cryptographic operations",
      "E": "Provides security that is specifically tied to a single device",
      "F": "Offers basic cryptographic functions, such as key storage and platform integrity support"
    },
    "explanations": {
      "A": "That describes a centralized security appliance such as an HSM more closely than a TPM.",
      "B": "Those are possible HSM deployment forms, not the normal platform-bound TPM model.",
      "C": "A TPM is commonly integrated into or attached to a specific computer platform.",
      "D": "Centralized high-volume cryptography is characteristic of an HSM, while TPM focuses on one platform.",
      "E": "TPM protects cryptographic material and platform measurements for the individual computer it belongs to.",
      "F": "TPM can securely store keys and support measured boot/platform-integrity functions."
    },
    "tip": "TPM is device-bound security: protected keys plus platform-integrity functions on one computer."
  },
  {
    "topic": "Multifunction Devices",
    "number": 1,
    "question": "Which of the following answers highlight key features that differentiate PCL from PostScript? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "F"
    ],
    "options": {
      "A": "Slower printing performance compared to PostScript due to complex processing",
      "B": "Generally more efficient for high-volume, everyday printing tasks than PostScript",
      "C": "Better suited for professional design, desktop publishing, and graphic arts than PostScript",
      "D": "Less suited for professional graphics or highly detailed printing tasks than PostScript",
      "E": "More resource-intensive than PostScript (requires more printer memory and processing power)",
      "F": "Less demanding on printer memory and processing power than PostScript"
    },
    "explanations": {
      "A": "The source associates slower, more complex processing with PostScript, not PCL.",
      "B": "PCL is optimized for fast, practical office printing and is generally efficient for routine high-volume jobs.",
      "C": "Professional graphics and desktop publishing are strengths associated with PostScript in the source.",
      "D": "PCL is strong for everyday office output but is less focused on precise, complex graphics than PostScript.",
      "E": "The source identifies PostScript as the more resource-intensive page-description language.",
      "F": "PCL generally requires fewer printer resources than PostScript for typical office printing."
    },
    "tip": "PCL favors fast everyday office printing; PostScript favors precise, complex graphics. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 3"
  },
  {
    "topic": "Multifunction Devices",
    "number": 2,
    "question": "Which of the answers listed below accurately describe PostScript? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "F"
    ],
    "options": {
      "A": "Less suited for professional graphics or highly detailed printing tasks than PCL",
      "B": "Slower printing performance compared to PCL due to complex processing",
      "C": "Better suited for professional design, desktop publishing, and graphic arts than PCL",
      "D": "Generally more efficient for high-volume, everyday printing tasks than PCL",
      "E": "Less demanding on printer memory and processing power than PCL",
      "F": "More resource-intensive than PCL (requires more printer memory and processing power)"
    },
    "explanations": {
      "A": "The source says the opposite: PostScript is better suited for professional graphics and detailed output.",
      "B": "PostScript can require more processing because it describes pages and graphics in greater detail.",
      "C": "PostScript is designed for device-independent, high-quality page and graphics rendering, making it strong for publishing and design.",
      "D": "The source gives this advantage to PCL rather than PostScript.",
      "E": "PostScript is typically more resource-intensive, not less.",
      "F": "Complex PostScript page processing can require more printer memory and processing capability."
    },
    "tip": "PostScript is graphics-focused and precise, but it normally needs more processing than PCL. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 4"
  },
  {
    "topic": "Multifunction Devices",
    "number": 3,
    "question": "Which of the following answers refers to software embedded within an MFD that provides basic instructions for its hardware to initialize and execute tasks?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Device driver",
      "B": "Middleware",
      "C": "Print spooler",
      "D": "Firmware"
    },
    "explanations": {
      "A": "A device driver runs on the host operating system and lets the OS communicate with the printer; it is not the embedded device software.",
      "B": "Middleware connects software components or services and is not the low-level embedded code that initializes MFD hardware.",
      "C": "A print spooler queues and manages print jobs on a computer or server rather than initializing the MFD hardware.",
      "D": "Firmware is embedded software stored on the device that controls initialization and low-level operation of the MFD hardware."
    },
    "tip": "Firmware lives inside the device; a driver lives on the computer that uses the device. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 5"
  },
  {
    "topic": "Multifunction Devices",
    "number": 4,
    "question": "Which of the options listed below would typically be used to set up a direct, wired connection between an MFD and a single computer host?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "PS/2",
      "B": "RJ45",
      "C": "USB",
      "D": "PCIe"
    },
    "explanations": {
      "A": "PS/2 is a legacy keyboard and mouse interface, not a printer/MFD connection.",
      "B": "RJ45 Ethernet is normally used to connect an MFD to a network rather than directly to one host for local use.",
      "C": "USB is the common direct wired connection for attaching an MFD to a single computer.",
      "D": "PCIe is an internal computer expansion interface and is not used as the normal external MFD cable connection."
    },
    "tip": "One PC directly to a printer/MFD usually means USB; network users usually connect through Ethernet or Wi-Fi. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 6"
  },
  {
    "topic": "Multifunction Devices",
    "number": 5,
    "question": "Which connectivity option would be the most suitable in a scenario where multiple users on a wired network need access to MFD functions?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Serial port",
      "B": "Ethernet",
      "C": "Parallel port",
      "D": "KVM switch"
    },
    "explanations": {
      "A": "A serial port is a legacy point-to-point interface and is not suitable for shared modern network access.",
      "B": "Ethernet connects the MFD directly to the wired LAN so multiple network users can access its services.",
      "C": "A parallel port is a legacy local printer interface intended for a direct host connection.",
      "D": "A KVM switch shares keyboard, video, and mouse access among computers; it does not provide printer networking."
    },
    "tip": "Ethernet gives an MFD its own wired network connection for access by multiple users. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 7"
  },
  {
    "topic": "Multifunction Devices",
    "number": 6,
    "question": "Which of the following answers refers to the most common wireless connectivity option for modern MFDs?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "4G/5G",
      "B": "IR",
      "C": "NFC",
      "D": "802.11x",
      "E": "RFID"
    },
    "explanations": {
      "A": "Cellular connectivity is not the normal local wireless connection used by office and home MFDs.",
      "B": "Infrared requires short-range line-of-sight communication and is uncommon for modern MFD networking.",
      "C": "NFC can assist with short-range pairing or tap-to-print functions but is not the primary wireless network connection.",
      "D": "The source uses 802.11x to refer to Wi-Fi-family wireless networking, the common wireless connectivity option for modern MFDs.",
      "E": "RFID is used for identification and tracking rather than normal printer network connectivity."
    },
    "tip": "802.11 refers to Wi-Fi networking; NFC and RFID are short-range technologies with different purposes. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 8"
  },
  {
    "topic": "Multifunction Devices",
    "number": 7,
    "question": "Which of the answers listed below does not describe a disadvantage related to a printer share?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Each client computer needs to install the correct printer drivers for the shared printer",
      "B": "Only available when the host computer is turned on and connected to the network",
      "C": "Can become a bottleneck, especially with many users or large print jobs",
      "D": "Typically involves a higher cost and setup complexity",
      "E": "Offers limited control over user access, print quotas, and monitoring",
      "F": "If the host computer crashes or has issues, the printer becomes unavailable to everyone"
    },
    "explanations": {
      "A": "Driver requirements can create deployment and compatibility work for client computers.",
      "B": "A host-based printer share depends on that computer remaining powered on and reachable.",
      "C": "The sharing computer can become a performance bottleneck when it must handle many jobs.",
      "D": "A basic printer share normally uses an existing computer and is simpler and cheaper than deploying a dedicated print server, so this is not a typical disadvantage.",
      "E": "Simple host-based sharing generally provides less centralized management than a dedicated print-server solution.",
      "F": "Because the host provides the share, its failure can remove printer access for all clients."
    },
    "tip": "A printer share is inexpensive and simple, but it depends heavily on the host computer. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 9"
  },
  {
    "topic": "Multifunction Devices",
    "number": 8,
    "question": "Which of the following solutions would ensure the highest availability of the network printing service?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Printer share",
      "B": "Print server",
      "C": "Local network share",
      "D": "Public folder"
    },
    "explanations": {
      "A": "A printer share depends on a workstation host, creating a single point of failure.",
      "B": "A dedicated print server is designed to centrally manage network printing and provides a more reliable service than workstation-based sharing.",
      "C": "A generic network share is for files and does not provide the dedicated print-management role described.",
      "D": "A public folder is a file-sharing location, not a network print-service solution."
    },
    "tip": "Dedicated print servers provide centralized queues, management, and better availability than a PC-based printer share. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 10"
  },
  {
    "topic": "Multifunction Devices",
    "number": 9,
    "question": "A printer's capability to print on both sides of a paper sheet is referred to as duplex printing.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Duplex printing means producing output on both sides of a sheet, either automatically or through a manual duplex process.",
      "B": "False is incorrect because printing on both sides of paper is the definition of duplex printing."
    },
    "tip": "Duplex = two-sided printing; simplex = one-sided printing. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 11"
  },
  {
    "topic": "Multifunction Devices",
    "number": 10,
    "question": "Common printer configuration options include paper orientation settings that allow switching between Portrait mode (vertical layout) and Landscape mode (horizontal layout). Some printers may include additional orientation options, allowing the printout to be rotated by a specific degree. For most printers, the default paper orientation is Portrait mode.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Portrait is the standard vertical orientation and is commonly the default, while Landscape rotates the page for a horizontal layout.",
      "B": "False is incorrect because the orientation descriptions and default Portrait setting match the source statement."
    },
    "tip": "Portrait is tall/vertical; Landscape is wide/horizontal. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 12"
  },
  {
    "topic": "Multifunction Devices",
    "number": 11,
    "question": "Which printer setting allows configuration of a printout based on its paper size, type, or weight?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Media type settings",
      "B": "Print scaling settings",
      "C": "Tray settings",
      "D": "Paper orientation settings"
    },
    "explanations": {
      "A": "Media type can describe paper characteristics, but the source answer for selecting the source according to paper size, type, or weight is the tray configuration.",
      "B": "Scaling changes how document content is resized on the page; it does not select paper handling based on media characteristics.",
      "C": "Tray settings let the printer associate trays with specific paper sizes, types, or weights so jobs can use the appropriate media source.",
      "D": "Orientation controls vertical versus horizontal page layout, not paper source or media characteristics."
    },
    "tip": "Tray settings tell the printer what paper is loaded where; orientation controls how content sits on that paper. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 13"
  },
  {
    "topic": "Multifunction Devices",
    "number": 12,
    "question": "Which print quality setting typically offers the lowest resolution, fastest print speed, and most efficient toner or ink usage?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Standard",
      "B": "Default",
      "C": "Automatic",
      "D": "Draft"
    },
    "explanations": {
      "A": "Standard quality balances output quality and speed but does not minimize ink/toner use as aggressively as Draft.",
      "B": "Default simply means the preset configuration and does not specifically identify the lowest-quality economy mode.",
      "C": "Automatic lets the device choose settings and is not specifically the low-resolution, toner-saving mode.",
      "D": "Draft mode lowers print quality/resolution to increase speed and reduce ink or toner consumption."
    },
    "tip": "Draft mode trades image quality for speed and lower ink/toner use. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 14"
  },
  {
    "topic": "Multifunction Devices",
    "number": 13,
    "question": "Examples of security measures that can be implemented on a multifunction device or printer include:",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Login-based access via system software to ensure only authorized users can operate the device (user authentication)",
      "B": "Integrated ID card readers requiring users to authenticate using company-issued badges (badging)",
      "C": "Tracking of all printer activities, including user interactions, print jobs, and attempted access (audit logs)",
      "D": "PIN printing, requiring users to enter a numeric passcode before releasing print jobs (secured prints)",
      "E": "All of the above"
    },
    "explanations": {
      "A": "This is a valid security control, but the question includes several valid measures, so the complete answer is All of the above.",
      "B": "Badge authentication is a valid printer security control, but it is only one of the listed measures.",
      "C": "Audit logging is a valid security measure but does not include the other valid controls in the question.",
      "D": "Secure/PIN printing protects sensitive jobs from being released unattended, but it is only one valid measure.",
      "E": "User authentication, badge access, audit logs, and secured print release are all valid MFD/printer security measures listed by the source."
    },
    "tip": "Printer security can control who uses the device, record activity, and hold sensitive jobs until the user authenticates. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 15"
  },
  {
    "topic": "Multifunction Devices",
    "number": 14,
    "question": "Which option allows an MFD to send a scanned document via an SMTP server?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Email",
      "B": "SMB",
      "C": "Print from cloud",
      "D": "Fax"
    },
    "explanations": {
      "A": "SMTP is the standard protocol used to send email, so an MFD configured for scan-to-email sends scanned documents through an SMTP server.",
      "B": "SMB is primarily used for network file and folder sharing, not sending email messages.",
      "C": "Cloud printing sends print jobs to a printer; it does not describe sending scanned files through SMTP.",
      "D": "Fax sends documents through fax services or telephony-related systems rather than an SMTP email server."
    },
    "tip": "SMTP = sending email, so Scan to Email needs SMTP settings. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 16"
  },
  {
    "topic": "Multifunction Devices",
    "number": 15,
    "question": "Which network scan service enables scanned documents to be saved directly to shared folders on a local network?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "FTP",
      "B": "Local copy function",
      "C": "LDAP",
      "D": "SMB"
    },
    "explanations": {
      "A": "FTP can transfer files, but the source specifically identifies SMB for saving scans to shared network folders.",
      "B": "Local copy duplicates a document at the MFD and does not send a scan to a network share.",
      "C": "LDAP provides directory lookup and authentication services, not file storage in shared folders.",
      "D": "SMB provides Windows-style network file sharing and allows an MFD to save scanned files directly into shared folders."
    },
    "tip": "SMB = shared network folders; SMTP = email delivery. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 17"
  },
  {
    "topic": "Multifunction Devices",
    "number": 16,
    "question": "A user wants to scan a document from a multifunction printer and access it remotely from a personal online storage account. Which feature should be configured?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Web print service",
      "B": "Scan to network folder",
      "C": "Network file share",
      "D": "Cloud service"
    },
    "explanations": {
      "A": "A web print service focuses on submitting print jobs rather than storing scanned files in a personal online account.",
      "B": "A network folder is generally a local or organizational file share rather than a personal Internet-based storage account.",
      "C": "A network file share provides shared LAN storage, not the remote personal online storage described.",
      "D": "A cloud service integration can upload the scanned document to online storage so the user can access it remotely."
    },
    "tip": "Cloud scan features send documents to Internet-based storage; SMB sends them to local network shares. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 18"
  },
  {
    "topic": "Multifunction Devices",
    "number": 17,
    "question": "Which MFD/MFP component optimizes processing of multi-page documents?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Feed assembly",
      "B": "ADF",
      "C": "Transfer roller",
      "D": "System tray"
    },
    "explanations": {
      "A": "The feed assembly moves paper through the device generally, but it is not the specific multi-page scanning component identified by the source.",
      "B": "An Automatic Document Feeder pulls multiple pages through the scanner automatically, avoiding the need to place each page on the glass individually.",
      "C": "A transfer roller is part of the laser-printing process that helps transfer toner to paper; it does not feed originals for scanning.",
      "D": "The system tray is an operating-system interface area and is unrelated to MFD document handling."
    },
    "tip": "ADF = Automatic Document Feeder; use it when scanning or copying a stack of pages. CompTIA A+ 220-1201 - Multifunction Devices Quiz Page 19"
  },
  {
    "topic": "Multifunction Devices",
    "number": 18,
    "question": "A flatbed scanner is a device that uses a flat glass surface on which documents, photos, or other materials are placed face down while a scanning mechanism moves underneath to capture the image.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A flatbed scanner uses a stationary glass platen for the original while the scanning head moves beneath it to capture the image.",
      "B": "False is incorrect because the statement accurately describes how a flatbed scanner operates."
    },
    "tip": "Flatbed = original stays on the glass; the scanning mechanism moves underneath."
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 1,
    "question": "Which DNS database record type returns a 32-bit IP address?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "MX",
      "B": "AAAA",
      "C": "CNAME",
      "D": "A",
      "E": "PTR"
    },
    "explanations": {
      "A": "MX records identify mail servers for a domain; they do not return an IPv4 address.",
      "B": "AAAA records map names to 128-bit IPv6 addresses, not 32-bit IPv4 addresses.",
      "C": "CNAME creates an alias from one hostname to another canonical hostname rather than directly returning an IPv4 address.",
      "D": "An A record maps a hostname to a 32-bit IPv4 address.",
      "E": "PTR records perform reverse DNS lookups by mapping an IP address back to a hostname."
    },
    "tip": "A = IPv4 address; AAAA = IPv6 address. CompTIA A+ 220-1201 - Network Configuration Concepts Page 3"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 2,
    "question": "The DNS AAAA record maps a hostname to:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "IPv4 address",
      "B": "Mail server",
      "C": "IPv6 address",
      "D": "Canonical name"
    },
    "explanations": {
      "A": "IPv4 addresses are mapped with an A record.",
      "B": "Mail servers for a domain are identified with MX records.",
      "C": "An AAAA record maps a hostname to a 128-bit IPv6 address.",
      "D": "A canonical-name alias is represented by a CNAME record."
    },
    "tip": "Four A letters in AAAA can remind you that it is the DNS record for the newer IPv6 address format. CompTIA A+ 220-1201 - Network Configuration Concepts Page 4"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 3,
    "question": "Which DNS database record type allows multiple domain names to resolve to the same IP address?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "MX",
      "B": "CNAME",
      "C": "AAAA",
      "D": "PTR",
      "E": "SPF"
    },
    "explanations": {
      "A": "MX records specify mail exchangers for a domain.",
      "B": "A CNAME record creates an alias to another hostname. Multiple aliases can point to the same canonical hostname and therefore ultimately resolve to the same IP address.",
      "C": "AAAA maps a hostname directly to an IPv6 address rather than creating an alias.",
      "D": "PTR maps an IP address back to a hostname for reverse lookup.",
      "E": "SPF is used for email sender authorization, typically through DNS TXT data, not hostname aliasing."
    },
    "tip": "CNAME = canonical-name alias; use it when one host needs additional DNS names. CompTIA A+ 220-1201 - Network Configuration Concepts Page 5"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 4,
    "question": "Which of the DNS database records listed below maps a domain name to a list of mail servers for that domain?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "NS",
      "B": "MX",
      "C": "PTR",
      "D": "TXT"
    },
    "explanations": {
      "A": "NS records identify the authoritative name servers for a DNS zone.",
      "B": "MX, or Mail Exchange, records identify the mail servers responsible for receiving email for a domain.",
      "C": "PTR records are used for reverse DNS lookups.",
      "D": "TXT stores text-based information and is commonly used for verification and email-security policies, but it does not itself designate the domain mail servers."
    },
    "tip": "MX = Mail Exchange - it tells email systems where a domain receives mail. CompTIA A+ 220-1201 - Network Configuration Concepts Page 6"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 5,
    "question": "What is the function of a DNS TXT record? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "Resolves an IP address to a hostname for reverse lookups",
      "B": "Maps a domain name to a list of mail servers for that domain",
      "C": "Used to store text-based data associated with a domain",
      "D": "Not used to direct any traffic",
      "E": "Allows multiple domain names to resolve to the same IP address"
    },
    "explanations": {
      "A": "Reverse DNS lookups use PTR records.",
      "B": "MX records identify mail servers.",
      "C": "TXT records store arbitrary text associated with a DNS name and are often used for domain verification and email-security information.",
      "D": "TXT records carry descriptive or policy data rather than providing an address or routing destination for network traffic.",
      "E": "CNAME aliases can let multiple names ultimately resolve to the same destination."
    },
    "tip": "TXT records hold information and policies in DNS; they do not point a client to a destination server. CompTIA A+ 220-1201 - Network Configuration Concepts Page 7"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 6,
    "question": "Which of the following is used to sign an outbound email message with a digital signature?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "SPF",
      "B": "DKIM",
      "C": "DMARC",
      "D": "PEM"
    },
    "explanations": {
      "A": "SPF identifies which sending servers are authorized to send mail for a domain; it does not digitally sign the message.",
      "B": "DKIM adds a cryptographic signature to outgoing email. Receiving systems can verify that signature with the public key published in DNS.",
      "C": "DMARC defines policy and reporting for messages that fail SPF or DKIM alignment checks; it does not create the email signature.",
      "D": "PEM is a text encoding format commonly used for certificates and keys, not the domain email-signing mechanism described."
    },
    "tip": "DKIM = digital signature on email; SPF = allowed senders; DMARC = policy for authentication failures. CompTIA A+ 220-1201 - Network Configuration Concepts Page 8"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 7,
    "question": "Which of the answers listed below refers to an email authentication mechanism that allows domain owners to specify, via DNS records, which IP addresses are authorized to send emails on behalf of their domain?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "DMARC",
      "B": "PEM",
      "C": "DKIM",
      "D": "SPF"
    },
    "explanations": {
      "A": "DMARC tells receivers how to handle messages based on SPF and DKIM results; it does not primarily list authorized sending IP addresses.",
      "B": "PEM is a certificate/key encoding format rather than an email sender-authorization policy.",
      "C": "DKIM verifies a cryptographic signature on a message; it does not define the list of IP addresses allowed to send for the domain.",
      "D": "SPF publishes a DNS policy identifying the mail servers or IP addresses permitted to send email for a domain."
    },
    "tip": "SPF answers: Which servers are permitted to send mail for this domain? CompTIA A+ 220-1201 - Network Configuration Concepts Page 9"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 8,
    "question": "Which of the following acronyms refers to a policy framework that allows domain owners to specify how email receivers should handle messages that fail authentication checks?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "DKIM",
      "B": "SPF",
      "C": "PEM",
      "D": "DMARC"
    },
    "explanations": {
      "A": "DKIM signs messages and enables signature verification, but it does not provide the overall receiver-handling policy.",
      "B": "SPF authorizes sending systems but does not define the complete failure-handling and reporting policy.",
      "C": "PEM is an encoding format for cryptographic material, not an email authentication policy framework.",
      "D": "DMARC lets a domain publish policies telling receiving systems how to handle messages that fail aligned SPF or DKIM checks and can provide authentication reports."
    },
    "tip": "DMARC decides the policy response - monitor, quarantine, or reject mail that fails authentication rules. CompTIA A+ 220-1201 - Network Configuration Concepts Page 10"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 9,
    "question": "The duration for which a DHCP client is authorized to use a dynamically assigned IP address from a DHCP server is known as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Allocation",
      "B": "Lease",
      "C": "Interval",
      "D": "Reservation"
    },
    "explanations": {
      "A": "Allocation is a general term for assigning a resource, but DHCP specifically calls the time-limited assignment a lease.",
      "B": "A DHCP lease is the period during which a client may use the IP configuration assigned by the DHCP server.",
      "C": "Interval is a generic timing term and is not the standard DHCP name for the address assignment period.",
      "D": "A reservation permanently associates a particular client with a particular IP address rather than describing the normal lease duration."
    },
    "tip": "DHCP addresses are borrowed, not owned - the borrowing period is the lease. CompTIA A+ 220-1201 - Network Configuration Concepts Page 11"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 10,
    "question": "What is the standard DHCP term for a permanent IP address assignment made by the server to a specific device?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Binding",
      "B": "Fixed lease",
      "C": "Pinning",
      "D": "Reservation"
    },
    "explanations": {
      "A": "Binding can describe an association between client information and an address, but the standard configuration term in this quiz is reservation.",
      "B": "Although the phrase sounds descriptive, it is not the expected DHCP configuration term here.",
      "C": "Pinning is not the standard DHCP term for assigning one client a consistent address.",
      "D": "A DHCP reservation associates a specific client, commonly identified by its MAC address, with a particular IP address so it receives the same address from DHCP."
    },
    "tip": "Reservation = reserve one DHCP address for one specific device. CompTIA A+ 220-1201 - Network Configuration Concepts Page 12"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 11,
    "question": "What is the correct DHCP term for the defined pool of IP addresses that a DHCP server can assign to clients?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Range",
      "B": "Block",
      "C": "Scope",
      "D": "Group"
    },
    "explanations": {
      "A": "A range describes consecutive addresses, but DHCP uses the term scope for the configured pool and its related options.",
      "B": "Block is not the standard DHCP term for the assignable address pool.",
      "C": "A DHCP scope defines the pool of addresses available for lease on a subnet and commonly includes related settings such as mask, gateway, and lease duration.",
      "D": "Group is not the standard name for a DHCP address pool."
    },
    "tip": "DHCP scope = the pool of addresses the server is allowed to lease. CompTIA A+ 220-1201 - Network Configuration Concepts Page 13"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 12,
    "question": "A DHCP server's IP exclusion configuration option allows network administrators to remove a single IP address or a range of IP addresses from the pool of addresses automatically assigned to requesting DHCP clients. IP exclusion prevents DHCP clients from receiving IP addresses that are statically assigned to critical network devices, such as servers or wireless printers.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement correctly describes a DHCP exclusion: excluded addresses remain inside the broader scope but are withheld from automatic leasing, helping avoid conflicts with statically configured devices.",
      "B": "False is incorrect because exclusions are specifically used to prevent selected addresses in a DHCP scope from being handed out dynamically."
    },
    "tip": "Scope says what DHCP may use; exclusion removes addresses from that automatic pool; reservation assigns one address to one known client. CompTIA A+ 220-1201 - Network Configuration Concepts Page 14"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 13,
    "question": "Which of the terms listed below refers to a logical grouping of computers that allows hosts to communicate as if they are on the same broadcast domain, regardless of their physical location?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "VPN",
      "B": "Intranet",
      "C": "Screened subnet",
      "D": "VLAN"
    },
    "explanations": {
      "A": "A VPN creates an encrypted logical connection across another network; it does not define a switched broadcast domain.",
      "B": "An intranet is a private internal network or collection of services, not specifically a logical Layer 2 broadcast-domain grouping.",
      "C": "A screened subnet is an isolated network segment used to place externally accessible systems between security boundaries.",
      "D": "A Virtual LAN logically groups switch ports and devices into the same Layer 2 broadcast domain even when they are not physically adjacent."
    },
    "tip": "VLAN = logical LAN; devices can share a broadcast domain without being plugged into the same physical area. CompTIA A+ 220-1201 - Network Configuration Concepts Page 15"
  },
  {
    "topic": "Network Configuration Concepts",
    "number": 14,
    "question": "A system that uses a public network (such as the Internet) to create secure, encrypted connections between remote locations is called:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "WWAN",
      "B": "VPN",
      "C": "PAN",
      "D": "VLAN"
    },
    "explanations": {
      "A": "A WWAN is a wide-area wireless network, often using cellular technology; encryption over a public network is not its defining feature.",
      "B": "A Virtual Private Network creates an encrypted tunnel over a public network so remote users or sites can communicate securely.",
      "C": "A PAN connects devices over a short personal range, such as with Bluetooth.",
      "D": "A VLAN logically separates Layer 2 broadcast domains on switched networks; it does not create an encrypted Internet tunnel."
    },
    "tip": "VPN = private encrypted tunnel carried across a public network."
  },
  {
    "topic": "Network Protocols",
    "number": 1,
    "question": "What is the function of FTP?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Email service",
      "B": "Directory access",
      "C": "Serving of web pages",
      "D": "File exchange"
    },
    "explanations": {
      "A": "Email services use mail protocols such as SMTP, POP3, or IMAP. FTP is not an email protocol.",
      "B": "Directory services are associated with protocols such as LDAP, not FTP.",
      "C": "Web pages are normally delivered with HTTP or HTTPS rather than FTP.",
      "D": "FTP stands for File Transfer Protocol and is designed to transfer files between networked systems."
    },
    "tip": "FTP = File Transfer Protocol - its job is moving files between computers. CompTIA A+ 220-1201 - Network Protocols Page 3"
  },
  {
    "topic": "Network Protocols",
    "number": 2,
    "question": "A type of cryptographic network protocol for secure data communication, remote command-line login, remote command execution, and other secure network services between networked computers is called:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "RDP",
      "B": "SSH",
      "C": "Telnet",
      "D": "SCP"
    },
    "explanations": {
      "A": "RDP provides graphical remote desktop access and is not primarily a secure command-line protocol.",
      "B": "Secure Shell (SSH) encrypts remote command-line sessions and supports secure authentication and remote command execution.",
      "C": "Telnet provides remote terminal access but sends its traffic without the encryption provided by SSH.",
      "D": "SCP securely copies files using SSH, but it is not the general remote-login and command-execution protocol described."
    },
    "tip": "SSH = Secure Shell - use it when remote command-line access must be encrypted. CompTIA A+ 220-1201 - Network Protocols Page 4"
  },
  {
    "topic": "Network Protocols",
    "number": 3,
    "question": "Telnet: (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "Encrypts network connection",
      "B": "Provides username & password authentication",
      "C": "Transmits data in an unencrypted form",
      "D": "Does not provide authentication",
      "E": "Enables remote login and command execution"
    },
    "explanations": {
      "A": "Telnet does not encrypt its session traffic, so credentials and commands can be exposed on the network.",
      "B": "Telnet can prompt for a username and password to authenticate a remote session.",
      "C": "Telnet sends session data in plaintext, which is why it is unsafe on untrusted networks.",
      "D": "Telnet can provide login authentication, so saying it provides no authentication is incorrect.",
      "E": "Telnet provides terminal-based remote access that lets a user log in and execute commands on another host."
    },
    "tip": "Telnet can log you in remotely, but it is plaintext; SSH provides the secure replacement. CompTIA A+ 220-1201 - Network Protocols Page 5"
  },
  {
    "topic": "Network Protocols",
    "number": 4,
    "question": "Which of the answers listed below refers to a secure replacement for Telnet?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "SSH",
      "B": "Rlogin",
      "C": "rsh",
      "D": "SNMP"
    },
    "explanations": {
      "A": "SSH provides encrypted remote terminal access and secure authentication, replacing Telnet for secure administration.",
      "B": "Rlogin is another legacy remote-login protocol and does not provide SSH's modern encrypted protection.",
      "C": "Remote shell is a legacy remote-command protocol and is not the secure replacement for Telnet.",
      "D": "SNMP is used for network monitoring and management, not interactive secure remote login."
    },
    "tip": "Telnet -> SSH is the classic insecure-to-secure remote administration upgrade. CompTIA A+ 220-1201 - Network Protocols Page 6"
  },
  {
    "topic": "Network Protocols",
    "number": 5,
    "question": "The SMTP protocol is used for: (Select 2 answers)",
    "answers": [
      "A",
      "E"
    ],
    "options": {
      "A": "Sending email messages between mail servers",
      "B": "Name resolution services",
      "C": "Serving of web pages",
      "D": "Retrieving email messages from mail servers",
      "E": "Sending email messages from a client device"
    },
    "explanations": {
      "A": "SMTP transfers outgoing mail from one mail server to another.",
      "B": "DNS performs name resolution, not SMTP.",
      "C": "HTTP and HTTPS serve web content, not SMTP.",
      "D": "POP3 and IMAP retrieve or access received mail; SMTP is primarily for sending.",
      "E": "Email clients use SMTP to submit outgoing messages to a mail server."
    },
    "tip": "SMTP sends mail; POP3 and IMAP are used to receive or access mail. CompTIA A+ 220-1201 - Network Protocols Page 7"
  },
  {
    "topic": "Network Protocols",
    "number": 6,
    "question": "Which of the following refers to a system that translates domain names to IP addresses and stores other domain-related records?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "DHCP",
      "B": "ARP",
      "C": "WINS",
      "D": "DNS",
      "E": "APIPA",
      "F": "NAT"
    },
    "explanations": {
      "A": "DHCP automatically supplies IP configuration to clients; it does not translate domain names.",
      "B": "ARP maps IPv4 addresses to local MAC addresses, not domain names to IP addresses.",
      "C": "WINS resolves legacy NetBIOS names rather than Internet DNS domain names.",
      "D": "Domain Name System (DNS) resolves domain names to IP addresses and stores records such as A, AAAA, MX, and CNAME.",
      "E": "APIPA automatically assigns a local IPv4 address when DHCP is unavailable; it is not a naming service.",
      "F": "NAT translates between private and public IP addressing; it does not resolve domain names."
    },
    "tip": "DNS is the Internet's name-to-address directory. CompTIA A+ 220-1201 - Network Protocols Page 8"
  },
  {
    "topic": "Network Protocols",
    "number": 7,
    "question": "Which network protocol provides an automated alternative to manual IP address allocation?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "DHCP",
      "B": "Zeroconf",
      "C": "IMAP",
      "D": "HTTP",
      "E": "FTP",
      "F": "SMTP"
    },
    "explanations": {
      "A": "Dynamic Host Configuration Protocol automatically leases IP addresses and other network settings to clients.",
      "B": "Zeroconf can provide automatic local configuration when normal services are unavailable, but DHCP is the standard protocol for centrally automated IP allocation.",
      "C": "IMAP is an email-access protocol and does not assign IP addresses.",
      "D": "HTTP transfers web content and does not configure client IP addresses.",
      "E": "FTP transfers files and does not allocate network addresses.",
      "F": "SMTP sends email and does not provide IP configuration."
    },
    "tip": "DHCP removes the need to type IP settings manually by leasing them to clients. CompTIA A+ 220-1201 - Network Protocols Page 9"
  },
  {
    "topic": "Network Protocols",
    "number": 8,
    "question": "Which of the protocols listed below is used to retrieve the contents of an Internet page from a web server?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "IMAP",
      "B": "HTTP",
      "C": "FTP",
      "D": "SMTP"
    },
    "explanations": {
      "A": "IMAP accesses email stored on a mail server, not web pages.",
      "B": "Hypertext Transfer Protocol is used by web clients to request and receive web resources from servers.",
      "C": "FTP transfers files but is not the normal protocol used by a browser to retrieve a web page.",
      "D": "SMTP sends email messages rather than web content."
    },
    "tip": "HTTP is for web pages; HTTPS is the encrypted version used for secure web traffic. CompTIA A+ 220-1201 - Network Protocols Page 10"
  },
  {
    "topic": "Network Protocols",
    "number": 9,
    "question": "POP3 is used for:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Name resolution",
      "B": "Sending email messages",
      "C": "File exchange",
      "D": "Email retrieval"
    },
    "explanations": {
      "A": "DNS handles name resolution, not POP3.",
      "B": "SMTP is the protocol used to send email.",
      "C": "FTP and related protocols handle file exchange.",
      "D": "Post Office Protocol version 3 retrieves messages from a mail server to an email client."
    },
    "tip": "POP3 = pick up mail from the server; SMTP = send mail to the server. CompTIA A+ 220-1201 - Network Protocols Page 11"
  },
  {
    "topic": "Network Protocols",
    "number": 10,
    "question": "Which of the answers listed below refer to IMAP? (Select 2 answers)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "Offers improved functionality in comparison to POP3",
      "B": "Serves the same function as POP3",
      "C": "Enables sending email messages from client devices",
      "D": "Offers less functions than POP3",
      "E": "Enables email exchange between mail servers"
    },
    "explanations": {
      "A": "IMAP keeps mail organized on the server and supports synchronized folders and message state across multiple devices.",
      "B": "Both IMAP and POP3 are used to access or retrieve email from a mail server, although they manage messages differently.",
      "C": "SMTP sends outgoing email; IMAP is for accessing received mail.",
      "D": "IMAP generally offers more server-side synchronization and folder management than POP3.",
      "E": "SMTP is used to transfer email between mail servers."
    },
    "tip": "IMAP synchronizes mail with the server, making it well suited for using the same mailbox on multiple devices. CompTIA A+ 220-1201 - Network Protocols Page 12"
  },
  {
    "topic": "Network Protocols",
    "number": 11,
    "question": "Which of the following answers refers to an API that enables communication between hosts on a LAN?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "DNS",
      "B": "TCP/IP",
      "C": "NetBIOS",
      "D": "DHCP"
    },
    "explanations": {
      "A": "DNS is a name-resolution system, not the LAN communication API described.",
      "B": "TCP/IP is a protocol suite for network communication, not the specific API identified by the quiz.",
      "C": "NetBIOS provides services that allow applications on separate computers to communicate over a local network.",
      "D": "DHCP supplies IP configuration to clients and is not an application programming interface for host communication."
    },
    "tip": "NetBIOS provides application-level naming and communication services for hosts on a local network. CompTIA A+ 220-1201 - Network Protocols Page 13"
  },
  {
    "topic": "Network Protocols",
    "number": 12,
    "question": "The function of the NetBT protocol is to allow NetBIOS services to be used over TCP/IP networks.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "NetBT, or NetBIOS over TCP/IP, carries NetBIOS services across TCP/IP networks.",
      "B": "False is incorrect because the statement accurately describes the purpose of NetBIOS over TCP/IP."
    },
    "tip": "NetBT literally means NetBIOS over TCP/IP. CompTIA A+ 220-1201 - Network Protocols Page 14"
  },
  {
    "topic": "Network Protocols",
    "number": 13,
    "question": "LDAP is an example of:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Authentication protocol",
      "B": "Directory access protocol",
      "C": "Address resolution protocol",
      "D": "File exchange protocol"
    },
    "explanations": {
      "A": "LDAP can participate in systems that authenticate users, but its primary role is accessing and managing directory information.",
      "B": "Lightweight Directory Access Protocol is used to query and work with directory services containing users, groups, computers, and other objects.",
      "C": "ARP performs local IPv4-to-MAC address resolution, not LDAP.",
      "D": "LDAP is not designed for transferring files."
    },
    "tip": "LDAP = Lightweight Directory Access Protocol - think directory lookups for users, groups, and resources. CompTIA A+ 220-1201 - Network Protocols Page 15"
  },
  {
    "topic": "Network Protocols",
    "number": 14,
    "question": "Which protocol secures web traffic with SSL/TLS encryption to ensure the confidentiality, integrity, and authentication of the data exchanged between a user's browser and a web server?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "SFTP",
      "B": "IPsec",
      "C": "SSH",
      "D": "HTTPS"
    },
    "explanations": {
      "A": "SFTP securely transfers files over SSH; it is not the standard protocol for encrypted web browsing.",
      "B": "IPsec secures IP network traffic at the network layer but is not the browser-to-web-server protocol described.",
      "C": "SSH secures remote shell and related services, not standard web browsing.",
      "D": "HTTPS is HTTP protected by TLS, providing encrypted and authenticated communication between browsers and web servers."
    },
    "tip": "HTTPS = HTTP protected by TLS; look for the padlock when web traffic is encrypted. CompTIA A+ 220-1201 - Network Protocols Page 16"
  },
  {
    "topic": "Network Protocols",
    "number": 15,
    "question": "SMB is a protocol used for:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "File and printer sharing between devices on a network",
      "B": "Collecting diagnostic and monitoring data from networked devices",
      "C": "Routing network traffic between different subnets",
      "D": "Managing and allocating IP addresses within a network"
    },
    "explanations": {
      "A": "Server Message Block enables network clients to access shared files, folders, printers, and related resources.",
      "B": "SNMP is commonly used for monitoring and collecting management information from network devices.",
      "C": "Routers and routing protocols move traffic between subnets; SMB does not perform routing.",
      "D": "DHCP manages automated IP configuration, not SMB."
    },
    "tip": "SMB = shared folders and printers, especially in Windows networks. CompTIA A+ 220-1201 - Network Protocols Page 17"
  },
  {
    "topic": "Network Protocols",
    "number": 16,
    "question": "What are the characteristic features of SMB/CIFS? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Designed for Linux-based environments",
      "B": "Optimized for secure file sharing over the Internet",
      "C": "Primarily used in Microsoft Windows environments",
      "D": "Intended for voice and multimedia communication over IP networks",
      "E": "Used to provide shared access to files, directories, and devices"
    },
    "explanations": {
      "A": "SMB can be used on Linux through software such as Samba, but it is historically associated most strongly with Microsoft networking.",
      "B": "SMB is primarily intended for network resource sharing and should not be treated as an Internet-optimized secure file-transfer protocol.",
      "C": "SMB/CIFS has long been a core Windows networking technology for shared resources.",
      "D": "Voice and multimedia communication use other protocols; SMB/CIFS focuses on shared network resources.",
      "E": "SMB/CIFS lets users access shared files, directories, printers, and other network resources."
    },
    "tip": "SMB/CIFS is Windows-style resource sharing: files, folders, and printers. CompTIA A+ 220-1201 - Network Protocols Page 18"
  },
  {
    "topic": "Network Protocols",
    "number": 17,
    "question": "Which Microsoft-proprietary protocol enables remote access and administration of another networked host through a graphical interface?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "VDI",
      "B": "RDP",
      "C": "SSH",
      "D": "VNC"
    },
    "explanations": {
      "A": "VDI is an architecture for hosting virtual desktops, not the specific Microsoft remote-display protocol.",
      "B": "Remote Desktop Protocol is Microsoft's protocol for graphical remote access to another Windows system.",
      "C": "SSH provides secure command-line access and is not Microsoft's graphical remote desktop protocol.",
      "D": "VNC provides graphical remote control but is not the Microsoft-proprietary protocol identified in the question."
    },
    "tip": "RDP = Remote Desktop Protocol - think Windows graphical remote control. CompTIA A+ 220-1201 - Network Protocols Page 19"
  },
  {
    "topic": "Network Protocols",
    "number": 18,
    "question": "UDP is a connection-oriented protocol using a three-way handshake, which is a set of initial steps required for establishing a network connection. UDP supports error checking, flow control, sequencing, and retransmission of lost packets. Example applications of UDP include the transmission of text and image data.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement assigns TCP characteristics to UDP. UDP is connectionless and does not use TCP's three-way handshake, sequencing, flow control, or retransmission mechanisms.",
      "B": "UDP is a connectionless, best-effort transport protocol. It avoids the connection setup and reliability features described in the statement."
    },
    "tip": "UDP favors low overhead and speed; TCP provides the connection, sequencing, acknowledgments, and retransmission. CompTIA A+ 220-1201 - Network Protocols Page 20"
  },
  {
    "topic": "Network Protocols",
    "number": 19,
    "question": "TCP is an example of a connectionless protocol. Since TCP does not use a three-way handshake to establish a network connection, it is considered an unreliable or best-effort protocol. Example applications of TCP include the transmission of video and audio streaming data.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "TCP is connection-oriented, uses a three-way handshake, and provides reliable ordered delivery. The statement incorrectly describes TCP as if it were UDP.",
      "B": "TCP establishes a connection and uses acknowledgments, sequencing, and retransmission to provide reliable delivery, so the statement is false."
    },
    "tip": "TCP = connection-oriented and reliable; UDP = connectionless and best-effort."
  },
  {
    "topic": "Network Services",
    "number": 1,
    "question": "When a web browser needs to access a website identified by its domain name, which type of server provides the IP address required for the connection?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "DNS server",
      "B": "Proxy server",
      "C": "DHCP server",
      "D": "Web server"
    },
    "explanations": {
      "A": "A DNS server resolves a human-readable domain name into the IP address that the browser needs to contact the destination host.",
      "B": "A proxy relays client requests and may filter or cache traffic, but domain-name resolution is not its primary role.",
      "C": "DHCP supplies IP configuration to network clients; it does not normally translate website names into IP addresses.",
      "D": "A web server delivers web content after the client has located it; it is not the service responsible for DNS name resolution."
    },
    "tip": "DNS is the network phone book - it turns a domain name into an IP address. CompTIA A+ 220-1201 - Network Services Page 3"
  },
  {
    "topic": "Network Services",
    "number": 2,
    "question": "What is the primary function of a DHCP server?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Mapping IP addresses to MAC addresses",
      "B": "Assigning dynamic IP addresses to clients",
      "C": "Monitoring IP address conflicts",
      "D": "Logging IP address assignment history"
    },
    "explanations": {
      "A": "Mapping an IPv4 address to a MAC address is associated with ARP, not DHCP.",
      "B": "DHCP automatically leases IP addresses and other network settings to clients so they do not need to be configured manually.",
      "C": "Conflict detection can be part of network management, but it is not DHCP's primary purpose.",
      "D": "A DHCP server may keep lease records, but logging is secondary to its main job of assigning network configuration."
    },
    "tip": "DHCP = automatic IP configuration for clients. CompTIA A+ 220-1201 - Network Services Page 4"
  },
  {
    "topic": "Network Services",
    "number": 3,
    "question": "A company wants its employees to access, store, and manage shared documents centrally over a network. Which type of server should they implement?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Mail server",
      "B": "File server",
      "C": "Print server",
      "D": "Database server"
    },
    "explanations": {
      "A": "A mail server stores and transfers electronic messages rather than providing general shared document storage.",
      "B": "A file server centrally stores files and folders and provides network users with controlled shared access.",
      "C": "A print server manages print jobs and printers, not centralized document storage.",
      "D": "A database server manages structured database records rather than ordinary shared files and folders."
    },
    "tip": "File server = centralized shared folders and documents. CompTIA A+ 220-1201 - Network Services Page 5"
  },
  {
    "topic": "Network Services",
    "number": 4,
    "question": "Which type of server does not primarily store files but facilitates document output?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Web server",
      "B": "Application server",
      "C": "Print server",
      "D": "Database server"
    },
    "explanations": {
      "A": "A web server hosts and serves web content; document output to printers is not its primary role.",
      "B": "An application server runs or supports applications rather than managing printer queues.",
      "C": "A print server accepts print jobs, queues them, and sends them to network printers, facilitating physical or virtual document output.",
      "D": "A database server stores and processes structured data rather than managing printing."
    },
    "tip": "Print server = manages printers and print queues, not shared file storage. CompTIA A+ 220-1201 - Network Services Page 6"
  },
  {
    "topic": "Network Services",
    "number": 5,
    "question": "A company requires a server that supports the SMTP and IMAP protocols for managing electronic messages. Which type of server should they implement?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Chat server",
      "B": "IM server",
      "C": "Mail server",
      "D": "VoIP server"
    },
    "explanations": {
      "A": "A chat server supports real-time messaging, not standard email protocols such as SMTP and IMAP.",
      "B": "An instant-messaging server handles instant messages rather than conventional email delivery and mailbox access.",
      "C": "A mail server uses protocols such as SMTP for sending or transferring mail and IMAP for accessing messages stored in mailboxes.",
      "D": "A VoIP server supports voice communications over IP rather than email services."
    },
    "tip": "Mail server: SMTP sends mail; IMAP accesses synchronized mailboxes. CompTIA A+ 220-1201 - Network Services Page 7"
  },
  {
    "topic": "Network Services",
    "number": 6,
    "question": "Which type of server is primarily responsible for collecting diagnostic and monitoring data from networked devices?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Jump server",
      "B": "C2 server",
      "C": "Syslog server",
      "D": "ICS server"
    },
    "explanations": {
      "A": "A jump server provides a controlled intermediary system for administrative access to other hosts.",
      "B": "A command-and-control server coordinates controlled agents or, in malicious contexts, compromised systems; it is not the standard monitoring-log server here.",
      "C": "A Syslog server centrally receives and stores log and diagnostic messages generated by network devices and systems.",
      "D": "An industrial control system server supports industrial processes rather than serving as the general log collector described."
    },
    "tip": "Syslog centralizes event and diagnostic messages from many network devices. CompTIA A+ 220-1201 - Network Services Page 8"
  },
  {
    "topic": "Network Services",
    "number": 7,
    "question": "A company wants to go beyond hosting static content (such as HTML documents) and enable users to interact with web applications. Which type of server would be the most suitable for achieving this goal?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Remote access server",
      "B": "Web server",
      "C": "Media streaming server",
      "D": "Game server"
    },
    "explanations": {
      "A": "A remote access server provides users with remote connectivity to a network or system rather than serving interactive web applications.",
      "B": "A web server delivers web content and can support interactive web applications by working with server-side application components.",
      "C": "A media streaming server is optimized to deliver audio or video streams.",
      "D": "A game server hosts multiplayer game sessions and game-state communication, not general web applications."
    },
    "tip": "Web servers deliver browser-based content; dynamic web applications add server-side processing beyond static HTML. CompTIA A+ 220-1201 - Network Services Page 9"
  },
  {
    "topic": "Network Services",
    "number": 8,
    "question": "Which part of the AAA security architecture deals with the verification of the identity of a person or process?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Auditing",
      "B": "Authentication",
      "C": "Authorization",
      "D": "Accounting"
    },
    "explanations": {
      "A": "Auditing reviews or records activity, but it does not establish who the user is.",
      "B": "Authentication verifies identity, commonly with credentials, certificates, tokens, or other factors.",
      "C": "Authorization determines what an authenticated identity is allowed to access or do.",
      "D": "Accounting records usage and activity for tracking, billing, or auditing purposes."
    },
    "tip": "AAA order: Authentication = who are you; Authorization = what can you do; Accounting = what did you do. CompTIA A+ 220-1201 - Network Services Page 10"
  },
  {
    "topic": "Network Services",
    "number": 9,
    "question": "In the AAA security architecture, the process of granting or denying access to resources is known as:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Authorization",
      "B": "Accounting",
      "C": "Auditing",
      "D": "Authentication"
    },
    "explanations": {
      "A": "Authorization applies access rules and permissions to determine which resources or actions an authenticated identity may use.",
      "B": "Accounting records resource usage and activity rather than granting permissions.",
      "C": "Auditing reviews events and records for oversight; it is not the permission decision itself.",
      "D": "Authentication verifies identity but does not by itself decide which resources that identity may access."
    },
    "tip": "Authorization answers: What is this authenticated user allowed to do? CompTIA A+ 220-1201 - Network Services Page 11"
  },
  {
    "topic": "Network Services",
    "number": 10,
    "question": "In the AAA security architecture, the process of tracking accessed services and logging resource consumption is called:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Authentication",
      "B": "Auditing",
      "C": "Accounting",
      "D": "Authorization"
    },
    "explanations": {
      "A": "Authentication verifies identity rather than tracking service usage.",
      "B": "Auditing is a broader review of activity, while AAA specifically names usage tracking and logging as accounting.",
      "C": "Accounting records session details, accessed services, duration, and resource consumption for tracking and reporting.",
      "D": "Authorization controls permitted access; it does not record the resulting usage."
    },
    "tip": "AAA Accounting keeps the usage record - when, what, and how much was used. CompTIA A+ 220-1201 - Network Services Page 12"
  },
  {
    "topic": "Network Services",
    "number": 11,
    "question": "Which AAA solution uses UDP as its transport protocol, combines authentication and authorization, and is commonly deployed for network access control such as VPNs and Wi-Fi authentication?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "RADIUS",
      "B": "LDAP",
      "C": "TACACS+",
      "D": "Kerberos"
    },
    "explanations": {
      "A": "RADIUS commonly uses UDP and combines authentication and authorization functions. It is widely used for centralized network access, including VPN and wireless authentication.",
      "B": "LDAP is a directory access protocol, not the AAA solution described by these transport and access-control characteristics.",
      "C": "TACACS+ uses TCP and separates authentication, authorization, and accounting rather than combining the first two.",
      "D": "Kerberos is a ticket-based authentication protocol, not the UDP-based AAA solution described."
    },
    "tip": "RADIUS = network access AAA, commonly UDP; TACACS+ = device administration, TCP. CompTIA A+ 220-1201 - Network Services Page 13"
  },
  {
    "topic": "Network Services",
    "number": 12,
    "question": "Which of the AAA solutions listed below relies on TCP, separates authentication, authorization, and accounting, and is commonly used for device administration in enterprise networks?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "OAuth",
      "B": "TACACS+",
      "C": "SAML",
      "D": "RADIUS"
    },
    "explanations": {
      "A": "OAuth is an authorization framework for delegated application access, not the enterprise device-administration AAA protocol described.",
      "B": "TACACS+ uses TCP and handles authentication, authorization, and accounting as separate functions, making it well suited to administrative access to network devices.",
      "C": "SAML exchanges authentication and authorization assertions for federated identity and single sign-on, not network-device AAA in this form.",
      "D": "RADIUS is commonly associated with UDP and combines authentication and authorization, unlike the characteristics in the question."
    },
    "tip": "TACACS+ separates all three AAA functions and is strongly associated with administrator access to routers and switches. CompTIA A+ 220-1201 - Network Services Page 14"
  },
  {
    "topic": "Network Services",
    "number": 13,
    "question": "What is the primary function of SQL Server?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Application server",
      "B": "Network protocol",
      "C": "C2 server",
      "D": "Database management system"
    },
    "explanations": {
      "A": "An application server runs application logic, while SQL Server is specifically designed to manage relational data.",
      "B": "SQL Server is software, not a network protocol.",
      "C": "A command-and-control server coordinates remote agents and is unrelated to relational database management.",
      "D": "SQL Server is a relational database management system used to store, organize, query, and manage structured data."
    },
    "tip": "SQL Server is a DBMS - it stores and queries structured relational data. CompTIA A+ 220-1201 - Network Services Page 15"
  },
  {
    "topic": "Network Services",
    "number": 14,
    "question": "Which server type provides time synchronization services across devices within a network?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "NTP",
      "B": "VTP",
      "C": "NNTP",
      "D": "RTP"
    },
    "explanations": {
      "A": "NTP, the Network Time Protocol, synchronizes clocks across computers and network devices.",
      "B": "VTP is associated with VLAN configuration distribution on Cisco networks, not time synchronization.",
      "C": "NNTP is the Network News Transfer Protocol for Usenet-style news messages.",
      "D": "RTP carries real-time audio and video data; it does not synchronize system clocks."
    },
    "tip": "NTP = Network Time Protocol - keep device clocks synchronized. CompTIA A+ 220-1201 - Network Services Page 16"
  },
  {
    "topic": "Network Services",
    "number": 15,
    "question": "Which appliance monitors inbound electronic communication and applies filtering rules to block unwanted or malicious messages from entering the network?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Content filter",
      "B": "Mail server",
      "C": "Antivirus software",
      "D": "Spam gateway"
    },
    "explanations": {
      "A": "A content filter can block many categories of unwanted content, but the quiz identifies the email-specific gateway appliance.",
      "B": "A mail server sends, receives, and stores email but is not primarily the filtering security appliance described.",
      "C": "Antivirus detects malicious software, but it is not the dedicated inbound email filtering gateway in this question.",
      "D": "A spam gateway examines incoming email and applies filtering rules to block spam, phishing, and other unwanted or malicious messages before delivery."
    },
    "tip": "Spam gateway sits in the email path and filters unwanted messages before they reach users. CompTIA A+ 220-1201 - Network Services Page 17"
  },
  {
    "topic": "Network Services",
    "number": 16,
    "question": "Which of the following answers refers to a network security solution providing a single point of protection against various types of threats?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "IDP",
      "B": "AV",
      "C": "UTM",
      "D": "NGFW"
    },
    "explanations": {
      "A": "Intrusion detection/prevention focuses on detecting and blocking suspicious network activity rather than combining many security functions in one solution.",
      "B": "Antivirus focuses primarily on malware detection and removal rather than providing multiple network-security services.",
      "C": "Unified Threat Management combines multiple security capabilities, such as firewalling, malware protection, intrusion prevention, and filtering, into a single platform.",
      "D": "A next-generation firewall offers advanced firewall features, but the supplied quiz specifically identifies UTM as the all-in-one single-point security solution."
    },
    "tip": "UTM = Unified Threat Management - several security tools combined into one appliance or platform. CompTIA A+ 220-1201 - Network Services Page 18"
  },
  {
    "topic": "Network Services",
    "number": 17,
    "question": "A network hardware or software solution designed for managing the optimal distribution of workloads across multiple computing resources is referred to as:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Content filter",
      "B": "Proxy server",
      "C": "Load balancer",
      "D": "Domain controller"
    },
    "explanations": {
      "A": "A content filter controls access to or delivery of selected content; it does not distribute workloads.",
      "B": "A proxy relays requests and can cache or filter traffic, but workload distribution is not its defining role.",
      "C": "A load balancer distributes incoming requests or workloads across multiple servers or resources to improve availability and performance.",
      "D": "A domain controller provides centralized identity and directory services rather than balancing application workloads."
    },
    "tip": "Load balancer spreads traffic so one server does not carry all the work. CompTIA A+ 220-1201 - Network Services Page 19"
  },
  {
    "topic": "Network Services",
    "number": 18,
    "question": "Which of the answers listed below refers to a computer system or an application that acts as an intermediary between a client computer and the Internet by relaying and filtering requests?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Network gateway",
      "B": "Content filter",
      "C": "Firewall",
      "D": "Proxy server"
    },
    "explanations": {
      "A": "A gateway connects networks and can translate between them, but the client-to-Internet intermediary described is specifically a proxy.",
      "B": "A content filter may block selected content, but it does not necessarily act as the request-relaying intermediary itself.",
      "C": "A firewall permits or blocks traffic according to security rules but does not normally relay client application requests as a proxy does.",
      "D": "A proxy server receives client requests, forwards them to external destinations, and can filter, cache, or inspect the resulting traffic."
    },
    "tip": "Proxy = middleman between client and destination; it can relay, filter, and sometimes cache requests. CompTIA A+ 220-1201 - Network Services Page 20"
  },
  {
    "topic": "Network Services",
    "number": 19,
    "question": "What is the primary purpose of a SCADA system?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Managing and automating network infrastructure",
      "B": "Implementing biometric access control for secure facilities",
      "C": "Monitoring and controlling industrial processes remotely",
      "D": "Controlling humidity, temperature, and air quality"
    },
    "explanations": {
      "A": "Network automation tools manage routers, switches, and other IT infrastructure; that is not SCADA's primary industrial role.",
      "B": "Biometric systems verify physical access identities rather than monitor industrial equipment and processes.",
      "C": "SCADA systems collect industrial telemetry and allow operators to supervise and control equipment and processes from centralized or remote locations.",
      "D": "Environmental controls can be part of an industrial or building system, but SCADA has the broader purpose of supervisory monitoring and process control."
    },
    "tip": "SCADA = Supervisory Control and Data Acquisition - monitor and control industrial operations. CompTIA A+ 220-1201 - Network Services Page 21"
  },
  {
    "topic": "Network Services",
    "number": 20,
    "question": "Which of the following answers refers to a network of interconnected devices equipped with sensors (such as wearable tech or home automation devices) that can interact with each other to perform various tasks and functions?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "ICS",
      "B": "PAN",
      "C": "IoT",
      "D": "SoC"
    },
    "explanations": {
      "A": "Industrial Control Systems manage industrial equipment and processes; they are not the general category for connected consumer sensors and smart devices.",
      "B": "A personal area network describes a small network around a person, but it does not specifically mean a network of smart sensor-equipped devices.",
      "C": "The Internet of Things consists of connected physical devices with sensors, software, and networking that exchange data and perform automated functions.",
      "D": "A System on a Chip integrates computing components into one chip; it is hardware inside a device, not a network of interconnected devices."
    },
    "tip": "IoT = connected smart things - sensors and network links let physical devices exchange data and act automatically."
  },
  {
    "topic": "Network Troubleshooting",
    "number": 1,
    "question": "Wireless connectivity issues can be caused by physical obstructions and electronic interference. Dense objects can weaken Wi-Fi, while devices such as microwaves, cordless phones, or Bluetooth equipment can disrupt wireless signals.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Physical barriers attenuate radio signals, and other devices using overlapping frequencies can introduce interference. Router placement, frequency band, and channel selection can therefore affect Wi-Fi stability.",
      "B": "Wireless performance is affected by the radio environment. Obstacles and competing radio-frequency signals can reduce coverage and reliability."
    },
    "tip": "5 GHz usually has shorter range through obstacles; 2.4 GHz travels farther but is often more crowded. CompTIA A+ 220-1201 - Network Troubleshooting Page 3"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 2,
    "question": "When troubleshooting intermittent wireless connectivity, what tool can measure signal strength and detect potential dead zones?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Bandwidth tester",
      "B": "Power level controls",
      "C": "Wi-Fi analyzer",
      "D": "Network mapper"
    },
    "explanations": {
      "A": "A bandwidth tester measures throughput, but it does not map Wi-Fi signal strength throughout an area.",
      "B": "Power controls change transmitter output rather than analyze coverage and dead zones.",
      "C": "A Wi-Fi analyzer can display signal strength, channel usage, and nearby wireless networks, helping identify weak areas and interference.",
      "D": "A network mapper identifies devices and topology but is not primarily used to measure wireless signal strength."
    },
    "tip": "Wi-Fi analyzer = signal strength, channels, interference, and dead-zone troubleshooting. CompTIA A+ 220-1201 - Network Troubleshooting Page 4"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 3,
    "question": "A laptop's Wi-Fi connection is unstable and frequently drops, but nearby devices work normally. Reconnecting and restarting did not help. What should the technician do?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Scan the laptop for malware and viruses",
      "B": "Check the router's logs for unusual activity",
      "C": "Update or reinstall the laptop's wireless adapter driver",
      "D": "Connect to a different Wi-Fi network"
    },
    "explanations": {
      "A": "Malware can affect performance, but a problem isolated to one wireless client points more directly to that client's adapter or driver.",
      "B": "Because other devices are working normally, the router is less likely to be the source of the problem.",
      "C": "A corrupt, outdated, or unstable wireless NIC driver can cause repeated disconnects on only one computer.",
      "D": "Testing another network can provide diagnostic information, but it does not directly resolve the likely client-driver problem identified by the source."
    },
    "tip": "One device drops while others stay connected - troubleshoot that device's Wi-Fi adapter and driver. CompTIA A+ 220-1201 - Network Troubleshooting Page 5"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 4,
    "question": "Which steps can help resolve intermittent wireless connectivity caused by external interference? (Select 2 answers)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "Restart the wireless access point",
      "B": "Disable SSID broadcast",
      "C": "Reduce the number of connected devices",
      "D": "Switch frequency bands",
      "E": "Change the wireless channel"
    },
    "explanations": {
      "A": "Restarting can clear temporary faults, but it does not remove external RF interference.",
      "B": "Hiding the SSID does not reduce radio interference or improve signal quality.",
      "C": "This may reduce congestion but does not directly address external interference.",
      "D": "Moving between 2.4 GHz and 5 GHz can avoid interference concentrated in one band.",
      "E": "Selecting a less congested channel can reduce overlap with nearby networks and improve stability."
    },
    "tip": "RF interference problems are often improved by changing the band or choosing a cleaner channel. CompTIA A+ 220-1201 - Network Troubleshooting Page 6"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 5,
    "question": "Several wired PCs with Gigabit NICs connected to a Gigabit switch consistently negotiate at only 100 Mbps. What is the most probable physical-layer cause?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Outdated firmware on the network switch",
      "B": "Excessive network traffic causing congestion",
      "C": "Older cabling type not supporting higher transfer rates",
      "D": "Switch port speed manually set to 100 Mbps"
    },
    "explanations": {
      "A": "Firmware is a software issue, while the question asks for the most probable physical-layer cause.",
      "B": "Congestion reduces effective throughput but does not normally force Ethernet link negotiation to 100 Mbps.",
      "C": "Cabling that lacks the required category or functioning wire pairs can prevent a Gigabit Ethernet link from negotiating at 1000 Mbps.",
      "D": "That could limit speed, but it is a configuration issue rather than the physical-layer cause selected by the source."
    },
    "tip": "Gigabit Ethernet needs suitable cabling and all required wire pairs; bad or older cable can fall back to 100 Mbps. CompTIA A+ 220-1201 - Network Troubleshooting Page 7"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 6,
    "question": "Which symptoms most strongly suggest network congestion rather than a single hardware or software problem? (Select 2 answers)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "The issue occurs intermittently without a clear pattern",
      "B": "The slowness affects only one specific device",
      "C": "The issue results from ISP throttling",
      "D": "The slowness is noticeable across multiple devices",
      "E": "The issue occurs during specific busy periods",
      "F": "The slowness affects only specific types of traffic"
    },
    "explanations": {
      "A": "Random timing alone does not specifically identify congestion.",
      "B": "A one-device problem points more toward that endpoint than shared network congestion.",
      "C": "ISP throttling is an external service limitation, not local network congestion.",
      "D": "Congestion affects shared network capacity, so many clients can slow down together.",
      "E": "Performance degrading when demand is highest is a classic sign that shared bandwidth is congested.",
      "F": "Traffic-specific problems can come from application, protocol, QoS, or service issues and are not as direct a congestion indicator."
    },
    "tip": "Congestion usually affects multiple users and becomes worse during peak usage. CompTIA A+ 220-1201 - Network Troubleshooting Page 8"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 7,
    "question": "A user's online gaming has high latency and lag spikes. Which internal computer factors could explain this, especially with many installed programs? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Internal hardware is overheating and causing frame drops",
      "B": "Background processes or updates are slowing the network connection",
      "C": "Remote game servers are overloaded",
      "D": "Graphics options are set above recommended settings",
      "E": "Other active applications are consuming bandwidth"
    },
    "explanations": {
      "A": "Overheating can reduce game performance, but frame-rate problems are different from network latency.",
      "B": "Updates and background services can consume bandwidth or system resources, increasing latency.",
      "C": "That is an external server-side cause, not an internal factor on the user's computer.",
      "D": "High graphics settings can reduce FPS but do not directly create network latency.",
      "E": "Streaming, syncing, downloads, and other apps can compete with the game for bandwidth and cause lag."
    },
    "tip": "For gaming lag, check Task Manager and active downloads before assuming the Internet connection is bad. CompTIA A+ 220-1201 - Network Troubleshooting Page 9"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 8,
    "question": "What is the most likely cause of limited connectivity when Windows assigns a 169.254.x.x address?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "DNS",
      "B": "DHCP",
      "C": "NAT",
      "D": "DDoS"
    },
    "explanations": {
      "A": "DNS translates names to IP addresses and does not assign the client's local IP address.",
      "B": "A 169.254.x.x APIPA address usually appears when Windows cannot obtain a valid lease from a DHCP server.",
      "C": "NAT translates addresses at a router and is not responsible for assigning the endpoint's DHCP lease.",
      "D": "A denial-of-service attack is not the normal explanation for an APIPA address."
    },
    "tip": "169.254.x.x = APIPA; immediately investigate DHCP reachability or the physical network path. CompTIA A+ 220-1201 - Network Troubleshooting Page 10"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 9,
    "question": "A Windows PC shows Limited Connectivity and the taskbar network icon has an X indicating no active connection. What should be checked first? (Select 2 answers)",
    "answers": [
      "B",
      "D"
    ],
    "options": {
      "A": "Renew the IP address from the command line",
      "B": "Verify the network adapter status",
      "C": "Run the built-in network diagnostics tool",
      "D": "Check the physical network connection",
      "E": "Update the network adapter driver"
    },
    "explanations": {
      "A": "An IP renewal cannot succeed if the adapter has no active physical/link connection.",
      "B": "The NIC may be disabled, disconnected, or reporting a hardware problem, so its status should be checked early.",
      "C": "Diagnostics can help later, but the source prioritizes confirming the adapter and physical link.",
      "D": "A disconnected or damaged Ethernet cable can directly produce the X/no-link condition.",
      "E": "A driver update is a later step after basic link and adapter status checks."
    },
    "tip": "An X on the network icon means start at Layer 1 and the NIC - cable, link, and adapter status. CompTIA A+ 220-1201 - Network Troubleshooting Page 11"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 10,
    "question": "A network administrator can ping a remote host by IP address but not by domain name. What is the most probable cause?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "NIC",
      "B": "ICMP",
      "C": "DNS",
      "D": "DHCP"
    },
    "explanations": {
      "A": "The NIC is working because IP connectivity to the remote host succeeds.",
      "B": "ICMP is functioning because the ping by IP address is successful.",
      "C": "The network path works, but name-to-address translation fails, which points to DNS.",
      "D": "The client already has sufficient IP configuration to reach the remote host by address."
    },
    "tip": "IP works but hostname fails = check DNS. CompTIA A+ 220-1201 - Network Troubleshooting Page 12"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 11,
    "question": "What is jitter in network performance?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Loss of data packets",
      "B": "Signal attenuation",
      "C": "Variation in packet delay",
      "D": "Packet fragmentation"
    },
    "explanations": {
      "A": "Lost packets are packet loss, not jitter.",
      "B": "Attenuation is weakening of a signal over distance or media.",
      "C": "Jitter describes changes in the time it takes successive packets to arrive.",
      "D": "Fragmentation divides packets into smaller pieces and is unrelated to variation in arrival timing."
    },
    "tip": "Latency is delay; jitter is how much that delay varies from packet to packet. CompTIA A+ 220-1201 - Network Troubleshooting Page 13"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 12,
    "question": "Which network application type is most sensitive to jitter?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Web browsing",
      "B": "Email",
      "C": "File transfer",
      "D": "Real-time"
    },
    "explanations": {
      "A": "Web browsing can tolerate moderate timing variation because content is not normally consumed as a continuous real-time stream.",
      "B": "Email is delay-tolerant and does not require packets to arrive at evenly spaced intervals.",
      "C": "File transfers prioritize accurate delivery and can tolerate variable packet timing.",
      "D": "VoIP and live audio/video depend on timely, evenly arriving packets, so jitter directly harms quality."
    },
    "tip": "Real-time voice and video care about timing, so jitter matters much more than it does for email or downloads. CompTIA A+ 220-1201 - Network Troubleshooting Page 14"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 13,
    "question": "During a VoIP call, a user hears their own voice echoing back with a slight delay. Which network performance issue is this most indicative of?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "High latency",
      "B": "Jitter",
      "C": "Packet loss",
      "D": "Audio syncing"
    },
    "explanations": {
      "A": "Excessive delay can make returned audio arrive noticeably later, creating an echo-like experience.",
      "B": "Jitter causes variable arrival timing and commonly produces choppy or uneven audio rather than a consistent delayed echo.",
      "C": "Packet loss usually causes missing audio, dropouts, or gaps.",
      "D": "Audio synchronization describes alignment between media streams and is not the network performance metric selected here."
    },
    "tip": "Echo with a noticeable delay points to latency; broken or choppy voice more often points to jitter or loss. CompTIA A+ 220-1201 - Network Troubleshooting Page 15"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 14,
    "question": "What is the most likely cause of choppy or distorted audio during a VoIP call?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Outdated VoIP software",
      "B": "Jitter",
      "C": "Faulty microphone hardware",
      "D": "Corrupted audio codec"
    },
    "explanations": {
      "A": "Software can cause issues, but the network symptom most directly associated with uneven voice playback is jitter.",
      "B": "Variable packet arrival times can leave the audio stream without data at the right moment, producing choppy or distorted speech.",
      "C": "A microphone fault can distort locally captured audio but does not explain the network timing symptom targeted by the question.",
      "D": "Codec problems can affect audio, but jitter is the network-performance cause identified by the source."
    },
    "tip": "Choppy VoIP audio = check jitter and packet timing. CompTIA A+ 220-1201 - Network Troubleshooting Page 16"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 15,
    "question": "What is the primary purpose of a jitter buffer in VoIP systems?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Compress audio data",
      "B": "Improve call stability",
      "C": "Reduce packet loss",
      "D": "Even out packet delays"
    },
    "explanations": {
      "A": "Compression is performed by codecs, not the jitter buffer.",
      "B": "A jitter buffer may improve perceived stability, but its specific function is to compensate for uneven packet timing.",
      "C": "A buffer cannot recover packets that never arrive; it mainly manages arrival-time variation.",
      "D": "A jitter buffer temporarily holds packets and releases them at more regular intervals for smoother audio playback."
    },
    "tip": "A jitter buffer trades a little extra delay for smoother, more evenly timed VoIP playback. CompTIA A+ 220-1201 - Network Troubleshooting Page 17"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 16,
    "question": "Port flapping refers to a network port repeatedly alternating between up and down states.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A flapping port repeatedly loses and regains link, often producing erratic status changes on a switch or router.",
      "B": "Repeated transitions between link-up and link-down are exactly what the term port flapping describes."
    },
    "tip": "Port flapping = link up, link down, link up repeatedly. CompTIA A+ 220-1201 - Network Troubleshooting Page 18"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 17,
    "question": "Which are primary causes of port flapping? (Select 2 answers)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "Mismatched speed and duplex settings",
      "B": "Outdated device firmware",
      "C": "Excessive traffic on a network device",
      "D": "Loose, faulty, or unsupported network cabling",
      "E": "Incorrect network topology design"
    },
    "explanations": {
      "A": "A negotiation or duplex mismatch can create unstable link behavior and repeated connectivity problems.",
      "B": "Firmware can cause device issues, but it is not one of the two primary causes selected by the source.",
      "C": "Heavy traffic can cause congestion but does not normally make the physical port repeatedly lose link.",
      "D": "An unstable physical connection can repeatedly break and restore link, causing the port to flap.",
      "E": "Topology can create broader network problems, but it is not the direct cause selected here."
    },
    "tip": "Flapping ports often come from bad cabling or link-negotiation problems. CompTIA A+ 220-1201 - Network Troubleshooting Page 19"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 18,
    "question": "Which network issues are directly linked to port flapping? (Select 2 answers)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "Intermittent connectivity",
      "B": "Degraded data transfer speeds",
      "C": "High network latency",
      "D": "Permanent loss of connectivity",
      "E": "Excessive bandwidth usage"
    },
    "explanations": {
      "A": "Repeated link loss naturally causes sessions to disconnect and reconnect.",
      "B": "Frequent link interruptions and renegotiation reduce effective throughput and make transfers unreliable.",
      "C": "Latency can rise during disruptions, but it is not one of the two direct effects selected by the source.",
      "D": "Flapping is intermittent by definition; a permanently down link is a different condition.",
      "E": "Flapping does not inherently create unusually high bandwidth consumption."
    },
    "tip": "A flapping port creates unstable connectivity and poor effective transfer performance. CompTIA A+ 220-1201 - Network Troubleshooting Page 20"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 19,
    "question": "What is the recommended first step when troubleshooting port flapping?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Check physical connections",
      "B": "Restart the device",
      "C": "Disable all unused physical ports",
      "D": "Update the device's firmware"
    },
    "explanations": {
      "A": "Loose connectors and damaged cables are common, easy-to-test causes of repeated link transitions.",
      "B": "Restarting may temporarily reset the link but does not address a bad cable or connector.",
      "C": "Unused ports are unrelated to the specific port that is repeatedly losing link.",
      "D": "Firmware updates are a later step after basic physical-layer checks."
    },
    "tip": "For a flapping port, start at Layer 1 - reseat and test the cable and connectors. CompTIA A+ 220-1201 - Network Troubleshooting Page 21"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 20,
    "question": "What condition may lead to increased network latency?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Network congestion due to excessive traffic",
      "B": "Physical distance between sender and receiver",
      "C": "Wireless interference and signal degradation",
      "D": "Outdated or inefficient network hardware",
      "E": "All of the above"
    },
    "explanations": {
      "A": "Congestion can queue packets and increase delay, but it is not the only valid condition listed.",
      "B": "Longer transmission paths add propagation delay.",
      "C": "Interference can trigger retransmissions and increase effective delay.",
      "D": "Slow or overloaded hardware can add processing and forwarding delays.",
      "E": "Each listed condition can contribute to increased end-to-end network latency."
    },
    "tip": "Latency can come from congestion, distance, interference, or slow infrastructure - trace the whole path. CompTIA A+ 220-1201 - Network Troubleshooting Page 22"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 21,
    "question": "Which solution has no direct impact on decreasing network latency?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Use wired connections instead of wireless when possible",
      "B": "Reduce network congestion",
      "C": "Implement VLANs to segment network traffic",
      "D": "Reduce physical distance between network devices",
      "E": "Upgrade hardware and infrastructure"
    },
    "explanations": {
      "A": "Wired links can reduce interference and retransmission-related delay.",
      "B": "Less congestion reduces packet queuing and can lower latency.",
      "C": "VLANs logically segment broadcast domains and organize traffic, but simply creating VLANs does not directly reduce end-to-end latency.",
      "D": "Shorter paths can reduce propagation delay, especially over long distances.",
      "E": "Faster, more efficient network equipment can reduce processing and congestion-related delay."
    },
    "tip": "VLANs segment traffic logically; they are not automatically a latency-reduction feature. CompTIA A+ 220-1201 - Network Troubleshooting Page 23"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 22,
    "question": "Which network cabling is most susceptible to external interference?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "UTP",
      "B": "STP",
      "C": "Fiber optic",
      "D": "Coaxial"
    },
    "explanations": {
      "A": "Unshielded twisted-pair cable lacks an added conductive shield, making it more vulnerable to electromagnetic and radio-frequency interference than shielded or optical media.",
      "B": "Shielded twisted pair includes shielding specifically intended to reduce external interference.",
      "C": "Fiber carries light rather than electrical signals and is immune to electromagnetic interference.",
      "D": "Coaxial cable includes shielding around its conductor and is less susceptible than UTP."
    },
    "tip": "UTP is unshielded; STP and coax add shielding, while fiber does not use electrical signaling. CompTIA A+ 220-1201 - Network Troubleshooting Page 24"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 23,
    "question": "Which network cabling provides immunity against external electromagnetic interference?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "UTP",
      "B": "STP",
      "C": "Fiber optic",
      "D": "Coaxial"
    },
    "explanations": {
      "A": "UTP carries electrical signals and can be affected by EMI.",
      "B": "STP resists interference using shielding but is not completely immune.",
      "C": "Fiber transmits data as light through glass or plastic and is not affected by electromagnetic interference.",
      "D": "Coaxial shielding provides resistance to interference, but it still uses electrical signaling."
    },
    "tip": "Fiber is the EMI-proof choice because its data travels as light, not electricity. CompTIA A+ 220-1201 - Network Troubleshooting Page 25"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 24,
    "question": "For a wireless client to authenticate successfully, its Wi-Fi security and encryption settings must match the wireless access point.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The client and access point need compatible security settings, such as the same WPA mode and supported encryption, to establish authentication.",
      "B": "Mismatched security or encryption settings can prevent authentication even when the network is otherwise reachable."
    },
    "tip": "Wi-Fi authentication requires compatible security mode, encryption, and credentials on both sides. CompTIA A+ 220-1201 - Network Troubleshooting Page 26"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 25,
    "question": "Which can cause authentication failure even when the username and password are typed correctly?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Expired user password",
      "B": "User account locked out",
      "C": "Disabled or deleted user account",
      "D": "Time synchronization issues",
      "E": "All of the above"
    },
    "explanations": {
      "A": "An expired password can block authentication even if the user enters the remembered password correctly.",
      "B": "A locked account rejects authentication regardless of correct credentials.",
      "C": "An unavailable account cannot authenticate even with the former correct password.",
      "D": "Authentication systems such as Kerberos can reject requests when system clocks differ too much.",
      "E": "Every listed condition can cause authentication to fail despite correctly typed credentials."
    },
    "tip": "Correct credentials are only one requirement - account state and time synchronization can also control authentication. CompTIA A+ 220-1201 - Network Troubleshooting Page 27"
  },
  {
    "topic": "Network Troubleshooting",
    "number": 26,
    "question": "A small office has random Internet drops. Local cabling is intact, gateway pings remain successful, router and switch diagnostics pass, but the router logs repeated WAN-side signal loss. What is the most appropriate next step?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Restart the router",
      "B": "Modify firewall rules on the router",
      "C": "Run an Internet speed test",
      "D": "Contact the ISP"
    },
    "explanations": {
      "A": "The router is functioning locally and diagnostics pass; repeated WAN signal loss points beyond the internal network.",
      "B": "Firewall rules do not explain loss of the physical/service signal on the WAN interface.",
      "C": "A speed test may fail during an outage but does not address repeated WAN signal loss.",
      "D": "The LAN remains operational while the router reports WAN-side signal loss, so the service provider should investigate the external connection."
    },
    "tip": "LAN works but WAN signal drops = escalate toward the modem/ISP side, not the internal switch."
  },
  {
    "topic": "Network Types",
    "number": 1,
    "question": "A type of network connecting computers within a small geographical area such as a building or group of buildings is referred to as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "PAN",
      "B": "LAN",
      "C": "MAN",
      "D": "WAN"
    },
    "explanations": {
      "A": "A Personal Area Network covers a very short range around an individual and typically connects personal devices.",
      "B": "A Local Area Network connects computers and other devices within a limited area such as a home, office, school, or group of nearby buildings.",
      "C": "A Metropolitan Area Network spans a larger city-sized area and can interconnect multiple LANs.",
      "D": "A Wide Area Network covers large geographic distances and commonly connects networks across regions, countries, or continents."
    },
    "tip": "LAN = Local Area Network - think one home, office, building, or nearby group of buildings. CompTIA A+ 220-1201 - Network Types Page 3"
  },
  {
    "topic": "Network Types",
    "number": 2,
    "question": "A computer network connecting multiple smaller networks over very large geographical areas is known as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "MAN",
      "B": "LAN",
      "C": "WMN",
      "D": "WAN"
    },
    "explanations": {
      "A": "A MAN generally covers a metropolitan or city-sized area rather than very large geographic regions.",
      "B": "A LAN is limited to a relatively small local area.",
      "C": "A Wireless Mesh Network describes a wireless topology where nodes relay traffic through one another; it does not specifically mean a very large geographic network.",
      "D": "A Wide Area Network connects smaller networks across large geographic distances, such as between cities, states, countries, or continents."
    },
    "tip": "WAN = Wide Area Network - use it when many smaller networks are connected across long distances. CompTIA A+ 220-1201 - Network Types Page 4"
  },
  {
    "topic": "Network Types",
    "number": 3,
    "question": "The Internet is an example of a large public WAN.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The Internet interconnects networks around the world across enormous geographic distances, making it a major example of a public Wide Area Network.",
      "B": "False is incorrect because the Internet spans worldwide distances and links countless smaller networks, which matches the concept of a WAN."
    },
    "tip": "The Internet is the biggest familiar example of a public WAN. CompTIA A+ 220-1201 - Network Types Page 5"
  },
  {
    "topic": "Network Types",
    "number": 4,
    "question": "A type of limited-range computer network used for data transmission among various types of personal devices is called:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "BAN",
      "B": "PAN",
      "C": "SAN",
      "D": "CAN"
    },
    "explanations": {
      "A": "A Body Area Network focuses specifically on devices worn on or very near the human body.",
      "B": "A Personal Area Network connects nearby personal devices such as phones, laptops, headsets, and wearables over a short range.",
      "C": "A Storage Area Network provides specialized high-speed access to centralized storage devices.",
      "D": "A Campus Area Network connects networks across a campus or group of nearby organizational buildings."
    },
    "tip": "PAN = Personal Area Network - think short-range connections among one person's devices. CompTIA A+ 220-1201 - Network Types Page 6"
  },
  {
    "topic": "Network Types",
    "number": 5,
    "question": "A computer network connecting multiple LANs over an area of a city is referred to as:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "WAN",
      "B": "SAN",
      "C": "MAN",
      "D": "CAN"
    },
    "explanations": {
      "A": "A WAN usually covers much larger areas than a single city.",
      "B": "A SAN is a specialized network for shared storage, not a city-wide network.",
      "C": "A Metropolitan Area Network interconnects LANs across a metropolitan or city-sized geographic area.",
      "D": "A Campus Area Network normally covers a campus or group of nearby buildings, which is smaller than a metropolitan area."
    },
    "tip": "MAN = Metropolitan Area Network - think city-sized networking between LANs. CompTIA A+ 220-1201 - Network Types Page 7"
  },
  {
    "topic": "Network Types",
    "number": 6,
    "question": "Which of the following acronyms refers to a dedicated local network consisting of devices that provide centralized data access?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "SDN",
      "B": "NAS",
      "C": "iSCSI",
      "D": "SAN"
    },
    "explanations": {
      "A": "Software-Defined Networking is an architecture that separates network control from packet forwarding; it is not a dedicated storage network.",
      "B": "Network Attached Storage is a storage device or server connected to a normal network, not the dedicated network itself.",
      "C": "iSCSI is a protocol that carries SCSI storage commands over IP networks; it can be used within a SAN but is not the name of the network type.",
      "D": "A Storage Area Network is a dedicated high-speed network that connects servers to centralized storage resources and provides shared data access."
    },
    "tip": "SAN = Storage Area Network - a dedicated network that connects servers to centralized storage. CompTIA A+ 220-1201 - Network Types Page 8"
  },
  {
    "topic": "Network Types",
    "number": 7,
    "question": "Which term correctly describes a local network consisting of multiple computers and peripheral devices that communicate with each other using high-frequency radio waves across the area of a building or campus?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "WPAN",
      "B": "WMAN",
      "C": "WLAN",
      "D": "WWAN"
    },
    "explanations": {
      "A": "A Wireless Personal Area Network has a much shorter range and connects personal devices around an individual.",
      "B": "A Wireless Metropolitan Area Network spans a city or metropolitan region, which is larger than the local area described.",
      "C": "A Wireless Local Area Network uses Wi-Fi or similar radio technology to connect computers and peripherals across a local area such as a building or campus.",
      "D": "A Wireless Wide Area Network covers large geographic areas, commonly using cellular or other long-range wireless services."
    },
    "tip": "WLAN = wireless version of a LAN - Wi-Fi connects local devices without Ethernet cables."
  },
  {
    "topic": "Networking Tools",
    "number": 1,
    "question": "During the process of network cable termination, a crimper tool is used for attaching connectors onto cables by compressing the connector's metal contacts onto the exposed wires.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A crimper mechanically presses a modular connector onto a cable so the connector contacts make secure electrical contact with the conductors.",
      "B": "False is incorrect because attaching modular plugs to compatible network cable is exactly the job performed by a crimping tool."
    },
    "tip": "Crimper = attach the plug; punchdown tool = seat wires into IDC terminals. CompTIA A+ 220-1201 - Networking Tools Page 3"
  },
  {
    "topic": "Networking Tools",
    "number": 2,
    "question": "Which tool would be the most appropriate for removing electrical insulation cover from electric wires?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Needle-nose pliers",
      "B": "Crimper",
      "C": "Snips",
      "D": "Cable stripper"
    },
    "explanations": {
      "A": "Needle-nose pliers are useful for gripping, bending, and positioning small wires, but they are not designed to remove insulation cleanly.",
      "B": "A crimper attaches connectors to cable rather than removing the insulation jacket from conductors.",
      "C": "Snips cut wire or cable, but they do not provide the controlled insulation-removal function of a cable stripper.",
      "D": "A cable stripper is designed to remove insulation or cable jacket material while minimizing damage to the conductors underneath."
    },
    "tip": "Strip removes insulation; snip cuts; crimp attaches a connector. CompTIA A+ 220-1201 - Networking Tools Page 4"
  },
  {
    "topic": "Networking Tools",
    "number": 3,
    "question": "A Wi-Fi analyzer is not designed for:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Measuring the strength of the Wi-Fi signal",
      "B": "Detecting interference from other devices or networks",
      "C": "Capturing and inspecting network traffic data",
      "D": "Analyzing wireless channel usage"
    },
    "explanations": {
      "A": "Wi-Fi analyzers commonly display signal strength so technicians can evaluate wireless coverage.",
      "B": "A Wi-Fi analyzer can help identify congestion and interference that may affect wireless performance.",
      "C": "Detailed packet capture and inspection is the role of a protocol or packet analyzer. A Wi-Fi analyzer primarily examines wireless signal and channel conditions.",
      "D": "Channel utilization and neighboring Wi-Fi networks are common measurements provided by Wi-Fi analyzer tools."
    },
    "tip": "Wi-Fi analyzer checks RF conditions; packet analyzer inspects the actual network packets. CompTIA A+ 220-1201 - Networking Tools Page 5"
  },
  {
    "topic": "Networking Tools",
    "number": 4,
    "question": "Which hardware tool is specifically designed to trace and identify individual wires within a cable bundle?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Cable certifier",
      "B": "Line tester",
      "C": "Toner & probe kit",
      "D": "Wire mapper"
    },
    "explanations": {
      "A": "A cable certifier measures whether installed cabling meets defined performance standards; it is not primarily used to locate one cable in a bundle.",
      "B": "A line tester checks electrical or signal conditions on a line rather than locating a specific cable run.",
      "C": "A toner places a recognizable signal onto a wire or cable, and the probe detects that signal so a technician can trace and identify the correct cable.",
      "D": "A wire mapper checks conductor-to-pin relationships and wiring faults, but it is not the primary tool for tracing a cable through a bundle."
    },
    "tip": "Toner sends the identifying tone; probe follows the tone to find the cable. CompTIA A+ 220-1201 - Networking Tools Page 6"
  },
  {
    "topic": "Networking Tools",
    "number": 5,
    "question": "Which of the tools listed below is used for attaching network cables to a patch panel?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Cable crimper",
      "B": "Punchdown tool",
      "C": "Cable certifier",
      "D": "Needle-nose pliers"
    },
    "explanations": {
      "A": "A crimper is normally used to attach modular plugs such as RJ-45 connectors to cable ends, not to terminate conductors into patch-panel IDC slots.",
      "B": "A punchdown tool seats individual conductors into the insulation-displacement contacts on a patch panel and trims excess wire when supported by the blade.",
      "C": "A cable certifier tests installed cable performance after termination rather than physically attaching wires to the panel.",
      "D": "Pliers can manipulate wires but do not properly seat conductors into IDC terminals like a punchdown tool does."
    },
    "tip": "Patch panel or keystone IDC terminals = punchdown tool. CompTIA A+ 220-1201 - Networking Tools Page 7"
  },
  {
    "topic": "Networking Tools",
    "number": 6,
    "question": "Which of the following answers refers to a hardware tool used to verify the integrity and connectivity of network cables?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Cable tester",
      "B": "Toner & probe kit",
      "C": "Signal tracer",
      "D": "Bandwidth tester"
    },
    "explanations": {
      "A": "A cable tester verifies basic cable continuity and wiring so a technician can identify opens, shorts, crossed conductors, or other connectivity problems.",
      "B": "A toner and probe locates and traces cables; it does not primarily verify the complete integrity of the cable wiring.",
      "C": "A signal tracer helps follow or locate a signal path rather than performing the standard cable-integrity test described.",
      "D": "A bandwidth tester measures network throughput or capacity, not the physical continuity and pinout of a network cable."
    },
    "tip": "Cable tester checks whether the conductors are connected correctly from one end to the other. CompTIA A+ 220-1201 - Networking Tools Page 8"
  },
  {
    "topic": "Networking Tools",
    "number": 7,
    "question": "Which hardware tool is used to test the functionality of a NIC?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Signal tracer",
      "B": "Continuity tester",
      "C": "Multimeter",
      "D": "Loopback plug"
    },
    "explanations": {
      "A": "A signal tracer follows signals or cable paths and is not the standard tool for checking a NIC transmit/receive interface.",
      "B": "A continuity tester checks whether an electrical path is complete, usually in wiring, rather than exercising a NIC network interface.",
      "C": "A multimeter measures electrical quantities such as voltage, resistance, and current, but it does not provide the network loopback test expected here.",
      "D": "A loopback plug routes transmitted signals back into the receiving pins of the interface, allowing the NIC or port to be tested without a live network connection."
    },
    "tip": "Loopback sends the interface signal back to itself to test whether the port can transmit and receive. CompTIA A+ 220-1201 - Networking Tools Page 9"
  },
  {
    "topic": "Networking Tools",
    "number": 8,
    "question": "Which device enables network traffic monitoring without interrupting the data flow?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Transceiver",
      "B": "Repeater",
      "C": "Ethernet adapter",
      "D": "Network tap"
    },
    "explanations": {
      "A": "A transceiver transmits and receives network signals; its primary purpose is connectivity, not passive traffic monitoring.",
      "B": "A repeater regenerates or extends a network signal rather than providing a monitoring copy of traffic.",
      "C": "An Ethernet adapter connects a device to an Ethernet network; it is not specifically designed to provide transparent monitoring access.",
      "D": "A network tap is placed in the traffic path and provides a copy of network communications to monitoring or analysis equipment while allowing normal traffic to continue flowing."
    },
    "tip": "TAP = Traffic Access Point - copy traffic for monitoring without becoming the destination of that traffic."
  },
  {
    "topic": "Power Supply",
    "number": 1,
    "question": "Which of the answers listed below refers to the standard voltage range for most residential and commercial power outlets in the United States?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "110-120 VAC",
      "B": "120-140 VAC",
      "C": "210-220 VAC",
      "D": "220-240 VAC"
    },
    "explanations": {
      "A": "The source identifies 110-120 volts AC as the normal U.S. residential and commercial outlet range used for this exam question.",
      "B": "This range is above the standard nominal U.S. household supply range used by the quiz.",
      "C": "This higher range is not the standard U.S. outlet range identified by the source.",
      "D": "The source associates 220-240 VAC with European power outlets rather than standard U.S. outlets."
    },
    "tip": "U.S. outlets are about 120 VAC; Europe commonly uses about 230 VAC. CompTIA A+ 220-1201 - Power Supply Quiz Page 3"
  },
  {
    "topic": "Power Supply",
    "number": 2,
    "question": "What is the standard voltage range used for power outlets in Europe?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "110-120 VAC",
      "B": "120-140 VAC",
      "C": "210-220 VAC",
      "D": "220-240 VAC"
    },
    "explanations": {
      "A": "The source associates this lower range with standard U.S. power outlets.",
      "B": "This is not the standard European mains range identified by the quiz.",
      "C": "The source gives a broader 220-240 VAC range for Europe.",
      "D": "The quiz identifies 220-240 volts AC as the standard European power-outlet range."
    },
    "tip": "Europe = 220-240 VAC in this quiz; U.S. = 110-120 VAC. CompTIA A+ 220-1201 - Power Supply Quiz Page 4"
  },
  {
    "topic": "Power Supply",
    "number": 3,
    "question": "A PSU's operation can be adjusted to the supplied voltage either by using a manual voltage selector on the back of the unit or automatically by the device. PSUs equipped with a manual voltage selector are referred to as fixed-input devices, while PSUs offering automatic voltage adjustment are known as auto-switching PSUs.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source states that a PSU may use a manual input-voltage selector or automatically adapt to the incoming mains voltage.",
      "B": "False is incorrect because the source explicitly describes manual fixed-input selection and automatic voltage switching as valid PSU input methods."
    },
    "tip": "Check whether a PSU has a manual voltage switch or automatically accepts a wide input-voltage range. CompTIA A+ 220-1201 - Power Supply Quiz Page 5"
  },
  {
    "topic": "Power Supply",
    "number": 4,
    "question": "Which type of electric current is supplied to most of the internal PC components?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "AC",
      "B": "HVDC",
      "C": "DC",
      "D": "PFC"
    },
    "explanations": {
      "A": "The wall outlet supplies AC to the PSU, but the PSU converts it before powering internal PC electronics.",
      "B": "High-voltage DC is not the normal form of power supplied to ordinary internal PC components.",
      "C": "A PC power supply converts incoming AC mains power into regulated DC voltage rails used by internal components.",
      "D": "PFC means power factor correction; it is a PSU feature, not a type of electric current supplied to components."
    },
    "tip": "Wall outlet = AC; PSU output to PC components = DC. CompTIA A+ 220-1201 - Power Supply Quiz Page 6"
  },
  {
    "topic": "Power Supply",
    "number": 5,
    "question": "Which of the following PC components use circuits that operate at voltages up to 3.3V? (Select 2 answers)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "NVMe M.2 slots",
      "B": "RAM slots",
      "C": "Optical drives",
      "D": "Case fans",
      "E": "Graphics cards"
    },
    "explanations": {
      "A": "The source identifies NVMe M.2 circuitry as using the low-voltage 3.3V rail.",
      "B": "The source includes RAM circuitry among components operating at voltages up to 3.3V.",
      "C": "Optical drives use other PSU rails for their electronics and mechanical mechanisms rather than being the low-voltage choice in this question.",
      "D": "Case fans are typically associated with the 12V rail in the source.",
      "E": "Graphics cards commonly draw substantial power from 12V sources rather than being identified here as a 3.3V component."
    },
    "tip": "Low-voltage motherboard devices such as RAM and M.2 storage can use the 3.3V rail. CompTIA A+ 220-1201 - Power Supply Quiz Page 7"
  },
  {
    "topic": "Power Supply",
    "number": 6,
    "question": "Which of the PC components listed below operate on the 5V voltage rail?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Graphics cards",
      "B": "RAM slots",
      "C": "CPUs",
      "D": "USB ports and devices"
    },
    "explanations": {
      "A": "Graphics cards primarily rely on 12V power from the PCIe slot and auxiliary PCIe power connectors.",
      "B": "The source associates RAM circuitry with voltages up to 3.3V, not the 5V answer here.",
      "C": "Modern CPUs are powered through motherboard voltage-regulation circuitry fed mainly from 12V CPU power connections.",
      "D": "The source identifies USB ports and devices as the component category operating from the 5V rail."
    },
    "tip": "Standard USB power is closely associated with the 5V rail. CompTIA A+ 220-1201 - Power Supply Quiz Page 8"
  },
  {
    "topic": "Power Supply",
    "number": 7,
    "question": "Which of the following PC components typically draw power from the 12V voltage rail provided by the power supply? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "RAM slots",
      "B": "Mechanical parts (e.g., case fans, motors, actuators)",
      "C": "Graphics cards",
      "D": "PCIe expansion cards",
      "E": "Motherboard chipsets",
      "F": "USB ports and devices"
    },
    "explanations": {
      "A": "RAM operates at much lower voltages and is not one of the 12V choices in the source.",
      "B": "Motors and fans need relatively higher power, and the source identifies these mechanical components as 12V loads.",
      "C": "Graphics cards commonly draw 12V power through the motherboard slot and/or dedicated PCIe power connectors.",
      "D": "The source identifies PCIe expansion cards as devices that can draw from the 12V rail.",
      "E": "Chipset circuitry operates at lower regulated voltages and is not selected as a direct 12V load here.",
      "F": "The source associates USB ports and devices with the 5V rail."
    },
    "tip": "Think 12V for higher-power loads such as motors, fans, GPUs, and expansion hardware. CompTIA A+ 220-1201 - Power Supply Quiz Page 9"
  },
  {
    "topic": "Power Supply",
    "number": 8,
    "question": "Modern ATX motherboards use a 24-pin power connector. Some power supplies feature a 20+4-pin connector to maintain compatibility with both 20-pin and 24-pin motherboards. The 20+4 connector can be used fully assembled for 24-pin motherboards or with the 4-pin section left unattached for 20-pin motherboards.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A 20+4-pin ATX connector can combine into the modern 24-pin motherboard connection while allowing the detachable four-pin section to remain unused with older 20-pin boards.",
      "B": "False is incorrect because the modular 20+4 design exists specifically to support both 20-pin and 24-pin ATX motherboard power connections."
    },
    "tip": "20+4 ATX means the extra four pins can join the main plug for a 24-pin motherboard. CompTIA A+ 220-1201 - Power Supply Quiz Page 10"
  },
  {
    "topic": "Power Supply",
    "number": 9,
    "question": "Which of the devices listed below would be required for a load-balancing setup where supplied power is split between multiple PSUs that automatically share the load and provide backup in case of a PSU failure?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Standby UPS",
      "B": "Redundant power supply",
      "C": "Dual-power supply",
      "D": "Managed PDU"
    },
    "explanations": {
      "A": "A standby UPS supplies backup power when utility power fails; it does not make multiple internal PSUs automatically share a system load.",
      "B": "A redundant PSU configuration uses multiple power-supply modules that can share the load and maintain operation if one PSU fails.",
      "C": "Simply having two power supplies does not necessarily provide the automatic load sharing and failover described by the source.",
      "D": "A managed power distribution unit distributes and monitors external power but is not the redundant internal PSU system described."
    },
    "tip": "Redundant PSU = multiple power modules sharing the load with failover if one module fails. CompTIA A+ 220-1201 - Power Supply Quiz Page 11"
  },
  {
    "topic": "Power Supply",
    "number": 10,
    "question": "In a modular power supply, the cables can be detached and reattached as needed, providing the flexibility to only use the cables required for the system, which helps reduce cable clutter and promotes better airflow within the computer case.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Modular PSUs use detachable cable connections, allowing unused cables to be omitted and improving cable management and airflow.",
      "B": "False is incorrect because detachable cabling is the defining advantage of a modular power supply."
    },
    "tip": "Modular PSU = connect only the cables you need, reducing clutter inside the case. CompTIA A+ 220-1201 - Power Supply Quiz Page 12"
  },
  {
    "topic": "Power Supply",
    "number": 11,
    "question": "The power output rating of a PSU is measured in a unit known as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Volt",
      "B": "Hertz",
      "C": "Amp",
      "D": "Watt"
    },
    "explanations": {
      "A": "Volts measure electrical potential difference, not the total power-output rating of a PSU.",
      "B": "Hertz measures frequency, such as AC line frequency, rather than PSU output power.",
      "C": "Amperes measure electric current; PSU capacity is normally advertised as power.",
      "D": "Watts measure electrical power, so PC power supplies are rated by wattage, such as 500 W or 750 W."
    },
    "tip": "PSU capacity = watts; voltage is electrical potential and amps are current. CompTIA A+ 220-1201 - Power Supply Quiz Page 13"
  },
  {
    "topic": "Power Supply",
    "number": 12,
    "question": "When selecting a PSU with energy efficiency in mind, the most important factor to consider is the 80 PLUS certification. This program rates PSUs based on their efficiency at various load levels, ensuring that they meet a minimum efficiency threshold. To maximize energy efficiency, reduce wasted energy, and lower long-term electricity costs, it is advisable to choose a PSU with a higher 80 PLUS rating, such as Gold, Platinum, or Titanium. These certifications indicate that the PSU operates more efficiently, reducing both energy loss and operational costs.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source describes 80 PLUS as the PSU efficiency certification and notes that higher tiers such as Gold, Platinum, and Titanium indicate higher efficiency levels.",
      "B": "False is incorrect because the statement matches the source's explanation of 80 PLUS efficiency ratings and their role in reducing wasted energy."
    },
    "tip": "80 PLUS grades PSU efficiency; higher certification tiers indicate less energy wasted as heat under rated test conditions."
  },
  {
    "topic": "Printer",
    "number": 1,
    "question": "A prepackaged set of laser printer spare parts, typically including components with a limited lifespan that must be replaced to maintain consistent performance and prevent failures, is commonly referred to as:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Hardware replacement bundle",
      "B": "Printer service set",
      "C": "Maintenance kit",
      "D": "Service component pack"
    },
    "explanations": {
      "A": "This is not the standard printer-maintenance term used for a manufacturer-supplied group of periodic replacement parts.",
      "B": "This wording is not the recognized term identified by the source for scheduled laser-printer replacement components.",
      "C": "A maintenance kit is a packaged set of service parts such as rollers and other wear components that are replaced at recommended intervals.",
      "D": "This is not the standard term used by the source for the laser-printer replacement bundle."
    },
    "tip": "Laser printer maintenance kit = scheduled replacement parts for components that wear out over time. CompTIA A+ 220-1201 - Printer Quiz Page 3"
  },
  {
    "topic": "Printer",
    "number": 2,
    "question": "Before installing a new toner cartridge, it is recommended to gently rock it back and forth several times in a horizontal motion. This step facilitates the uniform distribution of toner powder within the cartridge, which in turn contributes to a consistent print density throughout the lifespan of the cartridge.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Gently rocking the cartridge redistributes toner powder so it is more evenly available to the cartridge mechanism, helping produce consistent density.",
      "B": "False is incorrect because the source explicitly recommends gentle horizontal rocking before installation to distribute toner."
    },
    "tip": "Gently rock a new toner cartridge side-to-side before installation; do not shake it aggressively. CompTIA A+ 220-1201 - Printer Quiz Page 4"
  },
  {
    "topic": "Printer",
    "number": 3,
    "question": "Which of the terms listed below refers to the process of adjusting a printer so that its output aligns accurately with the intended image or text and matches the expected color and print quality?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Fine-tuning",
      "B": "Validation",
      "C": "Standardization",
      "D": "Calibration"
    },
    "explanations": {
      "A": "Fine-tuning is a general phrase, but it is not the formal printer-adjustment term identified by the source.",
      "B": "Validation checks whether something meets requirements; it does not specifically describe printer alignment and color adjustment.",
      "C": "Standardization establishes consistent rules or specifications rather than adjusting a particular printer output.",
      "D": "Calibration adjusts printer alignment, color, and related output characteristics so printed results match expected quality."
    },
    "tip": "Calibration corrects printer alignment and color accuracy. CompTIA A+ 220-1201 - Printer Quiz Page 5"
  },
  {
    "topic": "Printer",
    "number": 4,
    "question": "Which of the following tools would be the most appropriate for cleaning the inside of a laser printer? (Select 3 answers)",
    "answers": [
      "A",
      "F"
    ],
    "options": {
      "A": "Toner vacuum",
      "B": "General household cleaners",
      "C": "Can of compressed air",
      "D": "Paper towels",
      "E": "Regular vacuum",
      "F": "Toner cleaning wipes"
    },
    "explanations": {
      "A": "A toner-rated vacuum is designed to safely collect very fine toner particles without spreading them through the printer or room.",
      "B": "Household cleaners can leave residue or damage sensitive printer components and are not appropriate internal cleaning products.",
      "C": "The source does not select compressed air; blowing toner can spread fine particles deeper into the printer and into the air.",
      "D": "Paper towels can shed fibers and may scratch or contaminate sensitive internal parts.",
      "E": "A normal household vacuum is not designed for fine toner and can create filtration or static-related problems.",
      "F": "Toner cleaning wipes are specifically designed to pick up toner residue safely from printer surfaces. G. Isopropyl alcohol - CORRECT Isopropyl alcohol can be used carefully on appropriate printer surfaces because it evaporates quickly and leaves little residue."
    },
    "tip": "Use toner-specific cleaning tools inside a laser printer; ordinary vacuums and household cleaners can cause problems. CompTIA A+ 220-1201 - Printer Quiz Page 6"
  },
  {
    "topic": "Printer",
    "number": 5,
    "question": "In an inkjet printer, the replaceable component used in the process of applying color to the page is called:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Thermal printhead",
      "B": "Ink cartridge",
      "C": "Drum unit",
      "D": "Transfer ribbon"
    },
    "explanations": {
      "A": "A thermal printhead is associated with thermal printing rather than being the replaceable ink supply in an inkjet printer.",
      "B": "The ink cartridge contains the consumable ink used by an inkjet printer to place color or black ink onto the page.",
      "C": "A drum unit is part of the electrophotographic process used by laser printers.",
      "D": "A transfer ribbon is used in other printing technologies and is not the standard ink supply for an inkjet printer."
    },
    "tip": "Inkjet consumable = ink cartridge; laser consumable = toner cartridge. CompTIA A+ 220-1201 - Printer Quiz Page 7"
  },
  {
    "topic": "Printer",
    "number": 6,
    "question": "Which of the answers listed below refers to an inkjet printer component that sprays microscopic droplets of ink through nozzles to form text or images on paper?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Imaging drum",
      "B": "Corona wire",
      "C": "Printhead",
      "D": "Fuser assembly"
    },
    "explanations": {
      "A": "An imaging drum carries an electrostatic image in a laser printer; it does not spray liquid ink.",
      "B": "A corona wire is associated with charging components in laser-printing systems.",
      "C": "The inkjet printhead contains tiny nozzles that eject microscopic ink droplets to build text and images.",
      "D": "The fuser uses heat and pressure to bond toner to paper in a laser printer."
    },
    "tip": "Inkjet printhead = tiny nozzles that place ink droplets on the page. CompTIA A+ 220-1201 - Printer Quiz Page 8"
  },
  {
    "topic": "Printer",
    "number": 7,
    "question": "A rubberized cylindrical component that grips and moves paper through the printing process in an inkjet printer is referred to as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Carriage",
      "B": "Roller",
      "C": "Feeder",
      "D": "Input tray"
    },
    "explanations": {
      "A": "The carriage moves the printhead or cartridges across the page rather than gripping and advancing paper.",
      "B": "A roller uses its rubberized surface to grip paper and move it through the printer path.",
      "C": "The feeder is the larger paper-feed mechanism; the question specifically describes the cylindrical gripping component.",
      "D": "The input tray stores paper before printing but does not itself grip and move sheets through the printer."
    },
    "tip": "Roller = rubber cylinder that grips paper; carriage = moves the inkjet printhead. CompTIA A+ 220-1201 - Printer Quiz Page 9"
  },
  {
    "topic": "Printer",
    "number": 8,
    "question": "Which component of an inkjet printer is responsible for picking up individual sheets of paper from the input tray and feeding them into the print path?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Output tray",
      "B": "Feeder",
      "C": "Carriage",
      "D": "Transfer belt"
    },
    "explanations": {
      "A": "The output tray receives finished pages after printing rather than picking up blank sheets.",
      "B": "The feeder separates and pulls individual sheets from the input tray into the printer path.",
      "C": "The carriage moves the printhead assembly across the paper and does not pick sheets from the tray.",
      "D": "A transfer belt is associated with toner-based printing systems, not normal inkjet paper pickup."
    },
    "tip": "Feeder starts the paper path by pulling a sheet from the input tray. CompTIA A+ 220-1201 - Printer Quiz Page 10"
  },
  {
    "topic": "Printer",
    "number": 9,
    "question": "Which of the following are valid methods for cleaning an inkjet printhead? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "Wiping the nozzles with a dry cotton swab to avoid introducing moisture",
      "B": "Applying acetone to the printhead for cleaning",
      "C": "Running a built-in cleaning function from the printer settings menu",
      "D": "Wiping the nozzles with a lint-free cloth or swab dampened with distilled water or isopropyl alcohol",
      "E": "Blowing compressed air into the nozzles at high pressure"
    },
    "explanations": {
      "A": "A dry cotton swab can leave fibers and may not dissolve dried ink effectively.",
      "B": "Acetone is a strong solvent that can damage plastics, coatings, seals, or other printhead materials.",
      "C": "The printer cleaning cycle pushes ink through the nozzles to clear minor clogs using the manufacturers intended process.",
      "D": "Careful cleaning with a lint-free material and an appropriate liquid can remove dried ink without leaving fibers.",
      "E": "High-pressure air can damage delicate nozzles or force debris further into the printhead."
    },
    "tip": "Try the printers built-in cleaning cycle first; manual cleaning should be gentle and lint-free. CompTIA A+ 220-1201 - Printer Quiz Page 11"
  },
  {
    "topic": "Printer",
    "number": 10,
    "question": "Most modern inkjet printers are designed to allow cartridge replacement while powered on, ensuring proper detection and alignment of new cartridges. While turning off the printer may be recommended for certain models, it is not universally required for ink cartridge replacement.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Many inkjet printers must be powered on so the carriage moves to the replacement position and the printer can detect or align the new cartridge.",
      "B": "False is incorrect because powering off is not a universal requirement; replacement procedures vary by model."
    },
    "tip": "Follow the printer model procedure - many inkjets need power on so the cartridge carriage moves into service position. CompTIA A+ 220-1201 - Printer Quiz Page 12"
  },
  {
    "topic": "Printer",
    "number": 11,
    "question": "What is the primary goal of inkjet calibration?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "To reduce ink consumption per page",
      "B": "To correct color printing errors and misalignments",
      "C": "To increase the speed of printing",
      "D": "To ensure compatibility with third-party ink cartridges"
    },
    "explanations": {
      "A": "Ink economy is controlled by print-quality settings such as Draft mode, not primarily by calibration.",
      "B": "Inkjet calibration aligns print output and can correct color-registration or positioning errors.",
      "C": "Calibration focuses on output accuracy and quality rather than increasing print speed.",
      "D": "Calibration does not make unsupported third-party cartridges compatible with the printer."
    },
    "tip": "Inkjet calibration fixes alignment and color-registration problems, not speed or ink usage. CompTIA A+ 220-1201 - Printer Quiz Page 13"
  },
  {
    "topic": "Printer",
    "number": 12,
    "question": "What should be checked for if an inkjet printer experiences frequent paper jams?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Obstruction in the paper path caused by foreign objects",
      "B": "Incorrect paper type or size",
      "C": "Paper tray overloading",
      "D": "Dirty, worn, or damaged paper feed rollers",
      "E": "All of the above"
    },
    "explanations": {
      "A": "Foreign objects can cause jams and should be checked, but the question includes several valid causes.",
      "B": "Unsupported or incorrectly sized paper can feed improperly, but it is only one of the listed causes.",
      "C": "Too much paper can prevent proper sheet separation and cause jams, but other listed causes are also valid.",
      "D": "Feed rollers that cannot grip paper correctly can create repeated jams, but this is one of several valid checks.",
      "E": "Obstructions, wrong paper, an overloaded tray, and damaged or dirty feed rollers can all cause frequent paper jams."
    },
    "tip": "Repeated paper jams require checking the entire feed path: paper, tray load, obstructions, and rollers. CompTIA A+ 220-1201 - Printer Quiz Page 14"
  },
  {
    "topic": "Printer",
    "number": 13,
    "question": "Which of the answers listed below refers to a thermal printer's component responsible for moving paper through the printer during the printing process?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Transfer belt",
      "B": "Paper guide",
      "C": "Feed assembly",
      "D": "Platen roller"
    },
    "explanations": {
      "A": "A transfer belt is used in some laser printers to transfer toner images, not to move thermal paper.",
      "B": "A paper guide keeps media aligned but is not the complete mechanism responsible for moving it through the printer.",
      "C": "The feed assembly advances thermal paper through the printer so it passes the heating element correctly.",
      "D": "A platen roller supports and can help move media, but the source identifies the overall feed assembly as the answer."
    },
    "tip": "Thermal printer feed assembly moves the paper; the printhead creates the image with heat. CompTIA A+ 220-1201 - Printer Quiz Page 15"
  },
  {
    "topic": "Printer",
    "number": 14,
    "question": "Which of the following steps are part of the feed assembly maintenance procedure? (Select 3 answers)",
    "answers": [
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "Replace the thermal paper roll",
      "B": "Clean the heating element with isopropyl alcohol",
      "C": "Reset the printer settings to factory defaults",
      "D": "Inspect the feed assembly for worn-out or misaligned rollers",
      "E": "Clean the rollers with a lint-free cloth and isopropyl alcohol to remove dust and debris",
      "F": "If paper feeding issues persist, consider replacing the feed rollers"
    },
    "explanations": {
      "A": "Changing consumable paper is normal operation, not one of the feed-assembly maintenance steps selected by the source.",
      "B": "Cleaning the heating element is printhead maintenance rather than feed-assembly maintenance.",
      "C": "A factory reset changes configuration and does not service worn or dirty feed components.",
      "D": "Inspection can identify rollers that are worn, damaged, or out of alignment and causing feed problems.",
      "E": "Cleaning restores roller grip by removing contamination that can cause slipping or jams.",
      "F": "Persistently worn feed rollers may require replacement after inspection and cleaning do not resolve the problem."
    },
    "tip": "Feed maintenance follows inspect, clean, then replace worn rollers if feeding problems continue. CompTIA A+ 220-1201 - Printer Quiz Page 16"
  },
  {
    "topic": "Printer",
    "number": 15,
    "question": "Thermal printers use a special type of paper coated with a heat-sensitive layer that responds to the heat of the printhead. When heated, this layer darkens, enabling the printer to produce text or images without using ink or toner.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Direct thermal printing uses chemically treated paper that darkens where the printhead applies heat, so no ink or toner is needed.",
      "B": "False is incorrect because the statement accurately describes direct thermal printing on heat-sensitive paper."
    },
    "tip": "Direct thermal printers create images with heat-sensitive paper instead of ink or toner. CompTIA A+ 220-1201 - Printer Quiz Page 17"
  },
  {
    "topic": "Printer",
    "number": 16,
    "question": "Maintaining a thermal printer involves storing thermal paper properly, cleaning the heating element, and removing dust and debris from rollers and paper feed areas as described in the source.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source recommends cool, dry paper storage away from heat and sunlight, periodic printhead cleaning, and regular cleaning of rollers/feed areas.",
      "B": "False is incorrect because these practices are specifically identified as thermal-printer maintenance steps in the source."
    },
    "tip": "Protect thermal paper from heat/light and keep both the printhead and paper path clean. CompTIA A+ 220-1201 - Printer Quiz Page 18"
  },
  {
    "topic": "Printer",
    "number": 17,
    "question": "Which printer type uses an inked ribbon to create text or images on paper?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Inkjet",
      "B": "Thermal",
      "C": "Impact",
      "D": "Laser"
    },
    "explanations": {
      "A": "Inkjet printers spray liquid ink through nozzles rather than striking an inked ribbon.",
      "B": "Direct thermal printers use heat-sensitive paper, not an inked impact ribbon.",
      "C": "Impact printers strike pins or another print mechanism against an inked ribbon to transfer characters or images to paper.",
      "D": "Laser printers use toner, an imaging drum, and a fuser rather than an inked ribbon."
    },
    "tip": "Impact printer = physical strike against an inked ribbon. CompTIA A+ 220-1201 - Printer Quiz Page 19"
  },
  {
    "topic": "Printer",
    "number": 18,
    "question": "Which type of printing paper is designed to create duplicate copies during the printing process?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Thermal",
      "B": "Duplex",
      "C": "Multipart",
      "D": "None of the above"
    },
    "explanations": {
      "A": "Thermal paper changes color with heat and is not specifically designed to make impact-created duplicate layers.",
      "B": "Duplex refers to printing on both sides of a sheet, not producing simultaneous duplicate copies.",
      "C": "Multipart paper uses layered forms so impact pressure can create multiple copies during a single print operation.",
      "D": "Multipart paper is specifically designed for this purpose, so None of the above is incorrect."
    },
    "tip": "Multipart forms work well with impact printers because the physical strike can create copies through multiple layers. CompTIA A+ 220-1201 - Printer Quiz Page 20"
  },
  {
    "topic": "Printer",
    "number": 19,
    "question": "Which of the signs listed below may indicate that a printer ribbon needs replacement? (Select 2 answers)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "Faded or light print output",
      "B": "Repetitive smudging of characters",
      "C": "Frequent paper jams",
      "D": "Characters appearing incomplete",
      "E": "Paper feeding too slowly"
    },
    "explanations": {
      "A": "A worn or depleted ribbon transfers less ink, causing output to become light or faded.",
      "B": "Smudging can have other mechanical or media causes and is not one of the source-selected ribbon replacement signs.",
      "C": "Paper jams are normally associated with the feed path, paper alignment, or rollers rather than ribbon ink depletion.",
      "D": "An exhausted or damaged ribbon can fail to transfer ink consistently, leaving characters incomplete.",
      "E": "Slow feeding points to the paper-feed mechanism rather than the condition of the inked ribbon."
    },
    "tip": "A worn impact ribbon usually shows up in the print itself - faded output or incomplete characters. CompTIA A+ 220-1201 - Printer Quiz Page 21"
  },
  {
    "topic": "Printer",
    "number": 20,
    "question": "Which of the following symptoms may indicate a failing impact printer printhead? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "D"
    ],
    "options": {
      "A": "Vertical lines or dots are missing in printouts",
      "B": "Misaligned printed output due to incorrect paper feed",
      "C": "Printed characters or images appear faint or with inconsistent darkness",
      "D": "Horizontal lines or dots are missing in printouts",
      "E": "Excessive noise during printer operation"
    },
    "explanations": {
      "A": "Missing vertical dots or lines can indicate printhead pins that are not firing correctly.",
      "B": "Paper-feed alignment problems point more toward tractor/feed setup than failed printhead pins.",
      "C": "A failing printhead can strike inconsistently, producing uneven or faint portions of characters and images.",
      "D": "Missing horizontal portions can also result when printhead pins fail to produce the expected dot pattern.",
      "E": "Noise can have several mechanical causes and is not one of the three print-quality symptoms selected by the source."
    },
    "tip": "Impact printhead problems often appear as missing dots/lines or uneven character darkness. CompTIA A+ 220-1201 - Printer Quiz Page 22"
  },
  {
    "topic": "Printer",
    "number": 21,
    "question": "Which best practices should be followed when handling paper for an impact printer? (Select 2 answers)",
    "answers": [
      "B",
      "C"
    ],
    "options": {
      "A": "Adjust the printhead tension to optimize paper feeding",
      "B": "Ensure perforated edges are properly positioned for continuous feeding",
      "C": "Align paper correctly in the tractor feed mechanism",
      "D": "Ensure the ribbon is well-saturated with ink before loading paper",
      "E": "Remove the perforated edges before printing to ensure smooth paper feeding"
    },
    "explanations": {
      "A": "Printhead tension is not the normal paper-loading practice selected by the source.",
      "B": "Continuous-feed paper must have its perforated tractor edges positioned correctly so it advances smoothly.",
      "C": "Correct tractor alignment keeps continuous paper straight and prevents skewing or feed errors.",
      "D": "Ribbon condition affects print darkness but is separate from proper paper handling.",
      "E": "The perforated edges contain the tractor-feed holes needed to move continuous paper and should remain in place during printing."
    },
    "tip": "For continuous impact-printer paper, line up the tractor holes and perforated edges before printing."
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 1,
    "question": "In laser printing, vertical lines appearing on each output page indicate a problem related to the:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Imaging drum",
      "B": "Printer driver",
      "C": "Fuser unit",
      "D": "Printhead nozzles"
    },
    "explanations": {
      "A": "The imaging drum forms the toner image for each page. Scratches, contamination, or defects on its surface can repeat in the same vertical area and create lines down the page.",
      "B": "A driver problem more commonly causes formatting, language, or communication errors rather than a consistent physical vertical line on every page.",
      "C": "The fuser bonds toner to paper. Fuser faults usually cause smearing, poor toner adhesion, or repeated marks rather than the source-selected vertical-line symptom.",
      "D": "Printhead nozzles are associated with inkjet printers, not the laser imaging process."
    },
    "tip": "Repeating laser print defects in the same position often point to the imaging path, especially the drum. CompTIA A+ 220-1201 - Printer Troubleshooting Page 3"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 2,
    "question": "Which troubleshooting step would resolve vertical lines on output pages of an inkjet printer?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Replace the imaging drum",
      "B": "Update printer drivers",
      "C": "Clean the printheads",
      "D": "Replace the toner cartridge"
    },
    "explanations": {
      "A": "Inkjet printers do not use a laser-printer imaging drum.",
      "B": "A driver update may solve software or formatting problems, but it does not clear physically clogged ink nozzles.",
      "C": "Clogged or dirty printhead nozzles can prevent ink from being deposited evenly, creating streaks or vertical lines.",
      "D": "Inkjet printers use ink cartridges, not toner cartridges."
    },
    "tip": "Inkjet streaks or missing lines often mean the printhead nozzles need cleaning. CompTIA A+ 220-1201 - Printer Troubleshooting Page 4"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 3,
    "question": "Garbled characters on printed pages typically indicate a problem with how the printer receives or interprets data.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Faulty drivers, corrupted print jobs, communication errors, mismatched PCL/PostScript settings, or interface problems can cause the printer to interpret incoming data incorrectly.",
      "B": "Garbled characters are commonly linked to data interpretation, driver, language, configuration, or communication problems."
    },
    "tip": "Garbled text points to the data path - driver, print language, job, cable, or configuration. CompTIA A+ 220-1201 - Printer Troubleshooting Page 5"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 5,
    "question": "Which steps are NOT best practices when clearing printer paper jams? (Select 2 answers)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "Open access doors and trays to view the paper path",
      "B": "Inspect the paper path for torn fragments or debris",
      "C": "Check for worn or dirty paper pickup rollers",
      "D": "Pull jammed paper with force in the opposite feed direction",
      "E": "Keep the printer powered on and start another job to clear the jam automatically",
      "F": "Power cycle the printer after clearing the jam"
    },
    "explanations": {
      "A": "Opening the proper service areas helps locate and safely remove jammed media.",
      "B": "Small scraps can trigger repeated jams, so checking for them is appropriate.",
      "C": "Roller condition can explain recurring feed problems and should be inspected.",
      "D": "Forcing paper backward can tear the sheet or damage rollers, sensors, and internal mechanisms.",
      "E": "Running the mechanism while paper is jammed can worsen the obstruction or damage components.",
      "F": "A restart can reset sensors and clear a jam status after the obstruction has been safely removed."
    },
    "tip": "Clear jams gently in the normal paper path and do not run the printer while it is still jammed. CompTIA A+ 220-1201 - Printer Troubleshooting Page 7"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 6,
    "question": "Which answer refers to a common cause of faded printouts in a laser printer?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Near-empty ink cartridges",
      "B": "Dried ink buildup in printhead nozzles",
      "C": "Low or uneven toner levels",
      "D": "Misaligned printheads"
    },
    "explanations": {
      "A": "Laser printers use toner, not liquid ink.",
      "B": "Printhead nozzles are an inkjet component.",
      "C": "Insufficient or unevenly distributed toner reduces the amount transferred to the page, producing light or faded output.",
      "D": "Laser printers do not use inkjet-style printheads."
    },
    "tip": "Faded laser pages - check toner level and distribution first. CompTIA A+ 220-1201 - Printer Troubleshooting Page 8"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 7,
    "question": "Which issues are common causes of faded printouts in inkjet printers? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Incorrect toner density",
      "B": "Worn-out drum unit",
      "C": "Low ink levels",
      "D": "Insufficient fuser heat",
      "E": "Clogged printhead nozzles"
    },
    "explanations": {
      "A": "Toner density applies to laser printing, not inkjet printing.",
      "B": "The drum is a laser-printer imaging component.",
      "C": "Insufficient ink can produce weak, incomplete, or faded output.",
      "D": "A fuser is used in laser printers to bond toner.",
      "E": "Blocked nozzles reduce or stop ink flow, causing faded areas or missing colors."
    },
    "tip": "Faded inkjet output usually starts with ink level and nozzle condition. CompTIA A+ 220-1201 - Printer Troubleshooting Page 9"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 8,
    "question": "Which can cause paper not feeding in a printer? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "Overloaded paper tray",
      "B": "Foreign objects or paper debris in the paper path",
      "C": "Worn or dirty paper feed rollers",
      "D": "Corrupted print spooler",
      "E": "Paper quality or type issues"
    },
    "explanations": {
      "A": "Too many sheets can prevent the pickup mechanism from separating and feeding paper correctly.",
      "B": "Debris can block the path or interfere with sensors and rollers.",
      "C": "Rollers need enough friction to grab and move the paper; dirt or wear can cause slipping.",
      "D": "The spooler manages print jobs in software and does not physically prevent paper pickup.",
      "E": "Paper that is too slick, curled, damp, thick, or otherwise unsuitable can fail to feed reliably."
    },
    "tip": "No paper feed = inspect the tray, media, paper path, and pickup/feed rollers. CompTIA A+ 220-1201 - Printer Troubleshooting Page 10"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 9,
    "question": "A printer frequently pulls two or more sheets at once. What should a technician check?",
    "answers": [
      "F"
    ],
    "options": {
      "A": "Paper quality issues",
      "B": "Worn or faulty separation pad",
      "C": "Overfilled paper tray",
      "D": "Worn or dirty pickup rollers",
      "E": "Humidity affecting paper",
      "F": "All of the above"
    },
    "explanations": {
      "A": "Poor or damp paper can make sheets stick, but it is only one possible cause.",
      "B": "The separation pad helps prevent multiple sheets from feeding together and can cause this symptom when worn.",
      "C": "An overfilled tray can interfere with proper separation and pickup.",
      "D": "Poor roller condition can lead to inconsistent paper pickup and multi-feeds.",
      "E": "Humidity can cause sheets to cling together.",
      "F": "Each listed condition can contribute to multiple sheets feeding at the same time."
    },
    "tip": "Multi-feeds are a paper-separation problem - check media, tray load, separation pad, rollers, and humidity. CompTIA A+ 220-1201 - Printer Troubleshooting Page 11"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 10,
    "question": "Several documents are stuck in the print queue and are not printing. What should a technician try first?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Clear all print jobs from the queue",
      "B": "Verify network connection status",
      "C": "Check for paper jams",
      "D": "Restart the Print Spooler service"
    },
    "explanations": {
      "A": "Deleting jobs can remove a bad job, but a frozen spooler service can prevent the queue from processing normally.",
      "B": "Network connectivity matters for a network printer, but multiple stuck jobs commonly point to the local print service.",
      "C": "A paper jam can stop printing, but the source-selected first response to a stuck software queue is the spooler.",
      "D": "Restarting the spooler clears a stalled print-processing service and often allows queued jobs to resume or be removed."
    },
    "tip": "Frozen Windows print queue - restart the Print Spooler service. CompTIA A+ 220-1201 - Printer Troubleshooting Page 12"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 11,
    "question": "What are the most common causes of speckling on printed pages in a laser printer? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Leaking toner cartridge",
      "B": "Paper dust, debris, or excess toner buildup",
      "C": "Contaminated or faulty imaging drum",
      "D": "Partially clogged printhead nozzles",
      "E": "Defective ink cartridge",
      "F": "Defective toner cartridge"
    },
    "explanations": {
      "A": "Loose toner can scatter onto paper and create random dark specks.",
      "B": "Contamination inside the print path can transfer small spots onto pages.",
      "C": "A dirty or damaged drum can repeatedly place unwanted toner marks on output.",
      "D": "Nozzles are an inkjet component and are not used by laser printers.",
      "E": "Laser printers use toner rather than ink cartridges.",
      "F": "A defective toner cartridge can cause defects, but the source specifically selects leaking toner, contamination, and the imaging drum as the three common causes."
    },
    "tip": "Laser speckles usually mean loose toner or contamination somewhere in the toner/drum paper path. CompTIA A+ 220-1201 - Printer Troubleshooting Page 13"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 12,
    "question": "An inkjet printer leaves small dark spots randomly across each page. What are the most probable causes? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Excess paper dust, debris, or ink residue on the paper path",
      "B": "Partial blockages or dirt in printhead nozzles",
      "C": "Leaking ink cartridge",
      "D": "Dirty or damaged drum unit"
    },
    "explanations": {
      "A": "Contamination can pick up wet ink and transfer random spots onto later sheets.",
      "B": "Dirty nozzles can cause irregular ink deposition and spotting.",
      "C": "A leaking cartridge can release excess ink that produces dark spots.",
      "D": "Inkjet printers do not use a laser imaging drum."
    },
    "tip": "Inkjet spots point to excess ink or contamination - inspect cartridges, nozzles, and the paper path. CompTIA A+ 220-1201 - Printer Troubleshooting Page 14"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 13,
    "question": "In laser printers, double or echo images can be caused by a residual latent image on the imaging drum being reused during the same print cycle.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Residual toner or charge on a worn/contaminated drum can repeat an earlier image. The fuser should also be checked because improper toner bonding can contribute to ghosting.",
      "B": "Ghost or echo images are a recognized laser-print defect associated with residual imaging and can also involve fuser problems."
    },
    "tip": "Laser ghosting = inspect the drum for residual image problems and verify the fuser is bonding toner correctly. CompTIA A+ 220-1201 - Printer Troubleshooting Page 15"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 14,
    "question": "In an inkjet printer, which issues are commonly associated with a grinding noise? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Worn, damaged, or misaligned paper feed rollers",
      "B": "Small paper pieces or foreign objects stuck in the paper path",
      "C": "Printhead carriage mechanism malfunction",
      "D": "Worn or damaged gears and bearings affecting the drum unit",
      "E": "Faulty or worn fuser rollers and bearings"
    },
    "explanations": {
      "A": "Damaged or misaligned rollers can bind against the paper path and create mechanical grinding.",
      "B": "Debris can contact moving parts and create scraping or grinding sounds.",
      "C": "A blocked or misaligned carriage can grind as its motor tries to move the printhead assembly.",
      "D": "A drum unit is associated with laser printers, not inkjet printers.",
      "E": "The fuser is a laser-printer component."
    },
    "tip": "Inkjet grinding comes from moving mechanics - feed rollers, paper-path obstructions, or the printhead carriage. CompTIA A+ 220-1201 - Printer Troubleshooting Page 16"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 15,
    "question": "Which issues should be investigated when a grinding noise is heard during laser printer operation? (Select all that apply)",
    "answers": [
      "B",
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Malfunctioning or obstructed printhead carriage",
      "B": "Faulty or worn fuser rollers and bearings",
      "C": "Worn or damaged gears and bearings affecting the imaging drum assembly",
      "D": "Small foreign objects or paper pieces stuck in the paper path",
      "E": "Improperly aligned, worn, or faulty paper feed rollers"
    },
    "explanations": {
      "A": "Laser printers do not use an inkjet-style moving printhead carriage.",
      "B": "The fuser contains moving rollers; worn bearings or rollers can produce grinding noises.",
      "C": "The laser imaging system uses driven mechanical parts that can grind when worn or damaged.",
      "D": "Debris can contact gears, rollers, or moving paper and produce mechanical noise.",
      "E": "Feed rollers are moving mechanical components and can grind when damaged or misaligned."
    },
    "tip": "Laser grinding means inspect moving parts - fuser, drum drive, feed rollers, and the paper path. CompTIA A+ 220-1201 - Printer Troubleshooting Page 17"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 16,
    "question": "On the CompTIA A+ exam, \"finishing issues\" refer to post-printing functions such as stapling and hole punching; staple jams can be cleared at the staple compartment, hole-punch waste containers can be emptied, and placement can be adjusted in software.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Finishing hardware performs operations after printing, so jams, waste containers, and placement settings are the relevant troubleshooting areas.",
      "B": "Stapling and hole punching are standard examples of printer finishing functions and their related problems."
    },
    "tip": "Finishing happens after the page is printed - think stapler, hole punch, and their waste/jam areas. CompTIA A+ 220-1201 - Printer Troubleshooting Page 18"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 17,
    "question": "Where is the best place to verify default page orientation settings?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Printer driver settings",
      "B": "Application settings",
      "C": "Print dialog options",
      "D": "Printer utility settings"
    },
    "explanations": {
      "A": "The printer driver's default preferences define persistent settings such as portrait or landscape for jobs unless an application overrides them.",
      "B": "An application can override orientation for a specific document, but it is not the best place to verify the printer's default setting.",
      "C": "Print dialog choices generally apply to the current print job rather than the printer's persistent defaults.",
      "D": "Printer utilities focus more on maintenance and device management than standard document orientation defaults."
    },
    "tip": "Persistent print defaults such as orientation are normally set in the printer driver preferences. CompTIA A+ 220-1201 - Printer Troubleshooting Page 19"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 18,
    "question": "Which is the least likely cause of a printer failing to recognize a paper tray?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Dirty or malfunctioning paper tray sensor",
      "B": "Lower-grade, inexpensive, or recycled paper",
      "C": "Printer settings that do not match paper type or size",
      "D": "Unseated or improperly inserted paper tray"
    },
    "explanations": {
      "A": "A bad sensor can prevent the printer from detecting that the tray is installed.",
      "B": "Paper quality can cause feed or print-quality problems, but it does not normally determine whether the printer recognizes the physical tray.",
      "C": "Incorrect tray/media configuration can make the printer report or use the tray incorrectly.",
      "D": "If the tray is not fully seated, its detection switch or sensor may not activate."
    },
    "tip": "Tray recognition depends on the tray, sensor, and configuration - not the brand or grade of paper inside it. CompTIA A+ 220-1201 - Printer Troubleshooting Page 20"
  },
  {
    "topic": "Printer Troubleshooting",
    "number": 20,
    "question": "Which action is least likely to solve a frozen print queue?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Restart the Print Spooler service",
      "B": "Manually cancel all pending jobs",
      "C": "Power cycle the computer and/or printer",
      "D": "Update or reinstall the printer driver/software",
      "E": "Change the printer's default output tray"
    },
    "explanations": {
      "A": "A stalled spooler is a common cause of frozen queues, so restarting it is directly relevant.",
      "B": "A corrupted or stuck job can block later jobs, so clearing the queue can help.",
      "C": "Restarting can clear temporary communication and service states.",
      "D": "Corrupt driver software can cause repeated queue problems and may need repair.",
      "E": "The selected output tray controls where printed pages exit and has little connection to whether the software print queue is frozen."
    },
    "tip": "Frozen queue = think spooler, stuck jobs, restart, or driver - not the physical output tray."
  },
  {
    "topic": "RAM",
    "number": 1,
    "question": "What is the most common memory module form factor used in laptops?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "ECC RAM",
      "B": "DIMM",
      "C": "SODIMM",
      "D": "CRIMM"
    },
    "explanations": {
      "A": "ECC describes an error-correction capability, not the physical laptop memory-module form factor.",
      "B": "Full-size DIMMs are most commonly used in desktop systems and are physically larger than typical laptop modules.",
      "C": "SODIMM is a compact DIMM form factor designed for space-constrained systems such as laptops.",
      "D": "CRIMM is a legacy continuity module associated with Rambus memory systems, not the common laptop RAM form factor."
    },
    "tip": "SODIMM = Small Outline DIMM; the smaller module is designed for laptops. CompTIA A+ 220-1201 - RAM Quiz Page 3"
  },
  {
    "topic": "RAM",
    "number": 2,
    "question": "Which type of RAM features separate electrical contacts on each side of the module?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "SRAM",
      "B": "DIMM",
      "C": "DRAM",
      "D": "SIMM"
    },
    "explanations": {
      "A": "SRAM describes how memory cells store data; it is not the module-contact form factor being asked about.",
      "B": "DIMM means Dual Inline Memory Module; the contacts on the two sides are electrically separate.",
      "C": "DRAM is a memory technology and can be packaged in different module forms; it does not specifically mean separate contacts on each side.",
      "D": "SIMM has matching electrical contacts on both sides, unlike a DIMM."
    },
    "tip": "DIMM = Dual Inline, so each side has independent contacts; SIMM contacts are mirrored. CompTIA A+ 220-1201 - RAM Quiz Page 4"
  },
  {
    "topic": "RAM",
    "number": 3,
    "question": "The placement of a notch on the RAM module contact surface ensures proper alignment of the module with the memory bank on the motherboard and prevents the installation of incompatible memory types.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "RAM generations use keyed notch positions so the module aligns correctly and an incompatible module cannot normally fit into the wrong slot.",
      "B": "False is incorrect because the notch is intentionally used as a physical key for orientation and compatibility."
    },
    "tip": "The RAM notch is a physical key - never force a module whose notch does not line up. CompTIA A+ 220-1201 - RAM Quiz Page 5"
  },
  {
    "topic": "RAM",
    "number": 4,
    "question": "Which of the answers listed below refer(s) to the characteristic feature(s) of Static Random-Access Memory (SRAM)? (Select all that apply)",
    "answers": [
      "B",
      "D",
      "F"
    ],
    "options": {
      "A": "Non-volatile storage media type",
      "B": "Faster than Dynamic Random-Access Memory (DRAM)",
      "C": "Widely used as the primary storage media (regular RAM modules installed in memory slots on the motherboard)",
      "D": "More expensive in comparison to Dynamic Random-Access Memory (DRAM)",
      "E": "Slower than Dynamic Random-Access Memory (DRAM)",
      "F": "Volatile storage media type"
    },
    "explanations": {
      "A": "SRAM is volatile and loses stored data when power is removed.",
      "B": "SRAM avoids the refresh cycle required by DRAM, allowing faster access.",
      "C": "Main system memory is normally DRAM because it provides much greater capacity at lower cost.",
      "D": "SRAM cells require more circuitry per bit, making SRAM more expensive than DRAM.",
      "E": "SRAM is generally faster, not slower, than DRAM.",
      "F": "SRAM requires continuous power to retain its data. G. Utilized for CPU cache memory chips - CORRECT Its very fast access makes SRAM suitable for processor cache memory. H. Less expensive in comparison to Dynamic Random-Access Memory (DRAM) - INCORRECT SRAM costs more per bit than DRAM."
    },
    "tip": "SRAM = Speedy, costly, volatile memory used for CPU cache. CompTIA A+ 220-1201 - RAM Quiz Page 6"
  },
  {
    "topic": "RAM",
    "number": 5,
    "question": "Which of the following answers describes(s) the characteristics of Dynamic Random-Access Memory (DRAM)? (Select all that apply)",
    "answers": [
      "A",
      "E",
      "F"
    ],
    "options": {
      "A": "Volatile storage media type",
      "B": "Utilized for CPU cache memory chips",
      "C": "More expensive in comparison to Static Random-Access Memory (SRAM)",
      "D": "Non-volatile storage media type",
      "E": "Slower than Static Random-Access Memory (SRAM)",
      "F": "Widely used as the primary storage media (regular RAM modules installed in memory slots on the motherboard)"
    },
    "explanations": {
      "A": "DRAM needs power to retain its contents, so it is volatile.",
      "B": "CPU caches are typically built from faster SRAM rather than DRAM.",
      "C": "DRAM is generally less expensive per bit than SRAM.",
      "D": "DRAM loses data when power is removed.",
      "E": "DRAM requires periodic refresh and is generally slower than SRAM.",
      "F": "Desktop and laptop main memory modules use DRAM technology because it offers high capacity economically. G. Faster than Static Random-Access Memory (SRAM) - INCORRECT SRAM is generally the faster technology. H. Less expensive in comparison to Static Random-Access Memory (SRAM) - CORRECT DRAM uses simpler cells and provides much lower cost per bit than SRAM."
    },
    "tip": "DRAM = main system RAM: cheaper and denser than SRAM, but slower and still volatile. CompTIA A+ 220-1201 - RAM Quiz Page 7"
  },
  {
    "topic": "RAM",
    "number": 6,
    "question": "The term \"Synchronous Dynamic Random-Access Memory (SDRAM)\" refers to a broad category of DRAM modules that rely on the signal sent by the system clock in order to coordinate their functioning with other internal PC components.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "SDRAM synchronizes memory operations with the system clock, coordinating data transfers with the memory controller.",
      "B": "False is incorrect because synchronization to a clock is the defining idea behind synchronous DRAM."
    },
    "tip": "The S in SDRAM means Synchronous - memory activity is coordinated with a clock. CompTIA A+ 220-1201 - RAM Quiz Page 8"
  },
  {
    "topic": "RAM",
    "number": 7,
    "question": "SDRAM's backward compatibility feature provides a convenient way to build PCs using different types of SDRAM modules.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Different DDR generations are physically and electrically incompatible and are not intended to be mixed on one normal motherboard.",
      "B": "DDR generations use different keying and electrical specifications, so a motherboard supports a specific compatible memory generation rather than arbitrary mixing."
    },
    "tip": "DDR generations do not mix - match the motherboard-supported DDR type. CompTIA A+ 220-1201 - RAM Quiz Page 9"
  },
  {
    "topic": "RAM",
    "number": 8,
    "question": "Which of the answers listed below refers to a valid SDRAM module combination that can be installed on a single PC motherboard?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "DDR3 + DDR2",
      "B": "DDR4 + DDR3",
      "C": "DDR5 + DDR4",
      "D": "Any of the above",
      "E": "None of the above"
    },
    "explanations": {
      "A": "DDR2 and DDR3 have different electrical and physical designs and are not a normal mixed-memory combination.",
      "B": "DDR3 and DDR4 use incompatible slot keying and electrical specifications.",
      "C": "DDR4 and DDR5 are different generations and cannot share the same standard memory slots.",
      "D": "None of the listed cross-generation combinations is valid on a normal single-generation motherboard.",
      "E": "The source identifies none of these mixed DDR-generation combinations as valid."
    },
    "tip": "Use one DDR generation supported by the motherboard; DDR2, DDR3, DDR4, and DDR5 are not interchangeable. CompTIA A+ 220-1201 - RAM Quiz Page 10"
  },
  {
    "topic": "RAM",
    "number": 9,
    "question": "Which of the following answers refer to the Double Data Rate 3 Synchronous Dynamic Random-Access Memory (DDR3 SDRAM)? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "16 GB maximum capacity per memory module",
      "B": "240 contact pins",
      "C": "A notch on the RAM module contact surface prevents the installation of incompatible memory types",
      "D": "288 contact pins",
      "E": "32 GB maximum capacity per memory module",
      "F": "Backwards compatible with earlier DDR SDRAM versions"
    },
    "explanations": {
      "A": "The source quiz identifies 16 GB as the DDR3 maximum module capacity for this question.",
      "B": "Desktop DDR3 DIMMs use 240 contacts.",
      "C": "DDR3 uses keyed notch placement to help prevent insertion into incompatible slots.",
      "D": "288 contacts are associated with later desktop DDR4 and DDR5 DIMMs in the source.",
      "E": "The source assigns 32 GB to DDR4 rather than DDR3.",
      "F": "DDR3 is not physically backward compatible with earlier DDR generations."
    },
    "tip": "For this quiz, DDR3 = 240 pins, up to 16 GB per module, and its own keyed notch. CompTIA A+ 220-1201 - RAM Quiz Page 11"
  },
  {
    "topic": "RAM",
    "number": 10,
    "question": "What are the characteristic features of the Double Data Rate 4 Synchronous Dynamic Random-Access Memory (DDR4 SDRAM)? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "D"
    ],
    "options": {
      "A": "32 GB maximum capacity per memory module",
      "B": "288 contact pins",
      "C": "64 GB maximum capacity per memory module",
      "D": "A notch on the RAM module contact surface prevents the installation of incompatible memory types",
      "E": "240 contact pins",
      "F": "Backwards compatible with earlier DDR SDRAM versions"
    },
    "explanations": {
      "A": "The source quiz identifies 32 GB as the DDR4 module capacity characteristic.",
      "B": "Desktop DDR4 DIMMs use 288 contacts.",
      "C": "The source assigns 64 GB to DDR5 for this comparison.",
      "D": "DDR4 has generation-specific keying that helps prevent installation into incompatible memory slots.",
      "E": "240 contacts are associated with DDR3 desktop DIMMs.",
      "F": "DDR4 cannot be installed in DDR3 or earlier slots because the generations are physically and electrically different."
    },
    "tip": "For this quiz, DDR4 = 288 pins, up to 32 GB per module, with generation-specific notch keying. CompTIA A+ 220-1201 - RAM Quiz Page 12"
  },
  {
    "topic": "RAM",
    "number": 11,
    "question": "Which of the answers listed below refer to Double Data Rate 5 Synchronous Dynamic Random-Access Memory (DDR5 SDRAM)? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Backwards compatible with earlier DDR SDRAM versions",
      "B": "64 GB maximum capacity per memory module",
      "C": "288 contact pins",
      "D": "A notch on the RAM module contact surface prevents the installation of incompatible memory types",
      "E": "240 contact pins",
      "F": "32 GB maximum capacity per memory module"
    },
    "explanations": {
      "A": "DDR5 is not physically backward compatible with DDR4 or earlier slots.",
      "B": "The source quiz identifies 64 GB as the DDR5 capacity characteristic for this question.",
      "C": "Desktop DDR5 DIMMs have 288 contacts, though their notch placement differs from DDR4.",
      "D": "DDR5 uses different keying so it cannot be inserted into a DDR4 slot despite sharing the same contact count.",
      "E": "240 contacts are associated with DDR3 desktop DIMMs.",
      "F": "The source associates 32 GB with DDR4 in this quiz."
    },
    "tip": "DDR4 and DDR5 both show 288 pins here, so the notch position is critical for telling incompatible generations apart. CompTIA A+ 220-1201 - RAM Quiz Page 13"
  },
  {
    "topic": "RAM",
    "number": 12,
    "question": "Certain types of RAM use an additional bit to detect whether a data error has occurred. This extra bit stores information about the count of bits set to 1 in a given data string. What is the name of that extra bit?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Checksum",
      "B": "Digest",
      "C": "CRC",
      "D": "Parity bit"
    },
    "explanations": {
      "A": "A checksum is a calculated value over a block of data rather than the single extra bit described.",
      "B": "A digest is generally a larger hash-derived value, not a one-bit even/odd count indicator.",
      "C": "A cyclic redundancy check uses a calculated multi-bit code for error detection rather than a single parity bit.",
      "D": "A parity bit records whether the number of 1 bits should be even or odd, allowing certain bit errors to be detected."
    },
    "tip": "Parity adds one checking bit to detect a change in the expected even/odd count of 1s. CompTIA A+ 220-1201 - RAM Quiz Page 14"
  },
  {
    "topic": "RAM",
    "number": 13,
    "question": "ECC type RAM:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Can only detect errors, but does not have the capability to correct them",
      "B": "Refers to parity RAM (the two terms are interchangeable)",
      "C": "Offers better performance in terms of speed when compared to a non-ECC type of RAM",
      "D": "Can detect and correct errors"
    },
    "explanations": {
      "A": "Simple parity can detect certain errors, while ECC memory is designed to correct supported memory errors as well.",
      "B": "Parity and ECC are related error-checking concepts but are not interchangeable terms.",
      "C": "ECC adds error-checking work and is generally not chosen for a speed advantage over non-ECC memory.",
      "D": "ECC stands for Error-Correcting Code and can detect and correct supported memory errors, improving data integrity."
    },
    "tip": "ECC = Error-Correcting Code; it is designed to detect and correct memory errors. CompTIA A+ 220-1201 - RAM Quiz Page 15"
  },
  {
    "topic": "RAM",
    "number": 14,
    "question": "ECC RAM finds extensive use in environments where data integrity is essential, such as in critical infrastructure, high-availability systems, and applications requiring precise error detection and correction. It prioritizes data integrity over cost and performance, making it more expensive and slightly slower than non-ECC RAM in most cases.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "ECC memory is commonly chosen where reliability and data integrity outweigh its additional cost and small performance overhead.",
      "B": "False is incorrect because the statement accurately reflects the reliability-focused role of ECC RAM described by the source."
    },
    "tip": "ECC trades a little cost and speed for stronger memory reliability and data integrity. CompTIA A+ 220-1201 - RAM Quiz Page 16"
  },
  {
    "topic": "RAM",
    "number": 15,
    "question": "Which of the following characteristics apply to the type of RAM most commonly used as the main system memory in desktop PCs? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "SODIMM",
      "B": "Non-ECC memory",
      "C": "Static RAM",
      "D": "MicroDIMM",
      "E": "Dynamic RAM",
      "F": "ECC memory"
    },
    "explanations": {
      "A": "SODIMM is a compact module form factor most commonly associated with laptops.",
      "B": "Typical consumer desktop PCs commonly use non-ECC memory rather than server-oriented ECC memory.",
      "C": "SRAM is mainly used for cache because it is fast but expensive, not for high-capacity desktop main memory.",
      "D": "MicroDIMM is a small form factor and is not the common desktop system-memory type.",
      "E": "Main system memory is based on DRAM technology, including DDR SDRAM generations.",
      "F": "ECC is more common in systems where error correction is a priority, such as many servers and workstations, rather than ordinary desktops."
    },
    "tip": "Typical desktop main memory = DRAM, usually non-ECC in consumer PCs. CompTIA A+ 220-1201 - RAM Quiz Page 17"
  },
  {
    "topic": "RAM",
    "number": 16,
    "question": "The color-coded memory slots on the motherboard indicate that a given motherboard provides support for the multi-channel memory architecture.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Color coding can identify paired or grouped memory slots intended for multi-channel population according to the motherboard layout.",
      "B": "False is incorrect because the source uses matching slot colors as an indicator for multi-channel memory placement."
    },
    "tip": "Matching slot colors can show which DIMM sockets belong together for multi-channel operation. CompTIA A+ 220-1201 - RAM Quiz Page 18"
  },
  {
    "topic": "RAM",
    "number": 17,
    "question": "Taking advantage of the performance benefits offered by the multi-channel memory architecture requires: (Select all that apply)",
    "answers": [
      "A",
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Memory modules of matching types",
      "B": "Installing memory modules in slots of opposite color on the motherboard",
      "C": "Memory modules of the same capacity",
      "D": "Installing modules in appropriate memory slots (slots of matching color) on the motherboard",
      "E": "Memory modules of matching speeds"
    },
    "explanations": {
      "A": "Modules should use compatible matching memory technology so the memory controller can operate them together correctly.",
      "B": "The source specifies the appropriate matching-color slots, not opposite-color slots.",
      "C": "Matching capacity helps create balanced memory channels.",
      "D": "Modules must be installed in the motherboard-designated paired or grouped slots for multi-channel operation.",
      "E": "Matching speeds help the modules operate consistently across the channels and avoid one module limiting the configuration."
    },
    "tip": "Multi-channel memory works best with matched type, capacity, and speed installed in the motherboard-designated paired slots."
  },
  {
    "topic": "Storage Devices",
    "number": 1,
    "question": "The platters in a magnetic hard drive spin at a rate measured in:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Revolutions per second",
      "B": "Iterations per minute",
      "C": "Revolutions per minute",
      "D": "Iterations per second"
    },
    "explanations": {
      "A": "Hard-drive spindle speed is conventionally specified per minute, not per second.",
      "B": "Iteration is not the measurement used for rotating HDD platters.",
      "C": "HDD spindle speed is expressed in RPM, meaning how many complete platter rotations occur each minute.",
      "D": "HDD rotation is measured in revolutions, not iterations."
    },
    "tip": "HDD speed labels such as 5400, 7200, and 15000 are RPM values. CompTIA A+ 220-1201 - Storage Devices Quiz Page 3"
  },
  {
    "topic": "Storage Devices",
    "number": 2,
    "question": "What is the maximum RPM value available in modern HDDs?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "10000",
      "B": "5400",
      "C": "15000",
      "D": "7200"
    },
    "explanations": {
      "A": "10,000 RPM enterprise drives exist, but the source identifies a higher maximum.",
      "B": "5400 RPM is a common lower-speed HDD value, especially for power-efficient drives.",
      "C": "The source identifies 15,000 RPM as the maximum value among the listed modern HDD speeds.",
      "D": "7200 RPM is common in desktop HDDs but is below 15,000 RPM."
    },
    "tip": "15K RPM is the high-end HDD spindle speed used in this quiz. CompTIA A+ 220-1201 - Storage Devices Quiz Page 4"
  },
  {
    "topic": "Storage Devices",
    "number": 3,
    "question": "Which of the answers listed below refers to a storage media drive form factor for laptop computers?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "1.8-inch",
      "B": "2.5-inch",
      "C": "3.5-inch",
      "D": "5.25-inch"
    },
    "explanations": {
      "A": "1.8-inch drives have existed, but the source identifies 2.5-inch as the standard laptop drive form factor.",
      "B": "2.5-inch drives are commonly used in laptops because their smaller size fits portable systems.",
      "C": "3.5-inch drives are the traditional desktop HDD form factor.",
      "D": "5.25-inch bays are associated with larger legacy devices such as optical drives, not typical laptop storage."
    },
    "tip": "2.5-inch = laptop drive; 3.5-inch = desktop HDD. CompTIA A+ 220-1201 - Storage Devices Quiz Page 5"
  },
  {
    "topic": "Storage Devices",
    "number": 4,
    "question": "Which of the following answers refers to an HDD form factor for desktops?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "1.8-inch",
      "B": "2.5-inch",
      "C": "3.5-inch",
      "D": "5.25-inch"
    },
    "explanations": {
      "A": "1.8-inch is a very small drive format and is not the standard desktop HDD size.",
      "B": "2.5-inch is commonly associated with laptops and many SATA SSDs.",
      "C": "3.5-inch is the standard traditional form factor for desktop hard disk drives.",
      "D": "5.25-inch describes a larger bay size historically used for optical drives and other devices."
    },
    "tip": "Desktop magnetic HDDs are typically 3.5-inch. CompTIA A+ 220-1201 - Storage Devices Quiz Page 6"
  },
  {
    "topic": "Storage Devices",
    "number": 5,
    "question": "Which of the statements listed below can be used to describe the features of NVMe? (Select 2 answers)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "Developed specifically for SSDs",
      "B": "Uses the PCIe interface for data transfer",
      "C": "Capped at a maximum data transfer rate of 6 Gbps",
      "D": "Designed as a general-purpose interface for various hardware devices",
      "E": "Optimized for multi-drive RAID configurations"
    },
    "explanations": {
      "A": "NVMe was designed for non-volatile solid-state storage and avoids legacy command structures built around mechanical disks.",
      "B": "NVMe SSDs communicate over PCI Express, providing high bandwidth and low latency.",
      "C": "The 6 Gbps limit is associated with SATA III, not PCIe-based NVMe.",
      "D": "PCIe is the general-purpose interface; NVMe is a storage protocol designed for non-volatile memory.",
      "E": "This description is more closely associated with enterprise storage technologies such as SAS rather than defining NVMe."
    },
    "tip": "NVMe = SSD-focused storage protocol running over PCIe. CompTIA A+ 220-1201 - Storage Devices Quiz Page 7"
  },
  {
    "topic": "Storage Devices",
    "number": 6,
    "question": "Which of the following answers does not apply to the SATA interface?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Common in 2.5-inch SSDs replacing traditional HDDs",
      "B": "Widely used in consumer-grade laptops and desktops",
      "C": "An older interface originally designed for mechanical hard drives",
      "D": "Capped at a maximum data transfer rate of 6 Gbps",
      "E": "All of the above statements accurately describe the SATA interface"
    },
    "explanations": {
      "A": "SATA is widely used by 2.5-inch SSDs designed as replacements for hard drives.",
      "B": "SATA has been a common consumer storage interface in both desktops and laptops.",
      "C": "SATA predates widespread SSD adoption and was originally used heavily with HDDs.",
      "D": "SATA III has a 6 Gbps theoretical signaling limit.",
      "E": "Because A through D all apply to SATA in the source, this is the answer to the question asking what does not apply."
    },
    "tip": "SATA is an older 6-Gbps storage interface used by both HDDs and 2.5-inch SSDs. CompTIA A+ 220-1201 - Storage Devices Quiz Page 8"
  },
  {
    "topic": "Storage Devices",
    "number": 7,
    "question": "PCIe is a general-purpose, high-speed interface that serves as the backbone for NVMe SSDs and other high-performance hardware devices.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "PCIe is a high-speed expansion interconnect used by NVMe storage as well as GPUs, network adapters, and other devices.",
      "B": "False is incorrect because NVMe commonly relies on PCIe for its high-bandwidth connection."
    },
    "tip": "PCIe is the highway; NVMe is a storage protocol that can travel on it. CompTIA A+ 220-1201 - Storage Devices Quiz Page 9"
  },
  {
    "topic": "Storage Devices",
    "number": 8,
    "question": "What are the key features of SAS? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Designed for systems requiring high redundancy, error correction, and uptime",
      "B": "Optimized for multi-drive configurations in a daisy-chain topology",
      "C": "Commonly implemented in mission-critical environments like servers and data centers",
      "D": "Widely used in 2.5-inch SSDs replacing traditional HDDs",
      "E": "Developed specifically for high-throughput, low-latency flash storage environments"
    },
    "explanations": {
      "A": "SAS is an enterprise-oriented storage interface designed for reliable operation in systems where availability matters.",
      "B": "SAS supports enterprise multi-drive connectivity and expansion through SAS infrastructure.",
      "C": "SAS drives and controllers are widely associated with enterprise servers and data centers.",
      "D": "This consumer replacement role is more strongly associated with SATA SSDs.",
      "E": "That description fits NVMe more closely than SAS."
    },
    "tip": "SAS = enterprise storage focused on reliability, uptime, and multi-drive server environments. CompTIA A+ 220-1201 - Storage Devices Quiz Page 10"
  },
  {
    "topic": "Storage Devices",
    "number": 9,
    "question": "An M.2 key is a notch on the pin contact surface of an M.2 expansion card which prevents its insertion into an incompatible socket. B-keyed SSDs use 2 PCIe lanes, M-keyed SSDs use 4 PCIe lanes, and B+M cards improve slot compatibility.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement matches the source explanation of M.2 keying, including B, M, and B+M notch arrangements and their compatibility purpose.",
      "B": "False is incorrect because the source presents this M.2 keying description as accurate."
    },
    "tip": "M.2 key notches control compatibility; M-key storage can use more PCIe lanes than B-key in this quiz. CompTIA A+ 220-1201 - Storage Devices Quiz Page 11"
  },
  {
    "topic": "Storage Devices",
    "number": 10,
    "question": "Which of the answers listed below refers to an older, portable device SSD form factor superseded by M.2?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "mSATA",
      "B": "NVMe",
      "C": "SATA Express",
      "D": "mPCIe"
    },
    "explanations": {
      "A": "mSATA was a compact SSD form factor used in portable systems before M.2 became the more common replacement.",
      "B": "NVMe is a storage protocol, not the older physical form factor being asked about.",
      "C": "SATA Express was a storage interface/connector approach rather than the portable SSD form factor identified here.",
      "D": "Mini PCIe is an expansion-card interface and is not the source answer for the SSD form factor superseded by M.2."
    },
    "tip": "mSATA came before M.2 as a compact SSD form factor. CompTIA A+ 220-1201 - Storage Devices Quiz Page 12"
  },
  {
    "topic": "Storage Devices",
    "number": 11,
    "question": "Which of the following answers refer(s) to a standard form factor for SSDs? (Select all that apply)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "iSCSI",
      "B": "M.2",
      "C": "MicroSD",
      "D": "PCI-X",
      "E": "mSATA"
    },
    "explanations": {
      "A": "iSCSI is a network storage protocol, not a physical SSD form factor.",
      "B": "M.2 is a compact card form factor widely used for SATA and PCIe/NVMe SSDs.",
      "C": "MicroSD is a removable memory-card format, not a standard SSD drive form factor in this question.",
      "D": "PCI-X is a legacy expansion-bus standard, not an SSD form factor.",
      "E": "mSATA is a compact SSD form factor that predates widespread M.2 adoption."
    },
    "tip": "M.2 and mSATA describe compact SSD form factors; NVMe describes a protocol. CompTIA A+ 220-1201 - Storage Devices Quiz Page 13"
  },
  {
    "topic": "Storage Devices",
    "number": 12,
    "question": "Hardware RAID Level 0: (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Requires a minimum of 2 drives to implement",
      "B": "Is also known as disk striping",
      "C": "Decreases reliability (failure of any disk in the array results in the loss of all data in the array)",
      "D": "Is also referred to as disk mirroring",
      "E": "Provides less usable capacity compared to RAID 1",
      "F": "Requires at least 3 drives to implement"
    },
    "explanations": {
      "A": "RAID 0 stripes data across at least two drives.",
      "B": "RAID 0 divides data into stripes distributed across the member drives.",
      "C": "Because RAID 0 has no redundancy, losing one member can make the entire striped data set unusable.",
      "D": "Disk mirroring describes RAID 1, not RAID 0.",
      "E": "RAID 0 uses the combined capacity of its member drives and therefore provides more usable capacity than an equivalent RAID 1 mirror.",
      "F": "Only two drives are required for RAID 0. G. Is suitable for systems where performance takes precedence over fault tolerance - CORRECT Striping improves performance but provides no fault tolerance, so RAID 0 fits performance-first uses. H. Enhances reliability by duplicating data across all drives - INCORRECT RAID 0 does not duplicate data; mirroring is a RAID 1 feature."
    },
    "tip": "RAID 0 = striping for speed and capacity, but zero redundancy. CompTIA A+ 220-1201 - Storage Devices Quiz Page 14"
  },
  {
    "topic": "Storage Devices",
    "number": 13,
    "question": "Hardware RAID Level 1: (Select 3 answers)",
    "answers": [
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "Requires at least 3 drives to implement",
      "B": "Is also known as disk striping",
      "C": "Offers better performance than RAID 0",
      "D": "Requires at least 2 drives to implement",
      "E": "Improves reliability by duplicating data on each drive",
      "F": "Is also referred to as disk mirroring"
    },
    "explanations": {
      "A": "RAID 1 can be implemented with two drives.",
      "B": "Striping describes RAID 0; RAID 1 uses mirroring.",
      "C": "RAID 0 is the performance-focused level in the source and avoids mirroring overhead.",
      "D": "A basic RAID 1 mirror needs two drives so the same data can be stored on both.",
      "E": "Mirroring keeps duplicate copies so data remains available if one mirrored drive fails.",
      "F": "RAID 1 is the standard mirrored RAID level."
    },
    "tip": "RAID 1 = two-drive minimum and mirrored copies for fault tolerance. CompTIA A+ 220-1201 - Storage Devices Quiz Page 15"
  },
  {
    "topic": "Storage Devices",
    "number": 14,
    "question": "Hardware RAID Level 5: (Select 3 answers)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "Requires at least 2 drives to implement",
      "B": "Can withstand the failure of more than one drive",
      "C": "Is also known as disk striping with double parity",
      "D": "Requires at least 3 drives to implement",
      "E": "Offers both increased performance and fault tolerance",
      "F": "Requires at least 4 drives to implement"
    },
    "explanations": {
      "A": "RAID 5 requires at least three drives to distribute data and parity.",
      "B": "Standard RAID 5 tolerates one drive failure, not multiple simultaneous failures.",
      "C": "Double parity describes RAID 6.",
      "D": "At least three drives are needed for RAID 5 data striping plus distributed parity.",
      "E": "Striping improves performance while distributed parity allows recovery from one failed drive.",
      "F": "Four drives may be used, but the minimum is three. G. Is also known as disk striping with parity - CORRECT RAID 5 combines block-level striping with distributed single parity."
    },
    "tip": "RAID 5 = 3-drive minimum, striping + single parity, survives one drive failure. CompTIA A+ 220-1201 - Storage Devices Quiz Page 16"
  },
  {
    "topic": "Storage Devices",
    "number": 15,
    "question": "Hardware RAID Level 6: (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "Is also known as disk striping with parity",
      "B": "Requires at least 4 drives to implement",
      "C": "Offers increased performance and fault tolerance (up to 2 drive failures can be tolerated without data loss)",
      "D": "Requires at least 3 drives to implement",
      "E": "Is also known as disk striping with double parity",
      "F": "Can continue operating after more than 2 drive failures"
    },
    "explanations": {
      "A": "Single-parity striping is RAID 5; RAID 6 uses double parity.",
      "B": "RAID 6 needs at least four drives to provide data striping and two independent parity values.",
      "C": "Double parity allows RAID 6 to continue operating after as many as two drive failures.",
      "D": "Three drives are insufficient for RAID 6's double-parity design.",
      "E": "RAID 6 extends RAID 5 by adding a second parity calculation.",
      "F": "RAID 6 is designed to tolerate up to two drive failures, not more than two in general. G. Requires at least 5 drives to implement - INCORRECT Five drives can be used, but the minimum in the source is four."
    },
    "tip": "RAID 6 = RAID 5 plus a second parity set, so it can tolerate two failed drives. CompTIA A+ 220-1201 - Storage Devices Quiz Page 17"
  },
  {
    "topic": "Storage Devices",
    "number": 16,
    "question": "Hardware RAID Level 10 (a.k.a. RAID 1+0): (Select 3 answers)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "Requires a minimum of 4 drives to implement",
      "B": "Is known as a stripe of mirrors, combining RAID 1 (striping) with RAID 0 (mirroring)",
      "C": "Requires a minimum of 5 drives to implement",
      "D": "Offers increased performance and fault tolerance (the array can survive the failure of one drive in each mirrored pair)",
      "E": "Requires a minimum of 3 drives to implement",
      "F": "Can continue operating after more than 2 drive failures, regardless of which drives fail"
    },
    "explanations": {
      "A": "RAID 10 needs at least two mirrored pairs, requiring four drives.",
      "B": "The RAID functions are reversed in this statement: RAID 1 is mirroring and RAID 0 is striping.",
      "C": "RAID 10 requires four drives, not five.",
      "D": "Striping improves performance while each mirrored pair provides redundancy; failures can be tolerated when they do not destroy the same mirror pair.",
      "E": "Three drives cannot form the two mirrored pairs required for standard RAID 10.",
      "F": "RAID 10 failure tolerance depends on which drives fail; losing both members of one mirror pair can break the array. G. Is known as a stripe of mirrors, combining RAID 1 (mirroring) with RAID 0 (striping) - CORRECT RAID 10 mirrors drives with RAID 1 and stripes across those mirrored sets with RAID 0."
    },
    "tip": "RAID 10 = stripe across mirrored pairs: RAID 1 protection plus RAID 0 performance. CompTIA A+ 220-1201 - Storage Devices Quiz Page 18"
  },
  {
    "topic": "Storage Devices",
    "number": 17,
    "question": "Which of the RAID levels listed below does not provide fault tolerance?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "RAID 6",
      "B": "RAID 10",
      "C": "RAID 5",
      "D": "RAID 0",
      "E": "RAID 1"
    },
    "explanations": {
      "A": "RAID 6 uses double parity and provides fault tolerance.",
      "B": "RAID 10 uses mirrored pairs and provides redundancy.",
      "C": "RAID 5 uses parity and can tolerate one failed drive.",
      "D": "RAID 0 only stripes data and has no redundant copy or parity, so any drive failure can destroy the array.",
      "E": "RAID 1 mirrors data and therefore provides fault tolerance."
    },
    "tip": "RAID 0 is the only common RAID level here with no fault tolerance. CompTIA A+ 220-1201 - Storage Devices Quiz Page 19"
  },
  {
    "topic": "Storage Devices",
    "number": 18,
    "question": "In a configuration using the minimum required number of drives, which two of the following RAID levels provide the highest amount of usable storage space?",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "RAID 1",
      "B": "RAID 0",
      "C": "RAID 6",
      "D": "RAID 10",
      "E": "RAID 5"
    },
    "explanations": {
      "A": "With two equal drives, RAID 1 uses half the raw capacity for the mirrored copy.",
      "B": "RAID 0 has no redundancy, so all member-drive capacity is usable.",
      "C": "With its four-drive minimum, two drives' worth of capacity is consumed by double parity.",
      "D": "RAID 10 mirrors each pair, leaving about half of the raw capacity usable.",
      "E": "With the minimum three drives, RAID 5 uses one drive-equivalent for parity and leaves two drive-equivalents usable."
    },
    "tip": "Minimum-drive capacity: RAID 0 wastes none on redundancy; RAID 5 uses one drive-equivalent for parity. CompTIA A+ 220-1201 - Storage Devices Quiz Page 20"
  },
  {
    "topic": "Storage Devices",
    "number": 19,
    "question": "Which of the RAID levels listed below provides the greatest level of redundancy?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "RAID 5",
      "B": "RAID 6",
      "C": "RAID 10",
      "D": "RAID 1",
      "E": "RAID 0"
    },
    "explanations": {
      "A": "RAID 5 tolerates one drive failure through single parity.",
      "B": "RAID 6 uses double parity and can tolerate two drive failures, giving the strongest redundancy among the listed source choices.",
      "C": "RAID 10 is highly resilient, but its survival depends on which mirrored drives fail; the source selects RAID 6.",
      "D": "RAID 1 mirrors data but a basic two-drive mirror tolerates one failed drive.",
      "E": "RAID 0 provides no redundancy at all."
    },
    "tip": "RAID 6 = double parity and two-drive-failure tolerance. CompTIA A+ 220-1201 - Storage Devices Quiz Page 21"
  },
  {
    "topic": "Storage Devices",
    "number": 20,
    "question": "Which of the following RAID levels offers the best performance?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "RAID 0",
      "B": "RAID 5",
      "C": "RAID 1",
      "D": "RAID 6",
      "E": "RAID 10"
    },
    "explanations": {
      "A": "RAID 0 stripes data across drives without parity or mirroring overhead, making it the performance-focused choice in the source.",
      "B": "RAID 5 adds parity calculations and writes, trading some performance for fault tolerance.",
      "C": "RAID 1 duplicates writes to mirrored drives and is selected for redundancy rather than maximum performance.",
      "D": "Double parity creates more write overhead than RAID 5.",
      "E": "RAID 10 offers strong performance and redundancy, but the source identifies RAID 0 as the best-performance level."
    },
    "tip": "RAID 0 is fastest here because it stripes without redundancy or parity overhead. CompTIA A+ 220-1201 - Storage Devices Quiz Page 22"
  },
  {
    "topic": "Storage Devices",
    "number": 21,
    "question": "Which of the answers listed below accurately describe(s) the characteristics of flash drives? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "Plug-and-play across most devices supporting USB",
      "B": "Non-volatile, rewritable storage media type",
      "C": "Solid-state memory technology (containing no mechanical moving parts)",
      "D": "Primarily designed to expand storage capacity of compact electronics",
      "E": "Designed for general purpose file transfer and storage",
      "F": "Compatible with dedicated slots or card readers"
    },
    "explanations": {
      "A": "USB flash drives are designed for easy connection to USB-capable systems and are generally recognized without complex installation.",
      "B": "Flash memory retains data without power and can be erased and written again.",
      "C": "Flash drives store data electronically in solid-state memory rather than on moving disks.",
      "D": "That role is more characteristic of memory cards installed in phones, cameras, and other compact devices.",
      "E": "USB flash drives are commonly used to move and store files between computers and other USB-capable devices.",
      "F": "Dedicated card slots/readers are characteristic of memory cards rather than ordinary USB flash drives."
    },
    "tip": "USB flash drive = solid-state, rewritable, non-volatile, and convenient for general file transfer. CompTIA A+ 220-1201 - Storage Devices Quiz Page 23"
  },
  {
    "topic": "Storage Devices",
    "number": 22,
    "question": "Which of the following features differentiate memory cards from flash drives? (Select all that apply)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "Compatible with dedicated slots or card readers",
      "B": "Primarily designed to expand storage capacity of compact electronics",
      "C": "Designed for general-purpose file transfer and storage",
      "D": "Non-volatile, rewritable storage media type",
      "E": "Solid-state memory technology (containing no mechanical moving parts)",
      "F": "Plug-and-play across most devices supporting USB"
    },
    "explanations": {
      "A": "Memory cards are inserted into matching device slots or card readers instead of using a built-in USB plug.",
      "B": "Cards such as SD and microSD are commonly used to add storage to cameras and other compact devices.",
      "C": "That description is more characteristic of USB flash drives in the source comparison.",
      "D": "Both memory cards and flash drives share this property, so it does not differentiate them.",
      "E": "Both device types use solid-state flash memory.",
      "F": "That characteristic describes USB flash drives rather than memory cards, which require compatible slots/readers."
    },
    "tip": "Memory cards are made for card slots and compact-device storage; USB flash drives are made for easy USB file transfer. CompTIA A+ 220-1201 - Storage Devices Quiz Page 24"
  },
  {
    "topic": "Storage Devices",
    "number": 23,
    "question": "Due to space limitations, the shift to digital content, and the rise of faster storage alternatives, modern laptops no longer include a built-in version of this storage medium.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "M.2 SATA drives",
      "B": "Optical drives",
      "C": "PCIe NVMe drives",
      "D": "eSATA drives"
    },
    "explanations": {
      "A": "M.2 storage is compact and remains suitable for modern laptops.",
      "B": "Built-in CD/DVD optical drives have largely disappeared from modern laptops because they consume space and physical media is used less often.",
      "C": "NVMe SSDs are a common modern laptop storage technology rather than a removed legacy medium.",
      "D": "eSATA is an external storage interface and is not the built-in storage medium described."
    },
    "tip": "Thin modern laptops commonly dropped built-in optical CD/DVD drives, while compact SSDs became standard."
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 2,
    "question": "Grinding noises in a storage drive usually indicate mechanical wear or damage, while clicking sounds can indicate read/write head or electronic problems. Back up the data and replace the drive.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Mechanical grinding or repeated clicking from a drive is a serious warning sign. Protect the data first, then replace the failing drive rather than continuing to rely on it.",
      "B": "Ignoring these noises risks additional mechanical damage and data loss; they are not normal operating sounds."
    },
    "tip": "Unusual HDD grinding or repeated clicking means back up immediately and plan drive replacement. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 4"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 3,
    "question": "Grinding noises and clicking sounds are problem symptoms exclusive to:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "RAM drives",
      "B": "SSD drives",
      "C": "HDD drives",
      "D": "USB drives"
    },
    "explanations": {
      "A": "RAM is solid-state memory with no moving mechanical parts, so it cannot produce drive-head grinding or clicking.",
      "B": "SSDs use flash memory and have no spinning platters or moving read/write heads.",
      "C": "Traditional hard disk drives contain spinning platters and mechanical heads, so mechanical wear can create grinding or clicking noises.",
      "D": "USB flash drives use solid-state flash storage and normally have no mechanical parts that can grind or click."
    },
    "tip": "HDDs have moving parts; SSDs and flash drives do not. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 5"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 4,
    "question": "Which troubleshooting actions would be advisable when the system reports that it cannot find a bootable drive? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Confirm the drive is visible within the system setup interface",
      "B": "Examine the physical connections and cables to the drive",
      "C": "Disconnect any removable external drives such as USB thumb drives",
      "D": "Reconfigure the system to use the correct drive as the first boot option",
      "E": "Disable unused USB ports in BIOS/UEFI"
    },
    "explanations": {
      "A": "If BIOS/UEFI cannot detect the drive, the problem is below the operating-system level and may involve hardware, cabling, power, or firmware configuration.",
      "B": "A loose SATA/data or power connection can make a boot drive disappear from firmware detection.",
      "C": "Removing external media prevents the firmware from attempting to boot from an unintended device.",
      "D": "A valid OS drive may still fail to boot if another device is ahead of it in the boot order.",
      "E": "Disabling USB ports is unnecessary for normal boot-drive troubleshooting; removing unintended boot media and correcting boot order is more appropriate."
    },
    "tip": "For 'no bootable drive,' check detection, cables, removable media, and boot order before changing the OS. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 6"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 5,
    "question": "During startup, a computer displays a 'No bootable devices found' message. Troubleshooting reveals a misconfigured boot sequence. Where can a technician adjust the boot device order?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Disk Management utility",
      "B": "BIOS/UEFI settings",
      "C": "OS boot loader",
      "D": "Windows Command Prompt"
    },
    "explanations": {
      "A": "Disk Management works inside Windows and cannot control the firmware's pre-boot device sequence.",
      "B": "BIOS/UEFI firmware determines which storage or removable device the computer tries to boot from first.",
      "C": "The OS boot loader is reached only after firmware has selected a bootable device.",
      "D": "Command Prompt can manage many Windows settings but does not normally set the motherboard firmware boot order."
    },
    "tip": "Boot order is a BIOS/UEFI setting because device selection happens before Windows loads. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 7"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 6,
    "question": "Which proactive measure helps minimize data loss due to drive corruption?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Daily system restore points",
      "B": "Automated file integrity checks",
      "C": "Periodic disk defragmentation",
      "D": "Scheduled full disk backups"
    },
    "explanations": {
      "A": "System Restore mainly protects Windows system files and settings; it is not a complete backup of user data.",
      "B": "Integrity checks can detect corruption but do not provide a replacement copy of lost data.",
      "C": "Defragmentation reorganizes HDD data for performance and does not protect files from corruption or failure.",
      "D": "Regular full backups create recoverable copies of data so files can be restored after corruption or drive failure."
    },
    "tip": "RAID and maintenance are not backups; scheduled backups provide a separate recovery copy. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 8"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 7,
    "question": "Critical files in a RAID configuration are becoming corrupted and some data is missing. Which troubleshooting action should be performed first to determine if the drives are failing?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Check the RAID controller firmware for updates and compatibility",
      "B": "Review operating system logs for disk-related errors",
      "C": "Evaluate the storage devices' self-monitoring diagnostic data for anomalies",
      "D": "Back up all data before initiating any troubleshooting steps"
    },
    "explanations": {
      "A": "Firmware compatibility can matter, but it does not directly reveal the health condition of individual drives.",
      "B": "Logs can provide clues, but drive self-monitoring data gives more direct evidence of developing hardware failure.",
      "C": "S.M.A.R.T. data can expose indicators such as reallocated sectors and other health warnings that suggest an impending drive failure.",
      "D": "Backing up is important for protection, but the question asks for the diagnostic action used to determine whether the drives are failing."
    },
    "tip": "S.M.A.R.T. health data is a first place to look when you suspect a physical drive is deteriorating. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 9"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 8,
    "question": "Which steps are NOT considered best practice when addressing a RAID array that has failed? (Select 2 answers)",
    "answers": [
      "E",
      "F"
    ],
    "options": {
      "A": "Access the RAID controller utility to review events, errors, and drive status",
      "B": "Check power and data cables so a loose connection is not mistaken for drive failure",
      "C": "Verify the integrity of existing backups before attempting repairs or rebuilds",
      "D": "Replace the faulty drive with a compatible drive of the same or greater capacity",
      "E": "Force the RAID configuration to auto-rebuild by cycling power repeatedly",
      "F": "Delete the current RAID configuration and rebuild the array from scratch"
    },
    "explanations": {
      "A": "Reviewing controller status and logs is a safe diagnostic step that helps identify the failed component.",
      "B": "Verifying connections is good troubleshooting because a disconnected drive can mimic a failed member.",
      "C": "Confirming backups reduces the risk of permanent data loss if the repair or rebuild fails.",
      "D": "Replacing a confirmed failed member is a standard recovery step for redundant RAID levels.",
      "E": "Repeated power cycling can worsen instability and does not safely control the rebuild process.",
      "F": "Deleting the configuration can destroy array metadata and make recoverable data inaccessible, so it is not an appropriate first response."
    },
    "tip": "With a failed RAID, preserve configuration and data first - do not repeatedly power-cycle or delete the array. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 10"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 9,
    "question": "Replacing a physically failed drive can restore most redundant RAID configurations, except for:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "RAID 0",
      "B": "RAID 1",
      "C": "RAID 5",
      "D": "RAID 6",
      "E": "RAID 10"
    },
    "explanations": {
      "A": "RAID 0 stripes data without redundancy. If one member fails, portions of every striped file can be lost and simply replacing the drive cannot reconstruct the missing data.",
      "B": "RAID 1 mirrors data, so a failed member can normally be replaced and rebuilt from the surviving mirror.",
      "C": "RAID 5 can normally rebuild one failed drive using distributed parity and the remaining members.",
      "D": "RAID 6 has dual parity and can recover from up to two drive failures within its tolerance.",
      "E": "RAID 10 combines mirroring and striping; a failed member can often be replaced and rebuilt from its mirror partner."
    },
    "tip": "RAID 0 has speed but no fault tolerance - one failed disk can break the entire array. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 11"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 10,
    "question": "What is the primary purpose of S.M.A.R.T. in a storage media drive?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Automatic correction of detected drive errors",
      "B": "Real-time monitoring and regulation of power consumption",
      "C": "Prediction and reporting of impending drive failures",
      "D": "Optimization of drive read/write speeds"
    },
    "explanations": {
      "A": "S.M.A.R.T. reports health indicators but does not automatically repair all detected drive problems.",
      "B": "Power management is separate from the primary health-monitoring purpose of S.M.A.R.T.",
      "C": "S.M.A.R.T. tracks drive health attributes and can warn when values suggest that the device may be approaching failure.",
      "D": "S.M.A.R.T. is a diagnostic and monitoring system, not a performance-optimization feature."
    },
    "tip": "S.M.A.R.T. = drive health monitoring and early failure warning, not drive repair. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 12"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 11,
    "question": "What should be the recommended course of action after receiving a S.M.A.R.T. failure prediction error message? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Rebuilding the RAID array",
      "B": "Backing up data",
      "C": "Rolling back to the last system restore point",
      "D": "Clearing system logs to verify if the error persists",
      "E": "Replacing the drive"
    },
    "explanations": {
      "A": "A S.M.A.R.T. warning identifies a drive-health risk; rebuilding before protecting data can add stress to a failing drive.",
      "B": "A failure prediction means the drive may stop working soon, so protecting important data is the immediate priority.",
      "C": "System Restore does not fix physical drive deterioration or provide a complete user-data backup.",
      "D": "Deleting logs removes useful diagnostic history and does nothing to improve drive health.",
      "E": "A drive reporting impending failure should be replaced before it fails completely."
    },
    "tip": "S.M.A.R.T. failure warning = back up first, then replace the drive. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 13"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 12,
    "question": "A technician notices longer than normal file transfer times on a system using a mechanical hard drive. What is the first diagnostic action they should consider?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Run disk cleanup utility",
      "B": "Check network adapter settings",
      "C": "Perform disk defragmentation",
      "D": "Adjust paging file size"
    },
    "explanations": {
      "A": "Disk Cleanup removes unnecessary files but does not address file fragmentation, which can slow mechanical head movement.",
      "B": "The problem is described on a mechanical local drive, so network configuration is not the first storage diagnostic step.",
      "C": "On an HDD, heavily fragmented files can require extra head movement and increase transfer times; defragmentation reorganizes file blocks more contiguously.",
      "D": "Paging configuration affects virtual memory behavior but is not the first response to slower file transfers on an HDD."
    },
    "tip": "Defragmentation can help HDDs because they have moving heads; do not routinely defragment SSDs. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 14"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 13,
    "question": "Which metric plays a role in diagnosing the declining performance of a storage drive?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "RPM",
      "B": "I/O",
      "C": "LBA",
      "D": "IOPS"
    },
    "explanations": {
      "A": "RPM describes spindle speed for an HDD but does not directly measure how many storage operations the system is completing.",
      "B": "I/O is a general term for input/output activity rather than the specific performance metric selected here.",
      "C": "Logical Block Addressing identifies storage locations and is not a drive-performance rate.",
      "D": "Input/Output Operations Per Second measures how many storage operations a device can complete and is useful for evaluating storage performance."
    },
    "tip": "IOPS measures how many read/write operations storage can handle per second. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 15"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 14,
    "question": "A computer's internal storage drive is not detected in BIOS/UEFI or Disk Management. What is the most likely first troubleshooting step?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Initialize the drive",
      "B": "Examine system logs for errors",
      "C": "Inspect the drive's power and data cable connections",
      "D": "Format the drive"
    },
    "explanations": {
      "A": "A drive cannot be initialized in the OS if firmware and Disk Management do not detect it.",
      "B": "Logs may help later, but a completely undetected internal drive first calls for checking physical connectivity.",
      "C": "Loose or disconnected power/data cables can prevent both firmware and the operating system from seeing the drive.",
      "D": "Formatting requires the drive to be detected and would also erase existing data."
    },
    "tip": "If BIOS cannot see the drive, start with hardware - power cable, data cable, port, and drive. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 16"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 15,
    "question": "If a storage drive does not appear in the OS, one possible cause is that the drive has been disabled at the firmware level.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A storage controller, port, or drive interface disabled in BIOS/UEFI can prevent the operating system from detecting the device.",
      "B": "Firmware configuration is part of the hardware detection path, so a disabled controller or port can make a drive disappear from the OS."
    },
    "tip": "The OS cannot use a drive that the firmware or storage controller has disabled. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 17"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 16,
    "question": "What action should be taken if a drive is missing in the OS but appears in Disk Management as 'Unallocated'?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Modify OS settings to show hidden items",
      "B": "Initialize and format the drive",
      "C": "Change device access permissions for the current user",
      "D": "Enable the drive in BIOS/UEFI settings"
    },
    "explanations": {
      "A": "Hidden-file settings affect files and folders, not whether unallocated storage has a usable volume.",
      "B": "An unallocated new drive needs storage structures such as a partition/volume and filesystem before it can appear as usable storage in the OS.",
      "C": "Permissions apply after a filesystem and accessible volume exist; they do not allocate raw disk space.",
      "D": "The drive is already visible in Disk Management, which shows that firmware and the OS can detect it."
    },
    "tip": "'Unallocated' means the disk is detected but has no usable volume yet; initialize/partition and format when appropriate. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 18"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 17,
    "question": "Which of the following is the most likely cause of a missing RAID array?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Failed drive in the array",
      "B": "Incorrect RAID controller settings",
      "C": "Disconnected or loose cable",
      "D": "All of the above"
    },
    "explanations": {
      "A": "A failed member can make an array degraded or unavailable, but it is not the only listed cause.",
      "B": "Controller configuration can prevent an existing array from being recognized, but other choices can do the same.",
      "C": "A disconnected member or controller connection can make the array disappear, but it is one of several possible causes.",
      "D": "Drive failure, incorrect controller configuration, and loose connections can each prevent a RAID array from appearing normally."
    },
    "tip": "A missing RAID can be hardware, cabling, or controller configuration - verify all three. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 19"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 18,
    "question": "What should be the initial troubleshooting steps when a RAID array is missing from the system? (Select 2 answers)",
    "answers": [
      "B",
      "D"
    ],
    "options": {
      "A": "Examine whether other non-RAID drives are functioning normally",
      "B": "Check for loose/disconnected cables or a poorly seated RAID controller card",
      "C": "Verify that the system has adequate power supply wattage",
      "D": "Ensure the RAID controller is recognized and enabled in BIOS/UEFI settings",
      "E": "Confirm if the RAID array is visible in the OS Disk Management tool"
    },
    "explanations": {
      "A": "This can provide context, but it does not directly verify the RAID controller's connection or firmware recognition.",
      "B": "A physical connection problem can make the controller or its drives disappear from the system.",
      "C": "Power capacity can matter, but the source-selected initial checks focus on controller connectivity and recognition.",
      "D": "If firmware does not detect or enable the controller, the operating system cannot see the array it manages.",
      "E": "Disk Management is useful after confirming the controller and physical connections; a missing controller may prevent the array from appearing there at all."
    },
    "tip": "Missing RAID: first verify the controller is physically connected, then confirm BIOS/UEFI recognizes and enables it. CompTIA A+ 220-1201 - Storage and RAID Troubleshooting Page 20"
  },
  {
    "topic": "Storage and RAID Troubleshooting",
    "number": 19,
    "question": "If a RAID array is producing audible alarms, what does this typically indicate? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "System overheating",
      "B": "Pending reboot request",
      "C": "Drive failure",
      "D": "Insufficient power supply",
      "E": "Array degradation"
    },
    "explanations": {
      "A": "Some systems can alarm for thermal problems, but the RAID-specific alarm in this question points to storage-array health.",
      "B": "A normal reboot request is not typically signaled by a RAID controller's audible failure alarm.",
      "C": "RAID controllers often sound an alarm when a member drive has failed and redundancy is at risk.",
      "D": "Power problems can affect storage, but they are not one of the two source-selected meanings of a RAID alarm.",
      "E": "A degraded array has lost full redundancy or normal health, and many RAID controllers alert the technician audibly."
    },
    "tip": "A RAID alarm usually means check array health immediately for a failed member or degraded state."
  },
  {
    "topic": "TCP UDP Ports",
    "number": 1,
    "question": "Which port enables the FTP data connection for transferring file data?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "UDP port 20",
      "B": "TCP port 20",
      "C": "UDP port 21",
      "D": "TCP port 21"
    },
    "explanations": {
      "A": "FTP's traditional active-mode data channel uses TCP, not UDP.",
      "B": "FTP traditionally uses TCP port 20 for the active-mode data connection that carries file contents.",
      "C": "FTP does not use UDP port 21 for its control or data channel.",
      "D": "TCP port 21 is used for the FTP control connection, not the traditional active-mode data connection."
    },
    "tip": "FTP uses two classic TCP ports - 20 for active-mode data and 21 for control commands. CompTIA A+ 220-1201 - TCP & UDP Ports Page 3"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 2,
    "question": "The FTP control connection to administer a session is established through:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "TCP port 20",
      "B": "UDP port 20",
      "C": "TCP port 21",
      "D": "UDP port 21"
    },
    "explanations": {
      "A": "TCP port 20 is associated with the traditional active-mode FTP data channel.",
      "B": "FTP does not use UDP port 20 for its control connection.",
      "C": "FTP establishes its control session on TCP port 21 so commands and responses can be exchanged.",
      "D": "The FTP control channel uses TCP because FTP relies on a reliable connection-oriented transport."
    },
    "tip": "Port 21 controls the FTP session; port 20 is the classic active-mode data port. CompTIA A+ 220-1201 - TCP & UDP Ports Page 4"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 3,
    "question": "Which port does the SSH protocol use?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "TCP port 21",
      "B": "UDP port 22",
      "C": "TCP port 20",
      "D": "TCP port 22"
    },
    "explanations": {
      "A": "TCP 21 belongs to FTP control, not SSH.",
      "B": "Standard SSH uses TCP because it needs a reliable connection for interactive remote sessions.",
      "C": "TCP 20 is associated with FTP data in active mode.",
      "D": "SSH uses TCP port 22 for encrypted remote login, command execution, and related secure services."
    },
    "tip": "SSH = 22. Think 'secure shell on twenty-two.' CompTIA A+ 220-1201 - TCP & UDP Ports Page 5"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 4,
    "question": "Which TCP port is used by the Telnet protocol?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Port 20",
      "B": "Port 21",
      "C": "Port 22",
      "D": "Port 23"
    },
    "explanations": {
      "A": "Port 20 is associated with FTP data.",
      "B": "Port 21 is the FTP control port.",
      "C": "Port 22 is used by SSH, the secure replacement for Telnet.",
      "D": "Telnet uses TCP port 23 for remote terminal sessions."
    },
    "tip": "Telnet = 23, while its secure replacement SSH = 22. CompTIA A+ 220-1201 - TCP & UDP Ports Page 6"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 5,
    "question": "TCP port 25 is used by:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "SNMP",
      "B": "Telnet",
      "C": "FTP",
      "D": "SMTP"
    },
    "explanations": {
      "A": "SNMP normally uses UDP 161 for queries and management operations.",
      "B": "Telnet uses TCP 23.",
      "C": "FTP traditionally uses TCP 20 and 21.",
      "D": "SMTP uses TCP port 25 for mail transfer, especially communication between mail servers."
    },
    "tip": "SMTP sends mail on port 25; remember '25 sends email.' CompTIA A+ 220-1201 - TCP & UDP Ports Page 7"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 6,
    "question": "Which TCP/UDP port is assigned to DNS?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Port 53",
      "B": "Port 67",
      "C": "Port 110",
      "D": "Port 389"
    },
    "explanations": {
      "A": "DNS uses port 53. UDP is common for normal queries, while TCP is also used when needed, such as larger responses and zone transfers.",
      "B": "Port 67 is used by DHCP servers.",
      "C": "TCP 110 is the default POP3 port.",
      "D": "TCP/UDP 389 is associated with LDAP."
    },
    "tip": "DNS = 53 on both TCP and UDP. CompTIA A+ 220-1201 - TCP & UDP Ports Page 8"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 7,
    "question": "A DHCP server operates on UDP port:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Port 66",
      "B": "Port 67",
      "C": "Port 68",
      "D": "Port 69"
    },
    "explanations": {
      "A": "UDP 66 is not the standard DHCP server port.",
      "B": "A DHCP server listens on UDP port 67 for client requests.",
      "C": "UDP 68 is used by the DHCP client to receive server responses.",
      "D": "UDP 69 is associated with TFTP."
    },
    "tip": "DHCP server = 67; DHCP client = 68. CompTIA A+ 220-1201 - TCP & UDP Ports Page 9"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 8,
    "question": "Which UDP port is used by a DHCP client to receive responses from a DHCP server?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Port 66",
      "B": "Port 67",
      "C": "Port 68",
      "D": "Port 69"
    },
    "explanations": {
      "A": "Port 66 is not the standard DHCP client port.",
      "B": "UDP 67 is the server side of DHCP.",
      "C": "DHCP clients use UDP port 68 to receive configuration responses from a DHCP server.",
      "D": "UDP 69 is used by TFTP, not DHCP."
    },
    "tip": "DHCP goes 67 server -> 68 client. CompTIA A+ 220-1201 - TCP & UDP Ports Page 10"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 9,
    "question": "Which protocol operates on TCP port 80?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "HTTP",
      "B": "IMAP",
      "C": "HTTPS",
      "D": "LDAP"
    },
    "explanations": {
      "A": "HTTP uses TCP port 80 for standard unencrypted web traffic.",
      "B": "IMAP normally uses TCP 143 for unencrypted mail access.",
      "C": "HTTPS uses TCP 443 for TLS-encrypted web traffic.",
      "D": "LDAP commonly uses TCP/UDP 389."
    },
    "tip": "Web ports: HTTP = 80 and HTTPS = 443. CompTIA A+ 220-1201 - TCP & UDP Ports Page 11"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 10,
    "question": "What is the default port for POP3 communication?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "TCP port 110",
      "B": "UDP port 123",
      "C": "TCP port 143",
      "D": "UDP port 161"
    },
    "explanations": {
      "A": "POP3 uses TCP port 110 by default to retrieve email from a mail server.",
      "B": "UDP 123 is used by NTP for time synchronization.",
      "C": "TCP 143 is the default port for IMAP.",
      "D": "UDP 161 is used by SNMP for network management queries."
    },
    "tip": "POP3 = 110; IMAP = 143. Both are used for receiving or accessing email. CompTIA A+ 220-1201 - TCP & UDP Ports Page 12"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 11,
    "question": "Which of the port numbers listed below are assigned to NetBIOS services? (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Port 135",
      "B": "Port 136",
      "C": "Port 137",
      "D": "Port 138",
      "E": "Port 139"
    },
    "explanations": {
      "A": "Port 135 is associated with Microsoft RPC Endpoint Mapper, not one of the three NetBIOS ports requested.",
      "B": "Port 136 is not one of the standard NetBIOS service ports in this question.",
      "C": "NetBIOS Name Service uses port 137 for name registration and resolution.",
      "D": "NetBIOS Datagram Service uses port 138 for connectionless NetBIOS communication.",
      "E": "NetBIOS Session Service uses TCP port 139 for session-oriented communication, including legacy file sharing."
    },
    "tip": "NetBIOS uses the consecutive trio 137, 138, and 139 - name, datagram, then session. CompTIA A+ 220-1201 - TCP & UDP Ports Page 13"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 12,
    "question": "Which service operates on TCP port 389?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "RDP",
      "B": "LDAP",
      "C": "SMB",
      "D": "LDAPS"
    },
    "explanations": {
      "A": "RDP normally uses TCP/UDP 3389.",
      "B": "LDAP uses port 389 for standard directory-service communication.",
      "C": "Modern SMB commonly uses TCP 445.",
      "D": "LDAP protected directly with SSL/TLS traditionally uses TCP 636, not 389."
    },
    "tip": "LDAP = 389; secure LDAP/LDAPS is commonly associated with 636. CompTIA A+ 220-1201 - TCP & UDP Ports Page 14"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 13,
    "question": "What is the default TCP port used for HTTPS communication?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Port 80",
      "B": "Port 443",
      "C": "Port 53",
      "D": "Port 143"
    },
    "explanations": {
      "A": "Port 80 is the default for unencrypted HTTP.",
      "B": "HTTPS uses TCP port 443 for web traffic protected with TLS.",
      "C": "Port 53 is assigned to DNS.",
      "D": "Port 143 is used by IMAP."
    },
    "tip": "HTTPS = 443. The S means the web session is secured with TLS. CompTIA A+ 220-1201 - TCP & UDP Ports Page 15"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 14,
    "question": "Which of the following services runs on TCP port 445?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "HTTPS",
      "B": "SMB",
      "C": "IMAP",
      "D": "LDAPS"
    },
    "explanations": {
      "A": "HTTPS uses TCP 443.",
      "B": "SMB uses TCP port 445 for direct-hosted file and printer sharing on modern Windows networks.",
      "C": "IMAP uses TCP 143 by default.",
      "D": "LDAPS is commonly associated with TCP 636."
    },
    "tip": "SMB = 445 for Windows file and printer sharing. CompTIA A+ 220-1201 - TCP & UDP Ports Page 16"
  },
  {
    "topic": "TCP UDP Ports",
    "number": 15,
    "question": "Which TCP port is used for RDP?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Port 514",
      "B": "Port 3389",
      "C": "Port 22",
      "D": "Port 5900"
    },
    "explanations": {
      "A": "Port 514 is commonly associated with Syslog rather than Remote Desktop.",
      "B": "Microsoft Remote Desktop Protocol uses TCP port 3389 for graphical remote-access sessions.",
      "C": "TCP 22 is used by SSH for secure command-line remote access.",
      "D": "TCP 5900 is commonly associated with VNC remote-desktop software, not RDP."
    },
    "tip": "RDP = 3389; VNC is commonly 5900 and SSH is 22."
  },
  {
    "topic": "Virtualization Concepts",
    "number": 1,
    "question": "What are the primary benefits of using a sandboxed environment in virtualization? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "Enabling cross-platform application development",
      "B": "Sharing resources between multiple virtual machines",
      "C": "Isolating untrusted software or code to prevent damage to the host system",
      "D": "Analyzing malware in a controlled environment",
      "E": "Running multiple operating systems on a single physical machine"
    },
    "explanations": {
      "A": "Cross-platform development can use virtualization, but it is not the main security purpose of a sandbox.",
      "B": "Resource sharing is a virtualization capability, but a sandbox is mainly intended to isolate potentially unsafe activity.",
      "C": "A sandbox separates risky code from the host so failures or malicious behavior are contained instead of directly affecting the main system.",
      "D": "A sandbox provides an isolated environment where suspicious software can be observed while reducing risk to the host.",
      "E": "Running multiple operating systems is a general virtualization benefit, not the specific purpose of sandbox isolation."
    },
    "tip": "Sandbox = isolated test area for risky or untrusted software. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 3"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 2,
    "question": "A software developer needs to test a new application feature that might introduce instability. Using virtualization, what is the most appropriate way to isolate this task?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Create a virtual machine as a sandbox specifically for testing this feature",
      "B": "Use a dual-boot system to test the feature on a separate partition",
      "C": "Host the application on a networked virtual machine shared by multiple users",
      "D": "Create a snapshot of the production environment and test the feature within it"
    },
    "explanations": {
      "A": "A dedicated test VM isolates crashes, configuration changes, and unstable software from the developer's main environment.",
      "B": "Dual boot separates operating systems but requires rebooting and does not provide the same convenient isolation and recovery features as a VM.",
      "C": "Sharing an unstable test environment with other users increases exposure rather than tightly isolating the experiment.",
      "D": "A production environment should not be the test location; a separate sandbox VM is safer and avoids risking production services."
    },
    "tip": "Test unstable software in a separate VM, not in production. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 4"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 3,
    "question": "Which features make virtual machines well-suited for testing new software? (Select 2 answers)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "Ability to revert to a previous state using snapshots",
      "B": "Support for software compatibility checks across multiple OS setups",
      "C": "Real-time monitoring of system resource usage",
      "D": "Scaling of computing resources for better performance",
      "E": "Automatic reduction of software licensing costs"
    },
    "explanations": {
      "A": "Snapshots let a tester restore the VM to an earlier known state after a failed installation, configuration change, or software test.",
      "B": "Different VMs can run different operating-system configurations, making it practical to test how software behaves across environments.",
      "C": "Monitoring can be useful, but it is not one of the source-selected features that specifically makes VMs ideal for software testing.",
      "D": "Resource scaling can improve performance, but testing benefits more directly from isolation, snapshots, and multiple OS environments.",
      "E": "Virtualization does not automatically reduce licensing costs; licensing rules still apply."
    },
    "tip": "For software testing, remember snapshots plus multiple OS environments. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 5"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 4,
    "question": "What is the primary purpose of application virtualization?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "To emulate computer hardware for running different operating systems",
      "B": "To remove all hardware limitations from software execution",
      "C": "To permanently reduce software licensing costs",
      "D": "To run software without installing it directly on the host operating system"
    },
    "explanations": {
      "A": "Emulating or virtualizing hardware for complete operating systems describes machine virtualization rather than application virtualization.",
      "B": "Application virtualization does not eliminate hardware requirements or performance limits.",
      "C": "Licensing costs depend on software agreements and are not the primary technical purpose.",
      "D": "Application virtualization packages or isolates an application so it can run without a traditional direct installation into the host OS."
    },
    "tip": "Application virtualization isolates the app; full VM virtualization isolates an entire operating system. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 6"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 5,
    "question": "A company needs to run accounting software designed for Windows XP on a Windows 11 host. What would be the most practical modern solution?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Enable compatibility mode for Windows XP within Windows 11",
      "B": "Replace the legacy app with a modern accounting software package",
      "C": "Run Windows XP in a dual-boot configuration alongside Windows 11",
      "D": "Install Windows XP in a virtual machine on the current system"
    },
    "explanations": {
      "A": "Compatibility mode can help some older applications, but software that truly depends on Windows XP may require the original OS environment.",
      "B": "Replacement may be a long-term option, but it does not satisfy the immediate requirement to run the existing Windows XP application.",
      "C": "Dual boot requires restarting the computer to switch operating systems and is less convenient than running the legacy OS in a VM.",
      "D": "A Windows XP VM provides the legacy operating-system environment while allowing Windows 11 to remain the host."
    },
    "tip": "A legacy OS-dependent application can be isolated inside a VM running that older OS. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 7"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 6,
    "question": "What is the primary advantage of using cross-platform virtualization?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Running multiple operating systems simultaneously",
      "B": "Enabling software to run on an unsupported operating system",
      "C": "Allowing virtual machines to run without a host OS",
      "D": "Providing direct hardware access for legacy applications"
    },
    "explanations": {
      "A": "That is a broad benefit of virtualization, but the question focuses specifically on crossing operating-system platform boundaries.",
      "B": "Cross-platform virtualization supplies a compatible guest environment so software can run even when the host OS itself does not support it.",
      "C": "That describes a Type 1 hypervisor deployment rather than the advantage of cross-platform virtualization.",
      "D": "Virtualization normally abstracts hardware instead of guaranteeing direct hardware access."
    },
    "tip": "Cross-platform virtualization lets a host run software through a guest OS it normally could not support. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 8"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 7,
    "question": "Which of the answers listed below refer to common examples of cross-platform virtualization in practice? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "F"
    ],
    "options": {
      "A": "Running macOS in a virtual machine on a Windows host",
      "B": "Using virtualized Android environment on a Windows or macOS host",
      "C": "Accessing cloud-hosted Windows desktops from a macOS system",
      "D": "Running a web application in a browser on different operating systems",
      "E": "Accessing cloud-hosted macOS desktops from a Windows system",
      "F": "Running Windows in a virtual machine on a macOS host"
    },
    "explanations": {
      "A": "This places one operating-system platform inside a host running a different platform, matching the source's cross-platform example.",
      "B": "An Android virtual environment on a desktop OS lets software from a different platform run through virtualization.",
      "C": "Remote access to a cloud desktop is not the local cross-platform VM example selected by the source.",
      "D": "Browser-based portability does not itself require virtualization.",
      "E": "This is remote access to another system rather than the source-selected local cross-platform virtualization example.",
      "F": "A Windows guest running on a macOS host is a direct example of cross-platform virtualization."
    },
    "tip": "Cross-platform VM = guest OS platform differs from the host OS platform. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 9"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 8,
    "question": "What security practice helps to limit the potential impact of a compromised virtual machine on other VMs and the host?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Using multi-factor authentication for hypervisor access",
      "B": "Ensuring proper isolation between virtual machines",
      "C": "Conducting regular vulnerability scans of the virtual machines",
      "D": "Implementing intrusion detection systems on the network",
      "E": "Deploying a host-based firewall on each virtual machine",
      "F": "Installing antivirus software on all virtual machines"
    },
    "explanations": {
      "A": "MFA protects administrative access, but it does not by itself contain a compromised guest VM.",
      "B": "Strong VM isolation prevents one compromised guest from easily accessing the memory, resources, or systems of other VMs and the host.",
      "C": "Scanning helps discover weaknesses, but isolation is the control that directly limits damage after a VM is compromised.",
      "D": "IDS can detect suspicious activity but does not itself provide the virtualization boundary requested.",
      "E": "Firewalls are useful defenses, but the source identifies proper VM isolation as the practice that contains impact.",
      "F": "Antivirus can prevent or detect malware but is not the isolation mechanism between VMs and the host."
    },
    "tip": "VM isolation contains a compromised guest so it cannot easily spread to neighboring VMs or the host. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 10"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 9,
    "question": "What is a common method for managing access and permissions within a virtualized infrastructure?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Utilizing the access control features of the hypervisor",
      "B": "Encrypting data in transit between virtual machines"
    },
    "explanations": {
      "A": "Hypervisors commonly provide centralized roles and permissions that control who can create, modify, start, stop, or administer virtual machines.",
      "B": "Encryption protects data confidentiality during transmission but does not assign administrative access permissions."
    },
    "tip": "Hypervisor access controls manage who is allowed to administer virtual infrastructure. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 11"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 10,
    "question": "Enforcing strong password protection on the hypervisor management interface is less critical than applying the same level of password security to individual virtual machines.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The hypervisor management interface can control many VMs and host resources, so weak protection there can create a very large security exposure.",
      "B": "Strong hypervisor credentials are at least as critical because compromising the management layer can give an attacker broad control over virtual machines."
    },
    "tip": "Protect the hypervisor management account strongly because it can control many VMs at once. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 12"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 11,
    "question": "Keeping the hypervisor software up to date primarily helps to protect against:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Accidental data loss within virtual machines",
      "B": "Performance bottlenecks within virtual machines",
      "C": "Known security vulnerabilities",
      "D": "Unauthorized access to guest operating systems"
    },
    "explanations": {
      "A": "Updates may improve reliability, but backups and recovery processes are the main protection against accidental data loss.",
      "B": "Updates can include performance improvements, but security patching primarily addresses vulnerabilities.",
      "C": "Hypervisor updates and patches fix publicly known flaws that attackers could otherwise exploit.",
      "D": "Guest access controls protect individual operating systems; hypervisor patching specifically reduces vulnerabilities in the virtualization layer."
    },
    "tip": "Patch the hypervisor to close known security vulnerabilities in the virtualization layer. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 13"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 12,
    "question": "Which of the following answers refer to a virtual machine in a bridged networking configuration? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "The VM receives its TCP/IP configuration settings from a virtual DHCP server managed by the hypervisor",
      "B": "The VM's network adapter is connected directly to the physical network through the host's network interface",
      "C": "The VM's private address is not advertised on the LAN preventing direct inbound connections",
      "D": "The VM can communicate directly with all other devices on the physical network and the Internet, just like any other physical machine",
      "E": "The VM obtains its TCP/IP configuration settings directly from the DHCP server on the physical network",
      "F": "The VM uses the IP address of the host machine for outbound communication via NAT"
    },
    "explanations": {
      "A": "That behavior is associated with shared/NAT networking rather than a VM exposed directly to the physical LAN.",
      "B": "Bridged mode connects the virtual NIC to the physical network so the VM behaves like another device on the LAN.",
      "C": "That describes private shared/NAT networking, where the VM is hidden behind the host.",
      "D": "Because the VM is bridged onto the LAN, it can communicate as an independent network device.",
      "E": "A bridged VM normally receives addressing from the same physical-network DHCP service used by other LAN devices.",
      "F": "Using the host address through NAT is characteristic of shared networking, not bridged mode."
    },
    "tip": "Bridged VM = appears as its own device on the physical LAN and gets LAN addressing directly. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 14"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 13,
    "question": "Which of the answers listed below refer to a virtual machine in a shared networking configuration? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "The VM's network adapter is connected directly to the physical network through the host's network interface",
      "B": "The VM receives its TCP/IP configuration settings from a virtual DHCP server managed by the hypervisor",
      "C": "The VM can communicate directly with all other devices on the physical network and the Internet, just like any other physical machine",
      "D": "The VM uses the IP address of the host machine for outbound communication via NAT",
      "E": "The VM's private address is not advertised on the LAN preventing direct inbound connections",
      "F": "The VM obtains its TCP/IP configuration settings directly from the DHCP server on the physical network"
    },
    "explanations": {
      "A": "Direct exposure to the physical LAN describes bridged networking.",
      "B": "Shared/NAT mode commonly gives the VM a private address from a virtual DHCP service.",
      "C": "A shared/NAT VM is normally behind the host and does not behave as a directly attached LAN device.",
      "D": "NAT translates the VM's private traffic so outbound connections use the host's external network presence.",
      "E": "The private VM address remains behind NAT, which normally prevents unsolicited direct LAN access without additional configuration.",
      "F": "Direct physical DHCP service is typical of bridged mode rather than shared networking."
    },
    "tip": "Shared/NAT VM = private virtual address, virtual DHCP, and outbound traffic translated through the host. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 15"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 14,
    "question": "Which of the following are critical factors for storage performance in a virtualized environment? (Select 2 answers)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "High IOPS",
      "B": "Low CPU utilization",
      "C": "File system type",
      "D": "Low latency",
      "E": "Hypervisor type"
    },
    "explanations": {
      "A": "Virtualized hosts may service storage requests from many VMs simultaneously, so high input/output operations per second helps handle many concurrent transactions.",
      "B": "CPU usage affects overall host performance but is not one of the storage-specific factors selected by the source.",
      "C": "File-system choice can matter in some environments, but the source highlights IOPS and latency as the critical storage-performance measures.",
      "D": "Low storage latency reduces the time each VM waits for reads and writes to complete.",
      "E": "Hypervisor choice affects virtualization behavior but is not itself a storage-performance metric."
    },
    "tip": "Virtual storage performance depends heavily on high IOPS and low latency. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 16"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 15,
    "question": "What is the key benefit of using SSDs in virtualized environments?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Compact form factor",
      "B": "Fast read/write speeds",
      "C": "High capacity",
      "D": "Low cost per terabyte of storage"
    },
    "explanations": {
      "A": "Physical size can be convenient, but it is not the key virtualization performance advantage.",
      "B": "SSDs provide fast storage access and low latency, which helps when many virtual machines generate simultaneous disk activity.",
      "C": "SSDs are available in high capacities, but capacity alone is not their primary virtualization benefit.",
      "D": "Traditional hard drives often have a lower cost per terabyte, so this is not the main SSD advantage."
    },
    "tip": "SSDs help VMs most through fast reads/writes and low storage latency. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 17"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 16,
    "question": "Which of the answers listed below refers to a virtualization platform used to deliver virtual desktops to multiple users?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "VDE",
      "B": "VNC",
      "C": "VDI",
      "D": "RDP"
    },
    "explanations": {
      "A": "VDE is not the standard term selected by the source for centrally delivered virtual desktop environments.",
      "B": "VNC is a remote desktop/control protocol and software family, not the virtualization platform concept requested.",
      "C": "Virtual Desktop Infrastructure hosts desktop environments centrally and delivers those virtual desktops to users.",
      "D": "RDP is a remote display protocol used to connect to Windows systems, not the overall virtual desktop infrastructure platform."
    },
    "tip": "VDI = Virtual Desktop Infrastructure; RDP/VNC are remote-access technologies. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 18"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 17,
    "question": "What is a container in virtualization?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "A dedicated partition used to store virtual machines",
      "B": "A virtualized environment that runs operating systems and applications",
      "C": "A security feature that prevents unauthorized users from accessing virtual machines",
      "D": "A portable package containing an app and everything it needs to run"
    },
    "explanations": {
      "A": "A disk partition is storage organization and is not a software container.",
      "B": "A traditional VM includes a complete guest operating system; containers are lighter and package an application with its dependencies.",
      "C": "Access control is a security function, not the definition of a container.",
      "D": "A container packages an application and its required dependencies so it can run consistently across compatible environments."
    },
    "tip": "Container = application plus dependencies in a portable package, not a full guest OS. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 19"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 18,
    "question": "Which of the following answers best describes a Type 1 hypervisor?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "A hypervisor that requires an OS to run virtual machines",
      "B": "A hypervisor that runs as an application on a host OS",
      "C": "A hypervisor type commonly used in personal desktop environments",
      "D": "A hypervisor that runs directly on the hardware"
    },
    "explanations": {
      "A": "That describes a hosted Type 2 hypervisor.",
      "B": "Running on top of a host operating system is the defining Type 2 model.",
      "C": "Desktop virtualization commonly uses Type 2 hypervisors, while Type 1 is common in server/datacenter environments.",
      "D": "A Type 1 or bare-metal hypervisor installs directly on the physical host hardware instead of relying on a general-purpose host OS."
    },
    "tip": "Type 1 = bare metal; Type 2 = runs on top of a host operating system. CompTIA A+ 220-1201 - Virtualization Concepts Quiz Page 20"
  },
  {
    "topic": "Virtualization Concepts",
    "number": 19,
    "question": "What potential performance limitation might a Type 2 hypervisor experience compared to a Type 1 hypervisor?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Inability to run multiple virtual machines",
      "B": "Restriction on the amount of RAM allocated to VMs",
      "C": "Overhead from the host operating system consuming resources",
      "D": "Lack of support for certain types of hardware"
    },
    "explanations": {
      "A": "Type 2 hypervisors can run multiple VMs, subject to available host resources.",
      "B": "RAM allocation depends on the host and hypervisor limits, not simply whether it is Type 2.",
      "C": "A Type 2 hypervisor shares CPU, memory, storage, and other resources with the host OS, adding overhead that a bare-metal Type 1 design avoids.",
      "D": "Hardware support varies by product, but the source identifies host-OS resource overhead as the key performance limitation."
    },
    "tip": "Type 2 adds a host OS layer, so some system resources are consumed before the VMs use them."
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 1,
    "question": "Which of the answers listed below describe the characteristics of the 2.4 GHz frequency range, when compared to higher-frequency bands like 5 GHz and 6 GHz? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "D"
    ],
    "options": {
      "A": "The longest range (better penetration through obstacles)",
      "B": "A wider number of available channels with less overlap",
      "C": "Higher susceptibility to interference due to device congestion",
      "D": "The lowest number of non-overlapping channels",
      "E": "Shorter range (weaker penetration through obstacles)",
      "F": "Less interference due to fewer devices using the band"
    },
    "explanations": {
      "A": "Lower-frequency 2.4 GHz signals generally travel farther and penetrate walls and other obstacles better than 5 GHz and 6 GHz signals.",
      "B": "The 2.4 GHz band has relatively few usable non-overlapping Wi-Fi channels, so it does not provide a wider selection with less overlap.",
      "C": "Many Wi-Fi networks and other devices use 2.4 GHz, so congestion and interference are more common in this band.",
      "D": "Compared with the higher Wi-Fi bands, 2.4 GHz provides fewer non-overlapping channels; channels 1, 6, and 11 are the classic non-overlapping set in many regions.",
      "E": "This describes a disadvantage of higher-frequency bands. 2.4 GHz normally provides better range and obstacle penetration.",
      "F": "The opposite is generally true: 2.4 GHz is heavily used by Wi-Fi and other wireless devices, which increases interference."
    },
    "tip": "2.4 GHz travels farther but is more crowded; 5 GHz and 6 GHz trade some range for more spectrum and higher performance. CompTIA A+ 220-1201 - Wireless Networking Technologies Page 3"
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 2,
    "question": "Compared to the 2.4 GHz and 6 GHz frequency bands, the 5 GHz frequency range offers:",
    "answers": [
      "E"
    ],
    "options": {
      "A": "The longest range among available Wi-Fi bands",
      "B": "The best penetration through walls and obstacles",
      "C": "The highest number of non-overlapping channels",
      "D": "The fastest data speeds of all frequency bands",
      "E": "None of the above"
    },
    "explanations": {
      "A": "2.4 GHz generally provides longer range because its lower frequency penetrates obstacles more effectively.",
      "B": "2.4 GHz normally penetrates walls better than 5 GHz.",
      "C": "6 GHz provides substantially more spectrum and channel capacity, so 5 GHz is not the highest among these bands.",
      "D": "6 GHz can support very high throughput with wide, uncongested channels, so 5 GHz is not universally the fastest of all listed bands.",
      "E": "The supplied quiz marks none of these statements as the defining advantage of 5 GHz when it is compared simultaneously with both 2.4 GHz and 6 GHz."
    },
    "tip": "Think of 5 GHz as the middle ground: less range than 2.4 GHz, but more capacity than 2.4 GHz; 6 GHz adds even more spectrum. CompTIA A+ 220-1201 - Wireless Networking Technologies Page 4"
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 3,
    "question": "Which of the following answers does not refer to the 6 GHz frequency band?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "The longest range among available Wi-Fi bands",
      "B": "The highest number of non-overlapping channels",
      "C": "The lowest susceptibility to interference",
      "D": "The fastest data speeds of all frequency bands"
    },
    "explanations": {
      "A": "6 GHz uses the highest frequency of these common Wi-Fi bands and therefore does not provide the longest range or best obstacle penetration.",
      "B": "The large amount of spectrum available at 6 GHz supports many non-overlapping channels.",
      "C": "Because 6 GHz has more available spectrum and fewer legacy devices, it can experience less congestion and interference.",
      "D": "The broad 6 GHz spectrum supports very wide channels and high-throughput Wi-Fi operation, so this characteristic refers to the band in the quiz."
    },
    "tip": "6 GHz gives Wi-Fi lots of clean spectrum and wide channels, but higher frequency means shorter practical range. CompTIA A+ 220-1201 - Wireless Networking Technologies Page 5"
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 4,
    "question": "Wireless networking channels are governed by country-specific regulations. These rules define which frequency bands can be used for wireless communication, whether they require licensing or are unlicensed, the number and width of available channels, and transmission-power limits.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Wireless spectrum is regulated by national or regional authorities. Channel availability, allowed frequencies, channel widths, and transmit-power limits can vary by country.",
      "B": "False is incorrect because wireless devices must comply with the spectrum rules of the country or region where they operate."
    },
    "tip": "Wi-Fi channel rules are regional - available channels and power limits can change when you move between countries. CompTIA A+ 220-1201 - Wireless Networking Technologies Page 6"
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 5,
    "question": "In the 2.4 GHz band, channels can overlap and interfere with nearby networks. Using non-overlapping channels such as 1, 6, and 11 allows multiple networks to coexist with less interference.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The supplied statement correctly explains channel overlap in 2.4 GHz Wi-Fi and the common use of channels 1, 6, and 11 to reduce adjacent-channel interference.",
      "B": "False is incorrect because closely spaced 2.4 GHz channels overlap, while properly separated channels reduce that interference."
    },
    "tip": "For classic 2.4 GHz Wi-Fi planning, remember 1 - 6 - 11 as the common non-overlapping channel pattern. CompTIA A+ 220-1201 - Wireless Networking Technologies Page 7"
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 6,
    "question": "Which of the statements listed below best describes the effect of increasing channel width in a wireless network?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Extends the range of the wireless signal",
      "B": "Increases data throughput but may cause more interference",
      "C": "Minimizes latency for all connected devices",
      "D": "Reduces interference from neighboring channels"
    },
    "explanations": {
      "A": "A wider channel does not inherently increase radio range; range depends on factors such as frequency, power, antennas, and the environment.",
      "B": "Wider channels can carry more data, but they consume more spectrum and are more likely to overlap or compete with nearby networks.",
      "C": "A wider channel can improve capacity, but it does not guarantee minimum latency for every client.",
      "D": "Using more spectrum can actually increase the chance of interference or contention with neighboring wireless networks."
    },
    "tip": "Wider Wi-Fi channel = more potential speed, but also more spectrum used and a greater chance of interference. CompTIA A+ 220-1201 - Wireless Networking Technologies Page 8"
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 7,
    "question": "Which of the following answers refer(s) to Bluetooth? (Select all that apply)",
    "answers": [
      "A",
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Operates in the 2.4 GHz frequency band",
      "B": "Requires line-of-sight for optimal performance",
      "C": "Short-range wireless communication",
      "D": "Optimized for creating PANs",
      "E": "Used for peripheral, wearable and IoT devices",
      "F": "Optimized for long-distance wireless communication"
    },
    "explanations": {
      "A": "Bluetooth operates in the unlicensed 2.4 GHz ISM band.",
      "B": "Bluetooth uses radio waves and does not require direct line-of-sight between devices.",
      "C": "Bluetooth is designed for relatively short-range device-to-device communication.",
      "D": "Bluetooth is commonly used to build personal area networks between nearby personal devices.",
      "E": "Headsets, keyboards, mice, watches, sensors, and many IoT devices commonly use Bluetooth.",
      "F": "Bluetooth is intended for short-range connectivity rather than long-distance networking."
    },
    "tip": "Bluetooth = 2.4 GHz + short range + PANs + personal peripherals and wearables. CompTIA A+ 220-1201 - Wireless Networking Technologies Page 9"
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 8,
    "question": "What are the main characteristics of 802.11 networks? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Built to support infrastructure and ad-hoc network modes",
      "B": "Engineered for high-speed wireless data transmission",
      "C": "Standardized by IEEE for WLANs as an alternative to wired LANs",
      "D": "Designed to operate in licensed frequency bands",
      "E": "Structured around base stations for network coverage",
      "F": "Dependent on clear line-of-sight for data transfer"
    },
    "explanations": {
      "A": "802.11 Wi-Fi supports infrastructure networking through access points and can also support direct/ad-hoc wireless networking modes.",
      "B": "802.11 standards are designed to provide wireless LAN data connectivity at progressively higher speeds.",
      "C": "IEEE 802.11 is the family of standards used for wireless local area networking.",
      "D": "Wi-Fi primarily uses unlicensed spectrum such as 2.4 GHz, 5 GHz, and 6 GHz rather than licensed cellular spectrum.",
      "E": "Cellular networks are commonly described in terms of base stations; Wi-Fi infrastructure networks normally use wireless access points.",
      "F": "Wi-Fi can pass through many common obstacles and does not require clear line-of-sight for normal operation."
    },
    "tip": "802.11 is IEEE Wi-Fi for WLANs; infrastructure mode uses an access point, while ad-hoc mode connects peers directly. CompTIA A+ 220-1201 - Wireless Networking Technologies Page 10"
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 9,
    "question": "Which of the answers listed below refer(s) to NFC? (Select all that apply)",
    "answers": [
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "Standardized for operation in the 2.4 GHz frequency band",
      "B": "Built for very short-range wireless communication (typically up to 4 cm)",
      "C": "Used for secure transactions, such as contactless payments",
      "D": "Designed to operate in licensed frequency bands",
      "E": "Commonly found in smart cards, passports, and access control systems"
    },
    "explanations": {
      "A": "NFC operates at 13.56 MHz, not the 2.4 GHz band used by technologies such as Bluetooth and Wi-Fi.",
      "B": "NFC is intentionally designed for communication over only a few centimeters.",
      "C": "NFC is widely used for tap-to-pay and other short-range transaction systems.",
      "D": "NFC does not depend on a licensed cellular-style frequency allocation.",
      "E": "NFC-related contactless technologies are used for identification, credentials, smart cards, and access-control applications."
    },
    "tip": "NFC = Near Field Communication: think a few centimeters, tap-to-pay, smart cards, and access badges. CompTIA A+ 220-1201 - Wireless Networking Technologies Page 11"
  },
  {
    "topic": "Wireless Networking Technologies",
    "number": 10,
    "question": "Which of the following statements does not describe RFID?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Utilized in automatic identification and object tracking",
      "B": "Used for communication between tags and readers via radio waves",
      "C": "Implemented in supply chain, logistics, and access control systems",
      "D": "Found in some contactless payment systems and smart cards",
      "E": "Designed for short-range personal area networking"
    },
    "explanations": {
      "A": "RFID is widely used to identify and track tagged items automatically.",
      "B": "RFID systems use radio communication between a reader and an RFID tag.",
      "C": "Inventory, logistics, asset tracking, and access-control systems are common RFID applications.",
      "D": "RFID-related contactless technology is used in some cards and payment or identification systems.",
      "E": "Personal area networking is associated with technologies such as Bluetooth. RFID is primarily an identification and tracking technology rather than a PAN technology."
    },
    "tip": "RFID identifies and tracks tagged objects; Bluetooth is the technology to associate with personal area networking."
  }
,
  {
    "topic": "Mobile Device Accessories", "number": 1, "type": "matching",
    "question": "Match each mobile device accessory with its primary function.",
    "pairs": {"Stylus":"Precise input and drawing","Headset":"Audio input and output","Speakers":"Audio playback","Webcam":"Video input for conferencing"},
    "explanations": {
      "Stylus":"A stylus gives the user a pen-like way to tap, write, sketch, or select small on-screen items with greater precision than a fingertip.",
      "Headset":"A headset combines headphones or an earpiece with a microphone, so it can both play sound and capture the user's voice.",
      "Speakers":"Speakers are output devices that convert an audio signal into sound for music, calls, alerts, and other media.",
      "Webcam":"A webcam captures live video and sends it to applications such as video-conferencing or recording software."
    },
    "tip":"Separate accessories by data direction — a webcam and microphone send input to the device, while speakers provide output; a headset can do both audio directions."
  },
  {
    "topic": "Mobile Device Accessories", "number": 2, "type": "matching",
    "question": "Select the applicable connectivity options for each mobile accessory device.",
    "pairs": {
      "Stylus":"Passive (direct-touch) or Active (Bluetooth-enabled)",
      "Headset":"Wired (3.5 mm port/jack, USB-C, Lightning) or Wireless (Bluetooth)",
      "Speakers":"Wired (auxiliary 3.5 mm port/jack, USB) or Wireless (Bluetooth, Wi-Fi)",
      "Webcam":"Wired (USB) or Wireless (Wi-Fi)"
    },
    "explanations": {
      "Stylus":"A passive stylus interacts directly with a compatible touch surface, while an active stylus may use Bluetooth for extra functions such as buttons or device communication.",
      "Headset":"Headsets can carry audio through physical audio/data connectors or use Bluetooth for cable-free audio and microphone communication.",
      "Speakers":"Speakers may receive audio through analog or USB cabling, while wireless models can stream through Bluetooth or a Wi-Fi network.",
      "Webcam":"USB is a common wired webcam interface, while some network-capable cameras transmit video over Wi-Fi."
    },
    "tip":"Ask whether the accessory needs a cable, short-range Bluetooth, or network-based Wi-Fi; the connection method depends on what kind of data the accessory carries."
  },
  {
    "topic":"Mobile Device Accessories","number":3,
    "question":"Docking stations: (Select 3 answers)","answers":["B","C","D"],
    "options":{"A":"Feature a compact and lightweight design, making them more convenient for mobile use","B":"Are often designed for specific brands or models, ensuring compatibility with unique laptop features","C":"Provide additional hardware capabilities, such as enhanced graphics or storage options, beyond basic connectivity","D":"Tend to be larger and less portable, making them more suitable for fixed workspaces","E":"Primarily expand connectivity options, such as additional USB ports and Ethernet, but do not support advanced hardware features like external graphics or storage"},
    "explanations":{"A":"The supplied quiz associates compact, lightweight portability with port replicators rather than full docking stations.","B":"Docking stations may use model-specific interfaces or features so they can integrate closely with a particular laptop family.","C":"A docking station can offer more than extra ports and may extend the system with additional hardware capabilities.","D":"Docking stations are commonly intended to create a desk-based setup where monitors, networking, power, and peripherals remain connected.","E":"The quiz uses this description for port replicators, whose main role is port expansion rather than broader docking capabilities."},
    "tip":"Think of a docking station as a desk expansion system — it can connect the laptop to many peripherals and may add capabilities beyond simple ports."
  },
  {
    "topic":"Mobile Device Accessories","number":4,
    "question":"Which of the following statements describe port replicators? (Select 3 answers)","answers":["A","C","E"],
    "options":{"A":"Are generally designed for broad compatibility, working with a wide range of laptop models","B":"Provide additional hardware capabilities, such as enhanced graphics or storage options, beyond basic connectivity","C":"Feature a compact and lightweight design, making them more convenient for mobile use","D":"Are often designed for specific brands or models, ensuring compatibility with unique laptop features","E":"Primarily expand connectivity options, such as additional USB ports and Ethernet, but do not support advanced hardware features like external graphics or storage","F":"Tend to be larger and less portable, making them more suitable for fixed workspaces"},
    "explanations":{"A":"Port replicators commonly connect through standardized interfaces, allowing them to work with more than one laptop model.","B":"The supplied quiz distinguishes port replicators from docking stations by emphasizing basic connectivity expansion rather than advanced added hardware.","C":"A port replicator is typically simpler and more portable because its main purpose is to provide extra connection ports.","D":"Model-specific integration is associated more closely with docking stations in the quiz; port replicators are described as broadly compatible.","E":"This describes the central role of a port replicator: duplicating or adding useful ports without acting as a more capable expansion dock.","F":"That description fits docking stations in the supplied material, while port replicators are presented as compact and portable."},
    "tip":"Port replicator = more ports. Docking station = a fuller workstation connection that may offer capabilities beyond basic port expansion."
  },
  {
    "topic":"Mobile Device Accessories","number":5,
    "question":"What is the name of a laptop component that provides the function of a pointing device?","answers":["C"],
    "options":{"A":"Stylus","B":"Mouse","C":"Trackpad","D":"Cursor","E":"Touchpad"},
    "explanations":{"A":"A stylus is a separate pen-like input accessory used with touchscreens or drawing surfaces, not the built-in laptop pointing component requested.","B":"A mouse is a pointing device, but it is normally an external peripheral rather than the laptop component identified by the quiz.","C":"A trackpad is the built-in touch-sensitive surface on many laptops that moves the pointer and supports clicking or gestures.","D":"The cursor is the on-screen indicator controlled by a pointing device; it is not a physical laptop input component.","E":"Touchpad is commonly used as a synonym for trackpad in general computing, but the supplied quiz specifically marks Trackpad as its correct answer."},
    "tip":"The trackpad is the flat touch-sensitive pointing surface below a laptop keyboard; the pointer you move on the screen is the cursor."
  },
  {
    "topic":"Mobile Device Accessories","number":6,
    "question":"Which of the input devices listed below requires a stylus?","answers":["C"],
    "options":{"A":"Touchpad","B":"Tracking point","C":"Drawing pad","D":"Trackpad"},
    "explanations":{"A":"A touchpad is normally operated with a finger and does not require a stylus for standard laptop pointer control.","B":"A tracking point is the small pressure-sensitive pointing stick embedded in some keyboards and is controlled directly with a finger.","C":"A drawing pad is designed for pen-style input and uses a stylus to provide precise drawing, writing, or design control.","D":"A trackpad is a finger-operated pointing surface and does not require a stylus."},
    "tip":"Drawing tablets pair a flat sensing surface with a stylus so the user can create precise pen strokes that would be difficult with a mouse or trackpad."
  },
  {
    "topic":"Mobile Device Accessories","number":7,
    "question":"A track point is a small pointing stick embedded in a keyboard used for precise cursor control.","answers":["A"],
    "options":{"A":"True","B":"False"},
    "explanations":{"A":"A track point, also called a pointing stick, is a small pressure-sensitive control positioned among keyboard keys on some laptops. Moving or pressing it directs the on-screen pointer without requiring a separate mouse or trackpad.","B":"The statement accurately describes a track point, so False contradicts the function and physical placement of this laptop pointing device."},
    "tip":"Track point = pointing stick in the keyboard; trackpad = flat touch surface below the keyboard."
  }

];
