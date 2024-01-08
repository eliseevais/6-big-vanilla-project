export type StreetType = {
  title: string;
}

export type AddressTtype = {
  number?: number;
  street: StreetType;
}

export type HouseType = {
  id?: number;
  buildedAt: number;
  repaired: boolean;
  address: AddressTtype;
} 

export type GovernmentBuildingType = {
  type: "HOSPITAL" | "FIRE-STATION";
  budget: number;
  staffCount: number;
  address: AddressTtype;
}

export type CityType = {
  title: string;
  houses: Array<HouseType>;
  governmentBuildings: Array<GovernmentBuildingType>;
  citizensNumber: number;
}