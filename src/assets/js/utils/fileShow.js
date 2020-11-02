const fileInput = document.querySelector('input.show-file');
const upload = document.querySelector('.upload-file');


console.log('fileShow is on');

upload.addEventListener('change', (e) => {
  const fileList = e.target.files;

  console.log(fileList[0].name);
  fileInput.value = fileList[0].name;
});