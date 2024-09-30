'use client';

import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Form from './Form';
import { deleteFact } from '../api/facts';

function FactCard({ fact, update, value }) {
  const [localFact, setLocalFact] = useState(fact);
  const [editMode, setEditMode] = useState(false);

  const deleteItem = () => {
    deleteFact(fact.firebaseKey, value).then(() => update());
  };

  const handleFormSubmit = (updatedFact) => {
    setLocalFact(updatedFact);
    update();
  };

  return (
    <Card>
      <Card.Body>
        {editMode ? (
          <>
            <p>edit mode</p>
            <Form obj={localFact} func={handleFormSubmit} />
            <div>
              <button type="button" className="btn btn-success" onClick={() => setEditMode(false)}>
                EXIT edit mode
              </button>
            </div>
          </>
        ) : (
          <>
            {localFact.text}
            <button type="button" className="btn btn-secondary" onClick={() => setEditMode(true)}>
              EDIT
            </button>
            <button type="button" className="btn btn-danger" onClick={deleteItem}>
              DELETE
            </button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

FactCard.propTypes = {
  fact: PropTypes.shape({
    text: PropTypes.string.isRequired,
    firebaseKey: PropTypes.string,
  }).isRequired,
  update: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FactCard;
