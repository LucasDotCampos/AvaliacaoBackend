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

  public async getBySector(sector: string): Promise<AvaliationEntity[]> {
    const avaliationRepository =
      dataSource.manager.getRepository(AvaliationEntity);
    const search = avaliationRepository.find({
      where: {
        sector: sector,
      },
    });

    return search;
  }
  public async getAllAvaliation(): Promise<AvaliationEntity[]> {
    const avaliationRepository =
      dataSource.manager.getRepository(AvaliationEntity);
    const search = avaliationRepository.find();

    return search;
  }
}
export default AvaliationService;
