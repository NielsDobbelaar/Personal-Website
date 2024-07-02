type language = {
  sectionTitles: sectionTitleObject[];
  aboutSection: aboutSectionObject;
};

type sectionTitleObject = {
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

export default language;
