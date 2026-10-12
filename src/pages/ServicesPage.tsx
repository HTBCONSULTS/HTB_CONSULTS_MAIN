import React from 'react';
import { ServicesSection } from '../components/ServicesSection';

interface ServicesPageProps {
  activeServiceId: string;
  onSelectServiceForEnquiry: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = (props) => <ServicesSection {...props} />;
