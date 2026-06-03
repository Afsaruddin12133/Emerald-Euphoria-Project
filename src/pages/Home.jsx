import { PageWrapper } from '@/components/shared/PageWrapper';
import HeroSection from './home/HeroSection';
import RecentWinsSection from './home/RecentWinsSection';
import ThrillSection from './home/ThrillSection';
import ChooseUsSection from './home/ChooseUsSection';
import TrustedPlatformsSection from './home/TrustedPlatformsSection';
import HowToPlaySection from './home/HowToPlaySection';
import TestimonialSection from './home/TestimonialSection';
import EarnRewardsSection from './home/EarnRewardsSection';
import JoinUsSection from './home/JoinUsSection';
import FaqSection from './home/FaqSection';

export default function Home() {
    return (
        <PageWrapper>
            <HeroSection />
            <RecentWinsSection />
            <ThrillSection />
            <TrustedPlatformsSection />
            <ChooseUsSection />
            <HowToPlaySection />
            <TestimonialSection />
            <EarnRewardsSection />
            <FaqSection />
            <JoinUsSection />
        </PageWrapper>
    )
}
