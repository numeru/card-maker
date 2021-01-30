class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.REACT_APP_UPLOAD_ID);
    const result = await fetch("https://api.cloudinary.com/v1_1/choi/upload", {
      method: "POST",
      body: data,
    });
    return await result.json();
  }
}

export default ImageUploader;
