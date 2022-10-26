import {useCallback} from 'react';
import {useQuery, queryCache} from 'react-query';
import { PlantContext } from '@contexts/PlantsContexts';
import apiFetch from '@storage/apifetch';

const GET_cATEGORY = 'GET_cATEGORY';

export default function useCategory() {
  async function fetchPlant() {
    const response = await fetch('https://633f082a83f50e9ba3be64ae.mockapi.io/api/v1/category');
    const json = await response.json();
    return json;
  }
  return useQuery([GET_cATEGORY, plantsId], fetchPlant);
}

export function useInvalidatePlants({plantsId}) {
  const invalidateCache = useCallback(
    function() {
      queryCache.invalidateQueries([GET_BOOK, plantsId]);
    },
    [plantsId],
  );
  return invalidateCache;
}
