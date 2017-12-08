# Low

WOL Sender made with Vue.js

## Install

```bash
# install dependencied
npm install

# start server
ADDRESS=192.168.1.255 MACHINES='[{"name":"Machine1","ip":"192.168.1.1","mac":"ff:ff:ff:ff:ff"}]' npm run start
```

### Docker

```bash
docker run --net=host -e ADDRESS=192.168.1.255 -e MACHINES='[{"name":"Machine1","ip":"192.168.1.1","mac":"ff:ff:ff:ff:ff"}]' flum1025/low
```

for Raspberry Pi Image: `flum1025/rpi-low`
