import { useEffect, useState } from 'react';
import { getCountries } from '../service/countryApi';
import Container from '../components/Container/Container';
import CountryList from '../components/CountryList/CountryList';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await getCountries();
      setCountries(res);
    }
    getData();
  }, []);

  return (
    <Section>
      <Container>
        <Header />
        <Heading title="Home" bottom />
        {countries.length && <CountryList list={countries} />}
      </Container>
    </Section>
  );
};
export default Home;
