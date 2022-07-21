// questions index

const alignments = {
  STRONGLY_DISAGREE: 'stongly-disagree',
  DISAGREE: 'disagree',
  NEUTRAL: 'neutral',
  AGREE: 'agree',
  STRONGLY_AGREE: 'strongly-agree',
};

const jobs = {
  HEALTHCARE: 'Healthcare',
  BUSINESS_FINANCE: 'Business',
  PHARMACEUTICAL: 'Pharmaceutical',
  ENGINEERING: 'Engineering',
  COMPUTER_TECH: 'Technology',
  AEROSPACE: 'Aerospace',
  LEGAL: 'Legal',
  MARKETING: 'Marketing',
  TELECOMM: 'Telecomm',
  ENERGY: 'Energy',
  MANUFACTURING: 'Manufacturing',
  EDUCATION: 'Education',
};

const questions = [
  {
    question: 'My work must make a positive/helpful impact for others.',
    aptitudes: {
      [alignments.STRONGLY_AGREE]: {
        [jobs.HEALTHCARE]: 1,
        [jobs.EDUCATION]: 1,
        [jobs.PHARMACEUTICAL]: 1,
      },
      [alignments.AGREE]: {
        [jobs.LEGAL]: 1,
        [jobs.AEROSPACE]: 1,
        [jobs.ENGINEERING]: 1,
        [jobs.ENERGY]: 1,
        [jobs.TELECOMM]: 1,
      },
      [alignments.NEUTRAL]: {},
      [alignments.DISAGREE]: {
        [jobs.MARKETING]: 1,
        [jobs.COMPUTER_TECH]: 1,
        [jobs.MANUFACTURING]: 1,
      },
      [alignments.STRONGLY_DISAGREE]: {
        [jobs.BUSINESS_FINANCE]: 1,
      },
    },
  },
  {
    question: 'Money is the main source of motivation in my career choice.',
    aptitudes: {
      [alignments.STRONGLY_AGREE]: {
        [jobs.HEALTHCARE]: 1,
        [jobs.BUSINESS_FINANCE]: 1,
        [jobs.PHARMACEUTICAL]: 1,
      },
      [alignments.AGREE]: {
        [jobs.ENGINEERING]: 1,
        [jobs.COMPUTER_TECH]: 1,
        [jobs.AEROSPACE]: 1,
      },
      [alignments.NEUTRAL]: {},
      [alignments.DISAGREE]: {
        [jobs.LEGAL]: 1,
        [jobs.MARKETING]: 1,
        [jobs.TELECOMM]: 1,
      },
      [alignments.STRONGLY_DISAGREE]: {
        [jobs.ENERGY]: 1,
        [jobs.MANUFACTURING]: 1,
        [jobs.BUSINESS_FINANCE]: 1,
      },
    },
  },
  {
    question:
      'I thrive in competitive settings where I can put my skills and abilities against others.',
    aptitudes: {
      [alignments.STRONGLY_AGREE]: {
        [jobs.BUSINESS_FINANCE]: 1,
        [jobs.ENGINEERING]: 1,
        [jobs.COMPUTER_TECH]: 1,
        [jobs.LEGAL]: 1,
      },
      [alignments.AGREE]: {
        [jobs.MARKETING]: 1,
      },
      [alignments.NEUTRAL]: {},
      [alignments.DISAGREE]: {
        [jobs.ENERGY]: 1,
        [jobs.TELECOMM]: 1,
        [jobs.AEROSPACE]: 1,
      },
      [alignments.STRONGLY_DISAGREE]: {
        [jobs.MANUFACTURING]: 1,
        [jobs.EDUCATION]: 1,
        [jobs.PHARMACEUTICAL]: 1,
        [jobs.HEALTHCARE]: 1,
      },
    },
  },
  {
    question:
      'I want work where I can influence the attitudes and opinions of others.',
    aptitudes: {
      [alignments.STRONGLY_AGREE]: {
        [jobs.EDUCATION]: 1,
        [jobs.MARKETING]: 1,
        [jobs.LEGAL]: 1,
      },
      [alignments.AGREE]: {
        [jobs.PHARMACEUTICAL]: 1,
        [jobs.HEALTHCARE]: 1,
        [jobs.BUSINESS_FINANCE]: 1,
      },
      [alignments.NEUTRAL]: {},
      [alignments.DISAGREE]: {
        [jobs.ENGINEERING]: 1,
        [jobs.COMPUTER_TECH]: 1,
        [jobs.AEROSPACE]: 1,
      },
      [alignments.STRONGLY_DISAGREE]: {
        [jobs.TELECOMM]: 1,
        [jobs.ENERGY]: 1,
        [jobs.MANUFACTURING]: 1,
      },
    },
  },
  {
    question:
      'I value opportunities to learn and/or improve new skills and new knowledge',
    aptitudes: {
      [alignments.STRONGLY_AGREE]: {
        [jobs.ENGINEERING]: 1,
        [jobs.COMPUTER_TECH]: 1,
        [jobs.BUSINESS_FINANCE]: 1,
      },
      [alignments.AGREE]: {
        [jobs.BUSINESS_FINANCE]: 1,
        [jobs.MARKETING]: 1,
        [jobs.PHARMACEUTICAL]: 1,
        [jobs.EDUCATION]: 1,
      },
      [alignments.NEUTRAL]: {},
      [alignments.DISAGREE]: {
        [jobs.AEROSPACE]: 1,
        [jobs.HEALTHCARE]: 1,
      },
      [alignments.STRONGLY_DISAGREE]: {
        [jobs.MANUFACTURING]: 1,
        [jobs.ENERGY]: 1,
        [jobs.TELECOMM]: 1,
      },
    },
  },
  {
    question: 'I value work with clear indications of achievement and success',
    aptitudes: {
      [alignments.STRONGLY_AGREE]: {
        [jobs.MANUFACTURING]: 1,
        [jobs.HEALTHCARE]: 1,
        [jobs.BUSINESS_FINANCE]: 1,
      },
      [alignments.AGREE]: {
        [jobs.COMPUTER_TECH]: 1,
        [jobs.PHARMACEUTICAL]: 1,
        [jobs.MARKETING]: 1,
        [jobs.ENGINEERING]: 1,
        [jobs.AEROSPACE]: 1,
      },
      [alignments.NEUTRAL]: {},
      [alignments.DISAGREE]: {
        [jobs.LEGAL]: 1,
        [jobs.TELECOMM]: 1,
        [jobs.ENERGY]: 1,
      },
      [alignments.STRONGLY_DISAGREE]: {
        [jobs.EDUCATION]: 1,
      },
    },
  },
  // {
  //   question: 'My work must regularly introduce new problems for me to solve',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.LEGAL]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.EDUCATION]: 1,
  //       [jobs.MARKETING]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.TELECOMM]: 1,
  //       [jobs.ENERGY]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //       [jobs.HEALTHCARE]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I value working in calm environment where I know what to expect',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.LEGAL]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.MARKETING]: 1,
  //       [jobs.EDUCATION]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.TELECOMM]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.ENERGY]: 1,
  //       [jobs.ENGINEERING]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I can learn and understand new things quickly.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.MARKETING]: 1,
  //       [jobs.ENGINEERING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.EDUCATION]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.AEROSPACE]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.TELECOMM]: 1,
  //       [jobs.ENERGY]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I can easily solve problems.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.AEROSPACE]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.LEGAL]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.ENERGY]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.MANUFACTURING]: 1,
  //       [jobs.EDUCATION]: 1,
  //       [jobs.BUSINESS_FINANCE]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.MARKETING]: 1,
  //       [jobs.TELECOMM]: 1,
  //     },
  //   },
  // },
  // {
  //   question:
  //     'I can easily understand when instruction or ideas are explained to me.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.MANUFACTURING]: 1,
  //       [jobs.MARKETING]: 1,
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.EDUCATION]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.TELECOMM]: 1,
  //       [jobs.ENERGY]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.HEALTHCARE]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I can easily read graphs and diagrams.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.ENGINEERING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.EDUCATION]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.AEROSPACE]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.LEGAL]: 1,
  //       [jobs.TELECOMM]: 1,
  //       [jobs.MARKETING]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.MANUFACTURING]: 1,
  //       [jobs.ENERGY]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I can express information and ideas clearly.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.EDUCATION]: 1,
  //       [jobs.MARKETING]: 1,
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.LEGAL]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.ENERGY]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.TELECOMM]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //       [jobs.AEROSPACE]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I can deliver a speech to a group/audience.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.EDUCATION]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.MARKETING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.BUSINESS_FINANCE]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.AEROSPACE]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.MANUFACTURING]: 1,
  //       [jobs.ENERGY]: 1,
  //       [jobs.TELECOMM]: 1,
  //     },
  //   },
  // },
  // {
  //   question:
  //     'I have demonstrated good reading, oral, and written communication skills.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.LEGAL]: 1,
  //       [jobs.EDUCATION]: 1,
  //       [jobs.MARKETING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.BUSINESS_FINANCE]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.AEROSPACE]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.MANUFACTURING]: 1,
  //       [jobs.TELECOMM]: 1,
  //       [jobs.ENERGY]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I can collect data and analyze it statistically.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.TELECOMM]: 1,
  //       [jobs.ENERGY]: 1,
  //       [jobs.HEALTHCARE]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.MARKETING]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.EDUCATION]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {},
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //   },
  // },
  // {
  //   question:
  //     'I can negotiate with others to solve a problem or reach an agreement ',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.LEGAL]: 1,
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.MARKETING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.EDUCATION]: 1,
  //       [jobs.ENGINEERING]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.TELECOMM]: 1,
  //       [jobs.AEROSPACE]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.ENERGY]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I can instruct others.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.EDUCATION]: 1,
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.MARKETING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.TELECOMM]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.ENERGY]: 1,
  //       [jobs.ENGINEERING]: 1,
  //     },
  //   },
  // },
  // {
  //   question:
  //     'I want to work in a position where clear expectations and procedures are set for each project',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //       [jobs.AEROSPACE]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.ENERGY]: 1,
  //       [jobs.TELECOMM]: 1,
  //       [jobs.LEGAL]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.ENGINEERING]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.MARKETING]: 1,
  //       [jobs.EDUCATION]: 1,
  //     },
  //   },
  // },
  // {
  //   question:
  //     'I want regular contact with my supervisor to check on my progress and keep track of my projects.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.TELECOMM]: 1,
  //       [jobs.ENERGY]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.EDUCATION]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.MARKETING]: 1,
  //     },
  //   },
  // },
  // {
  //   question:
  //     'I would like to be responsible for a project or activity and have to look after many different details to complete it.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.AEROSPACE]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.ENERGY]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.MARKETING]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.TELECOMM]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I like to finish one job before I start the next.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.TELECOMM]: 1,
  //       [jobs.ENERGY]: 1,
  //       [jobs.EDUCATION]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.MARKETING]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.LEGAL]: 1,
  //     },
  //   },
  // },
  // {
  //   question:
  //     'I want to work on my feet, performing physical work as much as possible.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.TELECOMM]: 1,
  //       [jobs.ENERGY]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.MARKETING]: 1,
  //       [jobs.EDUCATION]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'I prefer to be working outside most if not all the time.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.TELECOMM]: 1,
  //       [jobs.ENERGY]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.MARKETING]: 1,
  //       [jobs.EDUCATION]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //     },
  //   },
  // },
  // {
  //   question: 'My preferred work environment is new, fast-paced, and exciting.',
  //   aptitudes: {
  //     [alignments.STRONGLY_AGREE]: {
  //       [jobs.HEALTHCARE]: 1,
  //       [jobs.MANUFACTURING]: 1,
  //     },
  //     [alignments.AGREE]: {
  //       [jobs.AEROSPACE]: 1,
  //       [jobs.LEGAL]: 1,
  //       [jobs.EDUCATION]: 1,
  //     },
  //     [alignments.NEUTRAL]: {},
  //     [alignments.DISAGREE]: {
  //       [jobs.BUSINESS_FINANCE]: 1,
  //       [jobs.PHARMACEUTICAL]: 1,
  //       [jobs.ENGINEERING]: 1,
  //       [jobs.COMPUTER_TECH]: 1,
  //       [jobs.MARKETING]: 1,
  //       [jobs.ENERGY]: 1,
  //     },
  //     [alignments.STRONGLY_DISAGREE]: {
  //       [jobs.TELECOMM]: 1,
  //     },
  //   },
  // },
];
