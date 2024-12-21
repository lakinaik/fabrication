import React from 'react'
import Layout from '../../Layout/Layout'
import Slider from '../../components/Slider'
import HeroSection from '../../components/heroSection'
import StepSection from '../../components/StepSection'
import AboutSection from '../../components/AboutSection'
import ServicesSection from "../../components/ServicesSection"
import ContactSection from '../../components/ContactSection'
const Home = () => {
    return (
        <Layout>
            {/* <Slider /> */}
            <HeroSection />
            <StepSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />

        </Layout>
    )
}

export default Home