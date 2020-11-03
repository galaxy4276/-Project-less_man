const fileInput = document.querySelector('input.show-file');
const upload = document.querySelector('.upload-file');


const getFileName = (list) => {
  let res = [];
  for (const image of list) {
    res.push(image.name);
  }

  return res;
} 


upload.addEventListener('change', (e) => {
  const fileList = e.target.files;
  fileInput.value = getFileName(fileList).join(', ');
});