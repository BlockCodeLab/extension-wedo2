import featureImage from './feature.png';
import iconImage from './icon.svg';

export default {
  preview: true,
  name: 'LEGO WeDo 2.0',
  description: 'Build with motors and sensors.',
  collaborator: 'LEGO',
  image: featureImage,
  icon: iconImage,
  tags: ['blocks', 'arcade', 'controller'],
  bluetoothRequired: true,

  // l10n
  translations: {
    en: {
      description: 'Build with motors and sensors.',
    },
    'zh-Hans': {
      description: '支持马达和传感器。',
    },
  },
};
