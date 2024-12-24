import argparse
import asyncio
from bleak import BleakClient

address = "A4:C1:38:53:7B:75"

# For govee H6138
async def turn_off_light(hex):
    async with BleakClient(address) as client:
        await client.write_gatt_char("00010203-0405-0607-0809-0a0b0c0d2b11", bytearray.fromhex(hex))

def main():
    parser = argparse.ArgumentParser(description="Control the light via BLE")
    parser.add_argument("hex", type=str, help="Hex code to send to the light")
    args = parser.parse_args()

    asyncio.run(turn_off_light(args.hex))

if __name__ == "__main__":
    main()
