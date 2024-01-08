import {CityType, GovernmentBuildingType} from "../02/02_02";

export function demolishHousesOnTheStreet (city: CityType, street: string) {
  city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, number: number) {
  return buildings.filter(b => b.staffCount > number)
}