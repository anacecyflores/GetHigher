// questions index

const alignments = {
  STRONGLY_DISAGREE: "stongly-disagree",
  DISAGREE: "disagree",
  NEUTRAL: "neutral",
  AGREE: "agree",
  STRONGLY_AGREE: "strongly-agree"
};

const jobs = {
  HEALTHCARE: "healthcare",
  BUSINESS_FINANCE: "business-finance",
  PHARMACEUTICAL: "pharmaceutical",
  ENGINEERING: "engineering",
  COMPUTER_TECH: "computer-tech",
  AEROSPACE: "aerospace",
  LEGAL: "legal",
  MARKETING: "marketing",
  TELECOMM: "telecomm",
  ENERGY: "energy",
  MANUFACTURING: "manufacturing",
  EDUCATION: "education"
};


// const questions = [
//   {
//       text: "test 1",
//       aptitudes: {
//           [ALIGNMENTS.STRONGLY_AGREE]: {
//               [JOBS.NURSE]: 1,
//               [JOBS.ENGINEER]: 3
//           }
//       }
//   },


const questions = [
  {
    question: 'My work must make a positive/helpful impact for others.',
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {
        [JOBS.HEALTHCARE]: 1,
        [JOBS.EDUCATION]: 1,
        [JOBS.PHARMACEUTICAL]: 1,
      },
      [ALIGNMENTS.AGREE]: {
        [JOBS.LEGAL]: 1,
        [JOBS.AEROSPACE]: 1,
        [JOBS.ENGINEERING]: 1,
        [JOBS.ENERGY]: 1,
        [JOBS.TELECOMM]: 1,
      },
      [ALIGNMENTS.NEUTRAL]: {
      },
      [ALIGNMENTS.DISAGREE]: {
        [JOBS.MARKETING]: 1,
        [JOBS.COMPUTER_TECH]: 1,
        [JOBS.MANUFACTURING]: 1,
      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {
        [JOBS.BUSINESS_FINANCE]: 1,

      }
    }
  },
  {
    question: 'Money is the main source of motivation in my career choice.',
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {
        [JOBS.HEALTHCARE]: 1,
        [JOBS.BUSINESS_FINANCE]: 1 ,
        [JOBS.PHARMACEUTICAL]: 1,
      },
      [ALIGNMENTS.AGREE]: {
        [JOBS.ENGINEERING]: 1,
        [JOBS.COMPUTER_TECH]: 1,
        [JOBS.AEROSPACE]: 1,
      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {
        [JOBS.LEGAL]: 1,
        [JOBS.MARKETING]: 1,
        [JOBS.TELECOMM]: 1,
      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {
        [JOBS.ENERGY]: 1,
        [JOBS.MANUFACTURING]: 1,
        [JOBS.BUSINESS_FINANCE]: 1,
      }
    }
  },
  {
    question:
      'I thrive in competitive settings where I can put my skills and abilities against others.',
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {
        [JOBS.BUSINESS_FINANCE]: 1,
        [JOBS.ENGINEERING]: 1,
        [JOBS.COMPUTER_TECH]: 1,
        [JOBS.LEGAL]: 1,
      },
      [ALIGNMENTS.AGREE]: {
        [JOBS.MARKETING]: 1,
      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {
        [JOBS.ENERGY]: 1,
        [JOBS.TELECOMM]: 1,
        [JOBS.AEROSPACE]: 1,
      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {
        [JOBS.MANUFACTURING]: 1,
        [JOBS.EDUCATION]: 1,
        [JOBS.PHARMACEUTICAL]: 1,
        [JOBS.HEALTHCARE]: 1,
      }
    }
  },
  {
    question:
      'I want work where I can influence the attitudes and opinions of others.',
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {
        [JOBS.EDUCATION]: 1,
        [JOBS.MARKETING]: 1,
        [JOBS.LEGAL]: 1,
      },
      [ALIGNMENTS.AGREE]: {
        [JOBS.PHARMACEUTICAL]: 1,
        [JOBS.HEALTHCARE]: 1,
        [JOBS.BUSINESS_FINANCE]: 1,
      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {
        [JOBS.ENGINEERING]: 1,
        [JOBS.COMPUTER_TECH]: 1,
        [JOBS.AEROSPACE]: 1,
      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {
        [JOBS.TELECOMM]: 1,
        [JOBS.ENERGY]: 1,
        [JOBS.MANUFACTURING]: 1,
      }
    }
  },
  {
    question:
      'I value opportunities to learn and/or improve new skills and new knowledge',
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {
        [JOBS.ENGINEERING]: 1,
        [JOBS.COMPUTER_TECH]: 1,
        [JOBS.BUSINESS_FINANCE]: 1,
      },
      [ALIGNMENTS.AGREE]: {
        [JOBS.BUSINESS_FINANCE]: 1,
        [JOBS.MARKETING]: 1,
        [JOBS.PHARMACEUTICAL]: 1,
        [JOBS.EDUCATION]: 1,
      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {
        [JOBS.AEROSPACE]: 1,
        [JOBS.HEALTHCARE]: 1,
      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {
        [JOBS.MANUFACTURING]: 1,
        [JOBS.ENERGY]: 1,
        [JOBS.TELECOMM]: 1,
      }
    }
  },
  {
    question: "I value work with clear indications of achievement and success",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {
        [JOBS.MANUFACTURING]: 1,
        [JOBS.HEALTHCARE]: 1,
        [JOBS.BUSINESS_FINANCE]: 1,
      },
      [ALIGNMENTS.AGREE]: {
        [JOBS.COMPUTER_TECH]: 1,
        [JOBS.PHARMACEUTICAL]: 1,
        [JOBS.MARKETING]: 1,
      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {
        [JOBS.LEGAL]: 1,
        
      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "My work must regularly introduce new problems for me to solve",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I value working in calm environment where I know what to expect",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can learn and understand new things quickly.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can easily solve problems.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can easily understand when instruction or ideas are explained to me.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can easily read graphs and diagrams.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can express information and ideas clearly.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can deliver a speech to a group/audience.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I have demonstrated good reading, oral, and written communication skills.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can collect data and analyze it statistically.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can negotiate with others to solve a problem or reach an agreement ",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can instruct others.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I want to work in a position where clear expectations and procedures are set for each project",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I want regular contact with my supervisor to check on my progress and keep track of my projects.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I would like to be responsible for a project or activity and have to look after many different details to complete it.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I can negotiate with others to solve a problem or reach an agreement",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I want to work on my feet, performing physical work as much as possible.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "I prefer to be working outside most if not all the time.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
  {
    question: "My preferred work environment is new, fast-paced, and exciting.",
    aptitudes: {
      [ALIGNMENTS.STRONGLY_AGREE]: {

      },
      [ALIGNMENTS.AGREE]: {

      },
      [ALIGNMENTS.NEUTRAL]: {

      },
      [ALIGNMENTS.DISAGREE]: {

      },
      [ALIGNMENTS.STRONGLY_DISAGREE]: {

      }
    }
  },
];
