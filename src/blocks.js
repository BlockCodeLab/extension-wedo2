import { Text } from '@blockcode/ui';
import translations from './l10n.yaml';
import iconURI from './icon.svg';
import wedo2PyURI from './wedo2.py';

const WeDo2MotorLabel = {
  DEFAULT: 'motor',
  A: 'motor A',
  B: 'motor B',
  ALL: 'all motors',
};

const WeDo2MotorDirection = {
  FORWARD: 'this way',
  BACKWARD: 'that way',
  REVERSE: 'reverse',
};

const WeDo2TiltDirection = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
  ANY: 'any',
};

export default {
  iconURI,
  name: 'WeDo 2.0',
  files: [
    {
      name: 'wedo2',
      type: 'text/x-python',
      uri: wedo2PyURI,
    },
  ],
  blocks: [
    {
      id: 'motorOnSec',
      text: (
        <Text
          id="extension.wedo2.motorOnFor"
          defaultMessage="turn [MOTOR_ID] on for [DURATION] seconds"
        />
      ),
      inputs: {
        MOTOR_ID: {
          menu: 'MOTOR_ID',
        },
        DURATION: {
          type: 'number',
          default: 1,
        },
      },
      python(block) {
        this.definitions_['import_extension_wedo2'] = 'from extensions.wedo2 import wedo2';
        const motorId = this.valueToCode(block, 'MOTOR_ID', this.ORDER_NONE) || WeDo2MotorLabel.DEFAULT;
        const durationCode = this.valueToCode(block, 'DURATION', this.ORDER_NONE) || 1;
        let indexes = [];
        if (motorId !== WeDo2MotorLabel.B) {
          indexes.push(0);
        }
        if (motorId !== WeDo2MotorLabel.A) {
          indexes.push(1);
        }
        return `await wedo2.motor_on_for((${indexes.join(',')},), ${durationCode})\n`;
      },
    },
    {
      id: 'motorOn',
      text: (
        <Text
          id="extension.wedo2.motorOn"
          defaultMessage="turn [MOTOR_ID] on"
        />
      ),
      inputs: {
        MOTOR_ID: {
          menu: 'MOTOR_ID',
        },
      },
      python(block) {
        this.definitions_['import_extension_wedo2'] = 'from extensions.wedo2 import wedo2';
        const motorId = this.valueToCode(block, 'MOTOR_ID', this.ORDER_NONE) || WeDo2MotorLabel.DEFAULT;
        let indexes = [];
        if (motorId !== WeDo2MotorLabel.B) {
          indexes.push(0);
        }
        if (motorId !== WeDo2MotorLabel.A) {
          indexes.push(1);
        }
        return `await wedo2.motor_on((${indexes.join(',')},))\n`;
      },
    },
    {
      id: 'motorOff',
      text: (
        <Text
          id="extension.wedo2.motorOff"
          defaultMessage="turn [MOTOR_ID] off"
        />
      ),
      inputs: {
        MOTOR_ID: {
          menu: 'MOTOR_ID',
        },
      },
      python(block) {
        this.definitions_['import_extension_wedo2'] = 'from extensions.wedo2 import wedo2';
        const motorId = this.valueToCode(block, 'MOTOR_ID', this.ORDER_NONE) || WeDo2MotorLabel.DEFAULT;
        let indexes = [];
        if (motorId !== WeDo2MotorLabel.B) {
          indexes.push(0);
        }
        if (motorId !== WeDo2MotorLabel.A) {
          indexes.push(1);
        }
        return `await wedo2.motor_off((${indexes.join(',')},))\n`;
      },
    },
    {
      id: 'startMotorPower',
      text: (
        <Text
          id="extension.wedo2.startMotorPower"
          defaultMessage="set [MOTOR_ID] power to [POWER]"
        />
      ),
      inputs: {
        MOTOR_ID: {
          menu: 'MOTOR_ID',
        },
        POWER: {
          type: 'number',
          default: 100,
        },
      },
      python(block) {
        this.definitions_['import_extension_wedo2'] = 'from extensions.wedo2 import wedo2';
        const motorId = this.valueToCode(block, 'MOTOR_ID', this.ORDER_NONE) || WeDo2MotorLabel.DEFAULT;
        const powerCode = this.valueToCode(block, 'POWER', this.ORDER_NONE) || 100;
        let indexes = [];
        if (motorId !== WeDo2MotorLabel.B) {
          indexes.push(0);
        }
        if (motorId !== WeDo2MotorLabel.A) {
          indexes.push(1);
        }
        return `await wedo2.start_motor_power((${indexes.join(',')},), ${powerCode})\n`;
      },
    },
    {
      id: 'setMotorDirection',
      text: (
        <Text
          id="extension.wedo2.setMotorDirection"
          defaultMessage="set [MOTOR_ID] direction to [MOTOR_DIRECTION]"
        />
      ),
      inputs: {
        MOTOR_ID: {
          menu: 'MOTOR_ID',
        },
        MOTOR_DIRECTION: {
          menu: 'MOTOR_DIRECTION',
        },
      },
      python(block) {
        this.definitions_['import_extension_wedo2'] = 'from extensions.wedo2 import wedo2';
        const motorId = this.valueToCode(block, 'MOTOR_ID', this.ORDER_NONE) || WeDo2MotorLabel.DEFAULT;
        const direction = this.valueToCode(block, 'MOTOR_DIRECTION', this.ORDER_NONE) || WeDo2MotorDirection.FORWARD;
        let indexes = [];
        if (motorId !== WeDo2MotorLabel.B) {
          indexes.push(0);
        }
        if (motorId !== WeDo2MotorLabel.A) {
          indexes.push(1);
        }
        let directionCode = 0;
        switch (direction) {
          case WeDo2MotorDirection.FORWARD:
            directionCode = 1;
            break;
          case WeDo2MotorDirection.BACKWARD:
            directionCode = -1;
            break;
          case WeDo2MotorDirection.REVERSE:
            directionCode = 255;
            break;
        }
        return `await wedo2.set_motor_direction((${indexes.join(',')},), ${directionCode})\n`;
      },
    },
    {
      id: 'setLightHue',
      text: (
        <Text
          id="extension.wedo2.setLightHue"
          defaultMessage="set light color to [HUE]"
        />
      ),
      inputs: {
        HUE: {
          type: 'number',
          default: 50,
        },
      },
      python(block) {
        this.definitions_['import_extension_wedo2'] = 'from extensions.wedo2 import wedo2';
        const hueCode = this.valueToCode(block, 'HUE', this.ORDER_NONE) || 50;
        return `await wedo2.set_led(${hueCode})\n`;
      },
    },
    {
      id: 'playNoteFor',
      hidden: true,
      text: (
        <Text
          id="extension.wedo2.playNoteFor"
          defaultMessage="play note [NOTE] for [DURATION] seconds"
        />
      ),
      inputs: {
        NOTE: {
          type: 'number',
          default: 60,
        },
        DURATION: {
          type: 'number',
          default: 0.5,
        },
      },
    },
    {
      id: 'whenDistance',
      text: (
        <Text
          id="extension.wedo2.whenDistance"
          defaultMessage="when distance [OP] [REFERENCE]"
        />
      ),
      hat: true,
      inputs: {
        OP: {
          menu: {
            inputMode: true,
            items: ['<', '>'],
          },
        },
        REFERENCE: {
          type: 'number',
          default: 50,
        },
      },
    },
    {
      id: 'whenTilted',
      text: (
        <Text
          id="extension.wedo2.whenTilted"
          defaultMessage="when tilted [TILT_DIRECTION_ANY]"
        />
      ),
      hat: true,
      inputs: {
        TILT_DIRECTION_ANY: {
          menu: 'TILT_DIRECTION_ANY',
        },
      },
    },
    {
      id: 'getDistance',
      text: (
        <Text
          id="extension.wedo2.getDistance"
          defaultMessage="distance"
        />
      ),
      output: 'number',
    },
    {
      id: 'isTilted',
      text: (
        <Text
          id="extension.wedo2.isTilted"
          defaultMessage="tilted [TILT_DIRECTION_ANY]?"
        />
      ),
      inputs: {
        TILT_DIRECTION_ANY: {
          menu: 'TILT_DIRECTION_ANY',
        },
      },
      output: 'boolean',
    },
    {
      id: 'getTiltAngle',
      text: (
        <Text
          id="extension.wedo2.getTiltAngle"
          defaultMessage="tilt angle [TILT_DIRECTION]"
        />
      ),
      inputs: {
        TILT_DIRECTION: {
          menu: 'TILT_DIRECTION',
        },
      },
      output: 'number',
    },
  ],
  menus: {
    MOTOR_ID: {
      inputMode: true,
      type: 'string',
      default: WeDo2MotorLabel.DEFAULT,
      items: [
        [
          <Text
            id="extension.wedo2.motorId.default"
            defaultMessage="motor"
          />,
          WeDo2MotorLabel.DEFAULT,
        ],
        [
          <Text
            id="extension.wedo2.motorId.a"
            defaultMessage="motor A"
          />,
          WeDo2MotorLabel.A,
        ],
        [
          <Text
            id="extension.wedo2.motorId.b"
            defaultMessage="motor B"
          />,
          WeDo2MotorLabel.B,
        ],
        [
          <Text
            id="extension.wedo2.motorId.all"
            defaultMessage="all motors"
          />,
          WeDo2MotorLabel.ALL,
        ],
      ],
    },
    MOTOR_DIRECTION: {
      inputMode: true,
      type: 'string',
      default: WeDo2MotorDirection.FORWARD,
      items: [
        [
          <Text
            id="extension.wedo2.motorDirection.forward"
            defaultMessage="this way"
          />,
          WeDo2MotorDirection.FORWARD,
        ],
        [
          <Text
            id="extension.wedo2.motorDirection.backward"
            defaultMessage="that way"
          />,
          WeDo2MotorDirection.BACKWARD,
        ],
        [
          <Text
            id="extension.wedo2.motorDirection.reverse"
            defaultMessage="reverse"
          />,
          WeDo2MotorDirection.REVERSE,
        ],
      ],
    },
    TILT_DIRECTION: {
      inputMode: true,
      type: 'string',
      default: WeDo2TiltDirection.UP,
      items: [
        [
          <Text
            id="extension.wedo2.tiltDirection.up"
            defaultMessage="up"
          />,
          WeDo2TiltDirection.UP,
        ],
        [
          <Text
            id="extension.wedo2.tiltDirection.down"
            defaultMessage="down"
          />,
          WeDo2TiltDirection.DOWN,
        ],
        [
          <Text
            id="extension.wedo2.tiltDirection.left"
            defaultMessage="left"
          />,
          WeDo2TiltDirection.LEFT,
        ],
        [
          <Text
            id="extension.wedo2.tiltDirection.right"
            defaultMessage="right"
          />,
          WeDo2TiltDirection.RIGHT,
        ],
      ],
    },
    TILT_DIRECTION_ANY: {
      inputMode: true,
      type: 'string',
      default: WeDo2TiltDirection.ANY,
      items: [
        [
          <Text
            id="extension.wedo2.tiltDirection.up"
            defaultMessage="up"
          />,
          WeDo2TiltDirection.UP,
        ],
        [
          <Text
            id="extension.wedo2.tiltDirection.down"
            defaultMessage="down"
          />,
          WeDo2TiltDirection.DOWN,
        ],
        [
          <Text
            id="extension.wedo2.tiltDirection.left"
            defaultMessage="left"
          />,
          WeDo2TiltDirection.LEFT,
        ],
        [
          <Text
            id="extension.wedo2.tiltDirection.right"
            defaultMessage="right"
          />,
          WeDo2TiltDirection.RIGHT,
        ],
        [
          <Text
            id="extension.wedo2.tiltDirection.any"
            defaultMessage="any"
          />,
          WeDo2TiltDirection.ANY,
        ],
      ],
    },
  },
  translations,
};
