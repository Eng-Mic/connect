// campaignTypes.ts

export interface IFeedback {
  user: string;
  comment: string;
  rating: number;
}

export interface IContact {
  type: string;
  value: string;
}

export interface ICoverImg {
  public_id: string;
  url: string;
  resource_type: string;
}

export interface IVideo {
  public_id: string;
  url: string;
  resource_type: string;
}

export interface ICampaign {
  _id: string;
  coverImg: ICoverImg[];
  video: IVideo;  // New field for video
  slug: string;
  campaignName: string;
  campaignTagline: string;
  campaignBody: string;
  target: number;
  raised: number;
  totalBackers: number;
  equityOffered: number;
  endDate: Date;
  daysLeft: number;
  category: string;
  tags: string[];
  feedback: IFeedback[];
  contacts: IContact[];
  creatorImg: string;
  creatorName: string;
  creatorEmail: string;
  creatorAddress: string;
  creatorMobile: string;
  campaignType: string;
  isFeatured: boolean;
  isUrgent: boolean;
  isTrending: boolean;
}