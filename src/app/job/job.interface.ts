 export interface Job {
  id: string;
  title: string;
  zip_code: string;
  city: string;
  thumbnail: string;
  attachments: string[];
  is_awarded: boolean;
  state: string;
  description: string;
  end_date: string;
  created_at: string;
}