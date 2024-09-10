/* Bazecor keymap library
 * Copyright (C) 2019  DygmaLab SE
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Is an Array of objects of values that have to be modified.
 */

import { withModifiers } from "../../db/utils";
import { BaseKeycodeTableType, KeymapCodeTableType } from "../../types";

const svSELetters: KeymapCodeTableType[] = [
  {
    code: 47,
    labels: {
      primary: "Å",
    },
    newGroupName: "Letters",
  },
  {
    code: 51,
    labels: {
      primary: "Ö",
    },
    newGroupName: "Letters",
  },
  {
    code: 52,
    labels: {
      primary: "Ä",
    },
    newGroupName: "Letters",
  },
];

const svSEModifierKeys: KeymapCodeTableType[] = [
  {
    code: 53,
    labels: {
      primary: "§",
    },
  },
  {
    code: 45,
    labels: {
      primary: "+",
    },
  },
  {
    code: 46,
    labels: {
      primary: "´",
    },
  },
  {
    code: 48,
    labels: {
      primary: "¨",
    },
  },
  {
    code: 49,
    labels: {
      primary: "'",
    },
  },
  {
    code: 56,
    labels: {
      primary: "-",
    },
  },
  {
    code: 100,
    labels: {
      primary: "<",
    },
  },
];

const altCtrlSwedish: BaseKeycodeTableType = {
  groupName: "AltCtrl Swedish",
  keys: [
    {
      code: 799,
      labels: {
        primary: "@",
      },
      alt: true,
    },
    {
      code: 800,
      labels: {
        primary: "£",
      },
      alt: true,
    },
    {
      code: 801,
      labels: {
        primary: "$",
      },
      alt: true,
    },
    {
      code: 802,
      labels: {
        primary: "€",
      },
      alt: true,
    },
    {
      code: 804,
      labels: {
        primary: "{",
      },
      alt: true,
    },
    {
      code: 805,
      labels: {
        primary: "[",
      },
      alt: true,
    },
    {
      code: 806,
      labels: {
        primary: "]",
      },
      alt: true,
    },
    {
      code: 807,
      labels: {
        primary: "}",
      },
      alt: true,
    },
    {
      code: 813,
      labels: {
        primary: "\\",
      },
      alt: true,
    },
    {
      code: 776,
      labels: {
        primary: "€",
      },
      alt: true,
    },
    {
      code: 816,
      labels: {
        primary: "~",
      },
      alt: true,
    },
    {
      code: 784,
      labels: {
        primary: "µ",
      },
      alt: true,
    },
    {
      code: 868,
      labels: {
        primary: "|",
      },
      alt: true,
    },
  ],
};

const altGRSwedish: BaseKeycodeTableType = {
  groupName: "AltCtrl Swedish",
  keys: [
    {
      code: 1055,
      labels: {
        primary: "@",
      },
      alt: true,
    },
    {
      code: 1056,
      labels: {
        primary: "£",
      },
      alt: true,
    },
    {
      code: 1057,
      labels: {
        primary: "$",
      },
      alt: true,
    },
    {
      code: 1058,
      labels: {
        primary: "€",
      },
      alt: true,
    },
    {
      code: 1060,
      labels: {
        primary: "{",
      },
      alt: true,
    },
    {
      code: 1061,
      labels: {
        primary: "[",
      },
      alt: true,
    },
    {
      code: 1062,
      labels: {
        primary: "]",
      },
      alt: true,
    },
    {
      code: 1063,
      labels: {
        primary: "}",
      },
      alt: true,
    },
    {
      code: 1069,
      labels: {
        primary: "\\",
      },
      alt: true,
    },
    {
      code: 1032,
      labels: {
        primary: "€",
      },
      alt: true,
    },
    {
      code: 1072,
      labels: {
        primary: "~",
      },
      alt: true,
    },
    {
      code: 1040,
      labels: {
        primary: "µ",
      },
      alt: true,
    },
    {
      code: 1124,
      labels: {
        primary: "|",
      },
      alt: true,
    },
  ],
};

