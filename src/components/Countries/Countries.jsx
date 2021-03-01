import { useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';
import { countriesList, countriesNames } from './constants';
import './Countries.css';

const Countries = ({ country, setCountry }) => {
  const countriesLabels = useMemo(() => {
    const labels = {};

    countriesList.forEach((code) => {
      labels[code] = { primary: code, secondary: countriesNames[code] };
    });

    return labels;
  }, []);

  return (
    <ReactFlagsSelect
      selectButtonClassName="flags-select-button"
      selected={country}
      countries={countriesList}
      customLabels={countriesLabels}
      showOptionLabel={false}
      showSecondarySelectedLabel={false}
      fullWidth={false}
      onSelect={setCountry}
    />
  );
};

Countries.propTypes = {
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
};

export default Countries;
