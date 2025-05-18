import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';
import Header from '../components/Header/Header';
import CountryList from '../components/CountryList/CountryList';
import { useState } from 'react';
import { fetchByRegion } from '../service/countryApi';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);

  async function getQuary(value) {
    const res = await fetchByRegion(value);
    setCountries([...res]);
  }

  return (
    <Section>
      <Container>
        <Header />
        <Heading title="SearchCountry" bottom />
        <SearchForm onSubmit={getQuary} />
        {countries.length && <CountryList list={countries} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
