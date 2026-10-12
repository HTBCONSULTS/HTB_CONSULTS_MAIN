import { ServiceItem, CaseStudy, InsightArticle, AcademyCourse } from '../types';
import { VISUAL_ASSETS } from './visualAssets';
import { INSIGHT_ARTICLE_CONTENT } from './articleContent';

export const ACADEMY_SITE_URL = 'https://academy.htbconsults.com/';

export const SITE_SEO = {
  title: 'HTB Consult | Clarity in Strategy. Confidence in Delivery.',
  description: 'UK-based digital transformation & business strategy consultancy helping organisations turn ideas into practical solutions and measurable outcomes.',
  keywords: 'business strategy, business analysis, digital transformation, process improvement, HTB Consult',
};

export const INSIGHTS_PAGE_SEO = {
  title: 'Insights & Articles | HTB Consult',
  description: 'Practical guidance to help organisations and entrepreneurs make clearer decisions, improve operations and deliver change.',
  keywords: 'HTB Consult insights, business strategy, business analysis, process improvement, digital transformation',
  shareImage: VISUAL_ASSETS.insightsHero,
};

export const SITE_METADATA = {
  brandName: 'HTB Consult',
  tagline: 'Clarity in Strategy. Confidence in Delivery.',
  secondaryPhrase: 'Ideas. Strategy. Solutions. Results.',
  location: 'Chesterfield, Derbyshire, United Kingdom',
  phone: '+44 7862 056300',
  email: 'info@htbconsults.com',
  whatsappUrl: 'https://wa.me/447862056300?text=Hi%2C%20I%27d%20like%20to%20get%20some%20support%20from%20HTB%20Consults.',
  businessHours: 'Monday – Friday, 9:00am – 5:00pm (UK time)',
  extendedHoursNotice: 'We also offer online consultations outside these hours by arrangement.',
};

export const TRUST_METRICS = [
  { value: '10+', label: 'Years of Experience', detail: 'Proven track record in strategic transformation' },
  { value: '50+', label: 'Organisations Supported', detail: 'Public, private and third-sector clients' },
  { value: '100+', label: 'Projects Delivered', detail: 'On-time, within budget and measurable impact' },
  { value: '100%', label: 'Client Focused', detail: 'Practical. Collaborative. Results Driven.' },
];

export const FOUR_PILLARS = [
  {
    title: 'Strategic Thinking',
    description: 'Real business impact',
    icon: 'TrendingUp',
  },
  {
    title: 'Practical Solutions',
    description: 'Designed for your context',
    icon: 'Lightbulb',
  },
  {
    title: 'Experienced Partner',
    description: 'From insight to execution',
    icon: 'Users',
  },
  {
    title: 'Measurable Results',
    description: 'Efficiency, growth and value',
    icon: 'ShieldCheck',
  },
];

export const CORE_VALUES = [
  {
    title: 'Integrity',
    description: 'Doing the right thing.',
    icon: 'Star',
  },
  {
    title: 'Excellence',
    description: 'Delivering high quality work.',
    icon: 'Award',
  },
  {
    title: 'Collaboration',
    description: 'Better results through partnership.',
    icon: 'Handshake',
  },
  {
    title: 'Impact',
    description: 'Focused on real and lasting change.',
    icon: 'BarChart2',
  },
];

