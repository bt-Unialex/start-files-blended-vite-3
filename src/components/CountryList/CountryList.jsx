import { Link } from 'react-router-dom';
import Grid from '../../components/Grid/Grid';
import GridItem from '../../components/Grid/Grid';

const CountryList = ({ list }) => {
  return (
    <>
      <h2>CountryList</h2>
      <Grid>
        {list.map(country => (
          <GridItem key={country.id}>
            <Link>
              <img src={country.flag} alt={country.name} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default CountryList;
