const fs = require('fs');
const path = require('path');
const directoryPath = '/var/www/html/public/mern/frontend/public/images';
const sharp = require('sharp');

// Read the contents of the directory
fs.readdir(directoryPath, (err,files) => {

  if(err){
    console.error('Error reading directory:', err);
    return;
  }

  // Loop through each file in the directory
  files.forEach(file =>{

    let filePath = path.join(directoryPath,file);

    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      console.log(`Skipping directory ${file}`);
      return; // Skip processing directories
    }
    // Get the file extension name
    let fileExtension = path.extname(file);

    // Get Filename without extension
    let filename = file.replace(/\.[^.]*$/, '');

    //Check if the file extension is .webp
    if(fileExtension === '.webp'){

      // Use file stats to obtain file size
      let stats = fs.statSync(filePath);
      let fileSizeInBytes = stats.size;
      let fileSizeInKB = fileSizeInBytes / 1024;

      if(fileSizeInKB > 30){
        console.log(`${file} is more than 30KB`);
        changeImageReduceSize40(filePath,directoryPath,filename,file);
        return;
      }
      

      console.log(`Skipping ${file}`);
      return; //Skip processing this file
    }

    //Not Webp then perform format to WEBP
    else{
      changeImage(filePath,directoryPath,filename,file);
    }

  });

});


//Resize image using sharp and change format to webp & Delete old file
function changeImage(filePath,directoryPath,filename,file){
  sharp(filePath)
  .resize(640,510)
  .toFormat('webp')
  .toFile(path.join(directoryPath, `${filename}.webp`), (err, info) => {
    if (err) {
      console.error(`Error converting ${file} to webp:`, err);
    } else {
      console.log(`Successfully converted ${file} to webp`);
      fs.unlink(filePath, (err) => {

        if(err){
        console.error('Error deleting files',err);
        return;
        }

        console.log(`${filePath} deleted successfully`);
        
      });
    }
  });
}

function changeImageReduceSize40(filePath,directoryPath,filename,file){

  let newFilePath = '/var/www/html/public/mern/frontend/public/images/temp' ;
  let newFile = path.join(newFilePath, `${filename}.webp`);
  let oriFilePath = path.join(directoryPath, `${filename}.webp`);
 
  sharp(filePath)
  .resize(640,510)
  .toFormat('webp')
  .webp({quality:40})
  .toFile(path.join(newFilePath, `${filename}.webp`), (err, info) => {
    if (err) {
      console.error(`Error converting ${file} to webp:`, err);
    } else {
      console.log(`Reduce File Succesfully`);
      fs.unlink(filePath, (err) => {

        if(err){
        console.error('Error deleting files',err);
        return;
        }

        console.log(`${filePath} deleted successfully`);

        fs.rename(newFile, oriFilePath, (err) => {
          if (err) {
            console.error('Error moving file:', err);
            return;
          }
          console.log(`File moved from ${newFile} to ${oriFilePath}`);
          
        let stats = fs.statSync(oriFilePath);
        let fileSizeInBytes = stats.size;
        let fileSizeInKB = fileSizeInBytes / 1024;
        console.log(`${filePath} filesize : ${fileSizeInKB}`);

        if(fileSizeInKB > 30){
          console.log(`${file} is more than 30KB`);
          changeImageReduceSize20(filePath,directoryPath,filename,file);
          return;
        } 
        });



      });
    }
  });

}

function changeImageReduceSize20(filePath,directoryPath,filename,file){
  let newFilePath = '/var/www/html/public/mern/frontend/public/images/temp' ;
  let newFile = path.join(newFilePath, `${filename}.webp`);
  let oriFilePath = path.join(directoryPath, `${filename}.webp`);
  sharp(filePath)
  .resize(640,510)
  .toFormat('webp')
  .webp({quality:20})
  .toFile(path.join(newFilePath, `${filename}.webp`), (err, info) => {
    if (err) {
      console.error(`Error converting ${file} to webp:`, err);
    } else {
      console.log(`Successfully converted ${file} to webp`);
      fs.unlink(filePath, (err) => {

        if(err){
        console.error('Error deleting files',err);
        return;
        }

        console.log(`${filePath} deleted successfully`);

        fs.rename(newFile, oriFilePath, (err) => {
          if (err) {
            console.error('Error moving file:', err);
            return;
          }
          console.log(`File moved from ${newFile} to ${oriFilePath}`);
          
        let stats = fs.statSync(oriFilePath);
        let fileSizeInBytes = stats.size;
        let fileSizeInKB = fileSizeInBytes / 1024;
        console.log(`${filePath} filesize : ${fileSizeInKB}`);

        if(fileSizeInKB > 30){
          console.log(`${file} is more than 30KB`);
          changeImageReduceSize10(filePath,directoryPath,filename,file);
          return;
        } 
        });

      });
    }
  });

}

