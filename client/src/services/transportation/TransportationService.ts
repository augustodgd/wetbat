import { AxiosResponse } from 'axios';
import Transportation from '../../domain/Transportation';
import Api from '../Api';

type ListAllTransportationsResponse = AxiosResponse<Transportation[]>;

const TransportationService = {
  async listAll(): Promise<Transportation[]> {
    const { data: transportations } = (await Api.get(
      '/transportation',
    )) as ListAllTransportationsResponse;

    return transportations;
  },
};

export default TransportationService;
