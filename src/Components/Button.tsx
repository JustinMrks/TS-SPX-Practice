import React from 'react';

type ButtonProps = {
  fetch: () => void;
  fetching: boolean;
};

const Button = ({ fetch, fetching }: ButtonProps) => {
  return (
    <div>
      {fetching ? (
        'Loading Items...'
      ) : (
        <button onClick={fetch}>Fetch Missions</button>
      )}
    </div>
  );
};

export default Button;
