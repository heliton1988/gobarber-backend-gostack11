interface ITemplateVariables {
  [key: string]: string | null;
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
