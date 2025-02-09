import { FC, useState } from 'react';
import { Signin } from './Signin';
import { Signup } from './Signup';

export const Forms: FC = () => {
  const [isSigninFormActive, setIsSigninFormActive] = useState<boolean>(true);

  return (
    <div>
      {isSigninFormActive ? (
        <>
          <Signin onSubmit={console.log} />
          <button onClick={() => setIsSigninFormActive(false)}>Switch to Signup form</button>
        </>
      ) : (
        <>
          <Signup onSubmit={console.log} />
          <button onClick={() => setIsSigninFormActive(true)}>Switch to Signin form</button>
        </>
      )}
    </div>
  );
};