const shiftModifierSwedish: BaseKeycodeTableType = {
  groupName: "Shifted Swedish",
  keys: [
    {
      code: 2101,
      labels: {
        primary: "½",
      },
      alt: true,
    },
    {
      code: 2079,
      labels: {
        primary: '"',
      },
      alt: true,
    },
    {
      code: 2081,
      labels: {
        primary: "¤",
      },
      alt: true,
    },
    {
      code: 2083,
      labels: {
        primary: "&",
      },
      alt: true,
    },
    {
      code: 2084,
      labels: {
        primary: "/",
      },
      alt: true,
    },
    {
      code: 2085,
      labels: {
        primary: "(",
      },
      alt: true,
    },
    {
      code: 2086,
      labels: {
        primary: ")",
      },
      alt: true,
    },
    {
      code: 2087,
      labels: {
        primary: "=",
      },
      alt: true,
    },
    {
      code: 2093,
      labels: {
        primary: "?",
      },
      alt: true,
    },
    {
      code: 2094,
      labels: {
        primary: "`",
      },
      alt: true,
    },
    {
      code: 2096,
      labels: {
        primary: "^",
      },
      alt: true,
    },
    {
      code: 2097,
      labels: {
        primary: "*",
      },
      alt: true,
    },
    {
      code: 2102,
      labels: {
        primary: ";",
      },
      alt: true,
    },
    {
      code: 2103,
      labels: {
        primary: ":",
      },
      alt: true,
    },
    {
      code: 2104,
      labels: {
        primary: "_",
      },
      alt: true,
    },
    {
      code: 2148,
      labels: {
        primary: ">",
      },
      alt: true,
    },
  ],
};

const svSE = svSELetters.concat(svSEModifierKeys);

const table: BaseKeycodeTableType = { keys: svSE, groupName: "" };
const tableWithoutModifier: BaseKeycodeTableType = { keys: svSELetters, groupName: "" };

const svSECtrlTable = withModifiers(table, "Control +", "C+", 256);
const svSELAltTable = withModifiers(table, "Alt +", "A+", 512);
const svSERAltTable = withModifiers(table, "AltGr +", "AGr+", 1024);
const svSEShiftTable = withModifiers(tableWithoutModifier, "Shift +", "S+", 2048);
const svSEGuiTable = withModifiers(table, "Os+", "O+", 4096);

// Double

const svSECATable = withModifiers(table, "Control + Alt +", "C+A+", 768);
const svSECAGrTable = withModifiers(table, "Control + AltGr +", "C+AGr+", 1280);
const svSECSTable = withModifiers(table, "Control + Shift +", "C+S+", 2304);
const svSECGTable = withModifiers(table, "Control + Os +", "C+O+", 4352);
const svSEAAGrTable = withModifiers(table, "Alt + AltGr +", "A+AGr+", 1536);
const svSEASTable = withModifiers(table, "Alt + Shift +", "A+S+", 2560);
const svSEAGTable = withModifiers(table, "Alt + Os +", "A+O+", 4608);
const svSEAGrSTable = withModifiers(table, "AltGr + Shift +", "AGr+S+", 3072);
const svSEAGrGTable = withModifiers(table, "AltGr + Os +", "AGr+O+", 5120);
const svSESGTable = withModifiers(table, "Shift + Os +", "S+O+", 6144);

// Triple

const svSECAAGTable = withModifiers(table, "Control + Alt + AltGr +", "C+A+AGr+", 1792);
const svSECASTable = withModifiers(table, "Meh +", "Meh+", 2816);
const svSECAGTable = withModifiers(table, "Control + Alt + Os +", "C+A+O+", 4864);
const svSECAGSTable = withModifiers(table, "Control + AltGr + Shift +", "C+AGr+S+", 3328);
const svSECAGGTable = withModifiers(table, "Control + AltGr + Os +", "C+AGr+O+", 5376);
const svSECSGTable = withModifiers(table, "Control + Shift + Os +", "C+S+O+", 6400);
const svSEAAGSTable = withModifiers(table, "Alt + AltGr + Shift +", "A+AGr+S+", 3584);
const svSEAAGGTable = withModifiers(table, "Alt + AltGr + Os +", "A+AGr+O+", 5632);
const svSEASGTable = withModifiers(table, "Alt + Shift + Os +", "A+S+O+", 6656);
const svSEAGSGTable = withModifiers(table, "AltGr + Shift + Os +", "AGr+S+O+", 7168);

