#SYSADMIN_SYS

A Terminal-based simuation game designed for IS Networking students, system administrators, and technology hobbyists. Playeers step into the role of a teir-2 infastructure support engineer tasked with identifying, diagnosing, and resolving critical operating system anomalies across multiple corporate network srchitectures.

The platform provides an authentic command-line interface protal that matches the styling, syntax constraints, and problem-solving flow found in real enterprise administrative nodes.

#Game Overview
When launching the enviorment, players face a secure initalization configuration portal. The exercise requires defining parameters across two core layers:
1. Target Atchitecture (OS): Emulates structural enviorments across Linux Bash (user@linux-node:~$ ), Windows PowerShell ( PS C:\Users\Admin> ), or macOS Zsh (admin@macbook-pro ~ % ).
2. Scenario Ticket (Levels 1-3): Sets the complexity depth of the target system fault infastructure. 

#The Resolution Pipeline
To complete a scenario track, player cannot guess or blind-fire repair scripts. The simulator forces a strict logical verification cycle:
Step 1: Identify the problem: The system starts inside a basic container array. The player reads the active trouble ticket layout and must type help or issue enviormental query commansd (diagnose, system-specific commands) to scan system outputs. 
Step 2: Isolate the fault: Running diagnostic parameters prints active system error structures, processes ID arrays, or firewall policies to the visual log window.
Step 3: Execute the Countermeasure: The player must parse the diagnostic output, determine the structural error (e.g., matching a rougr process IS or bad device interface name), and type the exact syntax-correct command to complete the work track.
Step 4: Record perforance: Clearing a problem registers your baseline speed matrix directly to a timed regional leader board saved directly inside local bowser arrays.

#Senario Architecture and Solution Walkthrough
Every operational eitier contains custom diagnostic files and required sturctural commands to resolbe the issue. Below is the techincal deployment solution index for all system modules:

#Linux Bash Track

#Level 1: Network Interface Configuration
The Problem: Remote Users report an interface link failure. A edvice lacks an active IPv4 loop binding.
Diagnostic Command: diagnose (or ip addr)
Expected Output: Shows eth1 is active (UP) but lacks an inet entry line
Resolution Command ip addr add 192.168.1.50/24 dev eth1

#Level 2: Resource Exhaustion and Process Management
The problem: Web operations report processing capacities hitting critical 100% threshold metrics due to a rogue foreground mining asset.
Diagnostic Command: diagnose (or ps aux)
Expected Output: Identifies PID 842 running python3 malicious_miner.py pulling 98.4% CPU assets.
Resolution Command: kill -9 842

#Level 3: Firewall Filtering Policy Rectification
The problem: Database ports are rejecting incoming API queries due to a customized rule intercepting incoming tracking paths.
Diagnostic Command: diagnose (or iptables -L)
Expected Output: Displays an active DROP rule targeting service communication protocols across port 3306 (mysql).
Resolution Command: iptables -F

#Windows Powershell Track

#Level 1: Client Resolver Cashe Flashing
The Problem: Domain verification loops fail due to corruption values inside local address resolution maps.
Diagnostic command: diagnose (or Get-NetIPAddress)
Expected Output: Flagges entries inside system lookup caches pointing to incorrect network gateways.
Resolution Command: Clear-DnsClientCache

#Level 2: Unauthrized Payload Mitigation
The Problem: A hidden system daemon registry variable called MalService is actively rewriting localized execution values.
Diagnostic Command: diagnose (or Get-Service) 
Expected Output: Locates MalService currently operating under a Running execution state.
Resolution Command: Stop-Service -Name MalService

#Level 3: Security Descriptor Modification
The Problem: Admin utilities fail to execute eonfiguration tasks inside the root staging folder due to invalid permission arrays.
Diagnostic Command: Diagnose (or Get-Acl)
Expected Output: Access control list reads directory inhereitance entries block the defult administrator group.
Resolution Command: icacls C:\SysAdmin /grant Administrator:F

#macOS Zsh Track

#Level 1: Network Socket Clearance
The Problem: A background backgound process bound itself to a critical local development port listener.
Diagnostic Command: diagnose (or lsof -i :8080)
Expected Output: Shows a rouge module operating under PID 412 actively occupying port listener 8080.
Resolution Command: kill 412

#Level 2: Storage Volume Check Validation
The Problem: External storage structures fail to execure mount parameters due to filesystem structural integrity bugs.
Diagnostic Command: diagnose (or diskutil list)
Expected Output: Volume target disk /dev/disk2s1 flagged unmounted with internal catalog sector corruption logs.
Resolution Command: fsck_apfs -r /dev/disk2s1

#Level 3: Persistent Malware Eradication
The Problem: A hidden execution bianary profile inside local user spaces is manipulating enviorment parameters.
Diagnostic Command: diagnose (or ls -la)
Expected Output: Isolates a hodden directory record file named .hidden_malware.
Resolution Command: rm -rf ~/.hidden_malware
