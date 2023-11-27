import { ActivityLink, ITimelineActivity } from '../../../../models/ITimelineActivity';
import {  IDropdownOption } from 'office-ui-fabric-react/';
export interface IEventState {
  showPanel: boolean;
  eventData: ITimelineActivity;  
  startSelectedHour: IDropdownOption ;
  startSelectedMin: IDropdownOption ;
  activityTitle: string;
  activityLink: ActivityLink;
  acivityDate: Date;
  activityPictureUrl: ActivityLink;
  activityDescription: string; 
  errorMessage?:string;
  hasError?:boolean;
  disableButton?: boolean;
  isSaving?:boolean;
  isDeleting?:boolean;
  displayDialog:boolean;  
  isloading:boolean;  
}
