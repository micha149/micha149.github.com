import React from 'react';
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LogoLink from '../components/LogoLink';
import SkillCloud from '../components/ParallaxSkillCloud';
import Skill from '../components/Skill';
import { Image as Writing } from '../images/micha149-writing.svg';
import { Image as GithubLogo } from '../images/github.svg';
import { Image as TwitterLogo } from '../images/twitter.svg';
import { Image as XingLogo } from '../images/xing.svg';

const Home = () => (
    <Layout>
        <Helmet htmlAttributes={{lang: 'de'}}>
            <title>Michael van Engelshoven</title>
            <meta name="description" content="Homepage von Michael van Engelshoven, Frontend-Entwickler" />
        </Helmet>

        <header>
        <Hero className="min-h-screen">
            <h1>
                <span id="pageTitle" className="sr-only">micha149's website</span>
                <Writing aria-describedby="pageTitle" className="w-64 -rotate-6 dark:text-slate-200"/>
            </h1>
        </Hero>
        </header>

        <section className="flex flex-col md:flex-row gap-16 items-center justify-center my-32">
            <h2 className="sr-only">Über mich</h2>

            <div className="relative">
                <div className="absolute rounded-xl bg-slate-600 transform rotate-6 shadow-xl w-48 h-48" />
                <StaticImage
                    className="relative rounded-xl transform -rotate-2 w-48 h-48"
                    src="../images/micha149.jpg"
                    alt="Porträt von Michael van Engelshoven"
                    quality={90}
                    width={200}
                />
            </div>

                <p className="text-2xl font-display font-extralight text-center md:text-left max-w-prose">
                Hallo, mein Name ist <strong className="font-medium dark:font-normal text-pink-500 whitespace-nowrap">Michael van Engelshoven</strong> und
                ich bin <strong className="font-medium dark:font-normal text-pink-500">Frontend-Entwickler</strong> mit einem Faible für
                Javascript und React. Aktuell arbeite ich als Lead Developer
                bei <a className="text-sky-600 font-light dark:text-sky-500 hover:underline underline-offset-2 decoration-1" href="https://www.brainbits.net">brainbits</a> in Köln.
            </p>
        </section>

        <section className="max-w-screen-xl mx-auto">
            <h2 className="text-center font-display text-5xl font-light text-pink-500 mt-80 mb-40">Meine Kompetenzen</h2>
            <SkillCloud className="min-h-screen text-2xl md:text-4xl font-display font-light mb-80">
                <Skill weight={5}>Express</Skill>
                <Skill weight={10}>React</Skill>
                <Skill weight={9}>Git</Skill>
                <Skill weight={6}>RxJS</Skill>
                <Skill weight={5}>PHP</Skill>
                <Skill weight={9}>Tailwind CSS</Skill>
                <Skill weight={4}>Kubernetes</Skill>
                <Skill weight={3}>Kustomize</Skill>
                <Skill weight={7}>Testing Library</Skill>
                <Skill weight={9}>Jest</Skill>
                <Skill weight={10}>Javascript</Skill>
                <Skill weight={7}>Docker</Skill>
                <Skill weight={10}>HTML</Skill>
                <Skill weight={9}>GraphQL</Skill>
                <Skill weight={10}>CSS</Skill>
                <Skill weight={4}>WebGL</Skill>
                <Skill weight={6}>Three.js</Skill>
                <Skill weight={9}>REST</Skill>
                <Skill weight={3}>Helm</Skill>
                <Skill weight={5}>NodeRED</Skill>
                <Skill weight={4}>KNX</Skill>
                <Skill weight={5}>Symfony</Skill>
                <Skill weight={8}>Typescript</Skill>
                <Skill weight={7}>Node.js</Skill>
                <Skill weight={9}>Scrum</Skill>
                <Skill weight={7}>ESLint</Skill>
                <Skill weight={6}>Gatsby</Skill>
                <Skill weight={3}>Microservices</Skill>
                <Skill weight={5}>d3</Skill>
                <Skill weight={8}>SCSS</Skill>
            </SkillCloud>
        </section>

        <section>
            <h2 className="text-center font-display text-5xl font-light text-pink-500 mt-32 mb-32">Weitere Profile im Web</h2>
            <ul className="flex gap-8 justify-center mb-32">
                <li className="w-1/6 flex justify-center">
                    <LogoLink
                        description="Mein Github-Profil"
                        href="https://github.com/micha149"
                        logo={<GithubLogo />}
                    />
                </li>
                <li className="w-1/6 flex justify-center">
                    <LogoLink
                        description="Meine Tweets"
                        href="https://twitter.com/micha149"
                        logo={<TwitterLogo />}
                    />
                </li>
                <li className="w-1/6 flex justify-center">
                    <LogoLink
                        description="Mein Profil auf Xing"
                        href="https://www.xing.com/profile/Michael_vanEngelshoven"
                        logo={<XingLogo />}
                    />
                </li>
            </ul>
        </section>
    </Layout>
);

export default Home;
