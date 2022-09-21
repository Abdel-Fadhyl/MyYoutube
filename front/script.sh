#!/bin/bash

echo "          MIS A JOUR ET INSTALLATION DE BASE                  "

sudo apt-get update

sudo apt-get install apt-transport-https -y

sudo apt-get install ca-certificates -y

sudo apt-get install curl -y

sudo apt-get install gnupg -y

sudo apt-get install lsb-release -y

sleep 2

echo "          AJOUTE DE LA CLE GPG                    "

curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sleep 2

echo "          INSTALLATION DOCKER                 "

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io -y

sudo curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

echo "          DONNATION DE DROIT A DEPLOYER                   "

sudo groupadd docker

sudo usermod -aG docker $USER

newgrp docker 