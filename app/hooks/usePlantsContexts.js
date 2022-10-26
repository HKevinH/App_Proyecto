import {useContext} from 'react';
import PlantContext from '@contexts/PlantsContexts';

export default function usePlantsContexts() {
  return useContext(PlantContext);
}