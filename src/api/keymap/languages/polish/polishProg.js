import { withModifiers } from "../../db/utils";

const polishProgLetters = [];

const altGRPolishProg = {
  groupName: "AltGR Polish",
  keys: [
    {
      code: 1028,
      labels: {
        primary: "Ą",
      },
    },
    {
      code: 1030,
      labels: {
        primary: "Ć",
      },
    },
    {
      code: 1032,
      labels: {
        primary: "Ę",
      },
    },
    {
      code: 1039,
      labels: {
        primary: "Ł",
      },
    },
    {
      code: 1040,
      labels: {
        primary: "Μ",
      },
    },
    {
      code: 1041,
      labels: {
        primary: "Ń",
      },
    },
    {
      code: 1042,
      labels: {
        primary: "Ó",
      },
    },
    {
      code: 1046,
      labels: {
        primary: "Ś",
      },
    },
    {
      code: 1051,
      labels: {
        primary: "Ź",
      },
    },
    {
      code: 1053,
      labels: {
        primary: "Ż",
      },
    },
  ],
};

const polishProg = polishProgLetters;

const table = { keys: polishProg };
const tableWithoutModifier = { keys: polishProgLetters };

const polishProgCtrlTable = withModifiers(table, "Control +", "C+", 256);
const polishProgLAltTable = withModifiers(table, "Alt +", "A+", 512);
const polishProgRAltTable = withModifiers(table, "AltGr +", "AGr+", 1024);
const polishProgShiftTable = withModifiers(tableWithoutModifier, "Shift +", "O+", 2048);
const polishProgGuiTable = withModifiers(table, "Os +", "O+", 4096);

// Double

const polishProgCATable = withModifiers(table, "Control + Alt +", "C+A+", 768);

const polishProgCAGrTable = withModifiers(table, "Control + AltGr +", "C+AGr+", 1280);

const polishProgCSTable = withModifiers(table, "Control + Shift +", "C+O+", 2304);

const polishProgCGTable = withModifiers(table, "Control + Os +", "C+G+", 4352);

const polishProgAAGrTable = withModifiers(table, "Alt + AltGr +", "A+AGr+", 1536);

const polishProgASTable = withModifiers(table, "Alt + Shift +", "A+O+", 2560);

const polishProgAGTable = withModifiers(table, "Alt + Os +", "A+G+", 4608);

const polishProgAGrSTable = withModifiers(table, "AltGr + Shift +", "AGr+O+", 3072);

const polishProgAGrGTable = withModifiers(table, "AltGr + Os +", "AGr+G+", 5120);

const polishProgSGTable = withModifiers(table, "Shift + Os +", "O+G+", 6144);

// Triple

const polishProgCAAGTable = withModifiers(table, "Control + Alt + AltGr +", "C+A+AGr+", 1792);

const polishProgCASTable = withModifiers(table, "Meh +", "Meh+", 2816);

const polishProgCAGTable = withModifiers(table, "Control + Alt + Os +", "C+A+G+", 4864);

const polishProgCAGSTable = withModifiers(table, "Control + AltGr + Shift +", "C+AGr+O+", 3328);

const polishProgCAGGTable = withModifiers(table, "Control + AltGr + Os +", "C+AGr+G+", 5376);

const polishProgCSGTable = withModifiers(table, "Control + Shift + Os +", "C+O+G+", 6400);

const polishProgAAGSTable = withModifiers(table, "Alt + AltGr + Shift +", "A+AGr+O+", 3584);

const polishProgAAGGTable = withModifiers(table, "Alt + AltGr + Os +", "A+AGr+G+", 5632);

const polishProgASGTable = withModifiers(table, "Alt + Shift + Os +", "A+O+G+", 6656);

const polishProgAGSGTable = withModifiers(table, "AltGr + Shift + Os +", "AGr+O+G+", 7168);

// Quad

const polishProgCAAGrSTable = withModifiers(table, "Meh + AltGr +", "M+AGr+", 3840);

const polishProgCAAGrGTable = withModifiers(table, "Control + Alt + AltGr + Os +", "C+A+AGr+G+", 5888);

const polishProgAAGrSGTable = withModifiers(table, "Control + AltGr + Shift + Os +", "C+AGr+O+G+", 7424);

const polishProgCAGrSGTable = withModifiers(table, "Alt + AltGr + Shift + Os +", "A+AGr+O+G+", 7680);

const polishProgAllModTable = withModifiers(table, "Hyper + AltGr +", "H+AGr+", 7936);

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

const polishProgModifiedTables = [
  polishProgCtrlTable,
  polishProgLAltTable,
  polishProgRAltTable,
  polishProgShiftTable,
  polishProgGuiTable,
  polishProgCATable,
  altGRPolishProg,
  polishProgCAGrTable,
  polishProgCSTable,
  polishProgCGTable,
  polishProgAAGrTable,
  polishProgASTable,
  polishProgAGTable,
  polishProgSGTable,
  polishProgAGrSTable,
  polishProgAGrGTable,
  polishProgCAAGTable,
  polishProgCASTable,
  polishProgCAGTable,
  polishProgCAGSTable,
  polishProgCAGGTable,
  polishProgCSGTable,
  polishProgAAGSTable,
  polishProgAAGGTable,
  polishProgASGTable,
  polishProgAGSGTable,
  polishProgCAAGrSTable,
  polishProgCAAGrGTable,
  withModifiers(table, "Hyper +", "Hyper+", 6912),
  polishProgCAGrSGTable,
  polishProgAAGrSGTable,
  polishProgAllModTable,
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

export { polishProg as default, polishProgModifiedTables };
