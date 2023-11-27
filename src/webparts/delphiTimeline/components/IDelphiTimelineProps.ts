import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IDelphiTimelineProps {
  context: WebPartContext;
  description: string;
  listName: string;
  layout: string;
  showImage: boolean;
  showDescription: boolean;
  dateFormat: string;
  sortOrder: string;
}