export const APPROACH_STEPS = [
  {
    number: '01',
    title: 'Understand',
    tagline: 'Your goals and challenges',
    description: 'We listen carefully and engage key stakeholders to gain a thorough understanding of your current position, pain points, operating environment and strategic ambitions.',
    deliverables: ['Stakeholder discovery workshops', 'Context & constraints mapping', 'Problem definition document'],
  },
  {
    number: '02',
    title: 'Analyse',
    tagline: 'Requirements and opportunities',
    description: 'We examine your processes, data, architecture and user needs to identify root causes of inefficiencies and pinpoint realistic, high-value opportunities.',
    deliverables: ['AS-IS process mapping', 'Gap & risk analysis', 'Clear requirements baseline'],
  },
  {
    number: '03',
    title: 'Design',
    tagline: 'Practical, sustainable solutions',
    description: 'We create pragmatic blueprints, specifications and delivery roadmaps tailored specifically to your organisation’s resources, budget and tech maturity.',
    deliverables: ['Target operating model (TO-BE)', 'Technical & functional specifications', 'Implementation roadmap'],
  },
  {
    number: '04',
    title: 'Support',
    tagline: 'Delivery and continuous improvement',
    description: 'We stay by your side through rollout, user acceptance testing, team training and post-launch optimisation to guarantee lasting adoption and measurable outcomes.',
    deliverables: ['Hands-on delivery governance', 'Change management & training', 'Benefits realisation tracking'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-strategy',
    name: 'Business Strategy & Growth',
    shortTagline: 'Strategic support for real business progress.',
    scriptPhrase: 'Ideas. Strategy. Growth. Results.',
    heroIntro: 'Define direction, identify opportunities and create practical strategies that drive sustainable growth. We work with organisations to turn ideas, challenges and market opportunities into clear, actionable plans that deliver real results.',
    whatWeDo: 'We help organisations understand their current position, explore opportunities, plan for growth and put in place strategies that are practical, realistic and measurable. Our approach combines business analysis, market insight and industry experience to develop strategies that align with your objectives, resources and operating environment.',
    benefits: [
      { title: 'Clear Direction', description: 'Define goals and priorities.', icon: 'Compass' },
      { title: 'New Opportunities', description: 'Identify and evaluate growth opportunities.', icon: 'Target' },
      { title: 'Practical Plans', description: 'Turn strategy into actionable plans.', icon: 'CheckSquare' },
      { title: 'Measurable Growth', description: 'Track progress and deliver real value.', icon: 'TrendingUp' },
    ],
    includes: [
      { title: 'Market and Competitor Analysis', description: 'Assess market trends, competitors and opportunities.', icon: 'Search' },
      { title: 'Strategy Development', description: 'Define clear short, medium and long-term strategies.', icon: 'Target' },
      { title: 'Business Planning', description: 'Develop practical plans aligned with your goals and resources.', icon: 'FileText' },
      { title: 'Growth and Optimisation', description: 'Identify ways to improve performance and increase revenue.', icon: 'TrendingUp' },
      { title: 'Stakeholder Alignment', description: 'Engage and align key stakeholders around a shared vision.', icon: 'Users' },
      { title: 'Implementation Support', description: 'Provide guidance to turn strategy into measurable outcomes.', icon: 'Settings' },
    ],
    approachSteps: [
      { num: '01', title: 'Understand', description: 'Clarify goals, challenges and context.' },
      { num: '02', title: 'Analyse', description: 'Assess opportunities and options.' },
      { num: '03', title: 'Design', description: 'Develop practical strategies and plans.' },
      { num: '04', title: 'Support', description: 'Guide implementation and track progress.' },
    ],
    caseStudySnippet: {
      title: 'From Challenge to Measurable Growth',
      description: 'See how we supported an organisation to develop a clear growth strategy, improve operations and achieve measurable results.',
      linkId: 'case-crm-dynamics',
    },
  },
  {
    id: 'service-analysis',
    name: 'Business Analysis & Requirements',
    shortTagline: 'Turning ideas into clear requirements.',
    scriptPhrase: 'Ideas. Analysis. Solutions. Delivery.',
    heroIntro: 'Turn business needs into clear, actionable requirements that deliver real solutions. We work with organisations to understand their needs, analyse challenges and define clear, practical requirements that support successful delivery and measurable outcomes.',
    whatWeDo: 'We work with your teams and stakeholders to understand business needs, analyse current processes and define clear, actionable requirements. Our business analysis support helps you make better decisions, reduce risk and ensure that solutions are fit for purpose, practical and deliverable.',
    benefits: [
      { title: 'Clear Requirements', description: 'Turn business needs into structured, actionable requirements.', icon: 'ListChecks' },
      { title: 'Better Solutions', description: 'Reduce risk and improve delivery success.', icon: 'Lightbulb' },
      { title: 'Improved Collaboration', description: 'Align stakeholders around shared goals and clear expectations.', icon: 'Users' },
      { title: 'Measurable Outcomes', description: 'Enable solutions that deliver real business value.', icon: 'BarChart' },
    ],
    includes: [
      { title: 'Requirements Elicitation', description: 'Understand business needs through workshops, interviews and analysis.', icon: 'Search' },
      { title: 'Stakeholder Management', description: 'Engage and align stakeholders across business and technical teams.', icon: 'Users' },
      { title: 'Process Analysis', description: 'Analyse current processes to identify improvements and opportunities.', icon: 'GitFork' },
      { title: 'Solution Evaluation', description: 'Assess options and support solution selection.', icon: 'Monitor' },
      { title: 'Requirements Documentation', description: 'Produce clear, structured requirements including BRD, FRD and user stories.', icon: 'FileText' },
      { title: 'UAT Support', description: 'Develop test scenarios and support user acceptance testing.', icon: 'CheckCircle' },
    ],
    approachSteps: [
      { num: '01', title: 'Understand', description: 'Explore your goals, challenges and context.' },
      { num: '02', title: 'Analyse', description: 'Capture and analyse business needs.' },
      { num: '03', title: 'Document', description: 'Define clear and structured requirements.' },
      { num: '04', title: 'Support', description: 'Work with you through delivery and beyond.' },
    ],
  },
  {
    id: 'service-transformation',
    name: 'Digital Transformation & Software Solutions',
    shortTagline: 'Turning ideas into practical digital solutions.',
    scriptPhrase: 'Ideas. Technology. People. Real Results.',
    heroIntro: 'Modernise your operations, improve service delivery and unlock new opportunities through practical digital solutions. We help organisations plan, design and deliver digital transformation initiatives, from process digitisation to custom software solutions, that create real and lasting value.',
    whatWeDo: 'We work with organisations to identify business challenges, design digital solutions and support successful delivery. Our digital transformation services combine business analysis, technology, process improvement and change support to help you modernise systems, improve efficiency and deliver better experiences for your teams and customers.',
    benefits: [
      { title: 'Modern Operations', description: 'Streamline processes and reduce manual work.', icon: 'Cpu' },
      { title: 'Practical Solutions', description: 'Solutions designed for your real business needs.', icon: 'Monitor' },
      { title: 'Improved Experience', description: 'Better outcomes for your teams and customers.', icon: 'Smile' },
      { title: 'Measurable Value', description: 'Track progress and achieve lasting results.', icon: 'TrendingUp' },
    ],
    includes: [
      { title: 'Digital Transformation Strategy', description: 'Assess current state, define digital roadmaps and build practical plans.', icon: 'Compass' },
      { title: 'Process Digitisation & Automation', description: 'Automate manual processes to improve efficiency and reduce risk.', icon: 'Settings' },
      { title: 'Software Solution Design', description: 'Define, design and support custom web and mobile solutions.', icon: 'Code' },
      { title: 'System Integration', description: 'Plan and support integration between existing and new systems.', icon: 'Layers' },
      { title: 'Data & Reporting Solutions', description: 'Turn data into meaningful insights to support better decisions.', icon: 'BarChart' },
      { title: 'Training & Change Support', description: 'Equip your teams to adopt and get the most from digital solutions.', icon: 'Users' },
    ],
    approachSteps: [
      { num: '01', title: 'Understand', description: 'Explore your goals, challenges and context.' },
      { num: '02', title: 'Design', description: 'Develop practical solutions and plans.' },
      { num: '03', title: 'Deliver', description: 'Support build, integration, training and adoption.' },
      { num: '04', title: 'Improve', description: 'Measure results and identify further opportunities.' },
    ],
  },
  {
    id: 'service-process',
    name: 'Process Improvement & Automation',
    shortTagline: 'Turn complex processes into simple, effective solutions.',
    scriptPhrase: 'Simpler Processes. Greater Results.',
    heroIntro: 'Streamline your operations, reduce inefficiencies and unlock greater value through practical process improvement and automation. We help organisations analyse how work gets done, redesign processes and implement automation solutions that save time, reduce cost and improve service quality.',
    whatWeDo: 'We work with your teams to understand how work currently happens, identify bottlenecks and design improved processes that are fit for purpose. We combine process analysis, industry best practice and digital automation to help you deliver measurable improvements across people, process and technology.',
    benefits: [
      { title: 'Increased Efficiency', description: 'Streamline processes and reduce wasted effort.', icon: 'Zap' },
      { title: 'Cost Reduction', description: 'Remove inefficiencies and optimise resources.', icon: 'Coins' },
      { title: 'Better Service Delivery', description: 'Improve consistency and quality of services.', icon: 'CheckCircle' },
      { title: 'Sustainable Improvement', description: 'Build smarter, more effective ways of working.', icon: 'TrendingUp' },
    ],
    includes: [
      { title: 'Process Mapping and Analysis', description: 'Understand current processes and identify improvement opportunities.', icon: 'Search' },
      { title: 'Workflow Optimisation', description: 'Improve handoffs, approvals and overall process flow.', icon: 'Repeat' },
      { title: 'Process Redesign', description: 'Develop more efficient and effective ways of working.', icon: 'Workflow' },
      { title: 'Tools and Technology Advisory', description: 'Recommend and support the right tools for your needs.', icon: 'Monitor' },
      { title: 'Automation Solutions', description: 'Implement pragmatic automation to reduce manual work.', icon: 'Cpu' },
      { title: 'Change and Adoption Support', description: 'Help your team successfully adopt new processes and tools.', icon: 'Users' },
    ],
    approachSteps: [
      { num: '01', title: 'Understand', description: 'Map current processes and identify challenges.' },
      { num: '02', title: 'Analyse', description: 'Assess options and opportunities.' },
      { num: '03', title: 'Design', description: 'Develop improved processes and solutions.' },
      { num: '04', title: 'Support', description: 'Implement, train and measure results.' },
    ],
  },
  {
    id: 'service-delivery',
    name: 'Product, Project & Delivery Management',
    shortTagline: 'From planning to delivery, we make it work.',
    scriptPhrase: 'Plan. Coordinate. Deliver. Create Lasting Value.',
    heroIntro: 'Turn ideas into delivered outcomes. We help organisations plan, govern and deliver products and projects with clear objectives, effective stakeholder engagement and measurable results.',
    whatWeDo: 'We support organisations to plan, prioritise and deliver products and projects that align with their strategic goals, resources and operating environment. Whether you’re launching a new product, implementing a system or delivering a complex change programme, we provide the structure, governance and support needed for successful delivery.',
    benefits: [
      { title: 'Clear Objectives', description: 'Define goals and success measures.', icon: 'Target' },
      { title: 'Aligned Stakeholders', description: 'Bring teams and stakeholders together.', icon: 'Users' },
      { title: 'Effective Delivery', description: 'Manage risks and keep projects on track.', icon: 'ShieldCheck' },
      { title: 'Measurable Results', description: 'Deliver outcomes that create real value.', icon: 'TrendingUp' },
    ],
    includes: [
      { title: 'Product Management Support', description: 'Define and manage product strategy, roadmaps and backlog.', icon: 'Layers' },
      { title: 'Project Planning & Governance', description: 'Develop delivery plans, governance structures and reporting.', icon: 'Calendar' },
      { title: 'Delivery Execution Support', description: 'Provide hands-on support to keep delivery aligned and on track.', icon: 'CheckSquare' },
      { title: 'Agile and Hybrid Delivery', description: 'Apply the right delivery approach for your organisation.', icon: 'GitMerge' },
      { title: 'Stakeholder & Change Management', description: 'Engage stakeholders and support successful adoption.', icon: 'Users' },
      { title: 'Benefits Realisation', description: 'Track outcomes and ensure the delivered solution creates value.', icon: 'BarChart' },
    ],
    approachSteps: [
      { num: '01', title: 'Understand', description: 'Clarify goals, scope and requirements.' },
      { num: '02', title: 'Plan', description: 'Define scope, approach and delivery plan.' },
      { num: '03', title: 'Deliver', description: 'Coordinate teams and track progress.' },
      { num: '04', title: 'Support', description: 'Embed and optimise for lasting value.' },
    ],
  },
  {
    id: 'service-bid',
    name: 'Bid Writing, Tender Support & Training',
    shortTagline: 'Helping you win and deliver more opportunities.',
    scriptPhrase: 'Strategic Bids. Real Opportunities.',
    heroIntro: 'Turn opportunities into successful bids. We help organisations prepare high quality bids and tenders, with clear, compelling and compliant submissions. We also provide practical training to build internal capability.',
    whatWeDo: 'We support organisations to identify, prepare and submit high quality bids and tenders for public, private and third sector opportunities. Our training and advisory services also help your team develop the skills, knowledge and confidence to respond to future opportunities successfully.',
    benefits: [
      { title: 'Higher Win Rates', description: 'Well-structured, compelling proposals.', icon: 'Award' },
      { title: 'Stronger Compliance', description: 'Meet all tender and procurement requirements.', icon: 'CheckCheck' },
      { title: 'Greater Opportunities', description: 'Access public and private sector contracts.', icon: 'TrendingUp' },
      { title: 'Build Internal Skills', description: 'Practical training to improve bid capability.', icon: 'BookOpen' },
    ],
    includes: [
      { title: 'Bid Strategy and Planning', description: 'Understand requirements, develop win strategies and create response plans.', icon: 'FileText' },
      { title: 'Content Development', description: 'Write clear, compelling and evidence-based responses aligned to evaluation criteria.', icon: 'Edit3' },
      { title: 'Review and Quality Assurance', description: 'Review, refine and ensure compliance with tender requirements.', icon: 'CheckCircle' },
      { title: 'Social Value and Impact', description: 'Help you demonstrate social value, impact and wider benefits.', icon: 'Heart' },
      { title: 'Training and Capability Development', description: 'Practical training for your team on bid writing, tender processes and best practice.', icon: 'GraduationCap' },
      { title: 'Ongoing Support', description: 'Provide advisory support throughout the bid process and beyond.', icon: 'MessageSquare' },
    ],
    approachSteps: [
      { num: '01', title: 'Understand', description: 'Review the opportunity, requirements and criteria.' },
      { num: '02', title: 'Plan', description: 'Develop bid strategy and response plan.' },
      { num: '03', title: 'Develop', description: 'Write, review and quality assure content.' },
      { num: '04', title: 'Support', description: 'Finalise submission and build team capability.' },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-crm-dynamics',
    title: 'Microsoft Dynamics 365 CRM Implementation',
    subtitle: 'How HTB Consult supported a community healthcare organisation to implement Microsoft Dynamics 365, improve operational efficiency and enhance service delivery.',
    clientType: 'Community healthcare provider',
    sector: 'Healthcare & Social Care',
    serviceArea: 'Digital Transformation, Process Improvement',
    duration: '6 months',
    role: 'Business Analysis & Delivery Support',
    challenge: 'The organisation was relying on manual processes and multiple spreadsheets to manage service users, referrals and day-to-day operations. This led to duplicated work, limited visibility and challenges in reporting and compliance.',
    approach: 'HTB Consult carried out a detailed analysis of existing processes, engaged key stakeholders and designed a solution using Microsoft Dynamics 365. We supported requirements gathering, configuration, data migration, system integration, user acceptance testing and staff training.',
    process: [
      '1. Understand: Analyse current processes and needs',
      '2. Design: Define the solution and requirements',
      '3. Implement: Configure, integrate and migrate data',
      '4. Test: User acceptance testing and training',
      '5. Improve: Support and continuous improvement',
    ],
    results: [
      { metric: '~30%', label: 'Reduction in manual workload' },
      { metric: 'Improved', label: 'Visibility and reporting' },
      { metric: 'Better', label: 'Service user management' },
      { metric: 'Stronger', label: 'Compliance and governance' },
    ],
    quote: {
      text: 'HTB Consult brought clarity, structure and practical solutions to a complex project. Their approach helped us deliver real improvements for our team and the people we support.',
      author: 'Client Representative, Community Healthcare Provider',
    },
    technologies: ['Microsoft Dynamics 365', 'Power Platform', 'Data Integration'],
    image: VISUAL_ASSETS.crmHealthcare,
  },
  {
    id: 'case-salesforce-chatbot',
    title: 'Salesforce Optimisation and Chatbot Enhancement',
    subtitle: 'Worked with a property and construction business to optimise Salesforce CRM and improve customer engagement through a chatbot solution.',
    clientType: 'Property and construction enterprise',
    sector: 'Private Sector',
    serviceArea: 'Business Analysis, Digital Transformation',
    duration: '4 months',
    role: 'Lead Business Analyst',
    challenge: 'Fragmented lead capture across regional offices resulted in slow enquiry response times and lost customer touchpoints during peak periods.',
    approach: 'Mapped customer journeys from initial digital enquiry to contract completion, rationalised CRM lead stages, and integrated an automated chatbot to qualify customer enquiries.',
    process: [
      '1. Journey Mapping & Pain Point Identification',
      '2. Salesforce Schema & Pipeline Redesign',
      '3. Chatbot Flow Design & Integration',
      '4. Team Training & Go-Live Support',
    ],
    results: [
      { metric: '+45%', label: 'Faster first-response time' },
      { metric: 'Seamless', label: 'Chatbot-to-agent lead qualification' },
      { metric: 'Enhanced', label: 'Customer engagement metrics' },
    ],
    quote: {
      text: 'The clarity HTB Consult brought to our customer pipeline unlocked immediate operational efficiency across all our sales teams.',
      author: 'Operations Director, Construction Group',
    },
    technologies: ['Salesforce CRM', 'Conversational AI Chatbot', 'Webhooks API'],
    image: VISUAL_ASSETS.digitalCloud,
  },
  {
    id: 'case-hr-cloud',
    title: 'HR Cloud Migration',
    subtitle: 'Supported a UK-based organisation with HR system migration, data mapping, integration and user acceptance testing.',
    clientType: 'National professional services firm',
    sector: 'Private Sector',
    serviceArea: 'Business Analysis, System Integration',
    duration: '5 months',
    role: 'Systems Integration & UAT Consultant',
    challenge: 'A legacy on-premises HR system caused severe data silos, compliance audit vulnerabilities, and slow employee onboarding.',
    approach: 'Executed comprehensive data field mapping, cleaned historical records, architected secure data pipelines to the new cloud HR platform, and coordinated rigorous user acceptance testing.',
    process: [
      '1. Data Audit & Legacy Schema Extraction',
      '2. Cloud Target Mapping & Transformation Rules',
      '3. Multi-Phase Migration & Validation',
      '4. UAT Scenarios & Staff Onboarding',
    ],
    results: [
      { metric: '100%', label: 'Compliant data transfer' },
      { metric: 'Zero', label: 'Disruption to payroll operations' },
      { metric: 'Unified', label: 'Employee self-service records' },
    ],
    quote: {
      text: 'A seamless migration delivered with zero downtime and thorough user training across all our departments.',
      author: 'Head of People Operations',
    },
    technologies: ['Cloud HRIS', 'Automated ETL Pipelines', 'SSO Security'],
    image: VISUAL_ASSETS.projectRoadmap,
  },
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'insight-working-mvp',
    title: 'From Business Idea to a Working MVP',
    slug: 'from-business-idea-to-working-mvp',
    seoTitle: 'From Business Idea to a Working MVP',
    metaDescription: 'A practical guide to validating demand, defining MVP scope, writing requirements and testing a working product with real users.',
    primaryKeyword: 'Building a minimum viable product',
    shareImage: VISUAL_ASSETS.insightsConsultationAiGenerated,
    shareImageAlt: 'Consultant discussing business plans with a client in an office meeting.',
    category: 'Digital Transformation & Software Solutions',
    readTime: '7 min read',
    excerpt: 'A practical founder’s guide to validating an idea, defining the right product and delivering a solution people can actually use.',
    content: INSIGHT_ARTICLE_CONTENT['insight-working-mvp'],
    author: {
      name: 'Oluwasegun Ajibola',
      role: 'Founder & Managing Director, HTB Consult',
      bio: 'A business strategy, business analysis and digital transformation professional with multidisciplinary expertise in process improvement, change management, software solutions and digital product development.',
    },
    keyTakeaway: 'An MVP is the smallest reliable, usable product that tests a defined value proposition—not a rushed or incomplete version of the idea.',
    relatedTopics: ['Business Analysis', 'MVP', 'Product Development', 'Digital Transformation', 'Agile'],
    internalLinks: [
      { label: 'Business Analysis & Requirements', href: '/services#service-analysis' },
      { label: 'Digital Transformation & Software Solutions', href: '/services#service-transformation' },
      { label: 'Product, Project & Delivery Management', href: '/services#service-delivery' },
    ],
  },
  {
    id: 'insight-idea-to-execution',
    title: 'From Idea to Execution: A Practical Framework for Entrepreneurs',
    slug: 'from-idea-to-execution-entrepreneurs',
    seoTitle: 'From Idea to Execution: A Practical Framework for Entrepreneurs',
    metaDescription: 'Discover six practical steps to validate your business idea, develop a clear strategy, define requirements and execute for sustainable growth.',
    primaryKeyword: 'From idea to execution',
    shareImage: VISUAL_ASSETS.insightsTeamAiGenerated,
    shareImageAlt: 'Business consultant reviewing performance charts with colleagues during a planning meeting.',
    category: 'Business Strategy & Growth',
    readTime: '8–10 min read',
    excerpt: 'A six-stage framework to understand the problem, validate an opportunity, set strategy, define requirements and execute for sustainable growth.',
    content: INSIGHT_ARTICLE_CONTENT['insight-idea-to-execution'],
    author: {
      name: 'Oluwasegun Ajibola',
      role: 'Founder & Managing Director, HTB Consult',
      bio: 'A business strategy, business analysis and digital transformation professional with multidisciplinary expertise in process improvement, change management, software solutions and digital product development.',
    },
    keyTakeaway: 'A viable idea moves from concept to sustainable outcomes through clear problem definition, opportunity validation, strategy, requirements, phased execution and continuous improvement.',
    relatedTopics: ['Strategy', 'Entrepreneurship', 'Execution'],
    internalLinks: [
      { label: 'Business Strategy & Growth', href: '/services#service-strategy' },
      { label: 'Business Analysis & Requirements', href: '/services#service-analysis' },
      { label: 'Product, Project & Delivery Management', href: '/services#service-delivery' },
    ],
  },
  {
    id: 'insight-process-mapping',
    title: 'How Process Mapping Helps You Find Real Opportunities for Improvement',
    slug: 'how-process-mapping-improves-business-processes',
    seoTitle: 'How Process Mapping Reveals Opportunities for Business Improvement',
    metaDescription: 'Learn how process mapping can reveal delays, duplicated work, unclear ownership and practical opportunities to improve business performance.',
    primaryKeyword: 'Process mapping for business improvement',
    shareImage: VISUAL_ASSETS.insightsTeamAiGenerated,
    shareImageAlt: 'Business consultant reviewing performance charts with colleagues during a planning meeting.',
    category: 'Process Improvement & Automation',
    readTime: '8 min read',
    excerpt: 'A practical guide to making work visible, uncovering process friction and prioritising changes that create measurable value.',
    content: INSIGHT_ARTICLE_CONTENT['insight-process-mapping'],
    author: {
      name: 'Oluwasegun Ajibola',
      role: 'Founder & Managing Director, HTB Consult',
      bio: 'A business strategy, business analysis and digital transformation professional with multidisciplinary expertise in process improvement, change management, software solutions and digital product development.',
    },
    keyTakeaway: 'Map how work actually happens, then prioritise evidence-led improvements before choosing technology.',
    relatedTopics: ['AS-IS vs TO-BE', 'Workflow Optimisation', 'Efficiency'],
    internalLinks: [
      { label: 'Business Analysis & Requirements', href: '/services#service-analysis' },
      { label: 'Process Improvement & Automation', href: '/services#service-process' },
      { label: 'Digital Transformation & Software Solutions', href: '/services#service-transformation' },
    ],
  },
  {
    id: 'insight-digital-transformation-smes',
    title: 'What Digital Transformation Really Means for Small and Growing Businesses',
    slug: 'digital-transformation-small-growing-businesses',
    seoTitle: 'Digital Transformation for Small and Growing Businesses',
    metaDescription: 'Discover what digital transformation really means for small businesses, from process improvement and automation to better customer experiences.',
    primaryKeyword: 'Digital transformation for small businesses',
    shareImage: VISUAL_ASSETS.insightsConsultationAiGenerated,
    shareImageAlt: 'Consultant discussing business plans with a client in an office meeting.',
    category: 'Digital Transformation & Software Solutions',
    readTime: '8 min read',
    excerpt: 'A practical guide to using process improvement and suitable technology to make growing businesses more efficient and responsive.',
    content: INSIGHT_ARTICLE_CONTENT['insight-digital-transformation-smes'],
    author: {
      name: 'Oluwasegun Ajibola',
      role: 'Founder & Managing Director, HTB Consult',
      bio: 'A business strategy, business analysis and digital transformation professional with multidisciplinary expertise in process improvement, change management, software solutions and digital product development.',
    },
    keyTakeaway: 'Judge digital transformation by business outcomes, not the number of tools introduced.',
    relatedTopics: ['SMEs', 'Cloud Tech', 'Modernisation'],
    internalLinks: [
      { label: 'Business Analysis & Requirements', href: '/services#service-analysis' },
      { label: 'Digital Transformation & Software Solutions', href: '/services#service-transformation' },
      { label: 'Process Improvement & Automation', href: '/services#service-process' },
    ],
  },
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'course-ba-foundations',
    title: 'Business Analysis Foundations',
    description: 'Learn the core skills, tools and techniques to work effectively as a business analyst in contemporary organisations.',
    level: 'Beginner',
    modules: 6,
  },
  {
    id: 'course-requirements-engineering',
    title: 'Requirements Engineering',
    description: 'Understand how to capture, analyse and document clear and actionable requirements that prevent scope creep.',
    level: 'Intermediate',
    modules: 8,
  },
  {
    id: 'course-agile-ba',
    title: 'Agile Business Analysis',
    description: 'Apply agile principles and user story practices to deliver high value in fast-paced product environments.',
    level: 'Intermediate',
    modules: 6,
  },
  {
    id: 'course-digital-transformation',
    title: 'Digital Transformation for Practitioners',
    description: 'Gain practical knowledge to lead, govern and support digital transformation initiatives within your organisation.',
    level: 'Intermediate',
    modules: 8,
  },
];

export const FAQS = [
  {
    question: 'What types of projects do you support?',
    answer: 'We support organisations across business strategy, detailed business analysis & requirements engineering, digital transformation & software design, process improvement & automation, end-to-end product/project delivery, and public/private tender bid writing and team training.',
  },
  {
    question: 'Do you work with both public and private sectors?',
    answer: 'Yes. HTB Consult works across the public sector, healthcare & social care, private commercial organisations, and third-sector charitable organisations across the United Kingdom.',
  },
  {
    question: 'How quickly can we start a project?',
    answer: 'We typically begin with an initial 30-minute discovery consultation within 1–2 working days. Once scope and objectives are agreed, discovery workshops can commence within one week.',
  },
  {
    question: 'Do you offer an initial consultation?',
    answer: 'Yes, we provide an initial 30-minute consultation free of charge via Microsoft Teams to discuss your challenge, explore practical options, and see how HTB Consult can best support you.',
  },
];
