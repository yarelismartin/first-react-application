/* eslint-disable react-hooks/exhaustive-deps */

'use client';

/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import FactCard from '@/components/Card';
import PropTypes from 'prop-types';
import { readFacts } from '../../../api/facts';

export default function ResponsePage({ params, searchParams }) {
  const [facts, setFacts] = useState([]);

  const getFacts = () => {
    readFacts(params.userId, searchParams.value).then(setFacts);
  };

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <div>
      <h1>
        {Object.values(facts).map((fact) => (
          <FactCard fact={fact} key={fact.firebaseKey} update={getFacts} value={searchParams.value} />
        ))}
      </h1>
    </div>
  );
}

ResponsePage.propTypes = {
  params: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
};
