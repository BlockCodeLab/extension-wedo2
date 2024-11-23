// service uuids
const DEVICE_SERVICE = '00001523-1212-efde-1523-785feabcd123';
const IO_SERVICE = '00004f0e-1212-efde-1523-785feabcd123';

// characteristic uuids
const ATTACHED_IO = '00001527-1212-efde-1523-785feabcd123';
const LOW_VOLTAGE_ALERT = '00001528-1212-efde-1523-785feabcd123';
const INPUT_VALUES = '00001560-1212-efde-1523-785feabcd123';
const INPUT_COMMAND = '00001563-1212-efde-1523-785feabcd123';
const OUTPUT_COMMAND = '00001565-1212-efde-1523-785feabcd123';

// sensor and output tyoes
const DEVICE_MOTOR = 1;
const DEVICE_PIEZO = 22;
const DEVICE_LED = 23;
const DEVICE_TILT = 34;
const DEVICE_DISTANCE = 35;

// connection/port ids
const CONNECT_ID_LED = 6;
const CONNECT_ID_PIEZO = 5;

// ids for various output commands
const COMMAND_MOTOR_POWER = 1;
const COMMAND_PLAY_TONE = 2;
const COMMAND_STOP_TONE = 3;
const COMMAND_WRITE_RGB = 4;
const COMMAND_SET_VOLUME = 255;

// modes for input sensors
const MODE_TILT = 0; // angle
const MODE_DISTANCE = 0; // detect
const MODE_LED = 1; // RGB

// units for input sensors
const UNIT_TILT = 0;
const UNIT_DISTANCE = 1;
const UNIT_LED = 0;
