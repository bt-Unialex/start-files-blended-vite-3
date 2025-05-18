// import Heading from './components/Heading/Heading';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SearchCountry from './pages/SearchCountry';
import Country from './pages/Country';

export const App = () => {
  return (
    <>
      {/* <Heading title="App" bottom /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
