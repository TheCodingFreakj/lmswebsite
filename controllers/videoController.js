require("dotenv").config();
const formidable = require("formidable");
const { cloudinary } = require("../cloudinary");
exports.uploadVideo = async (req, res) => {
  // /https://www.udemy.com/course/build-an-e-learning-website-using-react-and-redux/
  //https://github.com/Joey-z-rp/LMS/blob/master/src/server/api/courses.ts
  //https://cloudinary.com/documentation/node_image_and_video_upload
  //https://api.video/blog/video-trends/building-a-video-upload-demo-with-node-js-and-api-video
  try {
    console.log(req.files);
    const file = req.files.videouploaded;

    const uploadres = await cloudinary.uploader.upload(file.tempFilePath, {
      upload_preset: "my_video_set_up",
    });
    console.log(uploadres);

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      {
        resource_type: "video",
        public_id: "myfolder/mysubfolder/dog_closeup",
        chunk_size: 6000000,
        eager: [
          { width: 300, height: 300, crop: "pad", audio_codec: "none" },
          {
            width: 160,
            height: 100,
            crop: "crop",
            gravity: "south",
            audio_codec: "none",
          },
        ],
        eager_async: true,
        eager_notification_url: "http://localhost:8080/notify_endpoint",
      },
      function (error, result) {
        console.log(result, error);
      }
    );

    //dh30ib2eg
    return res.status(200).send({
      message: "videoupl",
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send("the request done is falsy..try again with right credentials");
  }
};
