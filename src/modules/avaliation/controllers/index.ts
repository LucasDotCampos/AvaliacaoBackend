import { Request, Response } from "express";
import AvaliationService from "../services";

class AvaliationController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { sector, device, avaliation, company } = request.body;

      const avaliationService = new AvaliationService();

      const createAvaliation = avaliationService.create({
        sector,
        device,
        avaliation,
        company,
      });

      return response.status(200).json(createAvaliation);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}

export default AvaliationController;
