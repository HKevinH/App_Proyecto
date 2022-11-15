import React, {useCallback, useMemo, createContext} from 'react';
import {useQuery, queryCache} from 'react-query';

const PlantContext = createContext();

export default PlantContext;

const GET_PLANTS = 'GET_PLANTS';

async function fetchData() {
  const response = await fetch('https://my-json-server.typicode.com/HkevinH/test/plants');
  const json = await response.json();
  return json;
}

export function PlantContextProvider({children}) {
  const {isSuccess, isLoading, data} = useQuery(GET_PLANTS, fetchData);

  const invalidatePlantListCache = useCallback(function() {
    queryCache.invalidateQueries(GET_PLANTS);
  }, []);

  const value = useMemo(
    () => ({
      isSuccess,
      isLoading,
      plants: data,
      invalidatePlantListCache,
    }),
    [isSuccess, isLoading, data, invalidatePlantListCache],
  );

  return (
    <PlantContext.Provider value={value}>{children}</PlantContext.Provider>
  );
}