function changeImageReduceSize10(filePath,directoryPath,filename,file){

  let newFilePath = '/var/www/html/public/mern/frontend/public/images/temp' ;
  let newFile = path.join(newFilePath, `${filename}.webp`);
  let oriFilePath = path.join(directoryPath, `${filename}.webp`);
  sharp(filePath)
  .resize(640,510)
  .toFormat('webp')
  .webp({quality:10})
  .toFile(path.join(newFilePath, `${filename}.webp`), (err, info) => {
    if (err) {
      console.error(`Error converting ${file} to webp:`, err);
    } else {
      console.log(`Successfully converted ${file} to webp`);
      fs.unlink(filePath, (err) => {

        if(err){
        console.error('Error deleting files',err);
        return;
        }

        console.log(`${filePath} deleted successfully`);

        fs.rename(newFile, oriFilePath, (err) => {
          if (err) {
            console.error('Error moving file:', err);
            return;
          }
          console.log(`File moved from ${newFile} to ${oriFilePath}`);
          
        let stats = fs.statSync(oriFilePath);
        let fileSizeInBytes = stats.size;
        let fileSizeInKB = fileSizeInBytes / 1024;
        console.log(`${filePath} filesize : ${fileSizeInKB}`);

        if(fileSizeInKB > 30){
          console.log(`${file} is more than 30KB`);
          changeImageReduceSize5(filePath,directoryPath,filename,file);
          return;
        } 
        });

      });
    }
  });

}

function changeImageReduceSize5(filePath,directoryPath,filename,file){

  let newFilePath = '/var/www/html/public/mern/frontend/public/images/temp' ;
  let newFile = path.join(newFilePath, `${filename}.webp`);
  let oriFilePath = path.join(directoryPath, `${filename}.webp`);
  sharp(filePath)
  .resize(640,510)
  .toFormat('webp')
  .webp({quality:5})
  .toFile(path.join(newFilePath, `${filename}.webp`), (err, info) => {
    if (err) {
      console.error(`Error converting ${file} to webp:`, err);
    } else {
      console.log(`Successfully converted ${file} to webp`);
      fs.unlink(filePath, (err) => {

        if(err){
        console.error('Error deleting files',err);
        return;
        }

        console.log(`${filePath} deleted successfully`);

        fs.rename(newFile, oriFilePath, (err) => {
          if (err) {
            console.error('Error moving file:', err);
            return;
          }
          console.log(`File moved from ${newFile} to ${oriFilePath}`);
          
        let stats = fs.statSync(oriFilePath);
        let fileSizeInBytes = stats.size;
        let fileSizeInKB = fileSizeInBytes / 1024;
        console.log(`${filePath} filesize : ${fileSizeInKB}`);

        if(fileSizeInKB > 30){
          console.log(`${file} is more than 30KB`);
          changeImageReduceSize1(filePath,directoryPath,filename,file);
          return;
        } 
        });

      });
    }
  });
}

function changeImageReduceSize1(filePath,directoryPath,filename,file){

  let newFilePath = '/var/www/html/public/mern/frontend/public/images/temp' ;
  let newFile = path.join(newFilePath, `${filename}.webp`);
  let oriFilePath = path.join(directoryPath, `${filename}.webp`);
  sharp(filePath)
  .resize(640,510)
  .toFormat('webp')
  .webp({quality:1})
  .toFile(path.join(newFilePath, `${filename}.webp`), (err, info) => {
    if (err) {
      console.error(`Error converting ${file} to webp:`, err);
    } else {
      console.log(`Successfully converted ${file} to webp`);
      fs.unlink(filePath, (err) => {

        if(err){
        console.error('Error deleting files',err);
        return;
        }

        console.log(`${filePath} deleted successfully`);

        fs.rename(newFile, oriFilePath, (err) => {
          if (err) {
            console.error('Error moving file:', err);
            return;
          }
          console.log(`File moved from ${newFile} to ${oriFilePath}`);
          
        let stats = fs.statSync(oriFilePath);
        let fileSizeInBytes = stats.size;
        let fileSizeInKB = fileSizeInBytes / 1024;
        console.log(`${filePath} filesize : ${fileSizeInKB}`);

        });

      });
    }
  });


}
