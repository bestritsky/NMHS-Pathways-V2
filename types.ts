import { LucideIcon } from 'lucide-react';

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProgramTier {
  title: string;
  duration: string;
  description: string;
  commitmentLevel: 'Low' | 'Medium' | 'High';
}

export enum ModalType {
  CLOSED = 'CLOSED',
  JOIN = 'JOIN',
}