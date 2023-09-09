import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import About from "./components/Section/About";
import WhyChooseUs from "./components/Section/AdvertisedOn";
import CallToAction from "./components/Section/CallToAction";
import Footer from "./components/Footer";
import CustomerReview from "./components/CustomerReview";
import ServiceDetail from "./components/Section/ServiceDetail";
import AdvertisedOn from "./components/Section/AdvertisedOn";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const thisNumber = 1;
  const title = "Healthy Body, Healthy Mind";
  const message =
    "Unlock your true potential. Our Trainers will be with you every step of the way to ensure you reach your best version you have in mind.";
  return (
    <main
      className={`flex flex-col justify-center items-center w-full m-0   ${inter.className}`}
    >
      <Head>
        <title>East Star - Personal Trainer</title>
        <meta name="description" content="Personal Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={title} message={message} />
      <About />
      <AdvertisedOn />
      <ServiceDetail />
      <CustomerReview />
      <CallToAction />
      <Footer />
    </main>
  );
}
