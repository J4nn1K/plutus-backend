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
## PostgreSQL
Install PostgreSQL 14:
```
sudo apt install postgresql-14 postgresql-contrib
```
There are three main commands to use the PostgreSQL service:
```
sudo service postgresql status
sudo service postgresql start
sudo service postgresql stop
```
Switch to the `postgres` user:
```
su postgres
```
Create a database with the name `postgres`:
```
createdb postgres
```
To drop (delete) the database `postgres`:
```
dropdb postgres
```
Log in without a password:
```
sudo -u postgres psql postgres
```
Change the password:
```
ALTER USER postgres WITH PASSWORD 'password';
```
## Using WSL2 
When running inside a Windows Subsystem for Linux it is recommended to set up a port proxy to map internal ports to external ones. To do this the PowerShell script `wsl2-portproxy.ps1` is included in this project's root directory. First, set execution policy on Windows:
```
Set-ExecutionPolicy RemoteSigned
```
Then, run the script on Windows:
```
PowerShell wsl2-network.ps1
```