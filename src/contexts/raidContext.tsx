import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getMembers, getRaids } from '../utils/requests';

// import { useInjectedProvider } from './injectedProviderContext';

export const RaidContext = createContext<{
  members?: any;
  raids?: any;
  getRaidById?: any;
  getMemberById?: any;
  state?: any;
  dispatch?: React.Dispatch<any>;
}>({});

interface RaidContextProps {
  children: React.ReactNode;
}

export const RaidContextProvider: React.FC<RaidContextProps> = ({
  children,
}: RaidContextProps) => {
  const [members, setMembers] = useState([]);
  const [raids, setRaids] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setRaids([]);
      setMembers([]);
    };
    getData();
  }, []);

  const getRaidById = (raidId: string) => {
    if (raids) {
      return raids.find((raid: any) => raid.id === raidId);
    }
    return null;
  };

  const getMemberById = (memberId: string) => {
    if (members) {
      return members.find((member: any) => member.id === memberId);
    }
    return null;
  };

  return (
    <RaidContext.Provider
      value={{
        members,
        raids,
        getRaidById,
        getMemberById,
      }}
    >
      {children}
    </RaidContext.Provider>
  );
};

export const useRaids = () => {
  const { members, raids, getRaidById, getMemberById } =
    useContext(RaidContext);
  return {
    members,
    raids,
    getRaidById,
    getMemberById,
  };
};
