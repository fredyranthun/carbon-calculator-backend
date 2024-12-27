import { Injectable } from '@nestjs/common';
import { VehicleDto } from './vehicles-footprint.dto';

@Injectable()
export class VehiclesFootprintService {
  averageMilesPerGallon = 24.8;
  efficiencyPassengerVehicle = 19.37; // lbs of CO2 per gallon
  nonCO2VehicleEmissionsRatio = 100 / 98.65; // ratio of non-CO2 emissions to CO2 emissions
  vehicleEfficiencyImprovement = 0.016; // improvement in fuel efficiency by performing regular maintenance

  calculateFootprintPerVehicle(
    milesPerYear: number,
    milesPerGallon: number,
    regularMaintenance: boolean,
  ): number {
    const result =
      (milesPerYear / milesPerGallon) *
      this.efficiencyPassengerVehicle *
      this.nonCO2VehicleEmissionsRatio;

    const maintenanceCoefficient = regularMaintenance
      ? 1
      : 1 + this.vehicleEfficiencyImprovement;

    return result * maintenanceCoefficient;
  }

  calculateFootprint(vehicles: VehicleDto[]): number {
    return vehicles.reduce((total, vehicle) => {
      return (
        total +
        this.calculateFootprintPerVehicle(
          vehicle.milesPerYear,
          vehicle.milesPerGallon,
          vehicle.regularMaintenance,
        )
      );
    }, 0);
  }
}
