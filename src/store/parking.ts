import { atomWithStorage, splitAtom } from "jotai/utils";

export type Vehicle = {
  type: "car" | "truck";
  name: string;
  startTime: Date;
  endTime?: Date;
  no: string;
};

export type IParkingLot = {
  id: number;

  coorX: number;
  coorY: number;
  width: number;
  height: number;
  vehicle?: Vehicle;
};

export const DEFAULT_PARKING_LOTS: Array<IParkingLot> = [
  {
    id: 1,
    coorX: 630,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 2,
    coorX: 669,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 3,
    coorX: 706,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 4,
    coorX: 746,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 5,
    coorX: 784,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 6,
    coorX: 822,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 7,
    coorX: 861,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 8,
    coorX: 900,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 9,
    coorX: 938,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 10,
    coorX: 977,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 11,
    coorX: 1015,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 12,
    coorX: 1054,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 13,
    coorX: 1092,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 14,
    coorX: 1130,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 15,
    coorX: 1169,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 16,
    coorX: 1208,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 17,
    coorX: 1246,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 18,
    coorX: 1285,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 19,
    coorX: 1323,
    coorY: 62,

    width: 30,
    height: 65,
  },
  {
    id: 20,

    coorX: 515,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 21,

    coorX: 592.362825437341,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 22,

    coorX: 552,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 23,

    coorX: 630,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 24,

    coorX: 668,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 25,

    coorX: 706.468590776211,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 26,

    coorX: 746.08810441268,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 27,

    coorX: 784,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 28,

    coorX: 823,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 29,

    coorX: 862,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 30,

    coorX: 900,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 31,

    coorX: 938,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 32,

    coorX: 977,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 33,

    coorX: 1014.7418716423614,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 34,

    coorX: 1054,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 35,

    coorX: 1092,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 36,

    coorX: 1131,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 37,

    coorX: 1169,
    coorY: 238,
    width: 30,
    height: 65,
  },
  {
    id: 38,

    coorX: 359.99849518207503,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 39,

    coorX: 399,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 40,

    coorX: 437.07535595601,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 41,

    coorX: 475.558397989414,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 42,

    coorX: 514,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 43,

    coorX: 552,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 44,

    coorX: 592,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 45,

    coorX: 630,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 46,

    coorX: 668,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 47,

    coorX: 706.468590776211,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 48,

    coorX: 746,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 49,

    coorX: 784,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 50,

    coorX: 823,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 51,

    coorX: 861,
    coorY: 318,
    width: 30,
    height: 65,
  },
  {
    id: 52,

    coorX: 746,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 53,

    coorX: 784,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 54,

    coorX: 822,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 55,

    coorX: 861,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 56,

    coorX: 900,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 57,

    coorX: 939,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 58,

    coorX: 707,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 59,

    coorX: 668,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 60,

    coorX: 630,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 61,

    coorX: 592,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 62,

    coorX: 552,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 63,

    coorX: 515,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 64,

    coorX: 476,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 65,

    coorX: 438,
    coorY: 496,
    width: 30,
    height: 65,
  },
  {
    id: 66,
    coorX: 438,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 67,
    coorX: 476,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 68,
    coorX: 514,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 69,
    coorX: 552,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 70,
    coorX: 593,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 71,
    coorX: 630,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 72,
    coorX: 669,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 73,
    coorX: 707,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 74,
    coorX: 745,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 75,
    coorX: 784,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 76,
    coorX: 823,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 77,
    coorX: 861,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 78,
    coorX: 899,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 79,
    coorX: 938,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 80,
    coorX: 977,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 81,
    coorX: 1015,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 82,
    coorX: 1054,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 83,
    coorX: 1092,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 84,
    coorX: 1130,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 85,
    coorX: 1169,
    coorY: 576,

    width: 30,
    height: 65,
  },
  {
    id: 86,
    coorX: 283,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 87,
    coorX: 321,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 88,
    coorX: 360,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 89,
    coorX: 399,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 90,
    coorX: 437,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 91,
    coorX: 475,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 92,
    coorX: 514,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 93,
    coorX: 553,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 94,
    coorX: 591,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 95,
    coorX: 629,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 96,
    coorX: 668,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 97,
    coorX: 706,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 98,
    coorX: 746,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 99,
    coorX: 783,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 100,
    coorX: 822,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 101,
    coorX: 861,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 102,
    coorX: 900,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 103,
    coorX: 938,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 104,
    coorX: 976,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 105,
    coorX: 1015,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 106,
    coorX: 1054,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 107,
    coorX: 1092,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 108,
    coorX: 1131,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 109,
    coorX: 1169,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 110,
    coorX: 1208,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 111,
    coorX: 1246,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 112,
    coorX: 1285,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 113,
    coorX: 1324,
    coorY: 754,

    width: 30,
    height: 65,
  },
  {
    id: 114,

    coorX: 210,
    coorY: 527.909841968122,
    width: 65,
    height: 30,
  },
  {
    id: 115,

    coorX: 210,
    coorY: 594,
    width: 65,
    height: 30,
  },
  {
    id: 116,

    coorX: 210,
    coorY: 633,
    width: 65,
    height: 30,
  },
  {
    id: 117,

    coorX: 210,
    coorY: 672,
    width: 65,
    height: 30,
  },
  {
    id: 118,

    coorX: 210,
    coorY: 710,
    width: 65,
    height: 30,
  },
  {
    id: 119,
    coorX: 1365,
    coorY: 156,

    width: 65,
    height: 30,
  },
  {
    id: 120,
    coorX: 1365,
    coorY: 194,

    width: 65,
    height: 30,
  },
  {
    id: 121,
    coorX: 1365,
    coorY: 232,

    width: 65,
    height: 30,
  },
  {
    id: 122,
    coorX: 1365,
    coorY: 271,

    width: 65,
    height: 30,
  },
  {
    id: 123,
    coorX: 1365,
    coorY: 328,

    width: 65,
    height: 30,
  },
  {
    id: 124,
    coorX: 1365,
    coorY: 366,

    width: 65,
    height: 30,
  },
  {
    id: 125,
    coorX: 1365,
    coorY: 405,

    width: 65,
    height: 30,
  },
  {
    id: 126,
    coorX: 1365,
    coorY: 444,

    width: 65,
    height: 30,
  },
  {
    id: 127,
    coorX: 1365,
    coorY: 483,

    width: 65,
    height: 30,
  },
  {
    id: 128,
    coorX: 1365,
    coorY: 521,

    width: 65,
    height: 30,
  },
  {
    id: 129,
    coorX: 1365,
    coorY: 578,

    width: 65,
    height: 30,
  },
  {
    id: 130,
    coorX: 1365,
    coorY: 617,

    width: 65,
    height: 30,
  },
  {
    id: 131,
    coorX: 1365,
    coorY: 655,

    width: 65,
    height: 30,
  },
  {
    id: 132,
    coorX: 1365,
    coorY: 694,

    width: 65,
    height: 30,
  },
] as const;

export const parkingLotsAtom = atomWithStorage(
  "parkingLots",
  DEFAULT_PARKING_LOTS
);

export const parkingLotAtom = splitAtom(parkingLotsAtom, (item) => item.id);
