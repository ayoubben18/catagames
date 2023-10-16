import { useQuery } from '@tanstack/react-query';
import APIClient from '../../api-clients';
import { Platform } from './Platform';

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn:
    new APIClient<Platform>('/platforms/lists/parents').getAll,
    staleTime:Infinity
});

export default usePlatforms
