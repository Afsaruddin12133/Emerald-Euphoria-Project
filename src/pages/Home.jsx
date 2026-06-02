import { PageWrapper } from '@/components/shared/PageWrapper';
import HeroSection from './home/HeroSection';
import RecentWinsSection from './home/RecentWinsSection';
import ThrillSection from './home/ThrillSection';

export default function Home() {
    return (
        <PageWrapper>
            <HeroSection />
            <RecentWinsSection />
            <ThrillSection />
        </PageWrapper>
    )
}
