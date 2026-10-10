import strategyMeeting from '../assets/images/stock/strategy-meeting.webp';
import trainingClassroom from '../assets/images/stock/training-classroom.webp';
import corporateMeetingRoom from '../assets/images/stock/corporate-meeting-room.webp';
import officeTeam from '../assets/images/stock/office-team.webp';
import businessWorkshop from '../assets/images/stock/business-workshop.webp';
import meetingRoom from '../assets/images/stock/meeting-room.webp';

export const VISUAL_ASSETS = {
  homeHero: strategyMeeting,
  aboutHero: businessWorkshop,
  servicesHero: corporateMeetingRoom,
  caseStudiesHero: officeTeam,
  insightsHero: meetingRoom,
  academyHero: trainingClassroom,
  contactHero: strategyMeeting,
  strategyWorkshop: strategyMeeting,
  digitalCloud: officeTeam,
  projectRoadmap: meetingRoom,
  crmHealthcare: corporateMeetingRoom,
} as const;
