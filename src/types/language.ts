type language = {
  header: headerObject;
  sectionTitles: sectionTitleObject[];
  aboutSection: aboutSectionObject;
  experienceSection: experienceSectionObject;
  projectSection: projectSectionObject;
};

export type headerObject = {
  headerText: string;
  headerSubText: string;
};

export type sectionTitleObject = {
  title: string;
  slug: string;
};

export type aboutSectionObject = {
  imageURL: string;
  body: string[];
  technologiesTitle: string;
  technologies: technologyObject[];
};

export type technologyObject = {
  name: string;
  iconURL: string;
};

export type experienceSectionObject = {
  workExperience: experienceObject[];
  education: experienceObject[];
  titles: titlesObject;
};

export type experienceObject = {
  position?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  description: string;
  technologies?: string[];
  institution?: string;
  degree?: string;
};

export type titlesObject = {
  company: string;
  technologies: string;
};

export type projectSectionObject = {
  projects: projectObject[];
  buttonText: string;
};

export type projectObject = {
  title: string;
  description: string;
  imageURL: string;
  redirect?: string;
  technologies?: string[];
};

export default language;
