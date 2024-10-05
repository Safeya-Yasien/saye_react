import {
  AboutSayee,
  CounterArea,
  Landing,
  OurEvents,
  HowItWorks,
  SupportCompanies,
  Testimonials,
} from "@/components/saye/homeComponents";

const Home = () => {
  return (
    <div>
      <Landing />
      <AboutSayee />
      <OurEvents />
      <CounterArea />
      <HowItWorks />
      <SupportCompanies />
      <Testimonials />
    </div>
  );
};

export default Home;
