import { Request, Response } from "express";
import AvaliationService from "../services";

class AvaliationController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { sector, device, avaliation, company } = request.body;

      if (sector === null || device === null || company === null) {
        return response.status(422);
      } else {
        const avaliationService = new AvaliationService();

        const createAvaliation = await avaliationService.create({
          sector,
          device,
          avaliation,
          company,
        });

        return response.status(200).json(createAvaliation);
      }
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  public async getBySector(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { company, sector } = request.params;

      const avaliationService = new AvaliationService();

      const search = await avaliationService.getBySector(company, sector);

      return response.status(200).json(search);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  public async getAllAvaliation(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const avaliationService = new AvaliationService();
      const search = await avaliationService.getAllAvaliation();
      return response.status(200).json(search);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
  public async getByAvaliation(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { company, sector, avaliation } = request.params;

      const avaliationService = new AvaliationService();

      const search = await avaliationService.getByAvaliation(
        company,
        sector,
        avaliation
      );

      return response.status(200).json(search);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}

export default AvaliationController;
