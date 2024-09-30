const dbUrl = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

const postFact = async (obj, val) => {
  const post = await fetch(`${dbUrl}/response${val}.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const response = post.json();
  return response;
};

const updateFact = async (payload, val) => {
  const patch = await fetch(`${dbUrl}/response${val}/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const response = patch.json();
  return response;
};

const readFacts = async (userId, val) => {
  const read = await fetch(`${dbUrl}/response${val}.json?orderBy="userId"&equalTo="${userId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  const response = read.json();
  return response;
};
const deleteFact = async (firebaseKey, val) => {
  const del = await fetch(`${dbUrl}/response${val}/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = del.json();
  return response;
};

export { postFact, updateFact, readFacts, deleteFact };
