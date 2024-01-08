import { title } from "process";
import { StudentType, student } from "../02/02";
import { GovernmentBuildingType, HouseType } from "../02/02_02";

export const sum = (a: number, b: number) => {
  return a + b;
};

const result = sum(sum(2, 3), sum(4, 7));

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: "JS",
  });
};

export function makeStudentActive(s: StudentType) {}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
  return s.adress.city.title === cityName;
};

export const addMoneyToBudget = (
  building: GovernmentBuildingType,
  budget: number
) => {
  building.budget += budget;
};

export const repairHouse = (house: HouseType) => {
  house.repaired = true;
};

export const toFireStaff = (
  govermentBuilding: GovernmentBuildingType,
  stuffCountToFire: number
) => {
  govermentBuilding.staffCount -= stuffCountToFire;
};

export const toHireStaff = (
  govermentBuilding: GovernmentBuildingType,
  stuffCountToHire: number
) => {
  govermentBuilding.staffCount += stuffCountToHire;
};

