export class Job {
    public title: string;
    public zip_code: string;
    public city: string;
    public thumbnail: string;
    public attachments: string [];
    public description: string;

  
    constructor(title: string,zip_code: string, city: string, thumbnail: string, attachments: string [], desc: string) {
      this.title = title;
      this.zip_code = zip_code;
      this.city = city;
      this.thumbnail = thumbnail;
      this.attachments = attachments;
      this.description = desc;
    }
  }