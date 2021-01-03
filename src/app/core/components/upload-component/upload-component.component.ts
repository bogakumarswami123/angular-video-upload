import { Component, OnInit } from "@angular/core";
import { VideoUploadService } from "../../services/upload-service/video-upload.service";

@Component({
  selector: "app-upload-component",
  templateUrl: "./upload-component.component.html",
  styleUrls: ["./upload-component.component.scss"]
})
export class UploadComponentComponent implements OnInit {
  constructor(private _videoUploadService: VideoUploadService) {}
  videoUrl = null;
  uploadedVideoPer = null;

  ngOnInit(): void {}
  openFileSelect(id) {
    document.getElementById(id).click();
  }
  handleVideoUpload(event) {
    if (event.target.files && event.target.files[0]) {
      var file = event.target.files[0];
      this._videoUploadService.uploadFile(
        file,
        "input_folder",
        (url, uploadErr) => {
          if (url) {
            this.videoUrl = url;
          } else if (uploadErr) {
            console.log(uploadErr);
          }
        }
      );
      this._videoUploadService.getCurrentUpload().subscribe((res: any) => {
        if (res.totalSize !== null) {
          var totalUploadedPer = (res.uploadedSize / res.totalSize) * 100;
          this.uploadedVideoPer = `width:${totalUploadedPer}%`;
        } else {
          this.uploadedVideoPer = null;
        }
      });
    } else {
      console.log("Video is already uploaded.");
    }
  }
}
