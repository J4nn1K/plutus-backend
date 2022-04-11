# Plutus Backend
## Running the backend
Build and run the Docker Compose file `docker-compose.yml` in this project's root directory:
```
docker-compose up
```
## Development setup
From this project's root directory install the required node packages:
```
npm install
```
Run the node.js server:
```
node .
```
Note that a PostgreSQL database service needs to run on the system. 
## Using WSL2
When running inside a Windows Subsystem for Linux it is recommended to set up a port proxy to map internal ports to external ones. To do this the PowerShell script `wsl2-portproxy.ps1` is included in this project's root directory. First, set execution policy on Windows:
```
Set-ExecutionPolicy RemoteSigned
```
Then, run the script on Windows:
```
PowerShell wsl2-network.ps1
```