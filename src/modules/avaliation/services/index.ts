import { dataSource } from "../../../shared/typeorm/connection";
import AvaliationEntity from "../entities";
import { IAvaliation } from "../models";

class AvaliationService {
  public async create({
    sector,
    device,
    avaliation,
    company,
  }: IAvaliation): Promise<AvaliationEntity> {
    const avaliationRepository =
      dataSource.manager.getRepository(AvaliationEntity);
    const createAvaliation = avaliationRepository.create({
      sector,
      device,
      avaliation,
      company,
    });
    dataSource.manager.save(createAvaliation);

    return createAvaliation;
  }
}

export default AvaliationService;
