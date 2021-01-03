import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
declare var AWS: any;

@Injectable({
  providedIn: "root"
})
export class VideoUploadService {
  awsCredentials = {
    accessKeyId: "accessKeyId",
    region: "aws_region",
    secretAccessKey: "secretAccessKey"
  };
  bucketName = "aws_bucketname";

  public currentUpload: BehaviorSubject<any> = new BehaviorSubject({
    fileName: null,
    totalSize: 0,
    uploadedSize: 0
  });

  getCurrentUpload(): Observable<any> {
    return this.currentUpload;
  }
  isFileUploding = new BehaviorSubject(false);

  constructor() {}

  /**
   * @function uploadFiles
   * @description After File Upload
   * @param files
   * @param folder
   * @param callback
   */
  public uploadFile(file: File, folder: string, callback) {
    this.postToS3Bucket(file, folder, (fileLink, uploadErr) => {
      this.currentUpload.next({
        fileName: null,
        totalSize: null,
        uploadedSize: null
      });
      if (uploadErr) {
        callback(null, uploadErr);
      } else {
        callback(fileLink, null);
      }
    });
  }

  /**
   * @function postToS3Bucket
   * @description Upload files to AWS Bucket
   * @param file
   * @param folder
   * @param callback
   */
  private postToS3Bucket(file: File, folder: string, callback) {
    AWS.config.update(this.awsCredentials);
    if (file) {
      // let key = `${folder}/${Date.now()}_${file.name}`;
      let key = `${folder}/${Date.now()}`;
      const s3 = new AWS.S3();
      const params = {
        Bucket: this.bucketName,
        Key: key,
        ContentType: file.type,
        Body: file,
        ACL: "public-read"
      };

      s3.putObject(params, (err, res) => {
        if (err) {
          console.log("Error uploading data: ", err);
        }
      });
      s3.upload(params)
        .on("httpUploadProgress", event => {
          this.currentUpload.next({
            fileName: file.name,
            totalSize: Number.parseInt(event.total),
            uploadedSize: Number.parseInt(event.loaded)
          });
        })
        .send((err, data) => {
          if (err) {
            console.log("There was an error uploading your file: ", err);
            callback(null, err);
            return false;
          }
          callback(data.Location, null);
          return true;
        });
    } else {
      console.log("Error in file upload : file not found");
      callback(null, "Error in file upload");
    }
  }
}
