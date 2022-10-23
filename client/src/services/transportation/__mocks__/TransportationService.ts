import Transportations from '../../../domain/Transportation.data';

const TransportationService = {
  listAll: jest.fn().mockResolvedValue(Object.values(Transportations)),
};

export default TransportationService;
