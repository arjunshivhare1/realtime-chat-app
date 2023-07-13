const USER_IDS_MAPPING = {
  ARJUN_SHIVHARE: "2FaIJt44zTNtaWNaMeKV7C",
  KISHAN_CHAUDHARY: "2Fa8829TNtaWNaMeKV7C",
  PRIANKA_PACHERIA: "4FaILt4zTNtaWNaMeKV7C",
  SHILPA_VAVIA: "2FaJt44zTNtaWNaMeOPV7C",
  MARIAM: "2FaIJt44zTNtaWNaIPKV7C",
};

export const USERS = [
  {
    userName: "Arjun Shivhare",
    userId: USER_IDS_MAPPING.ARJUN_SHIVHARE,
    profilePic:
      "https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png",
  },
  {
    userName: "Kishan Chaudhary",
    userId: USER_IDS_MAPPING.KISHAN_CHAUDHARY,
    profilePic:
      "https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png",
  },
  {
    userName: "Prianka Pacheria",
    userId: USER_IDS_MAPPING.PRIANKA_PACHERIA,
    profilePic:
      "https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png",
  },
  {
    userName: "Shilpa Vavia",
    userId: USER_IDS_MAPPING.SHILPA_VAVIA,
    profilePic:
      "https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png",
  },
  {
    userName: "Mariam",
    userId: USER_IDS_MAPPING.MARIAM,
    profilePic:
      "https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png",
  },
];

export const DEFAULT_MESSAGES = {
  [USER_IDS_MAPPING.PRIANKA_PACHERIA]: [
    {
      message: "Hi Prianka👋",
      delivered: new Date().toISOString().split("T")[0],
    },
    {
      message: "Hope you are doing great in life!🎯",
      delivered: new Date().toISOString().split("T")[0],
    },
  ],
  [USER_IDS_MAPPING.KISHAN_CHAUDHARY]: [
    {
      message: "Hey Kishan👋",
      delivered: new Date().toISOString().split("T")[0],
    },
    {
      message: "What are you doing?",
      delivered: new Date().toISOString().split("T")[0],
    },
  ],
};
