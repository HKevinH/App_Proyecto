import {useCallback} from 'react';
import {useQuery, queryCache} from 'react-query';
import { PlantContext } from '@contexts/PlantsContexts';
import apiFetch from '@storage/apifetch';

const GET_PLANTS = 'GET_PLANTS';

export default function usePlants({plantsId}) {
  async function fetchPlant() {
    const response = await fetch(`https://my-json-server.typicode.com/Asmadeuxx/api/plants/${plantsId}`);
    const json = await response.json();
    return json;
  }
  return useQuery([GET_PLANTS, plantsId], fetchPlant);
}

export function useInvalidatePlants({plantsId}) {
  const invalidateCache = useCallback(
    function() {
      queryCache.invalidateQueries([GET_PLANTS, plantsId]);
    },
    [plantsId],
  );
  return invalidateCache;
}
