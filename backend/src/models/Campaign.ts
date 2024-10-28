import mongoose, { Document, Schema } from 'mongoose';
import { IContact, ICoverImg, IFeedback, IVideo, ICampaign } from '../types/campaignTypes';

// export interface IFeedback {
//   user: string;
//   comment: string;
//   rating: number;
// }

// export interface IContact {
//   type: string;
//   value: string;
// }

// export interface ICoverImg {
//   public_id: string;
//   url: string;
//   resource_type: string;
// }

// export interface IVideo {
//   public_id: string;
//   url: string;
//   resource_type: string;
// }

// export interface ICampaign extends Document {
//   coverImg: ICoverImg[];
//   video: IVideo;
//   slug: string;
//   campaignName: string;
//   campaignTagline: string;
//   campaignBody: string;
//   target: number;
//   raised: number;
//   totalBackers: number;
//   equityOffered: number;
//   endDate: Date;
//   daysLeft: number;
//   category: string;
//   tags: string[];
//   feedback: IFeedback[];
//   contacts: IContact[];
//   creatorImg: string;
//   creatorName: string;
//   creatorEmail: string;
//   creatorAddress: string;
//   creatorMobile: string;
//   campaignType: string;
//   isFeatured: boolean;
//   isUrgent: boolean;
//   isTrending: boolean;
// }

const FeedbackSchema = new Schema<IFeedback>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
});

const ContactSchema = new Schema<IContact>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const CoverImgSchema = new Schema<ICoverImg>({
  public_id: String,
  url: String,
  resource_type: String,
});

const VideoSchema = new Schema<IVideo>({
  public_id: String,
  url: String,
  resource_type: String,
});

const CampaignSchema: Schema = new Schema(
  {
    coverImg: { type: [CoverImgSchema], required: true },
    video: { type: VideoSchema, required: false },
    slug: { type: String, required: true, lowercase: true },
    campaignName: { type: String, required: true },
    campaignTagline: { type: String, required: true },
    campaignBody: { type: String, required: true },
    target: { type: Number, required: true },
    raised: { type: Number, default: 0 },
    totalBackers: { type: Number, default: 0 },
    equityOffered: { type: Number, default: 0 },
    endDate: { type: Date, required: true },
    daysLeft: { type: Number },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    feedback: { type: [FeedbackSchema] },
    contacts: { type: [ContactSchema], required: true },
    creatorImg: { type: String },
    creatorName: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    creatorAddress: { type: String, required: true },
    creatorMobile: { type: String, required: true },
    campaignType: { type: String, required: true },
    isFeatured: { type: Boolean },
    isUrgent: { type: Boolean },
    isTrending: { type: Boolean },
  },
  { timestamps: true }
);

const Campaign = mongoose.model<ICampaign>('Campaign', CampaignSchema);
export default Campaign;