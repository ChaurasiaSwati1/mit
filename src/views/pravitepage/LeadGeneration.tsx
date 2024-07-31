import React from 'react';
import ServiceBannerWithTextN from '../../components/Core/ServiceBannerWithTextN';
import DeliveringHQDL from '../../components/ServiceDetails/DeliveringHQDL';
import AuditSection from '../../components/ServiceDetails/AuditSection';
import ClientSection from '../../components/ServiceDetails/ClientSection';
import LinkSection from '../../components/ServiceDetails/LinkSection';
import { Helmet } from 'react-helmet';

const LeadGeneration = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Mithila IT" />
                <meta property="og:url" content="https://mithilait.com/lead-generation" />
                <meta
                    property="og:title"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta
                    property="og:description"
                    content="Lead generation: where creativity meets strategy to ignite business opportunities."
                />
                <meta property="og:image" content="/logo512.png" />
            </Helmet>
            <ServiceBannerWithTextN
                title="Boost your sales through precision lead generation with Mithila IT"
                subTitle={`We have the expertise to pinpoint your ideal markets and optimise your sales 
                    process in alignment with your company’s objectives. Contact our team today to 
                    learn more. Specialising in effective lead generation strategies tailored for your 
                    business, we promise a steady flow of high-quality leads with high conversion rates.`}
                socialText={['Google', 'Instagram', 'Facebook', 'LinkedIn', 'Twitter']}
            />
            <DeliveringHQDL />
            <LinkSection
                descriptionText={`Mithila IT is a leading name in the world of digital customer and lead 
                generation. With Mithila IT, you’ll witness a rapid influx of leads and customers, which 
                will help you achieve your sales goals.`}
                titleText="Let's Link Up"
                bgImg="/images/link-img.png"
                bgImgAlt="Lead Generation"
                dirText="row"
                className="bg-white animation"
                imgAnime="fade-left"
                textAnime="fade-right"
            />
            <ClientSection />
            <AuditSection />
            {/* <HomeAbout />
            <HomeDemo /> */}
        </>
    );
};

export default LeadGeneration;
