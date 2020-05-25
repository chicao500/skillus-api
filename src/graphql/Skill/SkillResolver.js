import { skillModel } from "../../models/SkillModel";

export const skillResolver = {
  Query: {
    skills() {
      return skillModel.SkillModel.all();
    },
    skill(_, args) {
      return skillModel.SkillModel.get(args.id);
     },
  },
};
