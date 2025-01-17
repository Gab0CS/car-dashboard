import { transformData, RawData } from './tableDataFunctions'

const rawDataTable: RawData[] = [
    {
        "condition": "new",
        "description": "New 2024 GMC Terrain",
        "title": "New 2024 GMC Terrain SLE",
        "brand": "GMC",
        "price": "29829 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-10-22 22:31:03"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Yukon XL",
        "title": "New 2024 GMC Yukon XL AT4",
        "brand": "GMC",
        "price": "73767 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon XL",
        "timestamp": "2024-03-31 23:14:40"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 AT4X Crew Cab",
        "brand": "GMC",
        "price": "72747 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-08-29 18:04:21"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Denali Crew Cab",
        "brand": "GMC",
        "price": "71895 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-03-12 21:24:03"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Denali Crew Cab",
        "brand": "GMC",
        "price": "71895 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-03-31 04:31:36"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD Denali Crew Cab",
        "brand": "GMC",
        "price": "71435 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-06-28 18:01:04"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Yukon XL",
        "title": "New 2024 GMC Yukon XL SLT",
        "brand": "GMC",
        "price": "69666 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon XL",
        "timestamp": "2024-03-17 02:13:53"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Denali Crew Cab",
        "brand": "GMC",
        "price": "69153 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-03-25 11:51:20"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Denali Crew Cab",
        "brand": "GMC",
        "price": "67515 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-05-25 07:01:30"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 AT4 Crew Cab",
        "brand": "GMC",
        "price": "64294 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-03-13 02:34:11"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 AT4 Crew Cab",
        "brand": "GMC",
        "price": "63257 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-12-27 10:27:43"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 AT4 Crew Cab",
        "brand": "GMC",
        "price": "63257 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-12-10 07:33:38"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 AT4 Crew Cab",
        "brand": "GMC",
        "price": "62567 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-06-09 15:17:38"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 SLT Crew Cab",
        "brand": "GMC",
        "price": "60392 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-06-02 02:43:57"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Acadia",
        "title": "New 2024 GMC Acadia Denali",
        "brand": "GMC",
        "price": "59386 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-11-16 07:16:33"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Acadia",
        "title": "New 2024 GMC Acadia Denali",
        "brand": "GMC",
        "price": "57810 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-03-10 12:28:52"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Yukon XL",
        "title": "New 2024 GMC Yukon XL AT4",
        "brand": "GMC",
        "price": "74597 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon XL",
        "timestamp": "2024-10-19 01:48:19"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "57395 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-02-12 04:31:50"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Denali Ultimate Crew Cab",
        "brand": "GMC",
        "price": "76528 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-01-29 01:04:26"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD AT4 Crew Cab",
        "brand": "GMC",
        "price": "78356 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-01-28 23:18:25"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Yukon XL",
        "title": "New 2024 GMC Yukon XL Denali Ultimate",
        "brand": "GMC",
        "price": "95662 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon XL",
        "timestamp": "2024-04-10 06:20:42"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD AT4X Crew Cab",
        "brand": "GMC",
        "price": "94158 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-01-23 01:19:27"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Yukon",
        "title": "New 2024 GMC Yukon Denali Ultimate",
        "brand": "GMC",
        "price": "92429 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon",
        "timestamp": "2024-06-12 02:39:08"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 3500 HD",
        "title": "New 2024 GMC Sierra 3500 HD Denali Ultimate Crew Cab",
        "brand": "GMC",
        "price": "91570 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 3500 HD",
        "timestamp": "2024-05-16 01:37:41"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD Denali Ultimate Crew Cab",
        "brand": "GMC",
        "price": "87565 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-03-26 05:38:22"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD Denali Ultimate Crew Cab",
        "brand": "GMC",
        "price": "87133 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-04-03 09:38:11"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Yukon",
        "title": "New 2024 GMC Yukon Denali",
        "brand": "GMC",
        "price": "85088 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon",
        "timestamp": "2024-01-13 16:26:39"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Yukon XL",
        "title": "New 2024 GMC Yukon XL Denali",
        "brand": "GMC",
        "price": "82838 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon XL",
        "timestamp": "2024-07-18 01:46:41"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD Denali Crew Cab",
        "brand": "GMC",
        "price": "81972 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-08-06 06:27:26"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 3500 HD",
        "title": "New 2024 GMC Sierra 3500 HD Denali Crew Cab",
        "brand": "GMC",
        "price": "81520 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 3500 HD",
        "timestamp": "2024-04-17 15:07:51"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 3500 HD",
        "title": "New 2024 GMC Sierra 3500 HD Denali Crew Cab",
        "brand": "GMC",
        "price": "81360 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 3500 HD",
        "timestamp": "2024-02-21 09:28:10"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD Denali Crew Cab",
        "brand": "GMC",
        "price": "81298 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-05-17 22:48:56"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Yukon XL",
        "title": "New 2024 GMC Yukon XL Denali",
        "brand": "GMC",
        "price": "80981 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon XL",
        "timestamp": "2024-05-08 10:08:52"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD Denali Crew Cab",
        "brand": "GMC",
        "price": "80582 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-05-05 08:12:42"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 3500 HD",
        "title": "New 2024 GMC Sierra 3500 HD Denali Crew Cab",
        "brand": "GMC",
        "price": "80253 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 3500 HD",
        "timestamp": "2024-05-12 00:57:32"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Denali Ultimate Crew Cab",
        "brand": "GMC",
        "price": "76543 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-07-15 23:06:29"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "56622 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-10-13 06:35:37"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD Denali Crew Cab",
        "brand": "GMC",
        "price": "83875 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-09-05 10:42:43"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Double Cab",
        "brand": "GMC",
        "price": "54795 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-05-11 13:37:19"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Double Cab",
        "brand": "GMC",
        "price": "45987 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-08-16 13:59:33"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Acadia",
        "title": "New 2024 GMC Acadia Elevation",
        "brand": "GMC",
        "price": "44640 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-10-13 17:32:13"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Acadia",
        "title": "New 2024 GMC Acadia Elevation",
        "brand": "GMC",
        "price": "44045 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-12-12 01:08:23"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Acadia",
        "title": "New 2024 GMC Acadia Elevation",
        "brand": "GMC",
        "price": "43346 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-04-26 17:31:44"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Canyon",
        "title": "New 2024 GMC Canyon Elevation Crew Cab",
        "brand": "GMC",
        "price": "43307 USD",
        "product_type": "Truck",
        "custom_label_0": "Canyon",
        "timestamp": "2024-06-28 10:58:29"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Canyon",
        "title": "New 2024 GMC Canyon AT4 Crew Cab",
        "brand": "GMC",
        "price": "42421 USD",
        "product_type": "Truck",
        "custom_label_0": "Canyon",
        "timestamp": "2024-10-19 23:15:27"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Acadia",
        "title": "New 2024 GMC Acadia Elevation",
        "brand": "GMC",
        "price": "42082 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-07-22 11:57:04"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Canyon",
        "title": "New 2024 GMC Canyon Elevation Crew Cab",
        "brand": "GMC",
        "price": "38533 USD",
        "product_type": "Truck",
        "custom_label_0": "Canyon",
        "timestamp": "2024-05-24 03:34:24"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Pro Regular Cab",
        "brand": "GMC",
        "price": "37867 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-11-21 10:56:37"
      },
      {
        "condition": "new",
        "description": "New 2023 GMC Canyon",
        "title": "New 2023 GMC Canyon Elevation Crew Cab",
        "brand": "GMC",
        "price": "35790 USD",
        "product_type": "Truck",
        "custom_label_0": "Canyon",
        "timestamp": "2024-05-12 20:33:49"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Terrain",
        "title": "New 2024 GMC Terrain SLE",
        "brand": "GMC",
        "price": "34710 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-11-27 06:19:16"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Terrain",
        "title": "New 2024 GMC Terrain SLT",
        "brand": "GMC",
        "price": "31482 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-07-27 17:29:06"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Terrain",
        "title": "New 2024 GMC Terrain SLE",
        "brand": "GMC",
        "price": "29960 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-10-11 01:51:47"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Terrain",
        "title": "New 2024 GMC Terrain SLE",
        "brand": "GMC",
        "price": "29829 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-03-25 10:04:04"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "56491 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-05-17 11:52:29"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Double Cab",
        "brand": "GMC",
        "price": "46245 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-09-11 15:21:42"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Double Cab",
        "brand": "GMC",
        "price": "46419 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-10-03 17:24:51"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Terrain",
        "title": "New 2024 GMC Terrain SLE",
        "brand": "GMC",
        "price": "31605 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-07-29 04:43:06"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 SLE Crew Cab",
        "brand": "GMC",
        "price": "47800 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-03-23 10:51:18"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "54575 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-09-17 07:41:25"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Pro Regular Cab",
        "brand": "GMC",
        "price": "47005 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-07-15 15:03:08"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "54483 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-10-09 13:33:01"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 2500 HD",
        "title": "New 2024 GMC Sierra 2500 HD SLE Double Cab",
        "brand": "GMC",
        "price": "53412 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-11-04 04:11:28"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "50156 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-03-30 04:49:16"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "49084 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-06-02 09:57:13"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "48915 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-09-15 08:37:42"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "48784 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-01-17 00:56:12"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Acadia",
        "title": "New 2024 GMC Acadia AT4",
        "brand": "GMC",
        "price": "50969 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-02-12 02:52:20"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "48784 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-02-13 15:18:55"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "48784 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-08-30 09:08:59"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "48768 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-04-19 02:32:55"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Acadia",
        "title": "New 2024 GMC Acadia AT4",
        "brand": "GMC",
        "price": "48051 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-06-27 15:01:23"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "48768 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-06-10 17:28:41"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "48609 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-03-13 14:40:35"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "48784 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-02-06 09:28:27"
      },
      {
        "condition": "new",
        "description": "New 2024 GMC Sierra 1500",
        "title": "New 2024 GMC Sierra 1500 Elevation Crew Cab",
        "brand": "GMC",
        "price": "48609 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-08-07 15:10:25"
      },
      {
        "condition": "cpo",
        "description": "Certified 2023 GMC Yukon XL",
        "title": "Certified Pre-Owned 2023 GMC Yukon XL SLT",
        "brand": "GMC",
        "price": "64734 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon XL",
        "timestamp": "2024-09-15 04:20:37"
      },
      {
        "condition": "used",
        "description": "Used 2021 GMC Sierra 1500",
        "title": "Pre-Owned 2021 GMC Sierra 1500 SLE Crew Cab",
        "brand": "GMC",
        "price": "37212 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-08-02 05:27:39"
      },
      {
        "condition": "used",
        "description": "Used 2021 Toyota Highlander",
        "title": "Pre-Owned 2021 Toyota Highlander XLE",
        "brand": "Toyota",
        "price": "32911 USD",
        "product_type": "SUV",
        "custom_label_0": "Highlander",
        "timestamp": "2024-11-19 11:30:44"
      },
      {
        "condition": "used",
        "description": "Used 2021 Cadillac XT5",
        "title": "Pre-Owned 2021 Cadillac XT5 Premium Luxury",
        "brand": "Cadillac",
        "price": "33309 USD",
        "product_type": "SUV",
        "custom_label_0": "XT5",
        "timestamp": "2024-05-21 02:56:08"
      },
      {
        "condition": "used",
        "description": "Used 2019 Ram 1500",
        "title": "Pre-Owned 2019 Ram 1500 Laramie Crew Cab",
        "brand": "Ram",
        "price": "33343 USD",
        "product_type": "Truck",
        "custom_label_0": '1500',
        "timestamp": "2024-11-06 23:33:03"
      },
      {
        "condition": "used",
        "description": "Used 2015 Chevrolet Silverado 3500HD",
        "title": "Pre-Owned 2015 Chevrolet Silverado 3500HD LTZ Crew Cab",
        "brand": "Chevrolet",
        "price": "34000 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 3500HD",
        "timestamp": "2024-09-17 17:50:33"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Silverado 1500",
        "title": "Pre-Owned 2021 Chevrolet Silverado 1500 LT Crew Cab",
        "brand": "Chevrolet",
        "price": "35698 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 1500",
        "timestamp": "2024-03-12 01:25:27"
      },
      {
        "condition": "used",
        "description": "Used 2021 Cadillac XT5",
        "title": "Pre-Owned 2021 Cadillac XT5 Premium Luxury",
        "brand": "Cadillac",
        "price": "34270 USD",
        "product_type": "SUV",
        "custom_label_0": "XT5",
        "timestamp": "2024-06-06 20:55:16"
      },
      {
        "condition": "used",
        "description": "Used 2022 GMC Sierra 1500 Limited",
        "title": "Pre-Owned 2022 GMC Sierra 1500 Limited Elevation Double Cab",
        "brand": "GMC",
        "price": "35062 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500 Limited",
        "timestamp": "2024-08-01 12:53:06"
      },
      {
        "condition": "used",
        "description": "Used 2023 Chevrolet Traverse",
        "title": "Pre-Owned 2023 Chevrolet Traverse LT Leather",
        "brand": "Chevrolet",
        "price": "35890 USD",
        "product_type": "SUV",
        "custom_label_0": "Traverse",
        "timestamp": "2024-07-10 20:40:31"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Blazer",
        "title": "Pre-Owned 2021 Chevrolet Blazer RS",
        "brand": "Chevrolet",
        "price": "35982 USD",
        "product_type": "SUV",
        "custom_label_0": "Blazer",
        "timestamp": "2024-12-22 09:15:24"
      },
      {
        "condition": "used",
        "description": "Used 2022 Buick Enclave",
        "title": "Pre-Owned 2022 Buick Enclave Avenir",
        "brand": "Buick",
        "price": "36784 USD",
        "product_type": "SUV",
        "custom_label_0": "Enclave",
        "timestamp": "2024-01-02 09:18:12"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Silverado 1500",
        "title": "Pre-Owned 2021 Chevrolet Silverado 1500 Custom Trail Boss Crew Cab",
        "brand": "Chevrolet",
        "price": "34030 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 1500",
        "timestamp": "2024-02-29 15:22:57"
      },
      {
        "condition": "used",
        "description": "Used 2019 GMC Canyon",
        "title": "Pre-Owned 2019 GMC Canyon 4WD All Terrain w/Leather 4WD Crew Cab 1283 All Terrain wLeather",
        "brand": "GMC",
        "price": "32780 USD",
        "product_type": "Truck",
        "custom_label_0": "Canyon",
        "timestamp": "2024-05-27 20:45:39"
      },
      {
        "condition": "used",
        "description": "Used 2018 Toyota 4Runner",
        "title": "Pre-Owned 2018 Toyota 4Runner SR5 Premium",
        "brand": "Toyota",
        "price": "30949 USD",
        "product_type": "SUV",
        "custom_label_0": "4Runner",
        "timestamp": "2024-03-22 16:50:49"
      },
      {
        "condition": "used",
        "description": "Used 2020 Cadillac XT5",
        "title": "Pre-Owned 2020 Cadillac XT5 Premium Luxury",
        "brand": "Cadillac",
        "price": "32415 USD",
        "product_type": "SUV",
        "custom_label_0": "XT5",
        "timestamp": "2024-03-03 12:36:48"
      },
      {
        "condition": "used",
        "description": "Used 2022 Ram 1500",
        "title": "Pre-Owned 2022 Ram 1500 Big Horn",
        "brand": "Ram",
        "price": "32386 USD",
        "product_type": "Truck",
        "custom_label_0": '1500',
        "timestamp": "2024-07-04 05:36:18"
      },
      {
        "condition": "used",
        "description": "Used 2021 Buick Enclave",
        "title": "Pre-Owned 2021 Buick Enclave Essence",
        "brand": "Buick",
        "price": "32354 USD",
        "product_type": "SUV",
        "custom_label_0": "Enclave",
        "timestamp": "2024-01-26 15:15:07"
      },
      {
        "condition": "used",
        "description": "Used 2021 GMC Sierra 1500",
        "title": "Pre-Owned 2021 GMC Sierra 1500 SLT Crew Cab",
        "brand": "GMC",
        "price": "31707 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-05-18 01:58:57"
      },
      {
        "condition": "used",
        "description": "Used 2021 Buick Enclave",
        "title": "Pre-Owned 2021 Buick Enclave Essence",
        "brand": "Buick",
        "price": "31280 USD",
        "product_type": "SUV",
        "custom_label_0": "Enclave",
        "timestamp": "2024-03-18 11:44:37"
      },
      {
        "condition": "used",
        "description": "Used 2020 Ram 1500",
        "title": "Pre-Owned 2020 Ram 1500 Big Horn/Lone Star Crew Cab",
        "brand": "Ram",
        "price": "31255 USD",
        "product_type": "Truck",
        "custom_label_0": '1500',
        "timestamp": "2024-10-17 23:32:57"
      },
      {
        "condition": "used",
        "description": "Used 2022 GMC Acadia",
        "title": "Pre-Owned 2022 GMC Acadia AT4",
        "brand": "GMC",
        "price": "30670 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-11-22 14:59:54"
      },
      {
        "condition": "used",
        "description": "Used 2021 Ram 1500",
        "title": "Pre-Owned 2021 Ram 1500 Big Horn/Lone Star Crew Cab",
        "brand": "Ram",
        "price": "30651 USD",
        "product_type": "Truck",
        "custom_label_0": '1500',
        "timestamp": "2024-03-04 07:40:43"
      },
      {
        "condition": "used",
        "description": "Used 2021 Buick Enclave",
        "title": "Pre-Owned 2021 Buick Enclave Essence",
        "brand": "Buick",
        "price": "30227 USD",
        "product_type": "SUV",
        "custom_label_0": "Enclave",
        "timestamp": "2024-11-01 04:07:41"
      },
      {
        "condition": "used",
        "description": "Used 2024 GMC Terrain",
        "title": "Pre-Owned 2024 GMC Terrain SLT",
        "brand": "GMC",
        "price": "30000 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-10-07 22:39:44"
      },
      {
        "condition": "used",
        "description": "Used 2021 GMC Acadia",
        "title": "Pre-Owned 2021 GMC Acadia AT4",
        "brand": "GMC",
        "price": "29894 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-09-11 08:48:04"
      },
      {
        "condition": "used",
        "description": "Used 2021 GMC Sierra 1500",
        "title": "Pre-Owned 2021 GMC Sierra 1500 Denali Crew Cab",
        "brand": "GMC",
        "price": "38000 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-10-22 18:02:52"
      },
      {
        "condition": "used",
        "description": "Used 2020 Honda Odyssey",
        "title": "Pre-Owned 2020 Honda Odyssey EX-L",
        "brand": "Honda",
        "price": "28873 USD",
        "product_type": "Minivan",
        "custom_label_0": "Odyssey",
        "timestamp": "2024-12-13 01:03:50"
      },
      {
        "condition": "used",
        "description": "Used 2021 Buick Enclave",
        "title": "Pre-Owned 2021 Buick Enclave Essence",
        "brand": "Buick",
        "price": "32501 USD",
        "product_type": "SUV",
        "custom_label_0": "Enclave",
        "timestamp": "2024-05-11 20:25:48"
      },
      {
        "condition": "used",
        "description": "Used 2019 GMC Sierra 1500",
        "title": "Pre-Owned 2019 GMC Sierra 1500 Denali Crew Cab",
        "brand": "GMC",
        "price": "38324 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-06-16 08:32:53"
      },
      {
        "condition": "used",
        "description": "Used 2022 GMC Yukon",
        "title": "Pre-Owned 2022 GMC Yukon Denali",
        "brand": "GMC",
        "price": "65000 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon",
        "timestamp": "2024-09-08 04:13:27"
      },
      {
        "condition": "used",
        "description": "Used 2024 GMC Savana 2500",
        "title": "Pre-Owned 2024 GMC Savana 2500 Work Van",
        "brand": "GMC",
        "price": "40000 USD",
        "product_type": "Other",
        "custom_label_0": "Savana 2500",
        "timestamp": "2024-11-30 01:08:54"
      },
      {
        "condition": "used",
        "description": "Used 2023 Buick Envision",
        "title": "Pre-Owned 2023 Buick Envision Preferred",
        "brand": "Buick",
        "price": "28837 USD",
        "product_type": "SUV",
        "custom_label_0": "Envision",
        "timestamp": "2024-05-18 18:00:27"
      },
      {
        "condition": "used",
        "description": "Used 2024 GMC Sierra 3500HD",
        "title": "Pre-Owned 2024 GMC Sierra 3500HD Denali Ultimate Crew Cab",
        "brand": "GMC",
        "price": "88297 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 3500HD",
        "timestamp": "2024-06-25 09:11:29"
      },
      {
        "condition": "used",
        "description": "Used 2023 GMC Sierra 2500 HD",
        "title": "Pre-Owned 2023 GMC Sierra 2500 HD AT4 Crew Cab",
        "brand": "GMC",
        "price": "62321 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500 HD",
        "timestamp": "2024-02-12 05:49:08"
      },
      {
        "condition": "used",
        "description": "Used 2013 International Workstar",
        "title": "Pre-Owned 2013 International Workstar 7500",
        "brand": "International",
        "price": "60000 USD",
        "product_type": "Truck",
        "custom_label_0": "Workstar",
        "timestamp": "2024-08-09 04:47:44"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Silverado 3500 HD",
        "title": "Pre-Owned 2021 Chevrolet Silverado 3500 HD LTZ Crew Cab",
        "brand": "Chevrolet",
        "price": "59166 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 3500 HD",
        "timestamp": "2024-05-15 01:21:46"
      },
      {
        "condition": "used",
        "description": "Used 2023 GMC Sierra 2500HD",
        "title": "Pre-Owned 2023 GMC Sierra 2500HD SLE Double Cab",
        "brand": "GMC",
        "price": "58000 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 2500HD",
        "timestamp": "2024-12-03 15:32:48"
      },
      {
        "condition": "used",
        "description": "Used 2022 Chevrolet Silverado 1500",
        "title": "Pre-Owned 2022 Chevrolet Silverado 1500 ZR2 Crew Cab",
        "brand": "Chevrolet",
        "price": "56020 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 1500",
        "timestamp": "2024-08-12 23:22:01"
      },
      {
        "condition": "used",
        "description": "Used 2020 Chevrolet Silverado 3500HD",
        "title": "Pre-Owned 2020 Chevrolet Silverado 3500HD LTZ Crew Cab",
        "brand": "Chevrolet",
        "price": "55421 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 3500HD",
        "timestamp": "2024-09-09 20:48:17"
      },
      {
        "condition": "used",
        "description": "Used 2022 Toyota Tundra Hybrid",
        "title": "Pre-Owned 2022 Toyota Tundra Hybrid 1794 Edition Crew Cab",
        "brand": "Toyota",
        "price": "54977 USD",
        "product_type": "Truck",
        "custom_label_0": "Tundra Hybrid",
        "timestamp": "2024-11-24 06:23:51"
      },
      {
        "condition": "used",
        "description": "Used 2021 GMC Yukon",
        "title": "Pre-Owned 2021 GMC Yukon AT4",
        "brand": "GMC",
        "price": "52444 USD",
        "product_type": "SUV",
        "custom_label_0": "Yukon",
        "timestamp": "2024-10-17 05:52:21"
      },
      {
        "condition": "used",
        "description": "Used 2022 Jeep Wagoneer",
        "title": "Pre-Owned 2022 Jeep Wagoneer Series III",
        "brand": "Jeep",
        "price": "52158 USD",
        "product_type": "SUV",
        "custom_label_0": "Wagoneer",
        "timestamp": "2024-10-24 07:14:29"
      },
      {
        "condition": "used",
        "description": "Used 2020 GMC Sierra 3500HD",
        "title": "Pre-Owned 2020 GMC Sierra 3500HD SLT Crew Cab",
        "brand": "GMC",
        "price": "52000 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 3500HD",
        "timestamp": "2024-12-03 21:56:51"
      },
      {
        "condition": "used",
        "description": "Used 2023 Jeep Grand Cherokee",
        "title": "Pre-Owned 2023 Jeep Grand Cherokee Summit",
        "brand": "Jeep",
        "price": "45936 USD",
        "product_type": "SUV",
        "custom_label_0": "Grand Cherokee",
        "timestamp": "2024-10-31 20:31:10"
      },
      {
        "condition": "used",
        "description": "Used 2023 Chevrolet Silverado 1500",
        "title": "Pre-Owned 2023 Chevrolet Silverado 1500 RST Crew Cab",
        "brand": "Chevrolet",
        "price": "44149 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 1500",
        "timestamp": "2024-10-05 20:12:21"
      },
      {
        "condition": "used",
        "description": "Used 2020 GMC Sierra 1500",
        "title": "Pre-Owned 2020 GMC Sierra 1500 AT4 Crew Cab",
        "brand": "GMC",
        "price": "42252 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-02-03 18:29:57"
      },
      {
        "condition": "used",
        "description": "Used 2023 GMC Sierra 1500",
        "title": "Pre-Owned 2023 GMC Sierra 1500 Elevation Double Cab",
        "brand": "GMC",
        "price": "40810 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-05-27 04:32:28"
      },
      {
        "condition": "used",
        "description": "Used 2022 Chevrolet Silverado 1500",
        "title": "Pre-Owned 2022 Chevrolet Silverado 1500 RST Crew Cab",
        "brand": "Chevrolet",
        "price": "40000 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 1500",
        "timestamp": "2024-06-03 03:07:48"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Silverado 1500",
        "title": "Pre-Owned 2021 Chevrolet Silverado 1500 RST Crew Cab",
        "brand": "Chevrolet",
        "price": "39000 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 1500",
        "timestamp": "2024-06-05 15:25:07"
      },
      {
        "condition": "used",
        "description": "Used 2022 Ford Bronco Sport",
        "title": "Pre-Owned 2022 Ford Bronco Sport Badlands",
        "brand": "Ford",
        "price": "28640 USD",
        "product_type": "SUV",
        "custom_label_0": "Bronco Sport",
        "timestamp": "2024-05-06 19:07:44"
      },
      {
        "condition": "used",
        "description": "Used 2021 GMC Terrain",
        "title": "Pre-Owned 2021 GMC Terrain SLE",
        "brand": "GMC",
        "price": "21056 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-01-18 00:58:48"
      },
      {
        "condition": "used",
        "description": "Used 2020 Chevrolet Blazer",
        "title": "Pre-Owned 2020 Chevrolet Blazer RS",
        "brand": "Chevrolet",
        "price": "26940 USD",
        "product_type": "SUV",
        "custom_label_0": "Blazer",
        "timestamp": "2024-03-25 01:29:57"
      },
      {
        "condition": "used",
        "description": "Used 2023 Chevrolet Malibu",
        "title": "Pre-Owned 2023 Chevrolet Malibu LT",
        "brand": "Chevrolet",
        "price": "21627 USD",
        "product_type": "Sedan",
        "custom_label_0": "Malibu",
        "timestamp": "2024-11-19 22:57:54"
      },
      {
        "condition": "used",
        "description": "Used 2018 Buick Enclave",
        "title": "Pre-Owned 2018 Buick Enclave Premium Group",
        "brand": "Buick",
        "price": "21520 USD",
        "product_type": "SUV",
        "custom_label_0": "Enclave",
        "timestamp": "2024-08-25 03:10:11"
      },
      {
        "condition": "used",
        "description": "Used 2020 Chevrolet Blazer",
        "title": "Pre-Owned 2020 Chevrolet Blazer LT",
        "brand": "Chevrolet",
        "price": "21456 USD",
        "product_type": "SUV",
        "custom_label_0": "Blazer",
        "timestamp": "2024-10-06 20:11:37"
      },
      {
        "condition": "used",
        "description": "Used 2020 GMC Terrain",
        "title": "Pre-Owned 2020 GMC Terrain SLE",
        "brand": "GMC",
        "price": "21000 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-03-12 08:29:45"
      },
      {
        "condition": "used",
        "description": "Used 2019 INFINITI QX60",
        "title": "Pre-Owned 2019 INFINITI QX60 LUXE",
        "brand": "INFINITI",
        "price": "20903 USD",
        "product_type": "SUV",
        "custom_label_0": "QX60",
        "timestamp": "2024-09-14 23:17:22"
      },
      {
        "condition": "used",
        "description": "Used 2018 Ram 1500",
        "title": "Pre-Owned 2018 Ram 1500 Big Horn Crew Cab",
        "brand": "Ram",
        "price": "20806 USD",
        "product_type": "Truck",
        "custom_label_0": '1500',
        "timestamp": "2024-08-19 10:10:10"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "20780 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-02-08 16:59:40"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "20602 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-05-28 06:38:24"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "20526 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-09-07 12:51:43"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "20317 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-11-01 00:27:02"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "20049 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-04-11 21:17:37"
      },
      {
        "condition": "used",
        "description": "Used 2021 GMC Terrain",
        "title": "Pre-Owned 2021 GMC Terrain SLE",
        "brand": "GMC",
        "price": "19936 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-05-17 00:57:03"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "21852 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-01-11 01:48:41"
      },
      {
        "condition": "used",
        "description": "Used 2017 Ford Explorer",
        "title": "Pre-Owned 2017 Ford Explorer XLT",
        "brand": "Ford",
        "price": "19035 USD",
        "product_type": "SUV",
        "custom_label_0": "Explorer",
        "timestamp": "2024-05-27 09:39:12"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "18539 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-11-28 12:08:37"
      },
      {
        "condition": "used",
        "description": "Used 2020 Buick Encore GX",
        "title": "Pre-Owned 2020 Buick Encore GX Select",
        "brand": "Buick",
        "price": "18300 USD",
        "product_type": "SUV",
        "custom_label_0": "Encore GX",
        "timestamp": "2024-11-03 17:03:04"
      },
      {
        "condition": "used",
        "description": "Used 2020 Chevrolet Equinox",
        "title": "Pre-Owned 2020 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "18000 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-09-23 22:07:24"
      },
      {
        "condition": "used",
        "description": "Used 2021 Mazda CX-30",
        "title": "Pre-Owned 2021 Mazda CX-30 Select",
        "brand": "Mazda",
        "price": "17875 USD",
        "product_type": "SUV",
        "custom_label_0": "CX-30",
        "timestamp": "2024-11-06 22:01:25"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Trax",
        "title": "Pre-Owned 2021 Chevrolet Trax LT",
        "brand": "Chevrolet",
        "price": "17723 USD",
        "product_type": "SUV",
        "custom_label_0": "Trax",
        "timestamp": "2024-11-24 15:35:08"
      },
      {
        "condition": "used",
        "description": "Used 2018 Chrysler Pacifica",
        "title": "Pre-Owned 2018 Chrysler Pacifica Touring L Plus",
        "brand": "Chrysler",
        "price": "16574 USD",
        "product_type": "Van",
        "custom_label_0": "Pacifica",
        "timestamp": "2024-06-14 23:00:25"
      },
      {
        "condition": "used",
        "description": "Used 2018 Ford Escape",
        "title": "Pre-Owned 2018 Ford Escape SE",
        "brand": "Ford",
        "price": "16009 USD",
        "product_type": "SUV",
        "custom_label_0": "Escape",
        "timestamp": "2024-05-21 16:22:31"
      },
      {
        "condition": "used",
        "description": "Used 2019 Subaru Outback",
        "title": "Pre-Owned 2019 Subaru Outback 2.5i",
        "brand": "Subaru",
        "price": "14279 USD",
        "product_type": "Wagon",
        "custom_label_0": "Outback",
        "timestamp": "2024-10-06 15:55:01"
      },
      {
        "condition": "used",
        "description": "Used 2014 Chevrolet Traverse",
        "title": "Pre-Owned 2014 Chevrolet Traverse LT",
        "brand": "Chevrolet",
        "price": "11671 USD",
        "product_type": "SUV",
        "custom_label_0": "Traverse",
        "timestamp": "2024-03-18 23:15:39"
      },
      {
        "condition": "used",
        "description": "Used 2012 Ram 1500",
        "title": "Pre-Owned 2012 Ram 1500 Express Standard Cab",
        "brand": "Ram",
        "price": "10000 USD",
        "product_type": "Truck",
        "custom_label_0": '1500',
        "timestamp": "2024-10-27 03:21:41"
      },
      {
        "condition": "used",
        "description": "Used 2014 Cadillac SRX",
        "title": "Pre-Owned 2014 Cadillac SRX Luxury",
        "brand": "Cadillac",
        "price": "10000 USD",
        "product_type": "SUV",
        "custom_label_0": "SRX",
        "timestamp": "2024-09-12 10:58:18"
      },
      {
        "condition": "used",
        "description": "Used 2013 Chrysler Town & Country",
        "title": "Pre-Owned 2013 Chrysler Town & Country Touring-L",
        "brand": "Chrysler",
        "price": "8507 USD",
        "product_type": "Minivan",
        "custom_label_0": "Town & Country",
        "timestamp": "2024-09-12 16:59:02"
      },
      {
        "condition": "used",
        "description": "Used 2011 Honda CR-V",
        "title": "Pre-Owned 2011 Honda CR-V EX-L",
        "brand": "Honda",
        "price": "7809 USD",
        "product_type": "SUV",
        "custom_label_0": "CR-V",
        "timestamp": "2024-07-14 06:45:55"
      },
      {
        "condition": "used",
        "description": "Used 2018 Cadillac XT5",
        "title": "Pre-Owned 2018 Cadillac XT5 FWD",
        "brand": "Cadillac",
        "price": "18797 USD",
        "product_type": "SUV",
        "custom_label_0": "XT5",
        "timestamp": "2024-10-19 11:50:24"
      },
      {
        "condition": "used",
        "description": "Used 2018 GMC Sierra 1500",
        "title": "Pre-Owned 2018 GMC Sierra 1500 SLT Crew Cab",
        "brand": "GMC",
        "price": "28244 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-05-03 23:51:16"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "21934 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-07-30 00:30:28"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "22118 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-01-21 20:42:23"
      },
      {
        "condition": "used",
        "description": "Used 2019 GMC Acadia",
        "title": "Pre-Owned 2019 GMC Acadia Denali",
        "brand": "GMC",
        "price": "26918 USD",
        "product_type": "SUV",
        "custom_label_0": "Acadia",
        "timestamp": "2024-01-03 11:11:19"
      },
      {
        "condition": "used",
        "description": "Used 2021 GMC Canyon",
        "title": "Pre-Owned 2021 GMC Canyon Elevation Standard",
        "brand": "GMC",
        "price": "26743 USD",
        "product_type": "Truck",
        "custom_label_0": "Canyon",
        "timestamp": "2024-01-08 02:39:11"
      },
      {
        "condition": "used",
        "description": "Used 2015 Cadillac Escalade",
        "title": "Pre-Owned 2015 Cadillac Escalade Luxury",
        "brand": "Cadillac",
        "price": "26699 USD",
        "product_type": "SUV",
        "custom_label_0": "Escalade",
        "timestamp": "2024-05-25 18:21:49"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Blazer",
        "title": "Pre-Owned 2021 Chevrolet Blazer LT",
        "brand": "Chevrolet",
        "price": "26525 USD",
        "product_type": "SUV",
        "custom_label_0": "Blazer",
        "timestamp": "2024-11-13 09:26:14"
      },
      {
        "condition": "used",
        "description": "Used 2020 Chevrolet Silverado 1500",
        "title": "Pre-Owned 2020 Chevrolet Silverado 1500 Custom Crew Cab",
        "brand": "Chevrolet",
        "price": "26379 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 1500",
        "timestamp": "2024-11-18 10:37:08"
      },
      {
        "condition": "used",
        "description": "Used 2022 GMC Terrain",
        "title": "Pre-Owned 2022 GMC Terrain AT4",
        "brand": "GMC",
        "price": "26228 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-11-29 23:14:33"
      },
      {
        "condition": "used",
        "description": "Used 2019 Toyota Highlander",
        "title": "Pre-Owned 2019 Toyota Highlander SE",
        "brand": "Toyota",
        "price": "25713 USD",
        "product_type": "SUV",
        "custom_label_0": "Highlander",
        "timestamp": "2024-01-27 20:03:57"
      },
      {
        "condition": "used",
        "description": "Used 2019 Ford Explorer",
        "title": "Pre-Owned 2019 Ford Explorer XLT",
        "brand": "Ford",
        "price": "25442 USD",
        "product_type": "SUV",
        "custom_label_0": "Explorer",
        "timestamp": "2024-09-14 18:26:06"
      },
      {
        "condition": "used",
        "description": "Used 2023 Buick Encore GX",
        "title": "Pre-Owned 2023 Buick Encore GX Select",
        "brand": "Buick",
        "price": "25324 USD",
        "product_type": "SUV",
        "custom_label_0": "Encore GX",
        "timestamp": "2024-11-21 09:19:36"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Blazer",
        "title": "Pre-Owned 2021 Chevrolet Blazer LT",
        "brand": "Chevrolet",
        "price": "25254 USD",
        "product_type": "SUV",
        "custom_label_0": "Blazer",
        "timestamp": "2024-09-15 00:41:00"
      },
      {
        "condition": "used",
        "description": "Used 2022 Chrysler Pacifica",
        "title": "Pre-Owned 2022 Chrysler Pacifica Touring L",
        "brand": "Chrysler",
        "price": "25055 USD",
        "product_type": "Van",
        "custom_label_0": "Pacifica",
        "timestamp": "2024-08-21 19:22:26"
      },
      {
        "condition": "used",
        "description": "Used 2022 Chrysler Pacifica",
        "title": "Pre-Owned 2022 Chrysler Pacifica Touring L",
        "brand": "Chrysler",
        "price": "25000 USD",
        "product_type": "Van",
        "custom_label_0": "Pacifica",
        "timestamp": "2024-01-09 05:17:23"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Blazer",
        "title": "Pre-Owned 2021 Chevrolet Blazer LT",
        "brand": "Chevrolet",
        "price": "24804 USD",
        "product_type": "SUV",
        "custom_label_0": "Blazer",
        "timestamp": "2024-08-01 04:33:06"
      },
      {
        "condition": "used",
        "description": "Used 2021 Subaru Crosstrek",
        "title": "Pre-Owned 2021 Subaru Crosstrek Premium",
        "brand": "Subaru",
        "price": "21950 USD",
        "product_type": "SUV",
        "custom_label_0": "Crosstrek",
        "timestamp": "2024-01-07 18:30:21"
      },
      {
        "condition": "used",
        "description": "Used 2022 Chrysler Pacifica",
        "title": "Pre-Owned 2022 Chrysler Pacifica Touring L",
        "brand": "Chrysler",
        "price": "24667 USD",
        "product_type": "Van",
        "custom_label_0": "Pacifica",
        "timestamp": "2024-03-28 15:55:32"
      },
      {
        "condition": "used",
        "description": "Used 2021 Buick Envision",
        "title": "Pre-Owned 2021 Buick Envision Preferred",
        "brand": "Buick",
        "price": "24456 USD",
        "product_type": "SUV",
        "custom_label_0": "Envision",
        "timestamp": "2024-08-27 11:16:45"
      },
      {
        "condition": "used",
        "description": "Used 2017 Ford F-150",
        "title": "Pre-Owned 2017 Ford F-150 XLT",
        "brand": "Ford",
        "price": "24087 USD",
        "product_type": "Truck",
        "custom_label_0": "F-150",
        "timestamp": "2024-08-25 16:39:04"
      },
      {
        "condition": "used",
        "description": "Used 2016 Chevrolet Silverado 1500",
        "title": "Pre-Owned 2016 Chevrolet Silverado 1500 LTZ 4WD Crew Cab 1435 LTZ w1LZ",
        "brand": "Chevrolet",
        "price": "23500 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 1500",
        "timestamp": "2024-11-29 12:18:44"
      },
      {
        "condition": "used",
        "description": "Used 2020 GMC Sierra 1500",
        "title": "Pre-Owned 2020 GMC Sierra 1500 SLE Crew Cab",
        "brand": "GMC",
        "price": "23313 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-07-14 23:21:55"
      },
      {
        "condition": "used",
        "description": "Used 2022 Ford Edge",
        "title": "Pre-Owned 2022 Ford Edge SEL",
        "brand": "Ford",
        "price": "23293 USD",
        "product_type": "SUV",
        "custom_label_0": "Edge",
        "timestamp": "2024-07-15 20:29:20"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "23105 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-03-17 17:39:02"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Blazer",
        "title": "Pre-Owned 2021 Chevrolet Blazer 3LT",
        "brand": "Chevrolet",
        "price": "23067 USD",
        "product_type": "SUV",
        "custom_label_0": "Blazer",
        "timestamp": "2024-10-05 21:39:39"
      },
      {
        "condition": "used",
        "description": "Used 2016 Chevrolet Suburban",
        "title": "Pre-Owned 2016 Chevrolet Suburban LT",
        "brand": "Chevrolet",
        "price": "23000 USD",
        "product_type": "SUV",
        "custom_label_0": "Suburban",
        "timestamp": "2024-07-08 09:26:10"
      },
      {
        "condition": "used",
        "description": "Used 2018 GMC Sierra 1500",
        "title": "Pre-Owned 2018 GMC Sierra 1500 SLT Crew Cab",
        "brand": "GMC",
        "price": "22719 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-03-24 15:27:18"
      },
      {
        "condition": "used",
        "description": "Used 2022 Buick Encore GX",
        "title": "Pre-Owned 2022 Buick Encore GX Preferred",
        "brand": "Buick",
        "price": "22606 USD",
        "product_type": "SUV",
        "custom_label_0": "Encore GX",
        "timestamp": "2024-11-25 15:44:41"
      },
      {
        "condition": "used",
        "description": "Used 2020 Toyota RAV4",
        "title": "Pre-Owned 2020 Toyota RAV4 XLE",
        "brand": "Toyota",
        "price": "22556 USD",
        "product_type": "SUV",
        "custom_label_0": "RAV4",
        "timestamp": "2024-09-04 22:12:25"
      },
      {
        "condition": "used",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "22233 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-11-06 15:30:25"
      },
      {
        "condition": "used",
        "description": "Used 2020 Ford Edge",
        "title": "Pre-Owned 2020 Ford Edge SEL",
        "brand": "Ford",
        "price": "22145 USD",
        "product_type": "SUV",
        "custom_label_0": "Edge",
        "timestamp": "2024-03-19 00:17:32"
      },
      {
        "condition": "used",
        "description": "Used 2022 GMC Terrain",
        "title": "Pre-Owned 2022 GMC Terrain SLE",
        "brand": "GMC",
        "price": "24498 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-08-13 02:12:59"
      },
      {
        "condition": "cpo",
        "description": "CPO 2017 Ford F-150",
        "title": "Pre-Owned 2017 Ford F-150 XLT",
        "brand": "Ford",
        "price": "24087 USD",
        "product_type": "Truck",
        "custom_label_0": "F-150",
        "timestamp": "2024-04-02 12:03:50"
      },
      {
        "condition": "cpo",
        "description": "Used 2016 Chevrolet Silverado 1500",
        "title": "Pre-Owned 2016 Chevrolet Silverado 1500 LTZ 4WD Crew Cab 1435 LTZ w1LZ",
        "brand": "Chevrolet",
        "price": "23500 USD",
        "product_type": "Truck",
        "custom_label_0": "Silverado 1500",
        "timestamp": "2024-03-16 08:59:59"
      },
      {
        "condition": "cpo",
        "description": "Used 2020 GMC Sierra 1500",
        "title": "Pre-Owned 2020 GMC Sierra 1500 SLE Crew Cab",
        "brand": "GMC",
        "price": "23313 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-04-02 08:16:55"
      },
      {
        "condition": "cpo",
        "description": "Used 2022 Ford Edge",
        "title": "Pre-Owned 2022 Ford Edge SEL",
        "brand": "Ford",
        "price": "23293 USD",
        "product_type": "SUV",
        "custom_label_0": "Edge",
        "timestamp": "2024-11-04 01:14:24"
      },
      {
        "condition": "cpo",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "23105 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-05-22 00:21:16"
      },
      {
        "condition": "cpo",
        "description": "Used 2021 Chevrolet Blazer",
        "title": "Pre-Owned 2021 Chevrolet Blazer 3LT",
        "brand": "Chevrolet",
        "price": "23067 USD",
        "product_type": "SUV",
        "custom_label_0": "Blazer",
        "timestamp": "2024-03-30 12:11:11"
      },
      {
        "condition": "cpo",
        "description": "Used 2016 Chevrolet Suburban",
        "title": "Pre-Owned 2016 Chevrolet Suburban LT",
        "brand": "Chevrolet",
        "price": "23000 USD",
        "product_type": "SUV",
        "custom_label_0": "Suburban",
        "timestamp": "2024-03-30 20:52:49"
      },
      {
        "condition": "cpo",
        "description": "Used 2018 GMC Sierra 1500",
        "title": "Pre-Owned 2018 GMC Sierra 1500 SLT Crew Cab",
        "brand": "GMC",
        "price": "22719 USD",
        "product_type": "Truck",
        "custom_label_0": "Sierra 1500",
        "timestamp": "2024-01-01 13:02:30"
      },
      {
        "condition": "cpo",
        "description": "Used 2022 Buick Encore GX",
        "title": "Pre-Owned 2022 Buick Encore GX Preferred",
        "brand": "Buick",
        "price": "22606 USD",
        "product_type": "SUV",
        "custom_label_0": "Encore GX",
        "timestamp": "2024-05-12 07:55:27"
      },
      {
        "condition": "cpo",
        "description": "Used 2020 Toyota RAV4",
        "title": "Pre-Owned 2020 Toyota RAV4 XLE",
        "brand": "Toyota",
        "price": "22556 USD",
        "product_type": "SUV",
        "custom_label_0": "RAV4",
        "timestamp": "2024-03-06 00:49:44"
      },
      {
        "condition": "cpo",
        "description": "Used 2021 Chevrolet Equinox",
        "title": "Pre-Owned 2021 Chevrolet Equinox LT",
        "brand": "Chevrolet",
        "price": "22233 USD",
        "product_type": "SUV",
        "custom_label_0": "Equinox",
        "timestamp": "2024-04-26 19:07:34"
      },
      {
        "condition": "cpo",
        "description": "Used 2020 Ford Edge",
        "title": "Pre-Owned 2020 Ford Edge SEL",
        "brand": "Ford",
        "price": "22145 USD",
        "product_type": "SUV",
        "custom_label_0": "Edge",
        "timestamp": "2024-04-13 06:52:56"
      },
      {
        "condition": "cpo",
        "description": "Used 2022 GMC Terrain",
        "title": "Pre-Owned 2022 GMC Terrain SLE",
        "brand": "GMC",
        "price": "24498 USD",
        "product_type": "SUV",
        "custom_label_0": "Terrain",
        "timestamp": "2024-06-21 04:10:53"
      }
]
export const dataTable = transformData(rawDataTable)