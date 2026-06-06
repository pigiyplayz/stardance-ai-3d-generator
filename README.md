SYSADMIN_SYS
A terminal-based simulation game designed for IT networking students, system administrators, and technology hobbyists. Players step into the role of a tier-2 infrastructure support engineer tasked with identifying, diagnosing, and resolving critical operating system anomalies across multiple corporate network architectures.

The platform provides an authentic command-line interactive portal that matches the styling, syntax constraints, and problem-solving flow found in real enterprise administrative nodes.

Game Overview
When launching the environment, players face a secure initialization configuration portal. The exercise requires defining parameters across two core layers:

Target Architecture (OS): Emulates structural environments across Linux Bash (user@linux-node:~$), Windows PowerShell (PS C:\Users\Admin>), or macOS Zsh (admin@macbook-pro ~ %).

Scenario Ticket (Level 1–3): Sets the complexity depth of the target system fault infrastructure.

The Resolution Pipeline
To complete a scenario track, players cannot guess or blind-fire repair scripts. The simulator forces a strict logical verification cycle:

Step 1: Identify the Problem: The system starts inside a basic container array. The player reads the active trouble ticket layout and must type help or issue environmental query commands (diagnose, system-specific commands) to scan system outputs.

Step 2: Isolate the Fault: Running diagnostic parameters prints active system error structures, process ID arrays, or firewall policies to the visual log window.

Step 3: Execute the Countermeasure: The player must parse the diagnostic output, determine the structural error (e.g., matching a rogue process ID or bad device interface name), and type the exact syntax-correct command to complete the work track.

Step 4: Record Performance: Clearing a problem registers your baseline speed matrix directly to a timed regional leader board saved directly inside local browser arrays.

Scenario Architecture & Solution Walkthrough
Every operational tier contains custom diagnostic files and required structural commands to resolve the issue. Below is the technical deployment solution index for all system modules:

Linux Bash Track
Level 1: Network Interface Configuration
The Problem: Remote users report an interface link failure. A device lacks an active IPv4 loop binding.

Diagnostic Command: diagnose (or ip addr)

Expected Output: Shows eth1 is active (UP) but lacks an inet entry line.

Resolution Command: ip addr add 192.168.1.50/24 dev eth1

Level 2: Resource Exhaustion & Process Management
The Problem: Web operations report processing capacities hitting critical 100% threshold metrics due to a rogue foreground mining asset.

Diagnostic Command: diagnose (or ps aux)

Expected Output: Identifies PID 842 running python3 malicious_miner.py pulling 98.4% CPU assets.

Resolution Command: kill -9 842

Level 3: Firewall Filtering Policy Rectification
The Problem: Database ports are rejecting incoming API queries due to a customized rule intercepting incoming tracking paths.

Diagnostic Command: diagnose (or iptables -L)

Expected Output: Displays an active DROP rule targeting service communication protocols across port 3306 (mysql).

Resolution Command: iptables -F

Windows PowerShell Track
Level 1: Client Resolver Cache Flashing
The Problem: Domain verification loops fail due to corruption values inside local address resolution maps.

Diagnostic Command: diagnose (or Get-NetIPAddress)

Expected Output: Flagged entries inside system lookup caches pointing to incorrect network gateways.

Resolution Command: Clear-DnsClientCache

Level 2: Unauthorized Payload Mitigation
The Problem: A hidden system daemon registry variable called MalService is actively rewriting localized execution values.

Diagnostic Command: diagnose (or Get-Service)

Expected Output: Locates MalService currently operating under a Running execution state.

Resolution Command: Stop-Service -Name MalService

Level 3: Security Descriptor Modification
The Problem: Admin utilities fail to execute configuration tasks inside the root staging folder due to invalid permission arrays.

Diagnostic Command: diagnose (or Get-Acl)

Expected Output: Access Control List reads directory inheritance entries block the default administrator group.

Resolution Command: icacls C:\SysAdmin /grant Administrator:F

macOS Zsh Track
Level 1: Network Socket Clearance
The Problem: A background background process bound itself to a critical local development port listener.

Diagnostic Command: diagnose (or lsof -i :8080)

Expected Output: Shows a rogue module operating under PID 412 actively occupying port listener 8080.

Resolution Command: kill 412

Level 2: Storage Volume Check Validation
The Problem: External storage structures fail to execute mount parameters due to filesystem structural integrity bugs.

Diagnostic Command: diagnose (or diskutil list)

Expected Output: Volume target disk /dev/disk2s1 flagged unmounted with internal catalog sector corruption logs.

Resolution Command: fsck_apfs -r /dev/disk2s1

Level 3: Persistent Malware Eradication
The Problem: A hidden execution binary profile inside local user spaces is manipulating environment parameters.

Diagnostic Command: diagnose (or ls -la)

Expected Output: Isolates a hidden directory record file named .hidden_malware.

Resolution Command: rm -rf ~/.hidden_malware