// Quad

const svSECAAGrSTable = withModifiers(table, "Meh + AltGr +", "M+AGr+", 3840);
const svSECAAGrGTable = withModifiers(table, "Control + Alt + AltGr + Os +", "C+A+AGr+O+", 5888);
const svSECAGrSGTable = withModifiers(table, "Control + AltGr + Shift + Os +", "C+AGr+S+O+", 7424);
const svSEAAGrSGTable = withModifiers(table, "Alt + AltGr + Shift + Os +", "A+AGr+S+O+", 7680);
const svSEAllModTable = withModifiers(table, "Hyper + AltGr +", "H+AGr+", 7936);

const DualUseCtrlTable = withModifiers(table, "Control /", "CTRL/", 49169);
const DualUseShiftTable = withModifiers(table, "Shift /", "SHIFT/", 49425);
const DualUseAltTable = withModifiers(table, "Alt /", "ALT/", 49681);
const DualUseGuiTable = withModifiers(table, "Os /", "OS/", 49937);
const DualUseAltGrTable = withModifiers(table, "AltGr /", "ALTGR/", 50705);
const DualUseLayer1Tables = withModifiers(table, "Layer #1 /", "L#1/", 51218);
const DualUseLayer2Tables = withModifiers(table, "Layer #2 /", "L#2/", 51474);
const DualUseLayer3Tables = withModifiers(table, "Layer #3 /", "L#3/", 51730);
const DualUseLayer4Tables = withModifiers(table, "Layer #4 /", "L#4/", 51986);
const DualUseLayer5Tables = withModifiers(table, "Layer #5 /", "L#5/", 52242);
const DualUseLayer6Tables = withModifiers(table, "Layer #6 /", "L#6/", 52498);
const DualUseLayer7Tables = withModifiers(table, "Layer #7 /", "L#7/", 52754);
const DualUseLayer8Tables = withModifiers(table, "Layer #8 /", "L#8/", 53010);

const svSEModifiedTables = [
  shiftModifierSwedish,
  svSECtrlTable,
  svSELAltTable,
  svSERAltTable,
  svSEShiftTable,
  svSEGuiTable,
  svSECATable,
  altCtrlSwedish,
  altGRSwedish,
  svSECAGrTable,
  svSECSTable,
  svSECGTable,
  svSEAAGrTable,
  svSEASTable,
  svSEAGTable,
  svSEAGrSTable,
  svSEAGrGTable,
  svSESGTable,
  svSECAAGTable,
  svSECASTable,
  svSECAGTable,
  svSECAGSTable,
  svSECAGGTable,
  svSECSGTable,
  svSEAAGSTable,
  svSEAAGGTable,
  svSEASGTable,
  svSEAGSGTable,
  svSECAAGrSTable,
  svSECAAGrGTable,
  withModifiers(table, "Hyper +", "Hyper+", 6912),
  svSECAGrSGTable,
  svSEAAGrSGTable,
  svSEAllModTable,
  DualUseCtrlTable,
  DualUseShiftTable,
  DualUseAltTable,
  DualUseGuiTable,
  DualUseAltGrTable,
  DualUseLayer1Tables,
  DualUseLayer2Tables,
  DualUseLayer3Tables,
  DualUseLayer4Tables,
  DualUseLayer5Tables,
  DualUseLayer6Tables,
  DualUseLayer7Tables,
  DualUseLayer8Tables,
];

export { svSE, svSEModifiedTables };
