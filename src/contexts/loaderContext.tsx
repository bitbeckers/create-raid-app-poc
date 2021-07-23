import React, { createContext, useContext, useState } from 'react';

type LoaderContextType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

export const LoaderContext = createContext<Partial<LoaderContextType>>({
  loading: false,
});

interface LoaderProps {
  children: any;
}

export const LoaderContextProvider: React.FC<LoaderProps> = ({
  children,
}: LoaderProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const { loading, setLoading } = useContext(LoaderContext);
  return { loading, setLoading };
};
