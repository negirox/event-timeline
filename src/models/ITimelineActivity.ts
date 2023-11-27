// Represents attributes of timeline activity
export interface ITimelineActivity {
    id: number;
    activityTitle: string;
    activityLink: ActivityLink;
    acivityDate: Date;
    activityPictureUrl: ActivityLink;
    activityDescription: string;
}
export interface ActivityLink {
    Description: string
    Url: string
}
export interface ActivityPicture {
    fileName: string
}