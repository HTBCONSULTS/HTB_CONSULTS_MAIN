import strategyMeeting from '../assets/images/stock/strategy-meeting.webp';
import corporateMeetingRoom from '../assets/images/stock/corporate-meeting-room.webp';
import businessWorkshop from '../assets/images/stock/business-workshop.webp';
import meetingRoom from '../assets/images/stock/meeting-room.webp';
import practicalPartnerTeam from '../assets/images/stock/practical-partner-team.webp';
import userCaseStudyCrm from '../assets/images/user-provided/unknown-2-case-study-crm.webp';
import userCaseStudySalesforce from '../assets/images/user-provided/unknown-3-case-study-salesforce.webp';
import userCaseStudyHrCloud from '../assets/images/user-provided/unknown-4-case-study-hr-cloud.webp';
import userAcademyHero from '../assets/images/user-provided/unknown-5-academy-hero.webp';
import userCaseStudiesHero from '../assets/images/user-provided/unknown-6-case-studies-hero.webp';

export const VISUAL_ASSETS = {
  homeHero: strategyMeeting,
  aboutHero: businessWorkshop,
  servicesHero: corporateMeetingRoom,
  caseStudiesHero: userCaseStudiesHero,
  insightsHero: meetingRoom,
  academyHero: userAcademyHero,
  contactHero: strategyMeeting,
  practicalPartnerTeam,
  strategyWorkshop: strategyMeeting,
  digitalCloud: userCaseStudySalesforce,
  projectRoadmap: userCaseStudyHrCloud,
  crmHealthcare: userCaseStudyCrm,
} as const;
