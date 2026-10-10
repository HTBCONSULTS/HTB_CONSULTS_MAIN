export interface ServiceItem {
  id: string;
  name: string;
  shortTagline: string;
  scriptPhrase: string;
  heroIntro: string;
  whatWeDo: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  includes: {
    title: string;
    description: string;
    icon: string;
  }[];
  approachSteps: {
    num: string;
    title: string;
    description: string;
  }[];
  caseStudySnippet?: {
    title: string;
    description: string;
    linkId?: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  clientType: string;
  sector: string;
  serviceArea: string;
  duration: string;
  role: string;
  challenge: string;
  approach: string;
  process: string[];
  results: {
    metric: string;
    label: string;
  }[];
  quote?: {
    text: string;
    author: string;
  };
  technologies?: string[];
  image?: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  author?: {
    name: string;
    role: string;
    bio: string;
  };
  keyTakeaway?: string;
  relatedTopics?: string[];
}

export interface AcademyCourse {
  id: string;
  title: string;
  description: string;
  level: string;
  modules: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  organisation: string;
  enquiryType: string;
  message: string;
}

export interface ConsultationBookingData {
  name: string;
  email: string;
  organisation: string;
  date: string;
  timeSlot: string;
  topic: string;
  notes: string;
}
