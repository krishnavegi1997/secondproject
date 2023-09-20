import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCountryDetailsByNameQuery } from '../../services/countriesApi';

function CountryDetails() {
  const { cname } = useParams();
  const { isLoading, data } = useGetCountryDetailsByNameQuery(cname);

  return (
    <div className='p-4'>
      <h4>{cname} CountryDetails</h4>
      {isLoading && <b>Loading....</b>}
      {!isLoading && (
        <ul>
          {data.map((d) => (
            <li key={d.name.common}>
              <div>
                <img src={d.flags.svg} alt="" width='100px' height='100px' />
                <span>{d.name.common}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountryDetails;
